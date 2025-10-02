"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { Factory, Wrench, Eye, TrendingUp, CheckCircle, Shield, BarChart3, Package } from 'lucide-react'

const IndustrialPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment monitoring and failure prediction to minimize unplanned downtime.",
      icon: Wrench
    },
    {
      title: "Quality Automation",
      description: "Computer vision and ML systems for automated quality inspection and defect detection.",
      icon: Eye
    },
    {
      title: "Production Optimization",
      description: "Real-time optimization of manufacturing processes for maximum efficiency and throughput.",
      icon: TrendingUp
    },
    {
      title: "Supply Chain Intelligence",
      description: "Demand forecasting, inventory optimization, and logistics planning with AI.",
      icon: Package
    }
  ]

  const useCases = [
    "Predictive maintenance systems",
    "Automated quality inspection",
    "Production line optimization",
    "Supply chain forecasting",
    "Energy optimization",
    "Inventory management",
    "Worker safety monitoring",
    "Equipment performance tracking"
  ]

  const metrics = [
    {
      metric: "45%",
      description: "Decrease in unplanned downtime through predictive maintenance"
    },
    {
      metric: "30%",
      description: "Improvement in first-pass yield with automated quality control"
    },
    {
      metric: "25%",
      description: "Reduction in inventory costs with demand forecasting"
    }
  ]

  const compliance = [
    {
      title: "ISO 27001",
      description: "Information security management system certification for data protection."
    },
    {
      title: "IEC 62443",
      description: "Industrial automation and control systems security compliance."
    },
    {
      title: "NIST Framework",
      description: "Cybersecurity framework implementation for critical infrastructure."
    },
    {
      title: "Industry 4.0",
      description: "Smart manufacturing standards and interoperability protocols."
    }
  ]

  const benefits = [
    {
      title: "Reduced Downtime",
      description: "Prevent equipment failures before they happen with predictive analytics.",
      icon: Wrench
    },
    {
      title: "Quality Excellence",
      description: "Achieve consistent quality with automated inspection and real-time feedback.",
      icon: Eye
    },
    {
      title: "Operational Efficiency",
      description: "Optimize production processes and resource utilization with AI insights.",
      icon: BarChart3
    },
    {
      title: "Safe Operations",
      description: "Monitor worker safety and ensure compliance with automated systems.",
      icon: Shield
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.industrial.title')}
      description={t('pages.industries.industrial.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.industrial.breadcrumb'), href: '/industries/industrial' }
      ]}
    >
      <Section
        title="Industry Impact Metrics"
        description="Real results from manufacturing AI implementations in production"
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
          <h2>Manufacturing AI Transformation</h2>
          <p>
            We build AI systems that transform manufacturing operations through predictive 
            maintenance, quality automation, and production optimization. Our platforms integrate 
            with existing MES, ERP, and SCADA systems to provide actionable insights in real-time.
          </p>
          <p>
            Computer vision systems inspect products at line speed, detecting defects that human 
            inspectors might miss. Predictive maintenance models analyze sensor data to forecast 
            equipment failures days or weeks in advance, enabling proactive maintenance scheduling.
          </p>
          <p>
            Production optimization algorithms continuously adjust process parameters to maximize 
            output, minimize waste, and reduce energy consumption. Supply chain intelligence 
            systems forecast demand and optimize inventory levels across the value chain.
          </p>
        </div>
      </Section>

      <Section
        title="AI-Powered Manufacturing Solutions"
        description="Transform industrial operations with production-ready AI systems"
      >
        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-orange-700" />
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
          <h2 className="section-title">Manufacturing Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across manufacturing operations
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-orange-500" />
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
          <h2 className="section-title">Compliance & Standards</h2>
          <p className="section-description">
            Manufacturing-grade compliance and security measures
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
        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How AI transforms manufacturing operations
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
            Ready to modernize manufacturing?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our manufacturing AI solutions can improve operations and quality.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.industrial.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function IndustrialPage() {
  return (
    <ContentLoader>
      <IndustrialPageContent />
    </ContentLoader>
  )
} 