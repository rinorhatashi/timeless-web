"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { ContentLoader } from '@/components/ui/content-loader'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'
import Image from 'next/image'
import { Cloud, Code, Database, Zap, CheckCircle, Shield, Layers, GitBranch } from 'lucide-react'

const SoftwarePlatformsPageContent = () => {
  const { t } = useI18n()

  const solutions = [
    {
      title: "Platform Development",
      description: "Build scalable, modern software platforms with AI-powered capabilities.",
      icon: Layers
    },
    {
      title: "API & Integration",
      description: "Design and implement robust API architectures and integration frameworks.",
      icon: GitBranch
    },
    {
      title: "Cloud Infrastructure",
      description: "Cloud-native architecture and infrastructure for modern applications.",
      icon: Cloud
    },
    {
      title: "Developer Tools",
      description: "AI-powered development tools and automation for engineering teams.",
      icon: Code
    }
  ]

  const useCases = [
    "SaaS platform development",
    "API platform architecture",
    "Microservices design",
    "Cloud migration",
    "Developer productivity",
    "Platform scalability",
    "Integration frameworks",
    "Data platform engineering"
  ]

  const metrics = [
    {
      metric: "4x",
      description: "Faster platform development with modern architecture"
    },
    {
      metric: "99.9%",
      description: "Platform uptime with cloud-native design"
    },
    {
      metric: "50%",
      description: "Reduction in infrastructure costs through optimization"
    }
  ]

  const benefits = [
    {
      title: "Rapid Development",
      description: "Ship features faster with modern platform architecture and tooling.",
      icon: Zap
    },
    {
      title: "Scalable Architecture",
      description: "Build platforms that scale seamlessly with your business growth.",
      icon: Cloud
    },
    {
      title: "Developer Experience",
      description: "Provide excellent developer experience with comprehensive tools and APIs.",
      icon: Code
    },
    {
      title: "Enterprise Security",
      description: "Build security and compliance into your platform from the ground up.",
      icon: Shield
    }
  ]

  return (
    <PageLayout
      title={t('pages.industries.softwarePlatforms.title')}
      description={t('pages.industries.softwarePlatforms.description')}
      breadcrumbs={[
        { label: t('navigation.industries'), href: '/industries' },
        { label: t('pages.industries.softwarePlatforms.breadcrumb'), href: '/industries/software-platforms' }
      ]}
    >
      {/* Hero Image - 16:9 */}
      <Section>
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/software-platforms-hero.jpg"
            alt="Software development team collaborating in modern tech office"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      <Section
        title="Industry Impact Metrics"
        description="Real results from software platform implementations"
      >
        <div className="grid-3">
          {metrics.map((item, index) => (
            <div key={index} className="card text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {item.metric}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="content-prose">
            <h2>Software Platform Transformation</h2>
            <p>
              We build modern software platforms that enable businesses to scale, innovate, and 
              compete in digital markets. Our platforms are designed for cloud-native deployment, 
              with comprehensive APIs, developer tools, and operational excellence built in.
            </p>
            <p>
              From SaaS platforms to internal developer platforms, we focus on architecture that 
              scales, developer experience that accelerates shipping, and operational practices 
              that ensure reliability. Every platform includes comprehensive observability, 
              security, and automation.
            </p>
            <p>
              We leverage AI to enhance platform capabilities—from intelligent search and 
              recommendations to automated operations and predictive analytics. Our platforms 
              are built to evolve with your business needs while maintaining stability and performance.
            </p>
          </div>
          {/* Developer Coding Image - 16:9 */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/software-platforms-developer-coding.jpg"
              alt="Software developer writing code on laptop in real office environment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        title="Software Platform Solutions"
        description="Transform your software capabilities with modern platform architecture"
      >
        {/* DevOps Monitoring Image - 4:3 */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/software-platforms-devops-monitoring.jpg"
            alt="DevOps engineer monitoring cloud infrastructure in real office setting"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-cyan-700" />
                  </div>
                  <h3 className="card-title">
                    {solution.title}
                  </h3>
                </div>
                <p className="card-description">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Platform Use Cases</h2>
          <p className="section-description">
            Comprehensive platform capabilities for modern software companies
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        {/* API Development Image - 4:3 */}
        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/software-platforms-api-development.jpg"
            alt="Software engineers reviewing API documentation and testing in meeting room"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How modern platforms transform software businesses
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
            Ready to build your platform?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our platform solutions can accelerate your software business.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            {t('pages.industries.softwarePlatforms.cta')}
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}

export default function SoftwarePlatformsPage() {
  return (
    <ContentLoader>
      <SoftwarePlatformsPageContent />
    </ContentLoader>
  )
} 