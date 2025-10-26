"use client"

import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { Zap, Target, Activity, Shield } from 'lucide-react'
import { WorldMap } from '@/components/ui/world-map'
import { PlatformSlider } from '@/components/ui/platform-slider'
import { ElegantShowcase } from '@/components/ui/redesigned-sections'

export const HomePageContent = () => {
  const { t } = useI18n()

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="hero-enhanced">
        <div className="hero-enhanced-content">
          <div className="hero-enhanced-text">
            <h1 className="hero-enhanced-title">{t('homepage.hero.title')}</h1>
            <p className="hero-enhanced-subtitle">{t('homepage.hero.subtitle')}</p>
            <div className="hero-enhanced-actions">
              <Link href="/capabilities" className="btn-primary-hero">
                {t('homepage.hero.cta1')} →
              </Link>
              <Link href="/research" className="btn-secondary-hero">
                {t('homepage.hero.cta2')} →
              </Link>
              <Link href="/contact" className="btn-secondary-hero">
                {t('homepage.hero.cta3')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Slider */}
      <PlatformSlider />

      {/* What We Run For You - 2x2 Grid */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">WHAT WE RUN FOR YOU</h2>
            <p className="section-description">
              Production-ready systems that deliver value from day one. Every component tested, monitored, and optimized for real-world deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="platform-item-enhanced">
              <div className="platform-item-icon">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="platform-item-title">{t('homepage.features.production.title')}</h3>
              <p className="platform-item-description">{t('homepage.features.production.description')}</p>
            </div>
            <div className="platform-item-enhanced">
              <div className="platform-item-icon">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="platform-item-title">{t('homepage.features.evaluation.title')}</h3>
              <p className="platform-item-description">{t('homepage.features.evaluation.description')}</p>
            </div>
            <div className="platform-item-enhanced">
              <div className="platform-item-icon">
                <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="platform-item-title">{t('homepage.features.observability.title')}</h3>
              <p className="platform-item-description">{t('homepage.features.observability.description')}</p>
            </div>
            <div className="platform-item-enhanced">
              <div className="platform-item-icon">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="platform-item-title">{t('homepage.features.security.title')}</h3>
              <p className="platform-item-description">{t('homepage.features.security.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Capabilities and Industries Showcase */}
      <ElegantShowcase />

      {/* Global Presence */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">{t('homepage.global.title')}</h2>
            <p className="section-description">{t('homepage.global.subtitle')}</p>
          </div>
          <WorldMap />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-dark-cta">
        <div className="section-content text-center">
          <h2 className="text-4xl font-normal mb-8">{t('homepage.contact.subtitle')}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            {t('homepage.contact.description')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary-inverted"
          >
            {t('homepage.contact.cta')} →
          </Link>
        </div>
      </section>
    </>
  )
} 