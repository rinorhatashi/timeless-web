"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function TalentEnablementPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.talentEnablement.title')}
      description={t('pages.talentEnablement.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.talentEnablement.breadcrumb'), href: '/capabilities/talent-enablement' }
      ]}
    >
      <Section
        title="Team Enablement"
        description="Building AI-ready organizations"
      >
        <div className="content-prose">
          <p>We create role maps and run enablement sprints to build the skills needed to operate AI systems effectively. Our programs focus on practical, hands-on training that enables teams to work with AI daily.</p>
          <p>We customize training to your organization, ensuring teams can maintain and evolve AI systems independently.</p>
        </div>
      </Section>

      <Section
        title="Training Programs"
        description="Comprehensive skill development"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Role Mapping</h3>
            <p>Defining roles and responsibilities for AI operations.</p>
          </div>
          <div className="feature-card">
            <h3>Enablement Sprints</h3>
            <p>Intensive training programs with hands-on projects.</p>
          </div>
          <div className="feature-card">
            <h3>Best Practices</h3>
            <p>Teaching proven patterns for AI system operation.</p>
          </div>
          <div className="feature-card">
            <h3>Ongoing Support</h3>
            <p>Continuous mentoring and knowledge transfer.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Knowledge Transfer"
        description="Building lasting capabilities"
      >
        <div className="content-prose">
          <p>Our goal is to make your team self-sufficient. We provide comprehensive documentation, runbooks, and ongoing support to ensure teams can confidently operate and enhance AI systems long after our engagement ends.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 