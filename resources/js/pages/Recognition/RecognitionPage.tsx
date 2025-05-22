import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { useLanguage } from '../../hooks/useLanguage';
import { ChatButton } from '../../components/chat-button';
import { TypesOfRecognitionSection } from './components/TypesOfRecognitionSection';
import { ApplicationFormSection } from './components/ApplicationFormSection';
import { CalculatorSection } from './components/CalculatorSection';
import { LegalFrameworkSection } from './components/LegalFrameworkSection';
import { InternationalAgreementsSection } from './components/InternationalAgreementsSection';

export default function RecognitionPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tabs = [
    { id: 'overview', label: 'recognition.tabs.overview' },
    { id: 'types', label: 'recognition.tabs.types' },
    { id: 'application', label: 'recognition.tabs.application' },
    { id: 'calculator', label: 'recognition.tabs.calculator' },
    { id: 'legal', label: 'recognition.tabs.legal' },
    { id: 'agreements', label: 'recognition.tabs.agreements' },
  ];

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu - Rendered at the root level */}
        <MobileMenu />
        <main className="flex-1">
          <div className="container mx-auto w-[90%] max-w-[1400px] py-4">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }, { title: "Recognition", href: "/recognition", translationKey: "header.recognition" }]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="recognition.title" />
              </h1>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                        ? 'border-[#003366] text-[#003366]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      aria-current={activeTab === tab.id ? 'page' : undefined}
                    >
                      <TranslatedText textKey={tab.label} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                {activeTab === 'overview' && (
                  <>
                    <p className="text-lg mb-4">
                      <TranslatedText textKey="recognition.description" />
                    </p>

                    <div className="bg-[#003366]/5 p-6 rounded-lg my-8">
                      <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                        <TranslatedText textKey="recognition.process.title" />
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white font-bold text-xl mb-4">1</div>
                          <h3 className="text-lg font-medium text-[#003366] mb-2">
                            <TranslatedText textKey="recognition.process.step1.title" />
                          </h3>
                          <p className="text-gray-900">
                            <TranslatedText textKey="recognition.process.step1.description" />
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white font-bold text-xl mb-4">2</div>
                          <h3 className="text-lg font-medium text-[#003366] mb-2">
                            <TranslatedText textKey="recognition.process.step2.title" />
                          </h3>
                          <p className="text-gray-900">
                            <TranslatedText textKey="recognition.process.step2.description" />
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white font-bold text-xl mb-4">3</div>
                          <h3 className="text-lg font-medium text-[#003366] mb-2">
                            <TranslatedText textKey="recognition.process.step3.title" />
                          </h3>
                          <p className="text-gray-900">
                            <TranslatedText textKey="recognition.process.step3.description" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                      <TranslatedText textKey="recognition.requirements.title" />
                    </h2>
                    <p className="text-gray-900">
                      <TranslatedText textKey="recognition.requirements.description" />
                    </p>

                    <ul className="list-disc pl-6 space-y-2 my-4 text-gray-900">
                      <li><TranslatedText textKey="recognition.requirements.item1" /></li>
                      <li><TranslatedText textKey="recognition.requirements.item2" /></li>
                      <li><TranslatedText textKey="recognition.requirements.item3" /></li>
                      <li><TranslatedText textKey="recognition.requirements.item4" /></li>
                      <li><TranslatedText textKey="recognition.requirements.item5" /></li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                      <TranslatedText textKey="recognition.benefits.title" />
                    </h2>
                    <p className="text-gray-900">
                      <TranslatedText textKey="recognition.benefits.description" />
                    </p>

                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => setActiveTab('application')}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6600] hover:bg-[#FF7F00] transition-colors"
                      >
                        <TranslatedText textKey="recognition.applyButton" />
                      </button>
                    </div>
                  </>
                )}

                {activeTab === 'types' && <TypesOfRecognitionSection />}
                {activeTab === 'application' && <ApplicationFormSection />}
                {activeTab === 'calculator' && <CalculatorSection />}
                {activeTab === 'legal' && <LegalFrameworkSection />}
                {activeTab === 'agreements' && <InternationalAgreementsSection />}
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
