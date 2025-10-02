"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function SovereignPrivateAIPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.sovereignPrivateAI.title')}
      description={t('pages.sovereignPrivateAI.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.sovereignPrivateAI.breadcrumb'), href: '/capabilities/sovereign-private-ai' }
      ]}
    >
      <Section
        title="Data Sovereignty & Privacy"
        description="Residency and control without compromise"
      >
        <div className="content-prose">
          <p>We deploy AI systems with data residency guarantees, including local/air-gapped LLMs, confidential computing, secure enclaves, and policy-aware tool use. Our solutions provide full control for regulated workloads without sacrificing capability.</p>
          <p>Every deployment respects jurisdictional requirements and organizational data governance policies.</p>
        </div>
      </Section>

      <Section
        title="Technical Architecture"
        description="Secure and sovereign AI deployment"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Local LLMs</h3>
            <p>On-premise and air-gapped large language model deployment.</p>
          </div>
          <div className="feature-card">
            <h3>Confidential Computing</h3>
            <p>Encrypted data processing with hardware-based security enclaves.</p>
          </div>
          <div className="feature-card">
            <h3>Data Residency</h3>
            <p>Guaranteed data location compliance for regulatory requirements.</p>
          </div>
          <div className="feature-card">
            <h3>Policy Enforcement</h3>
            <p>Policy-aware AI systems that respect organizational controls.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Regulatory Compliance"
        description="Meeting jurisdiction requirements"
      >
        <div className="content-prose">
          <p>We ensure AI deployments meet regulatory requirements across jurisdictions, including GDPR, data localization laws, and industry-specific regulations. Our solutions maintain full audit trails and provide transparency into data handling.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 