import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface Report {
  id: string;
  title: string;
  year: number;
  description: string;
  fileUrl: string;
  fileSize: string;
  language: string;
  authors: string;
  category: 'implementation' | 'progress' | 'stocktaking' | 'thematic';
}

export function NationalReportsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('year');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // Mock data for national reports
  const reports: Report[] = [
    {
      id: 'r1',
      title: 'Kazakhstan National Report on the Implementation of the Bologna Process',
      year: 2023,
      description: 'Comprehensive report on the implementation of the Bologna Process in Kazakhstan, highlighting achievements, challenges, and future plans.',
      fileUrl: '/reports/kazakhstan-bologna-implementation-2023.pdf',
      fileSize: '2.4 MB',
      language: 'English',
      authors: 'Ministry of Education and Science of the Republic of Kazakhstan',
      category: 'implementation'
    },
    {
      id: 'r2',
      title: 'Progress Report on Higher Education Reforms in Kazakhstan',
      year: 2022,
      description: 'Report on the progress of higher education reforms in Kazakhstan within the framework of the Bologna Process.',
      fileUrl: '/reports/kazakhstan-higher-education-reforms-2022.pdf',
      fileSize: '1.8 MB',
      language: 'English',
      authors: 'Ministry of Education and Science of the Republic of Kazakhstan',
      category: 'progress'
    },
    {
      id: 'r3',
      title: 'Bologna Process Stocktaking Report: Kazakhstan',
      year: 2021,
      description: 'Stocktaking report on the implementation of the Bologna Process in Kazakhstan, focusing on key indicators and benchmarks.',
      fileUrl: '/reports/kazakhstan-bologna-stocktaking-2021.pdf',
      fileSize: '3.2 MB',
      language: 'English',
      authors: 'Bologna Follow-Up Group, Kazakhstan National Team',
      category: 'stocktaking'
    },
    {
      id: 'r4',
      title: 'Quality Assurance in Higher Education: Kazakhstan National Report',
      year: 2021,
      description: 'Thematic report on quality assurance in higher education in Kazakhstan, focusing on the implementation of European standards and guidelines.',
      fileUrl: '/reports/kazakhstan-quality-assurance-2021.pdf',
      fileSize: '1.5 MB',
      language: 'English',
      authors: 'Independent Kazakhstan Quality Assurance Agency for Education',
      category: 'thematic'
    },
    {
      id: 'r5',
      title: 'Kazakhstan National Report on the Implementation of the Bologna Process',
      year: 2020,
      description: 'Comprehensive report on the implementation of the Bologna Process in Kazakhstan, highlighting achievements, challenges, and future plans.',
      fileUrl: '/reports/kazakhstan-bologna-implementation-2020.pdf',
      fileSize: '2.1 MB',
      language: 'English',
      authors: 'Ministry of Education and Science of the Republic of Kazakhstan',
      category: 'implementation'
    },
    {
      id: 'r6',
      title: 'Student Mobility in Kazakhstan: National Report',
      year: 2020,
      description: 'Thematic report on student mobility in Kazakhstan, focusing on trends, challenges, and opportunities within the Bologna Process framework.',
      fileUrl: '/reports/kazakhstan-student-mobility-2020.pdf',
      fileSize: '1.7 MB',
      language: 'English',
      authors: 'Center for Bologna Process and Academic Mobility',
      category: 'thematic'
    },
    {
      id: 'r7',
      title: 'Progress Report on Higher Education Reforms in Kazakhstan',
      year: 2019,
      description: 'Report on the progress of higher education reforms in Kazakhstan within the framework of the Bologna Process.',
      fileUrl: '/reports/kazakhstan-higher-education-reforms-2019.pdf',
      fileSize: '1.9 MB',
      language: 'English',
      authors: 'Ministry of Education and Science of the Republic of Kazakhstan',
      category: 'progress'
    },
    {
      id: 'r8',
      title: 'Bologna Process Stocktaking Report: Kazakhstan',
      year: 2018,
      description: 'Stocktaking report on the implementation of the Bologna Process in Kazakhstan, focusing on key indicators and benchmarks.',
      fileUrl: '/reports/kazakhstan-bologna-stocktaking-2018.pdf',
      fileSize: '2.8 MB',
      language: 'English',
      authors: 'Bologna Follow-Up Group, Kazakhstan National Team',
      category: 'stocktaking'
    }
  ];
  
  // Filter and sort reports
  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'all' || report.year.toString() === filterYear;
    const matchesCategory = filterCategory === 'all' || report.category === filterCategory;
    
    return matchesSearch && matchesYear && matchesCategory;
  }).sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === 'year') {
      comparison = a.year - b.year;
    } else if (sortBy === 'title') {
      comparison = a.title.localeCompare(b.title);
    } else if (sortBy === 'category') {
      comparison = a.category.localeCompare(b.category);
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });
  
  // Get unique years for filter
  const years = Array.from(new Set(reports.map(report => report.year))).sort((a, b) => b - a);
  
  // Category label mapping
  const categoryLabels: Record<string, string> = {
    implementation: 'Implementation Reports',
    progress: 'Progress Reports',
    stocktaking: 'Stocktaking Reports',
    thematic: 'Thematic Reports'
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="bolognaProcess.nationalReports.title" />
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="bolognaProcess.nationalReports.description" />
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            <TranslatedText textKey="bolognaProcess.nationalReports.search" />
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or description..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="filterYear" className="block text-sm font-medium text-gray-700 mb-1">
            <TranslatedText textKey="bolognaProcess.nationalReports.filterYear" />
          </label>
          <select
            id="filterYear"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year.toString()}>{year}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="filterCategory" className="block text-sm font-medium text-gray-700 mb-1">
            <TranslatedText textKey="bolognaProcess.nationalReports.filterCategory" />
          </label>
          <select
            id="filterCategory"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="all">All Categories</option>
            <option value="implementation">Implementation Reports</option>
            <option value="progress">Progress Reports</option>
            <option value="stocktaking">Stocktaking Reports</option>
            <option value="thematic">Thematic Reports</option>
          </select>
        </div>
      </div>
      
      {/* Sort Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          <TranslatedText textKey="bolognaProcess.nationalReports.resultsCount" /> {filteredReports.length}
        </div>
        
        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
            <TranslatedText textKey="bolognaProcess.nationalReports.sortBy" />
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="year">Year</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
          
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-1 rounded-md hover:bg-gray-100"
            aria-label="Toggle sort order"
          >
            {sortOrder === 'asc' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReports.map((report) => (
          <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-[#003366]">{report.title}</h3>
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold rounded-full px-2 py-1">
                {report.year}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{report.description}</p>
            
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
              <div>
                <span className="font-medium">Category:</span> {categoryLabels[report.category]}
              </div>
              <div>
                <span className="font-medium">Language:</span> {report.language}
              </div>
              <div>
                <span className="font-medium">Authors:</span> {report.authors}
              </div>
              <div>
                <span className="font-medium">File Size:</span> {report.fileSize}
              </div>
            </div>
            
            <div className="flex justify-end">
              <a
                href={report.fileUrl}
                className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#FF6600]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <TranslatedText textKey="bolognaProcess.nationalReports.download" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredReports.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <TranslatedText textKey="bolognaProcess.nationalReports.noResults" />
        </div>
      )}
      
      {/* Additional Resources */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-[#003366] mb-4">
          <TranslatedText textKey="bolognaProcess.nationalReports.additionalResources.title" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="http://www.ehea.info/page-implementation-reports"
            className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#003366]">EHEA Implementation Reports</h4>
              <p className="text-xs text-gray-500">European Higher Education Area official implementation reports</p>
            </div>
          </a>
          
          <a
            href="https://www.enic-naric.net/page-reports-and-publications"
            className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#003366]">ENIC-NARIC Reports</h4>
              <p className="text-xs text-gray-500">Reports on recognition of qualifications and academic mobility</p>
            </div>
          </a>
          
          <a
            href="https://eacea.ec.europa.eu/national-policies/eurydice/publications_en"
            className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#003366]">Eurydice Publications</h4>
              <p className="text-xs text-gray-500">European education systems and policies analysis</p>
            </div>
          </a>
          
          <a
            href="https://www.eua.eu/resources/publications.html"
            className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#003366]">EUA Publications</h4>
              <p className="text-xs text-gray-500">European University Association research and analysis</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
