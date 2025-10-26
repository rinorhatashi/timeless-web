"use client"

import Link from 'next/link'
import { 
  Target, Cpu, Zap, Shield, Heart, Car, Factory, GraduationCap, 
  Users, Building2, Brain, Lock, Wrench, Gamepad2, 
  Microchip, Layers, Search, BarChart3, Leaf, 
  Zap as Energy, ShoppingCart, Tv
} from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

interface ShowcaseItem {
  id: string
  title: string
  word: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const ElegantShowcase = () => {
  const { t } = useI18n()

  const capabilities: ShowcaseItem[] = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy & Value',
      word: 'Strategy',
      href: '/capabilities/ai-strategy-value',
      icon: Target
    },
    {
      id: 'agentic-systems',
      title: 'Agentic Systems',
      word: 'Autonomy',
      href: '/capabilities/agentic-systems',
      icon: Brain
    },
    {
      id: 'genai-apps',
      title: 'GenAI Applications',
      word: 'Creation',
      href: '/capabilities/genai-apps',
      icon: Zap
    },
    {
      id: 'rag-knowledge',
      title: 'RAG Knowledge Orchestration',
      word: 'Intelligence',
      href: '/capabilities/rag-knowledge-orchestration',
      icon: Search
    },
    {
      id: 'llmops-observability',
      title: 'LLMOps & Observability',
      word: 'Monitoring',
      href: '/capabilities/llmops-observability',
      icon: BarChart3
    },
    {
      id: 'responsible-ai',
      title: 'Responsible AI',
      word: 'Ethics',
      href: '/capabilities/responsible-ai',
      icon: Shield
    },
    {
      id: 'sovereign-private-ai',
      title: 'Sovereign/Private AI',
      word: 'Privacy',
      href: '/capabilities/sovereign-private-ai',
      icon: Lock
    },
    {
      id: 'talent-enablement',
      title: 'Talent & Enablement',
      word: 'Growth',
      href: '/capabilities/talent-enablement',
      icon: Users
    },
    {
      id: 'embedded-edge-ai',
      title: 'Embedded & Edge AI',
      word: 'Edge',
      href: '/capabilities/embedded-edge-ai',
      icon: Microchip
    },
    {
      id: 'data-platforms',
      title: 'Data Platforms',
      word: 'Scale',
      href: '/capabilities/data-platforms',
      icon: Cpu
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      word: 'Protection',
      href: '/capabilities/security-compliance',
      icon: Shield
    },
    {
      id: 'robotics-rpa',
      title: 'Robotics & RPA',
      word: 'Automation',
      href: '/capabilities/robotics-rpa',
      icon: Wrench
    },
    {
      id: 'platform-engineering',
      title: 'Platform Engineering',
      word: 'Infrastructure',
      href: '/capabilities/platform-engineering',
      icon: Layers
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software',
      word: 'Enterprise',
      href: '/capabilities/enterprise-software',
      icon: Building2
    },
    {
      id: 'blockchain-cryptography',
      title: 'Blockchain & Cryptography',
      word: 'Trust',
      href: '/capabilities/blockchain-cryptography',
      icon: Lock
    },
    {
      id: 'game-systems',
      title: 'Game Systems',
      word: 'Gaming',
      href: '/capabilities/game-systems',
      icon: Gamepad2
    },
    {
      id: 'hardware-prototyping',
      title: 'Hardware Prototyping',
      word: 'Hardware',
      href: '/capabilities/hardware-prototyping',
      icon: Microchip
    },
    {
      id: 'deep-tech-research',
      title: 'Deep Tech Research',
      word: 'Research',
      href: '/capabilities/deep-tech-research',
      icon: Brain
    }
  ]

  const industries: ShowcaseItem[] = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      word: 'Care',
      href: '/industries/health',
      icon: Heart
    },
    {
      id: 'automotive',
      title: 'Automotive',
      word: 'Mobility',
      href: '/industries/automotive',
      icon: Car
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      word: 'Precision',
      href: '/industries/industrial',
      icon: Factory
    },
    {
      id: 'energy',
      title: 'Energy',
      word: 'Power',
      href: '/industries/energy',
      icon: Energy
    },
    {
      id: 'high-tech',
      title: 'High Tech',
      word: 'Innovation',
      href: '/industries/high-tech',
      icon: Microchip
    },
    {
      id: 'public-sector',
      title: 'Public Sector',
      word: 'Service',
      href: '/industries/public-sector',
      icon: GraduationCap
    },
    {
      id: 'retail-cpg',
      title: 'Retail & CPG',
      word: 'Commerce',
      href: '/industries/retail-cpg',
      icon: ShoppingCart
    },
    {
      id: 'software-platforms',
      title: 'Software Platforms',
      word: 'Platforms',
      href: '/industries/software-platforms',
      icon: Layers
    },
    {
      id: 'telco-media',
      title: 'Telco & Media',
      word: 'Connectivity',
      href: '/industries/telco-media',
      icon: Tv
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      word: 'Growth',
      href: '/industries/agriculture',
      icon: Leaf
    }
  ]

  return (
    <>
      {/* Capabilities Showcase */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">{t('homepage.showcase.capabilities.title')}</h2>
            <p className="section-description">
              {t('homepage.showcase.capabilities.subtitle')}
            </p>
          </div>
          
          <div className="showcase-grid">
            {capabilities.map((capability) => {
              const IconComponent = capability.icon
              return (
                <Link key={capability.id} href={capability.href} className="showcase-item">
                  <div className="showcase-icon">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="showcase-content">
                    <h3 className="showcase-title">{capability.title}</h3>
                    <div className="showcase-tag">#{capability.word}</div>
                  </div>
                </Link>
              )
            })}
          </div>
          
          <div className="section-cta">
            <Link href="/capabilities" className="btn-primary">
              {t('homepage.showcase.capabilities.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">{t('homepage.showcase.industries.title')}</h2>
            <p className="section-description">
              {t('homepage.showcase.industries.subtitle')}
            </p>
          </div>
          
          <div className="showcase-grid">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <Link key={industry.id} href={industry.href} className="showcase-item">
                  <div className="showcase-icon">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="showcase-content">
                    <h3 className="showcase-title">{industry.title}</h3>
                    <div className="showcase-tag">#{industry.word}</div>
                  </div>
                </Link>
              )
            })}
          </div>
          
          <div className="section-cta">
            <Link href="/industries" className="btn-primary">
              {t('homepage.showcase.industries.viewAll')} →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
