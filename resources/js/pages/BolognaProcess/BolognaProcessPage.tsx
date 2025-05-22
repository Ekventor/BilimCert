import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { ProcessBasicsSection } from './components/ProcessBasicsSection';
import { ECTSSection } from './components/ECTSSection';
import { NationalReportsSection } from './components/NationalReportsSection';
import { QualificationSystemSection } from './components/QualificationSystemSection';

export default function BolognaProcessPage() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu - Rendered at the root level */}
        <MobileMenu />
        <main className="flex-1">
          <div className="container mx-auto w-[90%] max-w-[1400px] py-4">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }, { title: "Bologna Process", href: "/bologna-process", translationKey: "header.bolognaProcess" }]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="bolognaProcess.title" />
              </h1>

              {/* Section Navigation Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex flex-wrap gap-2 md:gap-4 overflow-x-auto" aria-label="Bologna Process sections" role="tablist">
                  <button
                    className={`whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm min-h-[48px] md:min-h-[44px] ${activeSection === 'overview'
                      ? 'border-[#FF6600] text-[#FF6600]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('overview')}
                    role="tab"
                    aria-selected={activeSection === 'overview'}
                    aria-controls="overview-panel"
                  >
                    <TranslatedText textKey="bolognaProcess.tabs.overview" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm min-h-[48px] md:min-h-[44px] ${activeSection === 'basics'
                      ? 'border-[#FF6600] text-[#FF6600]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('basics')}
                    role="tab"
                    aria-selected={activeSection === 'basics'}
                    aria-controls="basics-panel"
                  >
                    <TranslatedText textKey="bolognaProcess.tabs.basics" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm min-h-[48px] md:min-h-[44px] ${activeSection === 'ects'
                      ? 'border-[#FF6600] text-[#FF6600]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('ects')}
                    role="tab"
                    aria-selected={activeSection === 'ects'}
                    aria-controls="ects-panel"
                  >
                    <TranslatedText textKey="bolognaProcess.tabs.ects" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm min-h-[48px] md:min-h-[44px] ${activeSection === 'reports'
                      ? 'border-[#FF6600] text-[#FF6600]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('reports')}
                    role="tab"
                    aria-selected={activeSection === 'reports'}
                    aria-controls="reports-panel"
                  >
                    <TranslatedText textKey="bolognaProcess.tabs.reports" />
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm min-h-[48px] md:min-h-[44px] ${activeSection === 'qualification'
                      ? 'border-[#FF6600] text-[#FF6600]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    onClick={() => setActiveSection('qualification')}
                    role="tab"
                    aria-selected={activeSection === 'qualification'}
                    aria-controls="qualification-panel"
                  >
                    <TranslatedText textKey="bolognaProcess.tabs.qualification" />
                  </button>
                </nav>
              </div>

              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div className="prose max-w-none" id="overview-panel" role="tabpanel" aria-labelledby="overview-tab">
                  <p className="text-lg mb-4">
                    <TranslatedText textKey="bolognaProcess.description" />
                  </p>

                  <div className="bg-[#003366]/5 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="bolognaProcess.overview.keyObjectives.title" />
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><TranslatedText textKey="bolognaProcess.overview.keyObjectives.item1" /></li>
                      <li><TranslatedText textKey="bolognaProcess.overview.keyObjectives.item2" /></li>
                      <li><TranslatedText textKey="bolognaProcess.overview.keyObjectives.item3" /></li>
                      <li><TranslatedText textKey="bolognaProcess.overview.keyObjectives.item4" /></li>
                      <li><TranslatedText textKey="bolognaProcess.overview.keyObjectives.item5" /></li>
                      <li><TranslatedText textKey="bolognaProcess.overview.keyObjectives.item6" /></li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                    <TranslatedText textKey="bolognaProcess.history.title" />
                  </h2>
                  <p>
                    <TranslatedText textKey="bolognaProcess.history.description" />
                  </p>

                  <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                    <TranslatedText textKey="bolognaProcess.principles.title" />
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><TranslatedText textKey="bolognaProcess.principles.item1" /></li>
                    <li><TranslatedText textKey="bolognaProcess.principles.item2" /></li>
                    <li><TranslatedText textKey="bolognaProcess.principles.item3" /></li>
                    <li><TranslatedText textKey="bolognaProcess.principles.item4" /></li>
                    <li><TranslatedText textKey="bolognaProcess.principles.item5" /></li>
                  </ul>

                  <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                    <TranslatedText textKey="bolognaProcess.implementation.title" />
                  </h2>
                  <p>
                    <TranslatedText textKey="bolognaProcess.implementation.description" />
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <button
                      onClick={() => setActiveSection('basics')}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FF6600] hover:bg-[#FF7F00] min-h-[48px] md:min-h-[44px]"
                    >
                      <TranslatedText textKey="bolognaProcess.overview.exploreBasics" />
                    </button>
                    <button
                      onClick={() => setActiveSection('ects')}
                      className="inline-flex items-center justify-center px-6 py-3 border border-[#003366] rounded-md shadow-sm text-base font-medium text-[#003366] bg-white hover:bg-gray-50 min-h-[48px] md:min-h-[44px]"
                    >
                      <TranslatedText textKey="bolognaProcess.overview.learnECTS" />
                    </button>
                  </div>
                </div>
              )}

              {/* Process Basics Section */}
              {activeSection === 'basics' && <ProcessBasicsSection />}

              {/* ECTS Section */}
              {activeSection === 'ects' && <ECTSSection />}

              {/* National Reports Section */}
              {activeSection === 'reports' && <NationalReportsSection />}

              {/* Qualification System Section */}
              {activeSection === 'qualification' && <QualificationSystemSection />}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
}
