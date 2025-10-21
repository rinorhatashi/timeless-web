"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { Microscope, Target, Layers, Cpu, Database, Brain, Shield, Zap, Globe, FileText, GitBranch, Beaker, Search, MapPin, Link as LinkIcon, Wrench, CheckCircle, Lock, Code, Binary, Network, Play, Video, Mic, Gauge, HardDrive, Box, Satellite, BarChart3, AlertTriangle, TrendingUp, BookOpen, Scale, Users, Package } from 'lucide-react'

export default function DeepTechResearchPage() {
  const { t, isLoading } = useI18n()
  
  if (isLoading) {
    return null // Loading skeleton is handled by loading.tsx
  }
  
  // Safe array extraction for TimelinePhase items
  const hypothesisItems = t('pages.deepTechResearch.sections.methodology.phases.hypothesis.items', { returnObjects: true })
  const implementationItems = t('pages.deepTechResearch.sections.methodology.phases.implementation.items', { returnObjects: true })
  const evaluationItems = t('pages.deepTechResearch.sections.methodology.phases.evaluation.items', { returnObjects: true })
  const safetyPolicyItems = t('pages.deepTechResearch.sections.safety.phases.policy.items', { returnObjects: true })
  const safetyTuningItems = t('pages.deepTechResearch.sections.safety.phases.tuning.items', { returnObjects: true })
  const safetyMonitoringItems = t('pages.deepTechResearch.sections.safety.phases.monitoring.items', { returnObjects: true })
  const transferHardeningItems = t('pages.deepTechResearch.sections.transfer.phases.hardening.items', { returnObjects: true })
  const transferIntegrationItems = t('pages.deepTechResearch.sections.transfer.phases.integration.items', { returnObjects: true })
  const transferAdoptionItems = t('pages.deepTechResearch.sections.transfer.phases.adoption.items', { returnObjects: true })
  
  return (
    <PageLayout
      title={t('pages.deepTechResearch.title')}
      description={t('pages.deepTechResearch.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.deepTechResearch.breadcrumb'), href: '/capabilities/deep-tech-research' }
      ]}
    >
      <Section
        title={t('pages.deepTechResearch.sections.overview.title')}
        description={t('pages.deepTechResearch.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.deepTechResearch.sections.overview.content.0')}</p>
          <p>{t('pages.deepTechResearch.sections.overview.content.1')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.focusAreas.title')}
        description={t('pages.deepTechResearch.sections.focusAreas.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.focusAreas.items.training.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.focusAreas.items.training.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.focusAreas.items.retrieval.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.focusAreas.items.retrieval.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.focusAreas.items.reasoning.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.focusAreas.items.reasoning.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.focusAreas.items.multimodal.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.focusAreas.items.multimodal.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.focusAreas.items.safety.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.focusAreas.items.safety.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.focusAreas.items.onDevice.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.focusAreas.items.onDevice.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.methodology.title')}
        description={t('pages.deepTechResearch.sections.methodology.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.methodology.phases.hypothesis.title')}
            duration={t('pages.deepTechResearch.sections.methodology.phases.hypothesis.duration')}
            items={Array.isArray(hypothesisItems) ? hypothesisItems : []}
          />
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.methodology.phases.implementation.title')}
            duration={t('pages.deepTechResearch.sections.methodology.phases.implementation.duration')}
            items={Array.isArray(implementationItems) ? implementationItems : []}
          />
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.methodology.phases.evaluation.title')}
            duration={t('pages.deepTechResearch.sections.methodology.phases.evaluation.duration')}
            items={Array.isArray(evaluationItems) ? evaluationItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.architectures.title')}
        description={t('pages.deepTechResearch.sections.architectures.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.architectures.items.neural.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.architectures.items.neural.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.architectures.items.optimization.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.architectures.items.optimization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.architectures.items.regularization.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.architectures.items.regularization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.architectures.items.distillation.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.architectures.items.distillation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.architectures.items.continual.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.architectures.items.continual.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Beaker className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.architectures.items.evaluation.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.architectures.items.evaluation.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.retrieval.title')}
        description={t('pages.deepTechResearch.sections.retrieval.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.retrieval.items.indexing.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.retrieval.items.indexing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.retrieval.items.routing.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.retrieval.items.routing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <LinkIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.retrieval.items.grounding.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.retrieval.items.grounding.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.retrieval.items.agentsTools.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.retrieval.items.agentsTools.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.retrieval.items.evals.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.retrieval.items.evals.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.retrieval.items.privacy.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.retrieval.items.privacy.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.reasoning.title')}
        description={t('pages.deepTechResearch.sections.reasoning.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.reasoning.items.planner.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.reasoning.items.planner.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.reasoning.items.codeGeneration.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.reasoning.items.codeGeneration.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Binary className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.reasoning.items.symbolic.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.reasoning.items.symbolic.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.reasoning.items.verification.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.reasoning.items.verification.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.reasoning.items.memory.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.reasoning.items.memory.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.reasoning.items.benchmarks.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.reasoning.items.benchmarks.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.multimodal.title')}
        description={t('pages.deepTechResearch.sections.multimodal.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.multimodal.items.vision.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.multimodal.items.vision.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Mic className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.multimodal.items.speech.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.multimodal.items.speech.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Video className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.multimodal.items.temporal.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.multimodal.items.temporal.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Play className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.multimodal.items.action.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.multimodal.items.action.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Satellite className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.multimodal.items.edgeCapture.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.multimodal.items.edgeCapture.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.multimodal.items.evals.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.multimodal.items.evals.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.efficiency.title')}
        description={t('pages.deepTechResearch.sections.efficiency.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Binary className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.efficiency.items.quantization.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.efficiency.items.quantization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.efficiency.items.sparsity.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.efficiency.items.sparsity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.efficiency.items.caching.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.efficiency.items.caching.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.efficiency.items.compilation.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.efficiency.items.compilation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.efficiency.items.distributed.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.efficiency.items.distributed.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.efficiency.items.costModels.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.efficiency.items.costModels.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.safety.title')}
        description={t('pages.deepTechResearch.sections.safety.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.safety.phases.policy.title')}
            duration={t('pages.deepTechResearch.sections.safety.phases.policy.duration')}
            items={Array.isArray(safetyPolicyItems) ? safetyPolicyItems : []}
          />
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.safety.phases.tuning.title')}
            duration={t('pages.deepTechResearch.sections.safety.phases.tuning.duration')}
            items={Array.isArray(safetyTuningItems) ? safetyTuningItems : []}
          />
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.safety.phases.monitoring.title')}
            duration={t('pages.deepTechResearch.sections.safety.phases.monitoring.duration')}
            items={Array.isArray(safetyMonitoringItems) ? safetyMonitoringItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.onDevice.title')}
        description={t('pages.deepTechResearch.sections.onDevice.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.onDevice.items.operators.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.onDevice.items.operators.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.onDevice.items.packaging.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.onDevice.items.packaging.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.onDevice.items.federation.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.onDevice.items.federation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.onDevice.items.sovereignty.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.onDevice.items.sovereignty.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.onDevice.items.evals.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.onDevice.items.evals.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.onDevice.items.tooling.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.onDevice.items.tooling.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.kpis.title')}
        description={t('pages.deepTechResearch.sections.kpis.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.kpis.items.capability.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.kpis.items.capability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.kpis.items.robustness.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.kpis.items.robustness.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.kpis.items.efficiency.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.kpis.items.efficiency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.kpis.items.cost.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.kpis.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.kpis.items.safety.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.kpis.items.safety.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.kpis.items.reproducibility.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.kpis.items.reproducibility.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.openScience.title')}
        description={t('pages.deepTechResearch.sections.openScience.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.openScience.items.artifacts.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.openScience.items.artifacts.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.openScience.items.licensing.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.openScience.items.licensing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.openScience.items.standards.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.openScience.items.standards.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.openScience.items.ethics.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.openScience.items.ethics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.openScience.items.community.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.openScience.items.community.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.openScience.items.patents.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.openScience.items.patents.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.transfer.title')}
        description={t('pages.deepTechResearch.sections.transfer.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.transfer.phases.hardening.title')}
            duration={t('pages.deepTechResearch.sections.transfer.phases.hardening.duration')}
            items={Array.isArray(transferHardeningItems) ? transferHardeningItems : []}
          />
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.transfer.phases.integration.title')}
            duration={t('pages.deepTechResearch.sections.transfer.phases.integration.duration')}
            items={Array.isArray(transferIntegrationItems) ? transferIntegrationItems : []}
          />
          <TimelinePhase
            title={t('pages.deepTechResearch.sections.transfer.phases.adoption.title')}
            duration={t('pages.deepTechResearch.sections.transfer.phases.adoption.duration')}
            items={Array.isArray(transferAdoptionItems) ? transferAdoptionItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.lab.title')}
        description={t('pages.deepTechResearch.sections.lab.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Microscope className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.lab.items.compute.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.lab.items.compute.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.lab.items.data.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.lab.items.data.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Beaker className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.lab.items.evals.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.lab.items.evals.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.lab.items.reproducibility.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.lab.items.reproducibility.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.lab.items.collaboration.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.lab.items.collaboration.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.deepTechResearch.sections.lab.items.ipLicensing.title')}</h4>
            </div>
            <p>{t('pages.deepTechResearch.sections.lab.items.ipLicensing.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.deepTechResearch.sections.outputs.title')}
        description={t('pages.deepTechResearch.sections.outputs.subtitle')}
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <Code className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.deepTechResearch.sections.outputs.items.reference.title')}</h3>
            <p>{t('pages.deepTechResearch.sections.outputs.items.reference.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Database className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.deepTechResearch.sections.outputs.items.datasets.title')}</h3>
            <p>{t('pages.deepTechResearch.sections.outputs.items.datasets.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Target className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.deepTechResearch.sections.outputs.items.benchmarks.title')}</h3>
            <p>{t('pages.deepTechResearch.sections.outputs.items.benchmarks.desc')}</p>
          </div>
          <div className="deliverable-item">
            <FileText className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.deepTechResearch.sections.outputs.items.reports.title')}</h3>
            <p>{t('pages.deepTechResearch.sections.outputs.items.reports.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.deepTechResearch.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
