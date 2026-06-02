'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

type Tile = {
  id: string;
  label: string;
  className: string; // grid placement
  palette: { sky: string; ground: string; accent: string };
  kind: 'cottage' | 'interior' | 'kitchen' | 'bath' | 'field' | 'fire';
};

const tiles: Tile[] = [
  {
    id: 't1',
    label: 'Widok od strony łąki',
    className: 'md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[480px]',
    palette: { sky: '#E9E4D2', ground: '#A8AE8A', accent: '#6B7A5A' },
    kind: 'cottage',
  },
  {
    id: 't2',
    label: 'Salon o poranku',
    className: 'md:col-span-5 aspect-[4/3]',
    palette: { sky: '#F2EDDE', ground: '#D9D2C0', accent: '#B47B49' },
    kind: 'interior',
  },
  {
    id: 't3',
    label: 'Kuchnia z widokiem',
    className: 'md:col-span-5 aspect-[4/3]',
    palette: { sky: '#EFE9D7', ground: '#C5C5A6', accent: '#6B7A5A' },
    kind: 'kitchen',
  },
  {
    id: 't4',
    label: 'Łazienka, prosto',
    className: 'md:col-span-4 aspect-square',
    palette: { sky: '#F2EDDE', ground: '#E2DAC4', accent: '#8E5E33' },
    kind: 'bath',
  },
  {
    id: 't5',
    label: 'Pole tuż za płotem',
    className: 'md:col-span-4 aspect-square',
    palette: { sky: '#E5DFC9', ground: '#9AA37A', accent: '#4F5A43' },
    kind: 'field',
  },
  {
    id: 't6',
    label: 'Wieczór przy ognisku',
    className: 'md:col-span-4 aspect-square',
    palette: { sky: '#2A2F2A', ground: '#1A1F1A', accent: '#B47B49' },
    kind: 'fire',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function TileArt({ kind, palette }: { kind: Tile['kind']; palette: Tile['palette'] }) {
  const { sky, ground, accent } = palette;

  switch (kind) {
    case 'cottage':
      return (
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
          <rect width="400" height="300" fill={sky} />
          <path d="M0 200 Q 120 180 240 195 T 400 192 L 400 300 L 0 300 Z" fill={ground} opacity="0.55" />
          <path d="M0 230 L 400 230 L 400 300 L 0 300 Z" fill={ground} />
          <g transform="translate(140 110)">
            <path d="M0 60 L 60 0 L 120 60 L 120 140 L 0 140 Z" fill={accent} />
            <rect x="50" y="90" width="22" height="50" fill="#2A2F2A" />
            <rect x="14" y="76" width="22" height="22" fill="#FAF7F0" />
            <rect x="84" y="76" width="22" height="22" fill="#FAF7F0" />
            <rect x="86" y="20" width="10" height="22" fill="#4F5A43" />
          </g>
          <ellipse cx="50" cy="220" rx="22" ry="40" fill="#4F5A43" opacity="0.7" />
          <ellipse cx="360" cy="218" rx="26" ry="46" fill="#4F5A43" opacity="0.75" />
        </svg>
      );
    case 'interior':
      return (
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
          <rect width="400" height="300" fill={sky} />
          {/* Wall + floor */}
          <rect y="200" width="400" height="100" fill={ground} />
          {/* Window with light beam */}
          <rect x="60" y="50" width="100" height="120" fill="#FAF7F0" stroke="#4F5A43" strokeWidth="1.5" />
          <path d="M80 80 L 140 80 M 80 110 L 140 110 M 110 50 L 110 170" stroke="#4F5A43" strokeWidth="1" />
          <path d="M60 50 L 240 230 L 60 230 Z" fill="#FAF7F0" opacity="0.25" />
          {/* Sofa */}
          <rect x="220" y="170" width="150" height="50" fill={accent} opacity="0.85" />
          <rect x="220" y="155" width="150" height="20" fill={accent} />
          {/* Cushion */}
          <rect x="240" y="175" width="30" height="22" fill="#FAF7F0" opacity="0.5" />
          {/* Plant */}
          <g transform="translate(190 150)">
            <rect x="-8" y="50" width="16" height="20" fill="#8E5E33" />
            <path d="M0 50 q -20 -15 -22 -45 q 15 5 22 30 q 18 -25 30 -30 q -10 28 -20 45" fill="#6B7A5A" />
          </g>
        </svg>
      );
    case 'kitchen':
      return (
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
          <rect width="400" height="300" fill={sky} />
          <rect y="220" width="400" height="80" fill={ground} opacity="0.6" />
          {/* Counter */}
          <rect x="30" y="160" width="340" height="20" fill="#D9D2C0" />
          {/* Cabinets */}
          <rect x="30" y="180" width="340" height="80" fill={accent} opacity="0.6" />
          <line x1="115" y1="180" x2="115" y2="260" stroke="#4F5A43" strokeWidth="1" />
          <line x1="200" y1="180" x2="200" y2="260" stroke="#4F5A43" strokeWidth="1" />
          <line x1="285" y1="180" x2="285" y2="260" stroke="#4F5A43" strokeWidth="1" />
          {/* Pendant lamp */}
          <line x1="200" y1="20" x2="200" y2="80" stroke="#4F5A43" strokeWidth="1" />
          <path d="M180 80 L 220 80 L 215 110 L 185 110 Z" fill="#B47B49" />
          {/* Cup */}
          <rect x="130" y="142" width="20" height="18" rx="2" fill="#FAF7F0" stroke="#4F5A43" strokeWidth="1" />
          <path d="M150 146 q 8 0 8 6 q 0 6 -8 6" stroke="#4F5A43" strokeWidth="1" fill="none" />
          {/* Vase + branch */}
          <ellipse cx="270" cy="158" rx="10" ry="4" fill="#4F5A43" />
          <path d="M270 158 q -4 -30 -10 -45 M 270 158 q 6 -25 14 -40" stroke="#6B7A5A" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case 'bath':
      return (
        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
          <rect width="300" height="300" fill={sky} />
          {/* Tiles */}
          <g stroke="#D9D2C0" strokeWidth="0.5" opacity="0.6">
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="300" y2={i * 50} />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
            ))}
          </g>
          {/* Tub */}
          <rect x="40" y="170" width="220" height="80" rx="40" fill="#FAF7F0" stroke="#4F5A43" strokeWidth="1.5" />
          {/* Water hint */}
          <rect x="50" y="180" width="200" height="50" rx="30" fill={ground} opacity="0.4" />
          {/* Faucet */}
          <path d="M260 160 L 260 180 L 250 180" stroke={accent} strokeWidth="2" fill="none" />
          {/* Towel */}
          <rect x="60" y="60" width="40" height="80" fill={accent} opacity="0.85" />
        </svg>
      );
    case 'field':
      return (
        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
          <rect width="300" height="300" fill={sky} />
          <path d="M0 160 Q 80 140 150 155 T 300 150 L 300 300 L 0 300 Z" fill={ground} opacity="0.55" />
          <path d="M0 220 L 300 220 L 300 300 L 0 300 Z" fill={ground} />
          {/* Grass blades */}
          <g stroke={accent} strokeWidth="1" fill="none" opacity="0.8">
            {Array.from({ length: 18 }).map((_, i) => {
              const x = (i * 17) % 300;
              const y = 240 + ((i * 7) % 30);
              return <path key={i} d={`M${x} ${y + 10} Q ${x + 2} ${y - 6} ${x + 4} ${y - 18}`} />;
            })}
          </g>
          {/* Distant tree */}
          <ellipse cx="220" cy="180" rx="14" ry="28" fill="#4F5A43" opacity="0.7" />
        </svg>
      );
    case 'fire':
      return (
        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
          <rect width="300" height="300" fill={sky} />
          {/* Ground */}
          <ellipse cx="150" cy="240" rx="120" ry="14" fill={ground} />
          {/* Logs */}
          <g stroke={accent} strokeWidth="3" strokeLinecap="round">
            <line x1="95" y1="232" x2="205" y2="232" stroke="#8E5E33" />
            <line x1="105" y1="225" x2="195" y2="225" stroke="#6B4A2A" />
            <line x1="115" y1="218" x2="185" y2="218" stroke="#8E5E33" />
          </g>
          {/* Flame */}
          <g>
            <path
              d="M150 220 Q 130 180 145 150 Q 155 175 170 160 Q 175 195 165 215 Q 158 222 150 220 Z"
              fill={accent}
              opacity="0.95"
            />
            <path
              d="M150 215 Q 140 195 150 175 Q 156 190 162 180 Q 165 200 158 212 Z"
              fill="#FAF7F0"
              opacity="0.5"
            />
          </g>
          {/* Sparks */}
          <g fill={accent}>
            <circle cx="120" cy="150" r="1.5" />
            <circle cx="180" cy="130" r="1" />
            <circle cx="160" cy="100" r="1.5" />
            <circle cx="200" cy="160" r="1" />
          </g>
          {/* Stars */}
          <g fill="#FAF7F0" opacity="0.6">
            <circle cx="50" cy="50" r="0.8" />
            <circle cx="80" cy="30" r="0.6" />
            <circle cx="240" cy="60" r="0.8" />
            <circle cx="270" cy="40" r="0.6" />
          </g>
        </svg>
      );
  }
}

export function Gallery() {
  const reduce = useReducedMotion();

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-title"
      className="relative py-24 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-sans text-xs uppercase tracking-eyebrow text-primary mb-6">
            Galeria
          </p>
          <h2
            id="gallery-title"
            className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-foreground"
          >
            Zajrzyj{' '}
            <span className="italic text-primary">do środka</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-[1.7] text-muted-fg">
            Sześć kadrów, które najwięcej mówią o miejscu. Reszta — kiedy
            tylko nas odwiedzisz.
          </p>
        </div>

        <motion.div
          variants={container}
          initial={reduce ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4"
        >
          {tiles.map((tile) => (
            <motion.figure
              key={tile.id}
              variants={item}
              className={`group relative overflow-hidden ${tile.className}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]">
                <TileArt kind={tile.kind} palette={tile.palette} />
              </div>
              {/* Vignette */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-serif italic text-sm md:text-base text-white/95">
                  {tile.label}
                </span>
                <span
                  className="font-sans text-[10px] uppercase tracking-eyebrow text-white/75 translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400"
                  aria-hidden
                >
                  ↗
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
