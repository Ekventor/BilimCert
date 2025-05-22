import React, { useState, useEffect } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { useAccessibility } from '../../hooks/useAccessibility';
import { ChatButton } from '../../components/chat-button';
import { Link } from '@inertiajs/react';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function AccessibilitySettingsPage() {
  const { t } = useLanguage();
  const {
    isHighContrastMode,
    toggleHighContrastMode,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize
  } = useAccessibility();

  // Additional accessibility settings
  const [motionReduced, setMotionReduced] = useState<boolean>(() => {
    return localStorage.getItem('motionReduced') === 'true';
  });

  const [textSpacing, setTextSpacing] = useState<number>(() => {
    const savedSpacing = localStorage.getItem('textSpacing');
    return savedSpacing ? parseInt(savedSpacing, 10) : 1;
  });

  const [colorBlindMode, setColorBlindMode] = useState<string>(() => {
    return localStorage.getItem('colorBlindMode') || 'none';
  });

  // Update localStorage when settings change
  useEffect(() => {
    localStorage.setItem('motionReduced', motionReduced.toString());
    if (motionReduced) {
      document.documentElement.classList.add('motion-reduced');
    } else {
      document.documentElement.classList.remove('motion-reduced');
    }
  }, [motionReduced]);

  useEffect(() => {
    localStorage.setItem('textSpacing', textSpacing.toString());
    document.documentElement.style.lineHeight = `${textSpacing}`;
  }, [textSpacing]);

  useEffect(() => {
    localStorage.setItem('colorBlindMode', colorBlindMode);

    // Remove all color blind mode classes
    document.documentElement.classList.remove(
      'protanopia',
      'deuteranopia',
      'tritanopia',
      'achromatopsia'
    );

    // Add the selected color blind mode class
    if (colorBlindMode !== 'none') {
      document.documentElement.classList.add(colorBlindMode);
    }
  }, [colorBlindMode]);

  // Handle text spacing changes
  const increaseTextSpacing = () => {
    setTextSpacing(prev => Math.min(prev + 0.1, 2.0));
  };

  const decreaseTextSpacing = () => {
    setTextSpacing(prev => Math.max(prev - 0.1, 1.0));
  };

  const resetTextSpacing = () => {
    setTextSpacing(1.0);
  };

  // Toggle motion reduction
  const toggleMotionReduction = () => {
    setMotionReduced(prev => !prev);
  };

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />

        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[
              { title: "Home", href: "/", translationKey: "header.home" },
              { title: "Accessibility Settings", href: "/accessibility-settings", translationKey: "accessibility.settings" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="accessibility.settings" />
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar with quick links */}
                <div className="md:col-span-1">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="accessibility.quickSettings" />
                    </h2>

                    <nav className="space-y-2">
                      <a href="#display" className="block py-2 px-3 rounded-md hover:bg-gray-100 text-[#003366]">
                        <TranslatedText textKey="accessibility.display" />
                      </a>
                      <a href="#text" className="block py-2 px-3 rounded-md hover:bg-gray-100 text-[#003366]">
                        <TranslatedText textKey="accessibility.text" />
                      </a>
                      <a href="#motion" className="block py-2 px-3 rounded-md hover:bg-gray-100 text-[#003366]">
                        <TranslatedText textKey="accessibility.motion" />
                      </a>
                      <a href="#color" className="block py-2 px-3 rounded-md hover:bg-gray-100 text-[#003366]">
                        <TranslatedText textKey="accessibility.color" />
                      </a>
                    </nav>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => {
                          resetFontSize();
                          resetTextSpacing();
                          setMotionReduced(false);
                          setColorBlindMode('none');
                          if (isHighContrastMode) toggleHighContrastMode();
                        }}
                        className="w-full bg-[#003366] hover:bg-[#002244] text-white py-2 px-4 rounded-md transition-colors"
                      >
                        <TranslatedText textKey="accessibility.resetAll" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="md:col-span-2 space-y-8">
                  {/* Display Settings */}
                  <section id="display" className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="accessibility.display" />
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isHighContrastMode}
                            onChange={toggleHighContrastMode}
                            className="form-checkbox h-5 w-5 text-[#003366] border-gray-300 rounded focus:ring-[#003366]/50"
                          />
                          <div>
                            <span className="block font-medium text-gray-900">
                              <TranslatedText textKey="accessibility.highContrast" />
                            </span>
                            <span className="block text-sm text-gray-500 mt-1">
                              <TranslatedText textKey="accessibility.highContrastDescription" />
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </section>

                  {/* Text Settings */}
                  <section id="text" className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="accessibility.text" />
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="mb-2">
                          <span className="block font-medium text-gray-900">
                            <TranslatedText textKey="accessibility.fontSize" />
                          </span>
                          <span className="block text-sm text-gray-500 mt-1">
                            <TranslatedText textKey="accessibility.fontSizeDescription" />
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 mt-3">
                          <button
                            onClick={decreaseFontSize}
                            className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
                            aria-label={t('accessibility.decreaseFontSize')}
                          >
                            <span className="text-lg font-bold">A-</span>
                          </button>

                          <div className="flex-1 text-center">
                            <span className="text-gray-900 font-medium">{fontSize}px</span>
                          </div>

                          <button
                            onClick={increaseFontSize}
                            className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
                            aria-label={t('accessibility.increaseFontSize')}
                          >
                            <span className="text-lg font-bold">A+</span>
                          </button>

                          <button
                            onClick={resetFontSize}
                            className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 px-3 h-10 rounded-md flex items-center justify-center shadow-sm"
                            aria-label={t('accessibility.resetFontSize')}
                          >
                            {t('accessibility.reset')}
                          </button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="mb-2">
                          <span className="block font-medium text-gray-900">
                            <TranslatedText textKey="accessibility.textSpacing" />
                          </span>
                          <span className="block text-sm text-gray-500 mt-1">
                            <TranslatedText textKey="accessibility.textSpacingDescription" />
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 mt-3">
                          <button
                            onClick={decreaseTextSpacing}
                            className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
                            aria-label={t('accessibility.decreaseTextSpacing')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>

                          <div className="flex-1 text-center">
                            <span className="text-gray-900 font-medium">{textSpacing.toFixed(1)}</span>
                          </div>

                          <button
                            onClick={increaseTextSpacing}
                            className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 w-10 h-10 rounded-md flex items-center justify-center shadow-sm"
                            aria-label={t('accessibility.increaseTextSpacing')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </button>

                          <button
                            onClick={resetTextSpacing}
                            className="bg-white hover:bg-gray-100 text-[#003366] border border-gray-300 px-3 h-10 rounded-md flex items-center justify-center shadow-sm"
                            aria-label={t('accessibility.resetTextSpacing')}
                          >
                            {t('accessibility.reset')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Motion Settings */}
                  <section id="motion" className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="accessibility.motion" />
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={motionReduced}
                            onChange={toggleMotionReduction}
                            className="form-checkbox h-5 w-5 text-[#003366] border-gray-300 rounded focus:ring-[#003366]/50"
                          />
                          <div>
                            <span className="block font-medium text-gray-900">
                              <TranslatedText textKey="accessibility.reduceMotion" />
                            </span>
                            <span className="block text-sm text-gray-500 mt-1">
                              <TranslatedText textKey="accessibility.reduceMotionDescription" />
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </section>

                  {/* Color Settings */}
                  <section id="color" className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="accessibility.color" />
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="mb-2">
                          <span className="block font-medium text-gray-900">
                            <TranslatedText textKey="accessibility.colorBlindMode" />
                          </span>
                          <span className="block text-sm text-gray-500 mt-1">
                            <TranslatedText textKey="accessibility.colorBlindModeDescription" />
                          </span>
                        </div>

                        <div className="mt-3 space-y-2">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="colorBlindMode"
                              value="none"
                              checked={colorBlindMode === 'none'}
                              onChange={() => setColorBlindMode('none')}
                              className="form-radio h-4 w-4 text-[#003366] border-gray-300 focus:ring-[#003366]/50"
                            />
                            <span className="text-gray-900">
                              <TranslatedText textKey="accessibility.colorBlindNone" />
                            </span>
                          </label>

                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="colorBlindMode"
                              value="protanopia"
                              checked={colorBlindMode === 'protanopia'}
                              onChange={() => setColorBlindMode('protanopia')}
                              className="form-radio h-4 w-4 text-[#003366] border-gray-300 focus:ring-[#003366]/50"
                            />
                            <span className="text-gray-900">
                              <TranslatedText textKey="accessibility.colorBlindProtanopia" />
                            </span>
                          </label>

                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="colorBlindMode"
                              value="deuteranopia"
                              checked={colorBlindMode === 'deuteranopia'}
                              onChange={() => setColorBlindMode('deuteranopia')}
                              className="form-radio h-4 w-4 text-[#003366] border-gray-300 focus:ring-[#003366]/50"
                            />
                            <span className="text-gray-900">
                              <TranslatedText textKey="accessibility.colorBlindDeuteranopia" />
                            </span>
                          </label>

                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="colorBlindMode"
                              value="tritanopia"
                              checked={colorBlindMode === 'tritanopia'}
                              onChange={() => setColorBlindMode('tritanopia')}
                              className="form-radio h-4 w-4 text-[#003366] border-gray-300 focus:ring-[#003366]/50"
                            />
                            <span className="text-gray-900">
                              <TranslatedText textKey="accessibility.colorBlindTritanopia" />
                            </span>
                          </label>

                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="colorBlindMode"
                              value="achromatopsia"
                              checked={colorBlindMode === 'achromatopsia'}
                              onChange={() => setColorBlindMode('achromatopsia')}
                              className="form-radio h-4 w-4 text-[#003366] border-gray-300 focus:ring-[#003366]/50"
                            />
                            <span className="text-gray-900">
                              <TranslatedText textKey="accessibility.colorBlindAchromatopsia" />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
