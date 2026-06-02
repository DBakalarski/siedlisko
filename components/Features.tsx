'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Leaf, Home, Coffee } from 'lucide-react';
import type { ReactNode } from 'react';

const features: { icon: ReactNode; title: string; body: string; idx: string }[] = [
  {
    idx: '01',
    icon: <Leaf strokeWidth={1.4} className="w-7 h-7" />,
    title: 'Puszcza tuż za płotem',
    body: 'Las pełen jagód i grzybów, pobliska stajnia z przejażdżkami konnymi i okolica, w której wciąż słychać czaple oraz żaby przy stawie.',
  },
  {
    idx: '02',
    icon: <Home strokeWidth={1.4} className="w-7 h-7" />,
    title: 'Dom dla całej grupy',
    body: 'Dwanaście miejsc noclegowych, dwie łazienki, świetnie wyposażona kuchnia i duży wspólny stół — całe siedlisko tylko dla Was.',
  },
  {
    idx: '03',
    icon: <Coffee strokeWidth={1.4} className="w-7 h-7" />,
    title: 'Wolny rytm dnia',
    body: 'Hamak w sadzie, taras na wieczorne rozmowy, rower do najbliższej wsi. Po drodze — Olędrzy, ruda darniowa i historia okolicy.',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Features() {
  const reduce = useReducedMotion();

  return (
    <section
      id="udogodnienia"
      aria-labelledby="features-title"
      className="relative py-24 md:py-36 bg-surface/50"
    >
      <div className="hairline absolute top-0 inset-x-0" />
      <div className="hairline absolute bottom-0 inset-x-0" />

      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-sans text-xs uppercase tracking-eyebrow text-primary mb-6">
            Udogodnienia
          </p>
          <h2
            id="features-title"
            className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-foreground"
          >
            Trzy powody, dla których{' '}
            <span className="italic text-primary">tu się wraca</span>.
          </h2>
        </div>

        <motion.ul
          variants={container}
          initial={reduce ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/70"
        >
          {features.map((f) => (
            <motion.li
              key={f.idx}
              variants={card}
              className="group relative bg-background p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-start justify-between mb-10 md:mb-14">
                <div className="text-primary transition-transform duration-500 ease-out-soft group-hover:-translate-y-1">
                  {f.icon}
                </div>
                <span className="font-serif italic text-muted-fg/60 text-sm">
                  {f.idx}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-[1.2] text-foreground mb-4">
                {f.title}
              </h3>
              <p className="text-base leading-[1.7] text-muted-fg">{f.body}</p>

              {/* Hover hairline */}
              <span
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 origin-left transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
