import React, { useState, useRef, useEffect } from 'react';
import { useAccessibility } from '../../../hooks/useAccessibility';
import { useLanguage } from '../../../hooks/useLanguage';
import { Link } from '@inertiajs/react';

interface AccessibilityToggleProps {
  className?: string;
}

export const AccessibilityToggle: React.FC<AccessibilityToggleProps> = ({ className = '' }) => {
  const { isHighContrastMode, toggleHighContrastMode, increaseFontSize, decreaseFontSize, resetFontSize } = useAccessibility();
  const { t } = useLanguage();
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accessibility-toggle relative ${className}`} ref={dropdownRef}>
      <button
        className="flex items-center bg-[#003366]/10 hover:bg-[#003366]/20 text-[#003366] px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors"
        aria-label={t('accessibility.toggleLabel')}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
        </svg>
        <span className="hidden sm:inline-block ml-1 text-sm">{t('accessibility.buttonText')}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-50 border border-gray-200"
          role="dialog"
          aria-label={t('accessibility.title')}
        >
          <h3 className="text-lg font-medium mb-3 text-[#003366]">{t('accessibility.title')}</h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isHighContrastMode}
                  onChange={toggleHighContrastMode}
                  className="form-checkbox h-5 w-5 text-[#003366] border-gray-300 rounded focus:ring-[#003366]/50"
                />
                <span className="text-gray-900">{t('accessibility.highContrast')}</span>
              </label>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <p className="mb-2 font-medium text-gray-900">{t('accessibility.fontSize')}</p>
              <div className="flex space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
                  aria-label={t('accessibility.decreaseFontSize')}
                >
                  <span className="text-lg font-bold">A-</span>
                </button>
                <button
                  onClick={resetFontSize}
                  className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 px-3 h-10 rounded-md flex items-center justify-center shadow-sm flex-1"
                  aria-label={t('accessibility.resetFontSize')}
                >
                  {t('accessibility.reset')}
                </button>
                <button
                  onClick={increaseFontSize}
                  className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
                  aria-label={t('accessibility.increaseFontSize')}
                >
                  <span className="text-lg font-bold">A+</span>
                </button>
              </div>
            </div>

            <div>
              <Link
                href="/accessibility-settings"
                className="w-full bg-[#003366] hover:bg-[#002244] text-white py-2 rounded-md transition-colors flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                {t('accessibility.moreOptions')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
