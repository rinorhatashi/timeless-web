"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import Image from 'next/image'
import { Car, Cpu, Wrench, Shield, CheckCircle, BarChart3, Clock, Zap } from 'lucide-react'

const AutomotivePageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "SDV Engineering Copilots",
      description: "Requirements-to-test assistance, code review, and safety case drafting for software-defined vehicles.",
      icon: Cpu
    },
    {
      title: "Manufacturing Quality Vision",
      description: "Defect detection, traceability, and continuous improvement feedback at production speed.",
      icon: BarChart3
    },
    {
      title: "Fleet Diagnostics & AIOps",
      description: "Telemetry analysis, remote diagnostics, and predictive maintenance for connected vehicles.",
      icon: Wrench
    },
    {
      title: "Connected Services",
      description: "Personalization, pricing optimization, and customer service automation with privacy controls.",
      icon: Zap
    }
  ]

  const useCases = [
    "Autonomous driving systems",
    "Manufacturing quality control",
    "Predictive maintenance",
    "Connected car platforms",
    "Over-the-air updates",
    "Fleet management",
    "Supply chain optimization",
    "Customer experience personalization"
  ]

  const metrics = [
    {
      metric: "6–12 mo",
      description: "To first SDV feature pipeline with OTA and safety sign-off"
    },
    {
      metric: "30–50%",
      description: "Defect escape reduction via computer vision and test automation"
    },
    {
      metric: "20–35%",
      description: "Lower cost-to-serve in field ops with diagnostics and remote fixes"
    }
  ]

  const benefits = [
    {
      title: "Faster Development",
      description: "Accelerate software-defined vehicle development with AI-assisted engineering tools.",
      icon: Zap
    },
    {
      title: "Quality Excellence",
      description: "Reduce defects and improve first-pass yield with automated quality systems.",
      icon: BarChart3
    },
    {
      title: "Safety First",
      description: "ISO 26262-compliant AI systems with comprehensive safety validation.",
      icon: Shield
    },
    {
      title: "Operational Efficiency",
      description: "Optimize fleet operations and reduce service costs with predictive analytics.",
      icon: Clock
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.automotive.title')}
      description={t('pages.industries.automotive.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.automotive.breadcrumb'), href: '/industries/automotive' }
      ]}
    >
      {/* Hero Image */}
      <Section>
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/automotive-hero.jpg"
            alt="Modern automotive manufacturing facility with electric vehicles and automated systems"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      <Section
        title="Industry Impact Metrics"
        description="Real results from automotive AI implementations in production"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="content-prose">
            <h2>Automotive AI Transformation</h2>
            <p>
              Automotive leaders win by turning software investment into shippable, safe features. 
              We focus on SDV pipelines (requirements→code→tests), manufacturing quality (vision 
              and anomaly detection), resilient supply chains, and lifecycle services that monetize 
              the vehicle beyond the sale.
            </p>
            <p>
              Our approach: align architecture with safety cases, build golden datasets, stand up 
              CI/CD for models and embedded code, and enable OTA risk controls. The result is faster 
              feature velocity, fewer escapes, and lower service cost—without compromising safety.
            </p>
            <p>
              On the factory floor, computer vision and closed-loop analytics improve first-pass 
              yield and traceability. In-field, fleet diagnostics copilots triage telemetry, propose 
              remote fixes, and prevent recalls through early signal detection.
            </p>
          </div>
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/automotive-autonomous-sdv.jpg"
              alt="Autonomous vehicle testing with advanced sensor arrays and AI systems"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        title="AI-Powered Automotive Solutions"
        description="Transform automotive development and operations with production-ready AI systems"
      >
        {/* Quality Control Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/automotive-quality-control.jpg"
            alt="AI-powered quality inspection system in automotive manufacturing"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-700" />
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
          <h2 className="section-title">Automotive Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across the automotive value chain
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        {/* Fleet Diagnostics Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/automotive-fleet-diagnostics.jpg"
            alt="Modern fleet management control center with real-time vehicle diagnostics"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How AI transforms automotive development and operations
          </p>
        </div>
        
        <div className="grid-2">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-gray-700" />
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
            Ready to accelerate automotive innovation?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our automotive AI solutions can transform your development and operations.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.automotive.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function AutomotivePage() {
  return (
    <ContentLoader>
      <AutomotivePageContent />
    </ContentLoader>
  )
} 