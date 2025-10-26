"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import Image from 'next/image'
import { Users, Shield, FileText, CheckCircle, Lock, Database, Activity } from 'lucide-react'

const PublicSectorPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Citizen Services",
      description: "AI-powered systems that improve citizen engagement and service delivery.",
      icon: Users
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics for policy insights, resource optimization, and decision support.",
      icon: Database
    },
    {
      title: "Operational Efficiency",
      description: "Process automation and optimization for government operations.",
      icon: Activity
    },
    {
      title: "Security & Compliance",
      description: "Government-grade security with FedRAMP and FISMA compliance.",
      icon: Lock
    }
  ]

  const useCases = [
    "Citizen service automation",
    "Policy analysis and insights",
    "Resource allocation optimization",
    "Fraud detection and prevention",
    "Document processing automation",
    "Emergency response systems",
    "Infrastructure monitoring",
    "Data-driven decision making"
  ]

  const metrics = [
    {
      metric: "50%",
      description: "Reduction in service request processing time"
    },
    {
      metric: "40%",
      description: "Improvement in resource allocation efficiency"
    },
    {
      metric: "35%",
      description: "Increase in citizen satisfaction scores"
    }
  ]

  const compliance = [
    {
      title: "FedRAMP",
      description: "Federal Risk and Authorization Management Program compliance for cloud services."
    },
    {
      title: "FISMA",
      description: "Federal Information Security Management Act requirements and controls."
    },
    {
      title: "NIST SP 800-53",
      description: "Comprehensive security and privacy controls for federal information systems."
    },
    {
      title: "Section 508",
      description: "Accessibility compliance ensuring services are available to all citizens."
    }
  ]

  const benefits = [
    {
      title: "Enhanced Services",
      description: "Improve citizen experience with faster, more responsive government services.",
      icon: Users
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed policy decisions with comprehensive data analytics and insights.",
      icon: Database
    },
    {
      title: "Maximum Security",
      description: "Government-grade security and compliance with all federal requirements.",
      icon: Shield
    },
    {
      title: "Transparent Operations",
      description: "Maintain transparency and accountability with auditable AI systems.",
      icon: FileText
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.publicSector.title')}
      description={t('pages.industries.publicSector.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.publicSector.breadcrumb'), href: '/industries/public-sector' }
      ]}
    >
      {/* Hero Image - 16:9 */}
      <Section>
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/public-sector-hero.jpg"
            alt="Modern government agency office with professional public service environment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      <Section
        title="Industry Impact Metrics"
        description="Real results from public sector AI implementations"
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
            <h2>Public Sector AI Transformation</h2>
            <p>
              We build AI systems that modernize government operations while maintaining the highest 
              standards of security, transparency, and accountability. Our solutions help agencies 
              deliver better services to citizens, make data-driven policy decisions, and operate 
              more efficiently.
            </p>
            <p>
              Every system we build for government meets or exceeds federal security and compliance 
              requirements. We design with transparency and explainability from the ground up, ensuring 
              that AI decisions can be audited and explained to stakeholders.
            </p>
            <p>
              From citizen-facing services to internal operations, we help government agencies 
              leverage AI to improve outcomes while protecting privacy, ensuring fairness, and 
              maintaining public trust.
            </p>
          </div>
          {/* Citizen Service Image - 16:9 */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/public-sector-citizen-service.jpg"
              alt="Government caseworker assisting citizen with services and benefits application"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        title="AI-Powered Government Solutions"
        description="Transform public sector operations with compliant, secure AI systems"
      >
        {/* Emergency Operations Image - 4:3 */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/public-sector-emergency-operations.jpg"
            alt="Government emergency operations center coordinating public safety response"
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
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-indigo-700" />
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
          <h2 className="section-title">Government Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across government operations
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-indigo-500" />
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
          <h2 className="section-title">Compliance & Security</h2>
          <p className="section-description">
            Government-grade compliance and security standards
          </p>
        </div>
        
        <div className="grid-2">
          {compliance.map((item, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {item.title}
              </h3>
              <p className="card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        {/* Data Operations Image - 4:3 */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/public-sector-data-operations.jpg"
            alt="Government analysts working in secure data operations and analytics center"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How AI transforms government operations and citizen services
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
            Ready to modernize government services?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our public sector AI solutions can improve operations and citizen services.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.publicSector.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function PublicSectorPage() {
  return (
    <ContentLoader>
      <PublicSectorPageContent />
    </ContentLoader>
  )
} 