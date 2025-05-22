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

export default function DevelopmentPage() {
  const { t } = useLanguage();

  // Mock development programs
  const developmentPrograms = [
    {
      title: 'Leadership Development',
      description: 'Develop effective leadership skills among your management team to drive organizational success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Technical Skills Training',
      description: 'Enhance your team\'s technical capabilities with specialized training programs tailored to your industry.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Professional Certification',
      description: 'Help your employees earn industry-recognized certifications to validate their skills and expertise.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Soft Skills Development',
      description: 'Improve communication, teamwork, and other essential soft skills that drive workplace effectiveness.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'Customized Training Solutions',
      description: 'We develop tailored training programs to address your organization\'s specific needs and challenges.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Mentorship Programs',
      description: 'Establish effective mentorship programs to facilitate knowledge transfer and professional growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  // Mock training formats
  const trainingFormats = [
    {
      title: 'In-Person Workshops',
      description: 'Interactive sessions conducted at your location or our training facilities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Online Courses',
      description: 'Flexible e-learning options that employees can complete at their own pace.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Blended Learning',
      description: 'Combination of online and in-person training for comprehensive skill development.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: 'One-on-One Coaching',
      description: 'Personalized coaching sessions for targeted skill development and performance improvement.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
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
              { title: "Employee Development", href: "/employers/development", translationKey: "employers.development.title" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Employee Development
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  BilimCert offers comprehensive employee development programs to help your organization build a skilled and motivated workforce. Our training solutions are designed to enhance employee performance, increase retention, and drive business results.
                </p>
              </div>

              {/* Development Programs */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Development Programs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {developmentPrograms.map((program, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          {program.icon}
                        </div>
                        <h3 className="ml-3 text-lg font-medium text-[#003366]">{program.title}</h3>
                      </div>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Training Formats */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Training Formats</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trainingFormats.map((format, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          {format.icon}
                        </div>
                        <h3 className="ml-3 text-lg font-medium text-[#003366]">{format.title}</h3>
                      </div>
                      <p className="text-gray-600">{format.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Our Approach */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Our Approach</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">Needs Assessment</h3>
                      <p className="text-gray-600">
                        We begin by understanding your organization's specific needs, challenges, and goals to develop targeted training solutions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">Customized Design</h3>
                      <p className="text-gray-600">
                        We design training programs tailored to your industry, organizational culture, and employee skill levels.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">Measurable Results</h3>
                      <p className="text-gray-600">
                        We implement assessment tools to measure the impact of training on employee performance and business outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Benefits of Employee Development</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Increased employee productivity and performance</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Higher employee retention and engagement</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Improved leadership capabilities</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Enhanced innovation and problem-solving</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Stronger organizational culture</span>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Increased adaptability to industry changes</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Get Started</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Ready to invest in your employees' development?</h3>
                  <p className="mb-6">
                    Contact us to discuss your organization's training needs and how our development programs can help you achieve your business goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contacts"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-[#003366] hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>

                    <Link
                      href="/partnership/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white hover:bg-[#002244]"
                    >
                      Request a Consultation
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
