'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: 'section' | 'div' | 'header' | 'footer';
  'aria-labelledby'?: string;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

export function MotionSection({
  children,
  className,
  id,
  delay = 0,
  as = 'section',
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.section;

  if (reduce) {
    const Tag = as;
    return (
      <Tag id={id} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
