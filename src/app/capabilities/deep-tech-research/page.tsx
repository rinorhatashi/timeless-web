"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function DeepTechResearchPage() {
  const { t } = useI18n()
  
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
        title="Research Focus"
        description="Advancing the state of the art in production AI systems"
      >
        <div className="content-prose">
          <p>We conduct research in neural architectures, retrieval systems, program synthesis, safety mechanisms, and efficient training methods. Our work is published openly and implemented as reference code with datasets and benchmarks.</p>
          <p>Every research project is driven by real production needs, ensuring practical applicability while pushing theoretical boundaries.</p>
        </div>
      </Section>

      <Section
        title="Research Areas"
        description="Core focus areas for deep tech innovation"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Neural Architectures</h3>
            <p>Novel model architectures optimized for specific tasks and deployment constraints.</p>
          </div>
          <div className="feature-card">
            <h3>Retrieval Systems</h3>
            <p>Advanced retrieval mechanisms for knowledge-augmented AI systems.</p>
          </div>
          <div className="feature-card">
            <h3>Program Synthesis</h3>
            <p>Automated code generation and program synthesis using AI.</p>
          </div>
          <div className="feature-card">
            <h3>Safety & Alignment</h3>
            <p>Research into AI safety, alignment, and robustness mechanisms.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Open Research"
        description="Publications, benchmarks, and open-source contributions"
      >
        <div className="content-prose">
          <p>We believe in open research that benefits the entire AI community. Our findings are published with reproducible experiments, reference implementations, and comprehensive documentation.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 