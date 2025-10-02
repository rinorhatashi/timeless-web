import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Heart, Clock, Users, Shield } from 'lucide-react'

const metrics = [
  {
    value: '32%',
    label: 'Diagnostic Accuracy Improvement',
    icon: Heart
  },
  {
    value: '65%',
    label: 'Faster Image Analysis',
    icon: Clock
  },
  {
    value: '1M+',
    label: 'Medical Images Processed',
    icon: Users
  }
]

const challenges = [
  'Integrating AI with existing radiology workflows',
  'Ensuring HIPAA compliance and patient data security',
  'Training radiologists on AI-assisted diagnosis',
  'Validating AI accuracy against clinical standards',
  'Scaling across multiple hospital systems'
]

const solutions = [
  'Developed custom DICOM integration for seamless workflow',
  'Implemented end-to-end encryption and audit logging',
  'Created comprehensive training programs and certification',
  'Conducted extensive clinical validation studies',
  'Built cloud-native architecture for multi-site deployment'
]

export default function Case02Page() {
  return (
    <PageLayout
      title="Healthcare AI for Diagnostic Imaging"
      description="Building HIPAA-compliant AI systems for medical image analysis that improved diagnostic accuracy by 32%."
      breadcrumbs={[
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Case 02', href: '/case-studies/case-02' }
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
              Healthcare
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              12 Month Timeline
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              HIPAA Compliant
            </span>
          </div>

          <h2>The Challenge</h2>
          <p>
            A leading healthcare network needed to improve diagnostic accuracy and reduce 
            radiologist workload across their 15 hospital system. They were experiencing 
            increasing imaging volumes while facing a shortage of specialized radiologists, 
            leading to longer wait times and potential diagnostic delays.
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
            We developed a comprehensive AI-powered diagnostic imaging platform that integrates 
            seamlessly with existing radiology workflows. The system provides real-time analysis 
            of medical images, highlighting potential abnormalities and providing confidence 
            scores to assist radiologists in their diagnoses.
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
            The AI diagnostic imaging system exceeded all performance targets and demonstrated 
            significant improvements in both diagnostic accuracy and operational efficiency. 
            The implementation has been successfully deployed across all 15 hospitals in the network.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Metrics</h2>
          <p className="section-description">
            Measurable improvements achieved through our healthcare AI implementation
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
            The AI diagnostic imaging platform was built using state-of-the-art computer vision 
            models trained on millions of medical images. The system integrates with existing 
            PACS (Picture Archiving and Communication Systems) and provides real-time analysis 
            through a user-friendly interface.
          </p>

          <h3>AI Model Development</h3>
          <p>
            We developed specialized deep learning models for different imaging modalities 
            including X-rays, CT scans, and MRIs. Each model was trained on diverse datasets 
            and validated against clinical ground truth to ensure high accuracy and reliability.
          </p>

          <h3>HIPAA Compliance & Security</h3>
          <p>
            The entire system was designed with HIPAA compliance as a core requirement. 
            We implemented comprehensive security measures including end-to-end encryption, 
            role-based access controls, audit logging, and secure data transmission protocols.
          </p>

          <h3>Clinical Workflow Integration</h3>
          <p>
            The AI system was seamlessly integrated into existing radiology workflows without 
            disrupting daily operations. Radiologists can access AI insights directly within 
            their familiar PACS interface, enabling efficient review and decision-making.
          </p>

          <h2>Clinical Validation</h2>
          <p>
            Extensive clinical validation was conducted with board-certified radiologists 
            across multiple specialties. The validation studies demonstrated superior performance 
            compared to traditional diagnostic methods while maintaining high specificity 
            to minimize false positives.
          </p>

          <h2>Training & Adoption</h2>
          <p>
            We developed comprehensive training programs for radiologists and imaging 
            technologists. The training included hands-on workshops, certification programs, 
            and ongoing support to ensure successful adoption across all hospital sites.
          </p>

          <h2>Impact & Outcomes</h2>
          <p>
            The implementation has resulted in faster diagnosis times, improved accuracy, 
            and reduced radiologist workload. Patient satisfaction has increased due to 
            shorter wait times, and the healthcare network has been able to handle 40% 
            more imaging cases without additional staff.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="grid-2">
          <div className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Heart className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="card-title">Patient Benefits</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Faster diagnosis and treatment initiation</li>
              <li>• Improved diagnostic accuracy and outcomes</li>
              <li>• Reduced need for repeat imaging</li>
              <li>• Enhanced patient safety measures</li>
            </ul>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="card-title">Healthcare Provider Benefits</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Reduced radiologist workload and burnout</li>
              <li>• Enhanced diagnostic confidence</li>
              <li>• Improved workflow efficiency</li>
              <li>• Better resource utilization</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="content-prose">
          <h2>Lessons Learned</h2>
          <p>
            This project highlighted the importance of close collaboration with clinical 
            teams and the need for extensive validation in healthcare AI applications. 
            Change management and training were crucial for successful adoption across 
            multiple hospital sites.
          </p>

          <h2>Future Expansion</h2>
          <p>
            Based on the success of this implementation, the healthcare network is expanding 
            the AI diagnostic platform to additional imaging modalities and exploring 
            applications in other clinical areas including pathology and cardiology.
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
            Start your healthcare AI project →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 