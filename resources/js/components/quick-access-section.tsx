import React from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

export function QuickAccessSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      ),
      titleKey: "home.applyNow",
      descriptionKey: "quickAccess.applyDescription",
      link: "/application",
      color: "from-[#FF6600] to-[#FF8800]",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      titleKey: "home.checkStatus",
      descriptionKey: "quickAccess.statusDescription",
      link: "/application-status",
      color: "from-[#003366] to-[#004080]",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      titleKey: "home.findUniversity",
      descriptionKey: "quickAccess.universityDescription",
      link: "/universities",
      color: "from-[#006633] to-[#008040]",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5`} />

              <div className="relative z-10">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white`}
                >
                  {service.icon}
                </div>

                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-[#003366]">
                    <TranslatedText textKey={service.titleKey} />
                  </h3>
                  <p className="text-gray-600">
                    <TranslatedText textKey={service.descriptionKey} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
