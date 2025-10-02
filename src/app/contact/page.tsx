import { PageLayout, Section, Card } from '@/components/ui/page-layout'
import { Mail, Phone, MapPin, Calendar, MessageSquare, Users } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      description="Ready to build the future of enterprise AI together? Let's start a conversation about how we can help transform your organization."
      breadcrumbs={[
        { label: 'Contact', href: '/contact' }
      ]}
    >
      <Section
        title="Get in Touch"
        description="Multiple ways to connect with our team"
      >
        {/* Contact Visual */}
        <div className="section-image-accent">
          <Image
            src="/images/global-connectivity.webp"
            alt="Global connectivity"
            width={900}
            height={200}
            className="section-accent-image"
          />
        </div>
        
        <div className="grid-3">
          <div className="platform-item">
            <Mail className="w-8 h-8 mb-4" />
            <h4>Email Us</h4>
            <p>Send us a message and we'll get back to you within 24 hours.</p>
            <p className="mt-4 font-medium">hello@timeless.ai</p>
          </div>
          <div className="platform-item">
            <Calendar className="w-8 h-8 mb-4" />
            <h4>Schedule a Call</h4>
            <p>Book a consultation to discuss your AI strategy and implementation needs.</p>
            <p className="mt-4 font-medium">Book a Meeting</p>
          </div>
          <div className="platform-item">
            <MessageSquare className="w-8 h-8 mb-4" />
            <h4>Live Chat</h4>
            <p>Connect with our team in real-time during business hours.</p>
            <p className="mt-4 font-medium">Start a Conversation</p>
          </div>
        </div>
      </Section>

      <Section
        title="How We Can Help"
        description="Explore the ways we can support your AI journey"
        variant="alt"
      >
        <div className="grid-2">
          <Card
            title="AI Strategy & Consulting"
            description="Develop comprehensive AI strategies aligned with your business objectives."
            features={[
              "AI readiness assessment",
              "ROI modeling and roadmaps",
              "Technology stack recommendations",
              "Risk and compliance planning"
            ]}
          />
          <Card
            title="Platform Development"
            description="Build custom AI platforms and applications for your specific needs."
            features={[
              "Custom AI application development",
              "Platform engineering and architecture",
              "Integration with existing systems",
              "Performance optimization"
            ]}
          />
          <Card
            title="Research & Innovation"
            description="Partner with us on cutting-edge AI research and development."
            features={[
              "Joint research projects",
              "AI safety and alignment studies",
              "Novel architecture development",
              "Open-source contributions"
            ]}
          />
          <Card
            title="Operations & Support"
            description="Ensure your AI systems run reliably and safely in production."
            features={[
              "24/7 monitoring and support",
              "Performance optimization",
              "Security and compliance",
              "Training and knowledge transfer"
            ]}
          />
        </div>
      </Section>

      <Section
        title="Partnership Opportunities"
        description="Different ways to work with Timeless"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Enterprise Clients</h4>
            <p>Comprehensive AI solutions for large organizations looking to transform their operations.</p>
          </div>
          <div className="platform-item">
            <h4>Startups & Scale-ups</h4>
            <p>AI expertise and development support for growing companies building AI-first products.</p>
          </div>
          <div className="platform-item">
            <h4>Research Institutions</h4>
            <p>Collaborative research partnerships to advance the state of the art in AI safety and capability.</p>
          </div>
          <div className="platform-item">
            <h4>Technology Partners</h4>
            <p>Integration partnerships to extend our platform capabilities and reach.</p>
          </div>
          <div className="platform-item">
            <h4>Investors & VCs</h4>
            <p>Due diligence support and portfolio company AI strategy consulting.</p>
          </div>
          <div className="platform-item">
            <h4>Government & NGOs</h4>
            <p>AI solutions for public sector and social impact organizations.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Our Process"
        description="How we approach new partnerships"
        variant="alt"
      >
        <div className="timeline-grid trio">
          <div className="timeline-phase">
            <h3>Discovery</h3>
            <p className="timeline-duration">Understanding your needs</p>
            <ul className="timeline-items">
              <li>Initial consultation call</li>
              <li>Requirements gathering</li>
              <li>Technical assessment</li>
              <li>Proposal development</li>
            </ul>
          </div>
          <div className="timeline-phase">
            <h3>Planning</h3>
            <p className="timeline-duration">Designing the solution</p>
            <ul className="timeline-items">
              <li>Solution architecture</li>
              <li>Project roadmap</li>
              <li>Team allocation</li>
              <li>Success metrics definition</li>
            </ul>
          </div>
          <div className="timeline-phase">
            <h3>Execution</h3>
            <p className="timeline-duration">Delivering results</p>
            <ul className="timeline-items">
              <li>Agile development process</li>
              <li>Regular progress updates</li>
              <li>Continuous feedback loops</li>
              <li>Deployment and support</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Frequently Asked Questions"
        description="Common questions about working with Timeless"
      >
        <div className="content-prose">
          <div className="faq-item">
            <h4>What industries do you work with?</h4>
            <p>We work across all industries, with particular expertise in healthcare, financial services, manufacturing, retail, and technology. Our platform-agnostic approach allows us to adapt our solutions to any sector.</p>
          </div>
          
          <div className="faq-item">
            <h4>How do you ensure data privacy and security?</h4>
            <p>Security and privacy are built into every solution from the ground up. We follow industry best practices, maintain relevant certifications, and can work within your existing security frameworks and compliance requirements.</p>
          </div>
          
          <div className="faq-item">
            <h4>Do you offer on-premises deployments?</h4>
            <p>Yes, we support various deployment models including on-premises, private cloud, public cloud, and hybrid configurations. We work with you to determine the best approach for your specific requirements.</p>
          </div>
          
          <div className="faq-item">
            <h4>What is your typical project timeline?</h4>
            <p>Project timelines vary based on scope and complexity. Strategy consulting engagements typically range from 4-12 weeks, while custom platform development can take 3-18 months. We'll provide detailed timeline estimates during the planning phase.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Ready to Start?"
        description="Take the next step towards AI transformation"
        variant="dark"
      >
        <div className="content-prose text-center">
          <p>Whether you're just beginning your AI journey or looking to scale existing capabilities, we're here to help. Our team is ready to discuss your specific needs and explore how we can work together to achieve your goals.</p>
          <div className="mt-8">
            <a href="mailto:hello@timeless.ai" className="btn-primary mr-4">
              Send Us an Email
            </a>
            <a href="#" className="btn-secondary">
              Schedule a Call
            </a>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 