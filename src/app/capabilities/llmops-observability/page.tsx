"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { Activity, BarChart3, AlertCircle, Lock, Database, GitBranch, Shield, TrendingUp, FileCheck, Gauge, Layers, CheckCircle2, Search, Target, Box, Users, FileText, Zap, Play, ToggleLeft, AlertTriangle, Eye } from 'lucide-react'

export default function LLMOpsObservabilityPage() {
  const { t, tObject } = useI18n()
  
  // Safe array extraction for TimelinePhase items
  const requestItems = tObject('pages.llmopsObservability.sections.architecture.phases.request.items')
  const processingItems = tObject('pages.llmopsObservability.sections.architecture.phases.processing.items')
  const responseItems = tObject('pages.llmopsObservability.sections.architecture.phases.response.items')
  const preReleaseItems = tObject('pages.llmopsObservability.sections.runbook.phases.preRelease.items')
  const releaseItems = tObject('pages.llmopsObservability.sections.runbook.phases.release.items')
  const postReleaseItems = tObject('pages.llmopsObservability.sections.runbook.phases.postRelease.items')
  
  return (
    <PageLayout
      title={t('pages.llmopsObservability.title')}
      description={t('pages.llmopsObservability.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.llmopsObservability.breadcrumb'), href: '/capabilities/llmops-observability' }
      ]}
    >
      <Section
        title={t('pages.llmopsObservability.sections.overview.title')}
        description={t('pages.llmopsObservability.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.llmopsObservability.sections.overview.content.0')}</p>
          <p>{t('pages.llmopsObservability.sections.overview.content.1')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.systemModel.title')}
        description={t('pages.llmopsObservability.sections.systemModel.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.systemModel.items.instrumentation.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.systemModel.items.instrumentation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.systemModel.items.traces.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.systemModel.items.traces.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.systemModel.items.metrics.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.systemModel.items.metrics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.systemModel.items.evals.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.systemModel.items.evals.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.systemModel.items.feedback.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.systemModel.items.feedback.desc')}</p>
                  </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.systemModel.items.governance.title')}</h4>
                </div>
            <p>{t('pages.llmopsObservability.sections.systemModel.items.governance.desc')}</p>
              </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.architecture.title')}
        description={t('pages.llmopsObservability.sections.architecture.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.llmopsObservability.sections.architecture.phases.request.title')}
            duration={t('pages.llmopsObservability.sections.architecture.phases.request.duration')}
            items={Array.isArray(requestItems) ? requestItems : []}
          />
          <TimelinePhase
            title={t('pages.llmopsObservability.sections.architecture.phases.processing.title')}
            duration={t('pages.llmopsObservability.sections.architecture.phases.processing.duration')}
            items={Array.isArray(processingItems) ? processingItems : []}
          />
          <TimelinePhase
            title={t('pages.llmopsObservability.sections.architecture.phases.response.title')}
            duration={t('pages.llmopsObservability.sections.architecture.phases.response.duration')}
            items={Array.isArray(responseItems) ? responseItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.pipelines.title')}
        description={t('pages.llmopsObservability.sections.pipelines.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.pipelines.items.ingestion.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.pipelines.items.ingestion.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.pipelines.items.storage.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.pipelines.items.storage.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.pipelines.items.indexing.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.pipelines.items.indexing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.pipelines.items.aggregation.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.pipelines.items.aggregation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.pipelines.items.sampling.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.pipelines.items.sampling.desc')}</p>
                  </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.pipelines.items.privacy.title')}</h4>
                </div>
            <p>{t('pages.llmopsObservability.sections.pipelines.items.privacy.desc')}</p>
              </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.signals.title')}
        description={t('pages.llmopsObservability.sections.signals.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.signals.items.quality.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.signals.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.signals.items.safety.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.signals.items.safety.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.signals.items.latency.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.signals.items.latency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.signals.items.cost.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.signals.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.signals.items.drift.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.signals.items.drift.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.signals.items.userSatisfaction.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.signals.items.userSatisfaction.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.runbook.title')}
        description={t('pages.llmopsObservability.sections.runbook.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.llmopsObservability.sections.runbook.phases.preRelease.title')}
            duration={t('pages.llmopsObservability.sections.runbook.phases.preRelease.duration')}
            items={Array.isArray(preReleaseItems) ? preReleaseItems : []}
          />
          <TimelinePhase
            title={t('pages.llmopsObservability.sections.runbook.phases.release.title')}
            duration={t('pages.llmopsObservability.sections.runbook.phases.release.duration')}
            items={Array.isArray(releaseItems) ? releaseItems : []}
          />
          <TimelinePhase
            title={t('pages.llmopsObservability.sections.runbook.phases.postRelease.title')}
            duration={t('pages.llmopsObservability.sections.runbook.phases.postRelease.duration')}
            items={Array.isArray(postReleaseItems) ? postReleaseItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.reliability.title')}
        description={t('pages.llmopsObservability.sections.reliability.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.reliability.items.availability.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.reliability.items.availability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.reliability.items.latency.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.reliability.items.latency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.reliability.items.quality.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.reliability.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.reliability.items.cost.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.reliability.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.reliability.items.capacity.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.reliability.items.capacity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.reliability.items.incidents.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.reliability.items.incidents.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.security.title')}
        description={t('pages.llmopsObservability.sections.security.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.security.items.accessLogs.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.security.items.accessLogs.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.security.items.policyTracking.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.security.items.policyTracking.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.security.items.modelProvenance.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.security.items.modelProvenance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.security.items.piiHandling.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.security.items.piiHandling.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.security.items.incidentReports.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.security.items.incidentReports.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.security.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.security.items.compliance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.kpis.title')}
        description={t('pages.llmopsObservability.sections.kpis.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.kpis.items.taskSuccess.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.kpis.items.taskSuccess.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.kpis.items.quality.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.kpis.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.kpis.items.latency.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.kpis.items.latency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.kpis.items.cost.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.kpis.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.kpis.items.policyAdherence.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.kpis.items.policyAdherence.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.kpis.items.userEngagement.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.kpis.items.userEngagement.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.deployment.title')}
        description={t('pages.llmopsObservability.sections.deployment.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.deployment.items.shadowMode.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.deployment.items.shadowMode.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.deployment.items.canary.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.deployment.items.canary.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.deployment.items.abTesting.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.deployment.items.abTesting.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Box className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.deployment.items.blueGreen.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.deployment.items.blueGreen.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <ToggleLeft className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.deployment.items.featureFlags.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.deployment.items.featureFlags.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.llmopsObservability.sections.deployment.items.circuitBreakers.title')}</h4>
            </div>
            <p>{t('pages.llmopsObservability.sections.deployment.items.circuitBreakers.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.llmopsObservability.sections.outcomes.title')}
        description={t('pages.llmopsObservability.sections.outcomes.subtitle')}
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <h3>{t('pages.llmopsObservability.sections.outcomes.items.visibility.title')}</h3>
            <p>{t('pages.llmopsObservability.sections.outcomes.items.visibility.desc')}</p>
          </div>
          <div className="deliverable-item">
            <h3>{t('pages.llmopsObservability.sections.outcomes.items.reliability.title')}</h3>
            <p>{t('pages.llmopsObservability.sections.outcomes.items.reliability.desc')}</p>
          </div>
          <div className="deliverable-item">
            <h3>{t('pages.llmopsObservability.sections.outcomes.items.improvement.title')}</h3>
            <p>{t('pages.llmopsObservability.sections.outcomes.items.improvement.desc')}</p>
          </div>
          <div className="deliverable-item">
            <h3>{t('pages.llmopsObservability.sections.outcomes.items.governance.title')}</h3>
            <p>{t('pages.llmopsObservability.sections.outcomes.items.governance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.llmopsObservability.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
