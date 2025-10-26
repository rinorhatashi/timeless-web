import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { CreditCard, Shield, Zap, Globe, CheckCircle, Users, BarChart3, Lock } from 'lucide-react'

const features = [
  {
    title: "Fraud Detection",
    description: "Real-time AI-powered fraud detection and prevention with minimal false positives.",
    icon: Shield
  },
  {
    title: "Risk Assessment",
    description: "Intelligent risk scoring and assessment for transactions and customer onboarding.",
    icon: BarChart3
  },
  {
    title: "Payment Processing",
    description: "High-speed, secure payment processing with advanced routing and optimization.",
    icon: Zap
  },
  {
    title: "Compliance Automation",
    description: "Automated compliance monitoring and reporting for regulatory requirements.",
    icon: Lock
  }
]

const capabilities = [
  "Real-time fraud detection",
  "Transaction monitoring",
  "Risk-based authentication",
  "AML/KYC automation",
  "Payment routing optimization",
  "Merchant underwriting",
  "Chargeback prevention",
  "Regulatory reporting"
]

const benefits = [
  {
    title: "Reduced Fraud Losses",
    description: "AI models that detect sophisticated fraud patterns while minimizing customer friction."
  },
  {
    title: "Faster Processing",
    description: "High-throughput payment processing with intelligent routing and load balancing."
  },
  {
    title: "Regulatory Compliance",
    description: "Automated compliance monitoring and reporting for global regulatory requirements."
  },
  {
    title: "Enhanced Security",
    description: "Multi-layered security architecture with advanced encryption and tokenization."
  }
]

const useCases = [
  {
    title: "E-commerce Platforms",
    description: "Comprehensive payment solutions for online marketplaces and retail platforms.",
    icon: Globe
  },
  {
    title: "Financial Institutions",
    description: "Advanced fraud detection and risk management for banks and credit unions.",
    icon: CreditCard
  },
  {
    title: "Fintech Companies",
    description: "Scalable payment infrastructure for digital wallets and payment apps.",
    icon: Users
  },
  {
    title: "Enterprise Payments",
    description: "B2B payment solutions with advanced reconciliation and reporting capabilities.",
    icon: BarChart3
  }
]

export default function PaymentSolutionsPage() {
  return (
    <PageLayout
      title="Payment Solutions"
      description="AI-powered payment infrastructure with advanced fraud detection and risk management."
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Payment Solutions', href: '/solutions/payment-solutions' }
      ]}
    >
      <Section
        title="Intelligent Payment Infrastructure"
        description="Secure, scalable payment solutions powered by AI for fraud detection, risk assessment, and operational optimization."
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
          <h2 className="section-title">Solution Capabilities</h2>
          <p className="section-description">
            Comprehensive payment infrastructure with built-in intelligence and security
          </p>
        </div>
        
        <div className="grid-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>How It Works</h2>
          <p>
            Our payment solutions combine advanced AI algorithms with robust infrastructure 
            to provide secure, efficient, and intelligent payment processing. The system 
            analyzes transaction patterns in real-time to detect fraud, assess risk, and 
            optimize payment routing.
          </p>

          <h3>Real-time Fraud Detection</h3>
          <p>
            Our AI models analyze hundreds of transaction signals in real-time to identify 
            fraudulent activities. The system continuously learns from new fraud patterns 
            and adapts to emerging threats, maintaining high accuracy while minimizing 
            false positives.
          </p>

          <h3>Intelligent Risk Assessment</h3>
          <p>
            Advanced risk scoring algorithms evaluate transaction risk based on multiple 
            factors including user behavior, device fingerprinting, and transaction context. 
            This enables dynamic risk-based authentication and decision making.
          </p>

          <h3>Optimized Payment Processing</h3>
          <p>
            Smart routing algorithms optimize payment processing by selecting the best 
            payment paths based on success rates, costs, and performance metrics. The 
            system automatically handles failover and retry logic for maximum reliability.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Industry Applications</h2>
          <p className="section-description">
            Tailored payment solutions for different industries and use cases
          </p>
        </div>
        
        <div className="grid-2">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="card-title">
                    {useCase.title}
                  </h3>
                </div>
                <p className="card-description">
                  {useCase.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            Why organizations choose our payment solutions for their critical infrastructure
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

      <Section variant="alt">
        <div className="content-prose">
          <h2>Security & Compliance</h2>
          <p>
            Our payment solutions are built with security-first principles and comply with 
            the highest industry standards including PCI DSS, SOX, and regional data 
            protection regulations.
          </p>

          <h3>Data Protection</h3>
          <p>
            All sensitive payment data is encrypted in transit and at rest using industry-standard 
            encryption algorithms. Tokenization ensures that sensitive data never persists 
            in our systems.
          </p>

          <h3>Regulatory Compliance</h3>
          <p>
            Automated compliance monitoring ensures adherence to global payment regulations 
            including PCI DSS, AML, KYC, and regional requirements. Regular compliance 
            reports and audits are automatically generated.
          </p>

          <h3>Fraud Prevention</h3>
          <p>
            Multi-layered fraud prevention combines machine learning models, rule-based 
            systems, and behavioral analysis to provide comprehensive protection against 
            various types of payment fraud.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to modernize your payments?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Deploy intelligent payment infrastructure that scales with your business while maintaining security and compliance.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start building →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 