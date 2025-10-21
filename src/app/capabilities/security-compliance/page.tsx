"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Shield, Lock, Key, FileCheck, AlertTriangle, Activity, Users, FileText, 
  Globe, Database, BarChart3, Cloud, Fingerprint, UserCheck, Network, 
  Server, HardDrive, Cog, Eye, RefreshCw, FileWarning, CheckCircle2,
  Layers, GitBranch, Scale, BookOpen, Zap, TrendingUp, Settings, Code
} from 'lucide-react'

export default function SecurityCompliancePage() {
  const { t } = useI18n()
  
  const overviewContent = t('pages.securityCompliance.sections.overview.content', { returnObjects: true })
  const contentArray = Array.isArray(overviewContent) ? overviewContent : []
  
  // Safe array extraction for TimelinePhase items
  const threatModelingItems = t('pages.securityCompliance.sections.engineering.phases.threatModeling.items', { returnObjects: true })
  const testingItems = t('pages.securityCompliance.sections.engineering.phases.testing.items', { returnObjects: true })
  const complianceOpsItems = t('pages.securityCompliance.sections.engineering.phases.complianceOps.items', { returnObjects: true })
  const detectionsItems = t('pages.securityCompliance.sections.threatDetection.phases.detections.items', { returnObjects: true })
  const operationsItems = t('pages.securityCompliance.sections.threatDetection.phases.operations.items', { returnObjects: true })
  const continuityItems = t('pages.securityCompliance.sections.threatDetection.phases.continuity.items', { returnObjects: true })
  const cloudNativeItems = t('pages.securityCompliance.sections.deployment.phases.cloudNative.items', { returnObjects: true })
  const hybridItems = t('pages.securityCompliance.sections.deployment.phases.hybrid.items', { returnObjects: true })
  const sovereignItems = t('pages.securityCompliance.sections.deployment.phases.sovereign.items', { returnObjects: true })

  return (
    <PageLayout
      title={t('pages.securityCompliance.title')}
      description={t('pages.securityCompliance.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.securityCompliance.breadcrumb'), href: '/capabilities/security-compliance' }
      ]}
    >
      {/* Overview Section */}
      <Section
        title={t('pages.securityCompliance.sections.overview.title')}
        description={t('pages.securityCompliance.sections.overview.subtitle')}
      >
        <div className="content-prose">
          {contentArray.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Controls & Foundations */}
      <Section
        title={t('pages.securityCompliance.sections.controls.title')}
        description={t('pages.securityCompliance.sections.controls.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Fingerprint className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.securityCompliance.sections.controls.items.identity.title')}</h4>
            </div>
            <p>{t('pages.securityCompliance.sections.controls.items.identity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.securityCompliance.sections.controls.items.secrets.title')}</h4>
            </div>
            <p>{t('pages.securityCompliance.sections.controls.items.secrets.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.securityCompliance.sections.controls.items.supplyChain.title')}</h4>
            </div>
            <p>{t('pages.securityCompliance.sections.controls.items.supplyChain.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.securityCompliance.sections.controls.items.policy.title')}</h4>
            </div>
            <p>{t('pages.securityCompliance.sections.controls.items.policy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.securityCompliance.sections.controls.items.detection.title')}</h4>
            </div>
            <p>{t('pages.securityCompliance.sections.controls.items.detection.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.securityCompliance.sections.controls.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.securityCompliance.sections.controls.items.compliance.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Engineering Process */}
      <Section
        title={t('pages.securityCompliance.sections.engineering.title')}
        description={t('pages.securityCompliance.sections.engineering.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.securityCompliance.sections.engineering.phases.threatModeling.title')}
            duration={t('pages.securityCompliance.sections.engineering.phases.threatModeling.duration')}
            items={Array.isArray(threatModelingItems) ? threatModelingItems : []}
          />
          <TimelinePhase
            title={t('pages.securityCompliance.sections.engineering.phases.testing.title')}
            duration={t('pages.securityCompliance.sections.engineering.phases.testing.duration')}
            items={Array.isArray(testingItems) ? testingItems : []}
          />
          <TimelinePhase
            title={t('pages.securityCompliance.sections.engineering.phases.complianceOps.title')}
            duration={t('pages.securityCompliance.sections.engineering.phases.complianceOps.duration')}
            items={Array.isArray(complianceOpsItems) ? complianceOpsItems : []}
          />
        </div>
      </Section>

      {/* Identity & Access */}
      <Section
        title={t('pages.securityCompliance.sections.identity.title')}
        description={t('pages.securityCompliance.sections.identity.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.identity.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              workloadIdentity: Fingerprint,
              accessControls: Lock,
              federation: Network,
              auditTrails: FileText,
              networkTrust: Shield,
              secretsScope: Key
            }
            const Icon = iconMap[key] || UserCheck
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Secrets & Key Management */}
      <Section
        title={t('pages.securityCompliance.sections.secrets.title')}
        description={t('pages.securityCompliance.sections.secrets.subtitle')}
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.secrets.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              vaults: Database,
              transit: Lock,
              atRest: HardDrive,
              signing: FileCheck,
              lifecycle: RefreshCw,
              customerKeys: Key
            }
            const Icon = iconMap[key] || Key
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Software Supply Chain */}
      <Section
        title={t('pages.securityCompliance.sections.supplyChain.title')}
        description={t('pages.securityCompliance.sections.supplyChain.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.supplyChain.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              sbom: FileText,
              provenance: CheckCircle2,
              isolation: Shield,
              hardening: Layers,
              policyGates: FileWarning,
              thirdParties: Users
            }
            const Icon = iconMap[key] || FileCheck
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Application & API Security */}
      <Section
        title={t('pages.securityCompliance.sections.appSecurity.title')}
        description={t('pages.securityCompliance.sections.appSecurity.subtitle')}
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.appSecurity.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              secureCoding: Code,
              apiHardening: Shield,
              dataValidation: CheckCircle2,
              secretsInCode: Key,
              aiLLMSecurity: Zap,
              testing: Activity
            }
            const Icon = iconMap[key] || Shield
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Cloud & Network Security */}
      <Section
        title={t('pages.securityCompliance.sections.cloudNetwork.title')}
        description={t('pages.securityCompliance.sections.cloudNetwork.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.cloudNetwork.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              baselines: Server,
              segmentation: Network,
              edge: Globe,
              storage: Database,
              kubernetes: Cog,
              observability: Eye
            }
            const Icon = iconMap[key] || Cloud
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Threat Detection & Response */}
      <Section
        title={t('pages.securityCompliance.sections.threatDetection.title')}
        description={t('pages.securityCompliance.sections.threatDetection.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.securityCompliance.sections.threatDetection.phases.detections.title')}
            duration={t('pages.securityCompliance.sections.threatDetection.phases.detections.duration')}
            items={Array.isArray(detectionsItems) ? detectionsItems : []}
          />
          <TimelinePhase
            title={t('pages.securityCompliance.sections.threatDetection.phases.operations.title')}
            duration={t('pages.securityCompliance.sections.threatDetection.phases.operations.duration')}
            items={Array.isArray(operationsItems) ? operationsItems : []}
          />
          <TimelinePhase
            title={t('pages.securityCompliance.sections.threatDetection.phases.continuity.title')}
            duration={t('pages.securityCompliance.sections.threatDetection.phases.continuity.duration')}
            items={Array.isArray(continuityItems) ? continuityItems : []}
          />
        </div>
      </Section>

      {/* Compliance & Evidence */}
      <Section
        title={t('pages.securityCompliance.sections.complianceEvidence.title')}
        description={t('pages.securityCompliance.sections.complianceEvidence.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.complianceEvidence.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              frameworks: Scale,
              evidence: FileCheck,
              tasks: Settings,
              vendors: Users,
              policies: BookOpen,
              reporting: FileText
            }
            const Icon = iconMap[key] || CheckCircle2
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Privacy Engineering */}
      <Section
        title={t('pages.securityCompliance.sections.privacy.title')}
        description={t('pages.securityCompliance.sections.privacy.subtitle')}
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.privacy.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              lifecycle: RefreshCw,
              techniques: Shield,
              subjectRights: UserCheck,
              llmPrivacy: Lock,
              dataSharing: Database,
              privacyReviews: FileCheck
            }
            const Icon = iconMap[key] || Shield
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* KPIs & Benchmarks */}
      <Section
        title={t('pages.securityCompliance.sections.kpis.title')}
        description={t('pages.securityCompliance.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          {Object.entries(t('pages.securityCompliance.sections.kpis.items', { returnObjects: true }) as Record<string, { title: string; desc: string }>).map(([key, item]) => {
            const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
              exposure: AlertTriangle,
              findings: FileWarning,
              incidents: Activity,
              compliance: CheckCircle2,
              education: BookOpen,
              cost: TrendingUp
            }
            const Icon = iconMap[key] || BarChart3
            
            return (
              <div key={key} className="platform-item">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Deployment Patterns */}
      <Section
        title={t('pages.securityCompliance.sections.deployment.title')}
        description={t('pages.securityCompliance.sections.deployment.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.securityCompliance.sections.deployment.phases.cloudNative.title')}
            duration={t('pages.securityCompliance.sections.deployment.phases.cloudNative.duration')}
            items={Array.isArray(cloudNativeItems) ? cloudNativeItems : []}
          />
          <TimelinePhase
            title={t('pages.securityCompliance.sections.deployment.phases.hybrid.title')}
            duration={t('pages.securityCompliance.sections.deployment.phases.hybrid.duration')}
            items={Array.isArray(hybridItems) ? hybridItems : []}
          />
          <TimelinePhase
            title={t('pages.securityCompliance.sections.deployment.phases.sovereign.title')}
            duration={t('pages.securityCompliance.sections.deployment.phases.sovereign.duration')}
            items={Array.isArray(sovereignItems) ? sovereignItems : []}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.securityCompliance.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
