"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  FileCode, Shield, Lock, Key, Database, Activity, AlertTriangle, 
  CheckCircle2, Settings, Eye, FileCheck, Zap, BarChart3, TrendingUp,
  RefreshCw, FileText, Code2, GitBranch, Server, Cpu, Network,
  DollarSign, Clock, Target, Layers, PackageCheck, Users
} from 'lucide-react'

export default function BlockchainCryptographyPage() {
  const { t, tObject } = useI18n()
  
  // Safe array extraction for TimelinePhase items
  const designItems = tObject('pages.blockchainCrypto.sections.zkPrivacy.phases.design.items')
  const implementationItems = tObject('pages.blockchainCrypto.sections.zkPrivacy.phases.implementation.items')
  const auditOpsItems = tObject('pages.blockchainCrypto.sections.zkPrivacy.phases.auditOps.items')
  const complianceItems = tObject('pages.blockchainCrypto.sections.complianceOperations.phases.compliance.items')
  const monitoringItems = tObject('pages.blockchainCrypto.sections.complianceOperations.phases.monitoring.items')
  const governanceItems = tObject('pages.blockchainCrypto.sections.complianceOperations.phases.governance.items')

  return (
    <PageLayout
      title={t('pages.blockchainCrypto.title')}
      description={t('pages.blockchainCrypto.description')}
      breadcrumbs={[
        { label: t('navigation.capabilities'), href: '/capabilities' },
        { label: t('pages.blockchainCrypto.breadcrumb'), href: '/capabilities/blockchain-cryptography' }
      ]}
    >
      <Section
        title={t('pages.blockchainCrypto.sections.overview.title')}
        description={t('pages.blockchainCrypto.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.blockchainCrypto.sections.overview.content.0')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.systemComponents.title')}
        description={t('pages.blockchainCrypto.sections.systemComponents.subtitle')}
        variant="alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <FileCode className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.systemComponents.items.smartContracts.title')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.systemComponents.items.smartContracts.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.systemComponents.items.zkPrivacy.title')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.systemComponents.items.zkPrivacy.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.systemComponents.items.custody.title')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.systemComponents.items.custody.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.systemComponents.items.dataAvailability.title')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.systemComponents.items.dataAvailability.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.systemComponents.items.compliance.title')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.systemComponents.items.compliance.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.systemComponents.items.operations.title')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.systemComponents.items.operations.desc')}
            </p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.contractEngineering.title')}
        description={t('pages.blockchainCrypto.sections.contractEngineering.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.contractEngineering.items.patterns.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.contractEngineering.items.patterns.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.contractEngineering.items.specsTests.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.contractEngineering.items.specsTests.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.contractEngineering.items.formalMethods.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.contractEngineering.items.formalMethods.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.contractEngineering.items.errorHandling.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.contractEngineering.items.errorHandling.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.contractEngineering.items.upgradeProcess.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.contractEngineering.items.upgradeProcess.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.contractEngineering.items.observability.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.contractEngineering.items.observability.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.zkPrivacy.title')}
        description={t('pages.blockchainCrypto.sections.zkPrivacy.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.blockchainCrypto.sections.zkPrivacy.phases.design.title')}
            duration={t('pages.blockchainCrypto.sections.zkPrivacy.phases.design.duration')}
            items={Array.isArray(designItems) ? designItems : []}
          />
          <TimelinePhase
            title={t('pages.blockchainCrypto.sections.zkPrivacy.phases.implementation.title')}
            duration={t('pages.blockchainCrypto.sections.zkPrivacy.phases.implementation.duration')}
            items={Array.isArray(implementationItems) ? implementationItems : []}
          />
          <TimelinePhase
            title={t('pages.blockchainCrypto.sections.zkPrivacy.phases.auditOps.title')}
            duration={t('pages.blockchainCrypto.sections.zkPrivacy.phases.auditOps.duration')}
            items={Array.isArray(auditOpsItems) ? auditOpsItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.custodyKeyManagement.title')}
        description={t('pages.blockchainCrypto.sections.custodyKeyManagement.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.mpcHsm.title')}
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.mpcHsm.desc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-start gap-3 mb-3">
              <Key className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.keyCeremonies.title')}
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.keyCeremonies.desc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.policies.title')}
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.policies.desc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.integrations.title')}
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.integrations.desc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.disasterReadiness.title')}
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.disasterReadiness.desc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.offChainOps.title')}
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.custodyKeyManagement.items.offChainOps.desc')}
            </p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.complianceOperations.title')}
        description={t('pages.blockchainCrypto.sections.complianceOperations.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.blockchainCrypto.sections.complianceOperations.phases.compliance.title')}
            duration={t('pages.blockchainCrypto.sections.complianceOperations.phases.compliance.duration')}
            items={Array.isArray(complianceItems) ? complianceItems : []}
          />
          <TimelinePhase
            title={t('pages.blockchainCrypto.sections.complianceOperations.phases.monitoring.title')}
            duration={t('pages.blockchainCrypto.sections.complianceOperations.phases.monitoring.duration')}
            items={Array.isArray(monitoringItems) ? monitoringItems : []}
          />
          <TimelinePhase
            title={t('pages.blockchainCrypto.sections.complianceOperations.phases.governance.title')}
            duration={t('pages.blockchainCrypto.sections.complianceOperations.phases.governance.duration')}
            items={Array.isArray(governanceItems) ? governanceItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.securityAudits.title')}
        description={t('pages.blockchainCrypto.sections.securityAudits.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
            <Target className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.blockchainCrypto.sections.securityAudits.items.threatModel.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.securityAudits.items.threatModel.desc')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all">
            <Code2 className="w-8 h-8 mb-4 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.blockchainCrypto.sections.securityAudits.items.staticFormal.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.securityAudits.items.staticFormal.desc')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all">
            <Activity className="w-8 h-8 mb-4 text-green-600 dark:text-green-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.blockchainCrypto.sections.securityAudits.items.runtimeMonitoring.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.securityAudits.items.runtimeMonitoring.desc')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 transition-all">
            <PackageCheck className="w-8 h-8 mb-4 text-amber-600 dark:text-amber-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t('pages.blockchainCrypto.sections.securityAudits.items.auditPack.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages.blockchainCrypto.sections.securityAudits.items.auditPack.desc')}
            </p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.blockchainCrypto.sections.kpis.title')}
        description={t('pages.blockchainCrypto.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.kpis.items.security.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.kpis.items.security.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.kpis.items.reliability.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.kpis.items.reliability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.kpis.items.performance.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.kpis.items.performance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.kpis.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.kpis.items.compliance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.kpis.items.operations.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.kpis.items.operations.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.blockchainCrypto.sections.kpis.items.business.title')}</h4>
            </div>
            <p>{t('pages.blockchainCrypto.sections.kpis.items.business.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.blockchainCrypto.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 
