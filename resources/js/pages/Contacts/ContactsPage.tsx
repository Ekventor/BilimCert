import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';
import { ChatButton } from '../../components/chat-button';

export default function ContactsPage() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to the server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }, { title: "Contacts", href: "/contacts", translationKey: "header.contacts" }]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="contacts.title" />
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="prose max-w-none">
                    <p className="text-lg mb-4 text-gray-900">
                      <TranslatedText textKey="contacts.description" />
                    </p>

                    <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                      <TranslatedText textKey="contacts.address.title" />
                    </h2>
                    <p className="text-gray-900">
                      <TranslatedText textKey="footer.address.line1" /><br />
                      <TranslatedText textKey="footer.address.line2" /><br />
                      <TranslatedText textKey="footer.address.line3" />
                    </p>

                    <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                      <TranslatedText textKey="contacts.phone.title" />
                    </h2>
                    <p className="text-gray-900">+7 (777) 123-45-67</p>
                    <p className="text-gray-900">+7 (727) 123-45-67</p>

                    <h2 className="text-2xl font-semibold text-[#003366] mt-8 mb-4">
                      <TranslatedText textKey="contacts.email.title" />
                    </h2>
                    <p className="text-gray-900">info@bilimcert.kz</p>
                    <p className="text-gray-900">support@bilimcert.kz</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-2xl font-semibold text-[#003366] mb-4">
                    <TranslatedText textKey="contacts.form.title" />
                  </h2>

                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
                      <h3 className="text-lg font-medium mb-2">{t('contacts.form.thankYou')}</h3>
                      <p>{t('contacts.form.successMessage')}</p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-h-[44px]"
                      >
                        {t('contacts.form.sendAnother')}
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                          <TranslatedText textKey="contacts.form.name" /> <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-900"
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                          <TranslatedText textKey="contacts.form.email" /> <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-900"
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1">
                          <TranslatedText textKey="contacts.form.subject" /> <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-900"
                          aria-required="true"
                        >
                          <option value="">
                            {t('contacts.form.selectSubject')}
                          </option>
                          <option value="general">
                            {t('contacts.form.subjects.general')}
                          </option>
                          <option value="accreditation">
                            {t('contacts.form.subjects.accreditation')}
                          </option>
                          <option value="bologna">
                            {t('contacts.form.subjects.bologna')}
                          </option>
                          <option value="technical">
                            {t('contacts.form.subjects.technical')}
                          </option>
                          <option value="other">
                            {t('contacts.form.subjects.other')}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                          <TranslatedText textKey="contacts.form.message" /> <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 px-4 py-3 text-gray-900"
                          aria-required="true"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center rounded-md bg-[#003366] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 min-h-[48px] md:min-h-[44px]"
                      >
                        <TranslatedText textKey="contacts.form.submit" />
                      </button>
                    </form>
                  )}
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
