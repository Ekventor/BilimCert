import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface Criterion {
  id: string;
  category: string;
  title: string;
  description: string;
  standards: string[];
  weight: number;
}

export function EvaluationCriteriaSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCriterion, setExpandedCriterion] = useState<string | null>(null);
  
  // Mock data for criteria
  const criteria: Criterion[] = [
    {
      id: 'c1',
      category: 'institutional',
      title: 'Mission and Strategic Planning',
      description: 'Assessment of the institution\'s mission, vision, and strategic planning process.',
      standards: [
        'The institution has a clearly defined mission and vision that guides its operations.',
        'Strategic planning is comprehensive and involves key stakeholders.',
        'The institution regularly reviews and updates its strategic plan.',
        'The mission and strategic plan align with national education priorities.'
      ],
      weight: 15
    },
    {
      id: 'c2',
      category: 'institutional',
      title: 'Governance and Management',
      description: 'Evaluation of the institution\'s governance structure, leadership, and management practices.',
      standards: [
        'The institution has an effective governance structure with clear roles and responsibilities.',
        'Decision-making processes are transparent and inclusive.',
        'The institution has policies and procedures for effective management.',
        'Leadership demonstrates commitment to quality and continuous improvement.'
      ],
      weight: 15
    },
    {
      id: 'c3',
      category: 'academic',
      title: 'Curriculum Design and Development',
      description: 'Assessment of the institution\'s curriculum design, development, and review processes.',
      standards: [
        'Curricula are designed to achieve intended learning outcomes.',
        'Curriculum development involves input from industry and academic experts.',
        'Regular curriculum review processes are in place.',
        'Curricula reflect current knowledge and practices in the discipline.'
      ],
      weight: 20
    },
    {
      id: 'c4',
      category: 'academic',
      title: 'Teaching and Learning',
      description: 'Evaluation of teaching methodologies, learning resources, and assessment practices.',
      standards: [
        'Teaching methods are appropriate for achieving learning outcomes.',
        'Learning resources are adequate and accessible to all students.',
        'Assessment methods are valid, reliable, and aligned with learning outcomes.',
        'Feedback to students is timely, constructive, and supports learning.'
      ],
      weight: 20
    },
    {
      id: 'c5',
      category: 'resources',
      title: 'Human Resources',
      description: 'Assessment of faculty qualifications, development, and support systems.',
      standards: [
        'Faculty are qualified and experienced in their disciplines.',
        'Faculty development programs are in place and effective.',
        'Faculty workload is reasonable and supports quality teaching and research.',
        'Faculty evaluation processes are fair and transparent.'
      ],
      weight: 10
    },
    {
      id: 'c6',
      category: 'resources',
      title: 'Infrastructure and Learning Resources',
      description: 'Evaluation of physical facilities, technology infrastructure, and learning resources.',
      standards: [
        'Physical facilities are adequate for the programs offered.',
        'Technology infrastructure supports teaching, learning, and administration.',
        'Library resources are sufficient and accessible.',
        'Laboratories and specialized equipment meet program requirements.'
      ],
      weight: 10
    },
    {
      id: 'c7',
      category: 'quality',
      title: 'Quality Assurance System',
      description: 'Assessment of internal quality assurance mechanisms and continuous improvement processes.',
      standards: [
        'The institution has a comprehensive quality assurance system.',
        'Quality assurance processes involve all stakeholders.',
        'Data is collected and analyzed to inform improvement.',
        'The institution demonstrates a commitment to continuous improvement.'
      ],
      weight: 15
    },
    {
      id: 'c8',
      category: 'impact',
      title: 'Research and Innovation',
      description: 'Evaluation of research activities, innovation, and knowledge transfer.',
      standards: [
        'The institution has a research strategy aligned with its mission.',
        'Faculty are engaged in research and scholarly activities.',
        'Research output is of good quality and impact.',
        'The institution supports innovation and knowledge transfer.'
      ],
      weight: 10
    },
    {
      id: 'c9',
      category: 'impact',
      title: 'Community Engagement',
      description: 'Assessment of the institution\'s engagement with the community and contribution to society.',
      standards: [
        'The institution has programs and activities that benefit the community.',
        'Community engagement is aligned with the institution\'s mission.',
        'The institution collaborates with external stakeholders.',
        'The impact of community engagement is evaluated.'
      ],
      weight: 5
    },
  ];
  
  // Filter criteria by category
  const filteredCriteria = activeCategory === 'all' 
    ? criteria 
    : criteria.filter(criterion => criterion.category === activeCategory);
  
  // Get unique categories
  const categories = Array.from(new Set(criteria.map(criterion => criterion.category)));
  
  // Toggle criterion expansion
  const toggleCriterion = (id: string) => {
    if (expandedCriterion === id) {
      setExpandedCriterion(null);
    } else {
      setExpandedCriterion(id);
    }
  };
  
  // Category label mapping
  const categoryLabels: Record<string, string> = {
    institutional: 'Institutional Criteria',
    academic: 'Academic Criteria',
    resources: 'Resources and Support',
    quality: 'Quality Assurance',
    impact: 'Impact and Outreach'
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="accreditation.criteria.title" />
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="accreditation.criteria.description" />
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Criteria categories">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeCategory === 'all'
                ? 'border-[#FF6600] text-[#FF6600]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Categories
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeCategory === category
                  ? 'border-[#FF6600] text-[#FF6600]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Criteria List */}
      <div className="space-y-4">
        {filteredCriteria.map(criterion => (
          <div key={criterion.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-inset"
              onClick={() => toggleCriterion(criterion.id)}
              aria-expanded={expandedCriterion === criterion.id}
            >
              <div>
                <h3 className="text-lg font-medium text-[#003366]">{criterion.title}</h3>
                <p className="text-sm text-gray-500">{categoryLabels[criterion.category]}</p>
              </div>
              <div className="flex items-center">
                <span className="bg-[#003366] text-white text-xs font-semibold rounded-full px-2 py-1 mr-2">
                  {criterion.weight}%
                </span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform ${expandedCriterion === criterion.id ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            
            {expandedCriterion === criterion.id && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 mb-4">{criterion.description}</p>
                
                <h4 className="font-medium text-[#003366] mb-2">Standards:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {criterion.standards.map((standard, index) => (
                    <li key={index}>{standard}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
