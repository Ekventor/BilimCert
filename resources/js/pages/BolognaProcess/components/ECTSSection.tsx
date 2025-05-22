import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export function ECTSSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  
  // Mock data for ECTS FAQs
  const faqs: FAQ[] = [
    {
      id: 'faq1',
      question: 'What is ECTS and what are its main features?',
      answer: 'The European Credit Transfer and Accumulation System (ECTS) is a learner-centered system for credit accumulation and transfer. Its main features include: transparency of learning, teaching and assessment processes; recognition of prior learning and experience; and the ability to transfer credits between institutions and countries.'
    },
    {
      id: 'faq2',
      question: 'How are ECTS credits allocated to courses?',
      answer: 'ECTS credits are allocated based on the workload students need to complete in order to achieve expected learning outcomes. The workload indicates the time students typically need to complete all learning activities (such as lectures, seminars, projects, practical work, self-study, and examinations). 60 ECTS credits are allocated to the workload of a full-time academic year.'
    },
    {
      id: 'faq3',
      question: 'How do ECTS credits relate to learning outcomes?',
      answer: 'ECTS credits are awarded when the student has completed the required learning activities and achieved the defined learning outcomes. Learning outcomes describe what a student is expected to know, understand, and be able to do after successful completion of a process of learning.'
    },
    {
      id: 'faq4',
      question: 'How are ECTS credits transferred between institutions?',
      answer: 'ECTS credits are transferred through a process that includes: learning agreements between the sending and receiving institutions; transcripts of records that document the student\'s achievements; and recognition of the credits by the receiving institution. This process ensures that students can have their academic achievements recognized when moving between different higher education institutions.'
    },
    {
      id: 'faq5',
      question: 'What is the ECTS grading scale?',
      answer: 'The ECTS grading scale is a tool for converting grades from one institution to another. It is not meant to replace the local grading systems but to make them more transparent. The ECTS scale is based on the rank of a student in a given assessment, showing how the student performed relative to other students in the same assessment.'
    },
    {
      id: 'faq6',
      question: 'How many ECTS credits are needed for a degree?',
      answer: 'Typically, a Bachelor\'s degree requires 180-240 ECTS credits (3-4 years of full-time study). A Master\'s degree requires 90-120 ECTS credits (1.5-2 years). Some integrated Master\'s programs may require 300 ECTS credits (5 years). Doctoral degrees are not typically measured in ECTS credits but usually require 3-4 years of full-time study.'
    }
  ];
  
  // Toggle FAQ expansion
  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="bolognaProcess.ects.title" />
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="bolognaProcess.ects.description" />
        </p>
      </div>
      
      {/* ECTS Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="ECTS information">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            <TranslatedText textKey="bolognaProcess.ects.tabs.overview" />
          </button>
          
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'keyFeatures'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('keyFeatures')}
          >
            <TranslatedText textKey="bolognaProcess.ects.tabs.keyFeatures" />
          </button>
          
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'implementation'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('implementation')}
          >
            <TranslatedText textKey="bolognaProcess.ects.tabs.implementation" />
          </button>
          
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'faq'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('faq')}
          >
            <TranslatedText textKey="bolognaProcess.ects.tabs.faq" />
          </button>
        </nav>
      </div>
      
      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <div>
          <div className="prose max-w-none">
            <p className="mb-4">
              <TranslatedText textKey="bolognaProcess.ects.overview.paragraph1" />
            </p>
            <p className="mb-4">
              <TranslatedText textKey="bolognaProcess.ects.overview.paragraph2" />
            </p>
            <p className="mb-4">
              <TranslatedText textKey="bolognaProcess.ects.overview.paragraph3" />
            </p>
          </div>
          
          <div className="bg-[#003366]/5 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">
              <TranslatedText textKey="bolognaProcess.ects.overview.keyPoints.title" />
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><TranslatedText textKey="bolognaProcess.ects.overview.keyPoints.item1" /></li>
              <li><TranslatedText textKey="bolognaProcess.ects.overview.keyPoints.item2" /></li>
              <li><TranslatedText textKey="bolognaProcess.ects.overview.keyPoints.item3" /></li>
              <li><TranslatedText textKey="bolognaProcess.ects.overview.keyPoints.item4" /></li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Key Features Tab Content */}
      {activeTab === 'keyFeatures' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-[#003366] mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditSystem.title" />
              </h3>
              <p className="text-gray-600 mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditSystem.description" />
              </p>
              <div className="bg-[#003366]/5 p-3 rounded-lg">
                <p className="text-sm">
                  <strong><TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditSystem.example.title" />:</strong> <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditSystem.example.content" />
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-[#003366] mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.learningOutcomes.title" />
              </h3>
              <p className="text-gray-600 mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.learningOutcomes.description" />
              </p>
              <div className="bg-[#003366]/5 p-3 rounded-lg">
                <p className="text-sm">
                  <strong><TranslatedText textKey="bolognaProcess.ects.keyFeatures.learningOutcomes.example.title" />:</strong> <TranslatedText textKey="bolognaProcess.ects.keyFeatures.learningOutcomes.example.content" />
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-[#003366] mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.workload.title" />
              </h3>
              <p className="text-gray-600 mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.workload.description" />
              </p>
              <div className="bg-[#003366]/5 p-3 rounded-lg">
                <p className="text-sm">
                  <strong><TranslatedText textKey="bolognaProcess.ects.keyFeatures.workload.example.title" />:</strong> <TranslatedText textKey="bolognaProcess.ects.keyFeatures.workload.example.content" />
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-[#003366] mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.recognition.title" />
              </h3>
              <p className="text-gray-600 mb-3">
                <TranslatedText textKey="bolognaProcess.ects.keyFeatures.recognition.description" />
              </p>
              <div className="bg-[#003366]/5 p-3 rounded-lg">
                <p className="text-sm">
                  <strong><TranslatedText textKey="bolognaProcess.ects.keyFeatures.recognition.example.title" />:</strong> <TranslatedText textKey="bolognaProcess.ects.keyFeatures.recognition.example.content" />
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium text-[#003366] mb-4">
              <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.title" />
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.degreeType" />
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.ectsCredits" />
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.duration" />
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#003366]">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.bachelor" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">180-240</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-4 <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.years" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#003366]">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.master" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90-120</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.5-2 <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.years" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#003366]">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.integratedMaster" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.years" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#003366]">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.doctoral" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.notApplicable" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-4 <TranslatedText textKey="bolognaProcess.ects.keyFeatures.creditStructure.years" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* Implementation Tab Content */}
      {activeTab === 'implementation' && (
        <div>
          <div className="prose max-w-none mb-6">
            <p className="mb-4">
              <TranslatedText textKey="bolognaProcess.ects.implementation.paragraph1" />
            </p>
            <p className="mb-4">
              <TranslatedText textKey="bolognaProcess.ects.implementation.paragraph2" />
            </p>
          </div>
          
          <div className="bg-[#003366]/5 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">
              <TranslatedText textKey="bolognaProcess.ects.implementation.steps.title" />
            </h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <h4 className="font-medium text-[#003366]">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step1.title" />
                </h4>
                <p className="text-gray-600">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step1.description" />
                </p>
              </li>
              <li>
                <h4 className="font-medium text-[#003366]">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step2.title" />
                </h4>
                <p className="text-gray-600">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step2.description" />
                </p>
              </li>
              <li>
                <h4 className="font-medium text-[#003366]">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step3.title" />
                </h4>
                <p className="text-gray-600">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step3.description" />
                </p>
              </li>
              <li>
                <h4 className="font-medium text-[#003366]">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step4.title" />
                </h4>
                <p className="text-gray-600">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step4.description" />
                </p>
              </li>
              <li>
                <h4 className="font-medium text-[#003366]">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step5.title" />
                </h4>
                <p className="text-gray-600">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.steps.step5.description" />
                </p>
              </li>
            </ol>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-medium text-[#003366] mb-4">
              <TranslatedText textKey="bolognaProcess.ects.implementation.documents.title" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-[#003366] mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.courseGuide.title" />
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.courseGuide.description" />
                </p>
                <a
                  href="/documents/ects-course-catalogue-template.pdf"
                  className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#FF6600]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.download" />
                </a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-[#003366] mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.learningAgreement.title" />
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.learningAgreement.description" />
                </p>
                <a
                  href="/documents/ects-learning-agreement-template.pdf"
                  className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#FF6600]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.download" />
                </a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-[#003366] mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.transcript.title" />
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.transcript.description" />
                </p>
                <a
                  href="/documents/ects-transcript-template.pdf"
                  className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#FF6600]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.download" />
                </a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-[#003366] mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.diploma.title" />
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.diploma.description" />
                </p>
                <a
                  href="/documents/diploma-supplement-template.pdf"
                  className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#FF6600]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <TranslatedText textKey="bolognaProcess.ects.implementation.documents.download" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* FAQ Tab Content */}
      {activeTab === 'faq' && (
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-inset"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={expandedFaq === faq.id}
              >
                <h3 className="text-lg font-medium text-[#003366]">{faq.question}</h3>
                <svg
                  className={`h-5 w-5 text-gray-500 transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {expandedFaq === faq.id && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
