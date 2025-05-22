import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface LegalDocument {
  id: string;
  title: string;
  description: string;
  date: string;
  number: string;
  category: 'law' | 'regulation' | 'order' | 'standard';
  url?: string;
}

export function LegalFrameworkSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Sample legal documents data
  const legalDocuments: LegalDocument[] = [
    {
      id: 'law1',
      title: 'recognition.legal.documents.law1.title',
      description: 'recognition.legal.documents.law1.description',
      date: '2007-07-27',
      number: '319-III',
      category: 'law',
      url: 'https://adilet.zan.kz/eng/docs/Z070000319_',
    },
    {
      id: 'law2',
      title: 'recognition.legal.documents.law2.title',
      description: 'recognition.legal.documents.law2.description',
      date: '2011-10-24',
      number: '487-IV',
      category: 'law',
      url: 'https://adilet.zan.kz/eng/docs/Z1100000487',
    },
    {
      id: 'regulation1',
      title: 'recognition.legal.documents.regulation1.title',
      description: 'recognition.legal.documents.regulation1.description',
      date: '2016-01-13',
      number: '19',
      category: 'regulation',
    },
    {
      id: 'regulation2',
      title: 'recognition.legal.documents.regulation2.title',
      description: 'recognition.legal.documents.regulation2.description',
      date: '2018-11-30',
      number: '668',
      category: 'regulation',
    },
    {
      id: 'order1',
      title: 'recognition.legal.documents.order1.title',
      description: 'recognition.legal.documents.order1.description',
      date: '2021-04-15',
      number: '152',
      category: 'order',
    },
    {
      id: 'standard1',
      title: 'recognition.legal.documents.standard1.title',
      description: 'recognition.legal.documents.standard1.description',
      date: '2019-09-01',
      number: 'ST RK 3.1-2019',
      category: 'standard',
    },
  ];
  
  // Filter documents based on active category and search query
  const filteredDocuments = legalDocuments.filter((doc) => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.number.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#003366]">
        <TranslatedText textKey="recognition.legal.title" />
      </h2>
      
      <p className="text-gray-600">
        <TranslatedText textKey="recognition.legal.description" />
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-[#003366] mb-4">
            <TranslatedText textKey="recognition.legal.mainLaw.title" />
          </h3>
          <div className="prose max-w-none">
            <p>
              <TranslatedText textKey="recognition.legal.mainLaw.description" />
            </p>
            <blockquote className="border-l-4 border-[#003366]/30 pl-4 italic text-gray-600 my-4">
              <TranslatedText textKey="recognition.legal.mainLaw.quote" />
            </blockquote>
            <p>
              <TranslatedText textKey="recognition.legal.mainLaw.explanation" />
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeCategory === 'all'
                    ? 'bg-[#003366] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <TranslatedText textKey="recognition.legal.categories.all" />
              </button>
              <button
                onClick={() => setActiveCategory('law')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeCategory === 'law'
                    ? 'bg-[#003366] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <TranslatedText textKey="recognition.legal.categories.laws" />
              </button>
              <button
                onClick={() => setActiveCategory('regulation')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeCategory === 'regulation'
                    ? 'bg-[#003366] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <TranslatedText textKey="recognition.legal.categories.regulations" />
              </button>
              <button
                onClick={() => setActiveCategory('order')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeCategory === 'order'
                    ? 'bg-[#003366] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <TranslatedText textKey="recognition.legal.categories.orders" />
              </button>
              <button
                onClick={() => setActiveCategory('standard')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeCategory === 'standard'
                    ? 'bg-[#003366] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <TranslatedText textKey="recognition.legal.categories.standards" />
              </button>
            </div>
            
            <div className="w-full sm:w-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documents..."
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
          
          <div className="space-y-4">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-[#003366]">
                      <TranslatedText textKey={doc.title} />
                    </h4>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <span className="text-sm text-gray-500 mr-2">
                        {doc.number}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(doc.date)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    <TranslatedText textKey={doc.description} />
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doc.category === 'law' ? 'bg-blue-100 text-blue-800' :
                      doc.category === 'regulation' ? 'bg-green-100 text-green-800' :
                      doc.category === 'order' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      <TranslatedText textKey={`recognition.legal.categories.${doc.category}`} />
                    </span>
                    
                    {doc.url && (
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#004080]"
                      >
                        <TranslatedText textKey="recognition.legal.viewDocument" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500">
                  <TranslatedText textKey="recognition.legal.noDocumentsFound" />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
