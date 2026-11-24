export type TrackFilter = 'all' | 'commercial' | 'tech';
export type ItemTrack = 'commercial' | 'tech' | 'both';

export interface KpiMetric {
  id: string;
  value: string;
  accentPrefix?: string;
  label: string;
  context: string;
  source: string;
  track: ItemTrack;
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  track: ItemTrack;
  trackLabel: string;
  primaryMetric: string;
  challenge: string;
  system: string;
  outcome: string;
  operatingCadence: string[];
  governanceAndTools: string[];
  verifiedMetrics: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  category: 'career' | 'academic';
  role: string;
  organization: string;
  regionOrAccount?: string;
  period: string;
  track: ItemTrack;
  trackLabel: string;
  summary: string;
  impactHighlight: string;
}

export interface StackGroup {
  id: string;
  index: string;
  title: string;
  focus: string;
  track: ItemTrack;
  capabilities: { name: string; role: string }[];
}

export interface PipelineStep {
  id: string;
  stepNumber: string;
  shortTitle: string;
  fullTitle: string;
  trackLabel: string;
  inputSignals: string;
  mechanics: string;
  governanceRule: string;
  revenueImpact: string;
  tools: string[];
}

export interface PitchVariant {
  id: 'commercial' | 'tech';
  label: string;
  text: string;
}

/**
 * CUSTOMIZATION GUIDE FOR GITHUB PAGES:
 * Update the `CONTACT_INFO` object below before running `npm run build`
 * and pushing to GitHub.
 */
export const CONTACT_INFO = {
  fullName: 'Alvin Dzingai Ngwerume',
  shortName: 'Alvin Ngwerume',
  location: 'Cape Town, South Africa',
  email: 'ngwalv001@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/alvinngwerume',
  linkedinHandle: 'linkedin.com/in/alvinngwerume',
  githubUrl: 'https://github.com/AlvinNgwerume',
  githubHandle: 'github.com/AlvinNgwerume',
};

export const FILTER_OPTIONS: { id: TrackFilter; label: string; shortLabel: string }[] = [
  { id: 'all', label: 'All Work', shortLabel: 'All' },
  { id: 'commercial', label: 'Account Management & BDM / SDR', shortLabel: 'Commercial' },
  { id: 'tech', label: 'GTM Tech & Automation', shortLabel: 'GTM & AI' },
];

