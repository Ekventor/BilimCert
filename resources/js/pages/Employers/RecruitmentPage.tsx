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

export default function RecruitmentPage() {
  const { t } = useLanguage();

  // Mock recruitment services
  const recruitmentServices = [
    {
      title: 'Talent Matching',
      description: 'We connect you with qualified candidates who match your specific requirements and company culture.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Job Posting',
      description: 'Post your job openings on our platform to reach a wide audience of qualified candidates.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Candidate Screening',
      description: 'We pre-screen candidates to ensure they meet your requirements before you invest time in interviews.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Interview Coordination',
      description: 'We handle the logistics of scheduling interviews between you and potential candidates.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Skill Assessment',
      description: 'We provide tools and resources to assess candidates\' skills and competencies relevant to your needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Onboarding Support',
      description: 'We help facilitate a smooth transition for new hires into your organization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Mock success stories
  const successStories = [
    {
      company: 'Tech Innovations Kazakhstan',
      position: 'Senior Software Engineer',
      challenge: 'Needed specialized talent with specific technical skills not readily available in the local market.',
      solution: 'BilimCert conducted targeted outreach to qualified candidates and provided comprehensive screening.',
      result: 'Successfully hired 3 senior engineers who exceeded expectations and contributed to a major product launch.'
    },
    {
      company: 'National Bank of Kazakhstan',
      position: 'Financial Analyst',
      challenge: 'Required candidates with both financial expertise and regulatory knowledge.',
      solution: 'BilimCert leveraged its network of finance professionals and conducted specialized assessments.',
      result: 'Filled 5 positions with highly qualified candidates who seamlessly integrated into the team.'
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
              { title: "Recruitment Services", href: "/employers/recruitment", translationKey: "employers.recruitment.title" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Recruitment Services
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  BilimCert helps employers connect with qualified talent from our network of educational institutions. Our recruitment services are designed to streamline your hiring process and find candidates who match your specific requirements.
                </p>
              </div>

              {/* Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recruitmentServices.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          {service.icon}
                        </div>
                        <h3 className="ml-3 text-lg font-medium text-[#003366]">{service.title}</h3>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">How It Works</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">1</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Consultation</h3>
                      <p className="text-gray-600">We meet with you to understand your hiring needs and company culture.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">2</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Candidate Search</h3>
                      <p className="text-gray-600">We identify qualified candidates from our network who match your requirements.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">3</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Screening</h3>
                      <p className="text-gray-600">We conduct initial interviews and assessments to ensure candidates meet your criteria.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#003366] text-white text-xl font-bold mb-4">4</div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">Selection</h3>
                      <p className="text-gray-600">We present qualified candidates to you and support the final selection process.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Success Stories */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Success Stories</h2>

                <div className="space-y-6">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-medium text-[#003366] mb-2">{story.company}</h3>
                      <p className="text-[#FF6600] font-medium mb-4">Position: {story.position}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge:</h4>
                          <p className="text-gray-600">{story.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Solution:</h4>
                          <p className="text-gray-600">{story.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Result:</h4>
                          <p className="text-gray-600">{story.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Post a Job */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Post a Job</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-gray-900 mb-6">
                    Ready to find your next great hire? Post a job on our platform to reach qualified candidates from our network of educational institutions.
                  </p>

                  <div className="flex justify-center">
                    <Link
                      href="/employers/post-job"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#003366] hover:bg-[#002244]"
                    >
                      Post a Job
                    </Link>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Contact Our Recruitment Team</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Need assistance with your recruitment needs?</h3>
                  <p className="mb-6">
                    Our recruitment specialists are ready to help you find the right talent for your organization. Contact us to discuss your specific requirements and how we can support your hiring process.
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
                      Become a Partner
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
