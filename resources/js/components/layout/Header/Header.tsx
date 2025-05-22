import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { LanguageSwitcher } from '../../multilingual/LanguageSwitcher/LanguageSwitcher';
import { AccessibilityToggle } from '../../accessibility/AccessibilityToggle/AccessibilityToggle';
import { useLanguage } from '../../../hooks/useLanguage';
import { TranslatedText } from '../../multilingual/TranslatedText/TranslatedText';
import { Button } from '../../ui/Button/Button';

export const Header: React.FC = () => {
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
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 max-w-screen-xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="BilimCert Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-blue-800">BilimCert</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 transition-colors"
              >
                <TranslatedText textKey={`header.${item.key}`} />
              </Link>
            ))}
          </nav>

          {/* Right Side - Language, Accessibility, Apply Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <AccessibilityToggle />
            <Link href="/application">
              <Button variant="secondary">
                <TranslatedText textKey="header.applyButton" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <TranslatedText textKey={`header.${item.key}`} />
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col space-y-3">
              <LanguageSwitcher />
              <AccessibilityToggle />
              <Link href="/application">
                <Button variant="secondary" fullWidth>
                  <TranslatedText textKey="header.applyButton" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
