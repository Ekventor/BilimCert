import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

export default function PartnershipApplicationPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Organization Information
    organizationType: '',
    organizationName: '',
    website: '',
    country: '',
    city: '',
    address: '',

    // Contact Information
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: '',

    // Partnership Details
    partnershipType: '',
    partnershipGoals: '',
    partnershipBenefits: '',
    existingPartnerships: '',

    // Additional Information
    additionalInfo: '',
    agreeToTerms: false
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to the server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  // Go to next step
  const goToNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  // Go to previous step
  const goToPrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Check if current step is valid
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.organizationType &&
          formData.organizationName &&
          formData.country &&
          formData.city
        );
      case 2:
        return (
          formData.contactName &&
          formData.contactPosition &&
          formData.contactEmail &&
          formData.contactPhone
        );
      case 3:
        return (
          formData.partnershipType &&
          formData.partnershipGoals &&
          formData.agreeToTerms
        );
      default:
        return false;
    }
  };

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
              { title: "Partnership", href: "/partnership", translationKey: "header.partnership" },
              { title: "Application", href: "/partnership/application", translationKey: "partnership.application.title" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="partnership.application.title" />
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-900">
                  <TranslatedText textKey="partnership.application.description" />
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-[#003366] mb-4">
                    <TranslatedText textKey="partnership.application.success.title" />
                  </h2>

                  <p className="text-gray-700 mb-6">
                    <TranslatedText textKey="partnership.application.success.message" />
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#003366] hover:bg-[#002244]"
                    >
                      <TranslatedText textKey="common.backToHome" />
                    </Link>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setCurrentStep(1);
                        setFormData({
                          organizationType: '',
                          organizationName: '',
                          website: '',
                          country: '',
                          city: '',
                          address: '',
                          contactName: '',
                          contactPosition: '',
                          contactEmail: '',
                          contactPhone: '',
                          partnershipType: '',
                          partnershipGoals: '',
                          partnershipBenefits: '',
                          existingPartnerships: '',
                          additionalInfo: '',
                          agreeToTerms: false
                        });
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <TranslatedText textKey="partnership.application.submitAnother" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  {/* Progress Steps */}
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-[#003366] text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                          1
                        </div>
                        <div className="ml-2 text-sm font-medium text-gray-900">
                          <TranslatedText textKey="partnership.application.steps.organization" />
                        </div>
                      </div>

                      <div className="hidden sm:block w-16 h-0.5 bg-gray-200"></div>

                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-[#003366] text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                          2
                        </div>
                        <div className="ml-2 text-sm font-medium text-gray-900">
                          <TranslatedText textKey="partnership.application.steps.contact" />
                        </div>
                      </div>

                      <div className="hidden sm:block w-16 h-0.5 bg-gray-200"></div>

                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-[#003366] text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                          3
                        </div>
                        <div className="ml-2 text-sm font-medium text-gray-900">
                          <TranslatedText textKey="partnership.application.steps.details" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6">
                    {/* Step 1: Organization Information */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-xl font-semibold text-[#003366] mb-4">
                          <TranslatedText textKey="partnership.application.organization.title" />
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="organizationType" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.organization.type" /> <span className="text-red-600">*</span>
                            </label>
                            <select
                              id="organizationType"
                              name="organizationType"
                              value={formData.organizationType}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            >
                              <option value="">{t('partnership.application.organization.selectType')}</option>
                              <option value="university">{t('partnership.application.organization.types.university')}</option>
                              <option value="government">{t('partnership.application.organization.types.government')}</option>
                              <option value="ngo">{t('partnership.application.organization.types.ngo')}</option>
                              <option value="company">{t('partnership.application.organization.types.company')}</option>
                              <option value="other">{t('partnership.application.organization.types.other')}</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="organizationName" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.organization.name" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              id="organizationName"
                              name="organizationName"
                              value={formData.organizationName}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.organization.website" />
                            </label>
                            <input
                              type="url"
                              id="website"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.organization.country" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.organization.city" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.organization.address" />
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Contact Information */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-xl font-semibold text-[#003366] mb-4">
                          <TranslatedText textKey="partnership.application.contact.title" />
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="contactName" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.contact.name" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              id="contactName"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.contact.position" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              id="contactPosition"
                              name="contactPosition"
                              value={formData.contactPosition}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.contact.email" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="email"
                              id="contactEmail"
                              name="contactEmail"
                              value={formData.contactEmail}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>

                          <div>
                            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.contact.phone" /> <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="tel"
                              id="contactPhone"
                              name="contactPhone"
                              value={formData.contactPhone}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Partnership Details */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-xl font-semibold text-[#003366] mb-4">
                          <TranslatedText textKey="partnership.application.details.title" />
                        </h2>

                        <div className="space-y-6 mb-6">
                          <div>
                            <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.details.type" /> <span className="text-red-600">*</span>
                            </label>
                            <select
                              id="partnershipType"
                              name="partnershipType"
                              value={formData.partnershipType}
                              onChange={handleInputChange}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[44px]"
                            >
                              <option value="">{t('partnership.application.details.selectType')}</option>
                              <option value="academic">{t('partnership.application.details.types.academic')}</option>
                              <option value="research">{t('partnership.application.details.types.research')}</option>
                              <option value="funding">{t('partnership.application.details.types.funding')}</option>
                              <option value="exchange">{t('partnership.application.details.types.exchange')}</option>
                              <option value="other">{t('partnership.application.details.types.other')}</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="partnershipGoals" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.details.goals" /> <span className="text-red-600">*</span>
                            </label>
                            <textarea
                              id="partnershipGoals"
                              name="partnershipGoals"
                              value={formData.partnershipGoals}
                              onChange={handleInputChange}
                              rows={4}
                              required
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50"
                            ></textarea>
                          </div>

                          <div>
                            <label htmlFor="partnershipBenefits" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.details.benefits" />
                            </label>
                            <textarea
                              id="partnershipBenefits"
                              name="partnershipBenefits"
                              value={formData.partnershipBenefits}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50"
                            ></textarea>
                          </div>

                          <div>
                            <label htmlFor="existingPartnerships" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.details.existing" />
                            </label>
                            <textarea
                              id="existingPartnerships"
                              name="existingPartnerships"
                              value={formData.existingPartnerships}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50"
                            ></textarea>
                          </div>

                          <div>
                            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-900 mb-1">
                              <TranslatedText textKey="partnership.application.details.additional" />
                            </label>
                            <textarea
                              id="additionalInfo"
                              name="additionalInfo"
                              value={formData.additionalInfo}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50"
                            ></textarea>
                          </div>

                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="agreeToTerms"
                                name="agreeToTerms"
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                                required
                                className="h-4 w-4 text-[#003366] border-gray-300 rounded focus:ring-[#003366]"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="agreeToTerms" className="font-medium text-gray-900">
                                <TranslatedText textKey="partnership.application.details.agree" /> <span className="text-red-600">*</span>
                              </label>
                              <p className="text-gray-500">
                                <TranslatedText textKey="partnership.application.details.agreeText" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={goToPrevStep}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                          </svg>
                          <TranslatedText textKey="common.previous" />
                        </button>
                      ) : (
                        <div></div>
                      )}

                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={goToNextStep}
                          disabled={!isCurrentStepValid()}
                          className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isCurrentStepValid() ? 'bg-[#003366] hover:bg-[#002244]' : 'bg-gray-300 cursor-not-allowed'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366]`}
                        >
                          <TranslatedText textKey="common.next" />
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!isCurrentStepValid()}
                          className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${isCurrentStepValid() ? 'bg-[#003366] hover:bg-[#002244]' : 'bg-gray-300 cursor-not-allowed'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366]`}
                        >
                          <TranslatedText textKey="partnership.application.submit" />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
