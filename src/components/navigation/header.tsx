"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, ChevronDown, ArrowRight, ChevronRight, Settings } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { SettingsPanel } from '@/components/ui/settings-panel'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
  description?: string
}


// Mock search results for demonstration
const mockSearchResults = [
  { title: 'AI Strategy & Value', description: 'Comprehensive AI strategy consulting and value assessment', category: 'Capabilities', href: '/capabilities/ai-strategy-value' },
  { title: 'ADAO Platform', description: 'Autonomous Decentralized Autonomous Organization platform', category: 'Platforms', href: '/platforms/adao-platform' },
  { title: 'Healthcare Solutions', description: 'AI-powered healthcare and medical solutions', category: 'Industries', href: '/industries/health' },
  { title: 'Payment Solutions', description: 'Secure payment processing and fintech solutions', category: 'Solutions', href: '/solutions/payment-solutions' },
  { title: 'Agent Safety Aegis', description: 'Research on agent safety and reliability', category: 'Research', href: '/research/agent-safety-aegis' },
  { title: 'Investment Portfolio', description: 'Our venture investments and partnerships', category: 'Ventures', href: '/ventures' },
  { title: 'Industry Reports', description: 'Comprehensive industry analysis and insights', category: 'Insights', href: '/insights/reports' },
  { title: 'Our Team', description: 'Meet the Timeless team and leadership', category: 'About', href: '/about/team' }
]

