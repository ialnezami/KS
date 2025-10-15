import OpenAI from 'openai';

// Disable SSL verification in development only (for local testing)
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

async function getWeather(city: string): Promise<WeatherData | null> {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      console.error('WEATHER_API_KEY not configured');
      return null;
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=fr`
    );

    if (!response.ok) {
      console.error('Weather API error:', response.status);
      return null;
    }

    const data = await response.json();

    return {
      city: data.name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check if the last message is asking for weather
    const lastMessage = messages[messages.length - 1];
    const weatherRegex = /météo|weather|température|temp|climat/i;
    const cityRegex = /(?:à|a|pour|de|dans|en)\s+([A-Za-zÀ-ÿ\s-]+?)(?:\s|$|\?|,|\.)/i;
    
    let weatherData: WeatherData | null = null;
    let enhancedMessages = [...messages];

    if (weatherRegex.test(lastMessage.content)) {
      const cityMatch = lastMessage.content.match(cityRegex);
      if (cityMatch) {
        const city = cityMatch[1].trim();
        weatherData = await getWeather(city);
        
        if (weatherData) {
          // Add weather data to the context
          enhancedMessages = [
            ...messages,
            {
              role: 'system',
              content: `Informations météo actuelles pour ${weatherData.city}: 
                - Température: ${weatherData.temperature}°C
                - Conditions: ${weatherData.description}
                - Humidité: ${weatherData.humidity}%
                - Vent: ${weatherData.windSpeed} m/s
                
                Utilise ces informations pour répondre à la question de l'utilisateur de manière naturelle et conversationnelle.`,
            },
          ];
        }
      }
    }

    // Request the OpenAI API for the response based on the messages
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: enhancedMessages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
      max_tokens: 500,
    });

    // Create a readable stream from OpenAI response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content || '';
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    // Respond with the stream
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response('Error processing chat request', { status: 500 });
  }
}

