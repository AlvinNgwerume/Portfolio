import { ArrowUpRight, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import {
  CONTACT_INFO,
  FILTER_OPTIONS,
  type KpiMetric,
  type TrackFilter,
} from '../data/portfolioData';

interface HeroSectionProps {
  activeFilter: TrackFilter;
  onFilterChange: (filter: TrackFilter) => void;
  visibleKpis: KpiMetric[];
  counts: {
    kpis: number;
    caseStudies: number;
    experience: number;
  };
}

function getTrackMetadata(track: KpiMetric['track']) {
  if (track === 'commercial') {
    return {
      label: 'Commercial Growth',
      accentClass: 'text-[#007EE6]',
    };
  }
  if (track === 'tech') {
    return {
      label: 'GTM & AI Systems',
      accentClass: 'text-[#0284C7]',
    };
  }
  return {
    label: 'Commercial + GTM',
    accentClass: 'text-[#121212]',
  };
}

export function HeroSection({
  activeFilter,
  onFilterChange,
  visibleKpis,
  counts,
}: HeroSectionProps) {
  return (
    <section id="top">
      {/* Band 1: Monolithic Obsidian Editorial Hero (#121212) */}
      <div className="flex min-h-[calc(100vh-74px)] flex-col justify-center bg-[#121212] py-16 text-[#F8FAFC] sm:py-24">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.14em] text-[#94A3B8] uppercase">
              {CONTACT_INFO.location} <span aria-hidden="true">·</span> Commercial Growth &amp; GTM Systems <span aria-hidden="true">·</span> B2B Account Management &amp; Outbound
            </p>

            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,5.4vw,4.75rem)] leading-[1.04] font-semibold tracking-[-0.025em] text-[#F8FAFC] text-balance">
              Bridging strategic account growth and AI-enabled GTM execution.
            </h1>
          </motion.div>

          {/* Vercept-style bottom split bar separated by architectural hairline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 lg:mt-20 lg:grid-cols-12 lg:items-end"
          >
            <p className="max-w-2xl text-base leading-relaxed text-[#CBD5E1] sm:text-lg lg:col-span-7">
              Commercial operator combining B2B account expansion, high-velocity outbound pipeline
              generation, and CRM/AI workflow automation to turn customer relationships and market
              signals into measurable revenue.
            </p>

            <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
              <a
                href="#case-studies"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F8FAFC] px-6 py-2.5 text-sm font-semibold text-[#121212] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#38BDF8] hover:text-[#08090C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
              >
                <span>Explore Case Studies</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#pipeline"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-sm font-medium text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#38BDF8] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <span>Inspect GTM Pipeline</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Band 2: Studio Light Impact & 4-Stat Strip (#FFFFFF) */}
      <div
        id="impact"
        className="scroll-mt-20 border-b border-[#E2E8F0] bg-[#FFFFFF] py-16 text-[#121212] sm:py-24"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {/* Vercept Asymmetric 12-Column Header */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#121212] uppercase">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] text-[#FFFFFF]">
                  <Plus className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>Verified Impact</span>
              </div>
              <p className="mt-3 font-mono text-xs text-[#64748B] tabular-nums">
                Showing {counts.kpis} metrics · {counts.caseStudies} playbooks · {counts.experience} roles
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl leading-[1.15] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[44px] text-balance">
                <span className="text-[#64748B]">Verified Commercial &amp; GTM Impact </span>
                <span className="text-[#121212]">across enterprise retention and outbound velocity.</span>
              </h2>

              {/* Dual-Track Interactive Filter Bar */}
              <div className="mt-7">
                <div
                  role="group"
                  aria-label="Filter portfolio by capability track"
                  className="flex flex-col gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F5F5F5] p-1.5 sm:inline-flex sm:flex-row sm:items-center"
                >
                  {FILTER_OPTIONS.map((option) => {
                    const isActive = activeFilter === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => onFilterChange(option.id)}
                        className={`min-h-[40px] rounded-lg px-4 py-2 text-left text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 sm:text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6] ${
                          isActive
                            ? 'bg-[#121212] text-[#FFFFFF] shadow-xs'
                            : 'text-[#475569] hover:bg-[#FFFFFF] hover:text-[#121212]'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Vercept-Style 4-Stat Strip */}
          <motion.div
            data-testid="kpi-grid"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 ${
              visibleKpis.length <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4'
            }`}
          >
            {visibleKpis.map((kpi, idx) => {
              const meta = getTrackMetadata(kpi.track);
              return (
                <article
                  key={kpi.id}
                  data-testid="kpi-card"
                  className="flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-[#F5F5F5] p-6 transition-colors duration-150 hover:border-[#121212]/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                      <span className="tabular-nums shrink-0">0{idx + 1}</span>
                      <span className={`${meta.accentClass} whitespace-nowrap font-medium`}>
                        {meta.label}
                      </span>
                    </div>

                    <p className="mt-5 font-display text-4xl font-bold tracking-[-0.03em] text-[#121212] tabular-nums sm:text-[44px]">
                      {kpi.value}
                    </p>

                    <h3 className="mt-2 font-display text-base font-semibold text-[#121212]">
                      {kpi.label}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      {kpi.context}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#E2E8F0] pt-3 font-mono text-xs text-[#64748B]">
                    {kpi.source}
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
