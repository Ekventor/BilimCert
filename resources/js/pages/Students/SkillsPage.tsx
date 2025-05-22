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

export default function SkillsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('professional');

  // Mock skill development resources
  const professionalSkills = [
    {
      title: 'Communication Skills',
      description: 'Develop effective verbal and written communication skills essential for professional success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      resources: [
        { title: 'Effective Business Communication Workshop', type: 'Workshop', link: '#' },
        { title: 'Public Speaking Essentials', type: 'Online Course', link: '#' },
        { title: 'Writing Professional Emails', type: 'Guide', link: '#' }
      ]
    },
    {
      title: 'Leadership Skills',
      description: 'Learn to lead teams, manage projects, and inspire others through effective leadership practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      resources: [
        { title: 'Leadership Fundamentals', type: 'Workshop', link: '#' },
        { title: 'Project Management for Beginners', type: 'Online Course', link: '#' },
        { title: 'Team Building Strategies', type: 'Guide', link: '#' }
      ]
    },
    {
      title: 'Critical Thinking',
      description: 'Develop analytical and problem-solving skills to approach challenges with a critical mindset.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      resources: [
        { title: 'Critical Thinking in the Workplace', type: 'Workshop', link: '#' },
        { title: 'Problem-Solving Techniques', type: 'Online Course', link: '#' },
        { title: 'Logical Reasoning Practice', type: 'Exercise', link: '#' }
      ]
    }
  ];

  const technicalSkills = [
    {
      title: 'Programming & Development',
      description: 'Learn programming languages and development skills for various technology fields.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      resources: [
        { title: 'Introduction to Python Programming', type: 'Online Course', link: '#' },
        { title: 'Web Development Bootcamp', type: 'Workshop Series', link: '#' },
        { title: 'Mobile App Development Fundamentals', type: 'Guide', link: '#' }
      ]
    },
    {
      title: 'Data Analysis',
      description: 'Develop skills in data collection, analysis, and visualization for informed decision-making.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      resources: [
        { title: 'Data Analysis with Excel', type: 'Workshop', link: '#' },
        { title: 'Introduction to R for Data Science', type: 'Online Course', link: '#' },
        { title: 'Data Visualization Techniques', type: 'Guide', link: '#' }
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Learn digital marketing strategies, social media management, and content creation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      resources: [
        { title: 'Digital Marketing Fundamentals', type: 'Online Course', link: '#' },
        { title: 'Social Media Strategy Workshop', type: 'Workshop', link: '#' },
        { title: 'Content Creation and SEO Basics', type: 'Guide', link: '#' }
      ]
    }
  ];

  const languageSkills = [
    {
      title: 'English Language',
      description: 'Improve your English language skills for academic and professional success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      resources: [
        { title: 'Business English Communication', type: 'Online Course', link: '#' },
        { title: 'IELTS Preparation Workshop', type: 'Workshop', link: '#' },
        { title: 'Academic Writing in English', type: 'Guide', link: '#' }
      ]
    },
    {
      title: 'Kazakh Language',
      description: 'Develop or improve your Kazakh language skills for professional contexts.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      resources: [
        { title: 'Professional Kazakh Language', type: 'Online Course', link: '#' },
        { title: 'Kazakh for Business Communication', type: 'Workshop', link: '#' },
        { title: 'Technical Terminology in Kazakh', type: 'Guide', link: '#' }
      ]
    },
    {
      title: 'Russian Language',
      description: 'Enhance your Russian language proficiency for regional business communication.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      resources: [
        { title: 'Business Russian', type: 'Online Course', link: '#' },
        { title: 'Russian for Professional Contexts', type: 'Workshop', link: '#' },
        { title: 'Technical Writing in Russian', type: 'Guide', link: '#' }
      ]
    }
  ];

  // Get the active skills based on the selected tab
  const getActiveSkills = () => {
    switch (activeTab) {
      case 'professional':
        return professionalSkills;
      case 'technical':
        return technicalSkills;
      case 'language':
        return languageSkills;
      default:
        return professionalSkills;
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
              { title: "For Students", href: "/students", translationKey: "header.students" },
              { title: "Skills Building", href: "/students/skills", translationKey: "mainNav.skillBuilding" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                Skills Building
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  Develop essential skills for academic and professional success. BilimCert offers a variety of resources to help you build both soft and technical skills that employers value.
                </p>
              </div>

              {/* Skill Categories Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8" aria-label="Skill Categories">
                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'professional'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveTab('professional')}
                  >
                    Professional Skills
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'technical'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveTab('technical')}
                  >
                    Technical Skills
                  </button>

                  <button
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'language'
                      ? 'border-[#FF6600] text-[#FF6600] font-semibold'
                      : 'border-transparent text-gray-700 hover:text-[#003366] hover:border-gray-300'
                      }`}
                    onClick={() => setActiveTab('language')}
                  >
                    Language Skills
                  </button>
                </nav>
              </div>

              {/* Skills Resources */}
              <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getActiveSkills().map((skill, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                          {skill.icon}
                        </div>
                        <h3 className="ml-3 text-lg font-medium text-[#003366]">{skill.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-4">{skill.description}</p>

                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Resources:</h4>
                      <ul className="space-y-2">
                        {skill.resources.map((resource, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#FF6600]/10 text-[#FF6600] mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                            <div>
                              <a href={resource.link} className="text-[#003366] hover:text-[#FF6600] font-medium">
                                {resource.title}
                              </a>
                              <span className="text-xs text-gray-500 ml-2">{resource.type}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skill Assessment */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Skill Assessment</h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-gray-900 mb-6">
                    Not sure which skills to focus on? Take our skill assessment to identify your strengths and areas for improvement. The assessment will provide personalized recommendations for skill development based on your career goals.
                  </p>

                  <div className="flex justify-center">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#003366] hover:bg-[#002244]"
                    >
                      Take Skill Assessment
                    </Link>
                  </div>
                </div>
              </section>

              {/* Skill Development Programs */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">Skill Development Programs</h2>

                <div className="bg-[#003366] text-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Skill Development Programs</h3>
                  <p className="mb-6">
                    Enroll in our structured skill development programs that combine workshops, online courses, and practical exercises to help you build a comprehensive skill set for your chosen career path.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-2">Professional Skills Certificate</h4>
                      <p className="text-sm mb-4">A 12-week program focusing on essential professional skills for workplace success.</p>
                      <Link
                        href="#"
                        className="text-white hover:text-[#FF6600] font-medium inline-flex items-center text-sm"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-2">Technical Skills Bootcamp</h4>
                      <p className="text-sm mb-4">Intensive training in high-demand technical skills with industry mentors.</p>
                      <Link
                        href="#"
                        className="text-white hover:text-[#FF6600] font-medium inline-flex items-center text-sm"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Link
                      href="/contacts"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white hover:bg-[#002244]"
                    >
                      Contact Us for More Information
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
