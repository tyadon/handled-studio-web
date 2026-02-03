"use client";

import { SectionReveal } from "./ui/SectionReveal";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section id="contact" className="relative py-section bg-burgundy-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 w-96 h-96 border border-cream-100 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-10 left-10 w-64 h-64 border border-cream-100 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <span className="font-accent text-caption text-cream-100/50 tracking-[0.2em] block mb-8">
              LET&apos;S BEGIN
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-lg text-cream-50 font-light mb-6">
              Ready to create something{" "}
              <span className="italic font-medium">beautiful</span>?
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="font-body text-body-lg text-cream-100/70 max-w-2xl mx-auto mb-12">
              Every love story deserves a thoughtful introduction. Let&apos;s
              discuss how we can make your wedding stationery and website as
              unique as your journey together.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                variant="secondary"
                size="lg"
                href="mailto:Hello@handled.studio"
              >
                Get in Touch
              </Button>

              <span className="font-body text-body-sm text-cream-100/50">
                or email us at
              </span>

              <a
                href="mailto:Hello@handled.studio"
                className="font-body text-body-md text-cream-100 link-underline after:bg-cream-100"
              >
                Hello@handled.studio
              </a>
            </div>
          </SectionReveal>

          {/* Decorative line */}
          <SectionReveal delay={0.5}>
            <div className="mt-20 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-cream-100/20" />
              <span className="font-display text-2xl text-cream-100/30 italic">
                H
              </span>
              <div className="h-px w-16 bg-cream-100/20" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
