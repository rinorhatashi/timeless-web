"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight, Heart, Activity, Pill, Calendar, Video, Shield, TrendingDown, Clock, Home, User, Smartphone, Stethoscope, CheckCircle } from 'lucide-react'

const getFeatures = (t: any) => [
  {
    title: t('pages.ritaPlatform.features.0.title'),
    description: t('pages.ritaPlatform.features.0.description'),
    icon: Activity
  },
  {
    title: t('pages.ritaPlatform.features.1.title'),
    description: t('pages.ritaPlatform.features.1.description'),
    icon: TrendingDown
  },
  {
    title: t('pages.ritaPlatform.features.2.title'),
    description: t('pages.ritaPlatform.features.2.description'),
    icon: Pill
  },
  {
    title: t('pages.ritaPlatform.features.3.title'),
    description: t('pages.ritaPlatform.features.3.description'),
    icon: Video
  }
]

const getCapabilities = (t: any) => [
  t('pages.ritaPlatform.capabilities.0'),
  t('pages.ritaPlatform.capabilities.1'),
  t('pages.ritaPlatform.capabilities.2'),
  t('pages.ritaPlatform.capabilities.3'),
  t('pages.ritaPlatform.capabilities.4'),
  t('pages.ritaPlatform.capabilities.5'),
  t('pages.ritaPlatform.capabilities.6'),
  t('pages.ritaPlatform.capabilities.7'),
  t('pages.ritaPlatform.capabilities.8'),
  t('pages.ritaPlatform.capabilities.9'),
  t('pages.ritaPlatform.capabilities.10'),
  t('pages.ritaPlatform.capabilities.11')
]

const getUseCases = (t: any) => [
  {
    title: t('pages.ritaPlatform.useCases.0.title'),
    description: t('pages.ritaPlatform.useCases.0.description')
  },
  {
    title: t('pages.ritaPlatform.useCases.1.title'),
    description: t('pages.ritaPlatform.useCases.1.description')
  },
  {
    title: t('pages.ritaPlatform.useCases.2.title'),
    description: t('pages.ritaPlatform.useCases.2.description')
  },
  {
    title: t('pages.ritaPlatform.useCases.3.title'),
    description: t('pages.ritaPlatform.useCases.3.description')
  }
]

const getBenefits = (t: any) => [
  {
    title: t('pages.ritaPlatform.benefits.0.title'),
    description: t('pages.ritaPlatform.benefits.0.description'),
    icon: Shield
  },
  {
    title: t('pages.ritaPlatform.benefits.1.title'),
    description: t('pages.ritaPlatform.benefits.1.description'),
    icon: TrendingDown
  },
  {
    title: t('pages.ritaPlatform.benefits.2.title'),
    description: t('pages.ritaPlatform.benefits.2.description'),
    icon: Heart
  },
  {
    title: t('pages.ritaPlatform.benefits.3.title'),
    description: t('pages.ritaPlatform.benefits.3.description'),
    icon: User
  }
]

const getTechnologyStack = (t: any) => [
  {
    title: t('pages.ritaPlatform.technologyStack.0.title'),
    description: t('pages.ritaPlatform.technologyStack.0.description'),
    icon: Activity
  },
  {
    title: t('pages.ritaPlatform.technologyStack.1.title'),
    description: t('pages.ritaPlatform.technologyStack.1.description'),
    icon: Smartphone
  },
  {
    title: t('pages.ritaPlatform.technologyStack.2.title'),
    description: t('pages.ritaPlatform.technologyStack.2.description'),
    icon: Calendar
  },
  {
    title: t('pages.ritaPlatform.technologyStack.3.title'),
    description: t('pages.ritaPlatform.technologyStack.3.description'),
    icon: Video
  }
]

const getTimelineSteps = (t: any) => [
  {
    step: "01",
    title: t('pages.ritaPlatform.timeline.0.title'),
    description: t('pages.ritaPlatform.timeline.0.description'),
    icon: Activity
  },
  {
    step: "02", 
    title: t('pages.ritaPlatform.timeline.1.title'),
    description: t('pages.ritaPlatform.timeline.1.description'),
    icon: TrendingDown
  },
  {
    step: "03",
    title: t('pages.ritaPlatform.timeline.2.title'),
    description: t('pages.ritaPlatform.timeline.2.description'),
    icon: Clock
  },
  {
    step: "04",
    title: t('pages.ritaPlatform.timeline.3.title'),
    description: t('pages.ritaPlatform.timeline.3.description'),
    icon: Calendar
  }
]

