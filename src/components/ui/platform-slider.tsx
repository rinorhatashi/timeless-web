"use client"

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

interface Platform {
  id: string
  title: string
  description: string
  videoUrl: string
  href: string
}

export const PlatformSlider = () => {
  const { t } = useI18n()

  const platforms: Platform[] = [
    {
      id: 'adao',
      title: 'ADAO Platform',
      description: 'Autonomous Decentralized Autonomous Organization platform that revolutionizes neighborhood and property management through computer vision, smart sensors, and blockchain technology.',
      videoUrl: 'https://player.vimeo.com/video/1130531521?h=49d71d6ebd&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1',
      href: '/platforms/adao-platform'
    }
  ]

  const currentPlatform = platforms[0]

  return (
    <section className="section section-alt">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">{t('homepage.platforms.title')}</h2>
          <p className="section-description">
            {t('homepage.platforms.subtitle')}
          </p>
        </div>

        <div className="platform-showcase">
          {/* Platform Content - Side by Side Layout */}
          <div className="platform-layout">
            {/* Text Content */}
            <div className="platform-content">
              <h3 className="platform-name">{currentPlatform.title}</h3>
              <p className="platform-desc">{currentPlatform.description}</p>
              <Link href={currentPlatform.href} className="btn-primary">
                Visit ADAO Platform →
              </Link>
            </div>

            {/* Video Content */}
            <div className="platform-video-wrapper">
              <iframe
                src={currentPlatform.videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="platform-video"
                title={`${currentPlatform.title} Demo`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="platform-navigation">
            <button className="platform-nav-arrow platform-nav-prev" aria-label="Previous platform">
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="platform-nav-dots">
              <button className="platform-nav-dot active" aria-label="Platform 1"></button>
              <button className="platform-nav-dot" aria-label="Platform 2"></button>
            </div>
            
            <button className="platform-nav-arrow platform-nav-next" aria-label="Next platform">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
