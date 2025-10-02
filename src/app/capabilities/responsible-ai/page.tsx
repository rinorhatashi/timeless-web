"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function ResponsibleAIPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.responsibleAI.title')}
      description={t('pages.responsibleAI.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.responsibleAI.breadcrumb'), href: '/capabilities/responsible-ai' }
      ]}
    >
      <Section
        title="Responsible AI Framework"
        description="Policies, audits, and accountable operations"
      >
        <div className="content-prose">
          <p>We provide comprehensive policy kits, model risk registries, lineage tracking, audit frameworks, red-team harnesses, and incident playbooks. Our governance approach enables delivery rather than blocking it.</p>
          <p>Every AI system includes built-in accountability mechanisms and transparent decision-making processes.</p>
        </div>
      </Section>

      <Section
        title="Governance Components"
        description="End-to-end responsible AI practices"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Policy Frameworks</h3>
            <p>Comprehensive policies for ethical AI development and deployment.</p>
          </div>
          <div className="feature-card">
            <h3>Risk Registry</h3>
            <p>Model risk assessment and ongoing monitoring systems.</p>
          </div>
          <div className="feature-card">
            <h3>Audit & Compliance</h3>
            <p>Automated auditing tools and compliance reporting.</p>
          </div>
          <div className="feature-card">
            <h3>Incident Response</h3>
            <p>Playbooks for handling AI-related incidents and failures.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Continuous Monitoring"
        description="Ongoing oversight and improvement"
      >
        <div className="content-prose">
          <p>Our responsible AI framework includes continuous monitoring of model behavior, bias detection, fairness metrics, and impact assessment. We provide tools for ongoing evaluation and improvement of AI systems in production.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 