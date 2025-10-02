import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'

export default function RAGKnowledgeOrchestrationPage() {
  return (
    <PageLayout
      title="RAG & Knowledge Orchestration"
      description="Graph RAG with semantic routing, query rewriting, hybrid retrieval, and policy-aware synthesis. Built for citations, freshness, and low hallucination risk."
      breadcrumbs={[
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'RAG & Knowledge Orchestration', href: '/capabilities/rag-knowledge-orchestration' }
      ]}
    >
      <Section
        title="Overview"
        description="RAG is only as good as routing, data hygiene, and synthesis discipline. We combine multiple retrieval strategies with a knowledge graph and policy‑aware generators to keep answers grounded and current."
      >
        <div className="content-prose">
          <p>Our orchestration attaches provenance and citations to every answer. Queries are rewritten and routed to the best retriever; synthesis respects source boundaries and redacts sensitive fields where required. This creates trustable assistants for docs, support, engineering knowledge, and regulated content.</p>
        </div>
      </Section>

      <Section
        title="Outcomes"
        description="Ground truth with speed"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Trust</h4>
            <p>Citations and provenance by default; abstain when confidence is low.</p>
          </div>
          <div className="platform-item">
            <h4>Freshness</h4>
            <p>Recrawl/invalidation SLAs; near‑real‑time indices where needed.</p>
          </div>
          <div className="platform-item">
            <h4>Performance</h4>
            <p>P95 latency targets via routing and caching; predictable costs per query.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Reference Architecture"
        description="Retrieval strategies and guards"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Routing</h4>
            <p>Query intent detection, rewriting, and multi-armed bandit selection.</p>
          </div>
          <div className="platform-item">
            <h4>Hybrid Retrieval</h4>
            <p>Vector + BM25 + structure-aware retrievers with dedup and re-ranking.</p>
          </div>
          <div className="platform-item">
            <h4>Knowledge Graph</h4>
            <p>Entity/relationship store, provenance, and freshness scoring.</p>
          </div>
          <div className="platform-item">
            <h4>Synthesis</h4>
            <p>Citation-first generation, chunk-attribution, and guardrail prompts.</p>
          </div>
          <div className="platform-item">
            <h4>Policy</h4>
            <p>Access controls, redaction, and content/classification filters.</p>
          </div>
          <div className="platform-item">
            <h4>Evals</h4>
            <p>Groundedness, citation density, latency, and freshness KPIs.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Indexing & Stores"
        description="Choose the right store for the job"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Vector DB</h4>
            <p>HNSW/IVF‑PQ, sharding/replication, and filterable metadata; TTL and freshness tiers.</p>
          </div>
          <div className="platform-item">
            <h4>Sparse</h4>
            <p>BM25/colBERT indexes for lexical match; hybrid re‑ranking to improve precision.</p>
          </div>
          <div className="platform-item">
            <h4>Graph</h4>
            <p>Entities/relations with provenance; path queries for reasoning and disambiguation.</p>
          </div>
          <div className="platform-item">
            <h4>Tables</h4>
            <p>Schema‑aware retrievers and SQL generation with guardrails and allow‑listed queries.</p>
          </div>
          <div className="platform-item">
            <h4>Code</h4>
            <p>Symbol and call‑graph indexes; docstring/citation linking; semantic search with structure.</p>
          </div>
          <div className="platform-item">
            <h4>Caches</h4>
            <p>Query/result and chunk caches; invalidation policies; cost‑latency tradeoffs.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Retrieval Orchestration"
        description="Make the router smarter over time"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Classification</h4>
            <p>Intent detection and schema selection; domain routing and fallbacks.</p>
          </div>
          <div className="platform-item">
            <h4>Rewriting</h4>
            <p>Query expansion, paraphrase, and negative term injection; language and locale handling.</p>
          </div>
          <div className="platform-item">
            <h4>Bandits</h4>
            <p>Multi‑armed policies with offline evaluation and online learning; guardrail bounds.</p>
          </div>
          <div className="platform-item">
            <h4>Context windows</h4>
            <p>Chunk budgeting and dedup; diversity and novelty controls; anti‑leak filters.</p>
          </div>
          <div className="platform-item">
            <h4>Abstain</h4>
            <p>Confidence estimation and safe fallbacks to human or search flows.</p>
          </div>
          <div className="platform-item">
            <h4>Telemetry</h4>
            <p>Per‑strategy outcomes; cost/latency/quality tradeoffs; policy hit rates.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Data & Indexing"
        description="Quality in, quality out"
        variant="alt"
      >
        <div className="grid-2">
          <Card
            title="Ingestion"
            description="Connectors, de‑duplication, partitioning, and canonicalization for PDFs, tables, HTML, code, and media."
          />
          <Card
            title="Chunking"
            description="Layout‑aware segmentation, table extraction, and code symbol graphs for better recall and citation density."
          />
          <Card
            title="Embeddings"
            description="Domain‑tuned encoders, hard negative mining, and periodic refresh jobs to avoid staleness."
          />
          <Card
            title="Metadata"
            description="Source, authorship, timestamp, and access labels for routing and policy enforcement."
          />
        </div>
      </Section>

      <Section
        title="Synthesis & Guardrails"
        description="Grounded generation that respects policy"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Citations</h4>
            <p>Chunk‑level attributions; entailment checks; user‑visible references.</p>
          </div>
          <div className="platform-item">
            <h4>Redaction</h4>
            <p>PII masking/minimization; allow‑listed fields; purpose binding for outputs.</p>
          </div>
          <div className="platform-item">
            <h4>Format</h4>
            <p>Schema‑constrained outputs; validators for JSON/XML; error‑aware re‑asks.</p>
          </div>
          <div className="platform-item">
            <h4>Policies</h4>
            <p>Content filters, classification, and role‑based guardrails; audit trails.</p>
          </div>
          <div className="platform-item">
            <h4>Feedback</h4>
            <p>User voting and correction capture; flywheel into retrievers and prompts.</p>
          </div>
          <div className="platform-item">
            <h4>Edge/sovereign</h4>
            <p>On‑prem synthesis with local indices; HSM custody and offline operation.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Operations & KPIs"
        description="Retrieval that improves with use"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Groundedness</h4>
            <p>Citation coverage and correctness; abstain rates when confidence is low.</p>
          </div>
          <div className="platform-item">
            <h4>Freshness</h4>
            <p>Index lag and decay; SLA on ingestion latency and invalidation.</p>
          </div>
          <div className="platform-item">
            <h4>Latency & cost</h4>
            <p>Per strategy and overall; router decisions vs outcomes to tune policies.</p>
          </div>
          <div className="platform-item">
            <h4>User feedback</h4>
            <p>Vote/acceptance signals and error classes feeding back to retraining.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 