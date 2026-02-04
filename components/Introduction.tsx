"use client";

import { SectionReveal } from "./ui/SectionReveal";

export function Introduction() {
  return (
    <section className="py-section bg-cream-100">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - Large quote */}
          <div className="lg:col-span-5">
            <SectionReveal delay={0.1}>
              <div className="relative">
                <span className="absolute -top-8 -left-4 text-[8rem] leading-none font-display text-burgundy-900/10 select-none">
                  &ldquo;
                </span>
                <h2 className="font-display text-display-md text-ink-900 relative z-10 pt-8">
                  Every detail,
                  <br />
                  <span className="text-burgundy-900 italic font-medium">
                    handled.
                  </span>
                </h2>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="mt-8 h-px bg-burgundy-900 w-24" />
            </SectionReveal>
          </div>

          {/* Right column - Story */}
          <div className="lg:col-span-7 lg:pt-12">
            <SectionReveal delay={0.2}>
              <p className="font-body text-body-lg text-ink-600 leading-relaxed">
                Your wedding deserves more than templates and DIY stress. At
                Handled Studio, we believe in the art of the personal touch—the
                weight of fine paper, the thrill of a custom domain, the joy of
                details that feel unmistakably{" "}
                <em className="font-display text-burgundy-900">you</em>.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.35}>
              <p className="mt-6 font-body text-body-md text-ink-500 leading-relaxed">
                From the moment your guests receive that first envelope to the
                final RSVP confirmation, we orchestrate every element with
                precision and care. No cookie-cutter solutions. No Squarespace
                limitations. Just thoughtful, bespoke service that transforms
                your vision into reality.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.5}>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-display text-display-sm text-burgundy-900 font-semibold">
                    100%
                  </span>
                  <span className="font-body text-sm font-medium text-ink-500 tracking-wider">
                    CUSTOM DESIGNS
                  </span>
                </div>
                <div className="w-px h-16 bg-burgundy-900/20" />
                <div className="flex flex-col">
                  <span className="font-display text-display-sm text-burgundy-900 font-semibold">
                    Full
                  </span>
                  <span className="font-body text-sm font-medium text-ink-500 tracking-wider">
                    CONCIERGE SERVICE
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
