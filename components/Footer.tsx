"use client";

import { SectionReveal } from "./ui/SectionReveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 bg-cream-100 border-t border-burgundy-900/10">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-5">
            <SectionReveal>
              <a href="/" className="inline-block">
                <h3 className="font-display text-3xl text-burgundy-900 italic">
                  Handled
                  <span className="not-italic font-normal">.Studio</span>
                </h3>
              </a>
              <p className="mt-4 font-body text-body-sm text-ink-500 max-w-xs">
                Your Paper + Website Concierge
              </p>
            </SectionReveal>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <SectionReveal delay={0.1}>
              <h4 className="font-accent text-caption text-burgundy-900/60 tracking-[0.2em] mb-6">
                EXPLORE
              </h4>
              <nav className="flex flex-col gap-3">
                <a
                  href="#services"
                  className="font-body text-body-sm text-ink-600 hover:text-burgundy-900 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="font-body text-body-sm text-ink-600 hover:text-burgundy-900 transition-colors"
                >
                  Our Process
                </a>
                <a
                  href="#portfolio"
                  className="font-body text-body-sm text-ink-600 hover:text-burgundy-900 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="font-body text-body-sm text-ink-600 hover:text-burgundy-900 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </SectionReveal>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <SectionReveal delay={0.2}>
              <h4 className="font-accent text-caption text-burgundy-900/60 tracking-[0.2em] mb-6">
                GET IN TOUCH
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:Hello@handled.studio"
                  className="font-body text-body-sm text-ink-600 hover:text-burgundy-900 transition-colors"
                >
                  Hello@handled.studio
                </a>
                <a
                  href="https://instagram.com/handled_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-sm text-ink-600 hover:text-burgundy-900 transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @handled_studio
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Bottom bar */}
        <SectionReveal delay={0.3}>
          <div className="mt-16 pt-8 border-t border-burgundy-900/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-body-sm text-ink-400">
              &copy; {currentYear} Handled Studio. All rights reserved.
            </p>
            <p className="font-body text-body-sm text-ink-400">
              Crafted with care for love stories everywhere.
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
