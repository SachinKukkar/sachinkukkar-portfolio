import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Download } from 'lucide-react';
import { useRef } from 'react';
import { hero, profile } from '@/data/content';
import { StickerLabel } from './ui/StickerLabel';
import { ProjectArt } from './ProjectArt';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#7ba7cf]"
    >
      {/* Parallax photograph */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <img
          src="/images/landscape.jpg"
          alt=""
          className="size-full object-cover object-center"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25" />
      </motion.div>

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-5 pt-6 sm:px-9">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-[19px] font-bold uppercase tracking-tight2 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.45)]"
        >
          {profile.wordmark}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="flex items-center gap-3"
        >
          <span className="hidden items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 font-body text-[13px] font-semibold text-white backdrop-blur-md sm:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-brand" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-brand" />
            </span>
            {profile.availability}
          </span>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 font-body text-[13px] font-semibold text-ink shadow-chip backdrop-blur transition hover:bg-white"
          >
            <Download size={15} strokeWidth={2.4} />
            Résumé
          </a>
        </motion.div>
      </header>

      {/* Headline stack + stickers */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1100px] flex-1 px-5 pt-10 sm:px-8 sm:pt-16"
      >
        <div className="relative">
          <h1 className="sr-only">
            {profile.name} — {profile.role}, {profile.focus}
          </h1>

          <div aria-hidden="true" className="flex flex-col items-center">
            {hero.headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '112%', rotate: 5 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="h-mega block text-center text-[clamp(2.6rem,9.2vw,6.1rem)] text-white [text-shadow:0_4px_28px_rgba(0,0,0,.28)]"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </div>

          {/* Stickers pinned over the headline, as in Figma */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="pointer-events-auto absolute right-[1%] top-[-6%] lg:right-[5%]">
              <StickerLabel {...hero.stickers[0]} rotate={-14} delay={0.55} />
            </div>
            <div className="pointer-events-auto absolute left-[54%] top-[24%]">
              <StickerLabel {...hero.stickers[1]} rotate={-11} delay={0.68} />
            </div>
            <div className="pointer-events-auto absolute left-[5%] top-[46%] lg:left-[8%]">
              <StickerLabel {...hero.stickers[2]} rotate={-13} delay={0.8} />
            </div>
          </div>
        </div>

        {/* Mobile stickers flow inline */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-6 md:hidden">
          {hero.stickers.map((s, i) => (
            <StickerLabel key={s.label} {...s} rotate={i % 2 ? 4 : -5} delay={0.4 + i * 0.1} scale={0.92} />
          ))}
        </div>
      </motion.div>

      {/* Bottom row: tagline · scroll cue · spotlight card */}
      <div className="relative z-10 flex items-end justify-between gap-6 px-5 pb-10 sm:px-9 sm:pb-12">
        <motion.p
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="max-w-[16rem] font-body text-[15px] font-semibold leading-[1.45] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.4)] sm:text-[17px]"
        >
          {hero.tagline.map((t) => (
            <span key={t} className="block">
              {t}
            </span>
          ))}
        </motion.p>

        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden shrink-0 flex-col items-center gap-1 pb-1 text-white/85 transition hover:text-white lg:flex"
        >
          <span className="font-ui text-[11px] uppercase tracking-[0.2em]">scroll</span>
          <ArrowDown size={16} className="animate-scroll-hint" />
        </motion.a>

        <SpotlightCard />
      </div>
    </section>
  );
}

/** The floating glassy "case study" card in the bottom-right of the Figma hero. */
function SpotlightCard() {
  return (
    <motion.a
      href={hero.spotlight.href}
      initial={{ opacity: 0, y: 34, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group hidden w-[330px] items-center gap-3 rounded-2xl border border-white/25 bg-white/12 p-2.5 pr-4 backdrop-blur-xl transition-colors hover:bg-white/20 sm:flex"
    >
      <div className="size-[56px] shrink-0 overflow-hidden rounded-xl bg-black/20">
        <ProjectArt kind="xray" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-white/70">
            {hero.spotlight.kicker}
          </span>
          <span className="font-ui text-[10px] text-white/70">{hero.spotlight.year}</span>
        </div>
        <p className="truncate font-display text-[16px] font-bold uppercase tracking-tight2 text-white">
          {hero.spotlight.title}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-white/80">
            {hero.spotlight.cta}
          </span>
          <ArrowUpRight
            size={14}
            className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.a>
  );
}
