"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { Database, Search, Brain, Zap, CheckCircle, FileText, Network, Settings } from 'lucide-react'

const features = [
  {
    title: "Knowledge Integration",
    description: "Connect and orchestrate multiple knowledge sources for comprehensive information retrieval.",
    icon: Database
  },
  {
    title: "Intelligent Retrieval",
    description: "Advanced semantic search and retrieval algorithms that understand context and intent.",
    icon: Search
  },
  {
    title: "Generation Pipeline",
    description: "Sophisticated generation pipeline that produces accurate, contextual responses.",
    icon: Brain
  },
  {
    title: "Real-time Processing",
    description: "Low-latency processing for interactive applications and real-time use cases.",
    icon: Zap
  }
]

const capabilities = [
  "Multi-source knowledge integration",
  "Semantic search and retrieval",
  "Context-aware generation",
  "Source attribution and traceability",
  "Real-time knowledge updates",
  "Custom embedding models",
  "Performance optimization",
  "Enterprise security controls"
]

const useCases = [
  {
    title: "Enterprise Knowledge Management",
    description: "Transform internal documents and knowledge bases into interactive, searchable AI assistants."
  },
  {
    title: "Customer Support Automation",
    description: "Provide accurate, context-aware responses to customer inquiries using company knowledge."
  },
  {
    title: "Research & Analysis",
    description: "Accelerate research workflows by querying and synthesizing information from multiple sources."
  },
  {
    title: "Content Creation",
    description: "Generate high-quality content grounded in authoritative sources and company knowledge."
  }
]

const architecture = [
  {
    title: "Data Ingestion",
    description: "Automated ingestion and processing of documents, databases, and knowledge sources",
    icon: FileText
  },
  {
    title: "Vector Storage",
    description: "Optimized vector storage and indexing for fast semantic search and retrieval",
    icon: Database
  },
  {
    title: "Orchestration Layer",
    description: "Intelligent orchestration that coordinates retrieval and generation processes",
    icon: Network
  },
  {
    title: "Generation Engine",
    description: "Advanced language models that generate accurate, contextual responses",
    icon: Settings
  }
]

export default function RAGOrchestratorPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.ragOrchestrator.title')}
      description={t('pages.ragOrchestrator.description')}
      breadcrumbs={[
        { label: t('navigation.platforms'), href: '/platforms' },
        { label: t('pages.ragOrchestrator.breadcrumb'), href: '/platforms/rag-orchestrator' }
      ]}
    >
      <Section
        title="Knowledge-Driven AI"
        description="Transform your enterprise knowledge into intelligent, interactive systems that provide accurate, contextual responses grounded in your data."
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
          <h2 className="section-title">Platform Architecture</h2>
          <p className="section-description">
            End-to-end pipeline for knowledge retrieval and generation
          </p>
        </div>
        
        <div className="grid-2">
          {architecture.map((component, index) => {
            const IconComponent = component.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="card-title">
                    {component.title}
                  </h3>
                </div>
                <p className="card-description">
                  {component.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>How RAG Orchestrator Works</h2>
          <p>
            Our RAG Orchestrator platform combines advanced retrieval techniques with powerful 
            generation capabilities to create AI systems that can access, understand, and 
            synthesize information from your enterprise knowledge sources.
          </p>

          <h3>Knowledge Ingestion & Processing</h3>
          <p>
            Automatically ingest and process documents, databases, and knowledge sources. 
            Our platform handles various formats and data types, creating rich semantic 
            representations that enable sophisticated retrieval.
          </p>

          <h3>Intelligent Retrieval</h3>
          <p>
            Advanced semantic search capabilities that go beyond keyword matching to understand 
            context, intent, and relationships between concepts. The system retrieves the most 
            relevant information for each query.
          </p>

          <h3>Context-Aware Generation</h3>
          <p>
            Generate responses that are grounded in retrieved knowledge while maintaining 
            accuracy, relevance, and appropriate tone. Built-in source attribution ensures 
            transparency and traceability.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Platform Capabilities</h2>
          <p className="section-description">
            Comprehensive features for enterprise knowledge management and AI applications
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
        <div className="text-center mb-12">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-description">
            Real-world applications of RAG Orchestrator across industries
          </p>
        </div>
        
        <div className="grid-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {useCase.title}
              </h3>
              <p className="card-description">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to unlock your knowledge?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Transform your enterprise knowledge into intelligent AI applications with our RAG Orchestrator platform.
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