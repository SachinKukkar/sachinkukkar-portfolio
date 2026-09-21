import { motion } from 'framer-motion';
import { Activity, Brain, Eye, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Paperclip } from './Paperclip';

const TONES = {
  purple: { bg: '#f1eefc', accent: '#8168fd' },
  pink: { bg: '#f4eaf5', accent: '#ec68fd' },
  green: { bg: '#f4f8e8', accent: '#93ba06' },
  blue: { bg: '#e5f2fa', accent: '#039cfb' },
} as const;

const ICONS: Record<string, LucideIcon> = { eye: Eye, brain: Brain, activity: Activity };

export type StickerTone = keyof typeof TONES;

type Props = {
  label: string;
  tone?: StickerTone;
  icon?: keyof typeof ICONS;
  rotate?: number;
  delay?: number;
  scale?: number;
  className?: string;
};

/**
 * The rotated chip-with-icon-and-paperclip that repeats all over the design.
 * Figma: Title-Chip (7.44px radius, 0 0 10px rgba(0,0,0,.04)) + Chip-Icon
 * (white 1px ring, drop-shadow -2px 3px 1px rgba(0,0,0,.24)) + Paper-clip.
 */
export function StickerLabel({
  label,
  tone = 'purple',
  icon = 'eye',
  rotate = -12,
  delay = 0,
  scale = 1,
  className,
}: Props) {
  const { bg, accent } = TONES[tone];
  const Icon = ICONS[icon] ?? Eye;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, rotate: rotate - 10, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, rotate, scale }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 160, damping: 16, delay }}
      whileHover={{ rotate: rotate + 4, scale: scale * 1.06 }}
      className={cn('relative inline-block origin-center select-none', className)}
      style={{ transformOrigin: 'center' }}
    >
      <div
        className="flex h-[39px] items-center rounded-chip pl-[38px] pr-[14px] shadow-chip"
        style={{ backgroundColor: bg }}
      >
        <span className="whitespace-nowrap font-body text-[14.9px] font-semibold leading-[17.86px] text-ink-700">
          {label}
        </span>
      </div>

      <div
        className="absolute -top-[9px] left-[5px] grid size-[33px] place-items-center rounded-full ring-1 ring-white"
        style={{
          backgroundColor: accent,
          filter: 'drop-shadow(-2px 3px 1px rgba(0,0,0,.24))',
        }}
      >
        <Icon size={16} strokeWidth={2.2} className="text-white" />
      </div>

      <Paperclip color={accent} className="absolute left-[34px] top-[1px] h-[20px] w-[19px]" />
    </motion.div>
  );
}
