import React from 'react';
import { Link } from '@inertiajs/react';
import { TranslatedText } from './multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../hooks/useLanguage';

export function NewsSection() {
  const { t } = useLanguage();

  // Mock news data - using the same structure as in NewsPage
  const newsItems = [
    {
      id: 1,
      title: "news.item1.title",
      excerpt: "news.item1.excerpt",
      date: "2023-11-15",
      image: "/images/news/news1.jpg",
      slug: "international-education-conference-2023"
    },
    {
      id: 2,
      title: "news.item2.title",
      excerpt: "news.item2.excerpt",
      date: "2023-10-28",
      image: "/images/news/news2.jpg",
      slug: "new-partnership-with-european-universities"
    },
    {
      id: 3,
      title: "news.item3.title",
      excerpt: "news.item3.excerpt",
      date: "2023-10-10",
      image: "/images/news/news3.jpg",
      slug: "quality-assurance-workshop-for-universities"
    }
  ];

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 mlg:px-8 max-w-screen-xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-flex items-center rounded-full border border-[#003366]/20 bg-white px-3 py-1 text-sm text-[#003366] shadow-sm">
            <span className="font-medium">
              <TranslatedText textKey="news.announcements" />
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter text-[#003366] sm:text-4xl">
            <TranslatedText textKey="home.latestNews" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={`News: ${item.title}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x200?text=BilimCert+News';
                  }}
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{formatDate(item.date)}</div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">
                  <TranslatedText textKey={item.title} />
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  <TranslatedText textKey={item.excerpt} />
                </p>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center min-h-[44px] flex items-center"
                >
                  <TranslatedText textKey="common.readMore" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-md border border-[#003366] bg-white px-6 py-3 text-sm font-medium text-[#003366] shadow-sm transition-colors hover:bg-[#003366]/5 min-h-[48px] md:min-h-[44px]"
          >
            <TranslatedText textKey="news.allNews" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
