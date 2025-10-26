"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Search, 
  Database, 
  GitFork, 
  FileText, 
  Shield, 
  Activity, 
  Layers, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  Clock,
  Award,
  Zap,
  Code2,
  Server,
  Box,
  MessageSquare,
  Target,
  Eye
} from 'lucide-react'

export default function RAGKnowledgeOrchestrationPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.ragKnowledgeOrchestration.title')}
      description={t('pages.ragKnowledgeOrchestration.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.ragKnowledgeOrchestration.breadcrumb'), href: '/capabilities/rag-knowledge-orchestration' }
      ]}
    >
      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.overview.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.ragKnowledgeOrchestration.sections.overview.content.0')}</p>
          <p>{t('pages.ragKnowledgeOrchestration.sections.overview.content.1')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.systemModel.title')}
        variant="alt"
      >
        <div className="content-prose">
          <p>{t('pages.ragKnowledgeOrchestration.sections.systemModel.content')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.outcomes.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.outcomes.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.outcomes.items.trust.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.outcomes.items.trust.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.outcomes.items.freshness.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.outcomes.items.freshness.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.outcomes.items.performance.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.outcomes.items.performance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.refArchitecture.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.refArchitecture.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitFork className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.routing.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.routing.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.hybridRetrieval.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.hybridRetrieval.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Box className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.knowledgeGraph.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.knowledgeGraph.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.synthesis.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.synthesis.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.policy.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.policy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.evals.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.refArchitecture.items.evals.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.indexingStores.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.indexingStores.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.vectorDB.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.vectorDB.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.sparse.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.sparse.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Box className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.graph.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.graph.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.tables.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.tables.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.code.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.code.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.caches.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.indexingStores.items.caches.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.classification.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.classification.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.rewriting.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.rewriting.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.bandits.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.bandits.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.contextWindows.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.contextWindows.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.abstain.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.abstain.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.telemetry.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.retrievalOrchestration.items.telemetry.desc')}</p>
          </div>
        </div>
      </Section>

      {/* CTA Section - Link to RAG Orchestrator (keeping this special design) */}
      <Section>
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to build production RAG systems?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Explore our RAG Orchestrator platform for end-to-end knowledge orchestration
            </p>
            <Link 
              href={t('pages.ragKnowledgeOrchestration.sections.ctaSection.link')}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {t('pages.ragKnowledgeOrchestration.sections.ctaSection.text')} 
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.dataIndexing.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.dataIndexing.subtitle')}
        variant="alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.ingestion.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.ingestion.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Box className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.chunking.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.chunking.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.embeddings.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.embeddings.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.metadata.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.dataIndexing.items.metadata.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.citations.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.citations.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.redaction.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.redaction.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.format.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.format.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.policies.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.policies.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.feedback.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.feedback.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.edgeSovereign.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.synthesisGuardrails.items.edgeSovereign.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.ragKnowledgeOrchestration.sections.operationsKpis.title')}
        description={t('pages.ragKnowledgeOrchestration.sections.operationsKpis.subtitle')}
        variant="alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.groundedness.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.groundedness.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.freshness.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.freshness.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.latencyCost.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.latencyCost.desc')}</p>
          </div>
          
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.userFeedback.title')}</h4>
            </div>
            <p>{t('pages.ragKnowledgeOrchestration.sections.operationsKpis.items.userFeedback.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.ragKnowledgeOrchestration.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
