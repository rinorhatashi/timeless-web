"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { Phone, Radio, Network, Users, CheckCircle, Shield, BarChart3, Zap } from 'lucide-react'

const TelcoMediaPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Network Optimization",
      description: "AI-powered network management and optimization for maximum performance and reliability.",
      icon: Network
    },
    {
      title: "Customer Analytics",
      description: "Deep customer insights for personalization, retention, and lifetime value optimization.",
      icon: Users
    },
    {
      title: "5G/6G Infrastructure",
      description: "Next-generation connectivity infrastructure with AI-driven optimization.",
      icon: Zap
    },
    {
      title: "Content Intelligence",
      description: "AI-powered content recommendation, moderation, and personalization systems.",
      icon: Radio
    }
  ]

  const useCases = [
    "Network performance optimization",
    "Predictive maintenance",
    "Customer churn prediction",
    "Personalized content delivery",
    "Fraud detection",
    "Quality of service monitoring",
    "Spectrum management",
    "Customer service automation"
  ]

  const metrics = [
    {
      metric: "35%",
      description: "Improvement in network efficiency through AI optimization"
    },
    {
      metric: "40%",
      description: "Reduction in customer churn with predictive analytics"
    },
    {
      metric: "50%",
      description: "Faster issue resolution with automated diagnostics"
    }
  ]

  const benefits = [
    {
      title: "Network Excellence",
      description: "Optimize network performance and reliability with AI-powered management.",
      icon: Network
    },
    {
      title: "Customer Experience",
      description: "Deliver personalized experiences that increase engagement and reduce churn.",
      icon: Users
    },
    {
      title: "Operational Efficiency",
      description: "Automate operations and reduce costs with intelligent systems.",
      icon: BarChart3
    },
    {
      title: "Security & Compliance",
      description: "Meet telecom regulations with comprehensive security and compliance frameworks.",
      icon: Shield
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.telcoMedia.title')}
      description={t('pages.industries.telcoMedia.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.telcoMedia.breadcrumb'), href: '/industries/telco-media' }
      ]}
    >
      <Section
        title="Industry Impact Metrics"
        description="Real results from telecom and media AI implementations"
      >
        <div className="grid-3">
          {metrics.map((item, index) => (
            <div key={index} className="card text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {item.metric}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <div className="content-prose">
          <h2>Telecom & Media AI Transformation</h2>
          <p>
            We build AI systems that transform telecommunications and media operations—from network 
            optimization to content delivery. Our solutions help providers deliver better service, 
            reduce churn, and operate more efficiently in competitive markets.
          </p>
          <p>
            Network optimization systems use AI to predict demand, optimize routing, and prevent 
            issues before they impact customers. Customer analytics platforms identify at-risk 
            subscribers and enable targeted retention strategies.
          </p>
          <p>
            For media companies, our content intelligence systems personalize recommendations, 
            optimize delivery, and automate moderation. Infrastructure optimization ensures 
            reliable, high-performance delivery of streaming and real-time services.
          </p>
        </div>
      </Section>

      <Section
        title="AI-Powered Telecom Solutions"
        description="Transform telecommunications and media with production-ready AI"
      >
        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="card-title">
                    {solution.title}
                  </h3>
                </div>
                <p className="card-description">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Telecom & Media Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across telecommunications and media
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-teal-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How AI transforms telecommunications and media operations
          </p>
        </div>
        
        <div className="grid-2">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="card-title">
                    {benefit.title}
                  </h3>
                </div>
                <p className="card-description">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to transform telecommunications?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our telecom AI solutions can optimize networks and improve customer experience.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.telcoMedia.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function TelcoMediaPage() {
  return (
    <ContentLoader>
      <TelcoMediaPageContent />
    </ContentLoader>
  )
} 