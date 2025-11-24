"use client"

import { useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const platforms: Platform[] = [
    {
      id: 'adao',
      title: 'Agentic DAO Platform',
      description: 'Autonomous Decentralized Autonomous Organization platform that revolutionizes neighborhood and property management through computer vision, smart sensors, and blockchain technology.',
      videoUrl: 'https://player.vimeo.com/video/1130531521?h=49d71d6ebd&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1',
      href: '/platforms/adao-platform'
    },
    {
      id: 'rita',
      title: 'Rita Remote Care',
      description: 'AI-powered remote patient monitoring platform with 400 FDA-approved biometric devices, providing analytical insights, medication reminders, and 24/7 clinical telehealth center connectivity.',
      videoUrl: 'https://player.vimeo.com/video/511179689?badge=0&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1',
      href: '/platforms/rita-remote-care'
    },
    {
      id: 'marriott',
      title: 'Marriott Inspector',
      description: 'Complete end-to-end business review using AI agents and financial analytics to find and implement data-driven optimizations for increased profitability.',
      videoUrl: 'https://player.vimeo.com/video/1130884456?h=7317a60590&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1',
      href: '/platforms/marriott-inspector'
    }
  ]

  const currentPlatform = platforms[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? platforms.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === platforms.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPlatform = (index: number) => {
    setCurrentIndex(index)
  }

  const nextPlatform = platforms[(currentIndex + 1) % platforms.length]

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
                Learn More →
              </Link>
            </div>

            {/* Video Content */}
            <div className="platform-video-wrapper relative">
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
              
              {/* Next Platform Preview - Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[180px] hidden md:block">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Next:</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                  {nextPlatform.title}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="platform-navigation">
            <button 
              className="platform-nav-arrow platform-nav-prev" 
              aria-label="Previous platform"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="platform-nav-dots">
              {platforms.map((_, index) => (
                <button 
                  key={index}
                  className={`platform-nav-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Platform ${index + 1}`}
                  onClick={() => goToPlatform(index)}
                />
              ))}
            </div>
            
            <button 
              className="platform-nav-arrow platform-nav-next" 
              aria-label="Next platform"
              onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Upcoming Platforms Preview - Below Content */}
          <div className="grid grid-cols-3 gap-4 mt-6 hidden sm:grid">
            {platforms.map((platform, index) => {
              const isActive = index === currentIndex
              const isNext = index === (currentIndex + 1) % platforms.length
              const isPrev = index === (currentIndex - 1 + platforms.length) % platforms.length
              
              return (
                <button
                  key={index}
                  onClick={() => goToPlatform(index)}
                  className={`text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-blue-500' 
                      : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-blue-600' : 
                      isNext ? 'bg-green-500' : 
                      isPrev ? 'bg-orange-500' : 'bg-gray-300'
                    }`} />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {isActive ? 'Active' : isNext ? 'Next' : isPrev ? 'Previous' : 'Available'}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">
                    {platform.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                    {platform.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
