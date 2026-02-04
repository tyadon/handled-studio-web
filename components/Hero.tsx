"use client";

import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 600"
        className="w-full h-auto max-w-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer decorative circle */}
        <motion.circle
          cx="250"
          cy="300"
          r="230"
          stroke="#700c0c"
          strokeWidth="1"
          strokeDasharray="8 8"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.2, rotate: 360 }}
          transition={{ opacity: { duration: 1, delay: 0.8 }, rotate: { duration: 120, repeat: Infinity, ease: "linear" } }}
        />

        {/* Inner decorative circle */}
        <motion.circle
          cx="250"
          cy="300"
          r="180"
          stroke="#700c0c"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Scalloped badge/seal background */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <path
            d="M250 80
               C265 80, 275 95, 285 95 C295 95, 305 80, 320 80
               C335 80, 345 95, 355 100 C365 105, 380 100, 390 110
               C400 120, 400 135, 405 145 C410 155, 425 160, 425 175
               C425 190, 410 200, 410 215 C410 230, 425 240, 420 255
               C415 270, 400 275, 395 290 C390 305, 400 320, 390 335
               C380 350, 365 350, 355 360 C345 370, 345 385, 330 390
               C315 395, 305 385, 290 385 C275 385, 265 400, 250 400
               C235 400, 225 385, 210 385 C195 385, 185 395, 170 390
               C155 385, 155 370, 145 360 C135 350, 120 350, 110 335
               C100 320, 110 305, 105 290 C100 275, 85 270, 80 255
               C75 240, 90 230, 90 215 C90 200, 75 190, 75 175
               C75 160, 90 155, 95 145 C100 135, 100 120, 110 110
               C120 100, 135 105, 145 100 C155 95, 165 80, 180 80
               C195 80, 205 95, 215 95 C225 95, 235 80, 250 80Z"
            fill="#e7e3dd"
            stroke="#700c0c"
            strokeWidth="2"
          />
        </motion.g>

        {/* Envelope body */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x="155"
            y="200"
            width="190"
            height="130"
            rx="4"
            fill="#e7e3dd"
            stroke="#700c0c"
            strokeWidth="1.5"
          />

          {/* Envelope flap */}
          <path
            d="M155 200 L250 270 L345 200"
            fill="none"
            stroke="#700c0c"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Envelope inner shadow line */}
          <path
            d="M160 205 L250 265 L340 205"
            fill="none"
            stroke="#700c0c"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </motion.g>

        {/* Letter/card coming out of envelope */}
        <motion.g
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x="175"
            y="140"
            width="150"
            height="100"
            rx="2"
            fill="#FFFFFF"
            stroke="#700c0c"
            strokeWidth="1"
          />

          {/* Letter lines */}
          <line x1="195" y1="165" x2="305" y2="165" stroke="#700c0c" strokeWidth="0.5" opacity="0.4" />
          <line x1="195" y1="180" x2="305" y2="180" stroke="#700c0c" strokeWidth="0.5" opacity="0.4" />
          <line x1="195" y1="195" x2="280" y2="195" stroke="#700c0c" strokeWidth="0.5" opacity="0.4" />
          <line x1="195" y1="210" x2="260" y2="210" stroke="#700c0c" strokeWidth="0.5" opacity="0.4" />
        </motion.g>

        {/* Wax seal */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx="250" cy="295" r="28" fill="#700c0c" />
          <circle cx="250" cy="295" r="22" fill="none" stroke="#e7e3dd" strokeWidth="1" opacity="0.4" />
          {/* H monogram */}
          <text
            x="250"
            y="303"
            textAnchor="middle"
            fill="#e7e3dd"
            fontSize="24"
            fontFamily="var(--font-perandory)"
            fontStyle="italic"
          >
            H
          </text>
        </motion.g>

        {/* Decorative ribbon */}
        <motion.path
          d="M220 320 Q200 340, 180 380 Q175 395, 190 390 Q210 385, 220 360"
          fill="none"
          stroke="#700c0c"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.6 }}
        />
        <motion.path
          d="M280 320 Q300 340, 320 380 Q325 395, 310 390 Q290 385, 280 360"
          fill="none"
          stroke="#700c0c"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.6 }}
        />

        {/* Sparkle elements */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {/* Top left sparkle */}
          <motion.g
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M120 150 L123 157 L130 160 L123 163 L120 170 L117 163 L110 160 L117 157 Z" fill="#700c0c" />
          </motion.g>

          {/* Top right sparkle */}
          <motion.g
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <path d="M380 130 L382 135 L387 137 L382 139 L380 144 L378 139 L373 137 L378 135 Z" fill="#700c0c" />
          </motion.g>

          {/* Bottom sparkle */}
          <motion.g
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <path d="M350 420 L353 427 L360 430 L353 433 L350 440 L347 433 L340 430 L347 427 Z" fill="#700c0c" />
          </motion.g>

          {/* Small dots */}
          <circle cx="140" cy="380" r="2" fill="#700c0c" opacity="0.3" />
          <circle cx="370" cy="200" r="2" fill="#700c0c" opacity="0.3" />
          <circle cx="100" cy="280" r="1.5" fill="#700c0c" opacity="0.2" />
          <circle cx="400" cy="350" r="1.5" fill="#700c0c" opacity="0.2" />
        </motion.g>

        {/* Curved text path */}
        <defs>
          <path
            id="textCircle"
            d="M250 300 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"
            fill="none"
          />
        </defs>
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 2 }}
          fill="#700c0c"
          fontSize="11"
          letterSpacing="6"
          fontFamily="var(--font-amoresa)"
        >
          <textPath href="#textCircle" startOffset="12%">
            YOUR PAPER + WEBSITE CONCIERGE
          </textPath>
        </motion.text>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream-100">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/4 -left-20 w-[30%] h-px bg-burgundy-900/5 origin-left rotate-12"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-1/3 -right-20 w-[25%] h-px bg-burgundy-900/5 origin-right -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left column - Typography */}
          <div className="pt-20 md:pt-0">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 md:mb-12"
            >
              <span className="font-accent text-caption text-burgundy-900/70 tracking-[0.2em]">
                WEDDING CONCIERGE SERVICES
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-display-xl text-ink-900 font-light"
              >
                Your Paper
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-4 md:gap-8"
              >
                <span className="font-display text-display-xl text-ink-900 font-light">
                  +
                </span>
                <span className="font-display text-display-xl text-ink-900 font-light">
                  Website
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-display-xl text-burgundy-900 font-semibold italic"
              >
                Concierge
              </motion.h1>

              {/* Decorative line under concierge */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-burgundy-900 w-48 md:w-72 mt-4 origin-left"
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-12 md:mt-16 max-w-md font-body text-body-md text-ink-500"
            >
              Bespoke wedding invitations and custom websites, crafted with care.
              We handle every detail so you can focus on what matters.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-accent text-caption text-burgundy-900 tracking-[0.15em] group"
              >
                <span>BEGIN YOUR JOURNEY</span>
                <span className="w-8 h-px bg-burgundy-900 transition-all duration-500 group-hover:w-12" />
              </a>
            </motion.div>
          </div>

          {/* Right column - Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-accent text-[0.6875rem] tracking-[0.2em] text-ink-500 rotate-90 origin-center translate-y-6">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-burgundy-900/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
