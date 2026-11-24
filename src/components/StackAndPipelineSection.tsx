import { ChevronRight, Minus, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { PIPELINE_STEPS, STACK_GROUPS } from '../data/portfolioData';
import { getPipelineStep } from '../utils/portfolioLogic';

interface StackAndPipelineSectionProps {
  activeStepId: string;
  onSelectStep: (stepId: string) => void;
  expandedStackIds: string[];
  onToggleStackRow: (rowId: string) => void;
}

export function StackAndPipelineSection({
  activeStepId,
  onSelectStep,
  expandedStackIds,
  onToggleStackRow,
}: StackAndPipelineSectionProps) {
  const activeStep = getPipelineStep(activeStepId);

  return (
    <section
      id="stack"
      className="scroll-mt-20 bg-[#F5F5F5] py-16 text-[#121212] sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Part A: Vercept Asymmetric Header + (001)-(004) Numbered Expandable Stack Rows */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#121212] uppercase">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] text-[#FFFFFF]">
                <Plus className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>Capability Stack</span>
            </div>
            <p className="mt-3 font-mono text-xs text-[#64748B]">
              Select any numbered discipline to inspect tools
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl leading-[1.15] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[44px] text-balance">
              <span className="text-[#64748B]">Systems, intelligence </span>
              <span className="text-[#121212]">and pipeline infrastructure.</span>
            </h2>
          </div>
        </div>

        {/* Vercept-style (001)-(004) Expandable Rows */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 divide-y divide-[#CBD5E1] border-y border-[#CBD5E1]"
        >
          {STACK_GROUPS.map((group) => {
            const isExpanded = expandedStackIds.includes(group.id);
            const panelId = `stack-panel-${group.id}`;

            return (
              <div key={group.id} data-testid={`stack-row-${group.id}`}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => onToggleStackRow(group.id)}
                  className="group flex w-full items-start justify-between gap-6 py-7 text-left transition-colors duration-150 hover:bg-[#FFFFFF]/60 sm:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6]"
                >
                  <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-12 lg:items-center lg:gap-8">
                    <div className="lg:col-span-2">
                      <span className="font-mono text-sm font-medium text-[#64748B] tabular-nums">
                        (0{group.index})
                      </span>
                    </div>

                    <div className="lg:col-span-5">
                      <h3 className="font-display text-xl font-semibold text-[#121212] sm:text-2xl">
                        {group.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-sm leading-relaxed text-[#475569]">{group.focus}</p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-150 ${
                      isExpanded
                        ? 'border-[#121212] bg-[#121212] text-[#FFFFFF]'
                        : 'border-[#CBD5E1] bg-[#FFFFFF] text-[#121212] group-hover:border-[#121212]'
                    }`}
                  >
                    {isExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isExpanded && (
                  <div id={panelId} className="pb-8 sm:px-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:pl-[16.6667%]">
                      {group.capabilities.map((cap) => (
                        <div
                          key={cap.name}
                          className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-4"
                        >
                          <p className="font-display text-sm font-semibold text-[#121212]">
                            {cap.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                            {cap.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Part B: Interactive 4-Step Pipeline Walkthrough */}
        <div id="pipeline" className="mt-16 scroll-mt-24 pt-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#121212] uppercase">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#007EE6] text-[#FFFFFF]">
                  <Plus className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>Interactive GTM Architecture</span>
              </div>
              <p className="mt-2 font-mono text-xs text-[#64748B]">
                Select any stage to inspect mechanics and governance rules
              </p>
            </div>

            <div className="lg:col-span-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-[#121212] sm:text-3xl">
                End-to-End Commercial &amp; AI Pipeline Walkthrough
              </h3>
            </div>
          </div>

          {/* 4-Step Pipeline Selector Bar */}
          <div
            role="tablist"
            aria-label="GTM pipeline stages"
            className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PIPELINE_STEPS.map((step, index) => {
              const isSelected = step.id === activeStep.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="pipeline-detail-panel"
                  onClick={() => onSelectStep(step.id)}
                  className={`flex min-h-[60px] items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6] ${
                    isSelected
                      ? 'border-[#121212] bg-[#121212] text-[#FFFFFF]'
                      : 'border-[#E2E8F0] bg-[#FFFFFF] text-[#475569] hover:border-[#121212]/40 hover:text-[#121212]'
                  }`}
                >
                  <div className="min-w-0">
                    <span
                      className={`block font-mono text-[11px] tracking-wider uppercase tabular-nums ${
                        isSelected ? 'text-[#38BDF8]' : 'text-[#64748B]'
                      }`}
                    >
                      Stage {step.stepNumber}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold">
                      {step.shortTitle}
                    </span>
                  </div>

                  {index < PIPELINE_STEPS.length - 1 ? (
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        isSelected ? 'text-[#38BDF8]' : 'text-[#94A3B8]'
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div
            id="pipeline-detail-panel"
            role="tabpanel"
            data-testid="pipeline-detail-panel"
            aria-live="polite"
            className="mt-4 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs font-medium tracking-wider text-[#007EE6] uppercase">
                  {activeStep.trackLabel}
                </p>
                <h4 className="mt-1 font-display text-xl font-semibold text-[#121212] sm:text-2xl">
                  {activeStep.fullTitle}
                </h4>
              </div>
              <p className="font-mono text-xs text-[#64748B]">
                {activeStep.tools.join(' · ')}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                  Input Signals
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  {activeStep.inputSignals}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                  System Mechanics
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  {activeStep.mechanics}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
                  Governance Rule
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  {activeStep.governanceRule}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wider text-[#007EE6] uppercase">
                  Commercial Impact
                </p>
                <p className="mt-2 text-sm leading-relaxed font-semibold text-[#121212]">
                  {activeStep.revenueImpact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
