"use client"

import Link from 'next/link'
import { PageLayout, Section } from '@/components/ui/page-layout'
import { TimelinePhase } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'
import { Cpu, Settings, Eye, Zap, Wifi, Shield, Activity, Gauge, Lock, Database, BarChart3, RefreshCw, Clock, GitBranch, Target, FileText, Wrench, CheckCircle, Radio } from 'lucide-react'

export default function EmbeddedEdgeAIPage() {
  const { t, tObject } = useI18n()
  
  const overviewContent = tObject('pages.embeddedEdgeAI.sections.overview.content')
  const contentArray = Array.isArray(overviewContent) ? overviewContent : []
  
  // Safe array extraction for TimelinePhase items
  const updatePipelineItems = tObject('pages.embeddedEdgeAI.sections.otaFleet.phases.updatePipeline.items')
  const fleetHealthItems = tObject('pages.embeddedEdgeAI.sections.otaFleet.phases.fleetHealth.items')
  const securityPostureItems = tObject('pages.embeddedEdgeAI.sections.otaFleet.phases.securityPosture.items')

  return (
    <PageLayout
      title={t('pages.embeddedEdgeAI.title')}
      description={t('pages.embeddedEdgeAI.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.embeddedEdgeAI.breadcrumb'), href: '/capabilities/embedded-edge-ai' }
      ]}
    >
      {/* Overview Section */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.overview.title')}
        description={t('pages.embeddedEdgeAI.sections.overview.subtitle')}
      >
        <div className="content-prose">
          {contentArray.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Stack Overview */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.stackOverview.title')}
        description={t('pages.embeddedEdgeAI.sections.stackOverview.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.stackOverview.items.hardware.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.stackOverview.items.hardware.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.stackOverview.items.osRT.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.stackOverview.items.osRT.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.stackOverview.items.perception.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.stackOverview.items.perception.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.stackOverview.items.inference.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.stackOverview.items.inference.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wifi className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.stackOverview.items.connectivity.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.stackOverview.items.connectivity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.stackOverview.items.safety.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.stackOverview.items.safety.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Optimization & Tooling */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.optimization.title')}
        description={t('pages.embeddedEdgeAI.sections.optimization.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.optimization.items.profiling.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.optimization.items.profiling.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.optimization.items.modelOpt.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.optimization.items.modelOpt.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.optimization.items.reliability.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.optimization.items.reliability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.optimization.items.otaFleet.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.optimization.items.otaFleet.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Architecture Patterns */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.architecturePatterns.title')}
        description={t('pages.embeddedEdgeAI.sections.architecturePatterns.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.timeCritical.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.timeCritical.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.perceptionPath.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.perceptionPath.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.controlLoop.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.controlLoop.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.edgeCache.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.edgeCache.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Radio className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.telemetry.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.telemetry.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.secureBoot.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.architecturePatterns.items.secureBoot.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Safety & Certification */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.safetyCert.title')}
        description={t('pages.embeddedEdgeAI.sections.safetyCert.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.safetyCert.items.safetyCase.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.safetyCert.items.safetyCase.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.safetyCert.items.tracing.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.safetyCert.items.tracing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.safetyCert.items.diagnostics.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.safetyCert.items.diagnostics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.safetyCert.items.dataGov.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.safetyCert.items.dataGov.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.safetyCert.items.toolQual.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.safetyCert.items.toolQual.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.safetyCert.items.procedures.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.safetyCert.items.procedures.desc')}</p>
          </div>
        </div>
      </Section>

      {/* OTA & Fleet Operations */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.otaFleet.title')}
        description={t('pages.embeddedEdgeAI.sections.otaFleet.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.embeddedEdgeAI.sections.otaFleet.phases.updatePipeline.title')}
            duration={t('pages.embeddedEdgeAI.sections.otaFleet.phases.updatePipeline.duration')}
            items={Array.isArray(updatePipelineItems) ? updatePipelineItems : []}
          />
          <TimelinePhase
            title={t('pages.embeddedEdgeAI.sections.otaFleet.phases.fleetHealth.title')}
            duration={t('pages.embeddedEdgeAI.sections.otaFleet.phases.fleetHealth.duration')}
            items={Array.isArray(fleetHealthItems) ? fleetHealthItems : []}
          />
          <TimelinePhase
            title={t('pages.embeddedEdgeAI.sections.otaFleet.phases.securityPosture.title')}
            duration={t('pages.embeddedEdgeAI.sections.otaFleet.phases.securityPosture.duration')}
            items={Array.isArray(securityPostureItems) ? securityPostureItems : []}
          />
        </div>
      </Section>

      {/* KPIs & Benchmarks */}
      <Section
        title={t('pages.embeddedEdgeAI.sections.kpis.title')}
        description={t('pages.embeddedEdgeAI.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.kpis.items.latency.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.kpis.items.latency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.kpis.items.energy.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.kpis.items.energy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.kpis.items.reliability.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.kpis.items.reliability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.kpis.items.accuracy.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.kpis.items.accuracy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.kpis.items.fleet.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.kpis.items.fleet.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.embeddedEdgeAI.sections.kpis.items.security.title')}</h4>
            </div>
            <p>{t('pages.embeddedEdgeAI.sections.kpis.items.security.desc')}</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.embeddedEdgeAI.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
