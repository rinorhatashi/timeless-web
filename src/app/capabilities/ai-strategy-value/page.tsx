"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { Target, TrendingUp, Layers, Database, Lock, Users, BarChart3, FileCheck, GitBranch, AlertCircle } from 'lucide-react'

export default function AIStrategyValuePage() {
  const { t, tObject } = useI18n()
  
  // Safe array extraction for TimelinePhase items
  const diagnoseItems = tObject('pages.aiStrategyValue.sections.method.phases.diagnose.items')
  const prioritizeItems = tObject('pages.aiStrategyValue.sections.method.phases.prioritize.items')
  const stageFundItems = tObject('pages.aiStrategyValue.sections.method.phases.stageFund.items')
  const nowItems = tObject('pages.aiStrategyValue.sections.roadmap.phases.now.items')
  const nextItems = tObject('pages.aiStrategyValue.sections.roadmap.phases.next.items')
  const laterItems = tObject('pages.aiStrategyValue.sections.roadmap.phases.later.items')
  const raciOwnersItems = tObject('pages.aiStrategyValue.sections.governance.phases.raciOwners.items')
  const reviewsItems = tObject('pages.aiStrategyValue.sections.governance.phases.reviews.items')
  const controlsItems = tObject('pages.aiStrategyValue.sections.governance.phases.controls.items')
  const ownershipItems = tObject('pages.aiStrategyValue.sections.operatingModel.phases.ownership.items')
  const waysOfWorkingItems = tObject('pages.aiStrategyValue.sections.operatingModel.phases.waysOfWorking.items')
  const skillsEnablementItems = tObject('pages.aiStrategyValue.sections.operatingModel.phases.skillsEnablement.items')
  
  return (
    <PageLayout
      title={t('pages.aiStrategyValue.title')}
      description={t('pages.aiStrategyValue.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.aiStrategyValue.breadcrumb'), href: '/capabilities/ai-strategy-value' }
      ]}
    >
      <Section
        title={t('pages.aiStrategyValue.sections.overview.title')}
        description={t('pages.aiStrategyValue.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.aiStrategyValue.sections.overview.content.0')}</p>
          <p>{t('pages.aiStrategyValue.sections.overview.content.1')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.method.title')}
        description={t('pages.aiStrategyValue.sections.method.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.method.phases.diagnose.title')}
            duration={t('pages.aiStrategyValue.sections.method.phases.diagnose.duration')}
            items={Array.isArray(diagnoseItems) ? diagnoseItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.method.phases.prioritize.title')}
            duration={t('pages.aiStrategyValue.sections.method.phases.prioritize.duration')}
            items={Array.isArray(prioritizeItems) ? prioritizeItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.method.phases.stageFund.title')}
            duration={t('pages.aiStrategyValue.sections.method.phases.stageFund.duration')}
            items={Array.isArray(stageFundItems) ? stageFundItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.valueTree.title')}
        description={t('pages.aiStrategyValue.sections.valueTree.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.valueTree.items.businessArchitecture.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.valueTree.items.businessArchitecture.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.valueTree.items.valueStreams.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.valueTree.items.valueStreams.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.valueTree.items.systems.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.valueTree.items.systems.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.valueTree.items.data.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.valueTree.items.data.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.valueTree.items.opportunities.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.valueTree.items.opportunities.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.valueTree.items.dependencies.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.valueTree.items.dependencies.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.roadmap.title')}
        description={t('pages.aiStrategyValue.sections.roadmap.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.roadmap.phases.now.title')}
            duration={t('pages.aiStrategyValue.sections.roadmap.phases.now.duration')}
            items={Array.isArray(nowItems) ? nowItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.roadmap.phases.next.title')}
            duration={t('pages.aiStrategyValue.sections.roadmap.phases.next.duration')}
            items={Array.isArray(nextItems) ? nextItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.roadmap.phases.later.title')}
            duration={t('pages.aiStrategyValue.sections.roadmap.phases.later.duration')}
            items={Array.isArray(laterItems) ? laterItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.outcomes.title')}
        description={t('pages.aiStrategyValue.sections.outcomes.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.outcomes.items.portfolio.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.outcomes.items.portfolio.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.outcomes.items.dependencies.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.outcomes.items.dependencies.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.outcomes.items.kpis.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.outcomes.items.kpis.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.artifacts.title')}
        description={t('pages.aiStrategyValue.sections.artifacts.subtitle')}
        variant="alt"
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <h3>{t('pages.aiStrategyValue.sections.artifacts.items.valueTree.title')}</h3>
            <p>{t('pages.aiStrategyValue.sections.artifacts.items.valueTree.desc')}</p>
          </div>
          <div className="deliverable-item">
            <h3>{t('pages.aiStrategyValue.sections.artifacts.items.playbooks.title')}</h3>
            <p>{t('pages.aiStrategyValue.sections.artifacts.items.playbooks.desc')}</p>
          </div>
          <div className="deliverable-item">
            <h3>{t('pages.aiStrategyValue.sections.artifacts.items.scorecards.title')}</h3>
            <p>{t('pages.aiStrategyValue.sections.artifacts.items.scorecards.desc')}</p>
          </div>
          <div className="deliverable-item">
            <h3>{t('pages.aiStrategyValue.sections.artifacts.items.briefings.title')}</h3>
            <p>{t('pages.aiStrategyValue.sections.artifacts.items.briefings.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.financial.title')}
        description={t('pages.aiStrategyValue.sections.financial.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.financial.items.benefits.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.financial.items.benefits.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.financial.items.costs.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.financial.items.costs.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.financial.items.sensitivity.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.financial.items.sensitivity.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.financial.items.funding.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.financial.items.funding.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.financial.items.unitEconomics.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.financial.items.unitEconomics.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.financial.items.accounting.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.financial.items.accounting.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.delivery.title')}
        description={t('pages.aiStrategyValue.sections.delivery.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.delivery.items.refArchitectures.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.delivery.items.refArchitectures.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.delivery.items.accelerators.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.delivery.items.accelerators.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.delivery.items.dataReadiness.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.delivery.items.dataReadiness.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.delivery.items.mlops.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.delivery.items.mlops.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.delivery.items.observability.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.delivery.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.delivery.items.enablement.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.delivery.items.enablement.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.dependencies.title')}
        description={t('pages.aiStrategyValue.sections.dependencies.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.dependencies.items.dataPlatform.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.dependencies.items.dataPlatform.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.dependencies.items.platformEngineering.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.dependencies.items.platformEngineering.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.dependencies.items.securityPrivacy.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.dependencies.items.securityPrivacy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.dependencies.items.peopleChange.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.dependencies.items.peopleChange.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.dependencies.items.vendors.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.dependencies.items.vendors.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.dependencies.items.governance.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.dependencies.items.governance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.governance.title')}
        description={t('pages.aiStrategyValue.sections.governance.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.governance.phases.raciOwners.title')}
            duration={t('pages.aiStrategyValue.sections.governance.phases.raciOwners.duration')}
            items={Array.isArray(raciOwnersItems) ? raciOwnersItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.governance.phases.reviews.title')}
            duration={t('pages.aiStrategyValue.sections.governance.phases.reviews.duration')}
            items={Array.isArray(reviewsItems) ? reviewsItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.governance.phases.controls.title')}
            duration={t('pages.aiStrategyValue.sections.governance.phases.controls.duration')}
            items={Array.isArray(controlsItems) ? controlsItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.operatingModel.title')}
        description={t('pages.aiStrategyValue.sections.operatingModel.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.operatingModel.phases.ownership.title')}
            duration={t('pages.aiStrategyValue.sections.operatingModel.phases.ownership.duration')}
            items={Array.isArray(ownershipItems) ? ownershipItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.operatingModel.phases.waysOfWorking.title')}
            duration={t('pages.aiStrategyValue.sections.operatingModel.phases.waysOfWorking.duration')}
            items={Array.isArray(waysOfWorkingItems) ? waysOfWorkingItems : []}
          />
          <TimelinePhase
            title={t('pages.aiStrategyValue.sections.operatingModel.phases.skillsEnablement.title')}
            duration={t('pages.aiStrategyValue.sections.operatingModel.phases.skillsEnablement.duration')}
            items={Array.isArray(skillsEnablementItems) ? skillsEnablementItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.risk.title')}
        description={t('pages.aiStrategyValue.sections.risk.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.risk.items.assumptionRegister.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.risk.items.assumptionRegister.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.risk.items.technicalFeasibility.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.risk.items.technicalFeasibility.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.risk.items.businessAcceptance.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.risk.items.businessAcceptance.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.risk.items.regulatory.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.risk.items.regulatory.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.risk.items.operational.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.risk.items.operational.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.risk.items.financial.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.risk.items.financial.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.aiStrategyValue.sections.kpis.title')}
        description={t('pages.aiStrategyValue.sections.kpis.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.aiStrategyValue.sections.kpis.items.valueMetrics.title')}</h4>
            </div>
            <p>{t('pages.aiStrategyValue.sections.kpis.items.valueMetrics.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.kpis.items.operational.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.kpis.items.operational.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.kpis.items.quality.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.kpis.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.kpis.items.cost.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.kpis.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.kpis.items.adoption.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.kpis.items.adoption.desc')}</p>
          </div>
          <div className="platform-item">
            <h4>{t('pages.aiStrategyValue.sections.kpis.items.governance.title')}</h4>
            <p>{t('pages.aiStrategyValue.sections.kpis.items.governance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.aiStrategyValue.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
