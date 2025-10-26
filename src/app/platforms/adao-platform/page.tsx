"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight, Eye, Cpu, Shield, Zap, CheckCircle, Users, Camera, Network, Coins, Lock, Home } from 'lucide-react'

const features = [
  {
    title: "Computer Vision Monitoring",
    description: "Advanced computer vision systems that automatically detect physical damage and infrastructure issues in real-time.",
    icon: Eye
  },
  {
    title: "Smart Sensor Networks",
    description: "Comprehensive sensor networks that monitor internal systems and detect faults before they become problems.",
    icon: Network
  },
  {
    title: "Decentralized Governance",
    description: "Community-driven decision making with transparent voting mechanisms and equal representation.",
    icon: Users
  },
  {
    title: "Blockchain Integration",
    description: "Secure blockchain technology for transparent transactions, smart contracts, and immutable records.",
    icon: Coins
  }
]

const capabilities = [
  "Autonomous entry and access control",
  "Real-time infrastructure monitoring",
  "Community governance tokens",
  "Transparent treasury management",
  "Smart contract automation",
  "Computer vision damage detection",
  "Sensor-based fault detection",
  "Decentralized decision making"
]

const useCases = [
  {
    title: "Neighborhood Management",
    description: "Transform residential communities with autonomous monitoring, maintenance, and governance systems."
  },
  {
    title: "Large-Scale Venues",
    description: "Implement autonomous management for stadiums, convention centers, and entertainment complexes."
  },
  {
    title: "Hotel Properties",
    description: "Enhance guest experience with automated systems for access, maintenance, and service delivery."
  },
  {
    title: "Corporate Campuses",
    description: "Streamline corporate facility management with intelligent monitoring and automated maintenance."
  }
]

const benefits = [
  {
    title: "Progress at Speed of Consensus",
    description: "Decisions are made in moments by the community, not months in boardrooms.",
    icon: Zap
  },
  {
    title: "Complete Transparency",
    description: "Every transaction and decision is transparent and visible to all community members.",
    icon: Eye
  },
  {
    title: "Autonomous Operations",
    description: "From entry to maintenance, everything operates autonomously without human intervention.",
    icon: Cpu
  },
  {
    title: "Equal Representation",
    description: "One governance token per person ensures equal voting power for all community members.",
    icon: Users
  }
]

const technologyStack = [
  {
    title: "Computer Vision",
    description: "AI-powered visual monitoring that spots physical damage and infrastructure issues automatically",
    icon: Camera
  },
  {
    title: "Smart Sensors",
    description: "Network of intelligent sensors that detect internal faults and system anomalies",
    icon: Network
  },
  {
    title: "Blockchain Technology",
    description: "Secure, transparent blockchain infrastructure for governance and financial transactions",
    icon: Lock
  },
  {
    title: "Smart Contracts",
    description: "Automated contract execution for maintenance, payments, and governance processes",
    icon: Shield
  }
]

const timelineSteps = [
  {
    step: "01",
    title: "Autonomous Detection",
    description: "Computer vision and smart sensors continuously monitor infrastructure, automatically detecting damage and system faults in real-time.",
    icon: Eye
  },
  {
    step: "02", 
    title: "Instant Proposal Generation",
    description: "When issues are detected, the system instantly generates detailed proposals with problem analysis, solutions, and cost estimates.",
    icon: Zap
  },
  {
    step: "03",
    title: "Community Governance",
    description: "Community members review proposals and vote using governance tokens, ensuring equal representation and transparent decision-making.",
    icon: Users
  },
  {
    step: "04",
    title: "Automated Execution",
    description: "Approved decisions trigger smart contracts that automatically process payments, notify contractors, and initiate work immediately.",
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
          title="ADAO Platform Demo"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default function ADAOPlatformPage() {
  const { t, isLoading } = useI18n()
  
  // Prevent hydration mismatch by using fallback values during loading
  if (isLoading) {
    return (
      <PageLayout
        title="ADAO Platform"
        description="Autonomous Decentralized Autonomous Organization platform"
        breadcrumbs={[
          { label: 'Platforms', href: '/platforms' },
          { label: 'ADAO Platform', href: '/platforms/adao-platform' }
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
                  ADAO Platform
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Autonomous Decentralized Autonomous Organization platform that revolutionizes neighborhood and property management through computer vision, smart sensors, and blockchain technology.
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  Start Your ADAO Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  Learn More
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
          <h2 className="section-title">Platform Features</h2>
          <p className="section-description">
            Advanced technology stack that enables autonomous community management and governance
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
          <h2 className="section-title">How ADAO Platform Works</h2>
          <p className="section-description">
            A four-step process that transforms community management from reactive to proactive
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
                  <p className="text-lg text-gray-600 leading-relaxed">
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
                  <p className="text-lg text-gray-600 leading-relaxed">
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
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-description">
            Cutting-edge technologies that power autonomous community management
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
          <h2 className="section-title">Platform Capabilities</h2>
          <p className="section-description">
            Comprehensive features for autonomous community and property management
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
          <h2 className="section-title">Use Cases</h2>
          <p className="section-description">
            Real-world applications of ADAO Platform across different property types
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
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            Why communities choose ADAO Platform for autonomous management
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
            Ready to revolutionize your community?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Experience progress at the speed of consensus with our ADAO Platform. Transform your neighborhood, venue, or property with autonomous management powered by Timeless.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start your ADAO journey →
          </Link>
        </div>
      </section>
    </div>
  )
}
