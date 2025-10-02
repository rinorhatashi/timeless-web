"use client"

import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function AgenticSystemsPage() {
  const { t, translations } = useI18n()
  
  // Helper to get arrays from translations
  const getArray = (key: string): string[] => {
    const keys = key.split('.')
    let value: unknown = translations
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k]
      }
    }
    return Array.isArray(value) ? value : []
  }

  return (
    <PageLayout
      title={t('pages.agenticSystems.title')}
      description={t('pages.agenticSystems.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.agenticSystems.breadcrumb'), href: '/capabilities/agentic-systems' }
      ]}
    >
      <Section
        title={t('pages.agenticSystems.overview.title')}
        description={t('pages.agenticSystems.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.agenticSystems.overview.p1')}</p>
          <p>{t('pages.agenticSystems.overview.p2')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.architecture.title')}
        description={t('pages.agenticSystems.architecture.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.architecture.perception.title')}</h4>
            <p>{t('pages.agenticSystems.architecture.perception.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.architecture.reasoning.title')}</h4>
            <p>{t('pages.agenticSystems.architecture.reasoning.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.architecture.actionSpace.title')}</h4>
            <p>{t('pages.agenticSystems.architecture.actionSpace.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.architecture.memory.title')}</h4>
            <p>{t('pages.agenticSystems.architecture.memory.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.architecture.safety.title')}</h4>
            <p>{t('pages.agenticSystems.architecture.safety.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.architecture.humanInterface.title')}</h4>
            <p>{t('pages.agenticSystems.architecture.humanInterface.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.implementation.title')}
        description={t('pages.agenticSystems.implementation.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.agenticSystems.implementation.discovery.title')}
            duration={t('pages.agenticSystems.implementation.discovery.duration')}
            items={getArray('pages.agenticSystems.implementation.discovery.items')}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.implementation.development.title')}
            duration={t('pages.agenticSystems.implementation.development.duration')}
            items={getArray('pages.agenticSystems.implementation.development.items')}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.implementation.deployment.title')}
            duration={t('pages.agenticSystems.implementation.deployment.duration')}
            items={getArray('pages.agenticSystems.implementation.deployment.items')}
          />
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.safety.title')}
        description={t('pages.agenticSystems.safety.subtitle')}
        variant="alt"
      >
        <div className="grid-2">
          <Card
            title={t('pages.agenticSystems.safety.behavioral.title')}
            description={t('pages.agenticSystems.safety.behavioral.desc')}
            features={getArray('pages.agenticSystems.safety.behavioral.features')}
          />
          <Card
            title={t('pages.agenticSystems.safety.monitoring.title')}
            description={t('pages.agenticSystems.safety.monitoring.desc')}
            features={getArray('pages.agenticSystems.safety.monitoring.features')}
          />
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.useCases.title')}
        description={t('pages.agenticSystems.useCases.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.useCases.customerService.title')}</h4>
            <p>{t('pages.agenticSystems.useCases.customerService.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.useCases.processAutomation.title')}</h4>
            <p>{t('pages.agenticSystems.useCases.processAutomation.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.useCases.operations.title')}</h4>
            <p>{t('pages.agenticSystems.useCases.operations.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.agenticSystems.useCases.research.title')}</h4>
            <p>{t('pages.agenticSystems.useCases.research.desc')}</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 