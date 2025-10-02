import Link from 'next/link'
import { PageLayout, Section, Card } from '@/components/ui/page-layout'
import { Users, Building, Target, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <PageLayout
      title="About Timeless"
      description="We build, operate, and harden AI for enterprises. Our teams combine research, product, and operations to deliver safe systems that run every day."
      breadcrumbs={[
        { label: 'About', href: '/about' }
      ]}
    >
      <Section
        title="Our Mission"
        description="Building the future of enterprise AI with safety, reliability, and real-world impact"
      >
        <div className="content-prose">
          <p>Timeless exists to bridge the gap between AI research and production systems that enterprises can trust. We believe that AI should enhance human capabilities, operate transparently, and deliver measurable business value while maintaining the highest standards of safety and ethics.</p>
          <p>Our approach combines cutting-edge research with practical engineering, ensuring that every system we build is not just innovative, but also reliable, secure, and aligned with business objectives. We focus on deep-tech platforms that scale in the real world, solving complex problems across industries.</p>
        </div>
      </Section>

      <Section
        title="What Sets Us Apart"
        description="Our unique approach to enterprise AI development"
        variant="alt"
      >
        <div className="grid-4">
          <div className="platform-item">
            <Target className="w-8 h-8 mb-4" />
            <h4>Production-First</h4>
            <p>Every solution is designed for real-world deployment with robust monitoring and safety systems.</p>
          </div>
          <div className="platform-item">
            <Award className="w-8 h-8 mb-4" />
            <h4>Measurable Impact</h4>
            <p>Clear ROI frameworks and KPIs ensure that AI investments deliver tangible business value.</p>
          </div>
          <div className="platform-item">
            <Building className="w-8 h-8 mb-4" />
            <h4>Enterprise-Grade</h4>
            <p>Security, compliance, and governance built into every system from the ground up.</p>
          </div>
          <div className="platform-item">
            <Users className="w-8 h-8 mb-4" />
            <h4>Human-Centered</h4>
            <p>AI that augments human capabilities rather than replacing human judgment and oversight.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Our Approach"
        description="How we deliver enterprise AI that works in the real world"
      >
        <div className="timeline-grid trio">
          <div className="timeline-phase">
            <h3>Research & Innovation</h3>
            <p className="timeline-duration">Advancing the state of the art</p>
            <ul className="timeline-items">
              <li>Fundamental AI research</li>
              <li>Safety and alignment studies</li>
              <li>Novel architecture development</li>
              <li>Open-source contributions</li>
            </ul>
          </div>
          <div className="timeline-phase">
            <h3>Engineering & Development</h3>
            <p className="timeline-duration">Building robust systems</p>
            <ul className="timeline-items">
              <li>Platform engineering</li>
              <li>Security and compliance</li>
              <li>Testing and validation</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <div className="timeline-phase">
            <h3>Operations & Scale</h3>
            <p className="timeline-duration">Running systems in production</p>
            <ul className="timeline-items">
              <li>Deployment and monitoring</li>
              <li>Continuous improvement</li>
              <li>Incident response</li>
              <li>Knowledge transfer</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Leadership & Expertise"
        description="Meet the teams behind Timeless"
        variant="alt"
      >
        <div className="grid-3">
          <Card
            title="Our Team"
            description="Meet the researchers, engineers, and operators who make Timeless possible."
            href="/about/team"
            features={[
              "AI researchers and PhD scientists",
              "Enterprise software engineers",
              "Security and compliance experts",
              "Operations and DevOps specialists"
            ]}
          />
          <Card
            title="Careers"
            description="Join us in building the future of enterprise AI systems."
            href="/about/careers"
            features={[
              "Remote-first culture",
              "Cutting-edge projects",
              "Competitive compensation",
              "Professional development"
            ]}
          />
          <Card
            title="Partners"
            description="Our ecosystem of technology partners and collaborators."
            href="/about/partners"
            features={[
              "Technology integrations",
              "Research collaborations",
              "Industry partnerships",
              "Academic affiliations"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Our Values"
        description="The principles that guide everything we do"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Safety First</h4>
            <p>Every system we build prioritizes safety, reliability, and ethical operation above all else.</p>
          </div>
          <div className="platform-item">
            <h4>Transparency</h4>
            <p>Open communication about capabilities, limitations, and decision-making processes.</p>
          </div>
          <div className="platform-item">
            <h4>Continuous Learning</h4>
            <p>Commitment to advancing the field while learning from both successes and failures.</p>
          </div>
          <div className="platform-item">
            <h4>Real-World Impact</h4>
            <p>Focus on solutions that deliver tangible benefits to organizations and society.</p>
          </div>
          <div className="platform-item">
            <h4>Human Partnership</h4>
            <p>AI that enhances human capabilities and maintains meaningful human oversight.</p>
          </div>
          <div className="platform-item">
            <h4>Excellence</h4>
            <p>Uncompromising commitment to quality in research, engineering, and operations.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 