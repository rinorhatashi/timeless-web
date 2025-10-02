import Link from 'next/link'
import { ArrowRight, Zap, Shield, Target, Users, Building2, CheckCircle, Globe } from 'lucide-react'

const platforms = [
  {
    title: 'Agent Platform',
    description: 'Production-ready platform for building, deploying, and managing autonomous AI agents at scale.',
    features: ['Agent orchestration', 'Safety protocols', 'Human oversight', 'Scalable deployment'],
    status: 'Production Ready',
    icon: Users,
    href: '/platforms/agent-platform'
  },
  {
    title: 'RAG Orchestrator',
    description: 'Enterprise-grade retrieval-augmented generation system with advanced knowledge management.',
    features: ['Knowledge graphs', 'Document processing', 'Semantic search', 'Real-time updates'],
    status: 'Production Ready',
    icon: Target,
    href: '/platforms/rag-orchestrator'
  },
  {
    title: 'RAI Safety Stack',
    description: 'Comprehensive responsible AI framework with built-in safety and compliance tools.',
    features: ['Bias detection', 'Explainability', 'Ethical frameworks', 'Compliance automation'],
    status: 'Production Ready',
    icon: Shield,
    href: '/platforms/rai-safety-stack'
  },
  {
    title: 'Sovereign AI Blueprint',
    description: 'On-premises and private cloud AI deployment framework for maximum data sovereignty.',
    features: ['Private deployment', 'Data sovereignty', 'Regulatory compliance', 'Air-gapped systems'],
    status: 'Production Ready',
    icon: Globe,
    href: '/platforms/sovereign-ai-blueprint'
  }
]

const capabilities = [
  {
    title: 'Enterprise Integration',
    description: 'Seamless integration with existing enterprise systems and workflows.',
    icon: Building2
  },
  {
    title: 'Compliance Frameworks',
    description: 'Built-in compliance for GDPR, HIPAA, SOX, and industry-specific regulations.',
    icon: Shield
  },
  {
    title: 'Scalability Patterns',
    description: 'Proven patterns for scaling from prototype to enterprise-wide deployment.',
    icon: Zap
  },
  {
    title: 'Operational Excellence',
    description: '24/7 monitoring, alerting, and automated remediation capabilities.',
    icon: CheckCircle
  }
]

export default function PlatformsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Platform capabilities</h1>
          <p>
            Every platform includes enterprise-grade capabilities out of the box. No additional configuration required for production deployment.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Deploy Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/capabilities" className="btn-secondary">
              View Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our Platforms</h2>
            <p className="section-description">
              Production-ready platforms designed for enterprise AI deployment with built-in safety, 
              compliance, and scalability features.
            </p>
          </div>
          
          <div className="grid-2">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {platform.status}
                    </span>
                  </div>
                  
                  <h3 className="card-title">
                    {platform.title}
                  </h3>
                  
                  <p className="card-description mb-6">
                    {platform.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href={platform.href}
                      className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Platform Capabilities</h2>
            <p className="section-description">
              Every platform includes enterprise-grade capabilities out of the box. No additional configuration required for production deployment.
            </p>
          </div>
          
          <div className="grid-4">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon
              return (
                <div key={index} className="card text-center">
                  <div className="p-3 bg-gray-100 rounded-lg w-fit mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="card-title">
                    {capability.title}
                  </h3>
                  <p className="card-description">
                    {capability.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--primary-black)', color: 'var(--primary-white)' }}>
        <div className="section-content text-center">
          <h2 className="text-4xl font-normal mb-8">Ready to deploy AI platforms?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">Let's discuss your platform requirements and design a deployment strategy that scales with your business.</p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start the conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