export const KPI_METRICS: KpiMetric[] = [
  {
    id: 'kpi-expansion',
    value: '+30%',
    label: 'YoY Revenue Expansion',
    context: 'Corporate & institutional account growth with 20% churn reduction',
    source: 'MasterStart',
    track: 'commercial',
  },
  {
    id: 'kpi-retention',
    value: '95%+',
    label: 'Client Retention',
    context: 'Onboarding governance, strict SLAs & +30% proposal win rate',
    source: 'TASK Research Academy',
    track: 'commercial',
  },
  {
    id: 'kpi-discovery',
    value: '+20%',
    label: 'Discovery Engagements',
    context: 'Enterprise SaaS stakeholder discovery & Salesforce pipeline hygiene',
    source: 'BlinkOps',
    track: 'both',
  },
  {
    id: 'kpi-pipeline',
    value: '$800k+',
    label: 'Outbound Pipeline',
    context: '35% above pipeline targets via multi-channel & AI-assisted workflows',
    source: 'askOsca',
    track: 'both',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-retention-expansion',
    index: '01',
    title: 'Account Retention & Expansion Playbook',
    subtitle: 'Proactive Stakeholder Governance & Renewal Architecture',
    track: 'commercial',
    trackLabel: 'Commercial Growth',
    primaryMetric: '95%+ Retention · +30% YoY Expansion',
    challenge:
      'Reactive renewal management leads to silent churn and missed cross-sell opportunities.',
    system:
      'Structured stakeholder mapping, proactive adoption check-ins, commercial proposal alignment, and cross-functional CS/Delivery handoffs.',
    outcome:
      '95%+ client retention and +30% proposal win rate at TASK Research Academy; 30% YoY revenue expansion and 20% churn reduction at MasterStart.',
    operatingCadence: [
      'Quarterly business reviews anchored to client adoption telemetry and executive outcomes rather than status updates.',
      '90-day pre-renewal risk scoring across economic buyers, daily champions, and delivery leads.',
      'Standardized commercial proposal templates aligning scope expansion directly to documented ROI milestones.',
    ],
    governanceAndTools: [
      'HubSpot & Salesforce Account Health Logs',
      'SLA Compliance & Onboarding Checklists',
      'Executive Stakeholder Matrix',
      'Cross-Functional CS-to-Delivery Handoff Protocol',
    ],
    verifiedMetrics: [
      { label: 'Client Retention Rate', value: '95%+' },
      { label: 'YoY Account Expansion', value: '+30%' },
      { label: 'Proposal Win Rate Lift', value: '+30%' },
      { label: 'Churn Reduction', value: '-20%' },
    ],
  },
  {
    id: 'cs-outbound-engine',
    index: '02',
    title: 'Multi-Channel Outbound & Funnel Qualification Engine',
    subtitle: 'High-Velocity Outbound Governed by MEDDICC & BANT Rigor',
    track: 'both',
    trackLabel: 'Dual-Track · Commercial + GTM',
    primaryMetric: '$800k+ Pipeline · +35% Above Target',
    challenge:
      'High-volume outreach without strict qualification wastes AE time on low-intent accounts.',
    system:
      'Multi-channel cadences (cold calling, tailored email sequences, LinkedIn Sales Navigator) governed by MEDDICC/BANT qualification checkpoints and clean MQL -> SQL -> Opportunity handoff rules.',
    outcome:
      'Exceeded pipeline targets by 35% ($800k+ sourced pipeline, 18–22 qualified meetings/month) at askOsca; +20% technical discovery lift at BlinkOps.',
    operatingCadence: [
      'Account-tier segmentation combining intent triggers, hiring velocity, and technology stack signals.',
      'Multi-touch outbound sequencing across phone, tailored email briefs, and LinkedIn Sales Navigator within 14-day sprints.',
      'Mandatory MEDDICC/BANT discovery verification prior to AE handoff to protect downstream close rates.',
    ],
    governanceAndTools: [
      'MEDDICC & BANT Qualification Gates',
      'LinkedIn Sales Navigator',
      'Salesforce Opportunity Hygiene',
      'MQL -> SQL -> Opportunity Routing SLA',
    ],
    verifiedMetrics: [
      { label: 'Sourced Outbound Pipeline', value: '$800k+' },
      { label: 'Target Attainment Variance', value: '+35%' },
      { label: 'Qualified Meetings / Month', value: '18–22' },
      { label: 'Technical Discovery Lift', value: '+20%' },
    ],
  },
  {
    id: 'cs-ai-gtm-automation',
    index: '03',
    title: 'AI-Augmented Research & GTM Workflow Automation',
    subtitle: 'Zero-Delay Lead Routing & Automated Account Intelligence',
    track: 'tech',
    trackLabel: 'GTM Tech & Automation',
    primaryMetric: '-40% Lead Leakage · Zero-Delay Routing',
    challenge:
      'Manual account research, slow lead routing, and fragmented CRM records slow down commercial execution.',
    system:
      'Automated web-form and webhook routing (Make.com) into HubSpot and Salesforce, paired with AI research workflows (Claude, ChatGPT, Google AI Studio) and modern web/analytics builds.',
    outcome:
      '40% reduction in lead leakage, zero-delay lead routing, and faster pre-call account intelligence.',
    operatingCadence: [
      'Webhook capture pipelines normalize inbound form payloads and enrich company metadata before CRM ingestion.',
      'Structured LLM prompt templates synthesize earnings signals, media coverage, and org charts into pre-call briefs.',
      'Automated SLA escalation alerts prevent unworked MQL aging across regional commercial territories.',
    ],
    governanceAndTools: [
      'Make.com & REST Webhooks',
      'Claude, ChatGPT & Google AI Studio',
      'HubSpot & Salesforce API Sync',
      'GA4 & Power BI Attribution',
    ],
    verifiedMetrics: [
      { label: 'Lead Leakage Reduction', value: '-40%' },
      { label: 'Routing Latency', value: 'Zero-Delay' },
      { label: 'CRM Record Completeness', value: '100% Schema' },
      { label: 'Pre-Call Brief Prep', value: 'AI-Assisted' },
    ],
  },
];

