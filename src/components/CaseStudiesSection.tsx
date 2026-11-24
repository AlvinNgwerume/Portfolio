import { ArrowUpRight, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { type CaseStudy, type TrackFilter } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  activeFilter: TrackFilter;
  onSelectCaseStudy: (id: string) => void;
}

function getAccentToken(track: CaseStudy['track']) {
  if (track === 'commercial') {
    return 'text-[#007EE6]';
  }
  if (track === 'tech') {
    return 'text-[#0284C7]';
  }
  return 'text-[#121212]';
}

export function CaseStudiesSection({
  caseStudies,
  activeFilter,
  onSelectCaseStudy,
}: CaseStudiesSectionProps) {
  return (
    <section
      id="case-studies"
      className="scroll-mt-20 border-b border-[#E2E8F0] bg-[#F5F5F5] py-16 text-[#121212] sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Vercept Asymmetric 12-Column Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#121212] uppercase">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] text-[#FFFFFF]">
                <Plus className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>Operating Playbooks</span>
            </div>
            <p className="mt-3 font-mono text-xs text-[#64748B]">
              {activeFilter === 'all'
                ? 'All 3 playbooks active · Click any card for full breakdown'
                : `Filtered view (${caseStudies.length} matching playbooks)`}
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl leading-[1.15] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[44px] text-balance">
              <span className="text-[#64748B]">Outcome-led revenue systems, </span>
              <span className="text-[#121212]">documented end to end.</span>
            </h2>
          </div>
        </div>

        {/* Showcase Cards Grid */}
        <motion.div
          data-testid="case-studies-grid"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-12 grid grid-cols-1 gap-6 ${
            caseStudies.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
          }`}
        >
          {caseStudies.map((cs) => {
            const accentClass = getAccentToken(cs.track);
            return (
              <article
                key={cs.id}
                data-testid="case-study-card"
                className="group flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-7 transition-all duration-150 hover:border-[#121212]/40"
              >
                <div>
                  {/* Clean unboxed editorial metadata line */}
                  <div className="flex items-center justify-between gap-3 font-mono text-xs">
                    <span className="text-[#64748B] tabular-nums">Playbook {cs.index}</span>
                    <span className={`${accentClass} font-medium`}>{cs.trackLabel}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-[#121212] sm:text-2xl">
                    {cs.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs font-medium text-[#007EE6] tabular-nums">
                    {cs.primaryMetric}
                  </p>

                  {/* Challenge / System / Outcome Structure */}
                  <dl className="mt-6 space-y-4 border-t border-[#E2E8F0] pt-5 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                        Challenge
                      </dt>
                      <dd className="mt-1 leading-relaxed text-[#475569]">{cs.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                        System
                      </dt>
                      <dd className="mt-1 leading-relaxed text-[#475569]">{cs.system}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                        Outcome
                      </dt>
                      <dd className="mt-1 leading-relaxed font-medium text-[#121212]">
                        {cs.outcome}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-7 border-t border-[#E2E8F0] pt-5">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(cs.id)}
                    className="inline-flex min-h-[44px] w-full items-center justify-between rounded-full bg-[#121212] px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] transition-colors duration-150 hover:bg-[#007EE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF]"
                  >
                    <span>Inspect Playbook Architecture</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
