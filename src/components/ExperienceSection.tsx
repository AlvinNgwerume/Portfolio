import { Plus } from 'lucide-react';
import { type ExperienceItem, type TrackFilter } from '../data/portfolioData';
import { splitExperienceByCategory } from '../utils/portfolioLogic';
import { Skiper16Stack } from './ui/skiper16';

interface ExperienceSectionProps {
  items: ExperienceItem[];
  activeFilter: TrackFilter;
  onResetFilter?: () => void;
}

function getTrackColor(track: ExperienceItem['track']) {
  if (track === 'commercial') return 'text-[#007EE6]';
  if (track === 'tech') return 'text-[#0284C7]';
  return 'text-[#121212]';
}

function MilestoneCard({
  item,
  index,
  variant,
}: {
  item: ExperienceItem;
  index: number;
  variant: 'career' | 'academic';
}) {
  const isAcademic = variant === 'academic';

  return (
    <article
      className={`rounded-2xl border p-6 shadow-[0_14px_40px_-16px_rgba(18,18,18,0.12)] transition-colors duration-150 sm:p-8 ${
        isAcademic
          ? 'border-[#CBD5E1] bg-[#F5F5F5]'
          : 'border-[#E2E8F0] bg-[#FFFFFF]'
      }`}
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start lg:gap-8">
        {/* Index, Period & Track */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] pb-4 lg:col-span-3 lg:flex-col lg:items-start lg:border-b-0 lg:pb-0">
          <span className="font-mono text-xs font-medium text-[#64748B] tabular-nums">
            0{index + 1} · {item.period}
          </span>
          <span
            className={`font-mono text-[11px] font-semibold tracking-wider uppercase ${getTrackColor(
              item.track,
            )}`}
          >
            {item.trackLabel}
          </span>
        </div>

        {/* Role & Organization */}
        <div className="lg:col-span-4">
          <h4 className="font-display text-xl font-semibold leading-snug text-[#121212] sm:text-2xl">
            {item.role}
          </h4>
          <p className="mt-1.5 text-sm font-medium text-[#334155]">
            {item.organization}
            {item.regionOrAccount ? (
              <span className="text-[#64748B]"> · {item.regionOrAccount}</span>
            ) : null}
          </p>
        </div>

        {/* Summary & Impact */}
        <div className="lg:col-span-5">
          <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
            {item.summary}
          </p>
          <p className="mt-4 border-t border-[#E2E8F0] pt-3 font-mono text-xs font-medium text-[#121212] tabular-nums">
            {item.impactHighlight}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection({
  items,
  activeFilter,
  onResetFilter,
}: ExperienceSectionProps) {
  const { career, academic } = splitExperienceByCategory(items);

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-[#E2E8F0] bg-[#FFFFFF] py-16 text-[#121212] sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Full-Width Section Header */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#121212] uppercase">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] text-[#FFFFFF]">
              <Plus className="h-3 w-3" aria-hidden="true" />
            </span>
            <span>Career / Academic</span>
          </div>

          <h2 className="w-full font-display text-3xl leading-[1.12] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[42px] xl:text-[46px]">
            <span className="text-[#64748B]">Commercial execution </span>
            <span className="text-[#121212]">
              across enterprise SaaS, security, and corporate growth.
            </span>
          </h2>
        </div>

        {/* 01: Career Card Stack Scroll */}
        <div className="mt-14" data-testid="career-stack-section">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <h3 className="font-mono text-xs font-semibold tracking-[0.12em] text-[#121212] uppercase">
              01 · Career Milestones
            </h3>
          </div>

          {career.length > 0 ? (
            <Skiper16Stack
              items={career}
              getKey={(item) => item.id}
              itemTestId="experience-row"
              stackLabel="Career milestones card stack"
              renderCard={(item, idx) => (
                <MilestoneCard item={item} index={idx} variant="career" />
              )}
            />
          ) : (
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F5F5F5] p-6 text-sm text-[#475569]">
              No career roles match the current filter.
            </div>
          )}
        </div>

        {/* Explicit Break Line Separating Career & Academic Milestones */}
        <div
          role="separator"
          aria-label="Break between career and academic milestones"
          data-testid="career-academic-break"
          className="my-16 flex items-center gap-4 sm:my-20"
        >
          <div className="h-px flex-1 bg-[#CBD5E1]" />
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#64748B] uppercase whitespace-nowrap">
            Academic
          </span>
          <div className="h-px flex-1 bg-[#CBD5E1]" />
        </div>

        {/* 02: Academic Card Stack Scroll (Separate Stack) */}
        <div data-testid="academic-stack-section">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <h3 className="font-mono text-xs font-semibold tracking-[0.12em] text-[#121212] uppercase">
              02 · Academic Milestones
            </h3>
          </div>

          {academic.length > 0 ? (
            <Skiper16Stack
              items={academic}
              getKey={(item) => item.id}
              itemTestId="experience-row"
              stackLabel="Academic milestones card stack"
              renderCard={(item, idx) => (
                <MilestoneCard item={item} index={idx} variant="academic" />
              )}
            />
          ) : (
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F5F5F5] p-6 sm:flex-row sm:items-center">
              <p className="text-sm text-[#475569]">
                Academic milestone (B.Sc. Artificial Intelligence in Business) belongs to the{' '}
                <span className="font-semibold text-[#121212]">GTM Tech &amp; Automation</span>{' '}
                track.
              </p>
              {onResetFilter ? (
                <button
                  type="button"
                  onClick={onResetFilter}
                  className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#121212] px-4 py-2 text-xs font-semibold text-[#FFFFFF] whitespace-nowrap shrink-0 transition-colors hover:bg-[#007EE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6]"
                >
                  Show All Work
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