export const EXPERIENCE_ROWS: ExperienceItem[] = [
  {
    id: 'exp-askosca',
    category: 'career',
    role: 'Senior Business Development Representative',
    organization: 'askOsca',
    regionOrAccount: 'HPE & Freshworks Accounts',
    period: 'Mar 2026 – Present',
    track: 'both',
    trackLabel: 'Commercial + GTM Systems',
    summary:
      'Architecting multi-channel outbound execution and AI-assisted account intelligence across enterprise IT and SaaS portfolios.',
    impactHighlight: '$800k+ sourced pipeline · +35% above target · 18–22 SQLs/mo',
  },
  {
    id: 'exp-nucleus',
    category: 'career',
    role: 'Partnerships Associate',
    organization: 'Nucleus Courses',
    regionOrAccount: 'North America',
    period: 'Jul 2025 – Dec 2025',
    track: 'commercial',
    trackLabel: 'Commercial Growth',
    summary:
      'Initiated commercial partnership structuring, institutional buyer outreach, and funnel conversion optimization for North American EdTech distribution.',
    impactHighlight: 'Partner channel expansion · North American GTM alignment',
  },
  {
    id: 'exp-blinkops',
    category: 'career',
    role: 'Solutions Consultant',
    organization: 'BlinkOps',
    regionOrAccount: 'Security Automation SaaS · US & Europe',
    period: 'Oct 2024 – Apr 2025',
    track: 'both',
    trackLabel: 'Commercial + Technical Discovery',
    summary:
      'Partnered with enterprise security buyers across US & EMEA on workflow automation scoping, technical discovery, and Salesforce pipeline discipline.',
    impactHighlight: '+20% discovery engagements · Salesforce hygiene governance',
  },
  {
    id: 'exp-task',
    category: 'career',
    role: 'Business & Customer Success Manager',
    organization: 'TASK Research Academy',
    regionOrAccount: 'B2B-2C',
    period: 'Jun 2023 – Jul 2024',
    track: 'both',
    trackLabel: 'Account Management & business systems',
    summary:
      'Owned full sale lifecycle: executive onboarding governance, SLA delivery tracking, commercial renewals, and expansion proposals. Led full digital transformation and Hubspot CRM implementation - Automated workflows for real-time lead qualification processes.',
    impactHighlight: '95%+ client retention · +30% proposal win rate',
  },
  {
    id: 'exp-masterstart',
    category: 'career',
    role: 'Corporate Account & Enrolment Manager',
    organization: 'MasterStart',
    regionOrAccount: 'Corporate & Institutional Portfolio',
    period: 'Jun 2020 – Feb 2023',
    track: 'commercial',
    trackLabel: 'Account Expansion',
    summary:
      'Scaled corporate training accounts through structured stakeholder mapping, quarterly retention reviews, and multi-cohort upsell programs.',
    impactHighlight: '+30% YoY revenue expansion · 20% churn reduction',
  },
  {
    id: 'edu-bsc-ai',
    category: 'academic',
    role: 'B.Sc. Artificial Intelligence in Business (In Progress)',
    organization: 'IU International University of Applied Sciences',
    regionOrAccount: 'Applied AI & Business Architecture',
    period: 'In Progress',
    track: 'tech',
    trackLabel: 'AI & Data Systems',
    summary:
      'Formal academic foundation in applied machine learning, data modeling, business intelligence, and enterprise AI governance.',
    impactHighlight: 'Applied AI architecture · Quantitative business systems',
  },
  {
    id: 'edu-cambridge-spark',
    category: 'academic',
    role: 'Programming with Python & Pandas',
    organization: 'Cambridge Spark',
    regionOrAccount: 'Data Science & Analytics Certificate',
    period: '2022',
    track: 'tech',
    trackLabel: 'Python & Data Engineering',
    summary:
      'Applied Python programming and Pandas data manipulation certificate covering vectorized dataframes, ingestion pipelines, dataset cleaning, exploratory analysis, and automated reporting workflows.',
    impactHighlight: 'Python & Pandas · Data wrangling & analytical automation',
  },
  {
    id: 'edu-gibs',
    category: 'academic',
    role: 'Digital Transformation',
    organization: 'GIBS Business School (Gordon Institute of Business Science)',
    regionOrAccount: 'Executive Education Certificate',
    period: '2020',
    track: 'both',
    trackLabel: 'Digital & Commercial Strategy',
    summary:
      'Executive program examining digital operating models, enterprise technology adoption, customer-journey digitization, data-informed decision frameworks, and organizational change governance.',
    impactHighlight: 'Operating model modernization · Digital GTM alignment',
  },
  {
    id: 'edu-stellenbosch',
    category: 'academic',
    role: 'Business and Systems Analysis',
    organization: 'Stellenbosch Business School',
    regionOrAccount: 'Professional Development Certificate',
    period: '2019',
    track: 'both',
    trackLabel: 'Business & Systems Architecture',
    summary:
      'Structured training in business process modeling, requirements engineering, enterprise systems architecture, stakeholder elicitation, and translating commercial workflows into technical specifications.',
    impactHighlight: 'Requirements engineering · Process & systems architecture',
  },
  {
    id: 'edu-uct',
    category: 'academic',
    role: 'B.Soc.Sci, Development Studies',
    organization: 'University of Cape Town',
    regionOrAccount: 'Undergraduate Degree',
    period: '2017',
    track: 'both',
    trackLabel: 'Research & Socio-Economic Analysis',
    summary:
      'Undergraduate degree grounded in qualitative and quantitative socio-economic research, institutional policy analysis, demographic indicators, and structured macro-market reasoning.',
    impactHighlight: 'Quantitative & qualitative research · Macro-market foundation',
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    id: 'stack-crm',
    index: '01',
    title: 'CRM & Pipeline Governance',
    focus: 'Revenue hygiene, forecast accuracy, and strict qualification checkpoints.',
    track: 'commercial',
    capabilities: [
      { name: 'Salesforce', role: 'Pipeline architecture & opportunity hygiene' },
      { name: 'HubSpot', role: 'Lifecycle automation & lead attribution' },
      { name: 'MEDDICC / BANT', role: 'Qualification & deal risk inspection' },
      { name: 'Forecasting', role: 'Weighted stage conversion & SLA tracking' },
    ],
  },
  {
    id: 'stack-ai',
    index: '02',
    title: 'AI & Automation',
    focus: 'Eliminating response latency and manual research bottlenecks across GTM.',
    track: 'tech',
    capabilities: [
      { name: 'Claude & ChatGPT', role: 'Account intelligence & outreach synthesis' },
      { name: 'Google AI Studio', role: 'Rapid workflow & prompt prototyping' },
      { name: 'Make.com', role: 'Automated multi-app routing scenarios' },
      { name: 'Webhooks & REST APIs', role: 'Zero-delay payload ingestion & CRM sync' },
    ],
  },
  {
    id: 'stack-outbound',
    index: '03',
    title: 'Outbound & Market Intelligence',
    focus: 'Converting external market signals into qualified commercial conversations.',
    track: 'both',
    capabilities: [
      { name: 'LinkedIn Sales Navigator', role: 'Decision-maker & buying committee mapping' },
      { name: 'Multi-Channel Sequences', role: 'Coordinated phone, email & social sprints' },
      { name: 'Account Research', role: 'Media, PR & executive trigger analysis' },
      { name: 'Territory Prioritization', role: 'High-intent ICP tiering & scoring' },
    ],
  },
  {
    id: 'stack-web',
    index: '04',
    title: 'Web & Analytics',
    focus: 'Measurement discipline and lightweight production web assets.',
    track: 'tech',
    capabilities: [
      { name: 'HTML5 / CSS3 / JavaScript', role: 'Self-contained landing & GTM tooling' },
      { name: 'GA4', role: 'Conversion instrumentation & funnel telemetry' },
      { name: 'Power BI', role: 'Executive pipeline & retention reporting' },
      { name: 'GitHub Pages & Vercel', role: 'Automated static CI/CD deployment' },
    ],
  },
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 'step-01',
    stepNumber: '01',
    shortTitle: 'Signal & Lead Capture',
    fullTitle: '01 · Signal & Lead Capture',
    trackLabel: 'Ingestion Layer',
    inputSignals: 'Inbound web forms, LinkedIn Sales Navigator triggers, PR/media alerts, and outbound intent signals.',
    mechanics:
      'Every inbound submission and target account signal is captured via structured webhooks with standardized UTM, territory, and ICP metadata.',
    governanceRule: 'Zero unlogged leads: every capture event generates an immutable timestamp and source tag within < 5 seconds.',
    revenueImpact: 'Eliminates dark-funnel blind spots and surfaces timely commercial entry points for media & SaaS buyers.',
    tools: ['Webhooks', 'LinkedIn Sales Navigator', 'GA4 Events'],
  },
  {
    id: 'step-02',
    stepNumber: '02',
    shortTitle: 'AI Research & Qualification',
    fullTitle: '02 · AI Research & Qualification',
    trackLabel: 'Intelligence Layer',
    inputSignals: 'Company domain, recent news/media footprint, stakeholder role, and stated discovery context.',
    mechanics:
      'AI research workflows (Claude, ChatGPT, Google AI Studio) synthesize account priorities, executive initiatives, and competitive gaps against MEDDICC/BANT criteria.',
    governanceRule: 'No generic spray-and-pray: outreach and discovery calls require verified business pain and stakeholder relevance.',
    revenueImpact: 'Cuts pre-call research time while lifting discovery engagement rates (+20% at BlinkOps).',
    tools: ['Claude', 'ChatGPT', 'Google AI Studio', 'MEDDICC / BANT'],
  },
  {
    id: 'step-03',
    stepNumber: '03',
    shortTitle: 'CRM Routing & Hygiene',
    fullTitle: '03 · CRM Routing & Hygiene',
    trackLabel: 'System Layer',
    inputSignals: 'Enriched prospect payload, qualification score, and territory ownership matrix.',
    mechanics:
      'Make.com scenarios route qualified records directly into HubSpot or Salesforce, deduplicate contacts, assign SLAs, and trigger instant rep alerts.',
    governanceRule: 'Strict MQL -> SQL -> Opportunity stage definitions with automated aging alerts to prevent stalled pipeline.',
    revenueImpact: '40% reduction in lead leakage and zero-delay routing between marketing capture and commercial follow-up.',
    tools: ['Make.com', 'Salesforce', 'HubSpot', 'REST APIs'],
  },
  {
    id: 'step-04',
    stepNumber: '04',
    shortTitle: 'Commercial Execution & Expansion',
    fullTitle: '04 · Commercial Execution & Expansion',
    trackLabel: 'Revenue Layer',
    inputSignals: 'Qualified SQL opportunities, live product usage signals, and quarterly renewal milestones.',
    mechanics:
      'High-velocity multi-channel outbound converts net-new pipeline, while structured onboarding SLAs and QBRs drive net revenue retention and expansion.',
    governanceRule: 'Every closed-won account enters a documented 90-day onboarding and stakeholder-mapping cadence.',
    revenueImpact: '$800k+ sourced pipeline (+35% above target), 95%+ client retention, and +30% YoY account expansion.',
    tools: ['Multi-Channel Cadences', 'Power BI', 'Executive QBRs'],
  },
];

