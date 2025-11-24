"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight, Eye, Cpu, Shield, Zap, CheckCircle, Users, Camera, Network, Coins, Lock, Home } from 'lucide-react'

const getFeatures = (t: (key: string) => string) => [
  {
    title: t('pages.adaoPlatform.features.0.title'),
    description: t('pages.adaoPlatform.features.0.description'),
    icon: Eye
  },
  {
    title: t('pages.adaoPlatform.features.1.title'),
    description: t('pages.adaoPlatform.features.1.description'),
    icon: Network
  },
  {
    title: t('pages.adaoPlatform.features.2.title'),
    description: t('pages.adaoPlatform.features.2.description'),
    icon: Users
  },
  {
    title: t('pages.adaoPlatform.features.3.title'),
    description: t('pages.adaoPlatform.features.3.description'),
    icon: Coins
  }
]

const getCapabilities = (t: (key: string) => string) => [
  t('pages.adaoPlatform.capabilities.0'),
  t('pages.adaoPlatform.capabilities.1'),
  t('pages.adaoPlatform.capabilities.2'),
  t('pages.adaoPlatform.capabilities.3'),
  t('pages.adaoPlatform.capabilities.4'),
  t('pages.adaoPlatform.capabilities.5'),
  t('pages.adaoPlatform.capabilities.6'),
  t('pages.adaoPlatform.capabilities.7')
]

const getUseCases = (t: (key: string) => string) => [
  {
    title: t('pages.adaoPlatform.useCases.0.title'),
    description: t('pages.adaoPlatform.useCases.0.description')
  },
  {
    title: t('pages.adaoPlatform.useCases.1.title'),
    description: t('pages.adaoPlatform.useCases.1.description')
  },
  {
    title: t('pages.adaoPlatform.useCases.2.title'),
    description: t('pages.adaoPlatform.useCases.2.description')
  },
  {
    title: t('pages.adaoPlatform.useCases.3.title'),
    description: t('pages.adaoPlatform.useCases.3.description')
  }
]

const getBenefits = (t: (key: string) => string) => [
  {
    title: t('pages.adaoPlatform.benefits.0.title'),
    description: t('pages.adaoPlatform.benefits.0.description'),
    icon: Zap
  },
  {
    title: t('pages.adaoPlatform.benefits.1.title'),
    description: t('pages.adaoPlatform.benefits.1.description'),
    icon: Eye
  },
  {
    title: t('pages.adaoPlatform.benefits.2.title'),
    description: t('pages.adaoPlatform.benefits.2.description'),
    icon: Cpu
  },
  {
    title: t('pages.adaoPlatform.benefits.3.title'),
    description: t('pages.adaoPlatform.benefits.3.description'),
    icon: Users
  }
]

const getTechnologyStack = (t: (key: string) => string) => [
  {
    title: t('pages.adaoPlatform.technologyStack.0.title'),
    description: t('pages.adaoPlatform.technologyStack.0.description'),
    icon: Camera
  },
  {
    title: t('pages.adaoPlatform.technologyStack.1.title'),
    description: t('pages.adaoPlatform.technologyStack.1.description'),
    icon: Network
  },
  {
    title: t('pages.adaoPlatform.technologyStack.2.title'),
    description: t('pages.adaoPlatform.technologyStack.2.description'),
    icon: Lock
  },
  {
    title: t('pages.adaoPlatform.technologyStack.3.title'),
    description: t('pages.adaoPlatform.technologyStack.3.description'),
    icon: Shield
  }
]

const getTimelineSteps = (t: (key: string) => string) => [
  {
    step: "01",
    title: t('pages.adaoPlatform.timeline.0.title'),
    description: t('pages.adaoPlatform.timeline.0.description'),
    icon: Eye
  },
  {
    step: "02", 
    title: t('pages.adaoPlatform.timeline.1.title'),
    description: t('pages.adaoPlatform.timeline.1.description'),
    icon: Zap
  },
  {
    step: "03",
    title: t('pages.adaoPlatform.timeline.2.title'),
    description: t('pages.adaoPlatform.timeline.2.description'),
    icon: Users
  },
  {
    step: "04",
    title: t('pages.adaoPlatform.timeline.3.title'),
    description: t('pages.adaoPlatform.timeline.3.description'),
    icon: Cpu
  }
]

// Simple Video Player Component
const VideoPlayer = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-video bg-gray-900 dark:bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src="https://player.vimeo.com/video/1130531521?h=49d71d6ebd&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title="Agentic DAO Platform Demo"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default function AgenticDAOPlatformPage() {
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
        title="Agentic DAO Platform"
        description="Autonomous Decentralized Autonomous Organization platform"
        breadcrumbs={[
          { label: 'Platforms', href: '/platforms' },
          { label: 'Agentic DAO Platform', href: '/platforms/adao-platform' }
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
            <span className="breadcrumb-item current">{t('pages.adaoPlatform.breadcrumb')}</span>
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
                  {t('pages.adaoPlatform.hero.title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('pages.adaoPlatform.hero.subtitle')}
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  {t('pages.adaoPlatform.hero.cta1')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  {t('pages.adaoPlatform.hero.cta2')}
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
          <h2 className="section-title">{t('pages.adaoPlatform.sections.features.title')}</h2>
          <p className="section-description">
            {t('pages.adaoPlatform.sections.features.subtitle')}
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
          <h2 className="section-title">{t('pages.adaoPlatform.sections.howItWorks.title')}</h2>
          <p className="section-description">
            {t('pages.adaoPlatform.sections.howItWorks.subtitle')}
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
          <h2 className="section-title">{t('pages.adaoPlatform.sections.technologyStack.title')}</h2>
          <p className="section-description">
            {t('pages.adaoPlatform.sections.technologyStack.subtitle')}
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
          <h2 className="section-title">{t('pages.adaoPlatform.sections.capabilities.title')}</h2>
          <p className="section-description">
            {t('pages.adaoPlatform.sections.capabilities.subtitle')}
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
          <h2 className="section-title">{t('pages.adaoPlatform.sections.useCases.title')}</h2>
          <p className="section-description">
            {t('pages.adaoPlatform.sections.useCases.subtitle')}
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
          <h2 className="section-title">{t('pages.adaoPlatform.sections.benefits.title')}</h2>
          <p className="section-description">
            {t('pages.adaoPlatform.sections.benefits.subtitle')}
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
            {t('pages.adaoPlatform.cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('pages.adaoPlatform.cta.subtitle')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.adaoPlatform.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
