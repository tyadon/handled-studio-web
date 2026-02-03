"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cream-100/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-10">
            <h1 className="font-display text-xl md:text-2xl text-burgundy-900">
              <span className="italic font-medium">Handled</span>
              <span className="font-light">.Studio</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-accent text-caption text-ink-600 tracking-[0.1em] hover:text-burgundy-900 transition-colors duration-300 link-underline"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex font-accent text-caption text-burgundy-900 tracking-[0.1em] border border-burgundy-900 px-5 py-2.5 hover:bg-burgundy-900 hover:text-cream-50 transition-all duration-300"
          >
            GET STARTED
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-px bg-burgundy-900" />
              <span className="w-6 h-px bg-burgundy-900" />
            </div>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
