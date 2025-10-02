"use client"

import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'

export const HomePageContent = () => {
  const { t } = useI18n()

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t('homepage.hero.title')}</h1>
          <p>{t('homepage.hero.subtitle')}</p>
          <div className="hero-actions">
            <Link href="/capabilities" className="btn-primary">
              {t('homepage.hero.cta1')} →
            </Link>
            <Link href="/research" className="btn-secondary">
              {t('homepage.hero.cta2')} →
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t('homepage.hero.cta3')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-alt">
        <div className="section-content">
          <h2 className="section-title">{t('homepage.features.title')}</h2>
          <p className="section-description">{t('homepage.features.subtitle')}</p>
          
          <div className="grid-4">
            <div className="card">
              <h3 className="card-title">{t('homepage.features.production.title')}</h3>
              <p className="card-description">{t('homepage.features.production.description')}</p>
            </div>
            <div className="card">
              <h3 className="card-title">{t('homepage.features.evaluation.title')}</h3>
              <p className="card-description">{t('homepage.features.evaluation.description')}</p>
            </div>
            <div className="card">
              <h3 className="card-title">{t('homepage.features.observability.title')}</h3>
              <p className="card-description">{t('homepage.features.observability.description')}</p>
            </div>
            <div className="card">
              <h3 className="card-title">{t('homepage.features.security.title')}</h3>
              <p className="card-description">{t('homepage.features.security.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Highlight */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">{t('homepage.capabilities.title')}</h2>
            <p className="section-description">{t('homepage.capabilities.subtitle')}</p>
          </div>
          <div className="section-cta">
            <Link href="/capabilities" className="btn-primary">
              {t('homepage.capabilities.cta')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">{t('homepage.industries.title')}</h2>
            <p className="section-description">{t('homepage.industries.subtitle')}</p>
          </div>
          <div className="section-cta">
            <Link href="/industries" className="btn-primary">
              {t('homepage.industries.cta')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">{t('homepage.global.title')}</h2>
            <p className="section-description">{t('homepage.global.subtitle')}</p>
          </div>
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            <div className="card">
              <h3 className="card-title">{t('homepage.global.locations.northAmerica')}</h3>
            </div>
            <div className="card">
              <h3 className="card-title">{t('homepage.global.locations.europe')}</h3>
            </div>
            <div className="card">
              <h3 className="card-title">{t('homepage.global.locations.middleEast')}</h3>
            </div>
          </div>
          <p className="text-center" style={{ opacity: 0.7 }}>
            {t('homepage.global.sovereign')}
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{ background: 'var(--primary-black)', color: 'var(--primary-white)' }}>
        <div className="section-content text-center">
          <h2 className="text-4xl font-normal mb-8">{t('homepage.contact.subtitle')}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            {t('homepage.contact.description')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary" 
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('homepage.contact.cta')} →
          </Link>
        </div>
      </section>
    </>
  )
} 