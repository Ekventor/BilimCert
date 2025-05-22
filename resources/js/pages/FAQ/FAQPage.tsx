import React, { useState, useEffect } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

// FAQ Category Tab
const CategoryTab: React.FC<{
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ id, title, isActive, onClick }) => {
  return (
    <button
      id={`tab-${id}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      className={`px-4 py-2 rounded-md text-sm font-medium min-h-[48px] md:min-h-[44px] transition-colors ${isActive
        ? 'bg-[#003366] text-white'
        : 'bg-white text-[#003366] hover:bg-gray-100'
        }`}
      onClick={onClick}
    >
      <TranslatedText textKey={title} />
    </button>
  );
};

// FAQ Item Component
const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left min-h-[48px] md:min-h-[44px]"
        onClick={onClick}
        aria-expanded={isOpen}
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
        className={`mt-2 text-gray-800 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <TranslatedText textKey={answer} />
      </div>
    </div>
  );
};

export default function FAQPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<any[]>([]);

  // FAQ Categories
  const categories = [
    { id: 'general', title: 'faq.categories.general' },
    { id: 'application', title: 'faq.categories.application' },
    { id: 'accreditation', title: 'faq.categories.accreditation' },
    { id: 'bologna', title: 'faq.categories.bologna' },
    { id: 'documents', title: 'faq.categories.documents' },
    { id: 'technical', title: 'faq.categories.technical' }
  ];

  // FAQ Data
  const faqData = {
    general: [
      {
        question: 'faq.general.question1',
        answer: 'faq.general.answer1'
      },
      {
        question: 'faq.general.question2',
        answer: 'faq.general.answer2'
      },
      {
        question: 'faq.general.question3',
        answer: 'faq.general.answer3'
      },
      {
        question: 'faq.general.question4',
        answer: 'faq.general.answer4'
      }
    ],
    application: [
      {
        question: 'faq.application.question1',
        answer: 'faq.application.answer1'
      },
      {
        question: 'faq.application.question2',
        answer: 'faq.application.answer2'
      },
      {
        question: 'faq.application.question3',
        answer: 'faq.application.answer3'
      },
      {
        question: 'faq.application.question4',
        answer: 'faq.application.answer4'
      }
    ],
    accreditation: [
      {
        question: 'faq.accreditation.question1',
        answer: 'faq.accreditation.answer1'
      },
      {
        question: 'faq.accreditation.question2',
        answer: 'faq.accreditation.answer2'
      },
      {
        question: 'faq.accreditation.question3',
        answer: 'faq.accreditation.answer3'
      }
    ],
    bologna: [
      {
        question: 'faq.bologna.question1',
        answer: 'faq.bologna.answer1'
      },
      {
        question: 'faq.bologna.question2',
        answer: 'faq.bologna.answer2'
      },
      {
        question: 'faq.bologna.question3',
        answer: 'faq.bologna.answer3'
      }
    ],
    documents: [
      {
        question: 'faq.documents.question1',
        answer: 'faq.documents.answer1'
      },
      {
        question: 'faq.documents.question2',
        answer: 'faq.documents.answer2'
      },
      {
        question: 'faq.documents.question3',
        answer: 'faq.documents.answer3'
      }
    ],
    technical: [
      {
        question: 'faq.technical.question1',
        answer: 'faq.technical.answer1'
      },
      {
        question: 'faq.technical.question2',
        answer: 'faq.technical.answer2'
      },
      {
        question: 'faq.technical.question3',
        answer: 'faq.technical.answer3'
      }
    ]
  };

  // Filter FAQs based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFAQs(faqData[activeCategory as keyof typeof faqData]);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();

    // Search across all categories
    const results = Object.values(faqData).flat().filter(faq =>
      t(faq.question).toLowerCase().includes(lowerCaseQuery) ||
      t(faq.answer).toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredFAQs(results);
  }, [searchQuery, activeCategory, t]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenFAQ(0);
    setSearchQuery('');
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setOpenFAQ(null);
  };

  // Handle form submission for new question
  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the question to the server
    alert(t('faq.questionSubmitted'));
    // Reset form
    (e.target as HTMLFormElement).reset();
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
              { title: "FAQ", href: "/faq", translationKey: "header.faq" }
            ]} />

            <div className="py-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-6">
                <TranslatedText textKey="faq.title" />
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-800">
                  <TranslatedText textKey="faq.description" />
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder={t('faq.searchPlaceholder')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] pl-10 pr-4 text-gray-800"
                    aria-label={t('faq.searchLabel')}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  {/* Category Tabs */}
                  {searchQuery.trim() === '' && (
                    <div className="mb-6 flex flex-wrap gap-2" role="tablist">
                      {categories.map((category) => (
                        <CategoryTab
                          key={category.id}
                          id={category.id}
                          title={category.title}
                          isActive={activeCategory === category.id}
                          onClick={() => handleCategoryChange(category.id)}
                        />
                      ))}
                    </div>
                  )}

                  {/* FAQ Items */}
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    {searchQuery.trim() !== '' && (
                      <h2 className="text-xl font-semibold text-[#003366] mb-4">
                        <TranslatedText textKey="faq.searchResults" />: "{searchQuery}"
                      </h2>
                    )}

                    {filteredFAQs.length > 0 ? (
                      <div id={`panel-${activeCategory}`} role="tabpanel" aria-labelledby={`tab-${activeCategory}`}>
                        {filteredFAQs.map((faq, index) => (
                          <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFAQ === index}
                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          <TranslatedText textKey="faq.noResults" />
                        </h3>
                        <p className="text-gray-600">
                          <TranslatedText textKey="faq.tryDifferentSearch" />
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ask a Question Form */}
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h2 className="text-xl font-semibold text-[#003366] mb-4">
                      <TranslatedText textKey="faq.askQuestion.title" />
                    </h2>
                    <p className="text-gray-800 mb-4">
                      <TranslatedText textKey="faq.askQuestion.description" />
                    </p>

                    <form onSubmit={handleSubmitQuestion} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                          <TranslatedText textKey="faq.askQuestion.name" /> <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-800"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                          <TranslatedText textKey="faq.askQuestion.email" /> <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-800"
                        />
                      </div>

                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-800 mb-1">
                          <TranslatedText textKey="faq.askQuestion.category" />
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 min-h-[48px] md:min-h-[44px] px-4 text-gray-800"
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {t(category.title)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="question" className="block text-sm font-medium text-gray-800 mb-1">
                          <TranslatedText textKey="faq.askQuestion.question" /> <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          id="question"
                          name="question"
                          rows={4}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50 px-4 py-3 text-gray-800"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center rounded-md bg-[#003366] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 min-h-[48px] md:min-h-[44px]"
                      >
                        <TranslatedText textKey="faq.askQuestion.submit" />
                      </button>
                    </form>
                  </div>
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
