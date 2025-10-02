import { PageLayout, Section } from '@/components/ui/page-layout'
import Link from 'next/link'

const ventures = [
  {
    name: "Vianova Health",
    description: "Remote Patient Monitoring platform-device telemetry, care plans, clinician workflows. Featured by Lenovo; covered by Bloomberg and others."
  },
  {
    name: "Zombie Soup", 
    description: "High‑end software and game development; early play‑to‑earn pilot with Horizen; VR title in Oculus Top 100 (2017)."
  },
  {
    name: "Sequence Web3",
    description: "Research & development in decentralized systems; end‑to‑end blockchain solutions and infrastructure."
  },
  {
    name: "FATCAT Games",
    description: "Mobile and VR game studio exploring new mechanics and web3 integrations."
  },
  {
    name: "Hello",
    description: "Social voice app with millions of users and rapid growth."
  },
  {
    name: "VAST", 
    description: "NFT marketplace and web3 experiences in collaboration with artists and brands."
  },
  {
    name: "0xShuffle",
    description: "Decentralized raffle marketplace for NFTs-provable fairness and wallet‑native experiences."
  },
  {
    name: "NextLoc",
    description: "Data‑driven site selection for restaurants-geospatial analytics and operational signals."
  },
  {
    name: "Quantum Camel",
    description: "Applied AI and LLM experimentation for enterprise use cases."
  },
  {
    name: "TRPPN",
    description: "Music platform giving creators visibility and income via web3 rails."
  },
  {
    name: "Genesis 1337",
    description: "Esports DAO concept-governance and community mechanics."
  },
  {
    name: "Overpriced",
    description: "High‑end fashion experiments intersecting digital and physical ownership."
  },
  {
    name: "Pyper Analytics",
    description: "Market research and public opinion polling powered by data pipelines."
  },
  {
    name: "Know Foundation",
    description: "Technologies and services aimed at the future of immersive, interoperable spaces."
  }
]

export default function VenturesPage() {
  return (
    <PageLayout
      title="Ventures"
      description="A representative selection of ventures we have founded, co‑built, or supported."
      breadcrumbs={[
        { label: 'Ventures', href: '/ventures' }
      ]}
    >
      <Section
        title="Our Portfolio"
        description="Ventures spanning health, web3, games, data, and AI"
      >
        <div className="space-y-8">
          {ventures.map((venture, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {venture.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-8 text-white">
            Partner with us
          </h2>
          <Link 
            href="/contact" 
            className="btn-primary"
            style={{ background: 'var(--primary-white)', color: 'var(--primary-black)' }}
          >
            Partner with us →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
}
