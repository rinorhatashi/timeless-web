import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'

export default function BlockchainCryptographyPage() {
  return (
    <PageLayout
      title="Blockchain & Cryptography"
      description="We design secure, compliant web3 systems and cryptographic services: smart contracts, ZK, custody, and DA/L2 integrations with auditable operations."
      breadcrumbs={[
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Blockchain & Cryptography', href: '/capabilities/blockchain-cryptography' }
      ]}
    >
      <Section
        title="Overview"
        description="We build crypto systems with the same discipline as mission‑critical software: explicit threat models, verifiable contracts, hardened operations, and compliance by construction. The objective is not hype-it's secure, observable systems that ship."
      >
        <div className="content-prose">
          <p>Our approach separates protocol concerns (data availability, validity/fraud proofs, bridge safety) from application concerns (contracts, custody, compliance). We deliver audited contracts, ZK circuits with rigorous tests, MPC/HSM custody, and DA/L2 integrations with operational runbooks. Evidence-formal specs, coverage, fuzz results, on‑chain monitoring-accompanies every change.</p>
        </div>
      </Section>

      <Section
        title="System Components"
        description="Security-first architecture from protocol to product"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Smart Contracts</h4>
            <p>Upgradable patterns, pausable controls, access models, and formal specs.</p>
          </div>
          <div className="platform-item">
            <h4>ZK & Privacy</h4>
            <p>zk-SNARK/STARK circuits, proving/verification pipelines, and audits.</p>
          </div>
          <div className="platform-item">
            <h4>Custody</h4>
            <p>MPC/HSM, key ceremonies, recovery flows, and transaction policies.</p>
          </div>
          <div className="platform-item">
            <h4>Data Availability</h4>
            <p>Rollup DA layers, fraud/validity proofs, and bridge safety considerations.</p>
          </div>
          <div className="platform-item">
            <h4>Compliance</h4>
            <p>KYC/AML hooks, travel rule, and jurisdictional routing for flows.</p>
          </div>
          <div className="platform-item">
            <h4>Operations</h4>
            <p>Monitoring, incident runbooks, and upgrade governance frameworks.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Contract Engineering"
        description="Design for correctness, upgradeability, and safety"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Patterns</h4>
            <p>Proxy‑based upgrades with explicit admin policies; pausable/emergency stops; role‑based access control and permit flows.</p>
          </div>
          <div className="platform-item">
            <h4>Specs & tests</h4>
            <p>Executable specifications, property‑based tests, fuzzing, and invariant checks; gas benchmarking and optimization passes.</p>
          </div>
          <div className="platform-item">
            <h4>Formal methods</h4>
            <p>Symbolic execution and model checking for critical components (vaults, bridges, governance); proofs integrated in CI.</p>
          </div>
          <div className="platform-item">
            <h4>Error handling</h4>
            <p>Fail‑closed design; bounded external calls; reentrancy guards; checks‑effects‑interactions by default.</p>
          </div>
          <div className="platform-item">
            <h4>Upgrade process</h4>
            <p>Timelocks, multi‑sig approvals, and on‑chain announcements; rollback plans and canaries on low‑risk assets first.</p>
          </div>
          <div className="platform-item">
            <h4>Observability</h4>
            <p>Event schemas, indexers, and monitoring; anomaly alerts for unexpected state transitions and privileged events.</p>
          </div>
        </div>
      </Section>

      <Section
        title="ZK & Privacy"
        description="Circuits and pipelines you can reason about"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title="Design"
            duration="Circuits and constraints"
            items={[
              "Explicit threat models and adversary capabilities",
              "Soundness and completeness goals with benchmarks",
              "Constraints aligned to protocol limits and fees"
            ]}
          />
          <TimelinePhase
            title="Implementation"
            duration="Reproducible and testable"
            items={[
              "Deterministic circuits with test vectors",
              "Trusted setup ceremonies (where needed) and transcripts",
              "Prover/verifier performance budgets and telemetry"
            ]}
          />
          <TimelinePhase
            title="Audit & Ops"
            duration="Secure lifecycles"
            items={[
              "Independent reviews and fuzzers",
              "Rotation of parameters/keys where applicable",
              "Runtime monitors for proof failures or anomalies"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Custody & Key Management"
        description="Operational security for assets and workflows"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>MPC/HSM</h4>
            <p>Threshold signatures, secure enclaves, and geo‑distributed shares with tamper evidence and recovery drills.</p>
          </div>
          <div className="platform-item">
            <h4>Key ceremonies</h4>
            <p>Documented, witnessed ceremonies with checklists; segregation of duties and access logs.</p>
          </div>
          <div className="platform-item">
            <h4>Policies</h4>
            <p>Per‑asset limits, velocity rules, multi‑party approvals, and anomaly triggers; programmable policy engines.</p>
          </div>
          <div className="platform-item">
            <h4>Integrations</h4>
            <p>Wallet/provider integrations (hardware, custodial, or self‑custody) with monitoring and fallbacks.</p>
          </div>
          <div className="platform-item">
            <h4>Disaster readiness</h4>
            <p>Runbooks for lost keys, compromised endpoints, and corrupted state; incident comms templates.</p>
          </div>
          <div className="platform-item">
            <h4>Off‑chain ops</h4>
            <p>Secure pipelines for off‑chain computations feeding on‑chain decisions; provenance for data inputs.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Compliance & Operations"
        description="Ship with audits and regulators in mind"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title="Compliance"
            duration="Controls mapped to obligations"
            items={[
              "KYC/AML hooks and travel‑rule messaging",
              "Sanctions screening and geo‑fencing",
              "Evidence capture and reporting pipelines"
            ]}
          />
          <TimelinePhase
            title="Monitoring"
            duration="See issues early"
            items={[
              "On‑chain telemetry and anomaly detection",
              "MEV/bridge risk monitoring and rate limits",
              "Alerting to rotation or upgrade actions"
            ]}
          />
          <TimelinePhase
            title="Governance"
            duration="Change with safety"
            items={[
              "Multi‑sig/DAO governance processes",
              "Timelocks and staged rollouts",
              "Backout plans and disclosure guidelines"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Security & Audits"
        description="Build-time and run-time assurance"
      >
        <div className="grid-2">
          <Card
            title="Threat model"
            description="Assets, trust boundaries, and abuse cases; mitigations tracked to code."
          />
          <Card
            title="Static & formal"
            description="Slither/Foundry/Certora; invariants, fuzzing, and symbolic execution."
          />
          <Card
            title="Runtime monitoring"
            description="On-chain telemetry, anomaly detection, and circuit breakers."
          />
          <Card
            title="Audit pack"
            description="Specs, diagrams, tests, and evidence for external auditors."
          />
        </div>
      </Section>

      <Section
        title="KPIs & Program Metrics"
        description="Measure security posture and product traction"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Security</h4>
            <p>Critical issues per audit, time‑to‑fix, % code covered by fuzzers/invariants, and incident MTTR.</p>
          </div>
          <div className="platform-item">
            <h4>Reliability</h4>
            <p>On‑chain revert rates, failed/late proofs, and bridge uptime.</p>
          </div>
          <div className="platform-item">
            <h4>Performance</h4>
            <p>Gas costs per operation, prover latency, and throughput under load.</p>
          </div>
          <div className="platform-item">
            <h4>Compliance</h4>
            <p>KYC/AML coverage, sanctions hit rates handled correctly, and evidence completeness.</p>
          </div>
          <div className="platform-item">
            <h4>Operations</h4>
            <p>Upgrade success rate, key ceremony success metrics, and rotation cadence.</p>
          </div>
          <div className="platform-item">
            <h4>Business</h4>
            <p>TVL/volume (where appropriate), partner integrations, and user retention.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 