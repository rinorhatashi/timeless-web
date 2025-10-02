import Link from 'next/link'
import { ArrowRight, Target, Zap, Shield, CheckCircle, Building2, Lightbulb } from 'lucide-react'

const capabilitiesData = [
  {
    category: "AI Strategy & Implementation",
    icon: Target,
    capabilities: [
      {
        title: "AI Strategy & Value",
        description: "End-to-end AI strategy development with measurable ROI frameworks and implementation roadmaps.",
        features: ["ROI assessment", "Technology roadmaps", "Implementation planning"],
        status: "Production Ready"
      },
      {
        title: "Agentic Systems", 
        description: "Autonomous AI agents that operate safely in production environments with human oversight.",
        features: ["Agent orchestration", "Safety protocols", "Human-in-the-loop"],
        status: "Production Ready"
      },
      {
        title: "GenAI Applications",
        description: "Custom generative AI applications built for enterprise scale and compliance.",
        features: ["Custom models", "Enterprise integration", "Compliance frameworks"],
        status: "Production Ready"
      }
    ]
  },
  {
    category: "Knowledge & Data",
    icon: Zap,
    capabilities: [
      {
        title: "RAG & Knowledge",
        description: "Retrieval-augmented generation systems that connect AI to your enterprise knowledge.",
        features: ["Knowledge graphs", "Document processing", "Semantic search"],
        status: "Production Ready"
      },
      {
        title: "Data Platforms",
        description: "Scalable data infrastructure designed for AI workloads and real-time processing.",
        features: ["Real-time processing", "AI-ready pipelines", "Governance frameworks"],
        status: "Production Ready"
      },
      {
        title: "LLMOps & Observability",
        description: "Complete visibility into model performance, costs, and behavior in production.",
        features: ["Performance monitoring", "Cost optimization", "Behavior analysis"],
        status: "Production Ready"
      }
    ]
  },
  {
    category: "Safety & Governance",
    icon: Shield,
    capabilities: [
      {
        title: "Responsible AI",
        description: "Frameworks and tools for building ethical, fair, and transparent AI systems.",
        features: ["Bias detection", "Explainability", "Ethical frameworks"],
        status: "Production Ready"
      },
      {
        title: "Security & Compliance",
        description: "Enterprise-grade security patterns specifically designed for AI systems.",
        features: ["Threat modeling", "Compliance automation", "Security monitoring"],
        status: "Production Ready"
      },
      {
        title: "Sovereign/Private AI",
        description: "On-premises and private cloud AI deployments for maximum data sovereignty.",
        features: ["Private deployment", "Data sovereignty", "Regulatory compliance"],
        status: "Production Ready"
      }
    ]
  },
  {
    category: "Specialized Systems",
    icon: Building2,
    capabilities: [
      {
        title: "Embedded & Edge AI",
        description: "AI systems optimized for edge devices and embedded environments.",
        features: ["Edge optimization", "Low-latency inference", "Hardware integration"],
        status: "Production Ready"
      },
      {
        title: "Robotics & RPA",
        description: "AI-powered robotics and robotic process automation for industrial applications.",
        features: ["Robot control", "Process automation", "Industrial integration"],
        status: "Production Ready"
      },
      {
        title: "Platform Engineering",
        description: "DevOps and platform engineering specifically designed for AI workloads.",
        features: ["CI/CD for ML", "Infrastructure as code", "Scalability patterns"],
        status: "Production Ready"
      }
    ]
  },
  {
    category: "Advanced Research",
    icon: Lightbulb,
    capabilities: [
      {
        title: "Deep Tech Research",
        description: "Cutting-edge research in AI, machine learning, and emerging technologies.",
        features: ["Novel algorithms", "Research partnerships", "Innovation labs"],
        status: "Research Phase"
      },
      {
        title: "Blockchain & Cryptography",
        description: "Secure, decentralized systems with advanced cryptographic protocols.",
        features: ["Smart contracts", "Cryptographic protocols", "Decentralized systems"],
        status: "Production Ready"
      },
      {
        title: "Game Systems",
        description: "AI systems for gaming, simulation, and interactive entertainment.",
        features: ["Game AI", "Procedural generation", "Interactive systems"],
        status: "Production Ready"
      }
    ]
  }
]

const implementationPatterns = [
  {
    title: "Enterprise Integration",
    description: "Seamless integration with existing enterprise systems and workflows.",
    icon: Building2
  },
  {
    title: "Compliance Frameworks", 
    description: "Built-in compliance for GDPR, HIPAA, SOX, and industry-specific regulations.",
    icon: Shield
  },
  {
    title: "Scalability Patterns",
    description: "Proven patterns for scaling from prototype to enterprise-wide deployment.",
    icon: Zap
  },
  {
    title: "Operational Excellence",
    description: "24/7 monitoring, alerting, and automated remediation capabilities.",
    icon: CheckCircle
  }
]

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Capabilities that scale in production</h1>
          <p>
            Battle-tested components and frameworks that power real-world AI systems. Every capability is production-ready 
            with proven deployment patterns, compliance frameworks, and scalability blueprints.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Start Building
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/research" className="btn-secondary">
              View Research
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section">
        <div className="section-content">
          {capabilitiesData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={categoryIndex} className="mb-20">
                <div className="section-header">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <CategoryIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h2 className="section-title">{category.category}</h2>
                  </div>
                </div>
                
                <div className="grid-3">
                  {category.capabilities.map((capability, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          capability.status === 'Production Ready' 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-gray-50 text-gray-600'
                        }`}>
                          {capability.status}
                        </span>
                      </div>
                      
                      <h3 className="card-title">
                        {capability.title}
                      </h3>
                      
                      <p className="card-description mb-6">
                        {capability.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {capability.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <Link 
                          href={`/capabilities/${capability.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                          className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Implementation Patterns */}
      <section className="section-alt">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Implementation Patterns</h2>
            <p className="section-description">
              Proven deployment patterns that reduce risk and accelerate time-to-value. Each pattern includes 
              compliance frameworks, scalability blueprints, and operational runbooks.
            </p>
          </div>
          
          <div className="grid-4">
            {implementationPatterns.map((pattern, index) => {
              const IconComponent = pattern.icon
              return (
                <div key={index} className="card text-center">
                  <div className="p-3 bg-gray-100 rounded-lg w-fit mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="card-title">
                    {pattern.title}
                  </h3>
                  <p className="card-description">
                    {pattern.description}
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
          <h2 className="text-4xl font-normal mb-8 text-white leading-tight">
            Ready to build production-ready AI?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let&apos;s discuss your specific requirements and design a solution that scales with your business.
          </p>
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
