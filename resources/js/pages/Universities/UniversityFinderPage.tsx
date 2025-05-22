import React, { useState, useEffect } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

interface University {
  id: number;
  name: string;
  location: string;
  country: string;
  accreditationStatus: 'full' | 'conditional' | 'pending' | 'expired' | 'none';
  accreditationDate?: string;
  validUntil?: string;
  programs: string[];
  description: string;
  image: string;
  website: string;
  featured?: boolean;
}

export default function UniversityFinderPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedAccreditation, setSelectedAccreditation] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [universities, setUniversities] = useState<University[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // Mock data - in a real app, this would come from an API
  const mockUniversities: University[] = [
    {
      id: 1,
      name: "Kazakh National University",
      location: "Almaty",
      country: "Kazakhstan",
      accreditationStatus: "full",
      accreditationDate: "2021-05-15",
      validUntil: "2026-05-15",
      programs: ["Business", "Engineering", "Medicine", "Law"],
      description: "One of the leading universities in Kazakhstan with a strong focus on research and innovation.",
      image: "/images/universities/university1.jpg",
      website: "https://example.com/knu",
      featured: true
    },
    {
      id: 2,
      name: "Technical University of Astana",
      location: "Astana",
      country: "Kazakhstan",
      accreditationStatus: "conditional",
      accreditationDate: "2022-03-10",
      validUntil: "2025-03-10",
      programs: ["Engineering", "Computer Science", "Architecture"],
      description: "Specialized in technical education with strong industry partnerships.",
      image: "/images/universities/university2.jpg",
      website: "https://example.com/tua"
    },
    {
      id: 3,
      name: "Medical University of Karaganda",
      location: "Karaganda",
      country: "Kazakhstan",
      accreditationStatus: "full",
      accreditationDate: "2020-09-22",
      validUntil: "2025-09-22",
      programs: ["Medicine", "Pharmacy", "Nursing"],
      description: "Leading medical education institution with modern facilities and international collaborations.",
      image: "/images/universities/university3.jpg",
      website: "https://example.com/muk"
    },
    {
      id: 4,
      name: "Eurasian University",
      location: "Astana",
      country: "Kazakhstan",
      accreditationStatus: "pending",
      programs: ["Business", "International Relations", "Languages"],
      description: "Focused on international education and cultural exchange programs.",
      image: "/images/universities/university4.jpg",
      website: "https://example.com/eu"
    },
    {
      id: 5,
      name: "Almaty Management University",
      location: "Almaty",
      country: "Kazakhstan",
      accreditationStatus: "full",
      accreditationDate: "2022-01-18",
      validUntil: "2027-01-18",
      programs: ["Business", "Finance", "Marketing", "Management"],
      description: "Business-focused university with strong connections to the corporate world.",
      image: "/images/universities/university5.jpg",
      website: "https://example.com/amu",
      featured: true
    },
    {
      id: 6,
      name: "Pavlodar State University",
      location: "Pavlodar",
      country: "Kazakhstan",
      accreditationStatus: "expired",
      accreditationDate: "2017-06-30",
      validUntil: "2022-06-30",
      programs: ["Education", "Engineering", "Agriculture"],
      description: "Regional university with a focus on practical education and local development.",
      image: "/images/universities/university6.jpg",
      website: "https://example.com/psu"
    }
  ];

  // Get unique locations, programs for filters
  const locations = Array.from(new Set(mockUniversities.map(uni => uni.location)));
  const programs = Array.from(new Set(mockUniversities.flatMap(uni => uni.programs)));

  // Load universities
  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setUniversities(mockUniversities);
      setFilteredUniversities(mockUniversities);
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter universities
  useEffect(() => {
    const filtered = universities.filter(uni => {
      // Search term filter
      const matchesSearch = searchTerm === '' ||
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.programs.some(prog => prog.toLowerCase().includes(searchTerm.toLowerCase()));

      // Location filter
      const matchesLocation = selectedLocation === 'all' || uni.location === selectedLocation;

      // Accreditation filter
      const matchesAccreditation = selectedAccreditation === 'all' || uni.accreditationStatus === selectedAccreditation;

      // Program filter
      const matchesProgram = selectedProgram === 'all' || uni.programs.includes(selectedProgram);

      return matchesSearch && matchesLocation && matchesAccreditation && matchesProgram;
    });

    setFilteredUniversities(filtered);
  }, [searchTerm, selectedLocation, selectedAccreditation, selectedProgram, universities]);

  // Toggle university in compare list
  const toggleCompare = (id: number) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter(uniId => uniId !== id));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, id]);
      } else {
        alert(t('universityFinder.maxCompare'));
      }
    }
  };

  // Get accreditation status badge
  const getAccreditationBadge = (status: string) => {
    switch (status) {
      case 'full':
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">{t('universityFinder.accreditation.full')}</span>;
      case 'conditional':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">{t('universityFinder.accreditation.conditional')}</span>;
      case 'pending':
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">{t('universityFinder.accreditation.pending')}</span>;
      case 'expired':
        return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">{t('universityFinder.accreditation.expired')}</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">{t('universityFinder.accreditation.none')}</span>;
    }
  };

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />

        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[
              { title: "Home", href: "/", translationKey: "header.home" },
              { title: "Universities", href: "/universities", translationKey: "header.universities" },
              { title: "University Finder", href: "/universities/finder", translationKey: "universityFinder.title" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="universityFinder.title" />
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  <TranslatedText textKey="universityFinder.description" />
                </p>
              </div>

              {/* Filters */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-[#003366] mb-4">
                  <TranslatedText textKey="universityFinder.filters.title" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Search */}
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="universityFinder.filters.search" />
                    </label>
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={t('universityFinder.filters.searchPlaceholder')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="universityFinder.filters.location" />
                    </label>
                    <select
                      id="location"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                    >
                      <option value="all">{t('universityFinder.filters.allLocations')}</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  {/* Accreditation */}
                  <div>
                    <label htmlFor="accreditation" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="universityFinder.filters.accreditation" />
                    </label>
                    <select
                      id="accreditation"
                      value={selectedAccreditation}
                      onChange={(e) => setSelectedAccreditation(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                    >
                      <option value="all">{t('universityFinder.filters.allAccreditations')}</option>
                      <option value="full">{t('universityFinder.accreditation.full')}</option>
                      <option value="conditional">{t('universityFinder.accreditation.conditional')}</option>
                      <option value="pending">{t('universityFinder.accreditation.pending')}</option>
                      <option value="expired">{t('universityFinder.accreditation.expired')}</option>
                      <option value="none">{t('universityFinder.accreditation.none')}</option>
                    </select>
                  </div>

                  {/* Program */}
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="universityFinder.filters.program" />
                    </label>
                    <select
                      id="program"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                    >
                      <option value="all">{t('universityFinder.filters.allPrograms')}</option>
                      {programs.map(program => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {filteredUniversities.length} {t('universityFinder.resultsFound')}
                  </div>

                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLocation('all');
                      setSelectedAccreditation('all');
                      setSelectedProgram('all');
                    }}
                    className="text-[#003366] hover:text-[#002244] text-sm font-medium"
                  >
                    <TranslatedText textKey="universityFinder.resetFilters" />
                  </button>
                </div>
              </div>

              {/* Compare button */}
              {compareList.length > 0 && (
                <div className="mb-6 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-medium">{compareList.length}</span> {t('universityFinder.universitiesSelected')}
                  </div>

                  <button
                    onClick={() => setShowCompare(true)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                  >
                    <TranslatedText textKey="universityFinder.compareButton" />
                  </button>
                </div>
              )}

              {/* University list */}
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-pulse space-y-8 w-full">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-6 space-y-4">
                          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : filteredUniversities.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    <TranslatedText textKey="universityFinder.noResults.title" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <TranslatedText textKey="universityFinder.noResults.description" />
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLocation('all');
                      setSelectedAccreditation('all');
                      setSelectedProgram('all');
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                  >
                    <TranslatedText textKey="universityFinder.resetFilters" />
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUniversities.map(university => (
                    <div
                      key={university.id}
                      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${university.featured ? 'ring-2 ring-[#FF6600]' : ''
                        } ${compareList.includes(university.id) ? 'ring-2 ring-[#003366]' : ''}`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={university.image}
                          alt={university.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/400x200?text=University';
                          }}
                        />
                        {university.featured && (
                          <div className="absolute top-0 right-0 bg-[#FF6600] text-white px-3 py-1 text-xs font-medium">
                            <TranslatedText textKey="universityFinder.featured" />
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-[#003366]">
                            {university.name}
                          </h3>
                          <button
                            onClick={() => toggleCompare(university.id)}
                            className={`p-1 rounded-full ${compareList.includes(university.id)
                              ? 'text-[#003366] bg-blue-50'
                              : 'text-gray-400 hover:text-[#003366] hover:bg-blue-50'
                              }`}
                            aria-label={t('universityFinder.addToCompare')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {university.location}, {university.country}
                        </div>

                        <div className="mb-3">
                          {getAccreditationBadge(university.accreditationStatus)}
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {university.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {university.programs.slice(0, 3).map(program => (
                            <span key={program} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">
                              {program}
                            </span>
                          ))}
                          {university.programs.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">
                              +{university.programs.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <a
                            href={university.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003366] hover:text-[#002244] text-sm font-medium"
                          >
                            <TranslatedText textKey="universityFinder.visitWebsite" />
                          </a>

                          <Link
                            href={`/universities/${university.id}`}
                            className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center text-sm"
                          >
                            <TranslatedText textKey="common.learnMore" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
