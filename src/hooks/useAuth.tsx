'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { apiClient, handleApiError } from '@/lib/api'
import toast from 'react-hot-toast'

interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  full_name: string
  phone_number?: string
  organization?: string
  position?: string
  preferred_language: string
  accessibility_settings: any
  date_joined: string
  last_login?: string
  is_active: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>
  register: (userData: any) => Promise<boolean>
  logout: () => Promise<void>
  updateProfile: (data: any) => Promise<boolean>
  changePassword: (data: any) => Promise<boolean>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        try {
          await refreshUser()
        } catch (error) {
          // Token is invalid, clear it
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
        }
      }
      setIsLoading(false)
    }

    initAuth()
  }, [])

  const login = async (email: string, password: string, rememberMe = false): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await apiClient.auth.login({
        email,
        password,
        remember_me: rememberMe,
      })

      const { user: userData, tokens } = response.data

      // Store tokens
      localStorage.setItem('accessToken', tokens.access)
      localStorage.setItem('refreshToken', tokens.refresh)

      // Set user
      setUser(userData)

      toast.success('Сәтті кірдіңіз!')
      return true
    } catch (error) {
      const errorInfo = handleApiError(error)
      toast.error(errorInfo.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: any): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await apiClient.auth.register(userData)

      const { user: newUser, tokens } = response.data

      // Store tokens
      localStorage.setItem('accessToken', tokens.access)
      localStorage.setItem('refreshToken', tokens.refresh)

      // Set user
      setUser(newUser)

      toast.success('Тіркелу сәтті аяқталды!')
      return true
    } catch (error) {
      const errorInfo = handleApiError(error)
      toast.error(errorInfo.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      if (refreshToken) {
        await apiClient.auth.logout(refreshToken)
      }
    } catch (error) {
      // Ignore logout errors
      console.error('Logout error:', error)
    } finally {
      // Clear local state regardless of API call result
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setUser(null)
      toast.success('Сәтті шықтыңыз!')
    }
  }

  const updateProfile = async (data: any): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await apiClient.auth.updateProfile(data)
      setUser(response.data)
      toast.success('Профиль жаңартылды!')
      return true
    } catch (error) {
      const errorInfo = handleApiError(error)
      toast.error(errorInfo.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const changePassword = async (data: any): Promise<boolean> => {
    try {
      setIsLoading(true)
      await apiClient.auth.changePassword(data)
      toast.success('Құпия сөз өзгертілді!')
      return true
    } catch (error) {
      const errorInfo = handleApiError(error)
      toast.error(errorInfo.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const refreshUser = async (): Promise<void> => {
    try {
      const response = await apiClient.auth.profile()
      setUser(response.data)
    } catch (error) {
      throw error
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    refreshUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
