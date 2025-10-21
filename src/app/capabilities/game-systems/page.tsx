"use client"

import { PageLayout, Section, TimelinePhase } from '@/components/ui/page-layout'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { 
  Gamepad2, 
  MonitorPlay, 
  Users, 
  Repeat, 
  Award, 
  Gauge, 
  DollarSign, 
  Languages, 
  Network,
  Activity,
  Database,
  Shield,
  Target,
  Radio,
  Bitcoin,
  Wallet,
  ShoppingCart,
  Layers,
  Lock,
  FileCheck,
  Clock,
  Zap,
  Server,
  Code2,
  Settings,
  Eye,
  Wrench,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  TrendingUp
} from 'lucide-react'

export default function GameSystemsPage() {
  const { t, tObject } = useI18n()
  
  const crossPlayItems = tObject('pages.gameSystems.sections.crossPlatformSystems.phases.crossPlay.items')
  const crossProgressionItems = tObject('pages.gameSystems.sections.crossPlatformSystems.phases.crossProgression.items')
  const certificationItems = tObject('pages.gameSystems.sections.crossPlatformSystems.phases.certification.items')
  const matchmakingItems = tObject('pages.gameSystems.sections.opsLiveOperations.phases.matchmaking.items')
  const economyProgressionItems = tObject('pages.gameSystems.sections.opsLiveOperations.phases.economyProgression.items')
  const incidentsSupportItems = tObject('pages.gameSystems.sections.opsLiveOperations.phases.incidentsSupport.items')
  
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
        title={t('pages.gameSystems.sections.overview.title')}
        description={t('pages.gameSystems.sections.overview.subtitle')}
      >
        <div className="content-prose">
          <p>{t('pages.gameSystems.sections.overview.content')}</p>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.gameDevelopment.title')}
        description={t('pages.gameSystems.sections.gameDevelopment.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gamepad2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.engines.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.engines.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <MonitorPlay className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.platformSDKs.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.platformSDKs.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.crossPlay.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.crossPlay.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Repeat className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.crossProgression.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.crossProgression.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.certification.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.certification.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.performance.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.performance.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.monetization.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.monetization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.gameDevelopment.items.localizationAccessibility.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.gameDevelopment.items.localizationAccessibility.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.backendServices.title')}
        description={t('pages.gameSystems.sections.backendServices.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.backendServices.items.matchmaking.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.backendServices.items.matchmaking.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.backendServices.items.netcode.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.backendServices.items.netcode.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.backendServices.items.state.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.backendServices.items.state.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.backendServices.items.antiCheat.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.backendServices.items.antiCheat.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.backendServices.items.personalization.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.backendServices.items.personalization.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Radio className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.backendServices.items.liveOps.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.backendServices.items.liveOps.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.blockchainGaming.title')}
        description={t('pages.gameSystems.sections.blockchainGaming.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.blockchainGaming.items.design.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.blockchainGaming.items.design.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wallet className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.blockchainGaming.items.walletsCustody.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.blockchainGaming.items.walletsCustody.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <ShoppingCart className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.blockchainGaming.items.marketplaces.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.blockchainGaming.items.marketplaces.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.blockchainGaming.items.scale.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.blockchainGaming.items.scale.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.blockchainGaming.items.zkPrivacy.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.blockchainGaming.items.zkPrivacy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.blockchainGaming.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.blockchainGaming.items.compliance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.crossPlatformSystems.title')}
        description={t('pages.gameSystems.sections.crossPlatformSystems.subtitle')}
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.gameSystems.sections.crossPlatformSystems.phases.crossPlay.title')}
            duration={t('pages.gameSystems.sections.crossPlatformSystems.phases.crossPlay.duration')}
            items={Array.isArray(crossPlayItems) ? crossPlayItems : []}
          />
          <TimelinePhase
            title={t('pages.gameSystems.sections.crossPlatformSystems.phases.crossProgression.title')}
            duration={t('pages.gameSystems.sections.crossPlatformSystems.phases.crossProgression.duration')}
            items={Array.isArray(crossProgressionItems) ? crossProgressionItems : []}
          />
          <TimelinePhase
            title={t('pages.gameSystems.sections.crossPlatformSystems.phases.certification.title')}
            duration={t('pages.gameSystems.sections.crossPlatformSystems.phases.certification.duration')}
            items={Array.isArray(certificationItems) ? certificationItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.netcodeConsistency.title')}
        description={t('pages.gameSystems.sections.netcodeConsistency.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.netcodeConsistency.items.authoritativeTick.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.netcodeConsistency.items.authoritativeTick.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Repeat className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.netcodeConsistency.items.rollback.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.netcodeConsistency.items.rollback.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.netcodeConsistency.items.lagCompensation.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.netcodeConsistency.items.lagCompensation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.netcodeConsistency.items.replication.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.netcodeConsistency.items.replication.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.netcodeConsistency.items.scaling.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.netcodeConsistency.items.scaling.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.netcodeConsistency.items.protocols.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.netcodeConsistency.items.protocols.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.authoringTooling.title')}
        description={t('pages.gameSystems.sections.authoringTooling.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.authoringTooling.items.contentPipelines.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.authoringTooling.items.contentPipelines.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.authoringTooling.items.schemaConfig.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.authoringTooling.items.schemaConfig.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.authoringTooling.items.experimentation.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.authoringTooling.items.experimentation.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.authoringTooling.items.observability.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.authoringTooling.items.observability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.authoringTooling.items.diagnostics.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.authoringTooling.items.diagnostics.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.authoringTooling.items.security.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.authoringTooling.items.security.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.opsLiveOperations.title')}
        description={t('pages.gameSystems.sections.opsLiveOperations.subtitle')}
        variant="alt"
      >
        <div className="timeline-grid trio">
          <TimelinePhase
            title={t('pages.gameSystems.sections.opsLiveOperations.phases.matchmaking.title')}
            duration={t('pages.gameSystems.sections.opsLiveOperations.phases.matchmaking.duration')}
            items={Array.isArray(matchmakingItems) ? matchmakingItems : []}
          />
          <TimelinePhase
            title={t('pages.gameSystems.sections.opsLiveOperations.phases.economyProgression.title')}
            duration={t('pages.gameSystems.sections.opsLiveOperations.phases.economyProgression.duration')}
            items={Array.isArray(economyProgressionItems) ? economyProgressionItems : []}
          />
          <TimelinePhase
            title={t('pages.gameSystems.sections.opsLiveOperations.phases.incidentsSupport.title')}
            duration={t('pages.gameSystems.sections.opsLiveOperations.phases.incidentsSupport.duration')}
            items={Array.isArray(incidentsSupportItems) ? incidentsSupportItems : []}
          />
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.antiCheatTrust.title')}
        description={t('pages.gameSystems.sections.antiCheatTrust.subtitle')}
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.antiCheatTrust.items.signals.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.antiCheatTrust.items.signals.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.antiCheatTrust.items.enforcement.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.antiCheatTrust.items.enforcement.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.antiCheatTrust.items.integrity.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.antiCheatTrust.items.integrity.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.antiCheatTrust.items.fraud.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.antiCheatTrust.items.fraud.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.antiCheatTrust.items.privacy.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.antiCheatTrust.items.privacy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.antiCheatTrust.items.compliance.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.antiCheatTrust.items.compliance.desc')}</p>
          </div>
        </div>
      </Section>

      <Section
        title={t('pages.gameSystems.sections.kpis.title')}
        description={t('pages.gameSystems.sections.kpis.subtitle')}
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.kpis.items.latency.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.kpis.items.latency.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.kpis.items.fairness.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.kpis.items.fairness.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.kpis.items.stability.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.kpis.items.stability.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.kpis.items.engagement.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.kpis.items.engagement.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.kpis.items.economy.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.kpis.items.economy.desc')}</p>
          </div>
          <div className="platform-item">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <h4>{t('pages.gameSystems.sections.kpis.items.support.title')}</h4>
            </div>
            <p>{t('pages.gameSystems.sections.kpis.items.support.desc')}</p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="cta-container">
          <Link href="/contact" className="btn-primary large">
            {t('pages.gameSystems.sections.cta')} →
          </Link>
        </div>
      </Section>
    </PageLayout>
  )
} 