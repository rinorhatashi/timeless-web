"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ShoppingBag, Users, TrendingUp, Package, CheckCircle, Shield, BarChart3, Sparkles } from 'lucide-react'

const RetailCPGPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Personalization",
      description: "AI-driven customer personalization for product recommendations and marketing.",
      icon: Sparkles
    },
    {
      title: "Demand Forecasting",
      description: "Predictive analytics for inventory optimization and demand planning.",
      icon: TrendingUp
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain visibility and optimization with AI.",
      icon: Package
    },
    {
      title: "Customer Analytics",
      description: "Deep customer insights for retention, lifetime value, and acquisition strategies.",
      icon: Users
    }
  ]

  const useCases = [
    "Personalized recommendations",
    "Dynamic pricing optimization",
    "Inventory management",
    "Demand forecasting",
    "Supply chain optimization",
    "Customer segmentation",
    "Churn prediction",
    "Store operations optimization"
  ]

  const metrics = [
    {
      metric: "25%",
      description: "Increase in conversion rates through personalization"
    },
    {
      metric: "30%",
      description: "Reduction in inventory costs with demand forecasting"
    },
    {
      metric: "40%",
      description: "Improvement in customer lifetime value"
    }
  ]

  const benefits = [
    {
      title: "Enhanced Personalization",
      description: "Deliver personalized experiences that increase engagement and conversion.",
      icon: Sparkles
    },
    {
      title: "Optimized Inventory",
      description: "Reduce stockouts and overstock with accurate demand forecasting.",
      icon: Package
    },
    {
      title: "Customer Insights",
      description: "Understand customer behavior and preferences with deep analytics.",
      icon: Users
    },
    {
      title: "Data Privacy",
      description: "Maintain customer trust with privacy-first AI systems and compliance.",
      icon: Shield
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.retailCPG.title')}
      description={t('pages.industries.retailCPG.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.retailCPG.breadcrumb'), href: '/industries/retail-cpg' }
      ]}
    >
      <Section
        title="Industry Impact Metrics"
        description="Real results from retail AI implementations in production"
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
          <h2>Retail AI Transformation</h2>
          <p>
            We build AI systems that transform retail operations from customer-facing experiences 
            to backend supply chain management. Our solutions help retailers deliver personalized 
            experiences, optimize inventory, and operate more efficiently.
          </p>
          <p>
            Personalization engines analyze customer behavior, preferences, and context to deliver 
            tailored product recommendations and marketing messages. Demand forecasting models 
            predict future sales with high accuracy, enabling optimal inventory levels and 
            reducing waste.
          </p>
          <p>
            Supply chain optimization systems provide end-to-end visibility and intelligent 
            decision-making across procurement, warehousing, and distribution. Customer analytics 
            platforms help retailers understand behavior, predict churn, and maximize lifetime value.
          </p>
        </div>
      </Section>

      <Section
        title="AI-Powered Retail Solutions"
        description="Transform retail operations with production-ready AI systems"
      >
        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-pink-700" />
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
          <h2 className="section-title">Retail Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across retail operations
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-pink-500" />
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
            How AI transforms retail operations and customer experience
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
            Ready to transform retail with AI?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our retail AI solutions can improve customer experience and operations.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.retailCPG.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function RetailCPGPage() {
  return (
    <ContentLoader>
      <RetailCPGPageContent />
    </ContentLoader>
  )
} 