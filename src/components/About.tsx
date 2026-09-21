import { motion } from 'framer-motion';
import { ArrowRight, UserRound } from 'lucide-react';
import { about } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { CountUp } from './ui/CountUp';
import { FoldedCorner, Pin } from './ui/Paperclip';
import { MagneticButton } from './ui/MagneticButton';

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="shell">
        {/* Heading with overlapping badge */}
        <SectionHeading badge="About" icon={UserRound} lines={about.headlineLines} badgeOffset={260}>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[620px] text-balance font-body text-[17px] font-semibold leading-[1.62] text-ink/85 sm:text-[19px]">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-9">
            <MagneticButton
              href={about.cta.href}
              className="bg-ink text-white hover:bg-ink-900"
              ariaLabel={about.cta.label}
            >
              {about.cta.label}
              <ArrowRight size={17} strokeWidth={2.4} />
            </MagneticButton>
          </Reveal>
        </SectionHeading>

        {/* Scattered stat cards */}
        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {about.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Stat = (typeof about.stats)[number];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const tilt = [-3.2, 2.4, -2, 2.8][index % 4];

  return (
    <motion.article
      initial={{ opacity: 0, y: 44, rotate: tilt * 2.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ type: 'spring', stiffness: 120, damping: 17, delay: index * 0.09 }}
      whileHover={{ rotate: 0, y: -10, scale: 1.035, zIndex: 5 }}
      className="group relative rounded-panel bg-white p-6 pt-8 shadow-card ring-1 ring-black/[.06]"
    >
      <FoldedCorner className="absolute right-0 top-0 size-[52px] rounded-tr-panel" />
      <Pin className="absolute -left-1 -top-2 size-7 drop-shadow-sm" />

      <div className="font-display text-[44px] font-extrabold leading-none tracking-hero text-ink">
        <CountUp
          to={stat.value}
          decimals={stat.decimals}
          prefix={'prefix' in stat ? (stat.prefix as string) : ''}
          suffix={stat.suffix}
        />
      </div>

      <h3 className="mt-3 font-display text-[16px] font-semibold tracking-tight2 text-ink">
        {stat.label}
      </h3>

      <p className="mt-2.5 font-body text-[13.5px] leading-[1.55] text-ink/65">{stat.body}</p>

      <span
        className="pointer-events-none absolute inset-x-6 bottom-4 h-px origin-left scale-x-0 bg-gradient-to-r from-sticker-purple-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.article>
  );
}
