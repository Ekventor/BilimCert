import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { useLanguage } from '../../hooks/useLanguage';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function PartnershipsPage() {
  const { t } = useLanguage();

  // Mock partnership types
  const partnershipTypes = [
    {
      title: 'Industry Advisory Boards',
      description: 'Establish industry advisory boards to provide input on curriculum development, research priorities, and student skills development.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Internship Programs',
      description: 'Develop structured internship programs with industry partners to provide students with practical experience and career opportunities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Joint Research Projects',
      description: 'Collaborate with industry partners on research projects that address real-world challenges and create opportunities for knowledge transfer.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Guest Lectures & Workshops',
      description: 'Invite industry professionals to deliver guest lectures and workshops, providing students with insights into current industry practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Curriculum Co-Development',
      description: 'Work with industry partners to co-develop curriculum content that reflects current industry needs and emerging trends.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Industry-Sponsored Projects',
      description: 'Facilitate industry-sponsored student projects that address real business challenges while developing students\' practical skills.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  // Mock success stories
  const successStories = [
    {
      title: 'IT Industry Partnership Program',
      university: 'Kazakh National Technical University',
      industry: 'Leading IT Companies Consortium',
      description: 'Established a comprehensive partnership program with a consortium of IT companies, resulting in curriculum updates, internship opportunities, and industry-sponsored research projects.',
      outcomes: [
        'Updated IT curriculum with industry-relevant skills',
        'Created 150+ annual internship positions',
        'Developed 5 joint research projects',
        'Increased graduate employment rate by 25%'
      ],
      image: '/images/partnerships/it-partnership.jpg'
    },
    {
      title: 'Engineering Innovation Hub',
      university: 'Eurasian National University',
      industry: 'National Engineering Association',
      description: 'Created an Engineering Innovation Hub that brings together university researchers, students, and industry professionals to collaborate on solving real-world engineering challenges.',
      outcomes: [
        'Launched 12 industry-sponsored student projects',
        'Filed 8 patents from collaborative research',
        'Secured $1.2M in research funding',
        'Established a mentorship program connecting 200+ students with industry professionals'
      ],
      image: '/images/partnerships/engineering-hub.jpg'
    }
  ];

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
              { title: "For Universities", href: "/universities", translationKey: "header.universities" },
              { title: "Industry Partnerships", href: "/universities/partnerships", translationKey: "mainNav.industryPartnerships" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Industry Partnerships
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  BilimCert facilitates meaningful partnerships between universities and industry to enhance educational quality, research relevance, and student employability. Our industry partnership programs create mutually beneficial relationships that drive innovation and prepare students for successful careers.
                </p>
              </div>

              {/* Partnership Types */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Partnership Opportunities</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnershipTypes.map((type, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          {type.icon}
                        </div>
                        <h3 className="ml-3 text-lg font-medium text-[#003366]">{type.title}</h3>
                      </div>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Success Stories */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Success Stories</h2>

                <div className="space-y-8">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-1 h-64 md:h-auto bg-gray-200">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                            <span>Image Placeholder</span>
                          </div>
                        </div>
                        <div className="md:col-span-2 p-6">
                          <h3 className="text-xl font-medium text-[#003366] mb-2">{story.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-4">
                            <span className="font-medium text-[#FF6600]">{story.university}</span>
                            <span className="hidden sm:block mx-2">•</span>
                            <span>{story.industry}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{story.description}</p>

                          <h4 className="text-lg font-medium text-[#003366] mb-2">Key Outcomes:</h4>
                          <ul className="space-y-1 mb-4">
                            {story.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>

                          <Link
                            href="#"
                            className="text-[#003366] hover:text-[#FF6600] font-medium inline-flex items-center"
                          >
                            Read Full Case Study
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Benefits of Industry Partnerships</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">For Universities</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Enhanced curriculum relevance and quality</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Increased research funding and opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Improved graduate employment outcomes</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to industry expertise and resources</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Enhanced institutional reputation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">For Industry Partners</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to talent pipeline of skilled graduates</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Collaboration on research and innovation</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Opportunity to influence educational programs</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Enhanced corporate social responsibility profile</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Knowledge transfer and professional development opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Get Started</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Ready to build industry partnerships?</h3>
                  <p className="mb-6">
                    BilimCert can help your university establish meaningful and productive partnerships with industry. Contact us to discuss how we can support your institution's partnership goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/partnership/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-[#003366] hover:bg-gray-100"
                    >
                      Apply for Partnership Support
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
