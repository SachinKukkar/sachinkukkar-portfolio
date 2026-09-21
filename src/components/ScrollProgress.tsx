import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin reading-progress bar across the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sticker-purple-accent via-sticker-pink-accent to-chip-icon"
    />
  );
}
