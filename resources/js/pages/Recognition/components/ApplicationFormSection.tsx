import React, { useState } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../../hooks/useLanguage';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  documentType: string;
  country: string;
  institution: string;
  graduationYear: string;
  additionalInfo: string;
  documents: File[];
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  documentType?: string;
  country?: string;
  institution?: string;
  graduationYear?: string;
  documents?: string;
}

export function ApplicationFormSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    documentType: '',
    country: '',
    institution: '',
    graduationYear: '',
    additionalInfo: '',
    documents: [],
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Document types
  const documentTypes = [
    { value: 'diploma', label: t('applicationForm.documentTypes.diploma') },
    { value: 'certificate', label: t('applicationForm.documentTypes.certificate') },
    { value: 'transcript', label: t('applicationForm.documentTypes.transcript') },
  ];
  
  // Sample countries list
  const countries = [
    { value: 'kz', label: 'Kazakhstan' },
    { value: 'ru', label: 'Russia' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'cn', label: 'China' },
    { value: 'jp', label: 'Japan' },
    // Add more countries as needed
  ];
  
  // Generate years for dropdown (from current year back to 1950)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1949 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  }));
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFormData((prev) => ({ ...prev, documents: [...prev.documents, ...fileList] }));
      
      // Clear error when user uploads files
      if (errors.documents) {
        setErrors((prev) => ({ ...prev, documents: undefined }));
      }
    }
  };
  
  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = t('validation.required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('validation.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.email');
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('validation.required');
    } else if (!/^\+?[0-9\s-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = t('validation.phone');
    }
    
    if (!formData.documentType) {
      newErrors.documentType = t('validation.required');
    }
    
    if (!formData.country) {
      newErrors.country = t('validation.required');
    }
    
    if (!formData.institution.trim()) {
      newErrors.institution = t('validation.required');
    }
    
    if (!formData.graduationYear) {
      newErrors.graduationYear = t('validation.required');
    }
    
    if (formData.documents.length === 0) {
      newErrors.documents = t('validation.documents');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real application, you would send the form data to your backend
      // const formDataToSend = new FormData();
      // Object.entries(formData).forEach(([key, value]) => {
      //   if (key === 'documents') {
      //     formData.documents.forEach((file) => {
      //       formDataToSend.append('documents[]', file);
      //     });
      //   } else {
      //     formDataToSend.append(key, value);
      //   }
      // });
      // const response = await fetch('/api/recognition/apply', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to submit application');
      // }
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        documentType: '',
        country: '',
        institution: '',
        graduationYear: '',
        additionalInfo: '',
        documents: [],
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#003366]">
        <TranslatedText textKey="applicationForm.title" />
      </h2>
      
      <p className="text-gray-600">
        <TranslatedText textKey="recognition.application.description" />
      </p>
      
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><TranslatedText textKey="applicationForm.successMessage" /></span>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span><TranslatedText textKey="applicationForm.errorMessage" /></span>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.fullName" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.fullName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.email" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.phone" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          
          {/* Document Type */}
          <div>
            <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.documentType" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.documentType ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            >
              <option value="">-- Select Document Type --</option>
              {documentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.documentType && (
              <p className="mt-1 text-sm text-red-600">{errors.documentType}</p>
            )}
          </div>
          
          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.country" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.country ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            >
              <option value="">-- Select Country --</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country}</p>
            )}
          </div>
          
          {/* Institution */}
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.institution" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.institution ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.institution && (
              <p className="mt-1 text-sm text-red-600">{errors.institution}</p>
            )}
          </div>
          
          {/* Graduation Year */}
          <div>
            <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
              <TranslatedText textKey="applicationForm.graduationYear" />
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="graduationYear"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleInputChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                errors.graduationYear ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            >
              <option value="">-- Select Year --</option>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
            {errors.graduationYear && (
              <p className="mt-1 text-sm text-red-600">{errors.graduationYear}</p>
            )}
          </div>
        </div>
        
        {/* Additional Information */}
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
            <TranslatedText textKey="applicationForm.additionalInfo" />
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <TranslatedText textKey="applicationForm.uploadDocuments" />
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span>Upload files</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PDF, JPG, PNG up to 10MB
              </p>
            </div>
          </div>
          {errors.documents && (
            <p className="mt-1 text-sm text-red-600">{errors.documents}</p>
          )}
          
          {/* File Preview */}
          {formData.documents.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
              <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                {formData.documents.map((file, index) => (
                  <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="font-medium text-red-600 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003366] hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <TranslatedText textKey="common.processing" />
              </>
            ) : (
              <TranslatedText textKey="applicationForm.submit" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
