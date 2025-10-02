import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowRight, Users, Brain, Shield, Zap, CheckCircle, GitBranch, Settings } from 'lucide-react'

const features = [
  {
    title: "Multi-Agent Orchestration",
    description: "Coordinate multiple AI agents to work together on complex tasks and workflows.",
    icon: Users
  },
  {
    title: "Intelligent Routing",
    description: "Smart routing of tasks to the most appropriate agents based on capabilities and context.",
    icon: GitBranch
  },
  {
    title: "Safety Controls",
    description: "Built-in safety mechanisms and human oversight controls for reliable agent behavior.",
    icon: Shield
  },
  {
    title: "Performance Optimization",
    description: "Continuous optimization of agent performance and resource utilization.",
    icon: Zap
  }
]

const capabilities = [
  "Agent lifecycle management",
  "Task orchestration and routing",
  "Human-in-the-loop workflows", 
  "Performance monitoring",
  "Safety and compliance controls",
  "Integration with external systems",
  "Scalable infrastructure",
  "Real-time collaboration"
]

const useCases = [
  {
    title: "Customer Service Automation",
    description: "Deploy intelligent agents that handle customer inquiries with human oversight."
  },
  {
    title: "Content Moderation",
    description: "Automated content review with escalation to human moderators when needed."
  },
  {
    title: "Data Processing Pipelines",
    description: "Complex data processing workflows managed by specialized AI agents."
  },
  {
    title: "Research & Analysis",
    description: "Collaborative research tasks performed by teams of specialized AI agents."
  }
]

const benefits = [
  {
    title: "Scalable Operations",
    description: "Handle increasing workloads without proportional increases in human resources.",
    icon: Zap
  },
  {
    title: "Consistent Quality",
    description: "Maintain consistent output quality across all automated processes.",
    icon: Settings
  },
  {
    title: "Human Oversight",
    description: "Seamless integration of human oversight and intervention when needed.",
    icon: Users
  },
  {
    title: "Intelligent Adaptation",
    description: "Agents that learn and adapt to improve performance over time.",
    icon: Brain
  }
]

export default function AgentPlatformPage() {
  return (
    <PageLayout
      title="Agent Platform"
      description="Multi-agent orchestration platform for coordinated AI automation with human oversight."
      breadcrumbs={[
        { label: 'Platforms', href: '/platforms' },
        { label: 'Agent Platform', href: '/platforms/agent-platform' }
      ]}
    >
      <Section
        title="Coordinated AI Agents"
        description="Deploy and manage teams of AI agents that work together on complex tasks while maintaining human oversight and control."
      >
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

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Platform Capabilities</h2>
          <p className="section-description">
            Everything you need to deploy and manage AI agents in production
          </p>
        </div>
        
        <div className="grid-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>How It Works</h2>
          <p>
            Our Agent Platform provides a comprehensive framework for deploying and managing 
            AI agents that can work independently or collaboratively. The platform includes 
            sophisticated orchestration capabilities, safety controls, and human oversight 
            mechanisms.
          </p>

          <h3>Agent Design & Development</h3>
          <p>
            Create specialized AI agents with specific capabilities and knowledge domains. 
            Our platform provides tools for designing agent behaviors, defining interaction 
            patterns, and establishing safety boundaries.
          </p>

          <h3>Orchestration & Coordination</h3>
          <p>
            Deploy multiple agents that can coordinate their activities, share information, 
            and collaborate on complex tasks. The platform handles task routing, resource 
            allocation, and inter-agent communication.
          </p>

          <h3>Human Oversight & Control</h3>
          <p>
            Maintain human oversight with configurable intervention points, approval workflows, 
            and escalation mechanisms. Humans can monitor agent activities and intervene when 
            necessary to ensure optimal outcomes.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-description">
            Real-world applications of our Agent Platform across industries
          </p>
        </div>
        
        <div className="grid-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {useCase.title}
              </h3>
              <p className="card-description">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            Why organizations choose our Agent Platform for AI automation
          </p>
        </div>
        
        <div className="grid-2">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="card-title">
                    {benefit.title}
                  </h3>
                </div>
                <p className="card-description">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to deploy AI agents?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Build and deploy coordinated AI agents that work together to automate complex business processes.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start building agents →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 