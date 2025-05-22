import React, { useState } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { Link } from '@inertiajs/react';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';
import { ChatButton } from '../../components/chat-button';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  isArchived?: boolean;
}

export default function NewsPage() {
  const [activeView, setActiveView] = useState<'recent' | 'archive'>('recent');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

  // Mock news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "news.item1.title",
      excerpt: "news.item1.excerpt",
      content: "news.item1.content",
      date: "2023-11-15",
      image: "/images/news/news1.jpg",
      slug: "international-education-conference-2023",
      category: "events",
      tags: ["conference", "education", "international"],
      author: "John Smith"
    },
    {
      id: 2,
      title: "news.item2.title",
      excerpt: "news.item2.excerpt",
      content: "news.item2.content",
      date: "2023-10-28",
      image: "/images/news/news2.jpg",
      slug: "new-partnership-with-european-universities",
      category: "partnerships",
      tags: ["partnership", "europe", "universities"],
      author: "Maria Johnson"
    },
    {
      id: 3,
      title: "news.item3.title",
      excerpt: "news.item3.excerpt",
      content: "news.item3.content",
      date: "2023-10-10",
      image: "/images/news/news3.jpg",
      slug: "quality-assurance-workshop-for-universities",
      category: "workshops",
      tags: ["quality assurance", "workshop", "universities"],
      author: "Alex Brown"
    },
    {
      id: 4,
      title: "news.item4.title",
      excerpt: "news.item4.excerpt",
      content: "news.item4.content",
      date: "2023-09-22",
      image: "/images/news/news4.jpg",
      slug: "student-exchange-program-launch",
      category: "programs",
      tags: ["student exchange", "program", "international"],
      author: "Sarah Wilson"
    },
    {
      id: 5,
      title: "news.item5.title",
      excerpt: "news.item5.excerpt",
      content: "news.item5.content",
      date: "2023-09-05",
      image: "/images/news/news5.jpg",
      slug: "digital-credentials-initiative",
      category: "initiatives",
      tags: ["digital", "credentials", "technology"],
      author: "David Lee"
    },
    {
      id: 6,
      title: "news.item6.title",
      excerpt: "news.item6.excerpt",
      content: "news.item6.content",
      date: "2023-08-20",
      image: "/images/news/news6.jpg",
      slug: "international-accreditation-standards-update",
      category: "accreditation",
      tags: ["standards", "accreditation", "international"],
      author: "Emily Chen"
    },
    // Archive items
    {
      id: 7,
      title: "news.archive1.title",
      excerpt: "news.archive1.excerpt",
      content: "news.archive1.content",
      date: "2023-05-15",
      image: "/images/news/archive1.jpg",
      slug: "higher-education-forum-2023",
      category: "events",
      tags: ["forum", "higher education", "policy"],
      author: "Robert Johnson",
      isArchived: true
    },
    {
      id: 8,
      title: "news.archive2.title",
      excerpt: "news.archive2.excerpt",
      content: "news.archive2.content",
      date: "2023-04-10",
      image: "/images/news/archive2.jpg",
      slug: "new-quality-assurance-framework",
      category: "accreditation",
      tags: ["quality assurance", "framework", "standards"],
      author: "Lisa Wang",
      isArchived: true
    },
    {
      id: 9,
      title: "news.archive3.title",
      excerpt: "news.archive3.excerpt",
      content: "news.archive3.content",
      date: "2023-03-22",
      image: "/images/news/archive3.jpg",
      slug: "international-student-mobility-report",
      category: "research",
      tags: ["student mobility", "research", "international"],
      author: "Michael Brown",
      isArchived: true
    },
    {
      id: 10,
      title: "news.archive4.title",
      excerpt: "news.archive4.excerpt",
      content: "news.archive4.content",
      date: "2023-02-18",
      image: "/images/news/archive4.jpg",
      slug: "educational-technology-symposium",
      category: "events",
      tags: ["technology", "education", "symposium"],
      author: "Jennifer Lee",
      isArchived: true
    }
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(newsItems.map(item => item.category)))];

  // Get unique years and months for date filter
  const dates = newsItems.map(item => {
    const date = new Date(item.date);
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
  });
  const uniqueDates = ['all', ...Array.from(new Set(dates))];

  // Filter news items
  const filteredNewsItems = newsItems.filter(item => {
    // Filter by search term
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    // Filter by category
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    // Filter by date
    let matchesDate = true;
    if (selectedDate !== 'all') {
      const [year, month] = selectedDate.split('-');
      const itemDate = new Date(item.date);
      matchesDate =
        itemDate.getFullYear().toString() === year &&
        (itemDate.getMonth() + 1).toString() === month;
    }

    // Filter by archive status
    const matchesArchiveStatus =
      (activeView === 'recent' && !item.isArchived) ||
      (activeView === 'archive' && item.isArchived);

    return matchesSearch && matchesCategory && matchesDate && matchesArchiveStatus;
  });

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);
  const paginatedItems = filteredNewsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Format date for filter display
  const formatDateForDisplay = (dateString: string) => {
    if (dateString === 'all') return 'All Dates';

    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  // Share news item
  const shareNewsItem = (item: NewsItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.excerpt,
        url: `${window.location.origin}/news/${item.slug}`
      })
        .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = `${window.location.origin}/news/${item.slug}`;
      navigator.clipboard.writeText(url)
        .then(() => alert('Link copied to clipboard!'))
        .catch(error => console.log('Error copying link:', error));
    }
  };

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <FullWidthHeader />

        {/* Mobile Menu */}
        <MobileMenu />
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-4">
            <Breadcrumb items={[{ title: "Home", href: "/", translationKey: "header.home" }, { title: "News", href: "/news", translationKey: "header.news" }]} />

            <div className="py-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-3xl font-bold text-[#003366]">
                  <TranslatedText textKey="news.title" />
                </h1>

                <div className="flex space-x-4 mt-4 md:mt-0">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium min-h-[48px] md:min-h-[44px] ${activeView === 'recent'
                      ? 'bg-[#003366] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    onClick={() => {
                      setActiveView('recent');
                      setCurrentPage(1);
                    }}
                    aria-pressed={activeView === 'recent'}
                  >
                    <TranslatedText textKey="news.recentNews" />
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium min-h-[48px] md:min-h-[44px] ${activeView === 'archive'
                      ? 'bg-[#003366] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    onClick={() => {
                      setActiveView('archive');
                      setCurrentPage(1);
                    }}
                    aria-pressed={activeView === 'archive'}
                  >
                    <TranslatedText textKey="news.archive" />
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="news.search" />
                    </label>
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder="Search news..."
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm min-h-[48px] md:min-h-[44px]"
                      aria-label="Search news"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="news.filterByCategory" />
                    </label>
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm min-h-[48px] md:min-h-[44px]"
                      aria-label="Filter by category"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      <TranslatedText textKey="news.filterByDate" />
                    </label>
                    <select
                      id="date"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366] sm:text-sm min-h-[48px] md:min-h-[44px]"
                      aria-label="Filter by date"
                    >
                      {uniqueDates.map((date) => (
                        <option key={date} value={date}>
                          {formatDateForDisplay(date)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setSelectedDate('all');
                        setCurrentPage(1);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 min-h-[48px] md:min-h-[44px]"
                      aria-label="Clear all filters"
                    >
                      <TranslatedText textKey="news.clearFilters" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="text-sm text-gray-500 mb-4">
                <TranslatedText textKey="news.showingResults" /> {filteredNewsItems.length}
              </div>

              {/* News Grid */}
              {paginatedItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedItems.map((item) => (
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
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm text-gray-500">{formatDate(item.date)}</div>
                          <span className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-800">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-[#003366] mb-2">
                          <TranslatedText textKey={item.title} />
                        </h2>
                        <p className="text-gray-600 mb-4">
                          <TranslatedText textKey={item.excerpt} />
                        </p>
                        <div className="flex justify-between items-center">
                          <Link
                            href={`/news/${item.slug}`}
                            className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center"
                          >
                            <TranslatedText textKey="common.readMore" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => shareNewsItem(item)}
                            className="text-gray-500 hover:text-[#003366]"
                            aria-label="Share"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    <TranslatedText textKey="news.noResults.title" />
                  </h3>
                  <p className="text-gray-500 mb-4">
                    <TranslatedText textKey="news.noResults.description" />
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedDate('all');
                      setCurrentPage(1);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003366] hover:bg-[#002855]"
                  >
                    <TranslatedText textKey="news.clearFilters" />
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <nav className="inline-flex rounded-md shadow" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium min-h-[48px] md:min-h-[44px] ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      aria-label="Previous page"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium min-h-[48px] md:min-h-[44px] ${currentPage === page ? 'text-[#003366] border-[#003366]' : 'text-gray-500 hover:bg-gray-50'
                          }`}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium min-h-[48px] md:min-h-[44px] ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      aria-label="Next page"
                    >
                      Next
                    </button>
                  </nav>
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
