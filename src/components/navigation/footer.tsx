"use client"

import Link from 'next/link'
import { Mail, MapPin, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export const Footer = () => {
  const { t } = useI18n()

  const primaryLinks = [
    { label: t('navigation.capabilities'), href: '/capabilities' },
    { label: t('navigation.platforms'), href: '/platforms' },
    { label: t('navigation.solutions'), href: '/solutions' },
    { label: t('navigation.research'), href: '/research' },
  ]

  const companyLinks = [
    { label: t('navigation.about'), href: '/about' },
    { label: t('navigation.menu.about.team'), href: '/about/team' },
    { label: t('navigation.menu.about.careers'), href: '/about/careers' },
    { label: t('navigation.contact'), href: '/contact' }
  ]

  const legalLinks = [
    { label: t('footer.legal.privacy'), href: '/privacy' },
    { label: t('footer.legal.terms'), href: '/terms' },
    { label: t('footer.legal.cookies'), href: '/cookies' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">TIMELESS</Link>
            <p className="footer-tagline">
              {t('footer.description')}
            </p>
            <div className="footer-contact">
              <a href={`mailto:${t('footer.email')}`} className="footer-email">
                <Mail className="w-4 h-4" />
                {t('footer.email')}
              </a>
              <div className="footer-global">
                <Globe className="w-4 h-4" />
                {t('footer.globalPresence')}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <div className="footer-nav-section">
              <h4 className="footer-nav-title">{t('footer.platform')}</h4>
              <ul className="footer-nav-list">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4 className="footer-nav-title">{t('footer.company')}</h4>
              <ul className="footer-nav-list">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4 className="footer-nav-title">{t('footer.contactSection')}</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href={`mailto:hello@timeless.dev`} className="footer-nav-link">
                    {t('footer.contactMethods.general')}
                  </a>
                </li>
                <li>
                  <a href={`mailto:partnerships@timeless.dev`} className="footer-nav-link">
                    {t('footer.contactMethods.partnerships')}
                  </a>
                </li>
                <li>
                  <a href={`mailto:research@timeless.dev`} className="footer-nav-link">
                    {t('footer.contactMethods.research')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="footer-offices">
          <h4 className="footer-offices-title">
            <MapPin className="w-4 h-4" />
            {t('footer.globalOffices')}
          </h4>
          <div className="footer-offices-grid">
            <div className="footer-office-region">
              <h5>{t('footer.offices.northAmerica')}</h5>
              <span>{t('footer.offices.northAmericaCities')}</span>
            </div>
            <div className="footer-office-region">
              <h5>{t('footer.offices.europe')}</h5>
              <span>{t('footer.offices.europeCities')}</span>
            </div>
            <div className="footer-office-region">
              <h5>{t('footer.offices.middleEast')}</h5>
              <span>{t('footer.offices.middleEastCities')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Timeless. All rights reserved.
          </div>
          <div className="footer-legal">
            {legalLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="footer-legal-link">
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && <span className="footer-separator">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
