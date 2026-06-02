'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Variant = 'branch-left' | 'branch-right' | 'sprig';

type Props = {
  variant?: Variant;
  className?: string;
};

const paths: Record<Variant, JSX.Element> = {
  'branch-left': (
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none">
      <path d="M10 110 C 30 80, 50 70, 90 50" />
      <path d="M30 92 q -8 -10 -4 -22" />
      <path d="M48 78 q -10 -6 -8 -22" />
      <path d="M68 64 q -8 -10 -2 -24" />
      <path d="M88 52 q -10 -8 -6 -22" />
      <ellipse cx="22" cy="74" rx="6" ry="3" transform="rotate(-30 22 74)" />
      <ellipse cx="42" cy="60" rx="7" ry="3.2" transform="rotate(-32 42 60)" />
      <ellipse cx="62" cy="46" rx="7" ry="3.2" transform="rotate(-34 62 46)" />
      <ellipse cx="82" cy="32" rx="6.5" ry="3" transform="rotate(-36 82 32)" />
    </g>
  ),
  'branch-right': (
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none">
      <path d="M110 110 C 90 80, 70 70, 30 50" />
      <path d="M90 92 q 8 -10 4 -22" />
      <path d="M72 78 q 10 -6 8 -22" />
      <path d="M52 64 q 8 -10 2 -24" />
      <path d="M32 52 q 10 -8 6 -22" />
      <ellipse cx="98" cy="74" rx="6" ry="3" transform="rotate(30 98 74)" />
      <ellipse cx="78" cy="60" rx="7" ry="3.2" transform="rotate(32 78 60)" />
      <ellipse cx="58" cy="46" rx="7" ry="3.2" transform="rotate(34 58 46)" />
      <ellipse cx="38" cy="32" rx="6.5" ry="3" transform="rotate(36 38 32)" />
    </g>
  ),
  sprig: (
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none">
      <path d="M60 110 Q 60 70 60 30" />
      <path d="M60 90 q -10 -4 -14 -16" />
      <path d="M60 70 q 10 -4 14 -16" />
      <path d="M60 50 q -10 -4 -14 -16" />
      <ellipse cx="44" cy="78" rx="6" ry="3" transform="rotate(-50 44 78)" />
      <ellipse cx="76" cy="58" rx="6" ry="3" transform="rotate(50 76 58)" />
      <ellipse cx="44" cy="38" rx="6" ry="3" transform="rotate(-50 44 38)" />
    </g>
  ),
};

export function BotanicalAccent({ variant = 'branch-left', className }: Props) {
  const reduce = useReducedMotion();

  const animation = reduce
    ? undefined
    : {
        animate: {
          y: [0, -4, 0],
          rotate: [0, variant === 'branch-right' ? 1.2 : -1.2, 0],
        },
        transition: {
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        },
      };

  return (
    <motion.svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      {...animation}
    >
      {paths[variant]}
    </motion.svg>
  );
}
