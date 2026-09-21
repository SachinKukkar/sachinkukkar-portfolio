import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, FolderOpen, Github } from 'lucide-react';
import { useRef } from 'react';
import { projects, type Project } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectArt } from './ProjectArt';
import { Paperclip } from './ui/Paperclip';

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="work" ref={ref} className="relative isolate overflow-hidden py-24 sm:py-28">
      <motion.div style={{ y: bgY }} className="absolute inset-[-10%] -z-10">
        <img src="/images/landscape.jpg" alt="" className="size-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-white/12" />
      </motion.div>

      <div className="shell">
        <SectionHeading
          badge="Projects"
          icon={FolderOpen}
          lines={['PROJECTS THAT', 'TELL STORIES']}
          badgeOffset={290}
          lineClassName="drop-shadow-[0_2px_14px_rgba(255,255,255,.6)]"
        />

        <div className="mt-16 grid gap-9 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Wrapper = project.href ? motion.a : motion.article;

  return (
    <Wrapper
      {...(project.href
        ? { href: project.href, target: '_blank', rel: 'noreferrer' }
        : ({} as Record<string, never>))}
      initial={{ opacity: 0, y: 56, rotate: project.rotate * 2.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: project.rotate }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 110, damping: 18, delay: (index % 3) * 0.1 }}
      whileHover={{ rotate: 0, y: -12, scale: 1.02, zIndex: 20 }}
      className="group relative block rounded-[14px] bg-white p-2.5 shadow-card ring-1 ring-black/5"
    >
      <Paperclip
        color={project.clip}
        className="absolute -top-3 left-[18%] z-10 h-[30px] w-[28px] rotate-[8deg] drop-shadow"
      />

      {/* browser chrome */}
      <div className="mb-2.5 flex items-center gap-[5px] px-2 pt-1">
        <span className="size-[7px] rounded-full bg-[#ff5f57]" />
        <span className="size-[7px] rounded-full bg-[#febc2e]" />
        <span className="size-[7px] rounded-full bg-[#28c840]" />
        <span className="ml-2 h-[10px] flex-1 rounded-full bg-black/[.055]" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-[9px] bg-neutral-100">
        <div className="size-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
          <ProjectArt kind={project.art} />
        </div>

        {/* blurb slides up on hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/92 via-black/80 to-transparent p-4 pt-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p className="font-body text-[13px] leading-[1.5] text-white/92">{project.blurb}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
        <h3 className="min-w-0 truncate font-display text-[19px] font-bold tracking-tight2 text-ink">
          {project.title}
        </h3>
        <div className="flex shrink-0 items-center gap-2.5">
          <span className="font-ui text-[10.5px] text-ink/45">{project.year}</span>
          {project.href ? (
            <Github size={14} className="text-ink/55 transition group-hover:text-ink" />
          ) : (
            <ArrowUpRight
              size={14}
              className="text-ink/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
            />
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 px-2 pb-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2 py-0.5 font-ui text-[10.5px] font-medium"
            style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[14px] ring-2 ring-transparent transition-colors duration-300 group-hover:ring-[color:var(--accent)]"
        style={{ ['--accent' as string]: project.accent }}
      />
    </Wrapper>
  );
}
