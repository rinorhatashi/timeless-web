import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'

export default function PlatformEngineeringPage() {
  return (
    <PageLayout
      title="Platform Engineering & DevEx"
      description="We build internal platforms that make the right thing the easy thing: secure-by-default templates, opinionated CI/CD, IaC, policy-as-code, and cost/SLO guardrails."
      breadcrumbs={[
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Platform Engineering', href: '/capabilities/platform-engineering' }
      ]}
    >
      <Section
        title="Overview"
        description="A Platform Engineering org exists to make the right thing the easy thing. We build internal developer platforms (IDPs) that encode best practices as paved roads-with golden templates, shared runtime services, and guardrails for security, cost, and reliability. Teams ship faster because the platform removes undifferentiated heavy lifting and provides measurable DevEx improvements."
      >
        <div className="content-prose">
          <p>Our approach is product‑led: we treat the platform as a multi‑tenant product with customers (feature teams), SLAs/SLOs, a backlog, and adoption goals. We define high‑leverage capabilities once (identity, policy‑as‑code, CI/CD, IaC, observability, FinOps) and expose them as APIs and self‑service experiences. Everything is instrumented-time to first commit, time to first deploy, lead time for change, change failure rate, mean time to restore, on‑call load, and per‑team/cloud cost envelopes. Success is when teams create value quickly without needing a platform concierge.</p>
          <p>Technically, the platform standardizes: (1) developer workstations and templates; (2) build pipelines and artifact standards; (3) environment vending via IaC; (4) runtime policy and service mesh; (5) tracing/metrics/logs with out‑of‑the‑box dashboards; (6) security controls from commit to production; and (7) cost/SLO governance with automated feedback. We prefer composable, open interfaces over monoliths; we adopt where it's good enough and build where differentiation matters.</p>
        </div>
      </Section>

      <Section
        title="Platform Capabilities"
        description="Modular components you can adopt incrementally"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>IDP</h4>
            <p>Self-serve portal with backstage-style catalogs, scorecards, and golden paths.</p>
          </div>
          <div className="platform-item">
            <h4>CI/CD</h4>
            <p>Reusable pipelines, artifact standards, provenance, and progressive delivery.</p>
          </div>
          <div className="platform-item">
            <h4>IaC</h4>
            <p>Terraform + policy-as-code; drift detection; environment vending as APIs.</p>
          </div>
          <div className="platform-item">
            <h4>Security</h4>
            <p>Secrets, SBOM/SLSA, dependency risk, and pre-merge policy gates.</p>
          </div>
          <div className="platform-item">
            <h4>Observability</h4>
            <p>Tracing/metrics/logs defaults, SLOs, and golden dashboards out-of-the-box.</p>
          </div>
          <div className="platform-item">
            <h4>FinOps</h4>
            <p>Budgets, cost anomalies, and showback/chargeback for platform and teams.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Developer Experience"
        description="Shorten feedback loops and remove toil"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title="Templates"
            duration="Language + framework + infra"
            items={[
              "Secure-by-default app and service templates",
              "Built-in observability and policy hooks",
              "One-command local and cloud dev"
            ]}
          />
          <TimelinePhase
            title="Automation"
            duration="Scaffolding and upgrades"
            items={[
              "New service wizards and repo bootstraps",
              "Automated upgrades across fleets",
              "Guardrails for breaking changes"
            ]}
          />
          <TimelinePhase
            title="Insights"
            duration="Flow metrics and capacity"
            items={[
              "DORA/SPACE dashboards",
              "WIP limits and release cadence",
              "On-call and SLO health radar"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Reference Architecture"
        description="From laptop to production-consistent paths and APIs"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Workstation & Inner Loop</h4>
            <p>Dev containers standardize toolchains; make targets/scripts unify run/test; local emulators for queues, secrets, and key services reduce cloud dependency.</p>
          </div>
          <div className="platform-item">
            <h4>Build & Artifact</h4>
            <p>Unified build images; SBOM generation; attestations and signatures; hermetic builds; provenance stored alongside artifacts for policy checks.</p>
          </div>
          <div className="platform-item">
            <h4>Environments</h4>
            <p>Ephemeral preview environments via IaC and templates; blueprints for shared state; automated teardown; environment drift monitors.</p>
          </div>
          <div className="platform-item">
            <h4>Runtime & Mesh</h4>
            <p>Kubernetes with policy controllers (OPA/Gatekeeper), service mesh (mTLS, retries, timeouts), and standard sidecars for telemetry and policy.</p>
          </div>
          <div className="platform-item">
            <h4>Policy & Identity</h4>
            <p>Workload identity (SPIFFE/SPIRE or cloud-native), fine-grained permissions, secrets automation (rotation, least-privilege, just-in-time).</p>
          </div>
          <div className="platform-item">
            <h4>Observability & SLOs</h4>
            <p>OpenTelemetry defaults, RED/USE dashboards per service, SLO error budgets with burn alerts, runbooks linked to pages.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Golden Paths"
        description="Repeatable end-to-end flows with paved guardrails"
      >
        <div className="grid-2">
          <Card
            title="Service: API + DB"
            description="Scaffold, CI/CD, environments, SLOs, dashboards, runbook, and cost budget in under 30 minutes."
          />
          <Card
            title="Event-Driven Service"
            description="Topic provisioning, contracts/registry, consumer offsets, reprocessing playbooks, and dead-letter handling."
          />
          <Card
            title="Batch/Data Pipeline"
            description="Data contracts, lineage capture, quality checks, and promotion gates from dev to prod."
          />
          <Card
            title="ML Microservice"
            description="Model registry integration, feature store, inference service with canaries, and evaluation gates per model route."
          />
        </div>
      </Section>

      <Section
        title="Security & Compliance"
        description="Security-by-default, evidence on demand"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Supply Chain</h4>
            <p>Dependency scanning, SBOM, vulnerability gating, and SLSA provenance; signatures verified before deploy.</p>
          </div>
          <div className="platform-item">
            <h4>Secrets & Keys</h4>
            <p>Centralized vaults, rotation and leasing, envelope encryption; secretless patterns via workload identity.</p>
          </div>
          <div className="platform-item">
            <h4>Access</h4>
            <p>Least privilege for CI/CD and runtime, short‑lived tokens, and automated access reviews mapped to services.</p>
          </div>
          <div className="platform-item">
            <h4>Controls</h4>
            <p>Policy‑as‑code checks at PR, pipeline, and admission; continuous evidence collection mapped to SOC2/ISO/NIST.</p>
          </div>
          <div className="platform-item">
            <h4>Data</h4>
            <p>Data contracts, masking, retention, and audit trails; privacy impact workflows embedded in templates.</p>
          </div>
          <div className="platform-item">
            <h4>Runbooks</h4>
            <p>Standard incident playbooks per control category and automated drills.</p>
          </div>
        </div>
      </Section>

      <Section
        title="FinOps & Cost Engineering"
        description="Make cost visible, predictable, and governable"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Budgets</h4>
            <p>Per team/service budgets and alerts; budget APIs integrated in CI/CD for gates and reports.</p>
          </div>
          <div className="platform-item">
            <h4>Showback/Chargeback</h4>
            <p>Labels/telemetry for cost allocation; monthly reports that drive healthy optimization culture.</p>
          </div>
          <div className="platform-item">
            <h4>Optimization</h4>
            <p>Right‑sizing, autoscaling settings, spot/commitment strategies, and data lifecycle policies.</p>
          </div>
          <div className="platform-item">
            <h4>Model cost</h4>
            <p>For AI workloads: per‑route/token cost dashboards, model routing, and caching strategies to hit targets.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 