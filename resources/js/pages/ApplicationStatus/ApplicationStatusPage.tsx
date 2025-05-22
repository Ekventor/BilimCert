import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

// Status timeline component
const StatusTimeline: React.FC<{
  currentStatus: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    date?: string;
    isCompleted: boolean;
    isActive: boolean;
  }>;
}> = ({ currentStatus, steps }) => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          <TranslatedText textKey="applicationStatus.currentStatus" />: <span className="text-[#003366]">{currentStatus}</span>
        </h3>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step.isCompleted
                ? 'bg-green-100 border-green-500 text-green-500'
                : step.isActive
                  ? 'bg-blue-100 border-[#003366] text-[#003366]'
                  : 'bg-white border-gray-300 text-gray-400'
                } z-10`}>
                {step.isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              <div className="ml-4 min-h-10 flex-1">
                <h4 className={`text-base font-medium ${step.isActive ? 'text-[#003366]' : step.isCompleted ? 'text-green-600' : 'text-gray-600'
                  }`}>
                  <TranslatedText textKey={step.title} />
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  <TranslatedText textKey={step.description} />
                </p>
                {step.date && (
                  <p className="mt-1 text-xs text-gray-500">
                    {step.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Required documents component
const RequiredDocuments: React.FC<{
  documents: Array<{
    id: string;
    name: string;
    status: 'pending' | 'approved' | 'rejected';
    message?: string;
  }>;
}> = ({ documents }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        <TranslatedText textKey="applicationStatus.requiredDocuments" />
      </h3>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-start p-4 border rounded-md bg-white">
            <div className="flex-shrink-0 mr-4">
              {doc.status === 'approved' ? (
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : doc.status === 'rejected' ? (
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex-1">
              <h4 className="text-base font-medium text-gray-800">
                <TranslatedText textKey={doc.name} />
              </h4>

              <div className="mt-1 flex items-center">
                <span className={`text-sm ${doc.status === 'approved'
                  ? 'text-green-600'
                  : doc.status === 'rejected'
                    ? 'text-red-600'
                    : 'text-yellow-600'
                  }`}>
                  <TranslatedText textKey={`applicationStatus.documentStatus.${doc.status}`} />
                </span>
              </div>

              {doc.message && (
                <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                  {doc.message}
                </p>
              )}

              {doc.status === 'rejected' && (
                <div className="mt-3">
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#003366] hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366] min-h-[44px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <TranslatedText textKey="applicationStatus.uploadNew" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ApplicationStatusPage() {
  const { t } = useLanguage();
  const [applicationId, setApplicationId] = useState('');
  const [applicationFound, setApplicationFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock application data - in a real app, this would come from an API
  const applicationData = {
    id: 'APP-2023-12345',
    type: 'Recognition of Foreign Education Document',
    submissionDate: '2023-10-15',
    currentStatus: t('applicationStatus.statuses.underReview'),
    applicant: {
      name: 'Arman Serikbayev',
      email: 'arman.serikbayev@example.com',
      phone: '+7 (777) 123-45-67'
    },
    timeline: [
      {
        id: 'step1',
        title: 'applicationStatus.steps.submitted.title',
        description: 'applicationStatus.steps.submitted.description',
        date: '2023-10-15',
        isCompleted: true,
        isActive: false
      },
      {
        id: 'step2',
        title: 'applicationStatus.steps.received.title',
        description: 'applicationStatus.steps.received.description',
        date: '2023-10-16',
        isCompleted: true,
        isActive: false
      },
      {
        id: 'step3',
        title: 'applicationStatus.steps.review.title',
        description: 'applicationStatus.steps.review.description',
        date: '2023-10-20',
        isCompleted: false,
        isActive: true
      },
      {
        id: 'step4',
        title: 'applicationStatus.steps.decision.title',
        description: 'applicationStatus.steps.decision.description',
        isCompleted: false,
        isActive: false
      },
      {
        id: 'step5',
        title: 'applicationStatus.steps.completed.title',
        description: 'applicationStatus.steps.completed.description',
        isCompleted: false,
        isActive: false
      }
    ],
    documents: [
      {
        id: 'doc1',
        name: 'applicationStatus.documents.passport',
        status: 'approved' as const
      },
      {
        id: 'doc2',
        name: 'applicationStatus.documents.diploma',
        status: 'approved' as const
      },
      {
        id: 'doc3',
        name: 'applicationStatus.documents.transcript',
        status: 'rejected' as const,
        message: t('applicationStatus.documents.transcriptRejectionMessage')
      },
      {
        id: 'doc4',
        name: 'applicationStatus.documents.translation',
        status: 'pending' as const
      }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (applicationId.trim() === 'APP-2023-12345') {
        setApplicationFound(true);
        setIsLoading(false);
      } else {
        setError(t('applicationStatus.errors.notFound'));
        setApplicationFound(false);
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />

        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[
              { title: "Home", href: "/", translationKey: "header.home" },
              { title: "Application Status", href: "/application-status", translationKey: "header.applicationStatus" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="applicationStatus.title" />
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-800">
                  <TranslatedText textKey="applicationStatus.description" />
                </p>
              </div>

              {!applicationFound ? (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto">
                  <h2 className="text-xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="applicationStatus.checkStatus" />
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="applicationId" className="block text-sm font-medium text-gray-800 mb-1">
                        <TranslatedText textKey="applicationStatus.applicationId" /> <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="applicationId"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        placeholder={t('applicationStatus.applicationIdPlaceholder')}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-800"
                        required
                      />
                      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                      <p className="mt-1 text-xs text-gray-500">
                        <TranslatedText textKey="applicationStatus.idHelp" />
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href="/application"
                        className="text-[#003366] hover:text-[#002244] text-sm font-medium"
                      >
                        <TranslatedText textKey="applicationStatus.newApplication" />
                      </Link>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center justify-center rounded-md bg-[#003366] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 min-h-[48px] md:min-h-[44px] disabled:opacity-70"
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <TranslatedText textKey="common.loading" />
                          </>
                        ) : (
                          <TranslatedText textKey="applicationStatus.checkButton" />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b">
                    <div>
                      <h2 className="text-xl font-semibold text-[#003366]">
                        <TranslatedText textKey="applicationStatus.applicationDetails" />
                      </h2>
                      <p className="text-gray-600 mt-1">
                        <TranslatedText textKey="applicationStatus.applicationId" />: {applicationData.id}
                      </p>
                    </div>

                    <button
                      onClick={() => setApplicationFound(false)}
                      className="mt-4 md:mt-0 inline-flex items-center text-[#003366] hover:text-[#002244] min-h-[44px]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      <TranslatedText textKey="applicationStatus.backToSearch" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          <TranslatedText textKey="applicationStatus.applicantInfo" />
                        </h3>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <div className="grid grid-cols-1 gap-3">
                            <div>
                              <p className="text-sm text-gray-500">
                                <TranslatedText textKey="applicationStatus.applicantName" />
                              </p>
                              <p className="text-base text-gray-800 font-medium">
                                {applicationData.applicant.name}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">
                                <TranslatedText textKey="applicationStatus.applicantEmail" />
                              </p>
                              <p className="text-base text-gray-800 font-medium">
                                {applicationData.applicant.email}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">
                                <TranslatedText textKey="applicationStatus.applicantPhone" />
                              </p>
                              <p className="text-base text-gray-800 font-medium">
                                {applicationData.applicant.phone}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">
                                <TranslatedText textKey="applicationStatus.applicationType" />
                              </p>
                              <p className="text-base text-gray-800 font-medium">
                                {applicationData.type}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">
                                <TranslatedText textKey="applicationStatus.submissionDate" />
                              </p>
                              <p className="text-base text-gray-800 font-medium">
                                {applicationData.submissionDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <RequiredDocuments documents={applicationData.documents} />
                    </div>

                    <div>
                      <StatusTimeline
                        currentStatus={applicationData.currentStatus}
                        steps={applicationData.timeline}
                      />

                      <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
                        <h3 className="text-lg font-semibold text-[#003366] mb-2">
                          <TranslatedText textKey="applicationStatus.needHelp" />
                        </h3>
                        <p className="text-sm text-gray-700 mb-4">
                          <TranslatedText textKey="applicationStatus.helpDescription" />
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded-md bg-[#003366] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#002244] min-h-[44px]"
                          >
                            <TranslatedText textKey="applicationStatus.contactSupport" />
                          </Link>
                          <Link
                            href="/faq"
                            className="inline-flex items-center justify-center rounded-md border border-[#003366] bg-white px-4 py-2 text-sm font-medium text-[#003366] shadow-sm transition-colors hover:bg-[#003366]/5 min-h-[44px]"
                          >
                            <TranslatedText textKey="applicationStatus.viewFAQ" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
