import { PageLayout, Section } from '@/components/ui/page-layout'

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service"
      description="Terms and conditions for using our services."
      breadcrumbs={[
        { label: 'Terms of Service', href: '/terms' }
      ]}
    >
      <Section>
        <div className="content-prose">
          <p className="text-lg mb-8">
            Last updated: January 1, 2024
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Timeless's 
            website for personal, non-commercial transitory viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on Timeless's website are provided on an 'as is' basis. Timeless makes 
            no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
            including without limitation, implied warranties or conditions of merchantability.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Timeless or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on Timeless's website.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on Timeless's website could include technical, typographical, 
            or photographic errors. Timeless does not warrant that any of the materials on its 
            website are accurate, complete, or current.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@timeless.dev" className="text-gray-900 underline">
              legal@timeless.dev
            </a>.
          </p>
        </div>
      </Section>
    </PageLayout>
  )
} 