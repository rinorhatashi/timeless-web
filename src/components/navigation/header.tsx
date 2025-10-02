"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X, ChevronDown, ArrowRight, Globe, ChevronRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
  description?: string
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Capabilities',
    href: '/capabilities',
    description: 'AI Strategy, Agentic Systems, GenAI Applications, and more',
    children: [
      { label: 'AI Strategy & Value', href: '/capabilities/ai-strategy-value' },
      { label: 'Agentic Systems', href: '/capabilities/agentic-systems' },
      { label: 'GenAI Applications', href: '/capabilities/genai-apps' },
      { label: 'RAG & Knowledge', href: '/capabilities/rag-knowledge-orchestration' },
      { label: 'LLMOps & Observability', href: '/capabilities/llmops-observability' },
      { label: 'Responsible AI', href: '/capabilities/responsible-ai' },
      { label: 'Sovereign/Private AI', href: '/capabilities/sovereign-private-ai' },
      { label: 'Talent & Enablement', href: '/capabilities/talent-enablement' },
      { label: 'Embedded & Edge AI', href: '/capabilities/embedded-edge-ai' },
      { label: 'Data Platforms', href: '/capabilities/data-platforms' },
      { label: 'Security & Compliance', href: '/capabilities/security-compliance' },
      { label: 'Robotics & RPA', href: '/capabilities/robotics-rpa' },
      { label: 'Platform Engineering', href: '/capabilities/platform-engineering' },
      { label: 'Enterprise Software', href: '/capabilities/enterprise-software' },
      { label: 'Blockchain & Cryptography', href: '/capabilities/blockchain-cryptography' },
      { label: 'Game Systems', href: '/capabilities/game-systems' },
      { label: 'Deep Tech Research', href: '/capabilities/deep-tech-research' }
    ]
  },
  {
    label: 'Platforms',
    href: '/platforms',
    description: 'Agent Platform, RAG Orchestrator, Safety Stack',
    children: [
      { label: 'Agent Platform', href: '/platforms/agent-platform' },
      { label: 'RAG Orchestrator', href: '/platforms/rag-orchestrator' },
      { label: 'RAI Safety Stack', href: '/platforms/rai-safety-stack' },
      { label: 'Sovereign AI Blueprint', href: '/platforms/sovereign-ai-blueprint' }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    description: 'Industrial, Healthcare, Automotive, Energy, and more',
    children: [
      { label: 'Industrial & Manufacturing', href: '/industries/industrial' },
      { label: 'Healthcare', href: '/industries/health' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Energy', href: '/industries/energy' },
      { label: 'Telco & Media', href: '/industries/telco-media' },
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'Retail & CPG', href: '/industries/retail-cpg' },
      { label: 'High Tech', href: '/industries/high-tech' },
      { label: 'Software & Platforms', href: '/industries/software-platforms' },
      { label: 'Public Sector', href: '/industries/public-sector' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    description: 'Payment Solutions, Wearables, Smart Cards',
    children: [
      { label: 'Payment Solutions', href: '/solutions/payment-solutions' },
      { label: 'Smart Cards & Digital ID', href: '/solutions/smart-cards-digital-id' },
      { label: 'Wearables', href: '/solutions/wearables' }
    ]
  },
  {
    label: 'Research',
    href: '/research',
    description: 'Agent Safety, Digital Twins, LLM Observability',
    children: [
      { label: 'Agent Safety Aegis', href: '/research/agent-safety-aegis' },
      { label: 'Agentic RAG', href: '/research/agentic-rag' },
      { label: 'Digital Twins Ops', href: '/research/digital-twins-ops' },
      { label: 'LLM Observability', href: '/research/llm-observability' },
      { label: 'Multimodal Real-time', href: '/research/multimodal-real-time' },
      { label: 'On-device Inference', href: '/research/on-device-inference' },
      { label: 'Sovereign AI', href: '/research/sovereign-ai' },
      { label: 'Trustless Model Sharing', href: '/research/trustless-model-sharing' }
    ]
  },
  {
    label: 'Ventures',
    href: '/ventures',
    description: 'Our investment portfolio and startup partnerships'
  },
  {
    label: 'Insights',
    href: '/insights',
    description: 'Reports, case studies, and industry insights',
    children: [
      { label: 'Reports', href: '/insights/reports' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    description: 'Team, Careers, Partners',
    children: [
      { label: 'Team', href: '/about/team' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Partners', href: '/about/partners' }
    ]
  }
]

const searchCategories = [
  { label: 'All', value: 'all' },
  { label: 'Capabilities', value: 'capabilities' },
  { label: 'Platforms', value: 'platforms' },
  { label: 'Industries', value: 'industries' },
  { label: 'Solutions', value: 'solutions' },
  { label: 'Research', value: 'research' },
  { label: 'Ventures', value: 'ventures' },
  { label: 'Insights', value: 'insights' },
  { label: 'About', value: 'about' }
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

// Mock search results for demonstration
const mockSearchResults = [
  { title: 'AI Strategy & Value', description: 'Comprehensive AI strategy consulting and value assessment', category: 'Capabilities', href: '/capabilities/ai-strategy-value' },
  { title: 'Agent Platform', description: 'Next-generation agent development platform', category: 'Platforms', href: '/platforms/agent-platform' },
  { title: 'Healthcare Solutions', description: 'AI-powered healthcare and medical solutions', category: 'Industries', href: '/industries/health' },
  { title: 'Payment Solutions', description: 'Secure payment processing and fintech solutions', category: 'Solutions', href: '/solutions/payment-solutions' },
  { title: 'Agent Safety Aegis', description: 'Research on agent safety and reliability', category: 'Research', href: '/research/agent-safety-aegis' },
  { title: 'Investment Portfolio', description: 'Our venture investments and partnerships', category: 'Ventures', href: '/ventures' },
  { title: 'Industry Reports', description: 'Comprehensive industry analysis and insights', category: 'Insights', href: '/insights/reports' },
  { title: 'Our Team', description: 'Meet the Timeless team and leadership', category: 'About', href: '/about/team' }
]

export const Header = () => {
  const { locale, setLocale } = useI18n()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null)
  
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleLinkClick = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
    setIsLanguageOpen(false)
    setMobileActiveSubmenu(null)
  }

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setIsLanguageOpen(false)
      setIsMobileMenuOpen(false)
    }
  }

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen)
    if (!isLanguageOpen) {
      setIsSearchOpen(false)
    }
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false)
      setIsLanguageOpen(false)
    }
  }

  const handleMobileSubmenuToggle = (label: string) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label)
  }

  const handleLanguageChange = (language: typeof languages[0]) => {
    setLocale(language.code as 'en' | 'de' | 'ar')
    setIsLanguageOpen(false)
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

  // Close search drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsLanguageOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    if (isSearchOpen || isLanguageOpen || isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isSearchOpen, isLanguageOpen, isMobileMenuOpen])

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
            {navigationItems.map((item) => (
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
            ))}
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
            
            <div className="relative">
              <button 
                className="lang-btn" 
                aria-label="Language"
                onClick={handleLanguageToggle}
              >
                <Globe className="w-5 h-5" />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-30" 
                    onClick={() => setIsLanguageOpen(false)}
                  />
                  <div className="language-dropdown">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className={`language-option ${
                          language.code === currentLanguage.code ? 'active' : ''
                        }`}
                      >
                        <span className="language-flag">{language.flag}</span>
                        <span className="language-name">{language.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

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
              {navigationItems.map((item) => (
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
              ))}
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
                <span>Search</span>
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
              <h2 className="search-drawer-title">Search</h2>
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
                    placeholder="Search across all content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    autoFocus
                  />
                </div>

                {/* Category Filters */}
                <div className="search-filters">
                  <span className="search-filters-label">Filter by:</span>
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
    </>
  )
}
