import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'
import { ArrowRight, Handshake, Globe, Building2, Zap } from 'lucide-react'

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Leading technology companies we work with to deliver comprehensive solutions.",
    icon: Zap,
    examples: ["Cloud infrastructure providers", "AI/ML platform vendors", "Enterprise software companies", "Hardware manufacturers"]
  },
  {
    title: "Implementation Partners", 
    description: "Consulting and systems integration partners who help deploy our solutions.",
    icon: Building2,
    examples: ["Management consulting firms", "Systems integrators", "Digital transformation agencies", "Industry specialists"]
  },
  {
    title: "Research Partners",
    description: "Academic institutions and research organizations advancing AI science.",
    icon: Globe,
    examples: ["Leading universities", "Research institutes", "Standards organizations", "Think tanks"]
  },
  {
    title: "Industry Partners",
    description: "Domain experts who help us understand specific industry requirements.",
    icon: Handshake,
    examples: ["Industry associations", "Regulatory bodies", "Subject matter experts", "Customer advisory boards"]
  }
]

const benefits = [
  {
    title: "Expanded Capabilities",
    description: "Access to complementary technologies and expertise that enhance our core AI platform."
  },
  {
    title: "Global Reach",
    description: "Local presence and cultural understanding in key markets worldwide."
  },
  {
    title: "Industry Expertise", 
    description: "Deep domain knowledge in specific industries and use cases."
  },
  {
    title: "Accelerated Innovation",
    description: "Collaborative research and development to advance the state of the art."
  },
  {
    title: "Customer Success",
    description: "End-to-end support for customers from initial consultation to long-term operations."
  },
  {
    title: "Market Access",
    description: "Entry into new markets and customer segments through established relationships."
  }
]

export default function PartnersPage() {
  return (
    <PageLayout
      title="Partners"
      description="Strategic partnerships that extend our capabilities and global reach."
      breadcrumbs={[
        { label: 'About', href: '/about' },
        { label: 'Partners', href: '/about/partners' }
      ]}
    >
      <Section
        title="Partnership Ecosystem"
        description="We work with leading organizations across technology, consulting, research, and industry domains to deliver comprehensive AI solutions."
      >
        <div className="grid-2">
          {partnerTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="card-title">
                    {type.title}
                  </h3>
                </div>
                
                <p className="card-description mb-6">
                  {type.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center mb-12">
          <h2 className="section-title">Partnership Benefits</h2>
          <p className="section-description">
            How our partnerships create value for customers and drive innovation in AI
          </p>
        </div>
        
        <div className="grid-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center">
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

      <Section>
        <div className="content-prose">
          <h2>Partnership Principles</h2>
          <p>
            Our partnerships are built on shared values of innovation, quality, and customer success. 
            We believe that the most effective AI solutions come from combining diverse expertise 
            and perspectives.
          </p>

          <h3>Mutual Value Creation</h3>
          <p>
            We seek partnerships where both organizations can leverage their strengths to create 
            value that neither could achieve alone. Our goal is sustainable, long-term relationships 
            that benefit all stakeholders.
          </p>

          <h3>Customer-Centric Approach</h3>
          <p>
            All partnerships are evaluated based on how they improve outcomes for our customers. 
            We prioritize relationships that enhance our ability to deliver reliable, scalable, 
            and effective AI solutions.
          </p>

          <h3>Innovation Focus</h3>
          <p>
            We actively collaborate on research and development to advance the state of AI technology. 
            Our partners help us stay at the forefront of emerging trends and technical capabilities.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-8">Become a Partner</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in partnering with us? We're always looking for organizations that share 
            our commitment to advancing AI technology and delivering value to customers.
          </p>
          
          <div className="grid-2 max-w-2xl mx-auto">
            <div className="card text-center">
              <h3 className="text-lg font-medium mb-4">Technology Partners</h3>
              <p className="text-gray-600 mb-6">
                Integrate your technology with our AI platform or collaborate on joint solutions.
              </p>
              <Link 
                href="/contact"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group justify-center"
              >
                Explore technology partnership
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-medium mb-4">Channel Partners</h3>
              <p className="text-gray-600 mb-6">
                Resell our solutions or provide implementation services to your customers.
              </p>
              <Link 
                href="/contact"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2 group justify-center"
              >
                Join our partner program
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Ready to partner with us?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Let's explore how we can work together to deliver exceptional AI solutions.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Start the conversation →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 