"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function RoboticsRPAPage() {
  const { t } = useI18n()
  
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
        title="Autonomy & Automation"
        description="From perception to actuation"
      >
        <div className="content-prose">
          <p>We build perception-to-actuation stacks for robotics and pragmatic robotic process automation (RPA) systems. Our approach emphasizes simulation for rapid testing, safe deployment protocols, and human-in-the-loop oversight with comprehensive audit trails.</p>
          <p>Every automation system includes safety checks, rollback capabilities, and human supervision mechanisms.</p>
        </div>
      </Section>

      <Section
        title="Technical Capabilities"
        description="End-to-end robotics and automation"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Perception Systems</h3>
            <p>Computer vision, sensor fusion, and environmental understanding.</p>
          </div>
          <div className="feature-card">
            <h3>Planning & Control</h3>
            <p>Path planning, motion control, and task execution.</p>
          </div>
          <div className="feature-card">
            <h3>Process Automation</h3>
            <p>RPA for business processes with intelligent decision-making.</p>
          </div>
          <div className="feature-card">
            <h3>Safety & Oversight</h3>
            <p>Human-in-the-loop controls and comprehensive governance.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Simulation & Testing"
        description="Safe development and validation"
      >
        <div className="content-prose">
          <p>We use advanced simulation environments for rapid prototyping and testing. This allows us to validate robotics systems in diverse scenarios before physical deployment, significantly reducing risk and development time.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 