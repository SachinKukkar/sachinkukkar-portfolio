import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePointerFine } from '@/hooks/usePointerFine';

/**
 * Trailing ring that grows over interactive elements.
 * Renders only for fine pointers; the native cursor is left intact.
 */
export function Cursor() {
  const fine = usePointerFine();
  const [hot, setHot] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.35 });

  useEffect(() => {
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = e.target as HTMLElement | null;
      setHot(Boolean(el?.closest('a, button, [role="button"], input, textarea')));
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hot ? 1.85 : 1,
        backgroundColor: hot ? 'rgba(129,104,253,.16)' : 'rgba(129,104,253,0)',
      }}
      transition={{ scale: { type: 'spring', stiffness: 320, damping: 22 }, opacity: { duration: 0.2 } }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -ml-[14px] -mt-[14px] hidden size-7 rounded-full border-2 border-sticker-purple-accent mix-blend-multiply lg:block"
    />
  );
}
