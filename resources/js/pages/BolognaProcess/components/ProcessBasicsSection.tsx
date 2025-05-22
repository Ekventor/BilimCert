import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface Milestone {
  year: number;
  location: string;
  title: string;
  description: string;
  achievements: string[];
}

export function ProcessBasicsSection() {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);
  
  // Mock data for Bologna Process milestones
  const milestones: Milestone[] = [
    {
      year: 1998,
      location: 'Sorbonne, France',
      title: 'Sorbonne Declaration',
      description: 'The initial step towards the Bologna Process, signed by the education ministers of France, Germany, Italy, and the United Kingdom.',
      achievements: [
        'Harmonization of the architecture of the European higher education system',
        'Promotion of a common frame of reference for higher education qualifications',
        'Enhancement of student mobility and employability'
      ]
    },
    {
      year: 1999,
      location: 'Bologna, Italy',
      title: 'Bologna Declaration',
      description: 'The official start of the Bologna Process, signed by ministers from 29 European countries.',
      achievements: [
        'Adoption of a system of easily readable and comparable degrees',
        'Establishment of a system based on two main cycles (undergraduate/graduate)',
        'Introduction of a credit system (ECTS)',
        'Promotion of mobility for students and academic staff',
        'Promotion of European cooperation in quality assurance',
        'Promotion of the European dimension in higher education'
      ]
    },
    {
      year: 2001,
      location: 'Prague, Czech Republic',
      title: 'Prague Communiqué',
      description: 'The first follow-up meeting of the Bologna Process, which expanded the objectives and added new participating countries.',
      achievements: [
        'Emphasis on lifelong learning',
        'Involvement of higher education institutions and students',
        'Promotion of the attractiveness of the European Higher Education Area'
      ]
    },
    {
      year: 2003,
      location: 'Berlin, Germany',
      title: 'Berlin Communiqué',
      description: 'The second follow-up meeting, which added doctoral studies as the third cycle of the Bologna Process.',
      achievements: [
        'Integration of doctoral studies as the third cycle',
        'Recognition of degrees and periods of study',
        'Establishment of a quality assurance system at institutional, national, and European levels',
        'Elaboration of an overarching framework of qualifications'
      ]
    },
    {
      year: 2005,
      location: 'Bergen, Norway',
      title: 'Bergen Communiqué',
      description: 'The third follow-up meeting, which adopted the Standards and Guidelines for Quality Assurance in the European Higher Education Area.',
      achievements: [
        'Adoption of standards and guidelines for quality assurance',
        'Adoption of the framework of qualifications for the European Higher Education Area',
        'Creation of opportunities for flexible learning paths in higher education'
      ]
    },
    {
      year: 2007,
      location: 'London, UK',
      title: 'London Communiqué',
      description: 'The fourth follow-up meeting, which focused on the social dimension of higher education and global outreach.',
      achievements: [
        'Focus on the social dimension of higher education',
        'Development of strategies for the global dimension of European higher education',
        'Improvement of employability of graduates'
      ]
    },
    {
      year: 2009,
      location: 'Leuven/Louvain-la-Neuve, Belgium',
      title: 'Leuven Communiqué',
      description: 'The fifth follow-up meeting, which set priorities for the European Higher Education Area for the next decade.',
      achievements: [
        'Social dimension: equitable access and completion',
        'Lifelong learning',
        'Employability',
        'Student-centered learning and the teaching mission of higher education',
        'International openness',
        'Mobility',
        'Data collection',
        'Multidimensional transparency tools'
      ]
    },
    {
      year: 2010,
      location: 'Budapest-Vienna',
      title: 'Budapest-Vienna Declaration',
      description: 'The official launch of the European Higher Education Area (EHEA), with Kazakhstan joining as the first Central Asian country.',
      achievements: [
        'Official launch of the European Higher Education Area',
        'Expansion of the EHEA to include Kazakhstan',
        'Reaffirmation of the commitment to academic freedom, autonomy, and accountability'
      ]
    },
    {
      year: 2012,
      location: 'Bucharest, Romania',
      title: 'Bucharest Communiqué',
      description: 'The follow-up meeting that focused on consolidating the EHEA and setting goals for 2012-2015.',
      achievements: [
        'Providing quality higher education for all',
        'Enhancing employability of graduates',
        'Strengthening mobility for better learning',
        'Improving data collection and transparency'
      ]
    },
    {
      year: 2015,
      location: 'Yerevan, Armenia',
      title: 'Yerevan Communiqué',
      description: 'The follow-up meeting that adopted the revised Standards and Guidelines for Quality Assurance in the EHEA.',
      achievements: [
        'Adoption of revised Standards and Guidelines for Quality Assurance',
        'Adoption of the European Approach for Quality Assurance of Joint Programmes',
        'Commitment to the implementation of agreed structural reforms'
      ]
    },
    {
      year: 2018,
      location: 'Paris, France',
      title: 'Paris Communiqué',
      description: 'The follow-up meeting that focused on innovation in teaching and learning and the social dimension of higher education.',
      achievements: [
        'Innovation in teaching and learning',
        'Social dimension of higher education',
        'Implementation of key commitments',
        'Structured peer support for the implementation of Bologna tools'
      ]
    },
    {
      year: 2020,
      location: 'Rome, Italy',
      title: 'Rome Communiqué',
      description: 'The follow-up meeting that adopted a vision for the EHEA for 2030.',
      achievements: [
        'Adoption of the vision for the EHEA for 2030',
        'Commitment to building an inclusive, innovative, and interconnected EHEA',
        'Focus on digitalization and green transition',
        'Strengthening the social dimension of higher education'
      ]
    }
  ];
  
  // Toggle milestone expansion
  const toggleMilestone = (year: number) => {
    if (expandedMilestone === year) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(year);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="bolognaProcess.basics.title" />
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="bolognaProcess.basics.description" />
        </p>
      </div>
      
      {/* Key Objectives */}
      <div className="bg-[#003366]/5 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-[#003366] mb-4">
          <TranslatedText textKey="bolognaProcess.basics.objectives.title" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-2">1</div>
              <h4 className="text-lg font-medium text-[#003366]">
                <TranslatedText textKey="bolognaProcess.basics.objectives.item1.title" />
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              <TranslatedText textKey="bolognaProcess.basics.objectives.item1.description" />
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-2">2</div>
              <h4 className="text-lg font-medium text-[#003366]">
                <TranslatedText textKey="bolognaProcess.basics.objectives.item2.title" />
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              <TranslatedText textKey="bolognaProcess.basics.objectives.item2.description" />
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-2">3</div>
              <h4 className="text-lg font-medium text-[#003366]">
                <TranslatedText textKey="bolognaProcess.basics.objectives.item3.title" />
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              <TranslatedText textKey="bolognaProcess.basics.objectives.item3.description" />
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-2">4</div>
              <h4 className="text-lg font-medium text-[#003366]">
                <TranslatedText textKey="bolognaProcess.basics.objectives.item4.title" />
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              <TranslatedText textKey="bolognaProcess.basics.objectives.item4.description" />
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-2">5</div>
              <h4 className="text-lg font-medium text-[#003366]">
                <TranslatedText textKey="bolognaProcess.basics.objectives.item5.title" />
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              <TranslatedText textKey="bolognaProcess.basics.objectives.item5.description" />
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-2">6</div>
              <h4 className="text-lg font-medium text-[#003366]">
                <TranslatedText textKey="bolognaProcess.basics.objectives.item6.title" />
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              <TranslatedText textKey="bolognaProcess.basics.objectives.item6.description" />
            </p>
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <h3 className="text-xl font-semibold text-[#003366] mb-4">
        <TranslatedText textKey="bolognaProcess.basics.timeline.title" />
      </h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {/* Milestones */}
        <div className="space-y-4 ml-8">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="relative">
              {/* Timeline Circle */}
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-[#003366] flex items-center justify-center"></div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-inset"
                  onClick={() => toggleMilestone(milestone.year)}
                  aria-expanded={expandedMilestone === milestone.year}
                >
                  <div>
                    <h4 className="text-lg font-medium text-[#003366]">{milestone.year}: {milestone.title}</h4>
                    <p className="text-sm text-gray-500">{milestone.location}</p>
                  </div>
                  <svg
                    className={`h-5 w-5 text-gray-500 transform ${expandedMilestone === milestone.year ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {expandedMilestone === milestone.year && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">{milestone.description}</p>
                    
                    <h5 className="font-medium text-[#003366] mb-2">Key Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {milestone.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
