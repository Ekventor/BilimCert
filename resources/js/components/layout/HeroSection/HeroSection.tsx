import React from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from '../../multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../../hooks/useLanguage';
import { Button } from '../../ui/Button/Button';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">
              <TranslatedText textKey="home.title" />
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              <TranslatedText textKey="home.subtitle" />
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/application">
                <Button variant="secondary" size="lg" className="bg-[#FF6600] hover:bg-[#FF6600]/90">
                  <TranslatedText textKey="home.applyNow" />
                </Button>
              </Link>
              <Link href="/application-status">
                <Button variant="outline" size="lg" className="border-[#003366] text-[#003366] hover:bg-[#003366]/5">
                  <TranslatedText textKey="home.checkStatus" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6600]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#003366]/10 rounded-full z-0"></div>
              <img
                src="/images/hero-image.jpg"
                alt="Education Quality"
                className="rounded-lg shadow-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
