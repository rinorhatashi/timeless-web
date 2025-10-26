"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Shield, Lock, Server, Network, FileCheck, Key, HardDrive,
  Activity, MapPin, Container, Globe, Package
} from 'lucide-react'

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
        title={t('pages.sovereignPrivateAI.sections.overview.title')}
        description={t('pages.sovereignPrivateAI.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.sovereignPrivateAI.sections.overview.content.0')}</p>
          <p>{t('pages.sovereignPrivateAI.sections.overview.content.1')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.sovereignPrivateAI.sections.systemModel.title')}
        description={t('pages.sovereignPrivateAI.sections.systemModel.subtitle')}
        variant="alt"
      >
        <div className="content-prose">
          <p>{t('pages.sovereignPrivateAI.sections.systemModel.description')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.sovereignPrivateAI.sections.outcomes.title')}
        description={t('pages.sovereignPrivateAI.sections.outcomes.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.outcomes.items.residency.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.outcomes.items.residency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.outcomes.items.confidentiality.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.outcomes.items.confidentiality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.outcomes.items.control.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.outcomes.items.control.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/platforms/sovereign-ai-blueprint" className="btn-primary large">
            {t('pages.sovereignPrivateAI.sections.cta')} →
          </Link>
        </div>
      </Section>

      <Section
        title={t('pages.sovereignPrivateAI.sections.deploymentPatterns.title')}
        description={t('pages.sovereignPrivateAI.sections.deploymentPatterns.subtitle')}
        variant="alt"
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <Globe className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.inRegionHosting.title')}</h3>
            <p>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.inRegionHosting.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Container className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.enclaveInference.title')}</h3>
            <p>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.enclaveInference.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Server className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.airGapped.title')}</h3>
            <p>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.airGapped.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Network className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.gatewayControls.title')}</h3>
            <p>{t('pages.sovereignPrivateAI.sections.deploymentPatterns.items.gatewayControls.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.sovereignPrivateAI.sections.securityOps.title')}
        description={t('pages.sovereignPrivateAI.sections.securityOps.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.securityOps.items.identity.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.securityOps.items.identity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.securityOps.items.network.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.securityOps.items.network.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.securityOps.items.observability.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.securityOps.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.securityOps.items.supplyChain.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.securityOps.items.supplyChain.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.securityOps.items.continuity.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.securityOps.items.continuity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.sovereignPrivateAI.sections.securityOps.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.sovereignPrivateAI.sections.securityOps.items.compliance.desc')}</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 