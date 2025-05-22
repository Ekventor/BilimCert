import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

interface Institution {
  id: string;
  name: string;
  type: 'university' | 'college' | 'institute';
  location: string;
  accreditationStatus: 'full' | 'conditional' | 'pending' | 'expired';
  accreditationDate: string;
  validUntil: string;
  programs: number;
}

export function RegistryAccessSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Mock data for institutions
  const institutions: Institution[] = [
    {
      id: '001',
      name: 'Kazakh National University',
      type: 'university',
      location: 'Almaty',
      accreditationStatus: 'full',
      accreditationDate: '2021-05-15',
      validUntil: '2026-05-15',
      programs: 78
    },
    {
      id: '002',
      name: 'Eurasian National University',
      type: 'university',
      location: 'Astana',
      accreditationStatus: 'full',
      accreditationDate: '2020-09-10',
      validUntil: '2025-09-10',
      programs: 65
    },
    {
      id: '003',
      name: 'Almaty Management University',
      type: 'university',
      location: 'Almaty',
      accreditationStatus: 'conditional',
      accreditationDate: '2022-03-20',
      validUntil: '2024-03-20',
      programs: 24
    },
    {
      id: '004',
      name: 'Karaganda Technical College',
      type: 'college',
      location: 'Karaganda',
      accreditationStatus: 'full',
      accreditationDate: '2021-11-05',
      validUntil: '2026-11-05',
      programs: 12
    },
    {
      id: '005',
      name: 'Institute of Engineering and Technology',
      type: 'institute',
      location: 'Shymkent',
      accreditationStatus: 'pending',
      accreditationDate: '2023-01-30',
      validUntil: '2023-01-30',
      programs: 18
    },
    {
      id: '006',
      name: 'Pavlodar State University',
      type: 'university',
      location: 'Pavlodar',
      accreditationStatus: 'expired',
      accreditationDate: '2017-06-22',
      validUntil: '2022-06-22',
      programs: 45
    },
  ];

  // Filter and sort institutions
  const filteredInstitutions = institutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || institution.type === filterType;
    const matchesStatus = filterStatus === 'all' || institution.accreditationStatus === filterStatus;
    const matchesLocation = filterLocation === 'all' || institution.location === filterLocation;

    return matchesSearch && matchesType && matchesStatus && matchesLocation;
  }).sort((a, b) => {
    let comparison = 0;

    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'location') {
      comparison = a.location.localeCompare(b.location);
    } else if (sortBy === 'date') {
      comparison = new Date(a.accreditationDate).getTime() - new Date(b.accreditationDate).getTime();
    } else if (sortBy === 'programs') {
      comparison = a.programs - b.programs;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });

  // Get unique locations for filter
  const locations = Array.from(new Set(institutions.map(institution => institution.location)));

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'full':
        return 'bg-green-100 text-green-800';
      case 'conditional':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        <TranslatedText textKey="accreditation.registry.title" />
      </h2>

      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          <TranslatedText textKey="accreditation.registry.description" />
        </p>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="lg:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-800 mb-1">
            <TranslatedText textKey="accreditation.registry.search" />
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by institution name..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="filterType" className="block text-sm font-medium text-gray-800 mb-1">
            <TranslatedText textKey="accreditation.registry.filterType" />
          </label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="all">All Types</option>
            <option value="university">University</option>
            <option value="college">College</option>
            <option value="institute">Institute</option>
          </select>
        </div>

        <div>
          <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-800 mb-1">
            <TranslatedText textKey="accreditation.registry.filterStatus" />
          </label>
          <select
            id="filterStatus"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="all">All Statuses</option>
            <option value="full">Full Accreditation</option>
            <option value="conditional">Conditional</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        <div>
          <label htmlFor="filterLocation" className="block text-sm font-medium text-gray-800 mb-1">
            <TranslatedText textKey="accreditation.registry.filterLocation" />
          </label>
          <select
            id="filterLocation"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="all">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          <TranslatedText textKey="accreditation.registry.resultsCount" /> {filteredInstitutions.length}
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
            <TranslatedText textKey="accreditation.registry.sortBy" />
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
          >
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="date">Accreditation Date</option>
            <option value="programs">Programs Count</option>
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

      {/* Results Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <TranslatedText textKey="accreditation.registry.institutionName" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <TranslatedText textKey="accreditation.registry.type" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <TranslatedText textKey="accreditation.registry.location" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <TranslatedText textKey="accreditation.registry.status" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <TranslatedText textKey="accreditation.registry.validUntil" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <TranslatedText textKey="accreditation.registry.programs" />
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredInstitutions.map((institution) => (
              <tr key={institution.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-[#003366]">{institution.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{institution.type.charAt(0).toUpperCase() + institution.type.slice(1)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{institution.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(institution.accreditationStatus)}`}>
                    {institution.accreditationStatus.charAt(0).toUpperCase() + institution.accreditationStatus.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{formatDate(institution.validUntil)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {institution.programs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredInstitutions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <TranslatedText textKey="accreditation.registry.noResults" />
        </div>
      )}
    </div>
  );
}
