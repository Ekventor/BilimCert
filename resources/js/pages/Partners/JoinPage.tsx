import React, { useState } from 'react';
import { MainNav } from '../../components/main-nav';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';

export default function JoinPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    partnershipType: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.organizationName.trim()) {
      errors.organizationName = t('partners.join.form.errors.organizationRequired');
    }

    if (!formData.contactPerson.trim()) {
      errors.contactPerson = t('partners.join.form.errors.contactPersonRequired');
    }

    if (!formData.email.trim()) {
      errors.email = t('partners.join.form.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('partners.join.form.errors.emailInvalid');
    }

    if (!formData.phone.trim()) {
      errors.phone = t('partners.join.form.errors.phoneRequired');
    }

    if (!formData.organizationType) {
      errors.organizationType = t('partners.join.form.errors.organizationTypeRequired');
    }

    if (!formData.partnershipType) {
      errors.partnershipType = t('partners.join.form.errors.partnershipTypeRequired');
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        organizationName: '',
        contactPerson: '',
        email: '',
        phone: '',
        organizationType: '',
        partnershipType: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        {/* Hero section with background */}
        <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <Breadcrumb
              items={[
                { label: 'home', href: '/' },
                { label: 'partners.title', href: '#' },
                { label: 'partners.joinUs.title', href: '#' }
              ]}
              className="text-white/80 mb-6"
            />

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <TranslatedText textKey="partners.joinUs.title" />
            </h1>

            <div className="w-20 h-1 bg-[#FF6600] mb-6"></div>

            <p className="text-lg md:text-xl max-w-3xl">
              <TranslatedText textKey="partners.join.description" />
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-12">
          {isSubmitted ? (
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-[#FF6600] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#003366] mb-4">
                <TranslatedText textKey="partners.join.form.success.title" />
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                <TranslatedText textKey="partners.join.form.success.message" />
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-[#003366] hover:bg-[#002244] transition-colors duration-200"
              >
                <TranslatedText textKey="common.backToHome" />
              </Link>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#003366] mb-6 flex items-center">
                <span className="w-1 h-8 bg-[#FF6600] mr-3 inline-block"></span>
                <TranslatedText textKey="partners.join.form.title" />
              </h2>

              <p className="text-gray-700 mb-8">
                <TranslatedText textKey="partners.join.form.subtitle" />
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizationName" className="block text-sm font-semibold text-[#003366] mb-2">
                      <TranslatedText textKey="partners.join.form.organizationName" />
                      <span className="text-[#FF6600] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base"
                      required
                    />
                    {formErrors.organizationName && (
                      <p className="mt-1 text-sm text-[#FF6600]">{formErrors.organizationName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-semibold text-[#003366] mb-2">
                      <TranslatedText textKey="partners.join.form.contactPerson" />
                      <span className="text-[#FF6600] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base"
                      required
                    />
                    {formErrors.contactPerson && (
                      <p className="mt-1 text-sm text-[#FF6600]">{formErrors.contactPerson}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#003366] mb-2">
                      <TranslatedText textKey="partners.join.form.email" />
                      <span className="text-[#FF6600] ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base"
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-[#FF6600]">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#003366] mb-2">
                      <TranslatedText textKey="partners.join.form.phone" />
                      <span className="text-[#FF6600] ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base"
                      required
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-[#FF6600]">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-semibold text-[#003366] mb-2">
                      <TranslatedText textKey="partners.join.form.organizationType" />
                      <span className="text-[#FF6600] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="organizationType"
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base appearance-none"
                        required
                      >
                        <option value="" className="text-gray-500">
                          <TranslatedText textKey="partners.join.form.selectOption" />
                        </option>
                        <option value="university" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.organizationTypes.university" />
                        </option>
                        <option value="company" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.organizationTypes.company" />
                        </option>
                        <option value="ngo" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.organizationTypes.ngo" />
                        </option>
                        <option value="government" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.organizationTypes.government" />
                        </option>
                        <option value="other" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.organizationTypes.other" />
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      {formErrors.organizationType && (
                        <p className="mt-1 text-sm text-[#FF6600]">{formErrors.organizationType}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-semibold text-[#003366] mb-2">
                      <TranslatedText textKey="partners.join.form.partnershipType" />
                      <span className="text-[#FF6600] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base appearance-none"
                        required
                      >
                        <option value="" className="text-gray-500">
                          <TranslatedText textKey="partners.join.form.selectOption" />
                        </option>
                        <option value="academic" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.partnershipTypes.academic" />
                        </option>
                        <option value="research" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.partnershipTypes.research" />
                        </option>
                        <option value="industry" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.partnershipTypes.industry" />
                        </option>
                        <option value="funding" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.partnershipTypes.funding" />
                        </option>
                        <option value="other" className="text-gray-800">
                          <TranslatedText textKey="partners.join.form.partnershipTypes.other" />
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      {formErrors.partnershipType && (
                        <p className="mt-1 text-sm text-[#FF6600]">{formErrors.partnershipType}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#003366] mb-2">
                    <TranslatedText textKey="partners.join.form.message" />
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] text-gray-800 px-4 py-3 text-base"
                  />
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-[#003366] hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366] transition-colors duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <TranslatedText textKey="common.submitting" />
                      </>
                    ) : (
                      <TranslatedText textKey="common.submit" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
}
