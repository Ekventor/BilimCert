import React, { useState, useEffect } from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../../hooks/useLanguage';

interface CalculatorFormData {
  country: string;
  documentType: string;
  educationLevel: string;
  urgentProcessing: boolean;
}

interface CalculationResult {
  processingTime: number; // in days
  baseCost: number;
  additionalCosts: { name: string; amount: number }[];
  totalCost: number;
  currency: string;
}

export function CalculatorSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<CalculatorFormData>({
    country: '',
    documentType: '',
    educationLevel: '',
    urgentProcessing: false,
  });
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Sample data for dropdowns
  const countries = [
    { value: 'eu', label: t('calculator.countries.eu') },
    { value: 'cis', label: t('calculator.countries.cis') },
    { value: 'asia', label: t('calculator.countries.asia') },
    { value: 'america', label: t('calculator.countries.america') },
    { value: 'other', label: t('calculator.countries.other') },
  ];
  
  const documentTypes = [
    { value: 'diploma', label: t('calculator.documentTypes.diploma') },
    { value: 'certificate', label: t('calculator.documentTypes.certificate') },
    { value: 'transcript', label: t('calculator.documentTypes.transcript') },
  ];
  
  const educationLevels = [
    { value: 'secondary', label: t('calculator.educationLevels.secondary') },
    { value: 'vocational', label: t('calculator.educationLevels.vocational') },
    { value: 'bachelor', label: t('calculator.educationLevels.bachelor') },
    { value: 'master', label: t('calculator.educationLevels.master') },
    { value: 'phd', label: t('calculator.educationLevels.phd') },
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  
  const calculateResult = (): CalculationResult => {
    // Base processing time in days
    let processingTime = 30;
    
    // Base cost in KZT
    let baseCost = 15000;
    
    // Additional costs
    const additionalCosts: { name: string; amount: number }[] = [];
    
    // Adjust based on country
    if (formData.country === 'eu') {
      baseCost += 5000;
    } else if (formData.country === 'cis') {
      baseCost += 2000;
      processingTime -= 5;
    } else if (formData.country === 'asia') {
      baseCost += 3000;
    } else if (formData.country === 'america') {
      baseCost += 7000;
      processingTime += 5;
    } else if (formData.country === 'other') {
      baseCost += 10000;
      processingTime += 10;
    }
    
    // Adjust based on document type
    if (formData.documentType === 'diploma') {
      baseCost += 5000;
    } else if (formData.documentType === 'certificate') {
      baseCost += 3000;
      processingTime -= 5;
    } else if (formData.documentType === 'transcript') {
      baseCost += 2000;
      processingTime -= 10;
    }
    
    // Adjust based on education level
    if (formData.educationLevel === 'secondary') {
      baseCost += 2000;
      processingTime -= 5;
    } else if (formData.educationLevel === 'vocational') {
      baseCost += 3000;
    } else if (formData.educationLevel === 'bachelor') {
      baseCost += 5000;
    } else if (formData.educationLevel === 'master') {
      baseCost += 7000;
      processingTime += 5;
    } else if (formData.educationLevel === 'phd') {
      baseCost += 10000;
      processingTime += 10;
    }
    
    // Urgent processing
    if (formData.urgentProcessing) {
      const urgentFee = baseCost * 0.5;
      additionalCosts.push({
        name: t('calculator.urgentProcessingFee'),
        amount: urgentFee,
      });
      processingTime = Math.max(10, Math.floor(processingTime / 2));
    }
    
    // Translation services (example of additional cost)
    additionalCosts.push({
      name: t('calculator.translationServices'),
      amount: 5000,
    });
    
    // Calculate total cost
    const totalCost = baseCost + additionalCosts.reduce((sum, item) => sum + item.amount, 0);
    
    return {
      processingTime,
      baseCost,
      additionalCosts,
      totalCost,
      currency: 'KZT',
    };
  };
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsCalculating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const calculationResult = calculateResult();
      setResult(calculationResult);
      setIsCalculating(false);
    }, 1000);
  };
  
  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('kk-KZ', { style: 'currency', currency }).format(amount);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#003366]">
        <TranslatedText textKey="calculator.title" />
      </h2>
      
      <p className="text-gray-600">
        <TranslatedText textKey="calculator.description" />
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  <TranslatedText textKey="calculator.countryLabel" />
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">-- Select Country Region --</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Document Type */}
              <div>
                <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">
                  <TranslatedText textKey="calculator.documentTypeLabel" />
                </label>
                <select
                  id="documentType"
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">-- Select Document Type --</option>
                  {documentTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Education Level */}
              <div>
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  <TranslatedText textKey="calculator.educationLevelLabel" />
                </label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">-- Select Education Level --</option>
                  {educationLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Urgent Processing */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="urgentProcessing"
                    name="urgentProcessing"
                    type="checkbox"
                    checked={formData.urgentProcessing}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="urgentProcessing" className="font-medium text-gray-700">
                    <TranslatedText textKey="calculator.urgentProcessingLabel" />
                  </label>
                  <p className="text-gray-500">
                    <TranslatedText textKey="calculator.urgentProcessingDescription" />
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003366] hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <TranslatedText textKey="calculator.calculating" />
                    </>
                  ) : (
                    <TranslatedText textKey="calculator.calculateButton" />
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div>
            {result ? (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-[#003366] mb-4">
                  <TranslatedText textKey="calculator.resultTitle" />
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">
                      <TranslatedText textKey="calculator.processingTime" />
                    </span>
                    <span className="font-medium">
                      {result.processingTime} <TranslatedText textKey="calculator.days" />
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">
                      <TranslatedText textKey="calculator.baseCost" />
                    </span>
                    <span className="font-medium">
                      {formatCurrency(result.baseCost, result.currency)}
                    </span>
                  </div>
                  
                  {result.additionalCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-600">{cost.name}</span>
                      <span className="font-medium">
                        {formatCurrency(cost.amount, result.currency)}
                      </span>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-800 font-medium">
                      <TranslatedText textKey="calculator.totalCost" />
                    </span>
                    <span className="text-lg font-bold text-[#003366]">
                      {formatCurrency(result.totalCost, result.currency)}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>
                    <TranslatedText textKey="calculator.disclaimer" />
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 text-center">
                  <TranslatedText textKey="calculator.noResultYet" />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <TranslatedText textKey="calculator.prototypeWarning" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
