'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  is_staff: boolean
  is_superuser: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, confirmPassword: string, recaptchaToken: string) => Promise<boolean>
  logout: () => void
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const isAuthenticated = !!user

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('auth_token')
      if (!token) {
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData.user)
      } else {
        // Token is invalid, remove it
        localStorage.removeItem('auth_token')
      }
    } catch (error) {
      console.error('Error checking auth status:', error)
      localStorage.removeItem('auth_token')
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        localStorage.setItem('auth_token', data.token)
        setUser(data.user)
        toast.success('Сәтті кірдіңіз!')
        return true
      } else {
        toast.error(data.message || 'Кіру кезінде қате орын алды')
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Кіру кезінде қате орын алды')
      return false
    }
  }

  const register = async (name: string, email: string, password: string, confirmPassword: string, recaptchaToken: string): Promise<boolean> => {
    if (password !== confirmPassword) {
      toast.error('Құпия сөздер сәйкес келмейді')
      return false
    }

    if (!recaptchaToken) {
      toast.error('reCAPTCHA растауы міндетті')
      return false
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, recaptchaToken }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        toast.success('Тіркелу сәтті аяқталды! Енді кіре аласыз.')
        return true
      } else {
        toast.error(data.message || 'Тіркелу кезінде қате орын алды')
        return false
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('Тіркелу кезінде қате орын алды')
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setUser(null)
    toast.success('Сәтті шықтыңыз!')
    router.push('/')
  }

  const refreshUser = async () => {
    await checkAuthStatus()
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    refreshUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
