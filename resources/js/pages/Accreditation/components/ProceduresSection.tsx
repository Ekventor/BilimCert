import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';

interface Procedure {
  id: string;
  title: string;
  description: string;
  steps: {
    number: number;
    title: string;
    description: string;
    duration: string;
    documents?: string[];
  }[];
  type: 'institutional' | 'program';
}

export function ProceduresSection() {
  const [activeTab, setActiveTab] = useState('institutional');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  // Mock data for procedures
  const procedures: Procedure[] = [
    {
      id: 'p1',
      title: 'Institutional Accreditation',
      description: 'Institutional accreditation evaluates the overall quality and effectiveness of an educational institution as a whole.',
      type: 'institutional',
      steps: [
        {
          number: 1,
          title: 'Application Submission',
          description: 'The institution submits an application for accreditation along with required documentation.',
          duration: '1-2 weeks',
          documents: [
            'Application Form',
            'Self-Assessment Report',
            'Strategic Plan',
            'Organizational Structure',
            'Financial Statements'
          ]
        },
        {
          number: 2,
          title: 'Preliminary Review',
          description: 'The accreditation agency reviews the application and documentation for completeness and eligibility.',
          duration: '2-4 weeks'
        },
        {
          number: 3,
          title: 'Self-Assessment',
          description: 'The institution conducts a comprehensive self-assessment against accreditation standards and prepares a detailed report.',
          duration: '3-6 months',
          documents: [
            'Self-Assessment Report Template',
            'Evidence Collection Guidelines',
            'Data Analysis Framework'
          ]
        },
        {
          number: 4,
          title: 'External Review',
          description: 'A team of external experts visits the institution to verify the self-assessment and evaluate compliance with standards.',
          duration: '3-5 days',
          documents: [
            'Site Visit Schedule',
            'Interview Lists',
            'Document Request List'
          ]
        },
        {
          number: 5,
          title: 'Review Report',
          description: 'The external review team prepares a detailed report with findings, commendations, and recommendations.',
          duration: '4-6 weeks'
        },
        {
          number: 6,
          title: 'Accreditation Decision',
          description: 'The accreditation agency makes a decision based on the self-assessment and external review reports.',
          duration: '4-8 weeks'
        },
        {
          number: 7,
          title: 'Follow-up and Monitoring',
          description: 'The institution implements recommendations and submits progress reports as required.',
          duration: 'Ongoing',
          documents: [
            'Progress Report Template',
            'Improvement Plan Guidelines'
          ]
        }
      ]
    },
    {
      id: 'p2',
      title: 'Program Accreditation',
      description: 'Program accreditation evaluates the quality and effectiveness of specific academic programs offered by an institution.',
      type: 'program',
      steps: [
        {
          number: 1,
          title: 'Application Submission',
          description: 'The institution submits an application for program accreditation along with required documentation.',
          duration: '1-2 weeks',
          documents: [
            'Program Accreditation Application Form',
            'Program Self-Assessment Report',
            'Curriculum Documentation',
            'Faculty Profiles'
          ]
        },
        {
          number: 2,
          title: 'Preliminary Review',
          description: 'The accreditation agency reviews the application and documentation for completeness and eligibility.',
          duration: '2-3 weeks'
        },
        {
          number: 3,
          title: 'Program Self-Assessment',
          description: 'The program conducts a comprehensive self-assessment against program-specific accreditation standards.',
          duration: '2-4 months',
          documents: [
            'Program Self-Assessment Template',
            'Course Mapping Guidelines',
            'Learning Outcomes Assessment Framework'
          ]
        },
        {
          number: 4,
          title: 'External Review',
          description: 'A team of subject-matter experts visits the institution to evaluate the program against standards.',
          duration: '2-3 days',
          documents: [
            'Program Review Schedule',
            'Classroom Observation Protocol',
            'Student Work Sample Guidelines'
          ]
        },
        {
          number: 5,
          title: 'Review Report',
          description: 'The external review team prepares a detailed report with findings specific to the program.',
          duration: '3-4 weeks'
        },
        {
          number: 6,
          title: 'Accreditation Decision',
          description: 'The accreditation agency makes a decision based on the program-specific assessment and review.',
          duration: '4-6 weeks'
        },
        {
          number: 7,
          title: 'Follow-up and Monitoring',
          description: 'The program implements recommendations and submits progress reports as required.',
          duration: 'Ongoing',
          documents: [
            'Program Improvement Plan Template',
            'Annual Program Report Guidelines'
          ]
        }
      ]
    }
  ];
  
  // Get the active procedure based on the selected tab
  const activeProcedure = procedures.find(procedure => procedure.type === activeTab);
  
  // Toggle step expansion
  const toggleStep = (number: number) => {
    if (expandedStep === number) {
      setExpandedStep(null);
    } else {
      setExpandedStep(number);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="accreditation.procedures.title" />
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="accreditation.procedures.description" />
        </p>
      </div>
      
      {/* Procedure Type Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Procedure types">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'institutional'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('institutional')}
          >
            <TranslatedText textKey="accreditation.procedures.institutionalTab" />
          </button>
          
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'program'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('program')}
          >
            <TranslatedText textKey="accreditation.procedures.programTab" />
          </button>
        </nav>
      </div>
      
      {/* Procedure Content */}
      {activeProcedure && (
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-[#003366] mb-2">{activeProcedure.title}</h3>
            <p className="text-gray-600">{activeProcedure.description}</p>
          </div>
          
          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Steps */}
            <div className="space-y-6 ml-8">
              {activeProcedure.steps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Timeline Circle */}
                  <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-[#003366] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step.number}</span>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-inset"
                      onClick={() => toggleStep(step.number)}
                      aria-expanded={expandedStep === step.number}
                    >
                      <div>
                        <h4 className="text-lg font-medium text-[#003366]">{step.title}</h4>
                        <p className="text-sm text-gray-500">
                          <TranslatedText textKey="accreditation.procedures.duration" />: {step.duration}
                        </p>
                      </div>
                      <svg
                        className={`h-5 w-5 text-gray-500 transform ${expandedStep === step.number ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {expandedStep === step.number && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        
                        {step.documents && step.documents.length > 0 && (
                          <div>
                            <h5 className="font-medium text-[#003366] mb-2">
                              <TranslatedText textKey="accreditation.procedures.requiredDocuments" />:
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {step.documents.map((document, index) => (
                                <li key={index}>{document}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link
              href="/application"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#FF6600] hover:bg-[#FF7F00]"
            >
              <TranslatedText textKey="accreditation.procedures.applyButton" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
