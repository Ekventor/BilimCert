'use client'

import { useState } from 'react'
import { Send, User, Mail, MessageSquare } from 'lucide-react'
import { TranslatedText } from '@/components/ui/TranslatedText'
import { useLanguage } from '@/contexts/LanguageContext'
import toast from 'react-hot-toast'

interface QuestionFormData {
  name: string
  email: string
  subject: string
  question: string
  category: string
}

interface QuestionFormProps {
  onSubmitSuccess?: () => void
  className?: string
}

export function QuestionForm({ onSubmitSuccess, className = '' }: QuestionFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<QuestionFormData>({
    name: '',
    email: '',
    subject: '',
    question: '',
    category: 'general'
  })
  const [errors, setErrors] = useState<Partial<QuestionFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: 'general', label: 'Жалпы сұрақтар' },
    { value: 'accreditation', label: 'Аккредитация' },
    { value: 'recognition', label: 'Дипломды тану' },
    { value: 'bologna', label: 'Болонья процесі' },
    { value: 'technical', label: 'Техникалық сұрақтар' },
    { value: 'other', label: 'Басқа' }
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<QuestionFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Аты-жөні міндетті'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email міндетті'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email форматы дұрыс емес'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Тақырып міндетті'
    }

    if (!formData.question.trim()) {
      newErrors.question = 'Сұрақ міндетті'
    } else if (formData.question.trim().length < 10) {
      newErrors.question = 'Сұрақ кемінде 10 таңбадан тұруы керек'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof QuestionFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/forms/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success(result.message)

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          question: '',
          category: 'general'
        })

        onSubmitSuccess?.()
      } else {
        toast.error(result.message || 'Сұрақ жіберуде қате орын алды')
      }
    } catch (error) {
      console.error('Error submitting question:', error)
      toast.error('Сұрақ жіберуде қате орын алды')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center mb-6">
        <MessageSquare className="w-6 h-6 text-primary-500 mr-3" />
        <h2 className="text-xl font-semibold text-gray-900">
          Сұрақ қою
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Аты-жөні
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              placeholder="Толық аты-жөніңізді енгізіңіз"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-1" />
              Email
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Санат
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Тақырып
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
            placeholder="Сұрақтың қысқаша тақырыбы"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>

        {/* Question */}
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
            Сұрақ
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="question"
            name="question"
            rows={5}
            value={formData.question}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical ${errors.question ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
            placeholder="Сұрағыңызды толық жазыңыз..."
          />
          {errors.question && (
            <p className="mt-1 text-sm text-red-600">{errors.question}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            Сұрағыңызды неғұрлым толық жазсаңыз, соғұрлым дәл жауап аласыз
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Жіберілуде...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Сұрақ жіберу
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
