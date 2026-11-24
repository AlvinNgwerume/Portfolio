import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { href: '#impact', label: 'Impact' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121212]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-5 py-4 sm:px-8 lg:px-12">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
        >
          {CONTACT_INFO.shortName}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-[#94A3B8] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#F8FAFC] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#F8FAFC] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#121212] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#38BDF8] hover:text-[#08090C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#1A1B1F] text-[#F8FAFC] transition-colors hover:border-[#38BDF8] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#121212] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center justify-between rounded-lg px-3 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-white/5 hover:text-[#F8FAFC]"
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="font-mono text-xs text-[#94A3B8]">
                  -&gt;
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-full bg-[#F8FAFC] px-5 py-2.5 text-sm font-semibold text-[#121212] transition-colors hover:bg-[#38BDF8]"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
