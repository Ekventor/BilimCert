import React, { useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

// Simple animation component to replace framer-motion
const AnimatedPartners: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame
    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      // Reset position when we've scrolled through half the content
      if (position <= -totalWidth) {
        position = 0;
      }

      if (container) {
        container.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex space-x-16 py-4">
      {children}
    </div>
  );
};

export function PartnersSection() {
  const { t } = useLanguage();

  const partners = [
    {
      id: 1,
      name: "University of Astana",
      logo: "/images/partners/partner1.svg",
      href: "#"
    },
    {
      id: 2,
      name: "Kazakh National University",
      logo: "/images/partners/partner2.svg",
      href: "#"
    },
    {
      id: 3,
      name: "Technical University of Kazakhstan",
      logo: "/images/partners/partner3.svg",
      href: "#"
    },
    {
      id: 4,
      name: "Eurasian National University",
      logo: "/images/partners/partner4.svg",
      href: "#"
    },
    {
      id: 5,
      name: "Nazarbayev University",
      logo: "/images/partners/partner5.svg",
      href: "#"
    },
    {
      id: 6,
      name: "KIMEP University",
      logo: "/images/partners/partner6.svg",
      href: "#"
    }
  ];

  // Animation entrance effect
  const FadeInSection: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('translate-y-10', 'opacity-0');
            }, delay);
          }
        });
      });

      const currentElement = domRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [delay]);

    return (
      <div
        ref={domRef}
        className="transition-all duration-700 ease-in-out transform translate-y-10 opacity-0"
      >
        {children}
      </div>
    );
  };

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-[#003366]/20 bg-white px-3 py-1 text-sm text-[#003366] shadow-sm">
              <span className="font-medium">
                <TranslatedText textKey="partners.tagline" />
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tighter text-[#003366] sm:text-4xl">
              <TranslatedText textKey="partners.title" />
            </h2>

            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <TranslatedText textKey="partners.subtitle" />
            </p>
          </div>
        </FadeInSection>

        {/* Animated partners section */}
        <div className="mt-12 relative max-w-6xl mx-auto">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden">
            <AnimatedPartners>
              {/* First set of partners */}
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex min-w-[180px] items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-6 shadow-sm mx-2"
                >
                  <div className="h-12 w-auto relative flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/120x48?text=' + encodeURIComponent(partner.name);
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for continuous scrolling */}
              {partners.map((partner) => (
                <div
                  key={`duplicate-${partner.id}`}
                  className="flex min-w-[180px] items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-6 shadow-sm mx-2"
                >
                  <div className="h-12 w-auto relative flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/120x48?text=' + encodeURIComponent(partner.name);
                      }}
                    />
                  </div>
                </div>
              ))}
            </AnimatedPartners>
          </div>
        </div>

        <FadeInSection delay={200}>
          <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="text-2xl font-bold text-[#003366]">
              <TranslatedText textKey="partners.joinUs.title" />
            </h3>

            <p className="max-w-[600px] text-gray-600">
              <TranslatedText textKey="partners.joinUs.description" />
            </p>

            <Link
              href="/partnership/application"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#003366] to-[#004080] px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003366] min-h-[48px] md:min-h-[44px]"
            >
              <TranslatedText textKey="partners.joinUs.button" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
