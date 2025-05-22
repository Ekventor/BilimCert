import React, { useState, useEffect } from 'react';
import { FullWidthHeader } from '../../components/layout/FullWidthHeader';
import { Footer } from '../../components/footer';
import { Breadcrumb } from '../../components/breadcrumb';
import { TranslatedText } from '../../components/multilingual/TranslatedText/TranslatedText';
import { useLanguage } from '../../hooks/useLanguage';
import { Link, usePage } from '@inertiajs/react';
import { ChatButton } from '../../components/chat-button';
import { MobileMenuProvider } from '../../contexts/MobileMenuContext';
import { MobileMenu } from '../../components/mobile-menu';

interface NewsArticleProps {
  slug: string;
}

export default function NewsArticlePage({ slug }: NewsArticleProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  // Mock data - in a real app, this would come from an API
  const mockArticles = [
    {
      id: 1,
      title: "news.item1.title",
      slug: "international-education-conference-2023",
      excerpt: "news.item1.excerpt",
      content: "news.item1.content",
      date: "2023-11-15",
      image: "/images/news/news1.jpg",
      category: "events",
      tags: ["conference", "education", "international"],
      author: "John Smith",
      authorTitle: "Education Specialist",
      authorImage: "/images/team/person1.jpg"
    },
    {
      id: 2,
      title: "news.item2.title",
      slug: "new-partnership-with-european-universities",
      excerpt: "news.item2.excerpt",
      content: "news.item2.content",
      date: "2023-10-28",
      image: "/images/news/news2.jpg",
      category: "partnerships",
      tags: ["partnership", "europe", "universities"],
      author: "Maria Johnson",
      authorTitle: "International Relations Manager",
      authorImage: "/images/team/person2.jpg"
    },
    {
      id: 3,
      title: "news.item3.title",
      slug: "quality-assurance-workshop-for-universities",
      excerpt: "news.item3.excerpt",
      content: "news.item3.content",
      date: "2023-10-10",
      image: "/images/news/news3.jpg",
      category: "workshops",
      tags: ["quality", "workshop", "universities"],
      author: "Alex Chen",
      authorTitle: "Quality Assurance Director",
      authorImage: "/images/team/person3.jpg"
    }
  ];

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Share article function
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: t(article.title),
        text: t(article.excerpt),
        url: window.location.href
      })
        .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(error => console.log('Error copying link:', error));
    }
  };

  // Fetch article data
  useEffect(() => {
    // Simulate API call
    setIsLoading(true);

    setTimeout(() => {
      const foundArticle = mockArticles.find(article => article.slug === slug);

      if (foundArticle) {
        setArticle(foundArticle);

        // Get related articles (same category or tags)
        const related = mockArticles
          .filter(item =>
            item.id !== foundArticle.id &&
            (item.category === foundArticle.category ||
              item.tags.some((tag: string) => foundArticle.tags.includes(tag)))
          )
          .slice(0, 2);

        setRelatedArticles(related);
      }

      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl flex h-16 items-center">
            <MainNav />
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-64 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl flex h-16 items-center">
            <MainNav />
          </div>
        </header>
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl py-16 text-center">
            <h1 className="text-3xl font-bold text-[#003366] mb-4">
              <TranslatedText textKey="news.articleNotFound" />
            </h1>
            <p className="text-gray-600 mb-8">
              <TranslatedText textKey="news.articleNotFoundDescription" />
            </p>
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#003366] hover:bg-[#002244] transition-colors"
            >
              <TranslatedText textKey="news.backToNews" />
            </Link>
          </div>
        </main>
        <Footer />
        <ChatButton />
      </div>
    );
  }

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
              { title: "News", href: "/news", translationKey: "header.news" },
              { title: t(article.title), href: `/news/${article.slug}` }
            ]} />

            <article className="py-8">
              <div className="max-w-3xl mx-auto">
                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-800 mr-3">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                    <TranslatedText textKey={article.title} />
                  </h1>

                  <p className="text-xl text-gray-700 mb-6">
                    <TranslatedText textKey={article.excerpt} />
                  </p>

                  <div className="flex items-center">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="h-10 w-10 rounded-full mr-3 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/40?text=A';
                      }}
                    />
                    <div>
                      <div className="font-medium text-gray-900">{article.author}</div>
                      <div className="text-sm text-gray-500">{article.authorTitle}</div>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={t(article.title)}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/1200x600?text=BilimCert+News';
                    }}
                  />
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-900 mb-8">
                  <TranslatedText textKey={article.content} />
                </div>

                {/* Tags and Share */}
                <div className="flex flex-wrap items-center justify-between py-4 border-t border-b border-gray-200 mb-8">
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    {article.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/news?tag=${tag}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded-full text-gray-700 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>

                  <button
                    onClick={shareArticle}
                    className="inline-flex items-center text-[#003366] hover:text-[#002244]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <TranslatedText textKey="news.shareArticle" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-[#003366] mb-6">
                    <TranslatedText textKey="news.relatedArticles" />
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((item) => (
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
                          <h3 className="text-xl font-semibold text-[#003366] mb-2">
                            <TranslatedText textKey={item.title} />
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            <TranslatedText textKey={item.excerpt} />
                          </p>
                          <Link
                            href={`/news/${item.slug}`}
                            className="text-[#FF6600] hover:text-[#FF8800] font-medium inline-flex items-center"
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
                </div>
              )}
            </article>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </MobileMenuProvider>
  );
}
