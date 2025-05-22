import React, { useState, useEffect, useRef } from 'react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

// Simple animation component for transitions
const AnimatedTestimonial: React.FC<{
  isActive: boolean;
  direction: 'left' | 'right' | 'initial';
  children: React.ReactNode;
}> = ({ isActive, direction, children }) => {
  const [animationClass, setAnimationClass] = useState('');
  const animationAppliedRef = useRef(false);

  useEffect(() => {
    // Only apply animation if the active state changes
    if (isActive && !animationAppliedRef.current) {
      // Entry animation - only apply once
      animationAppliedRef.current = true;

      if (direction === 'right') {
        setAnimationClass('animate-slide-in-right');
      } else if (direction === 'left') {
        setAnimationClass('animate-slide-in-left');
      } else {
        setAnimationClass('animate-fade-in');
      }
    } else if (!isActive && animationAppliedRef.current) {
      // Exit animation - reset the ref when element becomes inactive
      animationAppliedRef.current = false;

      if (direction === 'right') {
        setAnimationClass('animate-slide-out-left');
      } else if (direction === 'left') {
        setAnimationClass('animate-slide-out-right');
      } else {
        setAnimationClass('animate-fade-out');
      }
    }
  }, [isActive, direction]);

  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
        } ${animationClass}`}
    >
      {children}
    </div>
  );
};

export function TestimonialSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | 'initial'>('initial');
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      quoteKey: "testimonials.quote1",
      authorKey: "testimonials.author1",
      roleKey: "testimonials.role1",
      universityKey: "testimonials.university1",
      avatar: "/images/testimonials/avatar1.jpg"
    },
    {
      id: 2,
      quoteKey: "testimonials.quote2",
      authorKey: "testimonials.author2",
      roleKey: "testimonials.role2",
      universityKey: "testimonials.university2",
      avatar: "/images/testimonials/avatar2.jpg"
    },
    {
      id: 3,
      quoteKey: "testimonials.quote3",
      authorKey: "testimonials.author3",
      roleKey: "testimonials.role3",
      universityKey: "testimonials.university3",
      avatar: "/images/testimonials/avatar3.jpg"
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

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection('right');
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500); // Match this with the animation duration
  };

  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection('left');
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500); // Match this with the animation duration
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (sectionRef.current && isElementInViewport(sectionRef.current)) {
        nextTestimonial();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  // Helper function to check if element is in viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#003366] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#003366,#004080)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwaC02VjBoNnYzMHptLTYgMGgtNlYwaDZ2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative max-w-screen-xl">
        <FadeInSection>
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white shadow-sm mb-4">
              <span className="font-medium">
                <TranslatedText textKey="testimonials.tagline" />
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <TranslatedText textKey="testimonials.title" />
            </h2>

            <p className="max-w-[700px] text-white/80 mt-4 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <TranslatedText textKey="testimonials.subtitle" />
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6 md:p-10 min-h-[300px]">
              <div className="absolute top-6 left-6 text-[#FF6600] opacity-50">
                <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10 h-full">
                <div className="relative h-full">
                  {testimonials.map((testimonial, index) => (
                    <AnimatedTestimonial
                      key={testimonial.id}
                      isActive={index === activeIndex}
                      direction={direction}
                    >
                      <div className="flex flex-col items-center">
                        <blockquote className="mb-6 text-xl md:text-2xl text-center relative z-10 pt-6 text-white">
                          <TranslatedText textKey={testimonial.quoteKey} />
                        </blockquote>

                        <div className="flex flex-col items-center">
                          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/50 mb-3">
                            <img
                              src={testimonial.avatar}
                              alt={t(testimonial.authorKey)}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/64';
                              }}
                            />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-white">
                              <TranslatedText textKey={testimonial.authorKey} />
                            </div>
                            <div className="text-sm text-white/80">
                              <TranslatedText textKey={testimonial.roleKey} />, <TranslatedText textKey={testimonial.universityKey} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedTestimonial>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="h-10 w-10 md:h-8 md:w-8 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 flex items-center justify-center min-h-[48px] min-w-[48px] md:min-h-[44px] md:min-w-[44px]"
                  aria-label="Previous testimonial"
                  disabled={isAnimating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="h-10 w-10 md:h-8 md:w-8 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 flex items-center justify-center min-h-[48px] min-w-[48px] md:min-h-[44px] md:min-w-[44px]"
                  aria-label="Next testimonial"
                  disabled={isAnimating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setDirection(index > activeIndex ? 'right' : 'left');
                    setActiveIndex(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Add custom animation styles */}
      <style jsx global>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }

        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s forwards;
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s forwards;
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        .animate-slide-out-right {
          animation: slideOutRight 0.5s forwards;
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        .animate-slide-out-left {
          animation: slideOutLeft 0.5s forwards;
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s forwards;
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        .animate-fade-out {
          animation: fadeOut 0.5s forwards;
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }
      `}</style>
    </section>
  );
}
