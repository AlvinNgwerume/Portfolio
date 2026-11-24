import { ArrowUpRight, Check, Copy, Mail, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CONTACT_INFO, PITCH_VARIANTS } from '../data/portfolioData';

export function ContactFooter() {
  const [copiedId, setCopiedId] = useState<'commercial' | 'tech' | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopyPitch = async (variantId: 'commercial' | 'tech', text: string) => {
    setCopiedId(variantId);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setCopiedId(null);
    }, 2600);

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    } catch {
      // Fallback visual confirmation still updates cleanly in restricted contexts
    }
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-[#121212] py-16 text-[#F8FAFC] sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Vercept-style Monolithic Dark Closing Band */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Editorial CTA */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#F8FAFC] uppercase">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F8FAFC] text-[#121212]">
                <Plus className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>Commercial Readiness &amp; Direct Contact</span>
            </div>

            <h2 className="mt-5 font-display text-3xl leading-[1.12] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[44px] text-balance">
              <span className="text-[#94A3B8]">Ready to scale pipeline velocity, </span>
              <span className="text-[#F8FAFC]">
                client retention, and AI-assisted GTM execution.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#CBD5E1]">
              Based in {CONTACT_INFO.location}, partnering with data-driven B2B SaaS, media
              intelligence, and enterprise commercial teams globally. Copy a tailored executive
              summary below or reach out directly.
            </p>

            {/* One-Click Clipboard Pitch Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {PITCH_VARIANTS.map((variant) => {
                const isCopied = copiedId === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => handleCopyPitch(variant.id, variant.text)}
                    className={`inline-flex min-h-[44px] items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                      isCopied
                        ? 'bg-[#38BDF8] text-[#08090C]'
                        : variant.id === 'commercial'
                          ? 'bg-[#F8FAFC] text-[#121212] hover:bg-[#38BDF8]'
                          : 'border border-white/20 bg-transparent text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8]'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{variant.label}</span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            <div aria-live="polite" className="mt-3 min-h-[20px]">
              {copiedId ? (
                <p className="font-mono text-xs text-[#38BDF8]">
                  Executive {copiedId === 'commercial' ? 'Commercial / AM' : 'GTM & Tech'} pitch
                  copied to clipboard.
                </p>
              ) : null}
            </div>
          </div>

          {/* Right Direct Links */}
          <div className="divide-y divide-white/15 border-y border-white/15 lg:col-span-5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex min-h-[72px] items-center justify-between gap-4 py-4 transition-colors hover:bg-white/[0.04] sm:px-3"
            >
              <div className="min-w-0">
                <p className="font-mono text-[11px] tracking-wider text-[#94A3B8] uppercase">
                  Direct Email
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8]">
                  {CONTACT_INFO.email}
                </p>
              </div>
              <Mail
                className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#38BDF8]"
                aria-hidden="true"
              />
            </a>

            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[72px] items-center justify-between gap-4 py-4 transition-colors hover:bg-white/[0.04] sm:px-3"
            >
              <div className="min-w-0">
                <p className="font-mono text-[11px] tracking-wider text-[#94A3B8] uppercase">
                  LinkedIn
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8]">
                  {CONTACT_INFO.linkedinHandle}
                </p>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#38BDF8]"
                aria-hidden="true"
              />
            </a>

            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[72px] items-center justify-between gap-4 py-4 transition-colors hover:bg-white/[0.04] sm:px-3"
            >
              <div className="min-w-0">
                <p className="font-mono text-[11px] tracking-wider text-[#94A3B8] uppercase">
                  GitHub
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8]">
                  {CONTACT_INFO.githubHandle}
                </p>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#38BDF8]"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-7 text-xs text-[#94A3B8] sm:flex-row sm:items-center">
          <p className="font-mono">
            © {new Date().getFullYear()} {CONTACT_INFO.fullName} · {CONTACT_INFO.location}
          </p>
          <p className="font-mono">
            B2B Account Management · Outbound Revenue · GTM &amp; AI Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
