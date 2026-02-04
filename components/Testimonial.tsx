"use client";

import { SectionReveal } from "./ui/SectionReveal";
import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="py-section bg-cream-100 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Large decorative quotes */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.08, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-8 left-0 md:left-12 text-[12rem] md:text-[16rem] leading-none font-display text-burgundy-900 select-none"
          >
            &ldquo;
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.08, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-24 right-0 md:right-12 text-[12rem] md:text-[16rem] leading-none font-display text-burgundy-900 select-none rotate-180"
          >
            &ldquo;
          </motion.span>

          {/* Quote content */}
          <div className="relative z-10 py-12 md:py-20">
            <SectionReveal>
              <span className="font-body text-sm font-medium text-burgundy-900/60 tracking-[0.2em] block mb-10">
                KIND WORDS
              </span>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <blockquote className="font-display text-display-sm md:text-display-md text-ink-900 font-light leading-snug">
                Working with Handled Studio was the best decision we made for
                our wedding. They took our scattered Pinterest boards and
                half-formed ideas and created something{" "}
                <span className="text-burgundy-900 italic font-medium">
                  absolutely magical
                </span>
                . Our guests are still talking about the invitations.
              </blockquote>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="mt-12 flex flex-col items-center">
                <div className="w-px h-8 bg-burgundy-900/20 mb-6" />
                <span className="font-body text-sm font-medium text-burgundy-900 tracking-[0.2em]">
                  SARAH & THOMAS
                </span>
                <span className="font-body text-body-sm text-ink-500 mt-1">
                  Married October 2024
                </span>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
