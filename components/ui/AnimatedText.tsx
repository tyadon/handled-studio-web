"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  animation?: "words" | "chars" | "lines" | "fade";
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedText({
  children,
  className,
  delay = 0,
  staggerChildren = 0.05,
  as: Component = "div",
  animation = "words",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px -5% 0px" });

  if (animation === "fade") {
    return (
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeVariants}
        transition={{ delay }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }

  if (animation === "words" && typeof children === "string") {
    const words = children.split(" ");

    return (
      <Component
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className={cn(className)}
      >
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          custom={staggerChildren}
          transition={{ delay }}
          className="inline"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeVariants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
