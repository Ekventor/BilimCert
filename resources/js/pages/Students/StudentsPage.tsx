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

export default function StudentsPage() {
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
              { title: "For Students", href: "/students", translationKey: "header.students" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="students.title" />
              </h1>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-900 mb-6">
                  <TranslatedText textKey="students.description" />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold text-[#003366]">
                          <TranslatedText textKey="students.career.title" />
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <TranslatedText textKey="students.career.description" />
                      </p>
                      <Link
                        href="/students/career"
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold text-[#003366]">
                          <TranslatedText textKey="students.internships.title" />
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <TranslatedText textKey="students.internships.description" />
                      </p>
                      <Link
                        href="/students/internships"
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h2 className="ml-3 text-xl font-semibold text-[#003366]">
                          <TranslatedText textKey="students.skills.title" />
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <TranslatedText textKey="students.skills.description" />
                      </p>
                      <Link
                        href="/students/skills"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="students.resources.title" />
                  </h2>
                  <p className="mb-4">
                    <TranslatedText textKey="students.resources.description" />
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><TranslatedText textKey="students.resources.item1" /></li>
                    <li><TranslatedText textKey="students.resources.item2" /></li>
                    <li><TranslatedText textKey="students.resources.item3" /></li>
                    <li><TranslatedText textKey="students.resources.item4" /></li>
                  </ul>
                </div>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    <TranslatedText textKey="students.applyNow" />
                  </h3>
                  <p className="mb-6">
                    <TranslatedText textKey="students.applyDescription" />
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#003366] bg-white hover:bg-gray-100 transition-colors shadow-sm"
                    >
                      <TranslatedText textKey="students.applyButton" />
                    </Link>
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
