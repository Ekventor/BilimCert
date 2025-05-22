import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { useLanguage } from '../../hooks/useLanguage';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function EmployersPage() {
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
              { title: "For Employers", href: "/employers", translationKey: "header.employers" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="employers.title" />
              </h1>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-900 mb-6">
                  <TranslatedText textKey="employers.description" />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold text-[#003366]">
                          <TranslatedText textKey="employers.recruitment.title" />
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <TranslatedText textKey="employers.recruitment.description" />
                      </p>
                      <Link
                        href="/employers/recruitment"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold text-[#003366]">
                          <TranslatedText textKey="employers.development.title" />
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <TranslatedText textKey="employers.development.description" />
                      </p>
                      <Link
                        href="/employers/development"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold text-[#003366]">
                          <TranslatedText textKey="employers.partnerships.title" />
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <TranslatedText textKey="employers.partnerships.description" />
                      </p>
                      <Link
                        href="/employers/partnerships"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 my-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="employers.benefits.title" />
                  </h2>
                  <p className="text-gray-600 mb-4">
                    <TranslatedText textKey="employers.benefits.description" />
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><TranslatedText textKey="employers.benefits.item1" /></span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><TranslatedText textKey="employers.benefits.item2" /></span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><TranslatedText textKey="employers.benefits.item3" /></span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><TranslatedText textKey="employers.benefits.item4" /></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md my-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    <TranslatedText textKey="employers.joinNetwork.title" />
                  </h2>
                  <p className="mb-6">
                    <TranslatedText textKey="employers.joinNetwork.description" />
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/partnership/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#003366] bg-white hover:bg-gray-100 transition-colors shadow-sm"
                    >
                      <TranslatedText textKey="employers.joinNetwork.button" />
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#003366] hover:bg-[#002244] transition-colors shadow-sm"
                  >
                    <TranslatedText textKey="employers.contactButton" />
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
