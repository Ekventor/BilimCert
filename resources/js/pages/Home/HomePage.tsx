import React from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Breadcrumb } from '../../components/breadcrumb';
import { HeroSection } from '../../components/hero-section';
import { QuickAccessSection } from '../../components/quick-access-section';
import { NewsSection } from '../../components/news-section';
import { FAQSection } from '../../components/faq-section';
import { ContactSection } from '../../components/contact-section';
import { QuickLinksSection } from '../../components/quick-links-section';
import { FeatureSection } from '../../components/feature-section';
import { TestimonialSection } from '../../components/testimonial-section';
import { PartnersSection } from '../../components/partners-section';
import { Footer } from '../../components/footer';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function HomePage() {
  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-[70vh] overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#003366]/5 rounded-bl-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#FF6600]/5 rounded-tr-[70px]" />
        </div>

        <FullWidthHeader />

        {/* Mobile Menu - Rendered at the root level */}
        <MobileMenu />

        <main className="flex-1">
          <div className="container mx-auto w-[90%] max-w-[1400px]">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }]} />
          </div>
          <HeroSection />
          <div className="container mx-auto w-[90%] max-w-[1400px]">
            <QuickAccessSection />
          </div>
          <NewsSection />
          <div className="container mx-auto w-[90%] max-w-[1400px]">
            <FeatureSection />
          </div>
          <FAQSection />
          <ContactSection />
          <div className="container mx-auto w-[90%] max-w-[1400px]">
            <QuickLinksSection />
          </div>
          <TestimonialSection />
          <PartnersSection />
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
