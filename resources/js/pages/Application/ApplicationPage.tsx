import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { useLanguage } from '../../hooks/useLanguage';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function ApplicationPage() {
  const { t } = useLanguage();

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
              { title: "Application", href: "/application", translationKey: "header.application" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="application.title" />
              </h1>

              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  <TranslatedText textKey="application.description" />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-[#003366] mb-3">
                        <TranslatedText textKey="application.recognition.title" />
                      </h2>
                      <p className="text-gray-900 mb-4">
                        <TranslatedText textKey="application.recognition.description" />
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-900">
                        <li><TranslatedText textKey="application.recognition.item1" /></li>
                        <li><TranslatedText textKey="application.recognition.item2" /></li>
                        <li><TranslatedText textKey="application.recognition.item3" /></li>
                      </ul>
                      <Link
                        href="/recognition"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="application.recognition.button" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-[#003366] mb-3">
                        <TranslatedText textKey="application.accreditation.title" />
                      </h2>
                      <p className="text-gray-900 mb-4">
                        <TranslatedText textKey="application.accreditation.description" />
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-900">
                        <li><TranslatedText textKey="application.accreditation.item1" /></li>
                        <li><TranslatedText textKey="application.accreditation.item2" /></li>
                        <li><TranslatedText textKey="application.accreditation.item3" /></li>
                      </ul>
                      <Link
                        href="/accreditation"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="application.accreditation.button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="application.process.title" />
                  </h2>
                  <p className="mb-4">
                    <TranslatedText textKey="application.process.description" />
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#003366] text-white font-bold text-lg mb-3">1</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">
                        <TranslatedText textKey="application.process.step1.title" />
                      </h3>
                      <p className="text-gray-800 text-sm">
                        <TranslatedText textKey="application.process.step1.description" />
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#003366] text-white font-bold text-lg mb-3">2</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">
                        <TranslatedText textKey="application.process.step2.title" />
                      </h3>
                      <p className="text-gray-800 text-sm">
                        <TranslatedText textKey="application.process.step2.description" />
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#003366] text-white font-bold text-lg mb-3">3</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">
                        <TranslatedText textKey="application.process.step3.title" />
                      </h3>
                      <p className="text-gray-800 text-sm">
                        <TranslatedText textKey="application.process.step3.description" />
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#003366] text-white font-bold text-lg mb-3">4</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">
                        <TranslatedText textKey="application.process.step4.title" />
                      </h3>
                      <p className="text-gray-800 text-sm">
                        <TranslatedText textKey="application.process.step4.description" />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6600] hover:bg-[#FF7F00] transition-colors mr-4"
                  >
                    <TranslatedText textKey="application.contactButton" />
                  </Link>
                  <Link
                    href="/faq"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#003366] rounded-md shadow-sm text-base font-medium text-[#003366] bg-white hover:bg-gray-50"
                  >
                    <TranslatedText textKey="application.faqButton" />
                  </Link>
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
