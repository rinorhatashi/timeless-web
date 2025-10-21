"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Layers, GitBranch, Globe, Database, Cloud, Activity, Map, FileCode, Zap,
  Network, Lock, TrendingUp, Package, Shield, TestTube, FileCheck, GitCompare,
  Target, BarChart3, DollarSign, Award, FileText, Server, CheckCircle2,
  Key, AlertCircle, Settings, Code, Users, Gauge, Box
} from 'lucide-react'

export default function EnterpriseSoftwarePage() {
  const { t, tObject } = useI18n()

  const overviewContent = tObject('pages.enterpriseSoftware.sections.overview.content')
  const archItems = tObject('pages.enterpriseSoftware.sections.practices.phases.architecture.items')
  const deliveryItems = tObject('pages.enterpriseSoftware.sections.practices.phases.delivery.items')
  const opsItems = tObject('pages.enterpriseSoftware.sections.practices.phases.operations.items')
  const slosItems = tObject('pages.enterpriseSoftware.sections.reliability.phases.slos.items')
  const capacityItems = tObject('pages.enterpriseSoftware.sections.reliability.phases.capacity.items')
  const resilienceItems = tObject('pages.enterpriseSoftware.sections.reliability.phases.resilience.items')
  
  return (
    <PageLayout
      title={t('pages.enterpriseSoftware.title')}
      description={t('pages.enterpriseSoftware.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.enterpriseSoftware.breadcrumb'), href: '/capabilities/enterprise-software' }
      ]}
    >
      <Section
        title={t('pages.enterpriseSoftware.sections.overview.title')}
        description={t('pages.enterpriseSoftware.sections.overview.subtitle')}
      >
        <div className="content-prose">
          {Array.isArray(overviewContent) && overviewContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.refArchitecture.title')}
        description={t('pages.enterpriseSoftware.sections.refArchitecture.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.refArchitecture.items.serviceLayer.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.refArchitecture.items.serviceLayer.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.refArchitecture.items.eventing.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.refArchitecture.items.eventing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.refArchitecture.items.apiPlatform.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.refArchitecture.items.apiPlatform.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.refArchitecture.items.dataLayer.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.refArchitecture.items.dataLayer.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.refArchitecture.items.opsRuntime.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.refArchitecture.items.opsRuntime.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.refArchitecture.items.observability.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.refArchitecture.items.observability.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.practices.title')}
        description={t('pages.enterpriseSoftware.sections.practices.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.enterpriseSoftware.sections.practices.phases.architecture.title')}
            duration={t('pages.enterpriseSoftware.sections.practices.phases.architecture.duration')}
            items={Array.isArray(archItems) ? archItems : []}
          />
          <TimelinePhase
            title={t('pages.enterpriseSoftware.sections.practices.phases.delivery.title')}
            duration={t('pages.enterpriseSoftware.sections.practices.phases.delivery.duration')}
            items={Array.isArray(deliveryItems) ? deliveryItems : []}
          />
          <TimelinePhase
            title={t('pages.enterpriseSoftware.sections.practices.phases.operations.title')}
            duration={t('pages.enterpriseSoftware.sections.practices.phases.operations.duration')}
            items={Array.isArray(opsItems) ? opsItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.domainModeling.title')}
        description={t('pages.enterpriseSoftware.sections.domainModeling.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Map className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.domainModeling.items.contextMaps.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.domainModeling.items.contextMaps.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.domainModeling.items.apiContracts.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.domainModeling.items.apiContracts.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.domainModeling.items.eventSchemas.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.domainModeling.items.eventSchemas.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.domainModeling.items.dataProducts.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.domainModeling.items.dataProducts.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.domainModeling.items.policyInterfaces.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.domainModeling.items.policyInterfaces.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.domainModeling.items.errorTaxonomies.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.domainModeling.items.errorTaxonomies.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.eventingPatterns.title')}
        description={t('pages.enterpriseSoftware.sections.eventingPatterns.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Box className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.outboxInbox.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.outboxInbox.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.commandEvent.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.commandEvent.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitCompare className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.replay.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.replay.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.workflow.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.workflow.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.backpressure.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.backpressure.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.exactlyOnce.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.eventingPatterns.items.exactlyOnce.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.apiPlatform.title')}
        description={t('pages.enterpriseSoftware.sections.apiPlatform.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.apiPlatform.items.gateway.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.apiPlatform.items.gateway.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitCompare className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.apiPlatform.items.versioning.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.apiPlatform.items.versioning.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.apiPlatform.items.perfCaching.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.apiPlatform.items.perfCaching.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.apiPlatform.items.security.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.apiPlatform.items.security.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.apiPlatform.items.monitoring.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.apiPlatform.items.monitoring.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.apiPlatform.items.monetization.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.apiPlatform.items.monetization.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.dataArchitecture.title')}
        description={t('pages.enterpriseSoftware.sections.dataArchitecture.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.contracts.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.contracts.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.storageTiers.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.storageTiers.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.processing.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.processing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.governance.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.governance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.featureStore.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.featureStore.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.biActivation.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.dataArchitecture.items.biActivation.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.reliability.title')}
        description={t('pages.enterpriseSoftware.sections.reliability.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.enterpriseSoftware.sections.reliability.phases.slos.title')}
            duration={t('pages.enterpriseSoftware.sections.reliability.phases.slos.duration')}
            items={Array.isArray(slosItems) ? slosItems : []}
          />
          <TimelinePhase
            title={t('pages.enterpriseSoftware.sections.reliability.phases.capacity.title')}
            duration={t('pages.enterpriseSoftware.sections.reliability.phases.capacity.duration')}
            items={Array.isArray(capacityItems) ? capacityItems : []}
          />
          <TimelinePhase
            title={t('pages.enterpriseSoftware.sections.reliability.phases.resilience.title')}
            duration={t('pages.enterpriseSoftware.sections.reliability.phases.resilience.duration')}
            items={Array.isArray(resilienceItems) ? resilienceItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.security.title')}
        description={t('pages.enterpriseSoftware.sections.security.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.security.items.supplyChain.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.security.items.supplyChain.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.security.items.identity.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.security.items.identity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.security.items.secrets.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.security.items.secrets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.security.items.dataProtection.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.security.items.dataProtection.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.security.items.testing.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.security.items.testing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.security.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.security.items.compliance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.delivery.title')}
        description={t('pages.enterpriseSoftware.sections.delivery.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.delivery.items.cicd.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.delivery.items.cicd.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.delivery.items.testingPyramid.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.delivery.items.testingPyramid.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.delivery.items.schemaMigration.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.delivery.items.schemaMigration.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.delivery.items.progressiveDelivery.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.delivery.items.progressiveDelivery.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.delivery.items.changeGovernance.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.delivery.items.changeGovernance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitCompare className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.delivery.items.migration.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.delivery.items.migration.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.kpis.title')}
        description={t('pages.enterpriseSoftware.sections.kpis.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.kpis.items.dora.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.kpis.items.dora.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.kpis.items.reliability.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.kpis.items.reliability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.kpis.items.cost.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.kpis.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.kpis.items.value.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.kpis.items.value.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.kpis.items.security.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.kpis.items.security.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.enterpriseSoftware.sections.kpis.items.data.title')}</h4>
            </div>
            <p>{t('pages.enterpriseSoftware.sections.kpis.items.data.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.enterpriseSoftware.sections.deliverables.title')}
        description={t('pages.enterpriseSoftware.sections.deliverables.subtitle')}
        variant="alt"
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <Code className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.enterpriseSoftware.sections.deliverables.items.refRepo.title')}</h3>
            <p>{t('pages.enterpriseSoftware.sections.deliverables.items.refRepo.desc')}</p>
          </div>
          <div className="deliverable-item">
            <FileText className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.enterpriseSoftware.sections.deliverables.items.archDocs.title')}</h3>
            <p>{t('pages.enterpriseSoftware.sections.deliverables.items.archDocs.desc')}</p>
          </div>
          <div className="deliverable-item">
            <FileCode className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.enterpriseSoftware.sections.deliverables.items.apiContracts.title')}</h3>
            <p>{t('pages.enterpriseSoftware.sections.deliverables.items.apiContracts.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Server className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.enterpriseSoftware.sections.deliverables.items.runbooks.title')}</h3>
            <p>{t('pages.enterpriseSoftware.sections.deliverables.items.runbooks.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.enterpriseSoftware.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
