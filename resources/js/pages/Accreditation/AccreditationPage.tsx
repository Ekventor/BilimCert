import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { ProceduresSection } from './components/ProceduresSection';
import { RegistryAccessSection } from './components/RegistryAccessSection';
import { EvaluationCriteriaSection } from './components/EvaluationCriteriaSection';
import { ReportsAnalyticsSection } from './components/ReportsAnalyticsSection';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';
import { ChatButton } from '../../components/chat-button';

export default function AccreditationPage() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }, { title: "Accreditation", href: "/accreditation", translationKey: "header.accreditation" }]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="accreditation.title" />
              </h1>

              {/* Section Navigation Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Accreditation sections">
                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'overview'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('overview')}
                  >
                    <TranslatedText textKey="accreditation.tabs.overview" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'procedures'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('procedures')}
                  >
                    <TranslatedText textKey="accreditation.tabs.procedures" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'registry'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('registry')}
                  >
                    <TranslatedText textKey="accreditation.tabs.registry" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'criteria'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('criteria')}
                  >
                    <TranslatedText textKey="accreditation.tabs.criteria" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'reports'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('reports')}
                  >
                    <TranslatedText textKey="accreditation.tabs.reports" />
                  </button>
                </nav>
              </div>

              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    <TranslatedText textKey="accreditation.description" />
                  </p>

                  <div className="bg-[#003366]/5 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="accreditation.importance.title" />
                    </h2>
                    <p className="mb-4">
                      <TranslatedText textKey="accreditation.importance.description" />
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-[#003366] mb-2">
                          <TranslatedText textKey="accreditation.importance.forInstitutions.title" />
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><TranslatedText textKey="accreditation.importance.forInstitutions.item1" /></li>
                          <li><TranslatedText textKey="accreditation.importance.forInstitutions.item2" /></li>
                          <li><TranslatedText textKey="accreditation.importance.forInstitutions.item3" /></li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-[#003366] mb-2">
                          <TranslatedText textKey="accreditation.importance.forStudents.title" />
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><TranslatedText textKey="accreditation.importance.forStudents.item1" /></li>
                          <li><TranslatedText textKey="accreditation.importance.forStudents.item2" /></li>
                          <li><TranslatedText textKey="accreditation.importance.forStudents.item3" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="accreditation.types.title" />
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-xl font-medium text-[#003366] mb-3">
                        <TranslatedText textKey="accreditation.types.institutional.title" />
                      </h3>
                      <p className="text-gray-600 mb-3">
                        <TranslatedText textKey="accreditation.types.institutional.description" />
                      </p>
                      <button
                        onClick={() => setActiveSection('procedures')}
                        className="text-[#003366] hover:text-[#FF6600] font-medium"
                      >
                        <TranslatedText textKey="accreditation.learnMore" /> →
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-xl font-medium text-[#003366] mb-3">
                        <TranslatedText textKey="accreditation.types.program.title" />
                      </h3>
                      <p className="text-gray-600 mb-3">
                        <TranslatedText textKey="accreditation.types.program.description" />
                      </p>
                      <button
                        onClick={() => setActiveSection('procedures')}
                        className="text-[#003366] hover:text-[#FF6600] font-medium"
                      >
                        <TranslatedText textKey="accreditation.learnMore" /> →
                      </button>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="accreditation.benefits.title" />
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li><TranslatedText textKey="accreditation.benefits.item1" /></li>
                    <li><TranslatedText textKey="accreditation.benefits.item2" /></li>
                    <li><TranslatedText textKey="accreditation.benefits.item3" /></li>
                    <li><TranslatedText textKey="accreditation.benefits.item4" /></li>
                  </ul>

                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="accreditation.requirements.title" />
                  </h2>
                  <p className="mb-6">
                    <TranslatedText textKey="accreditation.requirements.description" />
                  </p>

                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setActiveSection('procedures')}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FF6600] hover:bg-[#FF7F00] mr-4"
                    >
                      <TranslatedText textKey="accreditation.exploreProcess" />
                    </button>
                    <button
                      onClick={() => setActiveSection('registry')}
                      className="inline-flex items-center px-6 py-3 border border-[#003366] rounded-md shadow-sm text-base font-medium text-[#003366] bg-white hover:bg-gray-50"
                    >
                      <TranslatedText textKey="accreditation.viewRegistry" />
                    </button>
                  </div>
                </div>
              )}

              {/* Procedures Section */}
              {activeSection === 'procedures' && <ProceduresSection />}

              {/* Registry Access Section */}
              {activeSection === 'registry' && <RegistryAccessSection />}

              {/* Evaluation Criteria Section */}
              {activeSection === 'criteria' && <EvaluationCriteriaSection />}

              {/* Reports and Analytics Section */}
              {activeSection === 'reports' && <ReportsAnalyticsSection />}
            </div>
          </div>
        </main>
        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
