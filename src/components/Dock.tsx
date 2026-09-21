import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import {
  FolderOpen,
  HelpCircle,
  Home,
  Mail,
  Route,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { navItems } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { usePointerFine } from '@/hooks/usePointerFine';
import { cn } from '@/lib/cn';

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  user: UserRound,
  folder: FolderOpen,
  sparkles: Sparkles,
  route: Route,
  help: HelpCircle,
  mail: Mail,
};

const SECTION_IDS = navItems.map((n) => n.id);
const BASE = 44;
const MAX = 74;
const RANGE = 130;

/** macOS-style magnifying dock, pinned to the bottom of the viewport. */
export function Dock() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const active = useActiveSection(SECTION_IDS);
  const fine = usePointerFine();

  return (
    <motion.nav
      aria-label="Section navigation"
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.35, type: 'spring', stiffness: 140, damping: 18 }}
      onMouseMove={(e) => fine && mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        'fixed bottom-4 left-1/2 z-50 -translate-x-1/2',
        'flex items-end gap-1.5 rounded-[22px] border border-white/45 bg-white/65 px-3 pb-2.5 pt-2',
        'shadow-dock backdrop-blur-2xl sm:bottom-6 sm:gap-2 sm:rounded-[26px] sm:px-4',
      )}
    >
      {navItems.map((item) => (
        <DockIcon
          key={item.id}
          id={item.id}
          label={item.label}
          Icon={ICONS[item.icon] ?? Home}
          mouseX={mouseX}
          isActive={active === item.id}
          magnify={fine}
        />
      ))}
    </motion.nav>
  );
}

function DockIcon({
  id,
  label,
  Icon,
  mouseX,
  isActive,
  magnify,
}: {
  id: string;
  label: string;
  Icon: LucideIcon;
  mouseX: MotionValue<number>;
  isActive: boolean;
  magnify: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return RANGE;
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTarget = useTransform(distance, [-RANGE, 0, RANGE], [BASE, magnify ? MAX : BASE, BASE]);
  const size = useSpring(sizeTarget, { stiffness: 280, damping: 22, mass: 0.15 });

  const iconTarget = useTransform(distance, [-RANGE, 0, RANGE], [19, magnify ? 30 : 19, 19]);
  const iconSize = useSpring(iconTarget, { stiffness: 280, damping: 22, mass: 0.15 });

  return (
    <a ref={ref} href={`#${id}`} aria-label={label} className="group relative flex flex-col items-center">
      {/* tooltip */}
      <span className="pointer-events-none absolute -top-10 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1 font-body text-[12px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-top-11 group-hover:opacity-100">
        {label}
      </span>

      <motion.span
        style={{ width: size, height: size }}
        className={cn(
          'grid aspect-square place-items-center rounded-[14px] transition-colors duration-300',
          isActive
            ? 'bg-ink text-white shadow-md'
            : 'bg-white/80 text-ink/70 ring-1 ring-black/[.05] hover:text-ink',
        )}
      >
        <motion.span style={{ width: iconSize, height: iconSize }} className="grid place-items-center">
          <Icon className="size-full" strokeWidth={2.1} absoluteStrokeWidth={false} />
        </motion.span>
      </motion.span>

      <span
        className={cn(
          'mt-1 size-1 rounded-full transition-colors duration-300',
          isActive ? 'bg-ink' : 'bg-transparent',
        )}
      />
    </a>
  );
}
