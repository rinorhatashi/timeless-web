import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, FileText, Users, CheckCircle, BarChart3, Clock, Brain } from 'lucide-react'

const solutions = [
  {
    title: "Clinical Decision Support",
    description: "AI-powered clinical decision support systems that assist healthcare providers with diagnosis and treatment recommendations.",
    icon: Brain
  },
  {
    title: "Medical Imaging Analysis",
    description: "Advanced AI models for medical image analysis including radiology, pathology, and diagnostic imaging.",
    icon: FileText
  },
  {
    title: "Drug Discovery & Development",
    description: "Accelerated drug discovery through AI-driven molecular analysis and clinical trial optimization.",
    icon: BarChart3
  },
  {
    title: "Patient Care Automation",
    description: "Automated patient monitoring, care coordination, and treatment plan optimization systems.",
    icon: Users
  }
]

const useCases = [
  "Clinical decision support systems",
  "Medical image analysis and diagnostics",
  "Drug discovery and development",
  "Patient monitoring and care coordination",
  "Electronic health record optimization",
  "Predictive analytics for patient outcomes",
  "Automated clinical documentation",
  "Healthcare operations optimization"
]

const compliance = [
  {
    title: "HIPAA Compliance",
    description: "Full HIPAA compliance with advanced privacy and security controls for patient data protection."
  },
  {
    title: "FDA Regulations",
    description: "FDA-compliant AI systems designed for medical device and software as medical device (SaMD) requirements."
  },
  {
    title: "Clinical Guidelines",
    description: "Integration with clinical best practices and evidence-based medicine guidelines."
  },
  {
    title: "International Standards",
    description: "Compliance with international healthcare standards including HL7 FHIR and IHE profiles."
  }
]

const benefits = [
  {
    title: "Improved Patient Outcomes",
    description: "AI-driven insights that help healthcare providers make better decisions and improve patient care.",
    icon: Heart
  },
  {
    title: "Operational Efficiency",
    description: "Streamlined workflows and automated processes that reduce administrative burden.",
    icon: Clock
  },
  {
    title: "Enhanced Accuracy",
    description: "Reduced diagnostic errors and improved accuracy through AI-assisted analysis.",
    icon: CheckCircle
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security measures that protect sensitive patient information.",
    icon: Shield
  }
]

export default function HealthcarePage() {
  return (
    <PageLayout
      title="Healthcare & Life Sciences"
      description="HIPAA-compliant AI systems for diagnostics, patient care, and operational efficiency in healthcare."
      breadcrumbs={[
        { label: 'Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/health' }
      ]}
    >
      <Section
        title="AI-Powered Healthcare Solutions"
        description="Transform healthcare delivery with AI systems designed for clinical excellence, patient safety, and regulatory compliance."
      >
        <div className="grid-2">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-gray-700" />
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
          <h2 className="section-title">Healthcare Use Cases</h2>
          <p className="section-description">
            Comprehensive AI applications across the healthcare continuum
          </p>
        </div>
        
        <div className="grid-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="card text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>Healthcare AI Implementation</h2>
          <p>
            Our healthcare AI solutions are designed with patient safety, clinical efficacy, 
            and regulatory compliance as core principles. We work closely with healthcare 
            providers to understand clinical workflows and integrate AI seamlessly into 
            existing systems.
          </p>

          <h3>Clinical Decision Support</h3>
          <p>
            Our AI systems provide evidence-based recommendations to support clinical 
            decision-making. These systems analyze patient data, medical literature, 
            and clinical guidelines to assist healthcare providers with diagnosis, 
            treatment planning, and care optimization.
          </p>

          <h3>Medical Imaging & Diagnostics</h3>
          <p>
            Advanced computer vision and machine learning models analyze medical images 
            including X-rays, MRIs, CT scans, and pathology slides. Our systems can 
            detect abnormalities, quantify disease progression, and assist with 
            diagnostic accuracy.
          </p>

          <h3>Drug Discovery & Development</h3>
          <p>
            AI-accelerated drug discovery platforms that analyze molecular structures, 
            predict drug interactions, and optimize clinical trial design. Our systems 
            help pharmaceutical companies reduce development timelines and improve 
            success rates.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Compliance & Security</h2>
          <p className="section-description">
            Healthcare-grade compliance and security measures for patient data protection
          </p>
        </div>
        
        <div className="grid-2">
          {compliance.map((item, index) => (
            <div key={index} className="card">
              <h3 className="card-title">
                {item.title}
              </h3>
              <p className="card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-description">
            How AI transforms healthcare delivery and patient outcomes
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

      <Section variant="alt">
        <div className="content-prose">
          <h2>Implementation Approach</h2>
          <p>
            We follow a systematic approach to healthcare AI implementation that ensures 
            clinical validation, regulatory compliance, and seamless integration with 
            existing healthcare workflows.
          </p>

          <h3>Clinical Validation</h3>
          <p>
            All healthcare AI systems undergo rigorous clinical validation with healthcare 
            professionals. We conduct pilot studies, gather clinical feedback, and validate 
            system performance against clinical outcomes.
          </p>

          <h3>Regulatory Compliance</h3>
          <p>
            Our systems are designed to meet healthcare regulatory requirements including 
            FDA, HIPAA, and international standards. We provide comprehensive documentation 
            and support for regulatory submissions.
          </p>

          <h3>Integration & Training</h3>
          <p>
            Seamless integration with electronic health records, hospital information systems, 
            and clinical workflows. We provide comprehensive training and ongoing support 
            to ensure successful adoption.
          </p>

          <h2>Success Metrics</h2>
          <p>
            Our healthcare AI implementations have demonstrated significant improvements in 
            diagnostic accuracy, operational efficiency, and patient outcomes. We work with 
            healthcare organizations to establish clear success metrics and measure impact.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to transform healthcare with AI?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how our healthcare AI solutions can improve patient outcomes and operational efficiency.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start your healthcare AI journey →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 