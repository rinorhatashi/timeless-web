import { PageLayout, Section } from '@/components/ui/page-layout'

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
      breadcrumbs={[
        { label: 'Privacy Policy', href: '/privacy' }
      ]}
    >
      <Section>
        <div className="content-prose">
          <p className="text-lg mb-8">
            Last updated: January 1, 2024
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            contact us, or use our services. This may include your name, email address, phone number, 
            and any other information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            process transactions, send you technical notices and support messages, and communicate 
            with you about products, services, and events.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this privacy policy or as required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You may also 
            opt out of certain communications from us. Please contact us if you wish to exercise 
            these rights.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:privacy@timeless.dev" className="text-gray-900 underline">
              privacy@timeless.dev
            </a>.
          </p>
        </div>
      </Section>
    </PageLayout>
  )
} 