import { motion } from 'framer-motion';
import {
  Atom,
  Boxes,
  BrainCircuit,
  Eye,
  ScanLine,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { capabilities, skills, type Capability } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const ICONS: Record<Capability['icon'], LucideIcon> = {
  eye: Eye,
  scan: ScanLine,
  brain: BrainCircuit,
  boxes: Boxes,
  atom: Atom,
};

export function Capabilities() {
  return (
    <section id="skills" className="relative bg-white py-24 sm:py-28">
      <div className="shell">
        <SectionHeading
          badge="Skills"
          icon={Sparkles}
          lines={['WHERE I', 'CAN HELP YOU']}
          badgeOffset={250}
        />

        <div className="mx-auto mt-14 flex max-w-[1152px] flex-col gap-4">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.title} cap={cap} index={i} />
          ))}
        </div>

        <SkillMarquee />
      </div>
    </section>
  );
}

function CapabilityRow({ cap, index }: { cap: Capability; index: number }) {
  const Icon = ICONS[cap.icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 ? 48 : -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
      className="group relative flex items-center justify-between gap-6 rounded-card p-6 shadow-hard transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.18)]"
      style={{ backgroundColor: cap.bg }}
    >
      <div className="min-w-0">
        <h3 className="font-display text-[20px] font-semibold tracking-tight2 text-ink sm:text-[24px]">
          {cap.title}
        </h3>
        <p className="mt-1 max-w-[46ch] font-body text-[13.5px] leading-[1.5] text-ink/60 sm:text-[14.5px]">
          {cap.detail}
        </p>
      </div>

      <div
        className="grid size-[41px] shrink-0 place-items-center rounded-full shadow-icon-pop ring-1 ring-white transition-transform duration-300 group-hover:rotate-[14deg] group-hover:scale-110"
        style={{ backgroundColor: cap.accent }}
      >
        <Icon size={20} strokeWidth={2.2} className="text-white" />
      </div>
    </motion.div>
  );
}

/** Infinite skill ticker built from the résumé's technical-skills block. */
function SkillMarquee() {
  const items = skills.flatMap((s) => s.items);

  return (
    <Reveal delay={0.1} className="mt-16">
      <div className="mask-fade-x relative overflow-hidden py-2">
        {/* Two identical halves + matching trailing gap keeps the -50% loop seamless. */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1}>
              {items.map((item) => (
                <span
                  key={item}
                  className="shrink-0 rounded-full border border-black/[.08] bg-surface-muted px-5 py-2.5 font-body text-[14px] font-semibold text-ink/80"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
