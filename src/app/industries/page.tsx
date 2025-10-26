import Link from 'next/link'
import { ArrowRight, Building2, Heart, Shield, Laptop, Car, Zap as Energy, Wheat, Phone, ShoppingBag, Landmark, CheckCircle } from 'lucide-react'

const industries = [
  {
    title: "Industrial & Manufacturing",
    description: "AI-powered automation, predictive maintenance, and quality control systems for modern manufacturing.",
    useCases: ["Predictive maintenance", "Quality automation", "Supply chain optimization"],
    compliance: ["ISO 27001", "IEC 62443", "NIST Framework"],
    icon: Building2,
    href: "/industries/industrial"
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant AI systems for diagnostics, patient care, and operational efficiency.",
    useCases: ["Clinical decision support", "Medical imaging", "Drug discovery"],
    compliance: ["HIPAA", "FDA 21 CFR Part 11", "ISO 13485"],
    icon: Heart,
    href: "/industries/health"
  },
  {
    title: "Financial Services",
    description: "Secure AI for fraud detection, risk assessment, and algorithmic trading.",
    useCases: ["Fraud detection", "Risk modeling", "Algorithmic trading"],
    compliance: ["SOX", "PCI DSS", "Basel III"],
    icon: Shield,
    href: "/industries/financial"
  },
  {
    title: "Automotive",
    description: "AI systems for autonomous vehicles, manufacturing, and connected car platforms.",
    useCases: ["Autonomous driving", "Predictive maintenance", "Connected services"],
    compliance: ["ISO 26262", "UNECE WP.29", "GDPR"],
    icon: Car,
    href: "/industries/automotive"
  },
  {
    title: "Energy",
    description: "AI for renewable energy optimization, grid management, and predictive maintenance.",
    useCases: ["Grid optimization", "Renewable forecasting", "Asset management"],
    compliance: ["NERC CIP", "IEC 61850", "ISO 50001"],
    icon: Energy,
    href: "/industries/energy"
  },
  {
    title: "High Tech",
    description: "AI infrastructure and platforms for technology companies building the next generation.",
    useCases: ["Platform engineering", "Developer tools", "AI acceleration"],
    compliance: ["SOC 2", "ISO 27001", "GDPR"],
    icon: Laptop,
    href: "/industries/high-tech"
  },
  {
    title: "Agriculture",
    description: "Precision agriculture with AI-driven crop monitoring and yield optimization.",
    useCases: ["Crop monitoring", "Yield prediction", "Resource optimization"],
    compliance: ["USDA Organic", "GAP Certification", "Environmental"],
    icon: Wheat,
    href: "/industries/agriculture"
  },
  {
    title: "Telecommunications",
    description: "AI for network optimization, customer service, and next-generation connectivity.",
    useCases: ["Network optimization", "Customer analytics", "5G/6G infrastructure"],
    compliance: ["GDPR", "CCPA", "Telecoms regulations"],
    icon: Phone,
    href: "/industries/telco-media"
  },
  {
    title: "Retail & CPG",
    description: "AI-driven personalization, inventory management, and supply chain optimization.",
    useCases: ["Personalization", "Demand forecasting", "Supply chain"],
    compliance: ["PCI DSS", "GDPR", "CCPA"],
    icon: ShoppingBag,
    href: "/industries/retail-cpg"
  },
  {
    title: "Public Sector",
    description: "Government-grade AI solutions with maximum security and transparency.",
    useCases: ["Citizen services", "Data analytics", "Operational efficiency"],
    compliance: ["FedRAMP", "FISMA", "NIST SP 800-53"],
    icon: Landmark,
    href: "/industries/public-sector"
  }
]

const successMetrics = [
  {
    metric: "97%",
    description: "Reduction in false positives",
    industry: "Financial Services"
  },
  {
    metric: "45%",
    description: "Decrease in unplanned downtime",
    industry: "Manufacturing"
  },
  {
    metric: "32%",
    description: "Improvement in diagnostic accuracy",
    industry: "Healthcare"
  },
  {
    metric: "60%",
    description: "Increase in energy efficiency",
    industry: "Energy"
  }
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Real implementations across industries</h1>
          <p>
            Production AI systems delivering measurable value across diverse industries. Each implementation 
            includes compliance frameworks, scalability patterns, and proven ROI metrics.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Discuss Your Industry
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/capabilities" className="btn-secondary">
              View Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Proven Results</h2>
            <p className="section-description">
              Real metrics from production deployments across industries. These aren't projections—they're 
              actual results from systems running in production today.
            </p>
          </div>
          
          <div className="grid-4">
            {successMetrics.map((item, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {item.metric}
                </h3>
                <p className="text-gray-600 mb-3">
                  {item.description}
                </p>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  {item.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-description">
              AI solutions tailored for specific industry requirements, compliance standards, and operational needs.
            </p>
          </div>
          
          <div className="grid-3">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="card-title">
                      {industry.title}
                    </h3>
                  </div>
                  
                  <p className="card-description mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Use Cases:</h4>
                      <div className="space-y-1">
                        {industry.useCases.map((useCase, useCaseIndex) => (
                          <div key={useCaseIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Compliance Standards:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.compliance.map((standard, standardIndex) => (
                          <span 
                            key={standardIndex} 
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {standard}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href={industry.href}
                      className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      View case studies
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-description">
              Industry-specific implementation methodology that reduces risk and accelerates time-to-value. 
              Every deployment follows proven patterns with built-in compliance and scalability.
            </p>
          </div>
          
          <div className="grid-2">
            <div className="card">
              <h3 className="card-title">Discovery & Assessment</h3>
              <p className="card-description">
                Deep dive into your industry requirements, compliance needs, and existing infrastructure. 
                We identify opportunities for AI integration that deliver immediate value.
              </p>
            </div>
            
            <div className="card">
              <h3 className="card-title">Compliance-First Design</h3>
              <p className="card-description">
                Every system is designed with industry regulations and compliance requirements from day one. 
                No retrofitting—compliance is built into the architecture.
              </p>
            </div>
            
            <div className="card">
              <h3 className="card-title">Phased Implementation</h3>
              <p className="card-description">
                Gradual rollout with measurable milestones and risk mitigation at each phase. 
                Prove value early and scale systematically.
              </p>
            </div>
            
            <div className="card">
              <h3 className="card-title">Production Hardening</h3>
              <p className="card-description">
                24/7 monitoring, automated scaling, and comprehensive observability ensure your systems 
                run reliably in production environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--primary-black)', color: 'var(--primary-white)' }}>
        <div className="section-content text-center">
          <h2 className="text-4xl font-normal mb-8 text-white leading-tight">
            Ready to transform your industry?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let's discuss how AI can deliver measurable value in your specific industry context.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start the discussion →
          </Link>
        </div>
      </section>
    </>
  )
}
