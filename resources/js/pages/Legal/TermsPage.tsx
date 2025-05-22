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

export default function TermsPage() {
  const { t } = useLanguage();

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
              { title: "Terms of Use", href: "/terms", translationKey: "footer.terms" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="terms.title" />
              </h1>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="prose max-w-none">
                  <p className="text-gray-900 mb-6">
                    <TranslatedText textKey="terms.lastUpdated" /> {new Date().toLocaleDateString()}
                  </p>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="terms.introduction.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="terms.introduction.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="terms.introduction.paragraph2" />
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="terms.usage.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="terms.usage.paragraph1" />
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li><TranslatedText textKey="terms.usage.item1" /></li>
                      <li><TranslatedText textKey="terms.usage.item2" /></li>
                      <li><TranslatedText textKey="terms.usage.item3" /></li>
                      <li><TranslatedText textKey="terms.usage.item4" /></li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="terms.intellectualProperty.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="terms.intellectualProperty.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="terms.intellectualProperty.paragraph2" />
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="terms.liability.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="terms.liability.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="terms.liability.paragraph2" />
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="terms.termination.title" />
                    </h2>
                    <p className="text-gray-900">
                      <TranslatedText textKey="terms.termination.paragraph1" />
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="terms.contact.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="terms.contact.paragraph1" />
                    </p>
                    <ul className="list-none space-y-2 text-gray-900">
                      <li>
                        <strong>Email:</strong> legal@bilimcert.kz
                      </li>
                      <li>
                        <strong><TranslatedText textKey="terms.contact.address" />:</strong>{' '}
                        <TranslatedText textKey="footer.address.line1" />,{' '}
                        <TranslatedText textKey="footer.address.line2" />,{' '}
                        <TranslatedText textKey="footer.address.line3" />
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
