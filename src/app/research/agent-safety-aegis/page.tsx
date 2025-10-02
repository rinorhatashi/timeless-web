import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowLeft, Shield, AlertTriangle, Eye, Users, CheckCircle } from 'lucide-react'

const features = [
  {
    title: "Behavioral Monitoring",
    description: "Real-time monitoring of agent behaviors to detect anomalies and potential safety issues.",
    icon: Eye
  },
  {
    title: "Safety Constraints",
    description: "Configurable safety constraints that prevent agents from taking harmful actions.",
    icon: Shield
  },
  {
    title: "Human Oversight",
    description: "Seamless integration of human oversight and intervention capabilities.",
    icon: Users
  },
  {
    title: "Risk Assessment",
    description: "Continuous risk assessment and mitigation strategies for agent operations.",
    icon: AlertTriangle
  }
]

const challenges = [
  "Ensuring agent behavior remains within safe boundaries",
  "Detecting and preventing harmful or unintended actions",
  "Maintaining performance while enforcing safety constraints",
  "Providing interpretable safety decisions",
  "Adapting to new and emerging safety scenarios"
]

const solutions = [
  "Multi-layered safety architecture with redundant controls",
  "Real-time behavioral analysis and anomaly detection",
  "Formal verification of safety properties",
  "Human-AI collaboration frameworks",
  "Continuous learning and adaptation mechanisms"
]

const applications = [
  {
    title: "Autonomous Systems",
    description: "Safety frameworks for autonomous vehicles, drones, and robotic systems."
  },
  {
    title: "Financial Trading",
    description: "Risk management and safety controls for algorithmic trading systems."
  },
  {
    title: "Healthcare AI",
    description: "Safety mechanisms for AI systems making healthcare-related decisions."
  },
  {
    title: "Content Moderation",
    description: "Safe deployment of AI agents for content review and moderation tasks."
  }
]

export default function AgentSafetyAegisPage() {
  return (
    <PageLayout
      title="Agent Safety Aegis"
      description="Research into comprehensive safety frameworks for autonomous AI agents in production environments."
      breadcrumbs={[
        { label: 'Research', href: '/research' },
        { label: 'Agent Safety Aegis', href: '/research/agent-safety-aegis' }
      ]}
    >
      <Section>
        <div className="mb-8">
          <Link 
            href="/research"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>

        <div className="content-prose">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Active Research
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Production Ready
            </span>
          </div>

          <h2>Research Overview</h2>
          <p>
            Agent Safety Aegis is our comprehensive research initiative focused on developing 
            robust safety frameworks for autonomous AI agents. As AI agents become more capable 
            and autonomous, ensuring their safe operation becomes critical for deployment in 
            real-world environments.
          </p>

          <h2>Research Challenges</h2>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>

          <h2>Our Approach</h2>
          <p>
            We develop multi-layered safety architectures that combine proactive safety measures 
            with reactive monitoring and intervention capabilities. Our approach integrates 
            formal verification methods with practical deployment considerations.
          </p>

          <ul>
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Research Areas</h2>
          <p className="section-description">
            Core components of our agent safety research framework
          </p>
        </div>
        
        <div className="grid-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="card-title">
                    {feature.title}
                  </h3>
                </div>
                <p className="card-description">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>Technical Approach</h2>
          <p>
            Our agent safety framework combines multiple complementary approaches to ensure 
            comprehensive protection against various failure modes and safety risks.
          </p>

          <h3>Formal Verification</h3>
          <p>
            We use formal methods to verify that agent behaviors satisfy safety properties 
            under all possible scenarios. This includes model checking, theorem proving, 
            and temporal logic specifications.
          </p>

          <h3>Runtime Monitoring</h3>
          <p>
            Real-time monitoring systems track agent behaviors and environment states to 
            detect potential safety violations before they occur. Our monitors use machine 
            learning and rule-based approaches.
          </p>

          <h3>Safe Reinforcement Learning</h3>
          <p>
            We develop reinforcement learning algorithms that incorporate safety constraints 
            directly into the learning process, ensuring that agents learn safe behaviors 
            from the beginning.
          </p>

          <h2>Current Research Status</h2>
          <p>
            Our research has produced several key innovations in agent safety, including 
            novel safety verification techniques, real-time monitoring frameworks, and 
            human-AI collaboration protocols. Several components are already deployed in 
            production systems.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Applications</h2>
          <p className="section-description">
            Real-world applications of our agent safety research
          </p>
        </div>
        
        <div className="grid-2">
          {applications.map((application, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {application.title}
              </h3>
              <p className="card-description">
                {application.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>Publications & Presentations</h2>
          <p>
            Our research findings have been published in leading AI safety conferences and 
            journals, contributing to the broader research community's understanding of 
            agent safety challenges and solutions.
          </p>

          <h2>Future Directions</h2>
          <p>
            We continue to expand our research into emerging areas such as multi-agent safety, 
            scalable verification techniques, and safety in foundation model-based agents. 
            Our goal is to make agent safety a solved problem for production deployments.
          </p>

          <h2>Collaboration Opportunities</h2>
          <p>
            We welcome collaboration with academic institutions, industry partners, and 
            regulatory bodies working on AI safety. Our research benefits from diverse 
            perspectives and real-world deployment experiences.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Interested in agent safety research?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Learn more about our research or explore collaboration opportunities in agent safety.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Discuss collaboration →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 