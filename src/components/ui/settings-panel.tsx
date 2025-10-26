"use client"

import React, { useState, useEffect } from 'react'
import { X, Plus, Minus, Check } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

interface SettingsPanelProps {
  isOpen: boolean
  onClose: () => void
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

const fontSizes = [
  { label: 'Small', value: 'small', scale: 0.875 },
  { label: 'Default', value: 'default', scale: 1 },
  { label: 'Large', value: 'large', scale: 1.125 },
  { label: 'X-Large', value: 'xlarge', scale: 1.25 }
]

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { locale, setLocale } = useI18n()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [fontSize, setFontSize] = useState<string>('default')
  const [highContrast, setHighContrast] = useState<boolean>(false)
  const [reducedMotion, setReducedMotion] = useState<boolean>(false)
  const [focusMode, setFocusMode] = useState<boolean>(false)
  
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  // Initialize settings from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedFontSize = localStorage.getItem('fontSize')
    const savedHighContrast = localStorage.getItem('highContrast') === 'true'
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true'
    const savedFocusMode = localStorage.getItem('focusMode') === 'true'
    
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
      applyTheme(savedTheme as 'light' | 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const newTheme = prefersDark ? 'dark' : 'light'
      setTheme(newTheme)
      applyTheme(newTheme)
    }
    
    if (savedFontSize) {
      setFontSize(savedFontSize)
      const scale = fontSizes.find(f => f.value === savedFontSize)?.scale || 1
      document.documentElement.style.fontSize = `${16 * scale}px`
    }
    
    setHighContrast(savedHighContrast)
    if (savedHighContrast) {
      document.documentElement.classList.add('high-contrast')
    }
    
    setReducedMotion(savedReducedMotion)
    if (savedReducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    }
    
    setFocusMode(savedFocusMode)
    if (savedFocusMode) {
      document.documentElement.classList.add('focus-mode')
    }
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Handle theme change
  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  // Handle font size change
  const handleFontSizeChange = (newSize: string) => {
    setFontSize(newSize)
    localStorage.setItem('fontSize', newSize)
    const scale = fontSizes.find(f => f.value === newSize)?.scale || 1
    document.documentElement.style.fontSize = `${16 * scale}px`
  }

  // Increment/decrement font size
  const changeFontSize = (direction: 'increase' | 'decrease') => {
    const currentIndex = fontSizes.findIndex(f => f.value === fontSize)
    let newIndex = currentIndex
    
    if (direction === 'increase' && currentIndex < fontSizes.length - 1) {
      newIndex = currentIndex + 1
    } else if (direction === 'decrease' && currentIndex > 0) {
      newIndex = currentIndex - 1
    }
    
    handleFontSizeChange(fontSizes[newIndex].value)
  }

  // Handle language change
  const handleLanguageChange = (languageCode: string) => {
    setLocale(languageCode as 'en' | 'de' | 'ar')
  }

  // Handle high contrast toggle
  const handleHighContrastToggle = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('highContrast', String(newValue))
    document.documentElement.classList.toggle('high-contrast', newValue)
  }

  // Handle reduced motion toggle
  const handleReducedMotionToggle = () => {
    const newValue = !reducedMotion
    setReducedMotion(newValue)
    localStorage.setItem('reducedMotion', String(newValue))
    document.documentElement.classList.toggle('reduce-motion', newValue)
  }

  // Handle focus mode toggle
  const handleFocusModeToggle = () => {
    const newValue = !focusMode
    setFocusMode(newValue)
    localStorage.setItem('focusMode', String(newValue))
    document.documentElement.classList.toggle('focus-mode', newValue)
  }

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 dark:bg-black/70 backdrop-blur-sm z-[100] transition-all duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Settings Panel - Minimalistic */}
      <div className="settings-panel-minimal">
        {/* Header */}
        <div className="settings-minimal-header">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Settings
          </h2>
          <button
            onClick={onClose}
            className="settings-minimal-close"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="settings-minimal-content">
          {/* Theme Section */}
          <div className="settings-minimal-group">
            <label className="settings-minimal-label">Appearance</label>
            <div className="settings-minimal-toggle">
              <button
                onClick={() => handleThemeChange('light')}
                className={`settings-minimal-option ${theme === 'light' ? 'active' : ''}`}
              >
                Light
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`settings-minimal-option ${theme === 'dark' ? 'active' : ''}`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Text Size Section */}
          <div className="settings-minimal-group">
            <label className="settings-minimal-label">Text Size</label>
            <div className="settings-minimal-size-controls">
              <button
                onClick={() => changeFontSize('decrease')}
                disabled={fontSize === 'small'}
                className="settings-minimal-btn"
                aria-label="Decrease"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="settings-minimal-value">
                {fontSizes.find(f => f.value === fontSize)?.label}
              </span>
              <button
                onClick={() => changeFontSize('increase')}
                disabled={fontSize === 'xlarge'}
                className="settings-minimal-btn"
                aria-label="Increase"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Accessibility Section */}
          <div className="settings-minimal-group">
            <label className="settings-minimal-label">Accessibility</label>
            <div className="settings-minimal-switches">
              <button
                onClick={handleHighContrastToggle}
                className="settings-minimal-switch-row"
                role="switch"
                aria-checked={highContrast}
              >
                <span>High Contrast</span>
                <div className={`minimal-switch ${highContrast ? 'active' : ''}`}>
                  <div className="minimal-switch-thumb" />
                </div>
              </button>
              <button
                onClick={handleReducedMotionToggle}
                className="settings-minimal-switch-row"
                role="switch"
                aria-checked={reducedMotion}
              >
                <span>Reduced Motion</span>
                <div className={`minimal-switch ${reducedMotion ? 'active' : ''}`}>
                  <div className="minimal-switch-thumb" />
                </div>
              </button>
              <button
                onClick={handleFocusModeToggle}
                className="settings-minimal-switch-row"
                role="switch"
                aria-checked={focusMode}
              >
                <span>Focus Mode</span>
                <div className={`minimal-switch ${focusMode ? 'active' : ''}`}>
                  <div className="minimal-switch-thumb" />
                </div>
              </button>
            </div>
          </div>

          {/* Language Section */}
          <div className="settings-minimal-group">
            <label className="settings-minimal-label">Language</label>
            <div className="settings-minimal-list">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`settings-minimal-list-item ${
                    language.code === currentLanguage.code ? 'active' : ''
                  }`}
                >
                  <span>{language.name}</span>
                  {language.code === currentLanguage.code && (
                    <Check className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={() => {
              handleThemeChange('light')
              handleFontSizeChange('default')
              handleLanguageChange('en')
              setHighContrast(false)
              setReducedMotion(false)
              setFocusMode(false)
              localStorage.removeItem('highContrast')
              localStorage.removeItem('reducedMotion')
              localStorage.removeItem('focusMode')
              document.documentElement.classList.remove('high-contrast', 'reduce-motion', 'focus-mode')
            }}
            className="settings-minimal-reset"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </>
  )
}

