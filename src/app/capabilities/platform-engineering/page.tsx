"use client"

import Link from 'next/link'
import { PageLayout, Section } from '@/components/ui/page-layout'
import { TimelinePhase } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import { Boxes, GitBranch, Code2, Lock, Activity, DollarSign, Laptop, Package, Cloud, Settings, Shield, BarChart3, FileCode2, Workflow, Database, TrendingUp, Key, UserCheck, BookOpen, CheckCircle, Target, Gauge } from 'lucide-react'

export default function PlatformEngineeringPage() {
  const { t, tObject } = useI18n()
  
  const overviewContent = tObject('pages.platformEngineering.sections.overview.content')
  const contentArray = Array.isArray(overviewContent) ? overviewContent : []
  
  // Safe array extraction for TimelinePhase items
  const templatesItems = tObject('pages.platformEngineering.sections.devex.phases.templates.items')
  const automationItems = tObject('pages.platformEngineering.sections.devex.phases.automation.items')
  const insightsItems = tObject('pages.platformEngineering.sections.devex.phases.insights.items')

  return (
    <PageLayout
      title={t('pages.platformEngineering.title')}
      description={t('pages.platformEngineering.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.platformEngineering.breadcrumb'), href: '/capabilities/platform-engineering' }
      ]}
    >
      {/* Overview Section */}
      <Section
        title={t('pages.platformEngineering.sections.overview.title')}
        description={t('pages.platformEngineering.sections.overview.subtitle')}
      >
        <div className="content-prose">
          {contentArray.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Platform Capabilities */}
      <Section
        title={t('pages.platformEngineering.sections.capabilities.title')}
        description={t('pages.platformEngineering.sections.capabilities.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Boxes className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.capabilities.items.idp.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.capabilities.items.idp.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.capabilities.items.cicd.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.capabilities.items.cicd.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.capabilities.items.iac.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.capabilities.items.iac.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.capabilities.items.security.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.capabilities.items.security.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.capabilities.items.observability.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.capabilities.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.capabilities.items.finops.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.capabilities.items.finops.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Developer Experience */}
      <Section
        title={t('pages.platformEngineering.sections.devex.title')}
        description={t('pages.platformEngineering.sections.devex.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.platformEngineering.sections.devex.phases.templates.title')}
            duration={t('pages.platformEngineering.sections.devex.phases.templates.duration')}
            items={Array.isArray(templatesItems) ? templatesItems : []}
          />
          <TimelinePhase
            title={t('pages.platformEngineering.sections.devex.phases.automation.title')}
            duration={t('pages.platformEngineering.sections.devex.phases.automation.duration')}
            items={Array.isArray(automationItems) ? automationItems : []}
          />
          <TimelinePhase
            title={t('pages.platformEngineering.sections.devex.phases.insights.title')}
            duration={t('pages.platformEngineering.sections.devex.phases.insights.duration')}
            items={Array.isArray(insightsItems) ? insightsItems : []}
          />
        </div>
      </Section>

      {/* Reference Architecture */}
      <Section
        title={t('pages.platformEngineering.sections.refArch.title')}
        description={t('pages.platformEngineering.sections.refArch.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.refArch.items.workstation.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.refArch.items.workstation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.refArch.items.build.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.refArch.items.build.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.refArch.items.environments.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.refArch.items.environments.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.refArch.items.runtime.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.refArch.items.runtime.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.refArch.items.policy.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.refArch.items.policy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.refArch.items.observability.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.refArch.items.observability.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Golden Paths */}
      <Section
        title={t('pages.platformEngineering.sections.goldenPaths.title')}
        description={t('pages.platformEngineering.sections.goldenPaths.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCode2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.goldenPaths.items.serviceAPI.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.goldenPaths.items.serviceAPI.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.goldenPaths.items.eventDriven.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.goldenPaths.items.eventDriven.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.goldenPaths.items.batchPipeline.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.goldenPaths.items.batchPipeline.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.goldenPaths.items.mlService.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.goldenPaths.items.mlService.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section
        title={t('pages.platformEngineering.sections.security.title')}
        description={t('pages.platformEngineering.sections.security.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.security.items.supplyChain.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.security.items.supplyChain.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.security.items.secrets.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.security.items.secrets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.security.items.access.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.security.items.access.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.security.items.controls.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.security.items.controls.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.security.items.data.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.security.items.data.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.security.items.runbooks.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.security.items.runbooks.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Reliability & Continuity */}
      <Section
        title={t('pages.platformEngineering.sections.reliability.title')}
        description={t('pages.platformEngineering.sections.reliability.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.reliability.items.slo.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.reliability.items.slo.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.reliability.items.capacity.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.reliability.items.capacity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.reliability.items.resilience.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.reliability.items.resilience.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.reliability.items.changeSafety.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.reliability.items.changeSafety.desc')}</p>
          </div>
        </div>
      </Section>

      {/* FinOps & Cost Engineering */}
      <Section
        title={t('pages.platformEngineering.sections.finops.title')}
        description={t('pages.platformEngineering.sections.finops.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.finops.items.budgets.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.finops.items.budgets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.finops.items.showback.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.finops.items.showback.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.finops.items.optimization.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.finops.items.optimization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.platformEngineering.sections.finops.items.modelCost.title')}</h4>
            </div>
            <p>{t('pages.platformEngineering.sections.finops.items.modelCost.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section
        title={t('pages.platformEngineering.sections.deliverables.title')}
        description={t('pages.platformEngineering.sections.deliverables.subtitle')}
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <FileCode2 className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.platformEngineering.sections.deliverables.items.templates.title')}</h3>
            <p>{t('pages.platformEngineering.sections.deliverables.items.templates.desc')}</p>
          </div>
          <div className="deliverable-item">
            <GitBranch className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.platformEngineering.sections.deliverables.items.pipelines.title')}</h3>
            <p>{t('pages.platformEngineering.sections.deliverables.items.pipelines.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Boxes className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.platformEngineering.sections.deliverables.items.portal.title')}</h3>
            <p>{t('pages.platformEngineering.sections.deliverables.items.portal.desc')}</p>
          </div>
          <div className="deliverable-item">
            <BarChart3 className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.platformEngineering.sections.deliverables.items.dashboards.title')}</h3>
            <p>{t('pages.platformEngineering.sections.deliverables.items.dashboards.desc')}</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.platformEngineering.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
