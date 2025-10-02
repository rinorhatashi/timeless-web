import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowRight, Eye, BarChart3, Shield, Zap, AlertTriangle, TrendingUp } from 'lucide-react'

const features = [
  {
    title: "Real-time Monitoring",
    description: "Comprehensive monitoring of model performance, latency, and resource utilization.",
    icon: Eye
  },
  {
    title: "Performance Analytics",
    description: "Deep insights into model behavior, accuracy trends, and operational metrics.",
    icon: BarChart3
  },
  {
    title: "Automated Alerting",
    description: "Intelligent alerts for model drift, performance degradation, and system issues.",
    icon: AlertTriangle
  },
  {
    title: "Optimization Engine",
    description: "Continuous optimization of model performance and infrastructure efficiency.",
    icon: TrendingUp
  }
]

const capabilities = [
  "Model performance tracking",
  "Drift detection and alerts", 
  "Resource utilization monitoring",
  "Cost optimization analysis",
  "A/B testing frameworks",
  "Experiment tracking",
  "Model versioning and rollback",
  "Compliance auditing"
]

const benefits = [
  {
    title: "Proactive Issue Detection",
    description: "Identify and resolve issues before they impact users or business operations."
  },
  {
    title: "Continuous Optimization",
    description: "Automatically optimize model performance and infrastructure costs over time."
  },
  {
    title: "Regulatory Compliance",
    description: "Maintain audit trails and compliance documentation for regulatory requirements."
  },
  {
    title: "Risk Mitigation",
    description: "Minimize risks through comprehensive monitoring and automated safety measures."
  }
]

const metrics = [
  {
    title: "Model Accuracy",
    description: "Track prediction accuracy and confidence scores over time",
    icon: BarChart3
  },
  {
    title: "System Performance", 
    description: "Monitor latency, throughput, and resource utilization",
    icon: Zap
  },
  {
    title: "Business Impact",
    description: "Measure ROI and business value delivered by AI systems",
    icon: TrendingUp
  },
  {
    title: "Security & Compliance",
    description: "Track security events and compliance metrics",
    icon: Shield
  }
]

export default function LLMOpsObservabilityPage() {
  return (
    <PageLayout
      title="LLMOps & Observability"
      description="Complete visibility into model performance, costs, and behavior in production."
      breadcrumbs={[
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'LLMOps & Observability', href: '/capabilities/llmops-observability' }
      ]}
    >
      <Section
        title="Production AI Observability"
        description="Gain complete visibility and control over your AI systems with comprehensive monitoring, analytics, and optimization capabilities."
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
          <h2 className="section-title">Key Metrics We Track</h2>
          <p className="section-description">
            Comprehensive monitoring across all aspects of your AI systems
          </p>
        </div>
        
        <div className="grid-2">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="card-title">
                    {metric.title}
                  </h3>
                </div>
                <p className="card-description">
                  {metric.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>Comprehensive Observability</h2>
          <p>
            Our LLMOps platform provides end-to-end observability for your AI systems, from model 
            training through production deployment. We monitor every aspect of your AI infrastructure 
            to ensure optimal performance, reliability, and compliance.
          </p>

          <h3>Model Performance Monitoring</h3>
          <p>
            Track model accuracy, drift, and performance degradation in real-time. Our system 
            automatically detects when models need retraining or adjustment, ensuring consistent 
            performance over time.
          </p>

          <h3>Infrastructure Optimization</h3>
          <p>
            Monitor and optimize compute resources, costs, and scaling behavior. Our platform 
            provides recommendations for infrastructure improvements and cost optimization 
            opportunities.
          </p>

          <h3>Compliance & Auditing</h3>
          <p>
            Maintain comprehensive audit trails and compliance documentation. Our system tracks 
            all model decisions, data usage, and system changes for regulatory compliance and 
            internal governance.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Observability Capabilities</h2>
          <p className="section-description">
            Everything you need to monitor and optimize your AI systems in production
          </p>
        </div>
        
        <div className="grid-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="card text-center">
              <p className="text-sm font-medium text-gray-900">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="section-title">Why LLMOps Matters</h2>
          <p className="section-description">
            The benefits of comprehensive AI observability for your organization
          </p>
        </div>
        
        <div className="grid-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {benefit.title}
              </h3>
              <p className="card-description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to optimize your AI operations?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Gain complete visibility and control over your AI systems with our comprehensive observability platform.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start monitoring →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 