// Simple Video Player Component
const VideoPlayer = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-video bg-gray-900 dark:bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src="https://player.vimeo.com/video/511179689?badge=0&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title="Rita Remote Care Demo"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default function RitaRemoteCarePage() {
  const { t, isLoading } = useI18n()
  
  // Get translated data
  const features = getFeatures(t)
  const capabilities = getCapabilities(t)
  const useCases = getUseCases(t)
  const benefits = getBenefits(t)
  const technologyStack = getTechnologyStack(t)
  const timelineSteps = getTimelineSteps(t)
  
  // Prevent hydration mismatch by using fallback values during loading
  if (isLoading) {
    return (
      <PageLayout
        title="Rita Remote Care"
        description="AI-powered remote patient monitoring platform"
        breadcrumbs={[
          { label: 'Platforms', href: '/platforms' },
          { label: 'Rita Remote Care', href: '/platforms/rita-remote-care' }
        ]}
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </PageLayout>
    )
  }
  
  return (
    <div className="page-layout">
      {/* Breadcrumbs */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-content">
          <nav className="breadcrumb">
            <Link href="/" className="breadcrumb-item">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ArrowRight className="breadcrumb-separator" />
            <Link href="/platforms" className="breadcrumb-item">
              {t('navigation.platforms')}
            </Link>
            <ArrowRight className="breadcrumb-separator" />
            <span className="breadcrumb-item current">{t('pages.ritaPlatform.breadcrumb')}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Video and Text Side by Side */}
      <section className="hero">
        <div className="hero-content">
          <div className="grid-2 items-center gap-12">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-normal leading-tight">
                  {t('pages.ritaPlatform.hero.title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('pages.ritaPlatform.hero.subtitle')}
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  {t('pages.ritaPlatform.hero.cta1')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  {t('pages.ritaPlatform.hero.cta2')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Video */}
            <div className="relative">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features - Compact Grid */}
      <Section variant="alt">
        <div className="text-center mb-8">
          <h2 className="section-title">{t('pages.ritaPlatform.sections.features.title')}</h2>
          <p className="section-description">
            {t('pages.ritaPlatform.sections.features.subtitle')}
          </p>
        </div>
        
        <div className="grid-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="card-title text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="card-description text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* How It Works - Timeline */}
      <Section id="how-it-works">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('pages.ritaPlatform.sections.howItWorks.title')}</h2>
          <p className="section-description">
            {t('pages.ritaPlatform.sections.howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid-2 gap-8">
          {/* First Row: Steps 01 & 02 */}
          <div className="space-y-8">
            {timelineSteps.slice(0, 2).map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="p-4 bg-blue-100 rounded-xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          {/* Second Row: Steps 03 & 04 */}
          <div className="space-y-8">
            {timelineSteps.slice(2, 4).map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index + 2} className="card p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="p-4 bg-blue-100 rounded-xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Technology Stack - Compact */}
      <Section variant="alt">
        <div className="text-center mb-8">
          <h2 className="section-title">{t('pages.ritaPlatform.sections.technologyStack.title')}</h2>
          <p className="section-description">
            {t('pages.ritaPlatform.sections.technologyStack.subtitle')}
          </p>
        </div>
        
        <div className="grid-4">
          {technologyStack.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <IconComponent className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="card-title text-lg">
                    {tech.title}
                  </h3>
                </div>
                <p className="card-description text-sm">
                  {tech.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Platform Capabilities - Compact */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="section-title">{t('pages.ritaPlatform.sections.capabilities.title')}</h2>
          <p className="section-description">
            {t('pages.ritaPlatform.sections.capabilities.subtitle')}
          </p>
        </div>
        
        <div className="grid-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases - Compact */}
      <Section variant="alt">
        <div className="text-center mb-8">
          <h2 className="section-title">{t('pages.ritaPlatform.sections.useCases.title')}</h2>
          <p className="section-description">
            {t('pages.ritaPlatform.sections.useCases.subtitle')}
          </p>
        </div>
        
        <div className="grid-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="card">
              <h3 className="card-title text-lg">
                {useCase.title}
              </h3>
              <p className="card-description text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Benefits - Compact */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="section-title">{t('pages.ritaPlatform.sections.benefits.title')}</h2>
          <p className="section-description">
            {t('pages.ritaPlatform.sections.benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <IconComponent className="w-5 h-5 text-purple-700" />
                  </div>
                  <h3 className="card-title text-lg">
                    {benefit.title}
                  </h3>
                </div>
                <p className="card-description text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section - Fixed Text Color */}
      <section className="section" style={{ background: 'var(--primary-black)', color: 'var(--primary-white)' }}>
        <div className="section-content text-center">
          <h2 className="text-3xl font-normal mb-6 text-white">
            {t('pages.ritaPlatform.cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('pages.ritaPlatform.cta.subtitle')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.ritaPlatform.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}

