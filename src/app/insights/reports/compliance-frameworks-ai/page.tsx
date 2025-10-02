"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowLeft, FileCheck, Scale, Shield, Download } from 'lucide-react'

const Report04PageContent = () => {
  const { t } = useI18n()

  const keyFindings = [
    {
      title: "65% Fewer Challenges",
      description: "Proactive compliance approaches significantly reduce regulatory challenges.",
      icon: FileCheck
    },
    {
      title: "Cross-functional Teams",
      description: "Legal, ethics, and technical experts collaborating achieve better compliance outcomes.",
      icon: Shield
    },
    {
      title: "Early Integration",
      description: "Integrating compliance early in development beats retrofitting approaches.",
      icon: Scale
    }
  ]

  return (
    <PageLayout
      title={t('pages.reports.report04.title')}
      description={t('pages.reports.report04.description')}
      breadcrumbs={[
        { label: t('navigation.insights'), href: '/insights' },
        { label: t('navigation.reports'), href: '/insights/reports' },
        { label: t('pages.reports.report04.breadcrumb'), href: '/insights/reports/compliance-frameworks-ai' }
      ]}
    >
      <Section>
        <div className="mb-8">
          <Link 
            href="/insights/reports"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.backToReports')}
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <span className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-200">
            {t('common.complianceGuide')}
          </span>
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
            December 2023
          </span>
          <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
            18 min read
          </span>
        </div>

        <div className="content-prose mb-12">
          <h2>{t('common.executiveSummary')}</h2>
          <p>{t('pages.reports.report04.executiveSummary')}</p>
        </div>

        <div className="grid-3 mb-12">
          {keyFindings.map((finding, index) => {
            const IconComponent = finding.icon
            return (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {finding.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {finding.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section variant="alt">
        <h2 className="section-title mb-8">{t('common.keyFindings')}</h2>
        <div className="content-prose">
          <p>{t('pages.reports.report04.keyFindings')}</p>
        </div>
      </Section>

      <Section>
        <h2 className="section-title mb-8">{t('common.methodology')}</h2>
        <div className="content-prose">
          <p>{t('pages.reports.report04.methodology')}</p>
        </div>
      </Section>

      <Section variant="dark">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-lg">
              <Download className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-normal mb-6 text-white">
            {t('pages.reports.report04.ctaTitle')}
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            {t('pages.reports.report04.ctaSubtitle')}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.reports.report04.ctaButton')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function Report04Page() {
  return (
    <ContentLoader>
      <Report04PageContent />
    </ContentLoader>
  )
} 