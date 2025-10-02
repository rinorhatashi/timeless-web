"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Globe, Database, FileCheck, Eye, Server } from 'lucide-react'

export default function SovereignAIBlueprintPage() {
  const { t } = useI18n()
  
  const features = [
    {
      title: t('pages.sovereignAIBlueprint.features.dataResidency.title'),
      description: t('pages.sovereignAIBlueprint.features.dataResidency.desc'),
      icon: Database
    },
    {
      title: t('pages.sovereignAIBlueprint.features.privateInfra.title'),
      description: t('pages.sovereignAIBlueprint.features.privateInfra.desc'),
      icon: Server
    },
    {
      title: t('pages.sovereignAIBlueprint.features.compliance.title'),
      description: t('pages.sovereignAIBlueprint.features.compliance.desc'),
      icon: FileCheck
    },
    {
      title: t('pages.sovereignAIBlueprint.features.transparency.title'),
      description: t('pages.sovereignAIBlueprint.features.transparency.desc'),
      icon: Eye
    }
  ]

  const components = [
    t('pages.sovereignAIBlueprint.components.item1'),
    t('pages.sovereignAIBlueprint.components.item2'),
    t('pages.sovereignAIBlueprint.components.item3'),
    t('pages.sovereignAIBlueprint.components.item4'),
    t('pages.sovereignAIBlueprint.components.item5'),
    t('pages.sovereignAIBlueprint.components.item6'),
    t('pages.sovereignAIBlueprint.components.item7'),
    t('pages.sovereignAIBlueprint.components.item8')
  ]

  const useCases = [
    {
      title: t('pages.sovereignAIBlueprint.useCases.government.title'),
      description: t('pages.sovereignAIBlueprint.useCases.government.desc')
    },
    {
      title: t('pages.sovereignAIBlueprint.useCases.finance.title'),
      description: t('pages.sovereignAIBlueprint.useCases.finance.desc')
    },
    {
      title: t('pages.sovereignAIBlueprint.useCases.healthcare.title'),
      description: t('pages.sovereignAIBlueprint.useCases.healthcare.desc')
    },
    {
      title: t('pages.sovereignAIBlueprint.useCases.defense.title'),
      description: t('pages.sovereignAIBlueprint.useCases.defense.desc')
    }
  ]

  const benefits = [
    {
      title: t('pages.sovereignAIBlueprint.benefits.control.title'),
      description: t('pages.sovereignAIBlueprint.benefits.control.desc'),
      icon: Shield
    },
    {
      title: t('pages.sovereignAIBlueprint.benefits.compliance.title'),
      description: t('pages.sovereignAIBlueprint.benefits.compliance.desc'),
      icon: FileCheck
    },
    {
      title: t('pages.sovereignAIBlueprint.benefits.security.title'),
      description: t('pages.sovereignAIBlueprint.benefits.security.desc'),
      icon: Lock
    },
    {
      title: t('pages.sovereignAIBlueprint.benefits.independence.title'),
      description: t('pages.sovereignAIBlueprint.benefits.independence.desc'),
      icon: Globe
    }
  ]
  
  return (
    <PageLayout
      title={t('pages.sovereignAIBlueprint.title')}
      description={t('pages.sovereignAIBlueprint.description')}
      breadcrumbs={[
        { label: t('navigation.platforms'), href: '/platforms' },
        { label: t('pages.sovereignAIBlueprint.breadcrumb'), href: '/platforms/sovereign-ai-blueprint' }
      ]}
    >
      <Section
        title={t('pages.sovereignAIBlueprint.intro.title')}
        description={t('pages.sovereignAIBlueprint.intro.subtitle')}
      >
        <div className="grid-2">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <feature.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={t('pages.sovereignAIBlueprint.components.title')}
        description={t('pages.sovereignAIBlueprint.components.subtitle')}
      >
        <div className="grid-3">
          {components.map((component, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-base">{component}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={t('pages.sovereignAIBlueprint.useCases.title')}
        description={t('pages.sovereignAIBlueprint.useCases.subtitle')}
      >
        <div className="grid-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{useCase.title}</h3>
              <p className="card-description">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={t('pages.sovereignAIBlueprint.benefits.title')}
        description={t('pages.sovereignAIBlueprint.benefits.subtitle')}
      >
        <div className="grid-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <benefit.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="card-title">{benefit.title}</h3>
              <p className="card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">{t('pages.sovereignAIBlueprint.cta.title')}</h2>
            <p className="cta-description">{t('pages.sovereignAIBlueprint.cta.subtitle')}</p>
            <Link href="/contact" className="btn-primary">
              {t('pages.sovereignAIBlueprint.cta.button')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 