import React from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2">
            <div className="inline-flex items-center rounded-full border border-[#003366]/20 bg-white px-3 py-1 text-sm text-[#003366] shadow-sm self-start">
              <span className="font-medium">
                <TranslatedText textKey="home.tagline" />
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tighter text-[#003366] md:text-4xl lg:text-5xl">
              <TranslatedText textKey="home.title" />
            </h1>

            <p className="text-gray-600 md:text-xl">
              <TranslatedText textKey="home.subtitle" />
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/recognition"
                className="inline-flex items-center justify-center rounded-md bg-[#FF6600] px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6600]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6600] min-h-[48px] md:min-h-[44px]"
              >
                <TranslatedText textKey="home.applyNow" />
              </Link>
              <Link
                href="/application-status"
                className="inline-flex items-center justify-center rounded-md border border-[#003366] bg-white px-8 py-3 text-sm font-medium text-[#003366] shadow-sm transition-colors hover:bg-gray-100 hover:text-[#003366] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003366] min-h-[48px] md:min-h-[44px]"
              >
                <TranslatedText textKey="home.checkStatus" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6600]/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#003366]/10 rounded-full z-0"></div>
            <img
              src="/components/ui/logo.png"
              alt="BilimCert Logo"
              className="mx-auto overflow-hidden rounded-xl object-contain object-center sm:w-full relative z-10 p-8"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-2 rounded-full bg-[#003366]/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#003366]">
              <TranslatedText textKey="home.feature1Title" />
            </h3>
            <p className="text-sm text-gray-600">
              <TranslatedText textKey="home.feature1Description" />
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-2 rounded-full bg-[#003366]/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#003366]">
              <TranslatedText textKey="home.feature2Title" />
            </h3>
            <p className="text-sm text-gray-600">
              <TranslatedText textKey="home.feature2Description" />
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 md:col-span-1">
            <div className="p-2 rounded-full bg-[#003366]/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#003366]">
              <TranslatedText textKey="home.feature3Title" />
            </h3>
            <p className="text-sm text-gray-600">
              <TranslatedText textKey="home.feature3Description" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
