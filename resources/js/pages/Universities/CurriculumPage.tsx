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

export default function CurriculumPage() {
  const { t } = useLanguage();

  // Mock curriculum development services
  const services = [
    {
      title: 'Curriculum Assessment',
      description: 'Comprehensive evaluation of existing curricula against national and international standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Curriculum Design',
      description: 'Expert assistance in designing new curricula aligned with industry needs and educational standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Learning Outcomes Development',
      description: 'Support in defining and refining learning outcomes that align with qualification frameworks.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Assessment Methods',
      description: 'Guidance on developing effective assessment methods that measure achievement of learning outcomes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'Industry Alignment',
      description: 'Facilitation of partnerships with industry to ensure curricula meet current and future workforce needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Curriculum Review Workshops',
      description: 'Facilitated workshops for faculty to review and enhance existing curricula.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Mock case studies
  const caseStudies = [
    {
      title: 'Engineering Curriculum Modernization',
      institution: 'Technical University of Kazakhstan',
      description: 'Collaborated with the Faculty of Engineering to modernize their curriculum, incorporating industry-relevant skills and project-based learning approaches.',
      outcomes: [
        'Increased graduate employment rate by 22%',
        'Improved student satisfaction scores by 18%',
        'Enhanced industry partnerships leading to more internship opportunities'
      ]
    },
    {
      title: 'Medical Education Curriculum Reform',
      institution: 'Kazakh Medical University',
      description: 'Supported a comprehensive reform of the medical education curriculum to align with international standards and incorporate modern teaching methodologies.',
      outcomes: [
        'Successfully achieved international accreditation',
        'Improved clinical skills assessment scores by 15%',
        'Increased international student enrollment by 30%'
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
              { title: "For Universities", href: "/universities", translationKey: "header.universities" },
              { title: "Curriculum Development", href: "/universities/curriculum", translationKey: "mainNav.curriculumDevelopment" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Curriculum Development
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  BilimCert provides comprehensive support to universities in developing, reviewing, and enhancing curricula that meet international standards and prepare students for success in a rapidly changing world. Our curriculum development services are designed to ensure alignment with national qualification frameworks, industry needs, and global best practices.
                </p>
              </div>

              {/* Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
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

              {/* Case Studies */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Case Studies</h2>

                <div className="space-y-6">
                  {caseStudies.map((study, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-medium text-[#003366] mb-2">{study.title}</h3>
                      <p className="text-[#FF6600] font-medium mb-4">{study.institution}</p>
                      <p className="text-gray-600 mb-4">{study.description}</p>

                      <h4 className="text-lg font-medium text-[#003366] mb-2">Outcomes:</h4>
                      <ul className="space-y-1 mb-4">
                        {study.outcomes.map((outcome, i) => (
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
                  ))}
                </div>
              </section>

              {/* Our Approach */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Our Approach</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">Collaborative Process</h3>
                      <p className="text-gray-600 mb-4">
                        We work closely with university faculty, administrators, industry partners, and students to ensure that curriculum development is a collaborative process that incorporates diverse perspectives and needs.
                      </p>

                      <h3 className="text-lg font-medium text-[#003366] mb-4">Evidence-Based Approach</h3>
                      <p className="text-gray-600">
                        Our recommendations are grounded in educational research, industry trends, and data analysis to ensure that curriculum changes lead to measurable improvements in student outcomes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-4">Continuous Improvement</h3>
                      <p className="text-gray-600 mb-4">
                        We support universities in implementing systems for ongoing curriculum review and enhancement, ensuring that programs remain relevant and effective over time.
                      </p>

                      <h3 className="text-lg font-medium text-[#003366] mb-4">Global Perspective</h3>
                      <p className="text-gray-600">
                        Our team brings international expertise and knowledge of global best practices, helping universities develop curricula that prepare students for success in a global context.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Get Started</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Ready to enhance your curriculum?</h3>
                  <p className="mb-6">
                    Contact us to discuss how our curriculum development services can help your institution improve student outcomes and meet accreditation standards.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/partnership/application"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-[#003366] hover:bg-gray-100"
                    >
                      Request a Consultation
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
