import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { footer, profile } from '@/data/content';
import { StickerLabel } from './ui/StickerLabel';
import { MagneticButton } from './ui/MagneticButton';

const SOCIALS = [
  { label: 'GitHub', href: profile.socials.github, Icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: Linkedin },
  { label: 'LeetCode', href: profile.socials.leetcode, Icon: Code2 },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', href: `tel:${profile.phone}`, Icon: Phone },
];

const NAV = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PATH', href: '#path' },
  { label: 'FAQS', href: '#faqs' },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface-butter pt-8">
      <Marquee />

      <div className="relative z-10 px-5 pb-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate mx-auto min-h-[540px] max-w-[1600px] overflow-hidden rounded-panel sm:min-h-[620px]"
        >
          <img
            src="/images/landscape-wide.jpg"
            alt=""
            className="absolute inset-0 -z-10 size-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-black/5 to-black/40" />

          {/* social rail */}
          <div className="absolute left-6 top-6 flex gap-2 sm:left-8 sm:top-8">
            {SOCIALS.map(({ label, href, Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.06 }}
                whileHover={{ y: -4, scale: 1.1 }}
                className="grid size-[36px] place-items-center rounded-[16.5px] bg-surface-muted/95 text-ink shadow-chip backdrop-blur transition-colors hover:bg-white"
              >
                <Icon size={17} strokeWidth={2.1} />
              </motion.a>
            ))}
          </div>

          {/* kicker */}
          <div className="absolute right-6 top-7 max-w-[330px] text-right sm:right-8 sm:top-9">
            <div className="flex items-center justify-end gap-2">
              <span className="h-0.5 w-6 bg-white" />
              <p className="font-display text-[19px] font-semibold tracking-tight2 text-white sm:text-[24px]">
                {footer.kicker}
              </p>
            </div>
            <p className="mt-1.5 font-display text-[16px] font-semibold leading-[1.22] tracking-tight2 text-white/95 sm:text-[22px]">
              {footer.sub}
            </p>
          </div>

          {/* headline + stickers */}
          <div className="absolute bottom-24 left-6 max-w-[92%] sm:bottom-28 sm:left-8">
            <div className="relative">
              {/* The reveal is driven from this unclipped parent — a `whileInView`
                  on the clipped child can never intersect, so it would never fire. */}
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {footer.headlineLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                      variants={{
                        hidden: { y: '112%' },
                        show: { y: '0%', transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } },
                      }}
                      className="h-mega block whitespace-nowrap text-[clamp(2.1rem,6.6vw,4.6rem)] text-white [text-shadow:0_4px_26px_rgba(0,0,0,.3)]"
                      style={{ paddingLeft: i === 2 ? '1.4em' : 0 }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.div>

              <div className="pointer-events-none absolute inset-0 hidden md:block">
                <div className="pointer-events-auto absolute left-[2%] top-[-14%]">
                  <StickerLabel label={footer.stickers[0].label} tone="pink" icon="brain" rotate={-6} scale={0.9} />
                </div>
                <div className="pointer-events-auto absolute left-[46%] top-[40%]">
                  <StickerLabel label={footer.stickers[1].label} tone="green" icon="activity" rotate={9} scale={0.9} />
                </div>
                <div className="pointer-events-auto absolute left-[1%] top-[76%]">
                  <StickerLabel label={footer.stickers[2].label} tone="purple" icon="eye" rotate={-5} scale={0.9} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="absolute bottom-7 right-6 sm:bottom-8 sm:right-8">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="bg-white text-ink-800 hover:bg-neutral-100"
              ariaLabel={`Email ${profile.name}`}
            >
              {footer.cta}
              <Mail size={17} strokeWidth={2.3} />
            </MagneticButton>
          </div>
        </motion.div>

        {/* bottom bar — extra room so the floating dock never covers it */}
        <div className="mx-auto mt-6 flex max-w-[1600px] flex-col items-center gap-4 px-1 pb-2 sm:flex-row sm:justify-between lg:pr-[420px]">
          <a
            href="#home"
            className="font-display text-[20px] font-semibold uppercase tracking-tight2 text-ink"
          >
            {profile.wordmark}
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-[18px] gap-y-2">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-display text-[15px] font-medium tracking-[-0.2px] text-ink transition-opacity after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mb-24 mt-4 text-center font-body text-[12px] text-ink/45 sm:mb-20">
          © {new Date().getFullYear()} {profile.name} · {profile.location} · Built with React,
          Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}

function Marquee() {
  const word = footer.marquee;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[84px] select-none overflow-hidden opacity-[.45]"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-8 pr-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="h-mega shrink-0 text-[clamp(2.6rem,5.4vw,4.4rem)] italic text-white"
                style={{ WebkitTextStroke: '1px rgba(0,0,0,.07)' }}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
