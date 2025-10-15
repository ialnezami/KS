'use client';

import Chat from '@/components/Chat';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-4xl h-screen flex flex-col">
        <header className="p-6 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Chatbot Assistant
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Avec météo intégrée et streaming en temps réel
          </p>
        </header>
        <div className="flex-1 overflow-hidden">
          <Chat />
        </div>
      </div>
    </main>
  );
}

