import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from '../../multilingual/TranslatedText/TranslatedText';
import { LanguageSwitcher } from '../../multilingual/LanguageSwitcher/LanguageSwitcher';
import { AccessibilityToggle } from '../../accessibility/AccessibilityToggle/AccessibilityToggle';
import { useLanguage } from '../../../hooks/useLanguage';

export const MainNav: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navItems = [
    { key: 'home', href: '/' },
    { key: 'recognition', href: '/recognition' },
    { key: 'accreditation', href: '/accreditation' },
    { key: 'bolognaProcess', href: '/bologna-process' },
    { key: 'news', href: '/news' },
    { key: 'contacts', href: '/contacts' },
    { key: 'about', href: '/about' },
  ];
  
  return (
    <div className="flex justify-between items-center w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="BilimCert Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-bold text-[#003366]">BilimCert</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="text-gray-700 hover:text-[#003366] transition-colors text-sm font-medium"
          >
            <TranslatedText textKey={`header.${item.key}`} />
          </Link>
        ))}
      </nav>
      
      {/* Right Side - Language, Accessibility, Apply Button */}
      <div className="hidden md:flex items-center space-x-4">
        <LanguageSwitcher />
        <AccessibilityToggle />
        <Link 
          href="/application" 
          className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
        >
          <TranslatedText textKey="header.applyButton" />
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-gray-700 hover:text-[#003366] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-white shadow-lg z-50">
          <div className="p-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-[#003366] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <TranslatedText textKey={`header.${item.key}`} />
                </Link>
              ))}
            </nav>
            
            <div className="mt-4 flex flex-col space-y-3">
              <LanguageSwitcher />
              <AccessibilityToggle />
              <Link 
                href="/application"
                className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-4 py-2 rounded-md transition-colors text-center"
              >
                <TranslatedText textKey="header.applyButton" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
