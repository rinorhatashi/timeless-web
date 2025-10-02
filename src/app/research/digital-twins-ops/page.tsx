"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowLeft, Target, Workflow, BarChart3, FileText, BookOpen } from 'lucide-react'

const DigitalTwinsOpsPageContent = () => {
  const { t } = useI18n()

  return (
    <PageLayout
      title={t('pages.research.digitalTwinsOps.title')}
      description={t('pages.research.digitalTwinsOps.description')}
      breadcrumbs={[
        { label: t('navigation.research'), href: '/research' },
        { label: t('pages.research.digitalTwinsOps.breadcrumb'), href: '/research/digital-twins-ops' }
      ]}
    >
      <Section>
        <div className="mb-8">
          <Link 
            href="/research"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.backToResearch')}
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
            {t('common.activeResearch')}
          </span>
          <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
            {t('common.whitepaper')}
          </span>
        </div>

        <div className="grid-2 gap-8">
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.objective')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.research.digitalTwinsOps.objective')}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Workflow className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.method')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.research.digitalTwinsOps.method')}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.evaluation')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.research.digitalTwinsOps.evaluation')}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-50 rounded-lg">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.artifact')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.research.digitalTwinsOps.artifact')}
            </p>
          </div>
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-normal text-gray-900">{t('common.researchOverview')}</h2>
          </div>
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">
              {t('pages.research.digitalTwinsOps.overview')}
            </p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-6 text-white">
            {t('pages.research.digitalTwinsOps.ctaTitle')}
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            {t('pages.research.digitalTwinsOps.ctaSubtitle')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.research.digitalTwinsOps.ctaButton')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function DigitalTwinsOpsPage() {
  return (
    <ContentLoader>
      <DigitalTwinsOpsPageContent />
    </ContentLoader>
  )
} 