import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }, { title: "About", href: "/about", translationKey: "header.about" }]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="about.title" />
              </h1>

              <div className="prose max-w-none">
                <p className="text-lg mb-6 text-gray-900">
                  <TranslatedText textKey="about.description" />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="about.mission.title" />
                    </h2>
                    <p className="text-gray-900">
                      <TranslatedText textKey="about.mission.description" />
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="about.vision.title" />
                    </h2>
                    <p className="text-gray-900">
                      <TranslatedText textKey="about.vision.description" />
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="about.values.title" />
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900"><TranslatedText textKey="about.values.item1" /></span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900"><TranslatedText textKey="about.values.item2" /></span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900"><TranslatedText textKey="about.values.item3" /></span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900"><TranslatedText textKey="about.values.item4" /></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6 rounded-lg shadow-md text-white">
                  <h2 className="text-2xl font-semibold mb-4">
                    <TranslatedText textKey="about.joinUs.title" />
                  </h2>
                  <p className="mb-6">
                    <TranslatedText textKey="about.joinUs.description" />
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="/contacts"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-[#003366] bg-white hover:bg-gray-100 transition-colors"
                    >
                      <TranslatedText textKey="about.joinUs.contactUs" />
                    </a>
                  </div>
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
