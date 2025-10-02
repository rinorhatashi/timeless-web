"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowLeft, AlertCircle, Lightbulb, Layers, TrendingUp } from 'lucide-react'

const Case03PageContent = () => {
  const { t } = useI18n()

  return (
    <PageLayout
      title={t('pages.caseStudies.case03.title')}
      description={t('pages.caseStudies.case03.description')}
      breadcrumbs={[
        { label: t('navigation.caseStudies'), href: '/case-studies' },
        { label: t('pages.caseStudies.case03.breadcrumb'), href: '/case-studies/case-03' }
      ]}
    >
      <Section>
        <div className="mb-8">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.backToCaseStudies')}
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
            {t('common.industry.healthcare')}
          </span>
          <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
            {t('common.delivered')}
          </span>
        </div>

        <div className="grid-2 gap-8">
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.problem')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.caseStudies.case03.problem')}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.approach')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.caseStudies.case03.approach')}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.stack')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.caseStudies.case03.stack')}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{t('common.impact')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.caseStudies.case03.impact')}
            </p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-6 text-white">
            {t('pages.caseStudies.case03.ctaTitle')}
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            {t('pages.caseStudies.case03.ctaSubtitle')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.caseStudies.case03.ctaButton')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function Case03Page() {
  return (
    <ContentLoader>
      <Case03PageContent />
    </ContentLoader>
  )
} 