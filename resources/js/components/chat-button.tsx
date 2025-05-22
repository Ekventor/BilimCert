import React, { useState, useEffect, useRef } from 'react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatButton() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'chat.welcomeMessage',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Close chat when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Determine appropriate response based on user input
    const userText = inputValue.toLowerCase();
    let responseKey = 'chat.responses.general';

    // Check for keywords to provide more relevant responses
    if (userText.includes('help') || userText.includes('assist') || userText.includes('support')) {
      responseKey = 'chat.responses.help';
    } else if (userText.includes('contact') || userText.includes('email') || userText.includes('phone') || userText.includes('call')) {
      responseKey = 'chat.responses.contact';
    } else if (userText.includes('info') || userText.includes('about') || userText.includes('what') || userText.includes('how')) {
      responseKey = 'chat.responses.info';
    } else if (userText.includes('apply') || userText.includes('application') || userText.includes('submit')) {
      responseKey = 'chat.responses.apply';
    }

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: responseKey,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6600] text-white shadow-xl hover:bg-[#FF7F00] focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:ring-offset-2 transition-all duration-300 animate-pulse-slow"
        aria-label={t('chat.toggleChat')}
        style={{
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 4px rgba(255, 102, 0, 0.1)',
          transform: isOpen ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="fixed bottom-24 right-6 z-[1000] w-80 sm:w-96 rounded-lg bg-white shadow-xl border border-gray-200 flex flex-col transition-all duration-300 animate-fade-in"
          style={{ maxHeight: 'calc(100vh - 150px)', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between bg-[#003366] text-white p-4 rounded-t-lg">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">
                  <TranslatedText textKey="chat.title" />
                </h3>
                <p className="text-xs text-white/80">
                  <TranslatedText textKey="chat.subtitle" />
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label={t('chat.close')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50" style={{ maxHeight: '350px' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${message.sender === 'user'
                    ? 'bg-[#003366] text-white'
                    : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                    }`}
                >
                  {message.sender === 'bot' ? (
                    <TranslatedText textKey={message.text} />
                  ) : (
                    <span>{message.text}</span>
                  )}
                  <div
                    className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                      }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <div className="p-3 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('chat.inputPlaceholder')}
                className="flex-1 rounded-l-md border-gray-300 focus:border-[#003366] focus:ring focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px] px-4 text-gray-800"
                aria-label={t('chat.inputLabel')}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-r-md bg-[#003366] px-4 py-2 text-white hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 min-h-[44px]"
                aria-label={t('chat.send')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
            <div className="mt-2 text-xs text-gray-500 text-center">
              <TranslatedText textKey="chat.disclaimer" />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
