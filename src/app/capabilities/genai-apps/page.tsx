"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Code, Cpu, CheckCircle } from 'lucide-react'

const features = [
  {
    title: "Custom Model Development",
    description: "Purpose-built generative models tailored to your specific use cases and data.",
    icon: Code
  },
  {
    title: "Enterprise Integration", 
    description: "Seamless integration with existing enterprise systems and workflows.",
    icon: Zap
  },
  {
    title: "Safety & Governance",
    description: "Built-in safety measures and governance frameworks for responsible AI deployment.",
    icon: Shield
  },
  {
    title: "Performance Optimization",
    description: "Optimized for production performance with efficient inference and scaling.",
    icon: Cpu
  }
]

const useCases = [
  "Content generation and automation",
  "Code generation and development assistance", 
  "Document processing and analysis",
  "Customer service automation",
  "Knowledge base creation",
  "Language translation and localization",
  "Creative design assistance",
  "Data synthesis and augmentation"
]

const benefits = [
  {
    title: "Accelerated Development",
    description: "Reduce time-to-market with pre-built components and proven architectures."
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built-in security measures and compliance frameworks for enterprise deployment."
  },
  {
    title: "Scalable Infrastructure", 
    description: "Auto-scaling infrastructure that handles varying workloads efficiently."
  },
  {
    title: "Continuous Improvement",
    description: "Models that learn and improve over time with feedback and new data."
  }
]

export default function GenAIAppsPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.genaiApps.title')}
      description={t('pages.genaiApps.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.genaiApps.breadcrumb'), href: '/capabilities/genai-apps' }
      ]}
    >
      <Section
        title="Enterprise Generative AI"
        description="Build and deploy custom generative AI applications that transform how your organization creates, processes, and analyzes content."
      >
        <div className="grid-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="card-title">
                    {feature.title}
                  </h3>
                </div>
                <p className="card-description">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-description">
            Transform your business processes with generative AI applications
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
        <div className="content-prose">
          <h2>Implementation Approach</h2>
          <p>
            Our GenAI applications are built using a systematic approach that ensures reliability, 
            security, and performance. We start with understanding your specific requirements and 
            build custom solutions that integrate seamlessly with your existing infrastructure.
          </p>

          <h3>Discovery & Planning</h3>
          <p>
            We work with your team to identify the best opportunities for generative AI, assess 
            your data readiness, and design an implementation roadmap that delivers value quickly 
            while building toward long-term goals.
          </p>

          <h3>Custom Development</h3>
          <p>
            Our team develops custom generative models and applications tailored to your specific 
            use cases. We use proven architectures and best practices to ensure your applications 
            are reliable, secure, and scalable.
          </p>

          <h3>Deployment & Optimization</h3>
          <p>
            We deploy your applications with comprehensive monitoring and optimization frameworks. 
            Our systems continuously learn and improve, ensuring your AI applications deliver 
            increasing value over time.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            Why organizations choose our GenAI applications for their critical business processes
          </p>
        </div>
        
        <div className="grid-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {benefit.title}
              </h3>
              <p className="card-description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to build your GenAI application?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how generative AI can transform your business processes and unlock new opportunities.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start your project →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 