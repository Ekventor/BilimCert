import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

// Team Member Card Component
const TeamMemberCard: React.FC<{
  name: string;
  position: string;
  image: string;
  bio: string;
}> = ({ name, position, image, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${position}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x400?text=Team+Member';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#003366] mb-1">{name}</h3>
        <p className="text-[#FF6600] font-medium mb-3">{position}</p>
        <p className="text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

// Department Card Component
const DepartmentCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4 text-[#003366]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#003366]">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default function AboutCenterPage() {
  const { t } = useLanguage();

  // Mock data for leadership team
  const leadershipTeam = [
    {
      name: "Dr. Aizhan Kazbekova",
      position: t('about.leadership.director'),
      image: "/images/team/director.jpg",
      bio: t('about.leadership.directorBio')
    },
    {
      name: "Dr. Marat Nurlanovich",
      position: t('about.leadership.deputyDirector'),
      image: "/images/team/deputy-director.jpg",
      bio: t('about.leadership.deputyDirectorBio')
    },
    {
      name: "Dr. Aliya Sergazina",
      position: t('about.leadership.chiefScientist'),
      image: "/images/team/chief-scientist.jpg",
      bio: t('about.leadership.chiefScientistBio')
    }
  ];

  // Mock data for departments
  const departments = [
    {
      title: t('about.departments.accreditation.title'),
      description: t('about.departments.accreditation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('about.departments.bologna.title'),
      description: t('about.departments.bologna.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('about.departments.recognition.title'),
      description: t('about.departments.recognition.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: t('about.departments.international.title'),
      description: t('about.departments.international.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('about.departments.research.title'),
      description: t('about.departments.research.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t('about.departments.it.title'),
      description: t('about.departments.it.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
              { title: "About the Center", href: "/about/center", translationKey: "footer.aboutCenter" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="about.title" />
              </h1>

              {/* Mission and Vision */}
              <section className="mb-12">
                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="about.mission.title" />
                  </h2>
                  <p className="text-lg text-gray-900">
                    <TranslatedText textKey="about.mission.description" />
                  </p>
                </div>

                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="about.vision.title" />
                  </h2>
                  <p className="text-lg text-gray-900">
                    <TranslatedText textKey="about.vision.description" />
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="about.values.title" />
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.values.item1" /></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.values.item2" /></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.values.item3" /></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.values.item4" /></span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="about.goals.title" />
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.goals.item1" /></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.goals.item2" /></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.goals.item3" /></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6600] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-900"><TranslatedText textKey="about.goals.item4" /></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Organizational Structure */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">
                  <TranslatedText textKey="about.structure.title" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments.map((department, index) => (
                    <DepartmentCard
                      key={index}
                      title={department.title}
                      description={department.description}
                      icon={department.icon}
                    />
                  ))}
                </div>
              </section>

              {/* Leadership */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">
                  <TranslatedText textKey="about.leadership.title" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {leadershipTeam.map((leader, index) => (
                    <TeamMemberCard
                      key={index}
                      name={leader.name}
                      position={leader.position}
                      image={leader.image}
                      bio={leader.bio}
                    />
                  ))}
                </div>
              </section>

              {/* History */}
              <section>
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">
                  <TranslatedText textKey="about.history.title" />
                </h2>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="prose max-w-none">
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="about.history.paragraph1" />
                    </p>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="about.history.paragraph2" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="about.history.paragraph3" />
                    </p>
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
