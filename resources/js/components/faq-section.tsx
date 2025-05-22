import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-[#003366]">
          <TranslatedText textKey={question} />
        </h3>
        <svg
          className={`h-5 w-5 text-[#003366] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <TranslatedText textKey={answer} />
      </div>
    </div>
  );
};

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "faq.question1",
      answer: "faq.answer1",
    },
    {
      question: "faq.question2",
      answer: "faq.answer2",
    },
    {
      question: "faq.question3",
      answer: "faq.answer3",
    },
    {
      question: "faq.question4",
      answer: "faq.answer4",
    },
    {
      question: "faq.question5",
      answer: "faq.answer5",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 mlg:px-8 max-w-screen-xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-flex items-center rounded-full border border-[#003366]/20 bg-white px-3 py-1 text-sm text-[#003366] shadow-sm">
            <span className="font-medium">
              <TranslatedText textKey="faq.tagline" />
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter text-[#003366] sm:text-4xl">
            <TranslatedText textKey="home.popularQuestions" />
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-md border border-[#003366] bg-white px-6 py-3 min-h-[48px] md:min-h-[44px] text-sm font-medium text-[#003366] shadow-sm transition-colors hover:bg-[#003366]/5"
          >
            <TranslatedText textKey="faq.viewAll" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
