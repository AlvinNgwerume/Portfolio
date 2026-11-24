'use strict';

/**
 * Alvin Dzingai Ngwerume — Commercial Growth & GTM Systems Portfolio
 * Dependency-free ES6 vanilla application bundle ready for static GitHub Pages.
 */

const KPI_METRICS = [
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

const CASE_STUDIES = [
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

const EXPERIENCE_ROWS = [
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

const STACK_GROUPS = [
  {
    id: 'stack-crm',
    index: '01',
    title: 'CRM & Pipeline Governance',
    focus: 'Revenue hygiene, forecast accuracy, and strict qualification checkpoints.',
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
    capabilities: [
      { name: 'HTML5 / CSS3 / JavaScript', role: 'Self-contained landing & GTM tooling' },
      { name: 'GA4', role: 'Conversion instrumentation & funnel telemetry' },
      { name: 'Power BI', role: 'Executive pipeline & retention reporting' },
      { name: 'GitHub Pages & Vercel', role: 'Automated static CI/CD deployment' },
    ],
  },
];

const PIPELINE_STEPS = [
  {
    id: 'step-01',
    stepNumber: '01',
    shortTitle: 'Signal & Lead Capture',
    fullTitle: '01 · Signal & Lead Capture',
    trackLabel: 'Ingestion Layer',
    inputSignals:
      'Inbound web forms, LinkedIn Sales Navigator triggers, PR/media alerts, and outbound intent signals.',
    mechanics:
      'Every inbound submission and target account signal is captured via structured webhooks with standardized UTM, territory, and ICP metadata.',
    governanceRule:
      'Zero unlogged leads: every capture event generates an immutable timestamp and source tag within < 5 seconds.',
    revenueImpact:
      'Eliminates dark-funnel blind spots and surfaces timely commercial entry points for media & SaaS buyers.',
    tools: ['Webhooks', 'LinkedIn Sales Navigator', 'GA4 Events'],
  },
  {
    id: 'step-02',
    stepNumber: '02',
    shortTitle: 'AI Research & Qualification',
    fullTitle: '02 · AI Research & Qualification',
    trackLabel: 'Intelligence Layer',
    inputSignals:
      'Company domain, recent news/media footprint, stakeholder role, and stated discovery context.',
    mechanics:
      'AI research workflows (Claude, ChatGPT, Google AI Studio) synthesize account priorities, executive initiatives, and competitive gaps against MEDDICC/BANT criteria.',
    governanceRule:
      'No generic spray-and-pray: outreach and discovery calls require verified business pain and stakeholder relevance.',
    revenueImpact:
      'Cuts pre-call research time while lifting discovery engagement rates (+20% at BlinkOps).',
    tools: ['Claude', 'ChatGPT', 'Google AI Studio', 'MEDDICC / BANT'],
  },
  {
    id: 'step-03',
    stepNumber: '03',
    shortTitle: 'CRM Routing & Hygiene',
    fullTitle: '03 · CRM Routing & Hygiene',
    trackLabel: 'System Layer',
    inputSignals:
      'Enriched prospect payload, qualification score, and territory ownership matrix.',
    mechanics:
      'Make.com scenarios route qualified records directly into HubSpot or Salesforce, deduplicate contacts, assign SLAs, and trigger instant rep alerts.',
    governanceRule:
      'Strict MQL -> SQL -> Opportunity stage definitions with automated aging alerts to prevent stalled pipeline.',
    revenueImpact:
      '40% reduction in lead leakage and zero-delay routing between marketing capture and commercial follow-up.',
    tools: ['Make.com', 'Salesforce', 'HubSpot', 'REST APIs'],
  },
  {
    id: 'step-04',
    stepNumber: '04',
    shortTitle: 'Commercial Execution & Expansion',
    fullTitle: '04 · Commercial Execution & Expansion',
    trackLabel: 'Revenue Layer',
    inputSignals:
      'Qualified SQL opportunities, live product usage signals, and quarterly renewal milestones.',
    mechanics:
      'High-velocity multi-channel outbound converts net-new pipeline, while structured onboarding SLAs and QBRs drive net revenue retention and expansion.',
    governanceRule:
      'Every closed-won account enters a documented 90-day onboarding and stakeholder-mapping cadence.',
    revenueImpact:
      '$800k+ sourced pipeline (+35% above target), 95%+ client retention, and +30% YoY account expansion.',
    tools: ['Multi-Channel Cadences', 'Power BI', 'Executive QBRs'],
  },
];

const PITCH_VARIANTS = [
  {
    id: 'commercial',
    label: 'Copy Commercial / AM Pitch',
    text:
      'Alvin Dzingai Ngwerume is a Cape Town-based B2B Account Manager and Business Development specialist with a proven record across SaaS, security automation, and corporate education. He delivered +30% YoY revenue expansion and 20% churn reduction at MasterStart, 95%+ client retention and +30% proposal win rate at TASK Research Academy, +20% discovery engagement lift at BlinkOps, and $800k+ sourced pipeline (35% above target) at askOsca. Built for data-driven B2B SaaS and media intelligence teams, Alvin pairs disciplined MEDDICC/BANT pipeline execution with structured stakeholder retention governance.',
  },
  {
    id: 'tech',
    label: 'Copy GTM & Tech Pitch',
    text:
      'Alvin Dzingai Ngwerume bridges commercial revenue execution with hands-on GTM engineering and AI workflow automation. Currently completing a B.Sc. in Artificial Intelligence in Business, he designs zero-delay webhook and Make.com routing pipelines into Salesforce and HubSpot (cutting lead leakage by 40%), builds AI-assisted account intelligence workflows using Claude, ChatGPT, and Google AI Studio, and instruments conversion tracking across web properties with GA4 and Power BI.',
  },
];

/** @type {{ activeFilter: 'all' | 'commercial' | 'tech', selectedCaseStudyId: string | null, activePipelineStepId: string, expandedStackIds: string[], copiedId: 'commercial' | 'tech' | null }} */
const state = {
  activeFilter: 'all',
  selectedCaseStudyId: null,
  activePipelineStepId: PIPELINE_STEPS[0].id,
  expandedStackIds: [STACK_GROUPS[0].id],
  copiedId: null,
};

/** @type {number | null} */
let copyTimerId = null;
/** @type {HTMLElement | null} */
let lastModalTrigger = null;
let rafPending = false;

/**
 * Escapes HTML special characters for safe DOM interpolation.
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Checks if an item track matches the active portfolio filter.
 * @param {'commercial' | 'tech' | 'both'} itemTrack
 * @param {'all' | 'commercial' | 'tech'} activeFilter
 * @returns {boolean}
 */
function matchesTrack(itemTrack, activeFilter) {
  if (activeFilter === 'all') return true;
  if (itemTrack === 'both') return true;
  return itemTrack === activeFilter;
}

/**
 * Computes Skiper16 sticky card scroll progress start threshold and target scale.
 * @param {number} index
 * @param {number} total
 * @returns {{ range: [number, number], targetScale: number }}
 */
function computeStackCardMetrics(index, total) {
  const safeTotal = Math.max(total, 1);
  const clampedIndex = Math.max(0, Math.min(index, safeTotal - 1));
  const start = safeTotal <= 1 ? 0 : Math.min(0.85, clampedIndex / safeTotal);
  const targetScale =
    safeTotal <= 1
      ? 1
      : Math.max(0.86, Number((1 - (safeTotal - 1 - clampedIndex) * 0.035).toFixed(3)));
  return {
    range: [Number(start.toFixed(3)), 1],
    targetScale,
  };
}

/**
 * Returns the visual metadata label and accent class for KPI cards.
 * @param {'commercial' | 'tech' | 'both'} track
 * @returns {{ label: string, accentClass: string }}
 */
function getKpiTrackMeta(track) {
  if (track === 'commercial') {
    return { label: 'Commercial Growth', accentClass: 'track-accent-commercial' };
  }
  if (track === 'tech') {
    return { label: 'GTM & AI Systems', accentClass: 'track-accent-tech' };
  }
  return { label: 'Commercial + GTM', accentClass: 'track-accent-both' };
}

/**
 * Returns accent class for case studies and milestone track badges.
 * @param {'commercial' | 'tech' | 'both'} track
 * @returns {string}
 */
function getTrackAccentClass(track) {
  if (track === 'commercial') return 'track-accent-commercial';
  if (track === 'tech') return 'track-accent-tech';
  return 'track-accent-both';
}

/* --------------------------------------------------------------------------
   Render Functions
   -------------------------------------------------------------------------- */

function renderKpisAndCounts() {
  const visibleKpis = KPI_METRICS.filter((k) => matchesTrack(k.track, state.activeFilter));
  const visibleCaseStudies = CASE_STUDIES.filter((c) => matchesTrack(c.track, state.activeFilter));
  const visibleExperience = EXPERIENCE_ROWS.filter((e) => matchesTrack(e.track, state.activeFilter));

  const countsEl = document.getElementById('impact-counts');
  if (countsEl) {
    countsEl.textContent = `Showing ${visibleKpis.length} metrics · ${visibleCaseStudies.length} playbooks · ${visibleExperience.length} roles`;
  }

  const kpiGrid = document.getElementById('kpi-grid');
  if (!kpiGrid) return;

  kpiGrid.classList.toggle('cols-2', visibleKpis.length <= 2);
  kpiGrid.classList.toggle('cols-4', visibleKpis.length > 2);

  kpiGrid.innerHTML = visibleKpis
    .map((kpi, idx) => {
      const meta = getKpiTrackMeta(kpi.track);
      return `
        <article data-testid="kpi-card" class="kpi-card">
          <div>
            <div class="kpi-card-meta">
              <span class="tabular-nums">0${idx + 1}</span>
              <span class="${meta.accentClass}">${escapeHtml(meta.label)}</span>
            </div>
            <p class="kpi-value tabular-nums">${escapeHtml(kpi.value)}</p>
            <h3 class="kpi-label">${escapeHtml(kpi.label)}</h3>
            <p class="kpi-context">${escapeHtml(kpi.context)}</p>
          </div>
          <div class="kpi-source">${escapeHtml(kpi.source)}</div>
        </article>
      `;
    })
    .join('');
}

function renderCaseStudies() {
  const visibleCaseStudies = CASE_STUDIES.filter((c) => matchesTrack(c.track, state.activeFilter));
  const subtitleEl = document.getElementById('case-studies-subtitle');
  if (subtitleEl) {
    subtitleEl.textContent =
      state.activeFilter === 'all'
        ? 'All 3 playbooks active · Click any card for full breakdown'
        : `Filtered view (${visibleCaseStudies.length} matching playbooks)`;
  }

  const grid = document.getElementById('case-studies-grid');
  if (!grid) return;

  grid.classList.toggle('cols-2', visibleCaseStudies.length === 2);
  grid.classList.toggle('cols-3', visibleCaseStudies.length !== 2);

  grid.innerHTML = visibleCaseStudies
    .map((cs) => {
      const accentClass = getTrackAccentClass(cs.track);
      return `
        <article data-testid="case-study-card" class="case-card">
          <div>
            <div class="case-meta-row">
              <span class="case-index tabular-nums">Playbook ${escapeHtml(cs.index)}</span>
              <span class="${accentClass}">${escapeHtml(cs.trackLabel)}</span>
            </div>
            <h3 class="case-title">${escapeHtml(cs.title)}</h3>
            <p class="case-metric tabular-nums">${escapeHtml(cs.primaryMetric)}</p>
            <dl class="case-dl">
              <div>
                <dt class="case-dt">Challenge</dt>
                <dd class="case-dd">${escapeHtml(cs.challenge)}</dd>
              </div>
              <div>
                <dt class="case-dt">System</dt>
                <dd class="case-dd">${escapeHtml(cs.system)}</dd>
              </div>
              <div>
                <dt class="case-dt">Outcome</dt>
                <dd class="case-dd-outcome">${escapeHtml(cs.outcome)}</dd>
              </div>
            </dl>
          </div>
          <div class="case-card-footer">
            <button
              type="button"
              class="btn-inspect-playbook"
              data-open-playbook="${escapeHtml(cs.id)}"
            >
              <span>Inspect Playbook Architecture</span>
              <svg
                class="icon-svg-sm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

/**
 * Renders a Skiper16 sticky card stack into the provided container.
 * @param {HTMLElement | null} container
 * @param {typeof EXPERIENCE_ROWS} items
 * @param {'career' | 'academic'} variant
 * @param {string} stackLabel
 */
function renderMilestoneStack(container, items, variant, stackLabel) {
  if (!container) return;

  if (items.length === 0) {
    if (variant === 'academic') {
      container.innerHTML = `
        <div class="empty-filter-box">
          <p>
            Academic milestones belong to the <strong>GTM Tech &amp; Automation</strong> and dual-track views.
          </p>
          <button type="button" class="btn-reset-filter" data-reset-filter>
            Show All Work
          </button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="empty-filter-box">
          <p>No career roles match the current filter.</p>
          <button type="button" class="btn-reset-filter" data-reset-filter>
            Show All Work
          </button>
        </div>
      `;
    }
    return;
  }

  const cardsHtml = items
    .map((item, idx) => {
      const metrics = computeStackCardMetrics(idx, items.length);
      const isLast = idx === items.length - 1;
      const topOffset = 92 + idx * 16;
      const accentClass = getTrackAccentClass(item.track);
      const regionHtml = item.regionOrAccount
        ? `<span class="milestone-region"> · ${escapeHtml(item.regionOrAccount)}</span>`
        : '';

      return `
        <div
          class="skiper16-sticky-wrap ${isLast ? 'is-last' : ''}"
          style="top: ${topOffset}px; z-index: ${idx + 1};"
        >
          <div
            data-testid="experience-row"
            class="skiper16-card-inner"
            data-range-start="${metrics.range[0]}"
            data-range-end="${metrics.range[1]}"
            data-target-scale="${metrics.targetScale}"
          >
            <article class="milestone-card ${variant === 'academic' ? 'is-academic' : ''}">
              <div class="milestone-card-grid">
                <div class="milestone-meta-col">
                  <span class="milestone-period tabular-nums">
                    0${idx + 1} · ${escapeHtml(item.period)}
                  </span>
                  <span class="milestone-track-badge ${accentClass}">
                    ${escapeHtml(item.trackLabel)}
                  </span>
                </div>

                <div class="milestone-role-col">
                  <h4 class="milestone-role">${escapeHtml(item.role)}</h4>
                  <p class="milestone-org">
                    ${escapeHtml(item.organization)}${regionHtml}
                  </p>
                </div>

                <div class="milestone-summary-col">
                  <p class="milestone-summary">${escapeHtml(item.summary)}</p>
                  <p class="milestone-impact tabular-nums">${escapeHtml(item.impactHighlight)}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="skiper16-stack" aria-label="${escapeHtml(stackLabel)}">
      ${cardsHtml}
    </div>
  `;
}

function renderExperienceStacks() {
  const visible = EXPERIENCE_ROWS.filter((e) => matchesTrack(e.track, state.activeFilter));
  const career = visible.filter((e) => e.category === 'career');
  const academic = visible.filter((e) => e.category === 'academic');

  renderMilestoneStack(
    document.getElementById('career-stack-container'),
    career,
    'career',
    'Career milestones card stack',
  );
  renderMilestoneStack(
    document.getElementById('academic-stack-container'),
    academic,
    'academic',
    'Academic milestones card stack',
  );

  scheduleSkiper16Update();
}

function renderStackAccordions() {
  const listEl = document.getElementById('stack-accordion-list');
  if (!listEl) return;

  listEl.innerHTML = STACK_GROUPS.map((group) => {
    const isExpanded = state.expandedStackIds.includes(group.id);
    const panelId = `stack-panel-${group.id}`;
    const iconSvg = isExpanded
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

    const capabilitiesHtml = isExpanded
      ? `
        <div id="${escapeHtml(panelId)}" class="stack-panel">
          <div class="stack-cap-grid">
            ${group.capabilities
              .map(
                (cap) => `
                  <div class="stack-cap-card">
                    <p class="stack-cap-name">${escapeHtml(cap.name)}</p>
                    <p class="stack-cap-role">${escapeHtml(cap.role)}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      `
      : '';

    return `
      <div class="stack-row-item" data-testid="stack-row-${escapeHtml(group.id)}">
        <button
          type="button"
          class="stack-row-trigger"
          aria-expanded="${isExpanded ? 'true' : 'false'}"
          aria-controls="${escapeHtml(panelId)}"
          data-toggle-stack="${escapeHtml(group.id)}"
        >
          <div class="stack-row-cols">
            <div class="stack-col-index">
              <span class="stack-index tabular-nums">(0${escapeHtml(group.index)})</span>
            </div>
            <div class="stack-col-title">
              <h3 class="stack-title">${escapeHtml(group.title)}</h3>
            </div>
            <div class="stack-col-focus">
              <p class="stack-focus">${escapeHtml(group.focus)}</p>
            </div>
          </div>
          <span aria-hidden="true" class="stack-toggle-badge ${isExpanded ? 'is-expanded' : ''}">
            ${iconSvg}
          </span>
        </button>
        ${capabilitiesHtml}
      </div>
    `;
  }).join('');
}

function renderPipelineWalkthrough() {
  const tablist = document.getElementById('pipeline-tablist');
  const panel = document.getElementById('pipeline-detail-panel');
  if (!tablist || !panel) return;

  const activeStep =
    PIPELINE_STEPS.find((s) => s.id === state.activePipelineStepId) || PIPELINE_STEPS[0];

  tablist.innerHTML = PIPELINE_STEPS.map((step, index) => {
    const isSelected = step.id === activeStep.id;
    const chevronHtml =
      index < PIPELINE_STEPS.length - 1
        ? `
          <svg
            class="pipeline-chevron"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `
        : '';

    return `
      <button
        type="button"
        role="tab"
        aria-selected="${isSelected ? 'true' : 'false'}"
        aria-controls="pipeline-detail-panel"
        data-pipeline-step="${escapeHtml(step.id)}"
        class="pipeline-tab ${isSelected ? 'is-selected' : ''}"
      >
        <div class="pipeline-tab-text">
          <span class="pipeline-tab-step tabular-nums">Stage ${escapeHtml(step.stepNumber)}</span>
          <span class="pipeline-tab-title">${escapeHtml(step.shortTitle)}</span>
        </div>
        ${chevronHtml}
      </button>
    `;
  }).join('');

  panel.innerHTML = `
    <div class="pipeline-panel-header">
      <div>
        <p class="pipeline-panel-layer">${escapeHtml(activeStep.trackLabel)}</p>
        <h4 class="pipeline-panel-title">${escapeHtml(activeStep.fullTitle)}</h4>
      </div>
      <p class="pipeline-panel-tools">${escapeHtml(activeStep.tools.join(' · '))}</p>
    </div>

    <div class="pipeline-panel-grid">
      <div>
        <p class="pipeline-col-label">Input Signals</p>
        <p class="pipeline-col-body">${escapeHtml(activeStep.inputSignals)}</p>
      </div>
      <div>
        <p class="pipeline-col-label">System Mechanics</p>
        <p class="pipeline-col-body">${escapeHtml(activeStep.mechanics)}</p>
      </div>
      <div>
        <p class="pipeline-col-label">Governance Rule</p>
        <p class="pipeline-col-body">${escapeHtml(activeStep.governanceRule)}</p>
      </div>
      <div>
        <p class="pipeline-col-label is-impact">Commercial Impact</p>
        <p class="pipeline-col-body is-impact">${escapeHtml(activeStep.revenueImpact)}</p>
      </div>
    </div>
  `;
}

function renderPitchButtons() {
  const container = document.getElementById('pitch-buttons-container');
  const statusEl = document.getElementById('clipboard-status');
  if (!container) return;

  container.innerHTML = PITCH_VARIANTS.map((variant) => {
    const isCopied = state.copiedId === variant.id;
    const baseClass =
      variant.id === 'commercial' ? 'btn-pitch-primary' : 'btn-pitch-secondary';
    const iconSvg = isCopied
      ? '<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>'
      : '<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>';

    return `
      <button
        type="button"
        data-copy-pitch="${escapeHtml(variant.id)}"
        class="btn-pitch ${baseClass} ${isCopied ? 'is-copied' : ''}"
      >
        ${iconSvg}
        <span>${isCopied ? 'Copied!' : escapeHtml(variant.label)}</span>
      </button>
    `;
  }).join('');

  if (statusEl) {
    if (state.copiedId) {
      const label = state.copiedId === 'commercial' ? 'Commercial / AM' : 'GTM & Tech';
      statusEl.innerHTML = `<p class="clipboard-status-text">Executive ${label} pitch copied to clipboard.</p>`;
    } else {
      statusEl.innerHTML = '';
    }
  }
}

/* --------------------------------------------------------------------------
   Skiper16 Scroll Scale Calculation
   -------------------------------------------------------------------------- */

function updateSkiper16Stacks() {
  rafPending = false;
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stacks = document.querySelectorAll('.skiper16-stack');

  stacks.forEach((stackEl) => {
    const rect = stackEl.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const scrollableDistance = stackEl.scrollHeight - window.innerHeight;
    const rawProgress =
      scrollableDistance <= 1 ? 0 : (window.scrollY - containerTop) / scrollableDistance;
    const progress = Math.max(0, Math.min(1, rawProgress));

    const cards = stackEl.querySelectorAll('.skiper16-card-inner');
    cards.forEach((cardEl) => {
      if (!(cardEl instanceof HTMLElement)) return;
      if (prefersReducedMotion) {
        cardEl.style.transform = 'none';
        return;
      }

      const start = Number(cardEl.dataset.rangeStart || '0');
      const end = Number(cardEl.dataset.rangeEnd || '1');
      const targetScale = Number(cardEl.dataset.targetScale || '1');

      if (targetScale === 1 || end <= start) {
        cardEl.style.transform = 'none';
        return;
      }

      const localProgress = Math.max(0, Math.min(1, (progress - start) / (end - start)));
      const scale = 1 - localProgress * (1 - targetScale);
      cardEl.style.transform = scale >= 0.9995 ? 'none' : `scale(${scale.toFixed(6)})`;
    });
  });
}

function scheduleSkiper16Update() {
  if (rafPending) return;
  rafPending = true;
  window.requestAnimationFrame(updateSkiper16Stacks);
}

/* --------------------------------------------------------------------------
   Playbook Modal Controller
   -------------------------------------------------------------------------- */

function renderPlaybookModal() {
  const backdrop = document.getElementById('playbook-modal');
  if (!backdrop) return;

  if (!state.selectedCaseStudyId) {
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    if (lastModalTrigger && document.contains(lastModalTrigger)) {
      lastModalTrigger.focus();
      lastModalTrigger = null;
    }
    return;
  }

  const cs = CASE_STUDIES.find((c) => c.id === state.selectedCaseStudyId);
  if (!cs) return;

  const visibleCaseStudies = CASE_STUDIES.filter((c) => matchesTrack(c.track, state.activeFilter));
  const canNavigate = visibleCaseStudies.length > 1;

  const kickerEl = document.getElementById('playbook-modal-kicker');
  const titleEl = document.getElementById('playbook-modal-title');
  const subtitleEl = document.getElementById('playbook-modal-subtitle');
  const metricsEl = document.getElementById('playbook-modal-metrics');
  const challengeEl = document.getElementById('playbook-modal-challenge');
  const systemEl = document.getElementById('playbook-modal-system');
  const cadenceEl = document.getElementById('playbook-modal-cadence');
  const outcomeEl = document.getElementById('playbook-modal-outcome');
  const toolsEl = document.getElementById('playbook-modal-tools');
  const navGroupEl = document.getElementById('modal-nav-buttons');

  if (kickerEl) kickerEl.textContent = `Playbook ${cs.index} · ${cs.trackLabel}`;
  if (titleEl) titleEl.textContent = cs.title;
  if (subtitleEl) subtitleEl.textContent = cs.subtitle;
  if (challengeEl) challengeEl.textContent = cs.challenge;
  if (systemEl) systemEl.textContent = cs.system;
  if (outcomeEl) outcomeEl.textContent = cs.outcome;
  if (toolsEl) toolsEl.textContent = cs.governanceAndTools.join(' · ');

  if (metricsEl) {
    metricsEl.innerHTML = cs.verifiedMetrics
      .map(
        (m) => `
          <div class="modal-metric-box">
            <p class="modal-metric-val tabular-nums">${escapeHtml(m.value)}</p>
            <p class="modal-metric-label">${escapeHtml(m.label)}</p>
          </div>
        `,
      )
      .join('');
  }

  if (cadenceEl) {
    cadenceEl.innerHTML = cs.operatingCadence
      .map(
        (step, idx) => `
          <li class="modal-cadence-item">
            <span class="modal-cadence-num tabular-nums">0${idx + 1}</span>
            <span>${escapeHtml(step)}</span>
          </li>
        `,
      )
      .join('');
  }

  if (navGroupEl) {
    navGroupEl.classList.toggle('is-hidden', !canNavigate);
  }

  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  const closeX = document.getElementById('modal-close-x');
  if (closeX instanceof HTMLElement) {
    closeX.focus();
  }
}

/**
 * Steps through currently visible playbooks in the modal.
 * @param {'prev' | 'next'} direction
 */
function navigatePlaybookModal(direction) {
  if (!state.selectedCaseStudyId) return;
  const visibleIds = CASE_STUDIES.filter((c) => matchesTrack(c.track, state.activeFilter)).map(
    (c) => c.id,
  );
  if (visibleIds.length <= 1) return;
  const idx = visibleIds.indexOf(state.selectedCaseStudyId);
  const currentIdx = idx === -1 ? 0 : idx;
  const nextIdx =
    direction === 'next'
      ? (currentIdx + 1) % visibleIds.length
      : (currentIdx - 1 + visibleIds.length) % visibleIds.length;
  state.selectedCaseStudyId = visibleIds[nextIdx];
  renderPlaybookModal();
}

/* --------------------------------------------------------------------------
   Clipboard Copy Helper
   -------------------------------------------------------------------------- */

/**
 * Copies a pitch variant to clipboard and renders immediate visual confirmation.
 * @param {'commercial' | 'tech'} variantId
 */
async function handleCopyPitch(variantId) {
  const variant = PITCH_VARIANTS.find((v) => v.id === variantId);
  if (!variant) return;

  state.copiedId = variantId;
  renderPitchButtons();

  if (copyTimerId !== null) {
    window.clearTimeout(copyTimerId);
  }
  copyTimerId = window.setTimeout(() => {
    state.copiedId = null;
    renderPitchButtons();
  }, 2600);

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(variant.text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = variant.text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  } catch {
    // Visual confirmation still succeeds in offline or permission-restricted frames
  }
}

/* --------------------------------------------------------------------------
   Filter Sync & Mobile Nav
   -------------------------------------------------------------------------- */

/**
 * Updates active portfolio filter and re-renders filtered sections.
 * @param {'all' | 'commercial' | 'tech'} nextFilter
 */
function setTrackFilter(nextFilter) {
  state.activeFilter = nextFilter;

  document.querySelectorAll('.filter-pill').forEach((btn) => {
    if (!(btn instanceof HTMLElement)) return;
    const isActive = btn.dataset.filter === nextFilter;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  renderKpisAndCounts();
  renderCaseStudies();
  renderExperienceStacks();
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const openIcon = document.getElementById('icon-menu-open');
  const closeIcon = document.getElementById('icon-menu-close');
  if (!toggleBtn || !drawer) return;

  const setOpen = (isOpen) => {
    drawer.classList.toggle('is-hidden', !isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggleBtn.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu',
    );
    if (openIcon) openIcon.classList.toggle('is-hidden', isOpen);
    if (closeIcon) closeIcon.classList.toggle('is-hidden', !isOpen);
  };

  toggleBtn.addEventListener('click', () => {
    const currentlyExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setOpen(!currentlyExpanded);
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

/* --------------------------------------------------------------------------
   Event Listeners & Initialization
   -------------------------------------------------------------------------- */

function bindEvents() {
  // Track filter pills
  document.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!(btn instanceof HTMLElement)) return;
      const filter = btn.dataset.filter;
      if (filter === 'all' || filter === 'commercial' || filter === 'tech') {
        setTrackFilter(filter);
      }
    });
  });

  // Delegated interactions across dynamic containers
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const resetBtn = target.closest('[data-reset-filter]');
    if (resetBtn) {
      setTrackFilter('all');
      return;
    }

    const playbookBtn = target.closest('[data-open-playbook]');
    if (playbookBtn instanceof HTMLElement) {
      lastModalTrigger = playbookBtn;
      state.selectedCaseStudyId = playbookBtn.dataset.openPlaybook || null;
      renderPlaybookModal();
      return;
    }

    const stackTrigger = target.closest('[data-toggle-stack]');
    if (stackTrigger instanceof HTMLElement) {
      const rowId = stackTrigger.dataset.toggleStack;
      if (!rowId) return;
      if (state.expandedStackIds.includes(rowId)) {
        state.expandedStackIds = state.expandedStackIds.filter((id) => id !== rowId);
      } else {
        state.expandedStackIds = [...state.expandedStackIds, rowId];
      }
      renderStackAccordions();
      return;
    }

    const pipelineTab = target.closest('[data-pipeline-step]');
    if (pipelineTab instanceof HTMLElement) {
      const stepId = pipelineTab.dataset.pipelineStep;
      if (stepId) {
        state.activePipelineStepId = stepId;
        renderPipelineWalkthrough();
      }
      return;
    }

    const pitchBtn = target.closest('[data-copy-pitch]');
    if (pitchBtn instanceof HTMLElement) {
      const variantId = pitchBtn.dataset.copyPitch;
      if (variantId === 'commercial' || variantId === 'tech') {
        handleCopyPitch(variantId);
      }
    }
  });

  // Keyboard navigation on pipeline tablist
  const tablist = document.getElementById('pipeline-tablist');
  if (tablist) {
    tablist.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      const idx = PIPELINE_STEPS.findIndex((s) => s.id === state.activePipelineStepId);
      const nextIdx =
        event.key === 'ArrowRight'
          ? (idx + 1) % PIPELINE_STEPS.length
          : (idx - 1 + PIPELINE_STEPS.length) % PIPELINE_STEPS.length;
      state.activePipelineStepId = PIPELINE_STEPS[nextIdx].id;
      renderPipelineWalkthrough();
      const nextTab = tablist.querySelector(
        `[data-pipeline-step="${PIPELINE_STEPS[nextIdx].id}"]`,
      );
      if (nextTab instanceof HTMLElement) {
        nextTab.focus();
      }
    });
  }

  // Modal controls & keyboard shortcuts
  const modalBackdrop = document.getElementById('playbook-modal');
  const closeX = document.getElementById('modal-close-x');
  const doneBtn = document.getElementById('modal-done-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) {
        state.selectedCaseStudyId = null;
        renderPlaybookModal();
      }
    });
  }

  if (closeX) {
    closeX.addEventListener('click', () => {
      state.selectedCaseStudyId = null;
      renderPlaybookModal();
    });
  }

  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      state.selectedCaseStudyId = null;
      renderPlaybookModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigatePlaybookModal('prev'));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigatePlaybookModal('next'));
  }

  document.addEventListener('keydown', (event) => {
    if (!state.selectedCaseStudyId) return;
    if (event.key === 'Escape') {
      state.selectedCaseStudyId = null;
      renderPlaybookModal();
    } else if (event.key === 'ArrowRight') {
      navigatePlaybookModal('next');
    } else if (event.key === 'ArrowLeft') {
      navigatePlaybookModal('prev');
    }
  });

  // Scroll listener for Skiper16 sticky card stack scaling
  window.addEventListener('scroll', scheduleSkiper16Update, { passive: true });
  window.addEventListener('resize', scheduleSkiper16Update, { passive: true });
}

function init() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  setupMobileMenu();
  renderKpisAndCounts();
  renderCaseStudies();
  renderExperienceStacks();
  renderStackAccordions();
  renderPipelineWalkthrough();
  renderPitchButtons();
  bindEvents();
  scheduleSkiper16Update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
