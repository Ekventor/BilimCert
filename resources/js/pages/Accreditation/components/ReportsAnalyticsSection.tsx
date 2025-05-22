import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface Report {
  id: string;
  title: string;
  type: 'annual' | 'thematic' | 'institutional';
  year: number;
  description: string;
  fileUrl: string;
}

export function ReportsAnalyticsSection() {
  const [activeTab, setActiveTab] = useState('reports');
  const [reportType, setReportType] = useState('all');
  const [reportYear, setReportYear] = useState('all');

  // Mock data for reports
  const reports: Report[] = [
    {
      id: 'r1',
      title: 'Annual Report on Accreditation Activities',
      type: 'annual',
      year: 2022,
      description: 'Comprehensive overview of accreditation activities conducted during the 2022 academic year.',
      fileUrl: '/reports/annual-report-2022.pdf'
    },
    {
      id: 'r2',
      title: 'Annual Report on Accreditation Activities',
      type: 'annual',
      year: 2021,
      description: 'Comprehensive overview of accreditation activities conducted during the 2021 academic year.',
      fileUrl: '/reports/annual-report-2021.pdf'
    },
    {
      id: 'r3',
      title: 'Quality of Engineering Education in Kazakhstan',
      type: 'thematic',
      year: 2022,
      description: 'Analysis of the quality of engineering education programs across Kazakhstani institutions.',
      fileUrl: '/reports/engineering-education-2022.pdf'
    },
    {
      id: 'r4',
      title: 'Medical Education Standards Compliance',
      type: 'thematic',
      year: 2021,
      description: 'Assessment of medical education programs\' compliance with international standards.',
      fileUrl: '/reports/medical-education-2021.pdf'
    },
    {
      id: 'r5',
      title: 'Kazakh National University Accreditation Report',
      type: 'institutional',
      year: 2022,
      description: 'Detailed accreditation report for Kazakh National University.',
      fileUrl: '/reports/knu-accreditation-2022.pdf'
    },
    {
      id: 'r6',
      title: 'Eurasian National University Accreditation Report',
      type: 'institutional',
      year: 2021,
      description: 'Detailed accreditation report for Eurasian National University.',
      fileUrl: '/reports/enu-accreditation-2021.pdf'
    },
  ];

  // Filter reports by type and year
  const filteredReports = reports.filter(report => {
    const matchesType = reportType === 'all' || report.type === reportType;
    const matchesYear = reportYear === 'all' || report.year.toString() === reportYear;

    return matchesType && matchesYear;
  });

  // Get unique years for filter
  const years = Array.from(new Set(reports.map(report => report.year))).sort((a, b) => b - a);

  // Report type label mapping
  const reportTypeLabels: Record<string, string> = {
    annual: 'Annual Report',
    thematic: 'Thematic Analysis',
    institutional: 'Institutional Report'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="accreditation.reports.title" />
      </h2>

      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="accreditation.reports.description" />
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Reports and Analytics">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reports'
              ? 'border-[#FF6600] text-[#FF6600] font-semibold'
              : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
              }`}
            onClick={() => setActiveTab('reports')}
          >
            <TranslatedText textKey="accreditation.reports.reportsTab" />
          </button>

          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'analytics'
              ? 'border-[#FF6600] text-[#FF6600] font-semibold'
              : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
              }`}
            onClick={() => setActiveTab('analytics')}
          >
            <TranslatedText textKey="accreditation.reports.analyticsTab" />
          </button>
        </nav>
      </div>

      {/* Reports Tab Content */}
      {activeTab === 'reports' && (
        <div>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="reportType" className="block text-sm font-medium text-gray-800 mb-1">
                <TranslatedText textKey="accreditation.reports.filterType" />
              </label>
              <select
                id="reportType"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
              >
                <option value="all">All Types</option>
                <option value="annual">Annual Reports</option>
                <option value="thematic">Thematic Analyses</option>
                <option value="institutional">Institutional Reports</option>
              </select>
            </div>

            <div>
              <label htmlFor="reportYear" className="block text-sm font-medium text-gray-800 mb-1">
                <TranslatedText textKey="accreditation.reports.filterYear" />
              </label>
              <select
                id="reportYear"
                value={reportYear}
                onChange={(e) => setReportYear(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reports List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReports.map(report => (
              <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-[#003366]">{report.title}</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold rounded-full px-2 py-1">
                    {report.year}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">{report.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{reportTypeLabels[report.type]}</span>

                  <a
                    href={report.fileUrl}
                    className="inline-flex items-center text-sm font-medium text-[#003366] hover:text-[#FF6600]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <TranslatedText textKey="accreditation.reports.download" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredReports.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <TranslatedText textKey="accreditation.reports.noResults" />
            </div>
          )}
        </div>
      )}

      {/* Analytics Tab Content */}
      {activeTab === 'analytics' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Accreditation Status Chart */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-[#003366] mb-4">
                <TranslatedText textKey="accreditation.analytics.statusChart" />
              </h3>

              <div className="aspect-w-16 aspect-h-9">
                <div className="flex items-center justify-center h-full">
                  {/* Pie Chart Visualization (Mockup) */}
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      {/* Full Accreditation (60%) */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4CAF50" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0" />

                      {/* Conditional (25%) */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FF6600" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="150.72" />

                      {/* Pending (10%) */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#003366" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="213.52" />

                      {/* Expired (5%) */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#990000" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="238.64" />

                      {/* Center circle */}
                      <circle cx="50" cy="50" r="20" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-800 font-medium">Full (60%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#FF6600] rounded-full mr-2"></span>
                  <span className="text-sm text-gray-800 font-medium">Conditional (25%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#003366] rounded-full mr-2"></span>
                  <span className="text-sm text-gray-800 font-medium">Pending (10%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#990000] rounded-full mr-2"></span>
                  <span className="text-sm text-gray-800 font-medium">Expired (5%)</span>
                </div>
              </div>
            </div>

            {/* Accreditation by Institution Type */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-[#003366] mb-4">
                <TranslatedText textKey="accreditation.analytics.typeChart" />
              </h3>

              <div className="aspect-w-16 aspect-h-9">
                <div className="flex items-center justify-center h-full">
                  {/* Bar Chart Visualization (Mockup) */}
                  <div className="w-full h-48 flex items-end justify-around">
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#003366] rounded-t-sm shadow-md" style={{ height: '70%' }}></div>
                      <span className="text-xs mt-2 font-medium text-gray-800">Universities</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#004080] rounded-t-sm shadow-md" style={{ height: '40%' }}></div>
                      <span className="text-xs mt-2 font-medium text-gray-800">Colleges</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#0055AA] rounded-t-sm shadow-md" style={{ height: '25%' }}></div>
                      <span className="text-xs mt-2 font-medium text-gray-800">Institutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#006699] rounded-t-sm shadow-md" style={{ height: '15%' }}></div>
                      <span className="text-xs mt-2 font-medium text-gray-800">Other</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditation Trends */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-medium text-[#003366] mb-4">
              <TranslatedText textKey="accreditation.analytics.trendsChart" />
            </h3>

            <div className="aspect-w-16 aspect-h-6">
              <div className="flex items-center justify-center h-full">
                {/* Line Chart Visualization (Mockup) */}
                <div className="w-full h-48 relative">
                  {/* X-axis */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>

                  {/* Y-axis */}
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-300"></div>

                  {/* Line for Full Accreditation */}
                  <svg className="absolute inset-0" viewBox="0 0 100 48" preserveAspectRatio="none">
                    <polyline
                      points="0,30 20,25 40,20 60,15 80,10 100,8"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Line for Conditional Accreditation */}
                  <svg className="absolute inset-0" viewBox="0 0 100 48" preserveAspectRatio="none">
                    <polyline
                      points="0,35 20,32 40,30 60,28 80,25 100,22"
                      fill="none"
                      stroke="#FF6600"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 -mb-6">
                    <span className="text-xs">2018</span>
                    <span className="text-xs">2019</span>
                    <span className="text-xs">2020</span>
                    <span className="text-xs">2021</span>
                    <span className="text-xs">2022</span>
                    <span className="text-xs">2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-800 font-medium">Full Accreditation</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#FF6600] rounded-full mr-2"></span>
                <span className="text-sm text-gray-800 font-medium">Conditional Accreditation</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/analytics"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003366] hover:bg-[#002244]"
            >
              <TranslatedText textKey="accreditation.analytics.viewMore" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
