"use client";

import { SectionReveal } from "./ui/SectionReveal";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Emma & James",
    category: "Paper + Website",
    aspect: "portrait",
  },
  {
    id: 2,
    title: "Sofia & Michael",
    category: "Invitation Suite",
    aspect: "landscape",
  },
  {
    id: 3,
    title: "Olivia & William",
    category: "Wedding Website",
    aspect: "square",
  },
  {
    id: 4,
    title: "Charlotte & Henry",
    category: "Full Package",
    aspect: "portrait",
  },
];

function PortfolioItem({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const aspectClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
  };

  return (
    <SectionReveal delay={0.1 + index * 0.1}>
      <motion.div
        className="group relative cursor-pointer"
        whileHover="hover"
        initial="rest"
      >
        {/* Image placeholder */}
        <div
          className={`relative overflow-hidden bg-blush-200 ${aspectClasses[item.aspect as keyof typeof aspectClasses]}`}
        >
          {/* Placeholder pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border border-burgundy-900/10 rounded-full flex items-center justify-center">
              <span className="font-display text-4xl text-burgundy-900/20 italic">
                {item.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-burgundy-900/80 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="font-accent text-caption text-cream-100/70 tracking-[0.15em] block mb-2">
                VIEW PROJECT
              </span>
              <motion.div
                variants={{
                  rest: { width: 0 },
                  hover: { width: 48 },
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="h-px bg-cream-100/50 mx-auto"
              />
            </div>
          </motion.div>

          {/* Zoom effect on image area */}
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          />
        </div>

        {/* Info */}
        <div className="mt-5">
          <span className="font-accent text-[0.6875rem] text-burgundy-900/50 tracking-[0.15em] block mb-1">
            {item.category.toUpperCase()}
          </span>
          <h3 className="font-display text-xl text-ink-900 font-medium">
            {item.title}
          </h3>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

export function Portfolio() {
  return (
    <section className="py-section bg-cream-50">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <div>
            <SectionReveal>
              <span className="font-accent text-caption text-burgundy-900/60 tracking-[0.2em] block mb-6">
                OUR WORK
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-display text-display-lg text-ink-900 max-w-xl">
                Stories we&apos;ve helped{" "}
                <span className="text-burgundy-900 italic">tell</span>
              </h2>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <a
              href="#"
              className="inline-flex items-center gap-3 font-accent text-caption text-burgundy-900 tracking-[0.15em] group"
            >
              <span>VIEW ALL PROJECTS</span>
              <span className="w-8 h-px bg-burgundy-900 transition-all duration-500 group-hover:w-12" />
            </a>
          </SectionReveal>
        </div>

        {/* Portfolio grid - editorial asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* First item - large */}
          <div className="lg:col-span-7">
            <PortfolioItem item={portfolioItems[0]} index={0} />
          </div>

          {/* Second item - smaller, offset */}
          <div className="lg:col-span-5 lg:pt-24">
            <PortfolioItem item={portfolioItems[1]} index={1} />
          </div>

          {/* Third item - medium */}
          <div className="lg:col-span-5">
            <PortfolioItem item={portfolioItems[2]} index={2} />
          </div>

          {/* Fourth item - medium, offset */}
          <div className="lg:col-span-7 lg:-mt-16">
            <PortfolioItem item={portfolioItems[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
