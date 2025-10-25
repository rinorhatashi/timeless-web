import React from 'react'
import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageLayoutProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  children: React.ReactNode
  className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  breadcrumbs = [],
  children,
  className = ''
}) => {
  return (
    <div className={`page-layout ${className}`}>
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="breadcrumb-container">
          <div className="breadcrumb-content">
            <nav className="breadcrumb">
              <Link href="/" className="breadcrumb-item">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.href}>
                  <ArrowRight className="breadcrumb-separator" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="breadcrumb-item current">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="breadcrumb-item">
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">{title}</h1>
          {description && (
            <p className="page-description">{description}</p>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main className="page-main">
        {children}
      </main>
    </div>
  )
}

interface SectionProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'alt' | 'dark'
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
  className = '',
  variant = 'default',
  id
}) => {
  return (
    <section id={id} className={`section section-${variant} ${className}`}>
      <div className="section-content">
        {(title || description) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="section-description">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

interface CardProps {
  title: string
  description: string
  features?: string[]
  href?: string
  status?: string
  className?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  features = [],
  href,
  status,
  className = ''
}) => {
  const CardContent = (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {status && (
          <span className="card-status">{status}</span>
        )}
      </div>
      <p className="card-description">{description}</p>
      {features.length > 0 && (
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index} className="card-feature">{feature}</li>
          ))}
        </ul>
      )}
      {href && (
        <div className="card-action">
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="card-link">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}

interface TimelinePhaseProps {
  title: string
  duration?: string
  items: string[]
}

export const TimelinePhase: React.FC<TimelinePhaseProps> = ({
  title,
  duration,
  items
}) => {
  return (
    <div className="timeline-phase">
      <h3 className="timeline-title">{title}</h3>
      {duration && <p className="timeline-duration">{duration}</p>}
      <ul className="timeline-items">
        {items.map((item, index) => (
          <li key={index} className="timeline-item">{item}</li>
        ))}
      </ul>
    </div>
  )
} 