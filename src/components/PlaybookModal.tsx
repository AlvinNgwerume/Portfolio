import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { type CaseStudy } from '../data/portfolioData';

interface PlaybookModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  canNavigate: boolean;
}

export function PlaybookModal({
  caseStudy,
  onClose,
  onNavigate,
  canNavigate,
}: PlaybookModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!caseStudy) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && canNavigate) {
        onNavigate('next');
      } else if (event.key === 'ArrowLeft' && canNavigate) {
        onNavigate('prev');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [caseStudy, onClose, onNavigate, canNavigate]);

  if (!caseStudy) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="playbook-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/75 p-4 backdrop-blur-sm sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 text-[#121212] shadow-2xl sm:p-7">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] pb-4">
          <div>
            <p className="font-mono text-xs font-medium tracking-wider text-[#007EE6] uppercase">
              Playbook {caseStudy.index} · {caseStudy.trackLabel}
            </p>
            <h2
              id="playbook-modal-title"
              className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#121212] sm:text-[28px]"
            >
              {caseStudy.title}
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">{caseStudy.subtitle}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close playbook modal"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F5F5F5] text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#121212] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Verified Metrics Row */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {caseStudy.verifiedMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-[#E2E8F0] bg-[#F5F5F5] p-3"
            >
              <p className="font-display text-lg font-bold text-[#121212] tabular-nums sm:text-xl">
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs text-[#64748B]">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Challenge / System / Outcome */}
        <div className="mt-4 space-y-3.5">
          <div className="border-t border-[#E2E8F0] pt-3.5">
            <h3 className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
              01 · Commercial &amp; Operational Challenge
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#334155]">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="border-t border-[#E2E8F0] pt-3.5">
            <h3 className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
              02 · System Architecture &amp; Operating Cadence
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#334155]">
              {caseStudy.system}
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {caseStudy.operatingCadence.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-2.5 text-sm leading-snug text-[#334155]"
                >
                  <span className="mt-0.5 font-mono text-xs font-medium text-[#007EE6] tabular-nums">
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#E2E8F0] pt-3.5">
            <h3 className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
              03 · Verified Business Outcome
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed font-semibold text-[#121212]">
              {caseStudy.outcome}
            </p>
          </div>

          <div className="border-t border-[#E2E8F0] pt-3.5">
            <h3 className="font-mono text-[11px] tracking-wider text-[#64748B] uppercase">
              04 · Governance &amp; Tooling
            </h3>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-[#64748B]">
              {caseStudy.governanceAndTools.join(' · ')}
            </p>
          </div>
        </div>

        {/* Footer controls */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4">
          {canNavigate ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('prev')}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-[#F5F5F5] px-3.5 py-2 text-xs font-medium text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6]"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                <span>Previous Playbook</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('next')}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-[#F5F5F5] px-3.5 py-2 text-xs font-medium text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6]"
              >
                <span>Next Playbook</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#121212] px-5 py-2 text-xs font-semibold text-[#FFFFFF] transition-colors hover:bg-[#007EE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EE6]"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
}
