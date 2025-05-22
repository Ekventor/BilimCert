import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface QualificationLevel {
  id: string;
  level: number;
  title: string;
  description: string;
  credits: string;
  duration: string;
  examples: string[];
  eqfLevel: number;
}

export function QualificationSystemSection() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  
  // Mock data for qualification levels
  const qualificationLevels: QualificationLevel[] = [
    {
      id: 'q1',
      level: 1,
      title: 'Certificate of Secondary Education',
      description: 'Basic secondary education certificate, awarded upon completion of compulsory education.',
      credits: 'N/A',
      duration: '9 years',
      examples: ['General secondary education certificate'],
      eqfLevel: 2
    },
    {
      id: 'q2',
      level: 2,
      title: 'Certificate of General Secondary Education',
      description: 'Complete secondary education certificate, providing access to higher education.',
      credits: 'N/A',
      duration: '11-12 years',
      examples: ['High school diploma', 'Lyceum certificate', 'Gymnasium certificate'],
      eqfLevel: 4
    },
    {
      id: 'q3',
      level: 3,
      title: 'Technical and Vocational Education Certificate',
      description: 'Post-secondary non-tertiary education certificate, providing professional qualifications.',
      credits: '60-180 ECTS',
      duration: '1-3 years',
      examples: ['Technical college diploma', 'Vocational school certificate'],
      eqfLevel: 5
    },
    {
      id: 'q4',
      level: 4,
      title: 'Bachelor\'s Degree',
      description: 'First cycle higher education degree, providing comprehensive knowledge in a field of study.',
      credits: '180-240 ECTS',
      duration: '3-4 years',
      examples: ['Bachelor of Science', 'Bachelor of Arts', 'Bachelor of Engineering'],
      eqfLevel: 6
    },
    {
      id: 'q5',
      level: 5,
      title: 'Master\'s Degree',
      description: 'Second cycle higher education degree, providing advanced knowledge and specialization.',
      credits: '60-120 ECTS',
      duration: '1-2 years',
      examples: ['Master of Science', 'Master of Arts', 'Master of Business Administration'],
      eqfLevel: 7
    },
    {
      id: 'q6',
      level: 6,
      title: 'Doctoral Degree',
      description: 'Third cycle higher education degree, focused on research and advanced professional practice.',
      credits: 'N/A (Research-based)',
      duration: '3-5 years',
      examples: ['Doctor of Philosophy (PhD)', 'Doctor of Science (DSc)'],
      eqfLevel: 8
    }
  ];
  
  // Toggle level expansion
  const toggleLevel = (id: string) => {
    if (expandedLevel === id) {
      setExpandedLevel(null);
    } else {
      setExpandedLevel(id);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="bolognaProcess.qualificationSystem.title" />
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="bolognaProcess.qualificationSystem.description" />
        </p>
      </div>
      
      {/* EQF Comparison */}
      <div className="bg-[#003366]/5 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-[#003366] mb-4">
          <TranslatedText textKey="bolognaProcess.qualificationSystem.eqfComparison.title" />
        </h3>
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="bolognaProcess.qualificationSystem.eqfComparison.description" />
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <TranslatedText textKey="bolognaProcess.qualificationSystem.eqfComparison.nationalLevel" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <TranslatedText textKey="bolognaProcess.qualificationSystem.eqfComparison.eqfLevel" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <TranslatedText textKey="bolognaProcess.qualificationSystem.eqfComparison.qualification" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {qualificationLevels.map((level) => (
                <tr key={level.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#003366]">
                    {level.level}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {level.eqfLevel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {level.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Qualification Framework Visualization */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#003366] mb-4">
          <TranslatedText textKey="bolognaProcess.qualificationSystem.framework.title" />
        </h3>
        
        <div className="relative py-8">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Qualification levels */}
          <div className="space-y-12">
            {qualificationLevels.map((level, index) => (
              <div key={level.id} className={`relative ${index % 2 === 0 ? 'text-right pr-8 md:pr-16' : 'text-left pl-8 md:pl-16'}`}>
                {/* Level circle */}
                <div className="absolute top-0 left-1/2 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold transform -translate-x-1/2">
                  {level.level}
                </div>
                
                {/* Content */}
                <div className={`inline-block max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => toggleLevel(level.id)}
                    aria-expanded={expandedLevel === level.id}
                  >
                    <h4 className="text-lg font-medium text-[#003366]">{level.title}</h4>
                    <p className="text-sm text-gray-500">EQF Level: {level.eqfLevel}</p>
                  </button>
                  
                  {expandedLevel === level.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">{level.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium text-[#003366]">Duration:</span>
                          <p className="text-gray-600">{level.duration}</p>
                        </div>
                        <div>
                          <span className="font-medium text-[#003366]">Credits:</span>
                          <p className="text-gray-600">{level.credits}</p>
                        </div>
                      </div>
                      {level.examples.length > 0 && (
                        <div className="mt-2">
                          <span className="font-medium text-[#003366]">Examples:</span>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            {level.examples.map((example, i) => (
                              <li key={i}>{example}</li>
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
      </div>
      
      {/* Download Resources */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-[#003366] mb-4">
          <TranslatedText textKey="bolognaProcess.qualificationSystem.resources.title" />
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/documents/national-qualification-framework.pdf"
            className="flex items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#003366]">National Qualification Framework</h4>
              <p className="text-xs text-gray-500">PDF, 1.2 MB</p>
            </div>
          </a>
          
          <a
            href="/documents/eqf-comparison-guide.pdf"
            className="flex items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#003366]">EQF Comparison Guide</h4>
              <p className="text-xs text-gray-500">PDF, 850 KB</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
