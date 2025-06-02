'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { TranslatedText } from '@/components/ui/TranslatedText'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Search, Filter, Tag } from 'lucide-react'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  image?: string
  category: {
    id: number
    name: string
    slug: string
    color: string
  }
  tags: string[]
  slug: string
  publishedAt: string
  featured: boolean
  viewsCount: number
}

interface NewsCategory {
  id: number
  name: string
  slug: string
  color: string
  count: number
}

// Mock data
const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'Жаңа аккредитация стандарттары енгізілді',
    excerpt: 'Білім беру сапасын арттыру мақсатында жаңа халықаралық стандарттар қабылданды. Бұл стандарттар 2024 жылдан бастап қолданысқа енеді.',
    content: 'Толық мәтін...',
    image: '/images/news/news-1.jpg',
    category: {
      id: 1,
      name: 'Аккредитация',
      slug: 'accreditation',
      color: 'bg-blue-500'
    },
    tags: ['аккредитация', 'стандарттар', 'сапа'],
    slug: 'new-accreditation-standards',
    publishedAt: '2024-01-15T10:00:00Z',
    featured: true,
    viewsCount: 1250
  },
  {
    id: 2,
    title: 'Шетелдік дипломдарды тану процедурасы жеңілдетілді',
    excerpt: 'Цифрлық технологиялар арқылы құжаттарды тану процесі жылдамдатылды және онлайн режимде өтініш беру мүмкіндігі қосылды.',
    content: 'Толық мәтін...',
    image: '/images/news/news-2.jpg',
    category: {
      id: 2,
      name: 'Тану',
      slug: 'recognition',
      color: 'bg-green-500'
    },
    tags: ['тану', 'цифрландыру', 'онлайн'],
    slug: 'simplified-recognition-process',
    publishedAt: '2024-01-12T14:30:00Z',
    featured: true,
    viewsCount: 980
  },
  {
    id: 3,
    title: 'Болон процесі бойынша жаңа келісімдер',
    excerpt: 'Еуропалық университеттермен ынтымақтастық кеңейтілді. 15 жаңа серіктестік келісім жасалды.',
    content: 'Толық мәтін...',
    image: '/images/news/news-3.jpg',
    category: {
      id: 3,
      name: 'Болон процесі',
      slug: 'bologna',
      color: 'bg-purple-500'
    },
    tags: ['болон', 'серіктестік', 'еуропа'],
    slug: 'new-bologna-agreements',
    publishedAt: '2024-01-10T09:15:00Z',
    featured: false,
    viewsCount: 756
  }
]

const mockCategories: NewsCategory[] = [
  { id: 0, name: 'Барлығы', slug: 'all', color: 'bg-gray-500', count: 25 },
  { id: 1, name: 'Аккредитация', slug: 'accreditation', color: 'bg-blue-500', count: 8 },
  { id: 2, name: 'Тану', slug: 'recognition', color: 'bg-green-500', count: 12 },
  { id: 3, name: 'Болон процесі', slug: 'bologna', color: 'bg-purple-500', count: 5 }
]

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [categories, setCategories] = useState<NewsCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  const breadcrumbs = [
    { title: 'Басты бет', href: '/', translationKey: 'header.home' },
    { title: 'Жаңалықтар', translationKey: 'header.news' }
  ]

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setNews(mockNews)
        setCategories(mockCategories)
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category.slug === selectedCategory
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const featuredNews = news.filter(item => item.featured)
  const regularNews = filteredNews.filter(item => !item.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('kk-KZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <PageLayout breadcrumbs={breadcrumbs}>
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-screen-xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-xl h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-screen-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            <TranslatedText textKey="header.news" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Білім беру саласындағы соңғы жаңалықтар мен маңызды хабарландырулар
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Жаңалықтарды іздеу..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.slug
                    ? 'bg-primary-500 dark:bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Таңдаулы жаңалықтар
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image || '/images/placeholder.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${item.category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {item.category.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={item.publishedAt}>
                        {formatDate(item.publishedAt)}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{item.viewsCount} көрініс</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-medium text-sm"
                      >
                        Толығырақ
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div className="mb-16">
          {(selectedCategory !== 'all' || searchQuery !== '' || featuredNews.length === 0) && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              {searchQuery ? `Іздеу нәтижелері: "${searchQuery}"` : 'Барлық жаңалықтар'}
            </h2>
          )}

          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Жаңалықтар табылмады
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Іздеу критерийлерін өзгертіп көріңіз
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === 'all' && searchQuery === '' ? regularNews : filteredNews).map((item) => (
                <article
                  key={item.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image || '/images/placeholder.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${item.category.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {item.category.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={item.publishedAt}>
                        {formatDate(item.publishedAt)}
                      </time>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-medium text-sm"
                    >
                      Толығырақ
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredNews.length > 0 && (
          <div className="text-center">
            <button className="px-8 py-3 bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
              Көбірек жүктеу
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
