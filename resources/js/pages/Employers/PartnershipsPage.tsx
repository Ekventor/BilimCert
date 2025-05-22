import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { useLanguage } from '../../hooks/useLanguage';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function PartnershipsPage() {
  const { t } = useLanguage();

  // Mock partnership types
  const partnershipTypes = [
    {
      title: 'Educational Partnerships',
      description: 'Collaborate with educational institutions to develop industry-relevant curriculum and training programs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Industry Collaborations',
      description: 'Join forces with other companies in your industry to address common challenges and drive innovation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Research Partnerships',
      description: 'Participate in research initiatives to develop new knowledge and solutions for your industry.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Internship Programs',
      description: 'Establish structured internship programs to identify and develop future talent for your organization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Corporate Social Responsibility',
      description: 'Partner with us on initiatives that contribute to social and educational development in the community.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Event Sponsorships',
      description: 'Sponsor educational events, conferences, and competitions to enhance your brand visibility and industry influence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  // Mock success stories
  const successStories = [
    {
      title: 'Industry-Academia Collaboration',
      company: 'Tech Solutions Kazakhstan',
      partner: 'Kazakh National Technical University',
      description: 'Established a joint research lab focused on developing innovative solutions for the energy sector.',
      outcomes: [
        'Development of 3 patented technologies',
        'Creation of specialized curriculum for engineering students',
        'Recruitment of top talent from the university',
        'Enhanced company reputation in the industry'
      ]
    },
    {
      title: 'Multi-Company Training Initiative',
      company: 'Consortium of Financial Institutions',
      partner: 'BilimCert',
      description: 'Collaborated on developing standardized training programs for financial professionals across multiple organizations.',
      outcomes: [
        'Trained over 500 professionals in regulatory compliance',
        'Reduced training costs by 30% through shared resources',
        'Established industry-wide certification standards',
        'Improved service quality across participating institutions'
      ]
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
              { title: "For Employers", href: "/employers", translationKey: "header.employers" },
              { title: "Partnerships", href: "/employers/partnerships", translationKey: "employers.partnerships.title" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Partnerships
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  BilimCert facilitates strategic partnerships between employers, educational institutions, and industry organizations. Our partnership programs are designed to create mutual value and address shared challenges through collaboration.
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
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Partnership Success Stories</h2>

                <div className="space-y-6">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-medium text-[#003366] mb-2">{story.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-4">
                        <span className="font-medium text-[#FF6600]">{story.company}</span>
                        <span className="hidden sm:block mx-2">•</span>
                        <span>{story.partner}</span>
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
                    </div>
                  ))}
                </div>
              </section>

              {/* Partnership Process */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Partnership Process</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">1</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Initial Consultation</h3>
                      <p className="text-gray-600">We discuss your organization's goals, challenges, and potential partnership opportunities.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">2</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Partnership Design</h3>
                      <p className="text-gray-600">We develop a customized partnership framework that aligns with your objectives.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">3</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Implementation</h3>
                      <p className="text-gray-600">We execute the partnership plan with clear roles, responsibilities, and timelines.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">4</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Evaluation & Growth</h3>
                      <p className="text-gray-600">We regularly assess partnership outcomes and identify opportunities for expansion.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Benefits of Partnership</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Access to specialized expertise and resources</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Shared costs and risks for innovation initiatives</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Enhanced talent pipeline and recruitment opportunities</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Increased industry influence and visibility</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Opportunities for collaborative problem-solving</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Enhanced corporate social responsibility profile</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Become a Partner</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Ready to explore partnership opportunities?</h3>
                  <p className="mb-6">
                    Contact us to discuss how a strategic partnership with BilimCert can benefit your organization and contribute to your business goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/partnership/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-[#003366] hover:bg-gray-100"
                    >
                      Apply for Partnership
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
