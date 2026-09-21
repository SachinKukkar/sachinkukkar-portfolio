import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, Plus } from 'lucide-react';
import { useId, useState } from 'react';
import { faqs, type Faq } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { cn } from '@/lib/cn';

const TONE_BG: Record<Faq['tone'], string> = {
  rose: '#fedcdd',
  mint: '#c7f8d9',
  sand: '#f3ea9a',
  blue: '#bbdafe',
  lime: '#e0fd72',
};

/**
 * Desktop scatter positions mirror the Figma layout: chips orbit the heading.
 * Below `lg` they collapse into a plain single column.
 */
const SCATTER = [
  'lg:absolute lg:left-[3%] lg:top-[2%] lg:w-[310px] lg:-rotate-2',
  'lg:absolute lg:right-[3%] lg:top-[7%] lg:w-[330px] lg:rotate-2',
  'lg:absolute lg:left-[0%] lg:top-[44%] lg:w-[300px] lg:rotate-1',
  'lg:absolute lg:right-[0%] lg:top-[50%] lg:w-[340px] lg:-rotate-1',
  'lg:absolute lg:left-1/2 lg:top-[80%] lg:w-[330px] lg:-translate-x-1/2 lg:rotate-2',
];

export function Faqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative bg-white py-24 sm:py-28">
      <div className="shell">
        <div className="relative lg:min-h-[720px]">
          {/* Heading sits in the middle of the scatter */}
          <SectionHeading
            badge="FAQs"
            icon={HelpCircle}
            lines={['ANSWERS BEFORE', 'WE START']}
            badgeOffset={230}
            className="max-w-[620px] lg:absolute lg:left-1/2 lg:top-[34%] lg:w-[620px] lg:-translate-x-1/2"
          />

          <div className="mt-14 flex flex-col gap-4 lg:mt-0 lg:block">
            {faqs.map((faq, i) => (
              <FaqChip
                key={faq.q}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
                className={SCATTER[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqChip({
  faq,
  index,
  isOpen,
  onToggle,
  className,
}: {
  faq: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const panelId = useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 130, damping: 17, delay: index * 0.08 }}
      className={cn('z-10 w-full', className, isOpen && 'lg:z-30')}
    >
      <motion.div
        animate={isOpen ? { rotate: 0, scale: 1.02 } : {}}
        className="overflow-hidden rounded-card shadow-hard-lg"
        style={{ backgroundColor: TONE_BG[faq.tone] }}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 p-6 text-left"
        >
          <span className="font-display text-[17px] font-medium leading-[1.4] tracking-[-0.38px] text-ink-900 sm:text-[19px]">
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="grid size-6 shrink-0 place-items-center"
          >
            <Plus size={22} strokeWidth={2.2} className="text-ink-900" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="border-t border-black/[.08] px-6 pb-6 pt-4 font-body text-[14px] leading-[1.62] text-ink-900/75">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
