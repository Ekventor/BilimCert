import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Types for language context
type Language = 'kz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Create context with initial value
export const LanguageContext = createContext<LanguageContextType>({
  language: 'kz', // Kazakh by default
  setLanguage: () => { },
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get saved language from localStorage or use Kazakh as default
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage as Language) || 'kz';
  });

  // Save selected language to localStorage and update HTML lang attribute
  useEffect(() => {
    try {
      localStorage.setItem('preferredLanguage', language);
      document.documentElement.lang = language;

      // Create or update a cookie that expires in 30 days
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      document.cookie = `preferredLanguage=${language}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;

      // Dispatch a custom event for other components to react to language changes
      const event = new CustomEvent('languageChanged', { detail: { language } });
      window.dispatchEvent(event);

      console.log(`Language set to: ${language}`);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
