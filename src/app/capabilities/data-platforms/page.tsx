"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Database, Layers, Zap, Package, Shield, Activity, GitBranch, Cloud, Lock, TrendingUp, 
  DollarSign, BarChart3, FileCode, Link as LinkIcon, Boxes, Server, Target, Key, Eye,
  CheckCircle2, AlertTriangle, RefreshCw, HardDrive, FileSearch, GitCompare, Gauge,
  Users, Settings, BarChart, Clock, Cpu, Network
} from 'lucide-react'

export default function DataPlatformsPage() {
  const { t } = useI18n()
  
  const overviewContent = t('pages.dataPlatforms.sections.overview.content', { returnObjects: true })
  const contentArray = Array.isArray(overviewContent) ? overviewContent : []
  
  // Safe array extraction for TimelinePhase items
  const consentItems = t('pages.dataPlatforms.sections.privacy.phases.consent.items', { returnObjects: true })
  const privacyTechItems = t('pages.dataPlatforms.sections.privacy.phases.privacyTech.items', { returnObjects: true })
  const cleanRoomsItems = t('pages.dataPlatforms.sections.privacy.phases.cleanRooms.items', { returnObjects: true })
  const slosItems = t('pages.dataPlatforms.sections.reliability.phases.slos.items', { returnObjects: true })
  const qualityItems = t('pages.dataPlatforms.sections.reliability.phases.quality.items', { returnObjects: true })
  const drItems = t('pages.dataPlatforms.sections.reliability.phases.dr.items', { returnObjects: true })
  const cloudNativeItems = t('pages.dataPlatforms.sections.deployment.phases.cloudNative.items', { returnObjects: true })
  const hybridItems = t('pages.dataPlatforms.sections.deployment.phases.hybrid.items', { returnObjects: true })
  const sovereignItems = t('pages.dataPlatforms.sections.deployment.phases.sovereign.items', { returnObjects: true })

  return (
    <PageLayout
      title={t('pages.dataPlatforms.title')}
      description={t('pages.dataPlatforms.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.dataPlatforms.breadcrumb'), href: '/capabilities/data-platforms' }
      ]}
    >
      <Section
        title={t('pages.dataPlatforms.sections.overview.title')}
        description={t('pages.dataPlatforms.sections.overview.subtitle')}
      >
        <div className="content-prose">
          {contentArray.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.refStack.title')}
        description={t('pages.dataPlatforms.sections.refStack.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.refStack.items.ingestion.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.refStack.items.ingestion.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.refStack.items.storage.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.refStack.items.storage.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.refStack.items.processing.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.refStack.items.processing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.refStack.items.featureStore.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.refStack.items.featureStore.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.refStack.items.access.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.refStack.items.access.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.refStack.items.activation.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.refStack.items.activation.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.streaming.title')}
        description={t('pages.dataPlatforms.sections.streaming.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <LinkIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.streaming.items.connectors.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.streaming.items.connectors.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.streaming.items.contracts.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.streaming.items.contracts.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Boxes className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.streaming.items.buffering.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.streaming.items.buffering.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.streaming.items.multitenancy.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.streaming.items.multitenancy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.streaming.items.observability.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.streaming.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.streaming.items.edge.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.streaming.items.edge.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.lakehouse.title')}
        description={t('pages.dataPlatforms.sections.lakehouse.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.lakehouse.items.formats.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.lakehouse.items.formats.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitCompare className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.lakehouse.items.compaction.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.lakehouse.items.compaction.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.lakehouse.items.tiers.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.lakehouse.items.tiers.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileSearch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.lakehouse.items.indexes.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.lakehouse.items.indexes.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.lakehouse.items.security.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.lakehouse.items.security.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.lakehouse.items.deletes.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.lakehouse.items.deletes.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.processing.title')}
        description={t('pages.dataPlatforms.sections.processing.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.processing.items.engines.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.processing.items.engines.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.processing.items.orchestration.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.processing.items.orchestration.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.processing.items.quality.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.processing.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.processing.items.semantic.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.processing.items.semantic.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.processing.items.observability.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.processing.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.processing.items.devex.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.processing.items.devex.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.featureStore.title')}
        description={t('pages.dataPlatforms.sections.featureStore.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.featureStore.items.offline.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.featureStore.items.offline.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.featureStore.items.online.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.featureStore.items.online.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.featureStore.items.materialization.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.featureStore.items.materialization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.featureStore.items.joinCorrectness.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.featureStore.items.joinCorrectness.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.featureStore.items.modelRegistry.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.featureStore.items.modelRegistry.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.featureStore.items.edge.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.featureStore.items.edge.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.governance.title')}
        description={t('pages.dataPlatforms.sections.governance.subtitle')}
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <GitBranch className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.dataPlatforms.sections.governance.items.catalog.title')}</h3>
            <p>{t('pages.dataPlatforms.sections.governance.items.catalog.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Lock className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.dataPlatforms.sections.governance.items.privacy.title')}</h3>
            <p>{t('pages.dataPlatforms.sections.governance.items.privacy.desc')}</p>
          </div>
          <div className="deliverable-item">
            <CheckCircle2 className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.dataPlatforms.sections.governance.items.quality.title')}</h3>
            <p>{t('pages.dataPlatforms.sections.governance.items.quality.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Shield className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.dataPlatforms.sections.governance.items.cleanRooms.title')}</h3>
            <p>{t('pages.dataPlatforms.sections.governance.items.cleanRooms.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.privacy.title')}
        description={t('pages.dataPlatforms.sections.privacy.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.privacy.phases.consent.title')}
            duration={t('pages.dataPlatforms.sections.privacy.phases.consent.duration')}
            items={Array.isArray(consentItems) ? consentItems : []}
          />
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.privacy.phases.privacyTech.title')}
            duration={t('pages.dataPlatforms.sections.privacy.phases.privacyTech.duration')}
            items={Array.isArray(privacyTechItems) ? privacyTechItems : []}
          />
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.privacy.phases.cleanRooms.title')}
            duration={t('pages.dataPlatforms.sections.privacy.phases.cleanRooms.duration')}
            items={Array.isArray(cleanRoomsItems) ? cleanRoomsItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.security.title')}
        description={t('pages.dataPlatforms.sections.security.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.security.items.encryption.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.security.items.encryption.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.security.items.access.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.security.items.access.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.security.items.audit.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.security.items.audit.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.security.items.secrets.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.security.items.secrets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.security.items.network.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.security.items.network.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.security.items.incident.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.security.items.incident.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.reliability.title')}
        description={t('pages.dataPlatforms.sections.reliability.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.reliability.phases.slos.title')}
            duration={t('pages.dataPlatforms.sections.reliability.phases.slos.duration')}
            items={Array.isArray(slosItems) ? slosItems : []}
          />
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.reliability.phases.quality.title')}
            duration={t('pages.dataPlatforms.sections.reliability.phases.quality.duration')}
            items={Array.isArray(qualityItems) ? qualityItems : []}
          />
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.reliability.phases.dr.title')}
            duration={t('pages.dataPlatforms.sections.reliability.phases.dr.duration')}
            items={Array.isArray(drItems) ? drItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.finops.title')}
        description={t('pages.dataPlatforms.sections.finops.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.finops.items.costing.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.finops.items.costing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.finops.items.optimization.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.finops.items.optimization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.finops.items.budgets.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.finops.items.budgets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.finops.items.showback.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.finops.items.showback.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.kpis.title')}
        description={t('pages.dataPlatforms.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.kpis.items.freshness.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.kpis.items.freshness.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.kpis.items.quality.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.kpis.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.kpis.items.performance.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.kpis.items.performance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.kpis.items.adoption.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.kpis.items.adoption.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.kpis.items.reliability.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.kpis.items.reliability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.dataPlatforms.sections.kpis.items.cost.title')}</h4>
            </div>
            <p>{t('pages.dataPlatforms.sections.kpis.items.cost.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.dataPlatforms.sections.deployment.title')}
        description={t('pages.dataPlatforms.sections.deployment.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.deployment.phases.cloudNative.title')}
            duration={t('pages.dataPlatforms.sections.deployment.phases.cloudNative.duration')}
            items={Array.isArray(cloudNativeItems) ? cloudNativeItems : []}
          />
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.deployment.phases.hybrid.title')}
            duration={t('pages.dataPlatforms.sections.deployment.phases.hybrid.duration')}
            items={Array.isArray(hybridItems) ? hybridItems : []}
          />
          <TimelinePhase
            title={t('pages.dataPlatforms.sections.deployment.phases.sovereign.title')}
            duration={t('pages.dataPlatforms.sections.deployment.phases.sovereign.duration')}
            items={Array.isArray(sovereignItems) ? sovereignItems : []}
          />
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.dataPlatforms.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
