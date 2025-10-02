import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: '01',
    title: 'Enterprise AI Platform Deployment',
    industry: 'Technology',
    description: 'How we helped a Fortune 500 company deploy production AI systems at scale.',
    href: '/case-studies/case-01'
  },
  {
    id: '02', 
    title: 'Healthcare AI for Diagnostic Imaging',
    industry: 'Healthcare',
    description: 'Building HIPAA-compliant AI systems for medical image analysis.',
    href: '/case-studies/case-02'
  },
  {
    id: '03',
    title: 'Financial Services Fraud Detection',
    industry: 'Financial Services', 
    description: 'Real-time fraud detection system processing millions of transactions.',
    href: '/case-studies/case-03'
  },
  {
    id: '04',
    title: 'Manufacturing Predictive Maintenance',
    industry: 'Manufacturing',
    description: 'AI-powered predictive maintenance reducing downtime by 45%.',
    href: '/case-studies/case-04'
  },
  {
    id: '05',
    title: 'Autonomous Vehicle Safety Systems',
    industry: 'Automotive',
    description: 'Safety-critical AI systems for autonomous vehicle navigation.',
    href: '/case-studies/case-05'
  },
  {
    id: '06',
    title: 'Smart Grid Energy Optimization',
    industry: 'Energy',
    description: 'AI optimization for renewable energy grid management.',
    href: '/case-studies/case-06'
  }
]

export default function CaseStudiesPage() {
  return (
    <PageLayout
      title="Case Studies"
      description="Real-world examples of our AI implementations across industries."
      breadcrumbs={[
        { label: 'Case Studies', href: '/case-studies' }
      ]}
    >
      <Section
        title="Success Stories"
        description="Discover how we've helped organizations deploy production AI systems that deliver measurable results."
      >
        <div className="grid-3">
          {caseStudies.map((study) => (
            <div key={study.id} className="card">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                  Case {study.id}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="card-title">
                {study.title}
              </h3>
              
              <p className="card-description mb-6">
                {study.description}
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  href={study.href}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  Read case study
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready for your success story?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve similar results in your industry.
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