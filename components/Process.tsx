"use client";

import { SectionReveal } from "./ui/SectionReveal";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin with a conversation. Tell us your story, your vision, your aesthetic. We listen, we learn, we dream alongside you.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team crafts bespoke concepts tailored to your celebration. Every detail is intentional, every choice meaningful.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "From print production to website launch, we handle the logistics. You receive updates, not stress.",
  },
  {
    number: "04",
    title: "Done",
    description:
      "Sit back as your guests experience the magic. We continue to manage RSVPs and updates until the last dance.",
  },
];

export function Process() {
  return (
    <section className="py-section bg-cream-100 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <SectionReveal>
            <span className="font-accent text-caption text-burgundy-900/60 tracking-[0.2em] block mb-6">
              THE JOURNEY
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-lg text-ink-900 max-w-2xl">
              How we bring your{" "}
              <span className="text-burgundy-900 italic">vision</span> to life
            </h2>
          </SectionReveal>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-burgundy-900/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <SectionReveal key={step.number} delay={0.1 + index * 0.1}>
                <div className="relative group">
                  {/* Large number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative z-10 w-24 h-24 flex items-center justify-center bg-cream-100 mb-8"
                  >
                    <span className="font-display text-[3.5rem] leading-none text-burgundy-900/20 font-light transition-colors duration-500 group-hover:text-burgundy-900/40">
                      {step.number}
                    </span>
                    {/* Dot on timeline - desktop */}
                    <div className="hidden lg:block absolute -top-[1.125rem] left-1/2 -translate-x-1/2 w-2 h-2 bg-burgundy-900/30 rounded-full" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-display-sm text-ink-900 font-medium mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-body-sm text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