export const PITCH_VARIANTS: PitchVariant[] = [
  {
    id: 'commercial',
    label: 'Copy Commercial / AM Pitch',
    text: `Alvin Dzingai Ngwerume is a Cape Town-based B2B Account Manager and Business Development specialist with a proven record across SaaS, security automation, and corporate education. He delivered +30% YoY revenue expansion and 20% churn reduction at MasterStart, 95%+ client retention and +30% proposal win rate at TASK Research Academy, +20% discovery engagement lift at BlinkOps, and $800k+ sourced pipeline (35% above target) at askOsca. Built for data-driven B2B SaaS and media intelligence teams, Alvin pairs disciplined MEDDICC/BANT pipeline execution with structured stakeholder retention governance.`,
  },
  {
    id: 'tech',
    label: 'Copy GTM & Tech Pitch',
    text: `Alvin Dzingai Ngwerume bridges commercial revenue execution with hands-on GTM engineering and AI workflow automation. Currently completing a B.Sc. in Artificial Intelligence in Business, he designs zero-delay webhook and Make.com routing pipelines into Salesforce and HubSpot (cutting lead leakage by 40%), builds AI-assisted account intelligence workflows using Claude, ChatGPT, and Google AI Studio, and instruments conversion tracking across web properties with GA4 and Power BI.`,
  },
];
