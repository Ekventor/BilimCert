import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { useLanguage } from '../../hooks/useLanguage';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function InternshipsPage() {
  const { t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock internship opportunities
  const internships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Tech Innovations Kazakhstan',
      location: 'Astana',
      industry: 'IT',
      duration: '3 months',
      paid: true,
      description: 'Join our development team to work on real-world projects using modern technologies. Gain hands-on experience in software development lifecycle.',
      requirements: ['Computer Science or related field', 'Basic knowledge of programming languages', 'Problem-solving skills'],
      applicationLink: '#'
    },
    {
      id: 2,
      title: 'Marketing Assistant Intern',
      company: 'Global Marketing Solutions',
      location: 'Almaty',
      industry: 'Marketing',
      duration: '6 months',
      paid: true,
      description: 'Assist in developing and implementing marketing strategies for various clients. Learn about digital marketing, content creation, and campaign analysis.',
      requirements: ['Marketing, Business, or related field', 'Creative thinking', 'Good communication skills'],
      applicationLink: '#'
    },
    {
      id: 3,
      title: 'Engineering Intern',
      company: 'Kazakhstan Engineering Corporation',
      location: 'Karaganda',
      industry: 'Engineering',
      duration: '4 months',
      paid: true,
      description: 'Work alongside experienced engineers on infrastructure projects. Gain practical experience in engineering principles and project management.',
      requirements: ['Engineering degree in progress', 'Technical knowledge', 'Attention to detail'],
      applicationLink: '#'
    },
    {
      id: 4,
      title: 'Finance Intern',
      company: 'National Bank of Kazakhstan',
      location: 'Astana',
      industry: 'Finance',
      duration: '3 months',
      paid: true,
      description: 'Gain experience in financial analysis, reporting, and banking operations. Learn about financial regulations and compliance.',
      requirements: ['Finance, Economics, or related field', 'Analytical skills', 'Attention to detail'],
      applicationLink: '#'
    },
    {
      id: 5,
      title: 'Research Assistant Intern',
      company: 'Kazakh Research Institute',
      location: 'Almaty',
      industry: 'Research',
      duration: '6 months',
      paid: false,
      description: 'Assist researchers in data collection, analysis, and reporting. Contribute to academic publications and research projects.',
      requirements: ['Relevant academic background', 'Research skills', 'Statistical knowledge'],
      applicationLink: '#'
    },
    {
      id: 6,
      title: 'Hospitality Management Intern',
      company: 'Luxury Hotels Group',
      location: 'Shymkent',
      industry: 'Hospitality',
      duration: '3 months',
      paid: true,
      description: 'Rotate through various departments of a luxury hotel to gain comprehensive experience in hospitality management.',
      requirements: ['Hospitality, Tourism, or related field', 'Customer service orientation', 'Communication skills'],
      applicationLink: '#'
    }
  ];

  // Get unique industries and locations for filters
  const industries = Array.from(new Set(internships.map(internship => internship.industry)));
  const locations = Array.from(new Set(internships.map(internship => internship.location)));

  // Filter internships based on selected filters and search term
  const filteredInternships = internships.filter(internship => {
    const matchesIndustry = selectedIndustry === 'all' || internship.industry === selectedIndustry;
    const matchesLocation = selectedLocation === 'all' || internship.location === selectedLocation;
    const matchesSearch = searchTerm === '' ||
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesIndustry && matchesLocation && matchesSearch;
  });

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
              { title: "For Students", href: "/students", translationKey: "header.students" },
              { title: "Internships", href: "/students/internships", translationKey: "mainNav.internships" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Internship Opportunities
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  Explore internship opportunities with our partner organizations. These internships provide valuable hands-on experience and can help you develop professional skills while building your network.
                </p>
              </div>

              {/* Filters */}
              <section className="mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold text-[#003366] mb-4">Find Internships</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-800 mb-1">
                        Search
                      </label>
                      <input
                        type="text"
                        id="searchTerm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by title, company, or keywords"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-800 mb-1">
                        Industry
                      </label>
                      <select
                        id="industry"
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
                      >
                        <option value="all">All Industries</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-800 mb-1">
                        Location
                      </label>
                      <select
                        id="location"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm"
                      >
                        <option value="all">All Locations</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Internship Listings */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Available Internships</h2>

                {filteredInternships.length > 0 ? (
                  <div className="space-y-6">
                    {filteredInternships.map(internship => (
                      <div key={internship.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-[#003366]">{internship.title}</h3>
                            <p className="text-[#FF6600] font-medium">{internship.company}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {internship.industry}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {internship.location}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {internship.duration}
                            </span>
                            {internship.paid ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Paid
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Unpaid
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{internship.description}</p>

                        <div className="mb-4">
                          <h4 className="text-lg font-medium text-[#003366] mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {internship.requirements.map((requirement, index) => (
                              <li key={index} className="text-gray-600">{requirement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex justify-end">
                          <Link
                            href={internship.applicationLink}
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No internships found</h3>
                    <p className="text-gray-600">
                      No internships match your current filters. Try adjusting your search criteria or check back later for new opportunities.
                    </p>
                  </div>
                )}
              </section>

              {/* Internship Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Internship Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-lg font-medium text-[#003366] mb-3">Preparing for Your Internship</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to make the most of your internship experience with these preparation tips and best practices.
                    </p>
                    <Link
                      href="#"
                      className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center text-sm"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-lg font-medium text-[#003366] mb-3">Internship to Job Conversion</h3>
                    <p className="text-gray-600 mb-4">
                      Discover strategies for turning your internship into a full-time job offer and building a professional network.
                    </p>
                    <Link
                      href="#"
                      className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center text-sm"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              {/* For Employers */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">For Employers</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Offer an Internship</h3>
                  <p className="mb-6">
                    Partner with BilimCert to offer internship opportunities to talented students. Our internship program connects employers with motivated students looking for practical experience.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/partnership/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-[#003366] hover:bg-gray-100"
                    >
                      Become a Partner
                    </Link>

                    <Link
                      href="/contacts"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white hover:bg-[#002244]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
