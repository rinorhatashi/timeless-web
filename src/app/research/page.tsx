import Link from 'next/link'
import { ArrowRight, FileText, Users, Target, Shield, Zap, Globe } from 'lucide-react'

const researchAreas = [
  {
    title: 'Agent Safety Aegis',
    description: 'Advanced safety frameworks for autonomous AI agents operating in production environments.',
    status: 'Published',
    icon: Shield,
    href: '/research/agent-safety-aegis',
    category: 'Safety & Security'
  },
  {
    title: 'Agentic RAG',
    description: 'Next-generation retrieval-augmented generation with autonomous agent capabilities.',
    status: 'Published',
    icon: Target,
    href: '/research/agentic-rag',
    category: 'Knowledge Systems'
  },
  {
    title: 'Digital Twins Ops',
    description: 'Operational frameworks for digital twin systems in industrial environments.',
    status: 'Published',
    icon: Zap,
    href: '/research/digital-twins-ops',
    category: 'Industrial AI'
  },
  {
    title: 'LLM Observability',
    description: 'Comprehensive observability patterns for large language models in production.',
    status: 'Published',
    icon: FileText,
    href: '/research/llm-observability',
    category: 'MLOps'
  },
  {
    title: 'Multimodal Real-time',
    description: 'Real-time processing frameworks for multimodal AI systems.',
    status: 'Published',
    icon: Globe,
    href: '/research/multimodal-real-time',
    category: 'Real-time Systems'
  },
  {
    title: 'On-device Inference',
    description: 'Optimization techniques for AI inference on edge devices.',
    status: 'Published',
    icon: Target,
    href: '/research/on-device-inference',
    category: 'Edge AI'
  },
  {
    title: 'Sovereign AI',
    description: 'Frameworks for building AI systems with data sovereignty and privacy.',
    status: 'Published',
    icon: Shield,
    href: '/research/sovereign-ai',
    category: 'Privacy & Security'
  },
  {
    title: 'Trustless Model Sharing',
    description: 'Decentralized approaches to AI model sharing and collaboration.',
    status: 'Published',
    icon: Users,
    href: '/research/trustless-model-sharing',
    category: 'Decentralized AI'
  }
]

const publications = [
  {
    title: 'Agent Safety in Production Environments',
    authors: ['Dr. Sarah Johnson', 'Dr. Michael Chen'],
    venue: 'NeurIPS 2024',
    status: 'Published',
    link: '/research/agent-safety-aegis'
  },
  {
    title: 'Agentic Retrieval-Augmented Generation',
    authors: ['Dr. Emily Rodriguez', 'Dr. James Park'],
    venue: 'ICML 2024',
    status: 'Published',
    link: '/research/agentic-rag'
  },
  {
    title: 'Digital Twins for Operational Excellence',
    authors: ['Dr. Alex Thompson', 'Dr. Lisa Zhang'],
    venue: 'ICRA 2024',
    status: 'Published',
    link: '/research/digital-twins-ops'
  }
]

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Cutting-edge AI research</h1>
          <p>
            Our research drives the future of production AI systems. We publish in top-tier venues 
            and collaborate with leading academic institutions to advance the state of the art.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Collaborate with Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/capabilities" className="btn-secondary">
              View Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Research Areas</h2>
            <p className="section-description">
              Our research spans multiple domains, from safety and security to real-time systems and edge AI. 
              Each area focuses on practical applications for production environments.
            </p>
          </div>
          

          
          <div className="grid-2">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                      {area.status}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {area.category}
                    </span>
                  </div>
                  
                  <h3 className="card-title">
                    {area.title}
                  </h3>
                  
                  <p className="card-description mb-6">
                    {area.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href={area.href}
                      className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      Read research
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Recent Publications</h2>
            <p className="section-description">
              Our latest research published in top-tier academic venues and industry conferences.
            </p>
          </div>
          
          <div className="grid-3">
            {publications.map((publication, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-6 h-6 text-gray-700" />
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {publication.status}
                  </span>
                </div>
                
                <h3 className="card-title">
                  {publication.title}
                </h3>
                
                <div className="text-sm text-gray-600 mb-4">
                  <p className="mb-1">
                    <strong>Authors:</strong> {publication.authors.join(', ')}
                  </p>
                  <p>
                    <strong>Venue:</strong> {publication.venue}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <Link 
                    href={publication.link}
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Read paper
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="section">
        <div className="section-content">
          <div className="section-header text-center">
            <h2 className="section-title">Research Impact</h2>
            <p className="section-description">
              Our research drives real-world applications and contributes to the advancement of AI safety and reliability.
            </p>
          </div>
          
          <div className="grid-4">
            <div className="card text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Production Systems</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Citations</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--primary-black)', color: 'var(--primary-white)' }}>
        <div className="section-content text-center">
          <h2 className="text-4xl font-normal mb-8 text-white leading-tight">
            Ready to collaborate on research?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Partner with us on cutting-edge AI research that drives real-world impact and innovation.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start collaboration →
          </Link>
        </div>
      </section>
    </>
  )
}
