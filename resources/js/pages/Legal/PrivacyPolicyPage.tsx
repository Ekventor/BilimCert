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

export default function PrivacyPolicyPage() {
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
              { title: "Privacy Policy", href: "/privacy-policy", translationKey: "footer.privacyPolicy" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="privacyPolicy.title" />
              </h1>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="prose max-w-none">
                  <p className="text-gray-900 mb-6">
                    <TranslatedText textKey="privacyPolicy.lastUpdated" /> {new Date().toLocaleDateString()}
                  </p>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.introduction.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.introduction.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="privacyPolicy.introduction.paragraph2" />
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.informationCollection.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.informationCollection.paragraph1" />
                    </p>

                    <h3 className="text-lg font-medium text-[#003366] mt-6 mb-3">
                      <TranslatedText textKey="privacyPolicy.informationCollection.personalData.title" />
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.personalData.item1" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.personalData.item2" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.personalData.item3" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.personalData.item4" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.personalData.item5" /></li>
                    </ul>

                    <h3 className="text-lg font-medium text-[#003366] mt-6 mb-3">
                      <TranslatedText textKey="privacyPolicy.informationCollection.usageData.title" />
                    </h3>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.informationCollection.usageData.paragraph1" />
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.usageData.item1" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.usageData.item2" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.usageData.item3" /></li>
                      <li><TranslatedText textKey="privacyPolicy.informationCollection.usageData.item4" /></li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.useOfData.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.useOfData.paragraph1" />
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item1" /></li>
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item2" /></li>
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item3" /></li>
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item4" /></li>
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item5" /></li>
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item6" /></li>
                      <li><TranslatedText textKey="privacyPolicy.useOfData.item7" /></li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.dataSecurity.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.dataSecurity.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="privacyPolicy.dataSecurity.paragraph2" />
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.dataRetention.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.dataRetention.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="privacyPolicy.dataRetention.paragraph2" />
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.cookies.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.cookies.paragraph1" />
                    </p>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.cookies.paragraph2" />
                    </p>

                    <h3 className="text-lg font-medium text-[#003366] mt-6 mb-3">
                      <TranslatedText textKey="privacyPolicy.cookies.types.title" />
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li>
                        <strong><TranslatedText textKey="privacyPolicy.cookies.types.essential.title" />:</strong>{' '}
                        <TranslatedText textKey="privacyPolicy.cookies.types.essential.description" />
                      </li>
                      <li>
                        <strong><TranslatedText textKey="privacyPolicy.cookies.types.preferences.title" />:</strong>{' '}
                        <TranslatedText textKey="privacyPolicy.cookies.types.preferences.description" />
                      </li>
                      <li>
                        <strong><TranslatedText textKey="privacyPolicy.cookies.types.analytics.title" />:</strong>{' '}
                        <TranslatedText textKey="privacyPolicy.cookies.types.analytics.description" />
                      </li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.thirdPartyServices.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.thirdPartyServices.paragraph1" />
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li>
                        <strong>Google Analytics:</strong>{' '}
                        <TranslatedText textKey="privacyPolicy.thirdPartyServices.googleAnalytics" />
                      </li>
                      <li>
                        <strong>Cloudflare:</strong>{' '}
                        <TranslatedText textKey="privacyPolicy.thirdPartyServices.cloudflare" />
                      </li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.yourRights.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.yourRights.paragraph1" />
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900">
                      <li><TranslatedText textKey="privacyPolicy.yourRights.item1" /></li>
                      <li><TranslatedText textKey="privacyPolicy.yourRights.item2" /></li>
                      <li><TranslatedText textKey="privacyPolicy.yourRights.item3" /></li>
                      <li><TranslatedText textKey="privacyPolicy.yourRights.item4" /></li>
                      <li><TranslatedText textKey="privacyPolicy.yourRights.item5" /></li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.changes.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.changes.paragraph1" />
                    </p>
                    <p className="text-gray-900">
                      <TranslatedText textKey="privacyPolicy.changes.paragraph2" />
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="privacyPolicy.contact.title" />
                    </h2>
                    <p className="text-gray-900 mb-4">
                      <TranslatedText textKey="privacyPolicy.contact.paragraph1" />
                    </p>
                    <ul className="list-none space-y-2 text-gray-900">
                      <li>
                        <strong>Email:</strong> privacy@bilimcert.kz
                      </li>
                      <li>
                        <strong><TranslatedText textKey="privacyPolicy.contact.address" />:</strong>{' '}
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
