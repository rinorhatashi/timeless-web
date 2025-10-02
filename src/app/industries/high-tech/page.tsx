"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { Laptop, Code, Rocket, Settings, CheckCircle, Shield, Zap, Database } from 'lucide-react'

const HighTechPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Platform Engineering",
      description: "Developer platforms and internal tools that accelerate delivery and ensure consistency.",
      icon: Settings
    },
    {
      title: "Developer Tools",
      description: "AI-powered code assistance, testing, and deployment automation for engineering teams.",
      icon: Code
    },
    {
      title: "AI Acceleration",
      description: "Infrastructure and platforms for building and deploying AI systems at scale.",
      icon: Rocket
    },
    {
      title: "Data Infrastructure",
      description: "Modern data platforms and pipelines for AI and analytics workloads.",
      icon: Database
    }
  ]

  const useCases = [
    "Developer productivity tools",
    "CI/CD automation",
    "Infrastructure as code",
    "API platform development",
    "Observability systems",
    "Security automation",
    "Performance optimization",
    "Cloud cost optimization"
  ]

  const metrics = [
    {
      metric: "3x",
      description: "Faster feature delivery with AI-assisted development"
    },
    {
      metric: "60%",
      description: "Reduction in production incidents through automation"
    },
    {
      metric: "40%",
      description: "Improvement in developer satisfaction and productivity"
    }
  ]

  const benefits = [
    {
      title: "Developer Velocity",
      description: "Accelerate development with AI-powered tools and automation platforms.",
      icon: Rocket
    },
    {
      title: "Platform Excellence",
      description: "Build robust internal platforms that enable teams to ship faster.",
      icon: Laptop
    },
    {
      title: "Security First",
      description: "Integrate security at every layer with automated compliance and monitoring.",
      icon: Shield
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales with your business needs.",
      icon: Zap
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.highTech.title')}
      description={t('pages.industries.highTech.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.highTech.breadcrumb'), href: '/industries/high-tech' }
      ]}
    >
      <Section
        title="Industry Impact Metrics"
        description="Real results from high-tech AI implementations in production"
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
          <h2>High-Tech AI Transformation</h2>
          <p>
            We build the platforms and infrastructure that power the next generation of technology 
            companies. Our systems help engineering teams ship faster, scale more efficiently, 
            and maintain high reliability in production.
          </p>
          <p>
            From developer productivity tools to AI acceleration platforms, we provide the 
            foundation for innovation. Our platform engineering approach ensures that internal 
            tools are as polished as external products.
          </p>
          <p>
            We focus on developer experience, operational excellence, and security by default. 
            Every platform we build includes comprehensive observability, automated compliance, 
            and self-service capabilities that empower teams.
          </p>
        </div>
      </Section>

      <Section
        title="AI-Powered Platform Solutions"
        description="Transform engineering operations with production-ready platforms"
      >
        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-purple-700" />
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
          <h2 className="section-title">Platform Use Cases</h2>
          <p className="section-description">
            Comprehensive platform capabilities for modern engineering teams
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-purple-500" />
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
            How platform engineering transforms technology organizations
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
            Ready to accelerate your platform?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our platform solutions can transform your engineering organization.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.highTech.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function HighTechPage() {
  return (
    <ContentLoader>
      <HighTechPageContent />
    </ContentLoader>
  )
} 