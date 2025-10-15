import { GoogleGenerativeAI } from '@google/generative-ai';

// Disable SSL verification in development only (for local testing)
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

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
    let systemContext = '';

    if (weatherRegex.test(lastMessage.content)) {
      const cityMatch = lastMessage.content.match(cityRegex);
      if (cityMatch) {
        const city = cityMatch[1].trim();
        weatherData = await getWeather(city);
        
        if (weatherData) {
          systemContext = `Informations météo actuelles pour ${weatherData.city}: 
- Température: ${weatherData.temperature}°C
- Conditions: ${weatherData.description}
- Humidité: ${weatherData.humidity}%
- Vent: ${weatherData.windSpeed} m/s

Utilise ces informations pour répondre à la question de l'utilisateur de manière naturelle et conversationnelle.`;
        }
      }
    }

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build conversation history for Gemini (must start with user message)
    let history = messages
      .slice(0, -1)
      .filter((msg: any) => msg.role !== 'system')
      .map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }));
    
    // If history starts with 'model', remove it (Gemini requires user to start)
    if (history.length > 0 && history[0].role === 'model') {
      history = history.slice(1);
    }

    // Start chat with history
    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    // Prepare the prompt with weather context if available
    const prompt = systemContext 
      ? `${systemContext}\n\nQuestion: ${lastMessage.content}`
      : lastMessage.content;

    // Stream the response
    const result = await chat.sendMessageStream(prompt);

    // Create a readable stream from Gemini response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (error) {
          console.error('Error in stream:', error);
          controller.error(error);
        }
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
