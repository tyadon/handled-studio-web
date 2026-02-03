"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-accent uppercase tracking-[0.15em] overflow-hidden transition-all duration-500 ease-luxury";

  const variants = {
    primary:
      "bg-burgundy-900 text-cream-50 hover:bg-burgundy-800 border border-burgundy-900",
    secondary:
      "bg-cream-100 text-burgundy-900 hover:bg-cream-200 border border-burgundy-900",
    outline:
      "bg-transparent text-burgundy-900 border border-burgundy-900 hover:bg-burgundy-900 hover:text-cream-50",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-sm",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
