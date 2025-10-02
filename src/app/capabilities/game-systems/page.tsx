"use client"

import { PageLayout, Section } from '@/components/ui/page-layout'
import { useI18n } from '@/lib/i18n/context'

export default function GameSystemsPage() {
  const { t } = useI18n()
  
  return (
    <PageLayout
      title={t('pages.gameSystems.title')}
      description={t('pages.gameSystems.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.gameSystems.breadcrumb'), href: '/capabilities/game-systems' }
      ]}
    >
      <Section
        title="Game Development"
        description="From authoring tools to live ops"
      >
        <div className="content-prose">
          <p>We develop multiplayer games and real-time backends across mobile, PC, and console platforms. Our expertise includes authoritative netcode, personalization systems, in-game economies, and live operations at scale.</p>
          <p>We also build tools for blockchain gaming, NFT integration, and play-to-earn mechanics.</p>
        </div>
      </Section>

      <Section
        title="Technical Capabilities"
        description="End-to-end game system development"
        variant="alt"
      >
        <div className="grid-2">
          <div className="feature-card">
            <h3>Multiplayer Systems</h3>
            <p>Authoritative servers, client prediction, and lag compensation.</p>
          </div>
          <div className="feature-card">
            <h3>Live Operations</h3>
            <p>Content updates, event management, and player analytics.</p>
          </div>
          <div className="feature-card">
            <h3>Game Economies</h3>
            <p>Virtual currencies, item systems, and marketplace mechanics.</p>
          </div>
          <div className="feature-card">
            <h3>Blockchain Gaming</h3>
            <p>NFT integration, smart contracts, and decentralized game assets.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Platform Support"
        description="Cross-platform game development"
      >
        <div className="content-prose">
          <p>We build games for mobile (iOS/Android), PC (Windows/Mac/Linux), and console platforms (PlayStation, Xbox, Nintendo Switch). Our cross-platform solutions maximize code reuse while optimizing for each platform.</p>
        </div>
      </Section>
    </PageLayout>
  )
} 