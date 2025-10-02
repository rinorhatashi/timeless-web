import { PageLayout, Section } from '@/components/ui/page-layout'

export default function CookiesPage() {
  return (
    <PageLayout
      title="Cookie Policy"
      description="How we use cookies and similar technologies."
      breadcrumbs={[
        { label: 'Cookie Policy', href: '/cookies' }
      ]}
    >
      <Section>
        <div className="content-prose">
          <p className="text-lg mb-8">
            Last updated: January 1, 2024
          </p>

          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when 
            you visit our website. They help us remember information about your visit and can 
            make your next visit easier and the site more useful to you.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, understand 
            where our visitors are coming from, and improve our services. We also use cookies 
            to remember your preferences and provide personalized content.
          </p>

          <h2>Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website.</li>
            <li><strong>Functional Cookies:</strong> These remember your preferences and improve your experience.</li>
            <li><strong>Marketing Cookies:</strong> These track your activity to help us provide more relevant advertising.</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways. Most browsers allow you to refuse 
            cookies or delete cookies. The methods for doing so vary from browser to browser. 
            Please note that blocking cookies may impact your experience on our website.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies may be placed by third-party services that appear on our pages. We do 
            not control these cookies and recommend you check the respective privacy policies 
            of these services.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@timeless.dev" className="text-gray-900 underline">
              privacy@timeless.dev
            </a>.
          </p>
        </div>
      </Section>
    </PageLayout>
  )
} 