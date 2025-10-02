"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function HardwarePrototypingPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.hardwarePrototyping.title')}
      description={t('pages.hardwarePrototyping.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.hardwarePrototyping.breadcrumb'), href: '/capabilities/hardware-prototyping' }
      ]}
    >
      <Section
        title="Hardware Design"
        description="From schematic to pilot line"
      >
        <div className="content-prose">
          <p>We design, iterate, and qualify hardware systems in partnership with fabrication and assembly vendors. Our approach prioritizes risk-driven decisions, fast iteration loops, and compliance-ready documentation.</p>
          <p>We handle everything from initial concept through production qualification and manufacturing setup.</p>
        </div>
      </Section>

      <Section
        title="Development Process"
        description="Rapid prototyping to production"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Schematic Design</h3>
            <p>Circuit design, component selection, and power management.</p>
          </div>
          <div className="feature-card">
            <h3>PCB Layout</h3>
            <p>Multi-layer board design with signal integrity optimization.</p>
          </div>
          <div className="feature-card">
            <h3>Prototyping</h3>
            <p>Rapid iteration with test boards and validation.</p>
          </div>
          <div className="feature-card">
            <h3>Manufacturing</h3>
            <p>Production setup, quality control, and supply chain management.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Compliance & Testing"
        description="Meeting regulatory requirements"
      >
        <div className="content-prose">
          <p>We ensure all hardware designs meet relevant compliance standards including FCC, CE, and industry-specific certifications. Our testing protocols cover functionality, reliability, and safety requirements.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 