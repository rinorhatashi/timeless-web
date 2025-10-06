"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Wind, Battery, LineChart, CheckCircle, Shield, BarChart3, Activity } from 'lucide-react'

const EnergyPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Grid Optimization",
      description: "Real-time grid management and optimization for maximum efficiency and stability.",
      icon: Activity
    },
    {
      title: "Renewable Forecasting",
      description: "Predictive models for solar and wind energy generation with high accuracy.",
      icon: Wind
    },
    {
      title: "Asset Management",
      description: "Predictive maintenance and lifecycle optimization for energy infrastructure.",
      icon: BarChart3
    },
    {
      title: "Demand Response",
      description: "Intelligent load balancing and demand forecasting for grid stability.",
      icon: LineChart
    }
  ]

  const useCases = [
    "Smart grid optimization",
    "Renewable energy forecasting",
    "Predictive maintenance",
    "Demand forecasting",
    "Energy storage optimization",
    "Asset lifecycle management",
    "Grid stability monitoring",
    "Carbon footprint tracking"
  ]

  const metrics = [
    {
      metric: "60%",
      description: "Increase in energy efficiency through AI optimization"
    },
    {
      metric: "45%",
      description: "Reduction in unplanned maintenance downtime"
    },
    {
      metric: "35%",
      description: "Improvement in renewable energy forecasting accuracy"
    }
  ]

  const benefits = [
    {
      title: "Grid Efficiency",
      description: "Optimize grid operations and reduce energy waste with real-time AI systems.",
      icon: Zap
    },
    {
      title: "Renewable Integration",
      description: "Seamlessly integrate renewable sources with accurate forecasting and management.",
      icon: Wind
    },
    {
      title: "Asset Reliability",
      description: "Maximize equipment uptime with predictive maintenance and monitoring.",
      icon: Battery
    },
    {
      title: "Compliance Ready",
      description: "Meet regulatory requirements with comprehensive monitoring and reporting.",
      icon: Shield
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.energy.title')}
      description={t('pages.industries.energy.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.energy.breadcrumb'), href: '/industries/energy' }
      ]}
    >
      {/* Hero Image - 16:9 */}
      <Section>
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/energy-hero.jpg"
            alt="Solar farm with wind turbines renewable energy infrastructure"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      <Section
        title="Industry Impact Metrics"
        description="Real results from AI-powered energy systems in production"
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
            <h2>Energy AI Transformation</h2>
            <p>
              We build AI systems that optimize energy generation, distribution, and consumption. 
              Our platforms integrate real-time data from sensors, weather forecasts, and market 
              signals to make intelligent decisions that balance efficiency, reliability, and cost.
            </p>
            <p>
              For renewable energy, our forecasting models predict solar and wind generation with 
              high accuracy, enabling better grid integration and reducing curtailment. Predictive 
              maintenance systems monitor critical infrastructure and prevent costly downtime.
            </p>
            <p>
              Smart grid solutions optimize load balancing, demand response, and energy storage 
              to ensure stable operations while maximizing renewable energy utilization and 
              minimizing carbon emissions.
            </p>
          </div>
          {/* Grid Control Image - 16:9 */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/energy-grid-control.jpg"
              alt="Energy grid control room with operators monitoring power systems"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        title="AI-Powered Energy Solutions"
        description="Transform energy operations with production-ready AI systems"
      >
        {/* Field Maintenance Image - 4:3 */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/energy-field-maintenance.jpg"
            alt="Field technician inspecting solar panels during maintenance operations"
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
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-yellow-700" />
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
          <h2 className="section-title">Energy Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across the energy value chain
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        {/* Wind Monitoring Image - 4:3 */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/energy-wind-monitoring.jpg"
            alt="Wind energy engineer monitoring turbine performance with laptop in field"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How AI transforms energy operations and sustainability
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
            Ready to transform energy operations?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our energy AI solutions can optimize operations and accelerate sustainability.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.energy.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function EnergyPage() {
  return (
    <ContentLoader>
      <EnergyPageContent />
    </ContentLoader>
  )
} 