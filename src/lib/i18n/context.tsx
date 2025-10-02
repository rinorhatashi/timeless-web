"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Locale = 'en' | 'de' | 'ar'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string>) => string
  translations: Record<string, any>
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const loadTranslations = async (locale: Locale) => {
  try {
    const response = await fetch(`/locales/${locale}/common.json`)
    return await response.json()
  } catch (error) {
    console.error(`Failed to load translations for ${locale}`, error)
    return {}
  }
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    // Load from localStorage on mount
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && ['en', 'de', 'ar'].includes(savedLocale)) {
      setLocaleState(savedLocale)
    }
  }, [])

  useEffect(() => {
    // Load translations when locale changes
    const loadAndSetTranslations = async () => {
      const newTranslations = await loadTranslations(locale)
      setTranslations(newTranslations)
      
      // Set document direction for RTL languages
      if (typeof document !== 'undefined') {
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.lang = locale
      }
    }

    loadAndSetTranslations()
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    // Replace parameters if provided
    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce((str, [key, val]) => {
        return str.replace(new RegExp(`{{${key}}}`, 'g'), val)
      }, value)
    }

    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
} 