import React from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

export function FeatureSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      titleKey: "features.students.title",
      descriptionKey: "features.students.description",
      link: "/students",
      color: "from-blue-500 to-indigo-700",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      titleKey: "features.universities.title",
      descriptionKey: "features.universities.description",
      link: "/universities",
      color: "from-orange-400 to-pink-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      titleKey: "features.employers.title",
      descriptionKey: "features.employers.description",
      link: "/employers",
      color: "from-emerald-500 to-teal-700",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,51,102,0.03),transparent_20%)]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border border-[#003366]/20 bg-white px-3 py-1 text-sm text-[#003366] shadow-sm">
            <span className="font-medium">
              <TranslatedText textKey="features.tagline" />
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#003366] sm:text-4xl md:text-5xl">
              <TranslatedText textKey="features.title" />
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <TranslatedText textKey="features.subtitle" />
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5`} />

              <div className="relative z-10">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} text-white`}
                >
                  {feature.icon}
                </div>

                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-[#003366]">
                    <TranslatedText textKey={feature.titleKey} />
                  </h3>
                  <p className="text-gray-600">
                    <TranslatedText textKey={feature.descriptionKey} />
                  </p>
                </div>

                <div className="mt-4 flex items-center text-[#FF6600] group-hover:underline">
                  <Link href={feature.link} className="text-sm font-medium">
                    <TranslatedText textKey="common.learnMore" />
                  </Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#003366] to-[#FF6600] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
