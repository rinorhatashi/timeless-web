"use client"

import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function AIStrategyValuePage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.aiStrategy.title')}
      description={t('pages.aiStrategy.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.aiStrategy.breadcrumb'), href: '/capabilities/ai-strategy-value' }
      ]}
    >
      <Section
        title="Overview"
        description="Translate AI into a portfolio of funded bets with measurable lift"
      >
        <div className="content-prose">
          <p>We connect AI opportunities to business architecture and data realities. The result is a portfolio of prioritized plays, enabling platforms, and operating model changes - staged to fund themselves as value lands. Each play has a reference architecture, owners, evidence gates, and KPIs wired into delivery so ROI is observed continuously, not after the fact.</p>
          <p>Our engagements avoid theater. We define exit criteria per stage, attach assumptions and risks to metrics, and design experiments that converge on truth quickly. When prerequisites are missing (data, infra, controls), they are captured as roadmap items with clear value coupling, not hand‑wavy dependencies.</p>
        </div>
      </Section>

      <Section
        title="Method"
        description="From diagnosis to funded execution with evidence gates"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title="Diagnose"
            duration="Map value and constraints"
            items={[
              "Value tree and driver analysis",
              "Business capability and process mapping",
              "Data inventory and feasibility"
            ]}
          />
          <TimelinePhase
            title="Prioritize"
            duration="Pick the right bets"
            items={[
              "Impact x feasibility scoring",
              "Risk/assumption registers",
              "Reference architectures"
            ]}
          />
          <TimelinePhase
            title="Stage & fund"
            duration="Invest with exit criteria"
            items={[
              "Now/Next/Later roadmap",
              "Evidence gates and owners",
              "Budget and run-rate plans"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Value Tree Mapping"
        description="Tie AI plays to levers, processes, and systems"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Business architecture</h4>
            <p>Drivers → levers → metrics; capability heatmaps and pain points.</p>
          </div>
          <div className="platform-item">
            <h4>Value streams</h4>
            <p>Process maps with bottlenecks; lead time, rework, and failure demand.</p>
          </div>
          <div className="platform-item">
            <h4>Systems</h4>
            <p>Application/data lineage and ownership; change windows and controls.</p>
          </div>
          <div className="platform-item">
            <h4>Data</h4>
            <p>Source quality, access constraints, and privacy/compliance boundaries.</p>
          </div>
          <div className="platform-item">
            <h4>Opportunities</h4>
            <p>Candidate AI plays with hypotheses, assumptions, and evaluation plans.</p>
          </div>
          <div className="platform-item">
            <h4>Dependencies</h4>
            <p>Platform, data, and operating-model enablers linked to value.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Roadmap & Investment"
        description="Sequence for compounding value and de-risking"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title="Now"
            duration="90-day proofs"
            items={[
              "Highest leverage experiments",
              "Data/platform quick wins",
              "Owner and exit criteria"
            ]}
          />
          <TimelinePhase
            title="Next"
            duration="Scale the wins"
            items={[
              "Hardening and rollout plans",
              "Cross-team enablement",
              "Budget releases by evidence"
            ]}
          />
          <TimelinePhase
            title="Later"
            duration="Foundational bets"
            items={[
              "Strategic platforms",
              "Operating model changes",
              "Risk/controls built-in"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Evidence & Measurement"
        description="Proof points that separate signal from noise"
      >
        <div className="grid-2">
          <Card
            title="Leading indicators"
            description="Metrics that predict value before it materializes in financials."
            features={[
              "Process efficiency gains",
              "Data quality improvements",
              "User adoption rates",
              "System performance metrics"
            ]}
          />
          <Card
            title="Lagging indicators"
            description="Business outcomes that validate strategic bets over time."
            features={[
              "Revenue impact",
              "Cost reduction",
              "Risk mitigation",
              "Market position"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Common Patterns"
        description="Repeatable plays across industries and functions"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Customer intelligence</h4>
            <p>Behavioral models for retention, upsell, and acquisition with clear attribution.</p>
          </div>
          <div className="platform-item">
            <h4>Operations optimization</h4>
            <p>Supply chain, workforce, and asset efficiency with real-time adjustment.</p>
          </div>
          <div className="platform-item">
            <h4>Risk & compliance</h4>
            <p>Automated controls and monitoring with auditability and explainability.</p>
          </div>
          <div className="platform-item">
            <h4>Product intelligence</h4>
            <p>Usage analytics and feature optimization tied to business metrics.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 