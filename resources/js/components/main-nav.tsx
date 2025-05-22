import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { LanguageSwitcher } from './multilingual/LanguageSwitcher/LanguageSwitcher';
import { AccessibilityToggle } from './accessibility/AccessibilityToggle/AccessibilityToggle';
import { useLanguage } from '../hooks/useLanguage';
import { useMobileMenu } from '../contexts/MobileMenuContext';

// Navigation menu components
const NavigationMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative z-10">{children}</div>
);

const NavigationMenuList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center space-x-4">{children}</div>
);

const NavigationMenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative">{children}</div>
);

const NavigationMenuTrigger: React.FC<{
  children: React.ReactNode,
  className?: string,
  onClick?: () => void,
  isOpen?: boolean
}> = ({ children, className = "", onClick, isOpen }) => (
  <button
    onClick={onClick}
    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#003366]/10 focus:bg-[#003366]/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[#003366] ${className} ${isOpen ? 'bg-[#003366]/10' : ''}`}
    aria-expanded={isOpen}
  >
    {children}
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
      className={`ml-1 h-3 w-3 transition duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
);

const NavigationMenuContent: React.FC<{
  children: React.ReactNode,
  isOpen: boolean
}> = ({ children, isOpen }) => (
  isOpen ? (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 mt-10 w-auto z-50">
      <div className="rounded-md border border-gray-200 bg-white p-2 shadow-lg">
        {children}
      </div>
    </div>
  ) : null
);

const NavigationMenuLink: React.FC<{
  href: string,
  children: React.ReactNode,
  className?: string
}> = ({ href, children, className = "" }) => (
  <Link
    href={href}
    className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 ${className}`}
  >
    {children}
  </Link>
);

