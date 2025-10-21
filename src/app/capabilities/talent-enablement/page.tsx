"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Users, 
  Wrench, 
  TrendingUp, 
  Target, 
  Code2, 
  Database, 
  Shield, 
  Settings, 
  CheckCircle2,
  BookOpen,
  MessageSquare,
  Lightbulb
} from 'lucide-react'

export default function TalentEnablementPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.talentEnablement.title') as string}
      description={t('pages.talentEnablement.description') as string}
      breadcrumbs={[
        { label: t('navigation.capabilities') as string, href: '/capabilities' },
        { label: t('pages.talentEnablement.breadcrumb') as string, href: '/capabilities/talent-enablement' }
      ]}
    >
      <Section
        title={t('pages.talentEnablement.sections.overview.title') as string}
        description={t('pages.talentEnablement.sections.overview.subtitle') as string}
      >
        <div className="content-prose">
          <p>{String(t('pages.talentEnablement.sections.overview.content'))}</p>
        </div>
      </Section>

      <Section
        title={t('pages.talentEnablement.sections.outcomes.title') as string}
        description={t('pages.talentEnablement.sections.outcomes.subtitle') as string}
        variant="alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {String(t('pages.talentEnablement.sections.outcomes.items.onboarding.title'))}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {String(t('pages.talentEnablement.sections.outcomes.items.onboarding.desc'))}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {String(t('pages.talentEnablement.sections.outcomes.items.quality.title'))}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {String(t('pages.talentEnablement.sections.outcomes.items.quality.desc'))}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {String(t('pages.talentEnablement.sections.outcomes.items.adoption.title'))}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {String(t('pages.talentEnablement.sections.outcomes.items.adoption.desc'))}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to enable your team?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Transform your organization with hands-on AI enablement programs
            </p>
            <Link 
              href={String(t('pages.talentEnablement.sections.ctaSection.link'))}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {String(t('pages.talentEnablement.sections.ctaSection.text'))} 
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.talentEnablement.sections.roleMaps.title') as string}
        description={t('pages.talentEnablement.sections.roleMaps.subtitle') as string}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{String(t('pages.talentEnablement.sections.roleMaps.items.product.title'))}</h4>
            </div>
            <p>{String(t('pages.talentEnablement.sections.roleMaps.items.product.desc'))}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{String(t('pages.talentEnablement.sections.roleMaps.items.engineering.title'))}</h4>
            </div>
            <p>{String(t('pages.talentEnablement.sections.roleMaps.items.engineering.desc'))}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{String(t('pages.talentEnablement.sections.roleMaps.items.dataML.title'))}</h4>
            </div>
            <p>{String(t('pages.talentEnablement.sections.roleMaps.items.dataML.desc'))}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{String(t('pages.talentEnablement.sections.roleMaps.items.security.title'))}</h4>
            </div>
            <p>{String(t('pages.talentEnablement.sections.roleMaps.items.security.desc'))}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{String(t('pages.talentEnablement.sections.roleMaps.items.operations.title'))}</h4>
            </div>
            <p>{String(t('pages.talentEnablement.sections.roleMaps.items.operations.desc'))}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{String(t('pages.talentEnablement.sections.roleMaps.items.compliance.title'))}</h4>
            </div>
            <p>{String(t('pages.talentEnablement.sections.roleMaps.items.compliance.desc'))}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.talentEnablement.sections.programs.title') as string}
        description={t('pages.talentEnablement.sections.programs.subtitle') as string}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.talentEnablement.sections.programs.phases.bootcamps.title') as string}
            duration={t('pages.talentEnablement.sections.programs.phases.bootcamps.duration') as string}
            items={t('pages.talentEnablement.sections.programs.phases.bootcamps.items', { returnObjects: true }) as string[]}
          />
          <TimelinePhase
            title={t('pages.talentEnablement.sections.programs.phases.guilds.title') as string}
            duration={t('pages.talentEnablement.sections.programs.phases.guilds.duration') as string}
            items={t('pages.talentEnablement.sections.programs.phases.guilds.items', { returnObjects: true }) as string[]}
          />
          <TimelinePhase
            title={t('pages.talentEnablement.sections.programs.phases.officeHours.title') as string}
            duration={t('pages.talentEnablement.sections.programs.phases.officeHours.duration') as string}
            items={t('pages.talentEnablement.sections.programs.phases.officeHours.items', { returnObjects: true }) as string[]}
          />
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            Get Started with Enablement →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 