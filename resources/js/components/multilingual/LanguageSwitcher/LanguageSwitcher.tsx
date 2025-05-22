import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Language flag icons (simplified representation)
  const languageFlags: Record<string, string> = {
    kz: '🇰🇿',
    ru: '🇷🇺',
    en: '🇺🇸'
  };

  // Get current language display name
  const currentLangDisplay = availableLanguages.find(lang => lang.code === currentLanguage)?.nativeName || '';

  return (
    <div className={`language-switcher relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-[#003366]/10 hover:bg-[#003366]/20 text-[#003366] px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="text-base sm:text-lg">{languageFlags[currentLanguage]}</span>
        <span className="hidden sm:inline-block ml-1">{currentLangDisplay}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 sm:h-4 sm:w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul role="listbox" className="py-1">
            {availableLanguages.map(lang => (
              <li key={lang.code} role="option" aria-selected={currentLanguage === lang.code}>
                <button
                  type="button"
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${currentLanguage === lang.code ? 'bg-[#003366]/5 font-medium text-[#003366]' : 'text-gray-900'
                    }`}
                  onClick={() => {
                    changeLanguage(lang.code as 'kz' | 'ru' | 'en');
                    setIsOpen(false);
                  }}
                >
                  <span className="text-lg mr-2">{languageFlags[lang.code]}</span>
                  <span>{lang.nativeName}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
