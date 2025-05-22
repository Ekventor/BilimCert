import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { LanguageSwitcher } from './multilingual/LanguageSwitcher/LanguageSwitcher';
import { AccessibilityToggle } from './accessibility/AccessibilityToggle/AccessibilityToggle';
import { useLanguage } from '../hooks/useLanguage';
import { useMobileMenu } from '../contexts/MobileMenuContext';

export function MainNav() {
  const { t } = useLanguage();
  const { isOpen: mobileMenuOpen, toggleMenu } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      title: "mainNav.forStudents",
      href: "/students",
      description: "mainNav.studentsDescription",
      subItems: [
        { title: "mainNav.careerDevelopment", href: "/students/career" },
        { title: "mainNav.internships", href: "/students/internships" },
        { title: "mainNav.skillBuilding", href: "/students/skills" },
      ],
    },
    {
      title: "mainNav.forUniversities",
      href: "/universities",
      description: "mainNav.universitiesDescription",
      subItems: [
        { title: "mainNav.researchCollaboration", href: "/universities/research" },
        { title: "mainNav.curriculumDevelopment", href: "/universities/curriculum" },
        { title: "mainNav.industryPartnerships", href: "/universities/partnerships" },
        { title: "mainNav.universityFinder", href: "/universities/finder" },
      ],
    },
    {
      title: "mainNav.forEmployers",
      href: "/employers",
      description: "mainNav.employersDescription",
      subItems: [
        { title: "mainNav.talentRecruitment", href: "/employers/recruitment" },
        { title: "mainNav.professionalDevelopment", href: "/employers/development" },
        { title: "mainNav.academicPartnerships", href: "/employers/partnerships" },
      ],
    },
    {
      title: "mainNav.about",
      href: "/about",
      description: "mainNav.aboutDescription",
    },
    {
      title: "mainNav.contact",
      href: "/contacts",
      description: "mainNav.contactDescription",
    },
  ];

  // Add standard navigation items
  const standardNavItems = [
    { key: 'home', href: '/' },
    { key: 'recognition', href: '/recognition' },
    { key: 'accreditation', href: '/accreditation' },
    { key: 'bolognaProcess', href: '/bologna-process' },
    { key: 'news', href: '/news' },
    { key: 'contacts', href: '/contacts' },
    { key: 'faq', href: '/faq' },
    { key: 'applicationStatus', href: '/application-status' },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full py-2">
      {/* Top Row - Logo, Language Switcher, Accessibility Toggle, Apply Button */}
      <div className="flex justify-between items-center w-full mb-3">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/components/ui/logo1.png"
              alt="BilimCert Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              aria-label="BilimCert - Home"
            />
            <span
              className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#003366] to-[#0066CC] bg-clip-text text-transparent transition-all ${scrolled ? "opacity-100" : "opacity-100"}`}
            >
              BilimCert
            </span>
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
          <LanguageSwitcher />
          <AccessibilityToggle />
        </div>

        {/* Medium-Large Screen Action Buttons */}
        <div className="hidden mlg:flex lg:hidden items-center space-x-2 flex-shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Tablet Action Button */}
        <div className="hidden md:flex mlg:hidden items-center space-x-2 flex-shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-shrink-0">
          <button
            type="button"
            className="text-[#003366] hover:text-[#004080] focus:outline-none focus:ring-2 focus:ring-[#003366]/50 rounded-md p-1.5 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Row - Navigation Items */}
      <div className="w-full">
        {/* Desktop Navigation - Advanced with dropdowns (large screens) */}
        <div className="hidden lg:flex justify-center w-full">
          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8 flex-wrap justify-center">
            {items.slice(0, 3).map((item, index) => (
              <div key={item.title} className="relative flex-shrink-0">
                <button
                  className="bg-transparent hover:bg-gray-100/80 text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2 font-medium text-[#003366] rounded-md flex items-center"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <TranslatedText textKey={item.title} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-3 w-3 transition duration-200 ${openItem === index ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openItem === index && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 z-50">
                    <div className="rounded-md border border-gray-200 bg-white p-2 shadow-lg">
                      <ul className="grid gap-2 p-4 lg:p-5 w-[clamp(280px,60vw,400px)]">
                        <li className="row-span-3">
                          <Link href={item.href} className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#003366] to-[#004080] p-4 lg:p-5 no-underline outline-none focus:shadow-md">
                            <div className="mt-3 mb-2 text-base lg:text-lg font-medium text-white">
                              <TranslatedText textKey={item.title} />
                            </div>
                            <p className="text-xs lg:text-sm leading-tight text-white/90">
                              <TranslatedText textKey={item.description} />
                            </p>
                          </Link>
                        </li>
                        {item.subItems?.map((subItem) => (
                          <li key={subItem.title}>
                            <Link href={subItem.href} className="block select-none rounded-md p-2 lg:p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                              <div className="text-xs lg:text-sm font-medium leading-none text-[#003366]">
                                <TranslatedText textKey={subItem.title} />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {items.slice(3).map((item) => (
              <div key={item.title} className="flex-shrink-0">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-md bg-transparent px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base font-medium transition-colors hover:bg-[#003366]/10 focus:bg-[#003366]/10 focus:outline-none text-[#003366]"
                >
                  <TranslatedText textKey={item.title} />
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0">
              <Link
                href="/application"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base font-medium transition-colors"
              >
                <TranslatedText textKey="header.applyButton" />
              </Link>
            </div>
          </div>
        </div>

        {/* Medium-Large Screen Navigation - More comprehensive than tablet but less than desktop */}
        <div className="hidden mlg:flex lg:hidden justify-center w-full">
          <div className="flex space-x-3 flex-wrap justify-center">
            {items.slice(0, 2).map((item, index) => (
              <div key={item.title} className="relative flex-shrink-0">
                <button
                  className="bg-transparent hover:bg-gray-100/80 text-sm px-3 py-2 font-medium text-[#003366] rounded-md flex items-center"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <TranslatedText textKey={item.title} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 h-3 w-3 transition duration-200 ${openItem === index ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openItem === index && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 z-50">
                    <div className="rounded-md border border-gray-200 bg-white p-2 shadow-lg">
                      <ul className="grid gap-2 p-3 w-[clamp(250px,60vw,350px)]">
                        <li className="row-span-3">
                          <Link href={item.href} className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#003366] to-[#004080] p-3 no-underline outline-none focus:shadow-md">
                            <div className="mt-3 mb-2 text-base font-medium text-white">
                              <TranslatedText textKey={item.title} />
                            </div>
                            <p className="text-xs leading-tight text-white/90">
                              <TranslatedText textKey={item.description} />
                            </p>
                          </Link>
                        </li>
                        {item.subItems?.map((subItem) => (
                          <li key={subItem.title}>
                            <Link href={subItem.href} className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                              <div className="text-xs font-medium leading-none text-[#003366]">
                                <TranslatedText textKey={subItem.title} />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {items.slice(2, 5).map((item) => (
              <div key={item.title} className="flex-shrink-0">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-[#003366]/10 focus:bg-[#003366]/10 focus:outline-none text-[#003366]"
                >
                  <TranslatedText textKey={item.title} />
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0">
              <Link
                href="/application"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                <TranslatedText textKey="header.applyButton" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tablet Navigation - Simplified but visible (medium screens) */}
        <div className="hidden md:flex mlg:hidden justify-center w-full">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            {standardNavItems.slice(0, 5).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-[#003366] hover:text-[#002244] whitespace-nowrap transition-colors text-xs sm:text-sm font-medium px-2 sm:px-3 py-2 rounded-md hover:bg-gray-100/80 flex items-center justify-center flex-shrink-0"
              >
                <TranslatedText textKey={`header.${item.key}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
