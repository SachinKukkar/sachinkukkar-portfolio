import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Paperclip } from './Paperclip';

/**
 * The blue "About / Projects / Reviews / FAQs" tab that overlaps each heading.
 * Figma: Title-Chip #e5f2fa + Chip-Icon #039cfb, rotated ~-18°..-23°.
 */
export function SectionBadge({
  label,
  icon: Icon,
  className,
}: {
  label: string;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -34, y: 14, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: -19, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={cn('relative inline-block origin-bottom-left select-none', className)}
    >
      <div className="flex h-[49px] items-center rounded-chip bg-chip-bg pl-[48px] pr-[18px] shadow-chip">
        <span className="whitespace-nowrap font-body text-[18.6px] font-semibold leading-[22.32px] text-ink-700">
          {label}
        </span>
      </div>

      <div
        className="absolute -top-[10px] left-[6px] grid size-[41px] place-items-center rounded-full bg-chip-icon ring-1 ring-white"
        style={{ filter: 'drop-shadow(-2px 3px 1px rgba(0,0,0,.24))' }}
      >
        <Icon size={20} strokeWidth={2.2} className="text-white" />
      </div>

      <Paperclip color="#039cfb" className="absolute left-[42px] top-[2px] h-[25px] w-[24px]" />
    </motion.div>
  );
}