// Navigation components moved to mobile-menu.tsx

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
    <div className="flex flex-col w-full overflow-hidden py-2">
      {/* Top Row - Logo, Language Switcher, Accessibility Toggle, Apply Button */}
      <div className="flex justify-between items-center w-full mb-2 md:mb-3">
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
          <Link
            href="/application"
            className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md transition-colors text-sm font-medium whitespace-nowrap"
          >
            <TranslatedText textKey="header.applyButton" />
          </Link>
        </div>

        {/* Medium-Large Screen Action Buttons */}
        <div className="hidden mlg:flex lg:hidden items-center space-x-2 flex-shrink-0">
          <LanguageSwitcher />
          <Link
            href="/application"
            className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            <TranslatedText textKey="header.applyButton" />
          </Link>
        </div>

        {/* Tablet Action Button */}
        <div className="hidden md:flex mlg:hidden items-center space-x-2 flex-shrink-0">
          <LanguageSwitcher />
          <Link
            href="/application"
            className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            <TranslatedText textKey="header.applyButton" />
          </Link>
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

      {/* Desktop Navigation - Advanced with dropdowns (large screens) */}
      <div className="hidden lg:flex mx-2 lg:mx-3 xl:mx-4 flex-grow overflow-hidden">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="space-x-2 lg:space-x-3 xl:space-x-4 flex-wrap justify-center">
            {items.slice(0, 3).map((item, index) => (
              <NavigationMenuItem key={item.title} className="flex-shrink-0">
                <NavigationMenuTrigger
                  className="bg-transparent hover:bg-gray-100/80 text-sm px-2 py-2 lg:px-3 lg:py-2"
                  onClick={() => toggleItem(index)}
                  isOpen={openItem === index}
                >
                  <TranslatedText textKey={item.title} />
                </NavigationMenuTrigger>
                <NavigationMenuContent isOpen={openItem === index}>
                  <ul className="grid gap-2 p-4 lg:p-5 w-[clamp(280px,80vw,500px)]">
                    <li className="row-span-3">
                      <NavigationMenuLink href={item.href} className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#003366] to-[#004080] p-4 lg:p-5 no-underline outline-none focus:shadow-md">
                        <div className="mt-3 mb-2 text-base lg:text-lg font-medium text-white">
                          <TranslatedText textKey={item.title} />
                        </div>
                        <p className="text-xs lg:text-sm leading-tight text-white/90">
                          <TranslatedText textKey={item.description} />
                        </p>
                      </NavigationMenuLink>
                    </li>
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink href={subItem.href} className="block select-none rounded-md p-2 lg:p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                          <div className="text-xs lg:text-sm font-medium leading-none text-[#003366]">
                            <TranslatedText textKey={subItem.title} />
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            {items.slice(3).map((item) => (
              <NavigationMenuItem key={item.title} className="flex-shrink-0">
                <Link
                  href={item.href}
                  className="group inline-flex items-center justify-center rounded-md bg-transparent px-2 py-2 lg:px-3 lg:py-2 text-sm font-medium transition-colors hover:bg-[#003366]/10 focus:bg-[#003366]/10 focus:outline-none text-[#003366]"
                >
                  <TranslatedText textKey={item.title} />
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Medium-Large Screen Navigation - More comprehensive than tablet but less than desktop */}
      <div className="hidden mlg:flex lg:hidden mx-2 flex-grow overflow-hidden">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="space-x-2 flex-wrap justify-center">
            {items.slice(0, 2).map((item, index) => (
              <NavigationMenuItem key={item.title} className="flex-shrink-0">
                <NavigationMenuTrigger
                  className="bg-transparent hover:bg-gray-100/80 text-sm px-2 py-2"
                  onClick={() => toggleItem(index)}
                  isOpen={openItem === index}
                >
                  <TranslatedText textKey={item.title} />
                </NavigationMenuTrigger>
                <NavigationMenuContent isOpen={openItem === index}>
                  <ul className="grid gap-2 p-3 w-[clamp(250px,70vw,350px)]">
                    <li className="row-span-3">
                      <NavigationMenuLink href={item.href} className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#003366] to-[#004080] p-3 no-underline outline-none focus:shadow-md">
                        <div className="mt-3 mb-2 text-base font-medium text-white">
                          <TranslatedText textKey={item.title} />
                        </div>
                        <p className="text-xs leading-tight text-white/90">
                          <TranslatedText textKey={item.description} />
                        </p>
                      </NavigationMenuLink>
                    </li>
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink href={subItem.href} className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                          <div className="text-xs font-medium leading-none text-[#003366]">
                            <TranslatedText textKey={subItem.title} />
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            {items.slice(2, 5).map((item) => (
              <NavigationMenuItem key={item.title} className="flex-shrink-0">
                <Link
                  href={item.href}
                  className="group inline-flex items-center justify-center rounded-md bg-transparent px-2 py-2 text-sm font-medium transition-colors hover:bg-[#003366]/10 focus:bg-[#003366]/10 focus:outline-none text-[#003366]"
                >
                  <TranslatedText textKey={item.title} />
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Tablet Navigation - Simplified but visible (medium screens) */}
      <nav className="hidden md:flex mlg:hidden flex-grow overflow-hidden">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 w-full">
          {standardNavItems.slice(0, 5).map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-[#003366] hover:text-[#002244] whitespace-nowrap transition-colors text-xs sm:text-sm font-medium px-2 py-2 rounded-md hover:bg-gray-100/80 flex items-center justify-center flex-shrink-0"
            >
              <TranslatedText textKey={`header.${item.key}`} />
            </Link>
          ))}
        </div>
      </nav>

      {/* Medium-Large Screen Action Buttons */}
      <div className="hidden mlg:flex lg:hidden items-center space-x-2 ml-2 flex-shrink-0">
        <LanguageSwitcher />
        <Link
          href="/application"
          className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
        >
          <TranslatedText textKey="header.applyButton" />
        </Link>
      </div>

      {/* Tablet Action Button */}
      <div className="hidden md:flex mlg:hidden items-center ml-2 flex-shrink-0">
        <Link
          href="/application"
          className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
        >
          <TranslatedText textKey="header.applyButton" />
        </Link>
      </div>

      {/* Desktop Right Side - Language, Accessibility, Apply Button */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 ml-2 lg:ml-3 flex-shrink-0">
        <LanguageSwitcher />
        <AccessibilityToggle />
        <Link
          href="/application"
          className="bg-gradient-to-r from-[#FF6600] to-[#FF8800] hover:opacity-90 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md transition-colors text-sm font-medium whitespace-nowrap"
        >
          <TranslatedText textKey="header.applyButton" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mlg:hidden ml-2 flex-shrink-0">
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
  );
}
