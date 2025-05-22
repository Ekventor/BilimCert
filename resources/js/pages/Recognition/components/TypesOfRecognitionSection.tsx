import React from 'react';
import { TranslatedText } from '../../../components/multilingual/TranslatedText/TranslatedText';

export function TypesOfRecognitionSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#003366]">
        <TranslatedText textKey="recognition.types" />
      </h2>
      
      <p className="text-gray-600">
        <TranslatedText textKey="recognition.types.description" />
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 className="ml-4 text-lg font-medium text-[#003366]">
              <TranslatedText textKey="recognition.types.academic.title" />
            </h3>
          </div>
          <p className="text-gray-600">
            <TranslatedText textKey="recognition.types.academic.description" />
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
            <li><TranslatedText textKey="recognition.types.academic.item1" /></li>
            <li><TranslatedText textKey="recognition.types.academic.item2" /></li>
            <li><TranslatedText textKey="recognition.types.academic.item3" /></li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#003366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="ml-4 text-lg font-medium text-[#003366]">
              <TranslatedText textKey="recognition.types.professional.title" />
            </h3>
          </div>
          <p className="text-gray-600">
            <TranslatedText textKey="recognition.types.professional.description" />
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
            <li><TranslatedText textKey="recognition.types.professional.item1" /></li>
            <li><TranslatedText textKey="recognition.types.professional.item2" /></li>
            <li><TranslatedText textKey="recognition.types.professional.item3" /></li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#003366]/5 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-medium text-[#003366] mb-4">
          <TranslatedText textKey="recognition.types.comparison.title" />
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <TranslatedText textKey="recognition.types.comparison.aspect" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <TranslatedText textKey="recognition.types.academic.title" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <TranslatedText textKey="recognition.types.professional.title" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <TranslatedText textKey="recognition.types.comparison.purpose" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TranslatedText textKey="recognition.types.comparison.academic.purpose" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TranslatedText textKey="recognition.types.comparison.professional.purpose" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <TranslatedText textKey="recognition.types.comparison.requirements" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TranslatedText textKey="recognition.types.comparison.academic.requirements" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TranslatedText textKey="recognition.types.comparison.professional.requirements" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <TranslatedText textKey="recognition.types.comparison.process" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TranslatedText textKey="recognition.types.comparison.academic.process" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TranslatedText textKey="recognition.types.comparison.professional.process" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
