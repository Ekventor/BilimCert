import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { useLanguage } from '../../hooks/useLanguage';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function UniversitiesPage() {
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
              { title: "For Universities", href: "/universities", translationKey: "header.universities" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="universities.title" />
              </h1>

              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  <TranslatedText textKey="universities.description" />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-[#003366] mb-3">
                        <TranslatedText textKey="universities.research.title" />
                      </h2>
                      <p className="text-gray-900 mb-4">
                        <TranslatedText textKey="universities.research.description" />
                      </p>
                      <Link
                        href="/universities/research"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-[#003366] mb-3">
                        <TranslatedText textKey="universities.curriculum.title" />
                      </h2>
                      <p className="text-gray-900 mb-4">
                        <TranslatedText textKey="universities.curriculum.description" />
                      </p>
                      <Link
                        href="/universities/curriculum"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-[#003366] mb-3">
                        <TranslatedText textKey="universities.partnerships.title" />
                      </h2>
                      <p className="text-gray-900 mb-4">
                        <TranslatedText textKey="universities.partnerships.description" />
                      </p>
                      <Link
                        href="/universities/partnerships"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        <TranslatedText textKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="universities.benefits.title" />
                  </h2>
                  <p className="mb-4 text-gray-900">
                    <TranslatedText textKey="universities.benefits.description" />
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900">
                    <li><TranslatedText textKey="universities.benefits.item1" /></li>
                    <li><TranslatedText textKey="universities.benefits.item2" /></li>
                    <li><TranslatedText textKey="universities.benefits.item3" /></li>
                    <li><TranslatedText textKey="universities.benefits.item4" /></li>
                  </ul>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/accreditation"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6600] hover:bg-[#FF7F00] transition-colors"
                  >
                    <TranslatedText textKey="universities.applyButton" />
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
