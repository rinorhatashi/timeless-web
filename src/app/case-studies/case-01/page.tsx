import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react'

const metrics = [
  {
    value: '97%',
    label: 'Accuracy Improvement',
    icon: TrendingUp
  },
  {
    value: '60%',
    label: 'Faster Processing',
    icon: Clock
  },
  {
    value: '500+',
    label: 'Users Onboarded',
    icon: Users
  }
]

const challenges = [
  'Legacy system integration with modern AI infrastructure',
  'Ensuring 99.9% uptime for mission-critical operations',
  'Compliance with enterprise security and governance standards',
  'Scaling to handle millions of requests per day'
]

const solutions = [
  'Implemented hybrid cloud architecture with on-premises components',
  'Built comprehensive monitoring and alerting systems',
  'Developed custom compliance framework for AI governance',
  'Designed auto-scaling infrastructure with load balancing'
]

export default function Case01Page() {
  return (
    <PageLayout
      title="Enterprise AI Platform Deployment"
      description="How we helped a Fortune 500 company deploy production AI systems at scale."
      breadcrumbs={[
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Case 01', href: '/case-studies/case-01' }
      ]}
    >
      <Section>
        <div className="mb-8">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>

        <div className="content-prose">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              Technology
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              6 Month Timeline
            </span>
          </div>

          <h2>The Challenge</h2>
          <p>
            A Fortune 500 technology company needed to modernize their legacy data processing 
            systems with AI capabilities while maintaining 99.9% uptime and strict security requirements. 
            Their existing infrastructure was processing millions of transactions daily but lacked 
            the intelligence to detect patterns and optimize operations.
          </p>

          <h2>Key Challenges</h2>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>

          <h2>Our Solution</h2>
          <p>
            We designed and implemented a comprehensive AI platform that seamlessly integrated 
            with their existing infrastructure. Our approach focused on gradual migration, 
            minimal disruption, and measurable improvements at each phase.
          </p>

          <ul>
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                {solution}
              </li>
            ))}
          </ul>

          <h2>Results</h2>
          <p>
            The implementation exceeded all performance targets and was completed on time and 
            within budget. The new AI capabilities have transformed how the company processes 
            data and makes decisions.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Metrics</h2>
          <p className="section-description">
            Measurable improvements achieved through our AI platform implementation
          </p>
        </div>
        
        <div className="grid-3">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div key={index} className="card text-center">
                <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>Technical Implementation</h2>
          <p>
            The platform was built using a microservices architecture with containerized 
            AI models deployed on Kubernetes. We implemented real-time data pipelines 
            using Apache Kafka and deployed machine learning models using our proprietary 
            AI orchestration platform.
          </p>

          <h2>Lessons Learned</h2>
          <p>
            This project reinforced the importance of gradual AI adoption and the value 
            of building robust monitoring systems from day one. The client's commitment 
            to change management and training was crucial to the project's success.
          </p>

          <h2>Next Steps</h2>
          <p>
            The success of this initial deployment has led to expansion into additional 
            business units, with plans to implement similar AI capabilities across the 
            entire organization over the next 18 months.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to start your AI transformation?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve similar results in your organization.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start your project →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 