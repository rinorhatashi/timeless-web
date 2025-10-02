"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function SecurityCompliancePage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.securityCompliance.title')}
      description={t('pages.securityCompliance.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.securityCompliance.breadcrumb'), href: '/capabilities/security-compliance' }
      ]}
    >
      <Section
        title="Security by Design"
        description="Built-in security, not bolted on"
      >
        <div className="content-prose">
          <p>Security is integrated throughout our development process, not added at the end. We implement identity management, secrets handling, SBOM/SLSA tracking, threat modeling, red team testing, and continuous compliance monitoring.</p>
          <p>Every system we build includes comprehensive security controls and audit capabilities from day one.</p>
        </div>
      </Section>

      <Section
        title="Security Framework"
        description="Comprehensive security practices"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Identity & Access</h3>
            <p>Zero-trust architecture with fine-grained access controls.</p>
          </div>
          <div className="feature-card">
            <h3>Secrets Management</h3>
            <p>Secure storage and rotation of credentials and keys.</p>
          </div>
          <div className="feature-card">
            <h3>Threat Modeling</h3>
            <p>Systematic identification and mitigation of security risks.</p>
          </div>
          <div className="feature-card">
            <h3>Continuous Compliance</h3>
            <p>Automated compliance checking and reporting for SOC2, ISO 27001.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Red Team & Testing"
        description="Proactive security validation"
      >
        <div className="content-prose">
          <p>We conduct regular red team exercises and penetration testing to identify vulnerabilities before they can be exploited. Our security testing includes both automated scanning and manual assessment by security experts.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 