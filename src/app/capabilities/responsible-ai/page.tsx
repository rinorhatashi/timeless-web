"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Shield, FileCheck, AlertTriangle, Database, Brain, Wrench, Users, 
  ClipboardList, Search, FileText, Eye, GraduationCap, CheckCircle2, Lock, Scale
} from 'lucide-react'

export default function ResponsibleAIPage() {
  const { t } = useI18n()

  // Safe array extraction for TimelinePhase items
  const designItems = t('pages.responsibleAI.sections.lifecycleControls.phases.design.items', { returnObjects: true })
  const buildItems = t('pages.responsibleAI.sections.lifecycleControls.phases.build.items', { returnObjects: true })
  const operateItems = t('pages.responsibleAI.sections.lifecycleControls.phases.operate.items', { returnObjects: true })
  const overviewContent = t('pages.responsibleAI.sections.overview.content', { returnObjects: true })

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
        title={t('pages.responsibleAI.sections.overview.title')}
        description={t('pages.responsibleAI.sections.overview.subtitle')}
      >
        <div className="content-prose">
          {Array.isArray(overviewContent) && overviewContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        title={t('pages.responsibleAI.sections.lifecycleControls.title')}
        description={t('pages.responsibleAI.sections.lifecycleControls.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.responsibleAI.sections.lifecycleControls.phases.design.title')}
            duration={t('pages.responsibleAI.sections.lifecycleControls.phases.design.duration')}
            items={Array.isArray(designItems) ? designItems : []}
          />
          <TimelinePhase
            title={t('pages.responsibleAI.sections.lifecycleControls.phases.build.title')}
            duration={t('pages.responsibleAI.sections.lifecycleControls.phases.build.duration')}
            items={Array.isArray(buildItems) ? buildItems : []}
          />
          <TimelinePhase
            title={t('pages.responsibleAI.sections.lifecycleControls.phases.operate.title')}
            duration={t('pages.responsibleAI.sections.lifecycleControls.phases.operate.duration')}
            items={Array.isArray(operateItems) ? operateItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.responsibleAI.sections.outcomes.title')}
        description={t('pages.responsibleAI.sections.outcomes.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.outcomes.items.registry.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.outcomes.items.registry.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.outcomes.items.controls.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.outcomes.items.controls.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.outcomes.items.response.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.outcomes.items.response.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.responsibleAI.sections.controlsLibrary.title')}
        description={t('pages.responsibleAI.sections.controlsLibrary.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.controlsLibrary.items.data.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.controlsLibrary.items.data.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.controlsLibrary.items.model.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.controlsLibrary.items.model.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.controlsLibrary.items.promptTool.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.controlsLibrary.items.promptTool.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.controlsLibrary.items.operations.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.controlsLibrary.items.operations.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.controlsLibrary.items.thirdParty.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.controlsLibrary.items.thirdParty.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.controlsLibrary.items.transparency.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.controlsLibrary.items.transparency.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.responsibleAI.sections.registryAudits.title')}
        description={t('pages.responsibleAI.sections.registryAudits.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.registryAudits.items.registry.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.registryAudits.items.registry.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.registryAudits.items.audits.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.registryAudits.items.audits.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.registryAudits.items.incidents.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.registryAudits.items.incidents.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.registryAudits.items.reviews.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.registryAudits.items.reviews.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.registryAudits.items.reporting.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.registryAudits.items.reporting.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.responsibleAI.sections.registryAudits.items.training.title')}</h4>
            </div>
            <p>{t('pages.responsibleAI.sections.registryAudits.items.training.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.responsibleAI.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
