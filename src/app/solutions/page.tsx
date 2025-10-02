import Link from 'next/link'
import { ArrowRight, CreditCard, Smartphone, Watch, Shield, Zap, Target, CheckCircle } from 'lucide-react'

const solutions = [
  {
    title: 'Payment Solutions',
    description: 'Secure, scalable payment processing systems with AI-powered fraud detection and optimization.',
    features: ['Fraud detection', 'Payment optimization', 'Real-time processing', 'Compliance automation'],
    status: 'Production Ready',
    icon: CreditCard,
    href: '/solutions/payment-solutions',
    industries: ['Financial Services', 'E-commerce', 'Fintech']
  },
  {
    title: 'Smart Cards & Digital ID',
    description: 'Advanced smart card systems and digital identity solutions with biometric authentication.',
    features: ['Biometric authentication', 'Digital identity', 'Secure storage', 'Multi-factor auth'],
    status: 'Production Ready',
    icon: Smartphone,
    href: '/solutions/smart-cards-digital-id',
    industries: ['Government', 'Healthcare', 'Financial Services']
  },
  {
    title: 'Wearables',
    description: 'AI-powered wearable devices with real-time health monitoring and predictive analytics.',
    features: ['Health monitoring', 'Predictive analytics', 'Real-time alerts', 'Data privacy'],
    status: 'Production Ready',
    icon: Watch,
    href: '/solutions/wearables',
    industries: ['Healthcare', 'Fitness', 'Industrial Safety']
  }
]

const capabilities = [
  {
    title: 'Security First',
    description: 'Every solution includes enterprise-grade security with end-to-end encryption.',
    icon: Shield
  },
  {
    title: 'Real-time Processing',
    description: 'Low-latency processing for time-critical applications and user experiences.',
    icon: Zap
  },
  {
    title: 'Compliance Ready',
    description: 'Built-in compliance for industry regulations and data protection standards.',
    icon: Target
  },
  {
    title: 'Production Hardened',
    description: 'Battle-tested solutions that run reliably in production environments.',
    icon: CheckCircle
  }
]

const industries = [
  'Financial Services',
  'Healthcare',
  'E-commerce',
  'Government',
  'Fintech',
  'Fitness',
  'Industrial Safety'
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Industry-specific AI solutions</h1>
          <p>
            Ready-to-deploy AI solutions tailored for specific industries and use cases. 
            Each solution includes compliance frameworks, security protocols, and operational excellence.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Deploy Solution
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/industries" className="btn-secondary">
              View Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our Solutions</h2>
            <p className="section-description">
              Production-ready solutions designed for specific industries and use cases. 
              Each solution includes comprehensive documentation, deployment guides, and support.
            </p>
          </div>
          
          <div className="grid-3">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                      {solution.status}
                    </span>
                  </div>
                  
                  <h3 className="card-title">
                    {solution.title}
                  </h3>
                  
                  <p className="card-description mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Target Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href={solution.href}
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

      {/* Solution Capabilities */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Solution Capabilities</h2>
            <p className="section-description">
              Every solution includes enterprise-grade capabilities out of the box. 
              No additional configuration required for production deployment.
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

      {/* Target Industries */}
      <section className="section">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Target Industries</h2>
            <p className="section-description">
              Our solutions are designed for industries with specific compliance, security, 
              and operational requirements.
            </p>
          </div>
          
          <div className="grid-auto">
            {industries.map((industry, index) => (
              <div key={index} className="card text-center">
                <h3 className="card-title text-base">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--primary-black)', color: 'var(--primary-white)' }}>
        <div className="section-content text-center">
          <h2 className="text-4xl font-normal mb-8 text-white leading-tight">
            Ready to deploy your solution?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let&apos;s discuss your specific requirements and customize a solution for your industry.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start deployment →
          </Link>
        </div>
      </section>
    </>
  )
}
