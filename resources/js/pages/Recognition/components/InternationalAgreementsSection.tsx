import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface Agreement {
  id: string;
  title: string;
  description: string;
  countries: string[];
  date: string;
  type: 'bilateral' | 'multilateral' | 'convention';
  url?: string;
}

export function InternationalAgreementsSection() {
  const [activeType, setActiveType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Sample agreements data
  const agreements: Agreement[] = [
    {
      id: 'lisbon',
      title: 'recognition.agreements.lisbon.title',
      description: 'recognition.agreements.lisbon.description',
      countries: ['EU Member States', 'EEA Countries', 'Switzerland'],
      date: '1997-04-11',
      type: 'convention',
      url: 'https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/165',
    },
    {
      id: 'cis',
      title: 'recognition.agreements.cis.title',
      description: 'recognition.agreements.cis.description',
      countries: ['Russia', 'Belarus', 'Ukraine', 'Moldova', 'Armenia', 'Azerbaijan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Uzbekistan'],
      date: '1998-05-31',
      type: 'multilateral',
    },
    {
      id: 'russia',
      title: 'recognition.agreements.russia.title',
      description: 'recognition.agreements.russia.description',
      countries: ['Russia'],
      date: '2004-01-12',
      type: 'bilateral',
    },
    {
      id: 'china',
      title: 'recognition.agreements.china.title',
      description: 'recognition.agreements.china.description',
      countries: ['China'],
      date: '2006-06-20',
      type: 'bilateral',
    },
    {
      id: 'turkey',
      title: 'recognition.agreements.turkey.title',
      description: 'recognition.agreements.turkey.description',
      countries: ['Turkey'],
      date: '2010-10-22',
      type: 'bilateral',
    },
    {
      id: 'unesco',
      title: 'recognition.agreements.unesco.title',
      description: 'recognition.agreements.unesco.description',
      countries: ['Global'],
      date: '2019-11-25',
      type: 'convention',
      url: 'https://en.unesco.org/themes/higher-education/recognition-qualifications/global-convention',
    },
  ];
  
  // Filter agreements based on active type and search query
  const filteredAgreements = agreements.filter((agreement) => {
    const matchesType = activeType === 'all' || agreement.type === activeType;
    const matchesSearch = searchQuery === '' || 
      agreement.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      agreement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agreement.countries.some(country => country.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesSearch;
  });
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#003366]">
        <TranslatedText textKey="recognition.agreements.title" />
      </h2>
      
      <p className="text-gray-600">
        <TranslatedText textKey="recognition.agreements.description" />
      </p>
      
      <div className="bg-[#003366]/5 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-medium text-[#003366] mb-4">
          <TranslatedText textKey="recognition.agreements.importance.title" />
        </h3>
        <div className="prose max-w-none">
          <p>
            <TranslatedText textKey="recognition.agreements.importance.description" />
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <TranslatedText textKey="recognition.agreements.importance.point1" />
            </li>
            <li>
              <TranslatedText textKey="recognition.agreements.importance.point2" />
            </li>
            <li>
              <TranslatedText textKey="recognition.agreements.importance.point3" />
            </li>
            <li>
              <TranslatedText textKey="recognition.agreements.importance.point4" />
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveType('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeType === 'all'
                  ? 'bg-[#003366] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <TranslatedText textKey="recognition.agreements.types.all" />
            </button>
            <button
              onClick={() => setActiveType('bilateral')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeType === 'bilateral'
                  ? 'bg-[#003366] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <TranslatedText textKey="recognition.agreements.types.bilateral" />
            </button>
            <button
              onClick={() => setActiveType('multilateral')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeType === 'multilateral'
                  ? 'bg-[#003366] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <TranslatedText textKey="recognition.agreements.types.multilateral" />
            </button>
            <button
              onClick={() => setActiveType('convention')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeType === 'convention'
                  ? 'bg-[#003366] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <TranslatedText textKey="recognition.agreements.types.convention" />
            </button>
          </div>
          
          <div className="w-full sm:w-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search agreements or countries..."
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredAgreements.length > 0 ? (
            filteredAgreements.map((agreement) => (
              <div key={agreement.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="text-lg font-medium text-[#003366]">
                    <TranslatedText textKey={agreement.title} />
                  </h4>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                    {formatDate(agreement.date)}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  <TranslatedText textKey={agreement.description} />
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {agreement.countries.map((country, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    agreement.type === 'bilateral' ? 'bg-green-100 text-green-800' :
                    agreement.type === 'multilateral' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    <TranslatedText textKey={`recognition.agreements.types.${agreement.type}`} />
                  </span>
                  
                  {agreement.url && (
                    <a
                      href={agreement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#004080]"
                    >
                      <TranslatedText textKey="recognition.agreements.viewAgreement" />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500">
                <TranslatedText textKey="recognition.agreements.noAgreementsFound" />
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <TranslatedText textKey="recognition.agreements.info" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