export const Header = () => {
  const { t, isLoading } = useI18n()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  

  // Navigation items using translations
  const navigationItems: NavigationItem[] = [
    {
      label: t('navigation.capabilities'),
      href: '/capabilities',
      description: t('navigation.menu.capabilities.description'),
      children: [
        { label: t('navigation.menu.capabilities.aiStrategy'), href: '/capabilities/ai-strategy-value' },
        { label: t('navigation.menu.capabilities.agenticSystems'), href: '/capabilities/agentic-systems' },
        { label: t('navigation.menu.capabilities.genaiApps'), href: '/capabilities/genai-apps' },
        { label: t('navigation.menu.capabilities.ragKnowledge'), href: '/capabilities/rag-knowledge-orchestration' },
        { label: t('navigation.menu.capabilities.llmops'), href: '/capabilities/llmops-observability' },
        { label: t('navigation.menu.capabilities.responsibleAI'), href: '/capabilities/responsible-ai' },
        { label: t('navigation.menu.capabilities.sovereignAI'), href: '/capabilities/sovereign-private-ai' },
        { label: t('navigation.menu.capabilities.talentEnablement'), href: '/capabilities/talent-enablement' },
        { label: t('navigation.menu.capabilities.embeddedEdgeAI'), href: '/capabilities/embedded-edge-ai' },
        { label: t('navigation.menu.capabilities.dataPlatforms'), href: '/capabilities/data-platforms' },
        { label: t('navigation.menu.capabilities.securityCompliance'), href: '/capabilities/security-compliance' },
        { label: t('navigation.menu.capabilities.roboticsRPA'), href: '/capabilities/robotics-rpa' },
        { label: t('navigation.menu.capabilities.platformEngineering'), href: '/capabilities/platform-engineering' },
        { label: t('navigation.menu.capabilities.enterpriseSoftware'), href: '/capabilities/enterprise-software' },
        { label: t('navigation.menu.capabilities.blockchainCrypto'), href: '/capabilities/blockchain-cryptography' },
        { label: t('navigation.menu.capabilities.gameSystems'), href: '/capabilities/game-systems' },
        { label: t('navigation.menu.capabilities.deepTechResearch'), href: '/capabilities/deep-tech-research' }
      ]
    },
    {
      label: t('navigation.platforms'),
      href: '/platforms',
      description: t('navigation.menu.platforms.description'),
      children: [
        { label: t('navigation.menu.platforms.adaoPlatform'), href: '/platforms/adao-platform' },
        { label: t('navigation.menu.platforms.ritaPlatform'), href: '/platforms/rita-remote-care' },
        { label: t('navigation.menu.platforms.marriottInspector'), href: '/platforms/marriott-inspector' }
      ]
    },
    {
      label: t('navigation.industries'),
      href: '/industries',
      description: t('navigation.menu.industries.description'),
      children: [
        { label: t('navigation.menu.industries.industrial'), href: '/industries/industrial' },
        { label: t('navigation.menu.industries.healthcare'), href: '/industries/health' },
        { label: t('navigation.menu.industries.automotive'), href: '/industries/automotive' },
        { label: t('navigation.menu.industries.energy'), href: '/industries/energy' },
        { label: t('navigation.menu.industries.telcoMedia'), href: '/industries/telco-media' },
        { label: t('navigation.menu.industries.agriculture'), href: '/industries/agriculture' },
        { label: t('navigation.menu.industries.retailCPG'), href: '/industries/retail-cpg' },
        { label: t('navigation.menu.industries.highTech'), href: '/industries/high-tech' },
        { label: t('navigation.menu.industries.softwarePlatforms'), href: '/industries/software-platforms' },
        { label: t('navigation.menu.industries.publicSector'), href: '/industries/public-sector' }
      ]
    },
    {
      label: t('navigation.solutions'),
      href: '/solutions',
      description: t('navigation.menu.solutions.description'),
      children: [
        { label: t('navigation.menu.solutions.paymentSolutions'), href: '/solutions/payment-solutions' },
        { label: t('navigation.menu.solutions.smartCards'), href: '/solutions/smart-cards-digital-id' },
        { label: t('navigation.menu.solutions.wearables'), href: '/solutions/wearables' }
      ]
    },
    {
      label: t('navigation.research'),
      href: '/research',
      description: t('navigation.menu.research.description'),
      children: [
        { label: t('navigation.menu.research.agentSafety'), href: '/research/agent-safety-aegis' },
        { label: t('navigation.menu.research.agenticRAG'), href: '/research/agentic-rag' },
        { label: t('navigation.menu.research.digitalTwins'), href: '/research/digital-twins-ops' },
        { label: t('navigation.menu.research.llmObservability'), href: '/research/llm-observability' },
        { label: t('navigation.menu.research.multimodalRealtime'), href: '/research/multimodal-real-time' },
        { label: t('navigation.menu.research.onDeviceInference'), href: '/research/on-device-inference' },
        { label: t('navigation.menu.research.sovereignAI'), href: '/research/sovereign-ai' },
        { label: t('navigation.menu.research.trustlessModelSharing'), href: '/research/trustless-model-sharing' }
      ]
    },
    {
      label: t('navigation.ventures'),
      href: '/ventures',
      description: t('navigation.menu.ventures.description')
    },
    {
      label: t('navigation.insights'),
      href: '/insights',
      description: t('navigation.menu.insights.description'),
      children: [
        { label: t('navigation.menu.insights.reports'), href: '/insights/reports' }
      ]
    },
    {
      label: t('navigation.about'),
      href: '/about',
      description: t('navigation.menu.about.description'),
      children: [
        { label: t('navigation.menu.about.team'), href: '/about/team' },
        { label: t('navigation.menu.about.careers'), href: '/about/careers' },
        { label: t('navigation.menu.about.partners'), href: '/about/partners' }
      ]
    }
  ]

  const searchCategories = [
    { label: t('navigation.capabilities'), value: 'capabilities' },
    { label: t('navigation.platforms'), value: 'platforms' },
    { label: t('navigation.industries'), value: 'industries' },
    { label: t('navigation.solutions'), value: 'solutions' },
    { label: t('navigation.research'), value: 'research' },
    { label: t('navigation.ventures'), value: 'ventures' },
    { label: t('navigation.insights'), value: 'insights' },
    { label: t('navigation.about'), value: 'about' }
  ]

  const handleMouseEnter = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    // Add a delay before closing to allow smooth transitions to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const handleLinkClick = () => {
    // Clear any pending close timeout and close immediately
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
    setIsSettingsOpen(false)
    setMobileActiveSubmenu(null)
  }

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setIsSettingsOpen(false)
      setIsMobileMenuOpen(false)
    }
  }

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen)
    if (!isSettingsOpen) {
      setIsSearchOpen(false)
    }
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false)
      setIsSettingsOpen(false)
    }
  }

  const handleMobileSubmenuToggle = (label: string) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search submission
  }

  const filteredResults = searchQuery 
    ? mockSearchResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            result.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || 
                               result.category.toLowerCase() === selectedCategory.toLowerCase()
        return matchesQuery && matchesCategory
      })
    : []

  // Close drawers on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsSettingsOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    if (isSearchOpen || isSettingsOpen || isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isSearchOpen, isSettingsOpen, isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen, isSearchOpen])

  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Logo - with more breathing room */}
          <Link href="/" className="logo" style={{ marginRight: '48px' }} onClick={handleLinkClick}>
            TIMELESS
          </Link>

          {/* Desktop Navigation - closer spacing between items */}
          <nav className="nav-menu" style={{ gap: '24px' }}>
            {isLoading ? (
              // Skeleton loading for navigation
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="nav-item">
                    <div 
                      className="nav-link" 
                      style={{ 
                        background: 'var(--card-bg)',
                        height: '20px',
                        width: '80px',
                        borderRadius: '4px',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }}
                    />
                  </div>
                ))}
              </>
            ) : (
              navigationItems.map((item) => (
              <div
                key={item.label}
                className="nav-item"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className="nav-link" onClick={handleLinkClick}>
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu with proper hover behavior */}
                {item.children && activeDropdown === item.label && (
                  <div 
                    className="nav-dropdown"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Header with main page link */}
                    <div className="dropdown-header">
                      <Link href={item.href} className="dropdown-main-link" onClick={handleLinkClick}>
                        <div>
                          <div className="dropdown-main-title">{item.label}</div>
                          <div className="dropdown-main-desc">{item.description}</div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                    
                    {/* Sub-pages */}
                    <div className="dropdown-links">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="dropdown-link group"
                          onClick={handleLinkClick}
                        >
                          <span>{child.label}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              ))
            )}
          </nav>

          {/* Header Actions - with separation from menu items */}
          <div className="header-actions" style={{ marginLeft: '48px', gap: '16px' }}>
            <button 
              className="search-btn" 
              aria-label="Search"
              onClick={handleSearchToggle}
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              className="lang-btn" 
              aria-label="Settings"
              onClick={handleSettingsToggle}
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="mobile-menu-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-menu-logo" onClick={handleLinkClick}>
                TIMELESS
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mobile-menu-content">
              {isLoading ? (
                // Skeleton loading for mobile menu
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="mobile-menu-item">
                      <div 
                        style={{ 
                          background: 'var(--card-bg)',
                          height: '24px',
                          width: '60%',
                          borderRadius: '4px',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                      />
                    </div>
                  ))}
                </>
              ) : (
                navigationItems.map((item) => (
                  <div key={item.label} className="mobile-menu-item">
                    <div className="mobile-menu-item-header">
                      <Link 
                        href={item.href} 
                        className="mobile-menu-link"
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => handleMobileSubmenuToggle(item.label)}
                          className="mobile-submenu-toggle"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronRight 
                            className={`w-5 h-5 transition-transform ${
                              mobileActiveSubmenu === item.label ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    
                    {item.children && mobileActiveSubmenu === item.label && (
                      <div className="mobile-submenu">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="mobile-submenu-link"
                            onClick={handleLinkClick}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </nav>

            <div className="mobile-menu-footer">
              <button 
                className="mobile-menu-search-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsSearchOpen(true)
                }}
              >
                <Search className="w-5 h-5" />
                <span>{t('navigation.search')}</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Search Drawer */}
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="search-backdrop"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Search Drawer */}
          <div className="search-drawer">
            <div className="search-drawer-header">
              <h2 className="search-drawer-title">{t('navigation.search')}</h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="search-drawer-close"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="search-drawer-content">
              <form onSubmit={handleSearchSubmit} className="search-form">
                {/* Search Input */}
                <div className="search-input-container">
                  <Search className="search-input-icon" />
                  <input
                    type="text"
                    placeholder={t('navigation.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    autoFocus
                  />
                </div>

                {/* Category Filters */}
                <div className="search-filters">
                  <span className="search-filters-label">{t('common.viewAll')}:</span>
                  <div className="search-filter-buttons">
                    {searchCategories.map((category) => (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() => setSelectedCategory(category.value)}
                        className={`search-filter-btn ${
                          selectedCategory === category.value ? 'active' : ''
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </form>

              {/* Search Results */}
              <div className="search-results">
                {searchQuery ? (
                  <>
                    <div className="search-results-header">
                      <span className="search-results-count">
                        {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                      </span>
                      {selectedCategory !== 'all' && (
                        <span className="search-results-filter">
                          in {selectedCategory}
                        </span>
                      )}
                    </div>

                    <div className="search-results-list">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.href}
                            className="search-result-item"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            <div className="search-result-content">
                              <h4 className="search-result-title">{result.title}</h4>
                              <p className="search-result-description">{result.description}</p>
                            </div>
                            <span className="search-result-category">
                              {result.category}
                            </span>
                          </Link>
                        ))
                      ) : (
                        <div className="search-no-results">
                          <p>No results found for "{searchQuery}"</p>
                          <p className="search-no-results-suggestion">
                            Try adjusting your search terms or filters
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="search-placeholder">
                    <div className="search-placeholder-content">
                      <Search className="search-placeholder-icon" />
                      <h3 className="search-placeholder-title">Start typing to search</h3>
                      <p className="search-placeholder-description">
                        Search across all our capabilities, platforms, research, and more
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Settings Panel */}
      <SettingsPanel 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  )
}
