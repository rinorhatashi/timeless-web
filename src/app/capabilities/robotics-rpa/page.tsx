"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Eye, 
  Navigation, 
  Gauge, 
  MonitorPlay, 
  Cpu, 
  Shield, 
  Activity,
  Layers,
  Clock,
  Wrench,
  Settings,
  BarChart3,
  CheckCircle2,
  TrendingUp
} from 'lucide-react'

export default function RoboticsRPAPage() {
  const { t, tObject } = useI18n()
  
  const designGovernanceItems = tObject('pages.roboticsRPA.sections.rpaArchitecture.phases.designGovernance.items')
  const runtimeReliabilityItems = tObject('pages.roboticsRPA.sections.rpaArchitecture.phases.runtimeReliability.items')
  const operationsROIItems = tObject('pages.roboticsRPA.sections.rpaArchitecture.phases.operationsROI.items')
  
  return (
    <PageLayout
      title={t('pages.roboticsRPA.title')}
      description={t('pages.roboticsRPA.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.roboticsRPA.breadcrumb'), href: '/capabilities/robotics-rpa' }
      ]}
    >
      <Section
        title={t('pages.roboticsRPA.sections.overview.title')}
        description={t('pages.roboticsRPA.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.roboticsRPA.sections.overview.content')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.roboticsRPA.sections.roboticsStack.title')}
        description={t('pages.roboticsRPA.sections.roboticsStack.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.roboticsStack.items.perception.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.roboticsStack.items.perception.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Navigation className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.roboticsStack.items.planning.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.roboticsStack.items.planning.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.roboticsStack.items.control.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.roboticsStack.items.control.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <MonitorPlay className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.roboticsStack.items.digitalTwins.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.roboticsStack.items.digitalTwins.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.roboticsStack.items.hil.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.roboticsStack.items.hil.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.roboticsStack.items.safety.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.roboticsStack.items.safety.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.roboticsRPA.sections.autonomyPatterns.title')}
        description={t('pages.roboticsRPA.sections.autonomyPatterns.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.autonomyPatterns.items.stateEstimation.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.autonomyPatterns.items.stateEstimation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Navigation className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.autonomyPatterns.items.taskTrajectory.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.autonomyPatterns.items.taskTrajectory.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.autonomyPatterns.items.latencyBudgets.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.autonomyPatterns.items.latencyBudgets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.autonomyPatterns.items.testing.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.autonomyPatterns.items.testing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.autonomyPatterns.items.tooling.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.autonomyPatterns.items.tooling.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.autonomyPatterns.items.ops.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.autonomyPatterns.items.ops.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.roboticsRPA.sections.rpaArchitecture.title')}
        description={t('pages.roboticsRPA.sections.rpaArchitecture.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.roboticsRPA.sections.rpaArchitecture.phases.designGovernance.title')}
            duration={t('pages.roboticsRPA.sections.rpaArchitecture.phases.designGovernance.duration')}
            items={Array.isArray(designGovernanceItems) ? designGovernanceItems : []}
          />
          <TimelinePhase
            title={t('pages.roboticsRPA.sections.rpaArchitecture.phases.runtimeReliability.title')}
            duration={t('pages.roboticsRPA.sections.rpaArchitecture.phases.runtimeReliability.duration')}
            items={Array.isArray(runtimeReliabilityItems) ? runtimeReliabilityItems : []}
          />
          <TimelinePhase
            title={t('pages.roboticsRPA.sections.rpaArchitecture.phases.operationsROI.title')}
            duration={t('pages.roboticsRPA.sections.rpaArchitecture.phases.operationsROI.duration')}
            items={Array.isArray(operationsROIItems) ? operationsROIItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.roboticsRPA.sections.enterpriseRPA.title')}
        description={t('pages.roboticsRPA.sections.enterpriseRPA.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
            <Eye className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.processDiscovery.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.processDiscovery.desc')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all">
            <Layers className="w-8 h-8 mb-4 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.designGovernance.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.designGovernance.desc')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all">
            <Settings className="w-8 h-8 mb-4 text-green-600 dark:text-green-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.operations.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.operations.desc')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 transition-all">
            <Shield className="w-8 h-8 mb-4 text-amber-600 dark:text-amber-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.hybridAgents.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.roboticsRPA.sections.enterpriseRPA.items.hybridAgents.desc')}
            </p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.roboticsRPA.sections.kpis.title')}
        description={t('pages.roboticsRPA.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.kpis.items.robotics.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.kpis.items.robotics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <MonitorPlay className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.kpis.items.simulation.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.kpis.items.simulation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.kpis.items.rpaQuality.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.kpis.items.rpaQuality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.kpis.items.rpaEconomics.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.kpis.items.rpaEconomics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.kpis.items.security.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.kpis.items.security.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.roboticsRPA.sections.kpis.items.changeSafety.title')}</h4>
            </div>
            <p>{t('pages.roboticsRPA.sections.kpis.items.changeSafety.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.roboticsRPA.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 