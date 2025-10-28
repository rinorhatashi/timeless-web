"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Bot, DollarSign, Users, Lightbulb, Home, CheckCircle, BarChart3 } from 'lucide-react'

const getFeatures = (t: (key: string) => string) => [
  {
    title: t('pages.marriottInspector.features.0.title'),
    description: t('pages.marriottInspector.features.0.description'),
    icon: Bot
  },
  {
    title: t('pages.marriottInspector.features.1.title'),
    description: t('pages.marriottInspector.features.1.description'),
    icon: DollarSign
  },
  {
    title: t('pages.marriottInspector.features.2.title'),
    description: t('pages.marriottInspector.features.2.description'),
    icon: Users
  },
  {
    title: t('pages.marriottInspector.features.3.title'),
    description: t('pages.marriottInspector.features.3.description'),
    icon: TrendingUp
  }
]

const getCapabilities = (t: (key: string) => string) => [
  t('pages.marriottInspector.capabilities.0'),
  t('pages.marriottInspector.capabilities.1'),
  t('pages.marriottInspector.capabilities.2'),
  t('pages.marriottInspector.capabilities.3'),
  t('pages.marriottInspector.capabilities.4'),
  t('pages.marriottInspector.capabilities.5'),
  t('pages.marriottInspector.capabilities.6'),
  t('pages.marriottInspector.capabilities.7'),
  t('pages.marriottInspector.capabilities.8'),
  t('pages.marriottInspector.capabilities.9'),
  t('pages.marriottInspector.capabilities.10'),
  t('pages.marriottInspector.capabilities.11')
]

const getUseCases = (t: (key: string) => string) => [
  {
    title: t('pages.marriottInspector.useCases.0.title'),
    description: t('pages.marriottInspector.useCases.0.description')
  },
  {
    title: t('pages.marriottInspector.useCases.1.title'),
    description: t('pages.marriottInspector.useCases.1.description')
  },
  {
    title: t('pages.marriottInspector.useCases.2.title'),
    description: t('pages.marriottInspector.useCases.2.description')
  },
  {
    title: t('pages.marriottInspector.useCases.3.title'),
    description: t('pages.marriottInspector.useCases.3.description')
  }
]

const getBenefits = (t: (key: string) => string) => [
  {
    title: t('pages.marriottInspector.benefits.0.title'),
    description: t('pages.marriottInspector.benefits.0.description'),
    icon: TrendingUp
  },
  {
    title: t('pages.marriottInspector.benefits.1.title'),
    description: t('pages.marriottInspector.benefits.1.description'),
    icon: Bot
  },
  {
    title: t('pages.marriottInspector.benefits.2.title'),
    description: t('pages.marriottInspector.benefits.2.description'),
    icon: BarChart3
  },
  {
    title: t('pages.marriottInspector.benefits.3.title'),
    description: t('pages.marriottInspector.benefits.3.description'),
    icon: CheckCircle
  }
]

const getTechnologyStack = (t: (key: string) => string) => [
  {
    title: t('pages.marriottInspector.technologyStack.0.title'),
    description: t('pages.marriottInspector.technologyStack.0.description'),
    icon: Lightbulb
  },
  {
    title: t('pages.marriottInspector.technologyStack.1.title'),
    description: t('pages.marriottInspector.technologyStack.1.description'),
    icon: Bot
  },
  {
    title: t('pages.marriottInspector.technologyStack.2.title'),
    description: t('pages.marriottInspector.technologyStack.2.description'),
    icon: DollarSign
  },
  {
    title: t('pages.marriottInspector.technologyStack.3.title'),
    description: t('pages.marriottInspector.technologyStack.3.description'),
    icon: TrendingUp
  }
]

const getTimelineSteps = (t: (key: string) => string) => [
  {
    step: "01",
    title: t('pages.marriottInspector.timeline.0.title'),
    description: t('pages.marriottInspector.timeline.0.description'),
    icon: BarChart3
  },
  {
    step: "02", 
    title: t('pages.marriottInspector.timeline.1.title'),
    description: t('pages.marriottInspector.timeline.1.description'),
    icon: Lightbulb
  },
  {
    step: "03",
    title: t('pages.marriottInspector.timeline.2.title'),
    description: t('pages.marriottInspector.timeline.2.description'),
    icon: TrendingUp
  },
  {
    step: "04",
    title: t('pages.marriottInspector.timeline.3.title'),
    description: t('pages.marriottInspector.timeline.3.description'),
    icon: CheckCircle
  }
]

// Simple Video Player Component
const VideoPlayer = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-video bg-gray-900 dark:bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src="https://player.vimeo.com/video/1130884456?h=7317a60590&autoplay=1&loop=0&title=0&byline=0&portrait=0&controls=1&muted=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title="Marriott Inspector Demo"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default function MarriottInspectorPage() {
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
        title="Marriott Inspector"
        description="AI-powered business optimization platform"
        breadcrumbs={[
          { label: 'Platforms', href: '/platforms' },
          { label: 'Marriott Inspector', href: '/platforms/marriott-inspector' }
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
            <span className="breadcrumb-item current">{t('pages.marriottInspector.breadcrumb')}</span>
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
                  {t('pages.marriottInspector.hero.title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('pages.marriottInspector.hero.subtitle')}
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  {t('pages.marriottInspector.hero.cta1')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  {t('pages.marriottInspector.hero.cta2')}
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
          <h2 className="section-title">{t('pages.marriottInspector.sections.features.title')}</h2>
          <p className="section-description">
            {t('pages.marriottInspector.sections.features.subtitle')}
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
          <h2 className="section-title">{t('pages.marriottInspector.sections.howItWorks.title')}</h2>
          <p className="section-description">
            {t('pages.marriottInspector.sections.howItWorks.subtitle')}
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
          <h2 className="section-title">{t('pages.marriottInspector.sections.technologyStack.title')}</h2>
          <p className="section-description">
            {t('pages.marriottInspector.sections.technologyStack.subtitle')}
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
          <h2 className="section-title">{t('pages.marriottInspector.sections.capabilities.title')}</h2>
          <p className="section-description">
            {t('pages.marriottInspector.sections.capabilities.subtitle')}
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
          <h2 className="section-title">{t('pages.marriottInspector.sections.useCases.title')}</h2>
          <p className="section-description">
            {t('pages.marriottInspector.sections.useCases.subtitle')}
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
          <h2 className="section-title">{t('pages.marriottInspector.sections.benefits.title')}</h2>
          <p className="section-description">
            {t('pages.marriottInspector.sections.benefits.subtitle')}
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
            {t('pages.marriottInspector.cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('pages.marriottInspector.cta.subtitle')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.marriottInspector.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}

