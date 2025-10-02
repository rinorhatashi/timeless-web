import { PageLayout, Section } from '@/components/ui/page-layout'

export default function TeamPage() {
  return (
    <PageLayout
      title="Our Team"
      description="Meet the researchers, engineers, and operators who make Timeless possible."
      breadcrumbs={[
        { label: 'About', href: '/about' },
        { label: 'Team', href: '/about/team' }
      ]}
    >
      <Section
        title="Leadership"
        description="The visionaries driving our mission forward"
      >
        <div className="content-prose">
          <p>Our leadership team brings together decades of experience in AI research, enterprise software, and operations. They've built and scaled systems at leading technology companies and research institutions, combining deep technical expertise with practical business acumen.</p>
        </div>
      </Section>

      <Section
        title="Research Team"
        description="Advancing the frontiers of AI safety and capability"
        variant="alt"
      >
        <div className="content-prose">
          <p>Our research team consists of PhD scientists and AI researchers who focus on fundamental advances in agent safety, responsible AI, and novel architectures. They publish in top-tier conferences and contribute to open-source projects while ensuring that research translates into practical solutions.</p>
        </div>
      </Section>

      <Section
        title="Engineering Team"
        description="Building robust, scalable systems for enterprise deployment"
      >
        <div className="content-prose">
          <p>Our engineering team specializes in platform engineering, security, and operations for AI systems. With experience from leading cloud providers and enterprise software companies, they ensure that every system we build meets the highest standards for reliability, security, and performance.</p>
        </div>
      </Section>

      <Section
        title="Operations Team"
        description="Ensuring systems run reliably in production environments"
        variant="alt"
      >
        <div className="content-prose">
          <p>Our operations team monitors, maintains, and optimizes AI systems in production. They bring DevOps and SRE expertise specifically adapted for AI workloads, ensuring that systems remain reliable, performant, and safe as they scale.</p>
        </div>
      </Section>

      <Section
        title="Join Our Team"
        description="Building the future together"
      >
        <div className="content-prose">
          <p>We're always looking for talented individuals who share our passion for building AI systems that make a real difference. Whether you're a researcher, engineer, or operations specialist, we offer opportunities to work on cutting-edge projects with significant impact.</p>
          <p>Our remote-first culture emphasizes collaboration, continuous learning, and professional growth. We believe that diverse perspectives and experiences are essential for building AI systems that serve everyone effectively.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 