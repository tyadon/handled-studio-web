"use client";

import { SectionReveal } from "./ui/SectionReveal";
import { motion } from "framer-motion";

const paperServices = [
  "Save the Dates",
  "Wedding Invitations",
  "RSVP Cards & Envelopes",
  "Day-of Stationery",
  "Professional Printing",
  "Assembly & Mailing",
  "Postage & Delivery",
];

const websiteServices = [
  "Custom Domain",
  "Bespoke Design",
  "RSVP Management",
  "Guest Messaging",
  "Event Details & Schedules",
  "Photo Galleries",
  "Registry Links",
];

function ServiceCard({
  title,
  subtitle,
  services,
  index,
}: {
  title: string;
  subtitle: string;
  services: string[];
  index: number;
}) {
  return (
    <SectionReveal delay={0.2 + index * 0.15}>
      <div className="group relative h-full">
        {/* Background hover effect */}
        <motion.div
          className="absolute inset-0 bg-burgundy-900/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          initial={false}
        />

        <div className="relative p-8 md:p-12 lg:p-16 border border-burgundy-900/10 h-full">
          {/* Number */}
          <span className="absolute top-6 right-6 font-display text-[5rem] leading-none text-burgundy-900/5 font-bold select-none">
            0{index + 1}
          </span>

          {/* Content */}
          <div className="relative z-10">
            <span className="font-body text-sm font-medium text-burgundy-900/60 tracking-[0.2em] block mb-4">
              {subtitle}
            </span>

            <h3 className="font-display text-display-sm text-ink-900 font-medium mb-8">
              {title}
            </h3>

            {/* Decorative line */}
            <div className="h-px bg-burgundy-900 w-12 mb-8 transition-all duration-500 group-hover:w-20" />

            {/* Services list */}
            <ul className="space-y-3">
              {services.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3 font-body text-body-sm text-ink-500"
                >
                  <span className="w-1 h-1 bg-burgundy-900/40 rounded-full" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export function Services() {
  return (
    <section className="py-section bg-cream-50">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <SectionReveal>
            <span className="font-body text-sm font-medium text-burgundy-900/60 tracking-[0.2em] block mb-6">
              WHAT WE DO
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-lg text-ink-900 max-w-3xl">
              Two sides of the same{" "}
              <span className="text-burgundy-900 italic">beautiful</span> coin
            </h2>
          </SectionReveal>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard
            title="Paper Services"
            subtitle="TANGIBLE ELEGANCE"
            services={paperServices}
            index={0}
          />
          <ServiceCard
            title="Website Services"
            subtitle="DIGITAL EXPERIENCE"
            services={websiteServices}
            index={1}
          />
        </div>

        {/* Bottom note */}
        <SectionReveal delay={0.5}>
          <p className="mt-16 text-center font-body text-body-sm text-ink-500 max-w-2xl mx-auto">
            Each package is tailored to your unique vision. Mix and match, or
            let us handle everything—the choice is yours.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
