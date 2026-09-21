import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, MapPin, Route } from 'lucide-react';
import { experience, type Role } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { FoldedCorner, Pin } from './ui/Paperclip';

export function Experience() {
  return (
    <section id="path" className="relative bg-white py-24 sm:py-28">
      <div className="shell">
        <SectionHeading
          badge="Experience"
          icon={Route}
          lines={['THE ROOMS', 'I LEARNED IN']}
          badgeOffset={300}
        />

        <div className="mt-16 grid gap-9 lg:grid-cols-3 lg:gap-6">
          {experience.map((role, i) => (
            <RoleCard key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 52, rotate: role.rotate * 2.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: role.rotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 110, damping: 18, delay: index * 0.12 }}
      whileHover={{ rotate: 0, y: -12, scale: 1.02, zIndex: 10 }}
      className="group relative flex flex-col rounded-panel bg-white p-7 pt-8 shadow-card ring-1 ring-black/[.06] lg:mt-[var(--offset)]"
      style={{ ['--offset' as string]: `${index === 1 ? 46 : 0}px` }}
    >
      <FoldedCorner
        front="#f7861f"
        back="#0d2e2e"
        className="absolute bottom-0 right-0 size-[54px] -scale-y-100 rounded-br-panel"
      />
      <Pin className="absolute -left-1.5 -top-2.5 size-7 drop-shadow-sm" />

      <header className="flex items-center gap-3">
        <div
          className="grid size-[42px] shrink-0 place-items-center rounded-full font-display text-[14px] font-extrabold text-white ring-1 ring-white"
          style={{ backgroundColor: role.accent }}
        >
          {role.companyMark}
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-[15px] font-semibold tracking-tight2 text-ink">
            {role.company}
          </p>
          <p className="truncate font-body text-[12.5px] text-ink/55">{role.role}</p>
        </div>
      </header>

      <p className="mt-6 font-display text-[21px] font-bold leading-[1.22] tracking-tight2 text-ink">
        &ldquo;{role.pull}&rdquo;
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-body text-[12px] text-ink/55">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays size={13} strokeWidth={2.2} />
          {role.period}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} strokeWidth={2.2} />
          {role.place}
        </span>
      </div>

      <p className="mt-4 font-body text-[13.5px] leading-[1.6] text-ink/70">{role.body}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.stack.map((s) => (
          <span
            key={s}
            className="rounded-full px-2.5 py-1 font-body text-[11.5px] font-semibold"
            style={{ backgroundColor: `${role.accent}1f`, color: role.accent }}
          >
            {s}
          </span>
        ))}
      </div>

      {role.certificate && (
        <a
          href={role.certificate}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 font-body text-[12.5px] font-semibold text-ink/60 underline-offset-4 transition hover:text-ink hover:underline"
        >
          View certificate
          <ExternalLink size={13} strokeWidth={2.2} />
        </a>
      )}
    </motion.article>
  );
}
