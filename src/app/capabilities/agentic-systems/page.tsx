"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Boxes, Play, Database, Wrench, Shield, Activity, Network, GitFork, Users, Settings, Lock, FileCheck,
  FileCode, BookOpen, Brain, BarChart3, Target, CheckCircle2, AlertTriangle, RefreshCw,
  Cloud, Server, Key, Eye, TestTube, DollarSign, GitBranch, UserCheck, FileText, Zap,
  Layers, PackageCheck, TrendingUp, Clock, ThumbsUp, Cpu, Code2, Lightbulb, Briefcase
} from 'lucide-react'

export default function AgenticSystemsPage() {
  const { t } = useI18n()
  
  // Safe array extraction for TimelinePhase items
  const goalItems = t('pages.agenticSystems.sections.planning.phases.goal.items', { returnObjects: true })
  const planItems = t('pages.agenticSystems.sections.planning.phases.plan.items', { returnObjects: true })
  const executeItems = t('pages.agenticSystems.sections.planning.phases.execute.items', { returnObjects: true })
  const preventionItems = t('pages.agenticSystems.sections.policySafety.phases.prevention.items', { returnObjects: true })
  const detectionItems = t('pages.agenticSystems.sections.policySafety.phases.detection.items', { returnObjects: true })
  const recoveryItems = t('pages.agenticSystems.sections.policySafety.phases.recovery.items', { returnObjects: true })
  const cloudNativeItems = t('pages.agenticSystems.sections.deploymentPatterns.phases.cloudNative.items', { returnObjects: true })
  const hybridItems = t('pages.agenticSystems.sections.deploymentPatterns.phases.hybrid.items', { returnObjects: true })
  const sovereignItems = t('pages.agenticSystems.sections.deploymentPatterns.phases.sovereign.items', { returnObjects: true })

  return (
    <PageLayout
      title={t('pages.agenticSystems.title')}
      description={t('pages.agenticSystems.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.agenticSystems.breadcrumb'), href: '/capabilities/agentic-systems' }
      ]}
    >
      <Section
        title={t('pages.agenticSystems.sections.overview.title')}
        description={t('pages.agenticSystems.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.agenticSystems.sections.overview.content.0')}</p>
          <p>{t('pages.agenticSystems.sections.overview.content.1')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.systemModel.title')}
        description={t('pages.agenticSystems.sections.systemModel.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Boxes className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.systemModel.items.planner.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.systemModel.items.planner.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Play className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.systemModel.items.executor.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.systemModel.items.executor.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.systemModel.items.memory.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.systemModel.items.memory.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.systemModel.items.tools.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.systemModel.items.tools.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.systemModel.items.policies.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.systemModel.items.policies.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.systemModel.items.observability.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.systemModel.items.observability.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.planning.title')}
        description={t('pages.agenticSystems.sections.planning.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.agenticSystems.sections.planning.phases.goal.title')}
            duration={t('pages.agenticSystems.sections.planning.phases.goal.duration')}
            items={Array.isArray(goalItems) ? goalItems : []}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.sections.planning.phases.plan.title')}
            duration={t('pages.agenticSystems.sections.planning.phases.plan.duration')}
            items={Array.isArray(planItems) ? planItems : []}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.sections.planning.phases.execute.title')}
            duration={t('pages.agenticSystems.sections.planning.phases.execute.duration')}
            items={Array.isArray(executeItems) ? executeItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.architecture.title')}
        description={t('pages.agenticSystems.sections.architecture.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.architecture.items.gateway.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.architecture.items.gateway.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitFork className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.architecture.items.orchestrator.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.architecture.items.orchestrator.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.architecture.items.toolRuntime.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.architecture.items.toolRuntime.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.architecture.items.memoryLayer.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.architecture.items.memoryLayer.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.architecture.items.policyEngine.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.architecture.items.policyEngine.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.architecture.items.observability.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.architecture.items.observability.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.toolsIntegration.title')}
        description={t('pages.agenticSystems.sections.toolsIntegration.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.toolsIntegration.items.contracts.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.toolsIntegration.items.contracts.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.toolsIntegration.items.catalog.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.toolsIntegration.items.catalog.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.toolsIntegration.items.delegation.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.toolsIntegration.items.delegation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.toolsIntegration.items.observation.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.toolsIntegration.items.observation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.toolsIntegration.items.resilience.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.toolsIntegration.items.resilience.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.toolsIntegration.items.dataAccess.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.toolsIntegration.items.dataAccess.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.memoryKnowledge.title')}
        description={t('pages.agenticSystems.sections.memoryKnowledge.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.memoryKnowledge.items.episodic.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.memoryKnowledge.items.episodic.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.memoryKnowledge.items.semantic.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.memoryKnowledge.items.semantic.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.memoryKnowledge.items.working.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.memoryKnowledge.items.working.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.memoryKnowledge.items.learning.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.memoryKnowledge.items.learning.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.memoryKnowledge.items.governance.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.memoryKnowledge.items.governance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.memoryKnowledge.items.edge.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.memoryKnowledge.items.edge.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.policySafety.title')}
        description={t('pages.agenticSystems.sections.policySafety.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.agenticSystems.sections.policySafety.phases.prevention.title')}
            duration={t('pages.agenticSystems.sections.policySafety.phases.prevention.duration')}
            items={Array.isArray(preventionItems) ? preventionItems : []}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.sections.policySafety.phases.detection.title')}
            duration={t('pages.agenticSystems.sections.policySafety.phases.detection.duration')}
            items={Array.isArray(detectionItems) ? detectionItems : []}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.sections.policySafety.phases.recovery.title')}
            duration={t('pages.agenticSystems.sections.policySafety.phases.recovery.duration')}
            items={Array.isArray(recoveryItems) ? recoveryItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.reliabilityOps.title')}
        description={t('pages.agenticSystems.sections.reliabilityOps.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.reliabilityOps.items.slis.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.reliabilityOps.items.slis.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.reliabilityOps.items.runbooks.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.reliabilityOps.items.runbooks.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.reliabilityOps.items.observability.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.reliabilityOps.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.reliabilityOps.items.testing.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.reliabilityOps.items.testing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.reliabilityOps.items.cost.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.reliabilityOps.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.reliabilityOps.items.changeMgmt.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.reliabilityOps.items.changeMgmt.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.deploymentPatterns.title')}
        description={t('pages.agenticSystems.sections.deploymentPatterns.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.agenticSystems.sections.deploymentPatterns.phases.cloudNative.title')}
            duration={t('pages.agenticSystems.sections.deploymentPatterns.phases.cloudNative.duration')}
            items={Array.isArray(cloudNativeItems) ? cloudNativeItems : []}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.sections.deploymentPatterns.phases.hybrid.title')}
            duration={t('pages.agenticSystems.sections.deploymentPatterns.phases.hybrid.duration')}
            items={Array.isArray(hybridItems) ? hybridItems : []}
          />
          <TimelinePhase
            title={t('pages.agenticSystems.sections.deploymentPatterns.phases.sovereign.title')}
            duration={t('pages.agenticSystems.sections.deploymentPatterns.phases.sovereign.duration')}
            items={Array.isArray(sovereignItems) ? sovereignItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.humanLoop.title')}
        description={t('pages.agenticSystems.sections.humanLoop.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.humanLoop.items.approval.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.humanLoop.items.approval.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.humanLoop.items.auditability.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.humanLoop.items.auditability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.humanLoop.items.accountability.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.humanLoop.items.accountability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.humanLoop.items.ethics.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.humanLoop.items.ethics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.humanLoop.items.access.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.humanLoop.items.access.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.humanLoop.items.training.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.humanLoop.items.training.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.designConsiderations.title')}
        description={t('pages.agenticSystems.sections.designConsiderations.subtitle')}
      >
        <div className="deliverables-grid">
          <div className="deliverable-item">
            <CheckCircle2 className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.agenticSystems.sections.designConsiderations.items.bounded.title')}</h3>
            <p>{t('pages.agenticSystems.sections.designConsiderations.items.bounded.desc')}</p>
          </div>
          <div className="deliverable-item">
            <PackageCheck className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.agenticSystems.sections.designConsiderations.items.truth.title')}</h3>
            <p>{t('pages.agenticSystems.sections.designConsiderations.items.truth.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Zap className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.agenticSystems.sections.designConsiderations.items.robust.title')}</h3>
            <p>{t('pages.agenticSystems.sections.designConsiderations.items.robust.desc')}</p>
          </div>
          <div className="deliverable-item">
            <Lock className="w-6 h-6 mb-2 text-blue-600 dark:text-blue-400" />
            <h3>{t('pages.agenticSystems.sections.designConsiderations.items.security.title')}</h3>
            <p>{t('pages.agenticSystems.sections.designConsiderations.items.security.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.implementationPatterns.title')}
        description={t('pages.agenticSystems.sections.implementationPatterns.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.implementationPatterns.items.research.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.implementationPatterns.items.research.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.implementationPatterns.items.planAct.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.implementationPatterns.items.planAct.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.implementationPatterns.items.multiAgent.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.implementationPatterns.items.multiAgent.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.implementationPatterns.items.learningLoop.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.implementationPatterns.items.learningLoop.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.useCases.title')}
        description={t('pages.agenticSystems.sections.useCases.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.useCases.items.support.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.useCases.items.support.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.useCases.items.data.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.useCases.items.data.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.useCases.items.devops.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.useCases.items.devops.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.useCases.items.research.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.useCases.items.research.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.useCases.items.coding.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.useCases.items.coding.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.useCases.items.backOffice.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.useCases.items.backOffice.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.agenticSystems.sections.kpis.title')}
        description={t('pages.agenticSystems.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.success.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.success.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.quality.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.quality.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.cost.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.cost.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.latency.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.latency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.policy.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.policy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.retry.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.retry.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <ThumbsUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.agenticSystems.sections.kpis.items.satisfaction.title')}</h4>
            </div>
            <p>{t('pages.agenticSystems.sections.kpis.items.satisfaction.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.agenticSystems.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
