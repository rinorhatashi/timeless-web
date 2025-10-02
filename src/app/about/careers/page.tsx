import { PageLayout, Section, Card } from '@/components/ui/page-layout'

export default function CareersPage() {
  return (
    <PageLayout
      title="Careers"
      description="Join us in building the future of enterprise AI systems that operate safely and effectively in the real world."
      breadcrumbs={[
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/about/careers' }
      ]}
    >
      <Section
        title="Why Join Timeless?"
        description="Be part of something meaningful"
      >
        <div className="content-prose">
          <p>At Timeless, you'll work on AI systems that have real-world impact, solving complex problems for enterprises while advancing the state of the art in AI safety and reliability. Our team combines the excitement of cutting-edge research with the satisfaction of building systems that actually work in production.</p>
          <p>We offer a remote-first environment where talented individuals can do their best work, supported by comprehensive benefits, competitive compensation, and opportunities for continuous learning and growth.</p>
        </div>
      </Section>

      <Section
        title="What We Offer"
        description="Benefits and culture that support your success"
        variant="alt"
      >
        <div className="grid-4">
          <div className="platform-item">
            <h4>Remote-First Culture</h4>
            <p>Work from anywhere with flexible schedules and asynchronous collaboration tools.</p>
          </div>
          <div className="platform-item">
            <h4>Cutting-Edge Projects</h4>
            <p>Work on the latest AI technologies with real-world applications and measurable impact.</p>
          </div>
          <div className="platform-item">
            <h4>Competitive Compensation</h4>
            <p>Fair, transparent compensation with equity participation and performance bonuses.</p>
          </div>
          <div className="platform-item">
            <h4>Professional Development</h4>
            <p>Conference attendance, learning stipends, and mentorship programs.</p>
          </div>
          <div className="platform-item">
            <h4>Health & Wellness</h4>
            <p>Comprehensive health insurance, mental health support, and wellness programs.</p>
          </div>
          <div className="platform-item">
            <h4>Open Source</h4>
            <p>Contribute to open-source projects and publish research with academic freedom.</p>
          </div>
          <div className="platform-item">
            <h4>Diverse Team</h4>
            <p>Inclusive environment that values different perspectives and backgrounds.</p>
          </div>
          <div className="platform-item">
            <h4>Impact Focus</h4>
            <p>Work on projects that solve real problems and create measurable value.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Open Positions"
        description="Current opportunities to join our team"
      >
        <div className="grid-2">
          <Card
            title="AI Research Scientist"
            description="Drive fundamental research in AI safety, agent architectures, and responsible AI."
            features={[
              "PhD in AI/ML or related field",
              "Research publication record",
              "Safety and alignment expertise",
              "Open-source contributions"
            ]}
            status="Open"
          />
          <Card
            title="Senior Software Engineer"
            description="Build robust, scalable platforms for enterprise AI deployment."
            features={[
              "5+ years software engineering",
              "Distributed systems experience",
              "Cloud platform expertise",
              "DevOps and security knowledge"
            ]}
            status="Open"
          />
          <Card
            title="MLOps Engineer"
            description="Design and operate infrastructure for machine learning systems at scale."
            features={[
              "ML pipeline experience",
              "Kubernetes and containerization",
              "Monitoring and observability",
              "Security and compliance"
            ]}
            status="Open"
          />
          <Card
            title="Product Manager"
            description="Drive product strategy for enterprise AI platforms and capabilities."
            features={[
              "Enterprise software experience",
              "AI/ML product management",
              "Customer development skills",
              "Technical background"
            ]}
            status="Open"
          />
        </div>
      </Section>

      <Section
        title="Application Process"
        description="How to join our team"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <div className="timeline-phase">
            <h3>Initial Application</h3>
            <p className="timeline-duration">Resume and cover letter</p>
            <ul className="timeline-items">
              <li>Submit your application</li>
              <li>Include relevant portfolio/GitHub</li>
              <li>Tell us why you're interested</li>
            </ul>
          </div>
          <div className="timeline-phase">
            <h3>Technical Interview</h3>
            <p className="timeline-duration">Skills assessment</p>
            <ul className="timeline-items">
              <li>Technical skills evaluation</li>
              <li>Problem-solving discussion</li>
              <li>Code review or design session</li>
            </ul>
          </div>
          <div className="timeline-phase">
            <h3>Culture & Vision</h3>
            <p className="timeline-duration">Team fit and goals</p>
            <ul className="timeline-items">
              <li>Meet the team</li>
              <li>Discuss values and culture</li>
              <li>Align on career goals</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Ready to Apply?"
        description="Take the next step in your career"
      >
        <div className="content-prose">
          <p>We're excited to hear from talented individuals who share our passion for building AI systems that make a real difference. Even if you don't see a perfect match in our current openings, we encourage you to reach out – we're always interested in connecting with exceptional people.</p>
          <p>Send your resume and a note about what interests you to careers@timeless.ai, or reach out through our contact page to start a conversation about opportunities.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 