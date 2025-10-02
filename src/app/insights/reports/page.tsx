import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowRight, Download, Calendar, Clock } from 'lucide-react'

const reports = [
  {
    title: "State of Enterprise AI 2024",
    description: "Comprehensive analysis of AI adoption trends across enterprise organizations.",
    category: "Industry Report",
    publishDate: "March 2024",
    readTime: "15 min read",
    downloadUrl: "/reports/state-of-enterprise-ai-2024.pdf"
  },
  {
    title: "AI Safety in Production Systems",
    description: "Best practices and frameworks for deploying safe AI in production environments.",
    category: "Technical Guide", 
    publishDate: "February 2024",
    readTime: "12 min read",
    downloadUrl: "/reports/ai-safety-production-systems.pdf"
  },
  {
    title: "ROI Analysis: AI Implementation",
    description: "Data-driven insights on measuring and maximizing ROI from AI initiatives.",
    category: "Business Analysis",
    publishDate: "January 2024", 
    readTime: "10 min read",
    downloadUrl: "/reports/roi-analysis-ai-implementation.pdf"
  },
  {
    title: "Compliance Frameworks for AI",
    description: "Navigating regulatory requirements for AI systems across industries.",
    category: "Compliance Guide",
    publishDate: "December 2023",
    readTime: "18 min read", 
    downloadUrl: "/reports/compliance-frameworks-ai.pdf"
  },
  {
    title: "Edge AI Deployment Strategies",
    description: "Technical strategies for deploying AI systems on edge devices and infrastructure.",
    category: "Technical Guide",
    publishDate: "November 2023",
    readTime: "14 min read",
    downloadUrl: "/reports/edge-ai-deployment-strategies.pdf"
  },
  {
    title: "AI Talent & Skills Gap Analysis",
    description: "Current state and future projections for AI talent needs in the market.",
    category: "Market Research",
    publishDate: "October 2023", 
    readTime: "8 min read",
    downloadUrl: "/reports/ai-talent-skills-gap-analysis.pdf"
  }
]

export default function ReportsPage() {
  return (
    <PageLayout
      title="Research Reports"
      description="In-depth analysis and insights on AI trends, best practices, and industry developments."
      breadcrumbs={[
        { label: 'Insights', href: '/insights' },
        { label: 'Reports', href: '/insights/reports' }
      ]}
    >
      <Section
        title="Latest Reports"
        description="Expert analysis and data-driven insights to help you navigate the evolving AI landscape."
      >
        <div className="grid-2">
          {reports.map((report, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {report.category}
                </span>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {report.publishDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {report.readTime}
                  </div>
                </div>
              </div>
              
              <h3 className="card-title">
                {report.title}
              </h3>
              
              <p className="card-description mb-6">
                {report.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <Link 
                  href={report.downloadUrl}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  Read report
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest research reports and insights directly in your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Need custom research?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            We provide tailored research and analysis for organizations looking to understand specific AI trends and opportunities.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Request custom research →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 