import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'

export default function DataPlatformsPage() {
  return (
    <PageLayout
      title="Data Platforms"
      description="We build data backbones for AI: streaming ingestion, lakehouse tables, feature stores, and governance that meets privacy and compliance without killing velocity."
      breadcrumbs={[
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Data Platforms', href: '/capabilities/data-platforms' }
      ]}
    >
      <Section
        title="Overview"
        description="Decision‑grade data from source to activation"
      >
        <div className="content-prose">
          <p>Modern data platforms are product platforms: contract‑driven ingestion, lakehouse storage with open table formats, batch/stream processing with reliable orchestration, feature stores with point‑in‑time correctness, and governed access with privacy guardrails. We engineer for freshness, quality, and cost - with SLOs that map to business outcomes and ML/analytics workloads.</p>
          <p>Our blueprints emphasize data ownership and self‑serve: domain data products with clear SLAs, lineage, and observability. We align storage/compute tiers to workload patterns, automate compaction and vacuum, and use policy‑as‑code for access, retention, and purpose limitations. Everything ships with metrics, alerts, and playbooks.</p>
        </div>
      </Section>

      <Section
        title="Reference Stack"
        description="From ingestion to activation"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Ingestion</h4>
            <p>Kafka/Pulsar, CDC, schema registry, and data contracts with ownership.</p>
          </div>
          <div className="platform-item">
            <h4>Storage</h4>
            <p>Lakehouse (Iceberg/Delta), compaction, retention, and tiering strategies.</p>
          </div>
          <div className="platform-item">
            <h4>Processing</h4>
            <p>Batch/stream engines, incremental models, and laminar pipelines.</p>
          </div>
          <div className="platform-item">
            <h4>Feature Store</h4>
            <p>Offline/online stores, point-in-time correctness, and lineage.</p>
          </div>
          <div className="platform-item">
            <h4>Access</h4>
            <p>Privacy controls, data products, contracts, and SLAs for consumers.</p>
          </div>
          <div className="platform-item">
            <h4>Activation</h4>
            <p>Reverse ETL, metrics layers, and BI/ML service integrations.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Streaming & Ingestion"
        description="Contracts first, lossless capture, and backpressure safety"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Connectors</h4>
            <p>CDC (Debezium), file drops, APIs, and SDKs; schema evolution with compatibility enforcement.</p>
          </div>
          <div className="platform-item">
            <h4>Data contracts</h4>
            <p>Producer/consumer contracts, ownership, SLAs; tests at source to prevent breaking changes.</p>
          </div>
          <div className="platform-item">
            <h4>Buffering</h4>
            <p>Backpressure handling, dead‑letter queues, idempotency keys, and exactly‑once semantics where required.</p>
          </div>
          <div className="platform-item">
            <h4>Multitenancy</h4>
            <p>Topic and namespace isolation; quotas; encryption in transit and at rest.</p>
          </div>
          <div className="platform-item">
            <h4>Observability</h4>
            <p>Lag, throughput, and error budgets per source; SLO alerts and replay tooling.</p>
          </div>
          <div className="platform-item">
            <h4>Edge</h4>
            <p>Gateway ingestion, CDC at branch sites, and merge conflict resolution for intermittency.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Lakehouse Tables & Storage"
        description="Open tables, efficient IO, predictable costs"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Table formats</h4>
            <p>Apache Iceberg and Delta Lake; partitioning and clustering strategies; snapshot isolation.</p>
          </div>
          <div className="platform-item">
            <h4>Compaction</h4>
            <p>Small file mitigation, optimize/vacuum scheduling, and metadata pruning.</p>
          </div>
          <div className="platform-item">
            <h4>Tiers</h4>
            <p>Hot/warm/cold with lifecycle policies; archival and legal hold patterns.</p>
          </div>
          <div className="platform-item">
            <h4>Indexes</h4>
            <p>Bloom/Z‑order and manifest/metadata caching; vector indexes for retrieval features.</p>
          </div>
          <div className="platform-item">
            <h4>Security</h4>
            <p>Server‑side encryption, key rotation, row/column masking, and tokenized PII.</p>
          </div>
          <div className="platform-item">
            <h4>Governed deletes</h4>
            <p>Retention, time‑travel, GDPR/CCPA deletes, and reproducible compaction logs.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Processing & Orchestration"
        description="Incremental by default, resilient by design"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Engines</h4>
            <p>Spark/Flink/Beam/DBT; streaming first with CDC upserts and watermarks.</p>
          </div>
          <div className="platform-item">
            <h4>Orchestration</h4>
            <p>DAGs with retries, idempotent tasks, and backfill playbooks; SLAs with auto‑escalation.</p>
          </div>
          <div className="platform-item">
            <h4>Quality</h4>
            <p>Contract tests, anomaly detection, and quarantine; schema drift notifications.</p>
          </div>
          <div className="platform-item">
            <h4>Semantic layer</h4>
            <p>Metric definitions, versioning, and change audit; query authorization integrated.</p>
          </div>
          <div className="platform-item">
            <h4>Observability</h4>
            <p>Lineage, run logs, and resource usage; OpenTelemetry traces across jobs.</p>
          </div>
          <div className="platform-item">
            <h4>DevEx</h4>
            <p>Local dev with fixtures, data diffs in PRs, and ephemeral test runs.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Feature Stores & Online Serving"
        description="Point‑in‑time correctness and low‑latency reads"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Offline</h4>
            <p>Backfills, historical joins, and reproducible training sets with snapshot cutoffs.</p>
          </div>
          <div className="platform-item">
            <h4>Online</h4>
            <p>Serving stores with P99 targets; TTLs and write amplification controls; hot feature caching.</p>
          </div>
          <div className="platform-item">
            <h4>Materialization</h4>
            <p>Stream and micro‑batch sync; audit events for lineage and drift analysis.</p>
          </div>
          <div className="platform-item">
            <h4>Join correctness</h4>
            <p>As‑of joins, late data handling, and entity resolution rules.</p>
          </div>
          <div className="platform-item">
            <h4>Model registry</h4>
            <p>Versioning, signatures, canaries, and rollout policies tied to features and datasets.</p>
          </div>
          <div className="platform-item">
            <h4>Edge</h4>
            <p>Local caches and federated updates for sovereign/edge deployments.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Governance"
        description="Trust without friction"
      >
        <div className="grid-2">
          <Card
            title="Catalog & lineage"
            description="Automated metadata capture, ownership, and impact analysis."
          />
          <Card
            title="Privacy & policy"
            description="Row/column-level security, masking, consent, and purpose limits."
          />
          <Card
            title="Quality SLAs"
            description="Contracts, tests, and automatic quarantines for broken data."
          />
          <Card
            title="Clean rooms"
            description="Partner collaboration with privacy-preserving joins and logs."
          />
        </div>
      </Section>

      <Section
        title="Privacy & Clean Rooms"
        description="Collaborate without sharing raw data"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title="Consent & minimization"
            duration="Lawful, purpose‑bound use"
            items={[
              "Consent capture and purpose scoping",
              "Data minimization and masking",
              "Automated retention and deletion"
            ]}
          />
          <TimelinePhase
            title="Privacy tech"
            duration="Insights with protections"
            items={[
              "DP/k‑anonymity/synthetic data",
              "Pseudonymization and tokenization",
              "Threshold queries and noise"
            ]}
          />
          <TimelinePhase
            title="Clean rooms"
            duration="Partner analytics"
            items={[
              "Query templates and audits",
              "Cross‑party joins without data egress",
              "Usage logs and billing"
            ]}
          />
        </div>
      </Section>

      <Section
        title="KPIs & Benchmarks"
        description="Measure what matters"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Freshness</h4>
            <p>End‑to‑end latency by product; staleness budgets and breach counts.</p>
          </div>
          <div className="platform-item">
            <h4>Quality</h4>
            <p>Null rates, distribution drift, and quarantine durations; test pass rates.</p>
          </div>
          <div className="platform-item">
            <h4>Performance</h4>
            <p>Query P50/P95/P99, engine utilization, and compaction efficacy.</p>
          </div>
          <div className="platform-item">
            <h4>Adoption</h4>
            <p>Active data products, consumer SLAs, and self‑serve usage.</p>
          </div>
          <div className="platform-item">
            <h4>Reliability</h4>
            <p>Incident counts, MTTR/MTTD, and recovery time for backfills.</p>
          </div>
          <div className="platform-item">
            <h4>Cost</h4>
            <p>Storage growth, compute spend per TB processed, and egress.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 