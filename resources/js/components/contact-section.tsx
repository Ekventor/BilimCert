import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

// Simple chatbot mockup component
const ChatbotMockup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="relative">
      {/* Chatbot button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#003366] text-white shadow-lg hover:bg-[#004080] transition-colors"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chatbot dialog */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] text-white p-4">
            <h3 className="font-medium">BilimCert Assistant</h3>
            <p className="text-sm text-white/80">How can we help you today?</p>
          </div>

          <div className="h-64 p-4 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-3">
              <div className="bg-[#003366] text-white p-3 rounded-lg rounded-bl-none max-w-[80%] self-start">
                <p className="text-sm">Hello! How can I assist you with BilimCert services today?</p>
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]/50"
              />
              <button className="bg-[#003366] text-white rounded-r-md p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 mlg:px-8 max-w-screen-xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-flex items-center rounded-full border border-[#003366]/20 bg-white px-3 py-1 text-sm text-[#003366] shadow-sm">
            <span className="font-medium">
              <TranslatedText textKey="contacts.tagline" />
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter text-[#003366] sm:text-4xl">
            <TranslatedText textKey="contacts.title" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003366]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#003366]">
                  <TranslatedText textKey="contacts.address" />
                </h3>
                <address className="not-italic mt-1 text-gray-600">
                  <p><TranslatedText textKey="footer.address.line1" /></p>
                  <p><TranslatedText textKey="footer.address.line2" /></p>
                  <p><TranslatedText textKey="footer.address.line3" /></p>
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003366]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#003366]">
                  <TranslatedText textKey="contacts.phone" />
                </h3>
                <div className="mt-1 text-gray-600">
                  <p>+7 (777) 123-45-67</p>
                  <p>+7 (727) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003366]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#003366]">
                  <TranslatedText textKey="contacts.email" />
                </h3>
                <div className="mt-1 text-gray-600">
                  <p>info@bilimcert.kz</p>
                  <p>support@bilimcert.kz</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-md bg-[#003366] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#003366]/90 min-h-[48px] md:min-h-[44px]"
              >
                <TranslatedText textKey="contacts.contactUs" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                <TranslatedText textKey="contacts.chatWithUs" />
              </h3>
              <p className="text-gray-600 mb-6">
                <TranslatedText textKey="contacts.chatDescription" />
              </p>

              <div className="flex justify-end">
                <ChatbotMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
