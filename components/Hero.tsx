'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { BotanicalAccent } from './BotanicalAccent';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? 'show' : 'hidden';

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32"
    >
      {/* Botanical accents - hidden on small screens to keep mobile clean */}
      <BotanicalAccent
        variant="branch-left"
        className="hidden md:block absolute -left-8 top-24 w-56 lg:w-72 text-primary/30 pointer-events-none"
      />
      <BotanicalAccent
        variant="branch-right"
        className="hidden md:block absolute -right-8 bottom-12 w-60 lg:w-80 text-primary/25 pointer-events-none"
      />

      {/* Soft radial wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(107, 122, 90, 0.07) 0%, transparent 60%)',
        }}
      />

      <motion.div
        variants={container}
        initial={initial}
        animate="show"
        className="relative mx-auto max-w-content px-6 md:px-10 text-center"
      >
        <motion.p
          variants={item}
          className="font-sans text-xs uppercase tracking-eyebrow text-primary mb-7"
        >
          Agroturystyka · Mazury
        </motion.p>

        <motion.h1
          variants={item}
          id="hero-title"
          className="font-serif font-medium text-foreground text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.01em] max-w-4xl mx-auto"
        >
          Siedlisko{' '}
          <span className="italic text-primary font-normal">po nowemu</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 mx-auto max-w-xl text-base md:text-lg leading-[1.75] text-muted-fg"
        >
          Cisza, drewno i otwarta przestrzeń. Miejsce, do którego wraca się
          powietrzem — odzyskana stodoła w nowoczesnym duchu, z dala od
          miejskiego zgiełku.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center justify-center min-h-[48px] px-7 bg-accent text-white font-sans text-sm tracking-wide hover:bg-[color:var(--accent-dark)] transition-colors duration-300 ease-out-soft"
          >
            Sprawdź wolne terminy
            <span
              aria-hidden
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center justify-center min-h-[48px] px-7 border border-primary/40 text-primary font-sans text-sm tracking-wide hover:bg-primary hover:text-white transition-colors duration-300 ease-out-soft"
          >
            Zobacz miejsce
          </a>
        </motion.div>

        {/* Ribbon */}
        <motion.div
          variants={item}
          className="mt-16 inline-flex items-center gap-4 px-5 py-3 bg-surface/70 border border-border/70"
        >
          <span className="block w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-sans text-xs md:text-sm tracking-wide text-foreground/85">
            Aktualnie: długi weekend czerwcowy ·{' '}
            <span className="font-medium">04–07.06</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 1 : 0.6 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-sans text-[10px] uppercase tracking-eyebrow text-muted-fg">
          Przewiń
        </span>
        <span className="block w-px h-10 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
