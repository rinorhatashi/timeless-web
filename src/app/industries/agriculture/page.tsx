"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { Wheat, Droplet, Eye, TrendingUp, CheckCircle, Shield, BarChart3, Globe } from 'lucide-react'

const AgriculturePageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Precision Agronomy",
      description: "Zone prescriptions from satellite/drone/sensor fusion with intelligent task scheduling for optimal field management.",
      icon: TrendingUp
    },
    {
      title: "Vision Grading",
      description: "On-line defect and class detection with feedback to upstream processes for quality control.",
      icon: Eye
    },
    {
      title: "Fleet & Equipment",
      description: "Telemetry, condition monitoring, and predictive maintenance planning for agricultural machinery.",
      icon: Wheat
    },
    {
      title: "MRV & Sustainability",
      description: "Field-level activity data and modeling for carbon programs and sustainability disclosures.",
      icon: Globe
    }
  ]

  const useCases = [
    "Precision irrigation and fertilizer management",
    "Crop monitoring and yield prediction",
    "Automated quality grading",
    "Equipment predictive maintenance",
    "Supply chain optimization",
    "Carbon footprint tracking",
    "Pest and disease detection",
    "Resource optimization"
  ]

  const metrics = [
    {
      title: "+Yield",
      description: "Through precision agronomy and micro-climate aware irrigation",
      icon: TrendingUp
    },
    {
      title: "–Inputs",
      description: "Fertilizer and water reduction via zone prescriptions",
      icon: Droplet
    },
    {
      title: "+Quality",
      description: "Vision grading and contamination detection at line speed",
      icon: CheckCircle
    },
    {
      title: "MRV-ready",
      description: "Data for carbon programs and sustainability disclosures",
      icon: Shield
    }
  ]

  const benefits = [
    {
      title: "Increased Yield",
      description: "Data-driven decisions that optimize crop production and maximize yields per acre.",
      icon: TrendingUp
    },
    {
      title: "Resource Efficiency",
      description: "Reduce water and fertilizer usage while maintaining or improving output.",
      icon: Droplet
    },
    {
      title: "Quality Assurance",
      description: "Automated quality control systems that ensure consistent product standards.",
      icon: BarChart3
    },
    {
      title: "Sustainability",
      description: "Track and report environmental impact with MRV-ready data systems.",
      icon: Globe
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.agriculture.title')}
      description={t('pages.industries.agriculture.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.agriculture.breadcrumb'), href: '/industries/agriculture' }
      ]}
    >
      <Section
        title="Industry Impact Metrics"
        description="Real results from AI-powered precision agriculture systems in production"
      >
        <div className="grid-4">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div key={index} className="card text-center">
                <div className="flex items-center justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {metric.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {metric.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section variant="alt">
        <div className="content-prose">
          <h2>Agriculture AI Implementation</h2>
          <p>
            We integrate satellite/drone imagery, in-field sensors, and machinery telemetry into 
            a digital twin of fields and assets. Planners generate zone prescriptions and task 
            schedules that balance yield, input cost, and water constraints with weather windows 
            and labor availability.
          </p>
          <p>
            Processing facilities use computer vision for grading and contamination detection 
            with closed-loop adjustments to upstream parameters. Supply signals and storage 
            constraints feed dispatch decisions and marketplace integration for better realizations.
          </p>
          <p>
            Sustainability is MRV-ready: activity data and models feed carbon programs and 
            disclosures, with chain-of-custody across suppliers and lots.
          </p>
        </div>
      </Section>

      <Section
        title="AI-Powered Agriculture Solutions"
        description="Transform farming operations with AI systems designed for precision, efficiency, and sustainability"
      >
        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-green-700" />
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
          <h2 className="section-title">Agriculture Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across the agricultural value chain
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
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
            How AI transforms agricultural operations and sustainability
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
            Ready to transform agriculture with AI?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our precision agriculture solutions can improve yields and sustainability.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.agriculture.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function AgriculturePage() {
  return (
    <ContentLoader>
      <AgriculturePageContent />
    </ContentLoader>
  )
} 