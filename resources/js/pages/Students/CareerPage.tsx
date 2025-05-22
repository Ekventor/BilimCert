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

export default function CareerPage() {
  const { t } = useLanguage();

  // Mock career resources
  const careerResources = [
    {
      title: 'Resume Building',
      description: 'Learn how to create a compelling resume that highlights your education, skills, and experiences effectively.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Interview Preparation',
      description: 'Prepare for job interviews with tips, common questions, and strategies for making a positive impression.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Career Exploration',
      description: 'Explore various career paths related to your field of study and discover opportunities you may not have considered.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Networking Strategies',
      description: 'Learn effective networking techniques to build professional relationships that can lead to job opportunities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Job Search Strategies',
      description: 'Discover effective strategies for finding job opportunities in your field, including online platforms and industry-specific resources.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Professional Development',
      description: 'Learn about continuing education, certifications, and other opportunities to enhance your professional qualifications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  // Mock upcoming events
  const upcomingEvents = [
    {
      title: 'Career Fair',
      date: 'June 15, 2023',
      location: 'Astana, Kazakhstan',
      description: 'Connect with employers from various industries and explore job opportunities.',
      registrationLink: '#'
    },
    {
      title: 'Resume Workshop',
      date: 'July 5, 2023',
      location: 'Online',
      description: 'Learn how to create an effective resume that highlights your skills and experiences.',
      registrationLink: '#'
    },
    {
      title: 'Industry Panel: Tech Careers',
      date: 'July 20, 2023',
      location: 'Almaty, Kazakhstan',
      description: 'Hear from professionals in the tech industry about career paths and opportunities.',
      registrationLink: '#'
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
              { title: "For Students", href: "/students", translationKey: "header.students" },
              { title: "Career Development", href: "/students/career", translationKey: "mainNav.careerDevelopment" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Career Development
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  BilimCert is committed to supporting students in their career development journey. We provide resources, workshops, and guidance to help you prepare for a successful career after graduation.
                </p>
              </div>

              {/* Career Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Career Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {careerResources.map((resource, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          {resource.icon}
                        </div>
                        <h3 className="ml-3 text-lg font-medium text-[#003366]">{resource.title}</h3>
                      </div>
                      <p className="text-gray-600">{resource.description}</p>
                      <div className="mt-4">
                        <Link
                          href="#"
                          className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center text-sm"
                        >
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Upcoming Events */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Upcoming Career Events</h2>

                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-medium text-[#003366]">{event.title}</h3>
                        <div className="flex items-center mt-2 md:mt-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-600">{event.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-gray-600">{event.location}</span>
                      </div>

                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <Link
                        href={event.registrationLink}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244]"
                      >
                        Register Now
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* Career Counseling */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Career Counseling</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-gray-900 mb-4">
                    Our career counselors are available to provide personalized guidance on career planning, job search strategies, and professional development. Schedule a one-on-one session to discuss your career goals and develop a plan to achieve them.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Individual Counseling</h3>
                      <p className="text-gray-600 mb-4">
                        One-on-one sessions with a career counselor to discuss your specific career goals and challenges.
                      </p>
                      <Link
                        href="#"
                        className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center text-sm"
                      >
                        Schedule a Session
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Group Workshops</h3>
                      <p className="text-gray-600 mb-4">
                        Interactive workshops on various career development topics, from resume writing to interview skills.
                      </p>
                      <Link
                        href="#"
                        className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center text-sm"
                      >
                        View Workshop Schedule
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Contact Career Services</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Need assistance with your career development?</h3>
                  <p className="mb-6">
                    Our career services team is here to help you navigate your career journey. Contact us with any questions or to schedule an appointment.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contacts"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-[#003366] hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>

                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white hover:bg-[#002244]"
                    >
                      Schedule Appointment
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
