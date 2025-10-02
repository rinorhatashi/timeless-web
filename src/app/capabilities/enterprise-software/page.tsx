"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function EnterpriseSoftwarePage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.enterpriseSoftware.title')}
      description={t('pages.enterpriseSoftware.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.enterpriseSoftware.breadcrumb'), href: '/capabilities/enterprise-software' }
      ]}
    >
      <Section
        title="Enterprise-Grade Architecture"
        description="Cloud-native, event-driven, and resilient systems"
      >
        <div className="content-prose">
          <p>We build cloud-native services using event-driven architectures, API platforms, data mesh patterns, and zero-downtime delivery pipelines. Our solutions are designed for enterprise scale with proper governance and SLOs.</p>
          <p>Every system we build includes comprehensive monitoring, automated testing, and disaster recovery capabilities.</p>
        </div>
      </Section>

      <Section
        title="Core Capabilities"
        description="Modern software engineering practices"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Cloud-Native Services</h3>
            <p>Microservices architecture with containerization and orchestration.</p>
          </div>
          <div className="feature-card">
            <h3>Event-Driven Systems</h3>
            <p>Scalable event streaming and message-driven architectures.</p>
          </div>
          <div className="feature-card">
            <h3>API Platforms</h3>
            <p>RESTful and GraphQL APIs with comprehensive documentation.</p>
          </div>
          <div className="feature-card">
            <h3>Zero-Downtime Deployment</h3>
            <p>Blue-green deployments, canary releases, and automated rollbacks.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Quality & Governance"
        description="Enterprise standards and best practices"
      >
        <div className="content-prose">
          <p>We implement comprehensive quality assurance processes including automated testing, code reviews, security scanning, and performance monitoring. All systems are built with proper governance frameworks and SLO tracking.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 