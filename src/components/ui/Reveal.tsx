import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

const DIRS = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none: { y: 0, x: 0 },
} as const;

export function Reveal({
  children,
  delay = 0,
  dir = 'up',
  amount = 0.25,
  className,
}: {
  children: ReactNode;
  delay?: number;
  dir?: keyof typeof DIRS;
  amount?: number;
  className?: string;
}) {
  const offset = DIRS[dir];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075 } },
};

const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0, rotate: 4 },
  show: {
    y: '0%',
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Masked line-by-line headline reveal. Each line is a clipping row so the
 * words slide up from underneath rather than fading in place.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = 'h2',
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}) {
  return (
    <motion.div
      variants={lineVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delayChildren: delay }}
      className={cn('flex flex-col', className)}
    >
      <Tag className="contents">
        {lines.map((line, i) => (
          <span key={`${line}-${i}`} className="block overflow-hidden pb-[0.08em]">
            <motion.span variants={wordVariants} className={cn('block', lineClassName)}>
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
