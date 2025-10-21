"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Database, 
  Settings, 
  Shield, 
  FileCheck, 
  Activity, 
  Gauge,
  Users,
  Briefcase,
  Code,
  DollarSign,
  BookOpen,
  FileText,
  Lock,
  Server,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

export default function GenAIAppsPage() {
  const { t, tObject } = useI18n()
  
  // Safe array extraction for TimelinePhase items
  const slisSlosItems = tObject('pages.genaiApps.sections.reliability.phases.slisSlos.items')
  const changeMgmtItems = tObject('pages.genaiApps.sections.reliability.phases.changeMgmt.items')
  const costPerformanceItems = tObject('pages.genaiApps.sections.reliability.phases.costPerformance.items')
  
  return (
    <PageLayout
      title={t('pages.genaiApps.title')}
      description={t('pages.genaiApps.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.genaiApps.breadcrumb'), href: '/capabilities/genai-apps' }
      ]}
    >
      {/* Overview Section */}
      <Section
        title={t('pages.genaiApps.sections.overview.title')}
        description={t('pages.genaiApps.sections.overview.subtitle')}
      >
        <div className="content-prose space-y-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t('pages.genaiApps.sections.overview.content.0')}
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t('pages.genaiApps.sections.overview.content.1')}
          </p>
        </div>
      </Section>

      {/* System Model Section */}
      <Section
        title={t('pages.genaiApps.sections.systemModel.title')}
        variant="alt"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
            {t('pages.genaiApps.sections.systemModel.subtitle')}
          </p>
        </div>
      </Section>

      {/* Outcomes Section */}
      <Section
        title={t('pages.genaiApps.sections.outcomes.title')}
        description={t('pages.genaiApps.sections.outcomes.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.outcomes.items.cycleTime.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.outcomes.items.cycleTime.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.outcomes.items.quality.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.outcomes.items.quality.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.outcomes.items.adoption.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.outcomes.items.adoption.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Reference Architecture Section */}
      <Section
        title={t('pages.genaiApps.sections.architecture.title')}
        description={t('pages.genaiApps.sections.architecture.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.architecture.items.retrieval.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.architecture.items.retrieval.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.architecture.items.tooling.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.architecture.items.tooling.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.architecture.items.memory.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.architecture.items.memory.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.architecture.items.policy.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.architecture.items.policy.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.architecture.items.evals.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.architecture.items.evals.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.architecture.items.tracing.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.architecture.items.tracing.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Patterns Section */}
      <Section
        title={t('pages.genaiApps.sections.patterns.title')}
        description={t('pages.genaiApps.sections.patterns.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.patterns.items.supportOps.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.patterns.items.supportOps.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.patterns.items.salesGrowth.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.patterns.items.salesGrowth.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.patterns.items.engineering.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.patterns.items.engineering.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.patterns.items.finance.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.patterns.items.finance.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.patterns.items.knowledge.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.patterns.items.knowledge.desc')}</p>
          </div>

          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.genaiApps.sections.patterns.items.backOffice.title')}</h4>
            </div>
            <p>{t('pages.genaiApps.sections.patterns.items.backOffice.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Reliability & Operations Section */}
      <Section
        title={t('pages.genaiApps.sections.reliability.title')}
        description={t('pages.genaiApps.sections.reliability.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.genaiApps.sections.reliability.phases.slisSlos.title')}
            duration={t('pages.genaiApps.sections.reliability.phases.slisSlos.duration')}
            items={Array.isArray(slisSlosItems) ? slisSlosItems : []}
          />
          <TimelinePhase
            title={t('pages.genaiApps.sections.reliability.phases.changeMgmt.title')}
            duration={t('pages.genaiApps.sections.reliability.phases.changeMgmt.duration')}
            items={Array.isArray(changeMgmtItems) ? changeMgmtItems : []}
          />
          <TimelinePhase
            title={t('pages.genaiApps.sections.reliability.phases.costPerformance.title')}
            duration={t('pages.genaiApps.sections.reliability.phases.costPerformance.duration')}
            items={Array.isArray(costPerformanceItems) ? costPerformanceItems : []}
          />
        </div>
      </Section>

      {/* Security & Privacy Section */}
      <Section
        title={t('pages.genaiApps.sections.security.title')}
        description={t('pages.genaiApps.sections.security.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="text-xl font-semibold">{t('pages.genaiApps.sections.security.items.identity.title')}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{t('pages.genaiApps.sections.security.items.identity.desc')}</p>
          </div>

          <div className="platform-item group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold">{t('pages.genaiApps.sections.security.items.data.title')}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{t('pages.genaiApps.sections.security.items.data.desc')}</p>
          </div>

          <div className="platform-item group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold">{t('pages.genaiApps.sections.security.items.supplyChain.title')}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{t('pages.genaiApps.sections.security.items.supplyChain.desc')}</p>
          </div>

          <div className="platform-item group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold">{t('pages.genaiApps.sections.security.items.monitoring.title')}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{t('pages.genaiApps.sections.security.items.monitoring.desc')}</p>
          </div>

          <div className="platform-item group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                <FileCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-xl font-semibold">{t('pages.genaiApps.sections.security.items.compliance.title')}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{t('pages.genaiApps.sections.security.items.compliance.desc')}</p>
          </div>

          <div className="platform-item group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                <Lock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold">{t('pages.genaiApps.sections.security.items.sovereign.title')}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{t('pages.genaiApps.sections.security.items.sovereign.desc')}</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="cta-container">
          <Link 
            href="/contact" 
            className="btn-primary large inline-flex items-center gap-2 hover:gap-3 transition-all"
            aria-label={t('pages.genaiApps.sections.cta')}
          >
            {t('pages.genaiApps.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
