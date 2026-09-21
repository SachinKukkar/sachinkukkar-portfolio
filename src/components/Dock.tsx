import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { dockItems, navItems, type DockItem } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { usePointerFine } from '@/hooks/usePointerFine';
import { cn } from '@/lib/cn';

/** Active state tracks every section, not just the four with a tile. */
const SECTION_IDS = navItems.map((n) => n.id);

// Figma "Apple Dock-Nav": 70px tiles, 18px radius, 8px gap, 9px container padding.
// Four 70px tiles come to 322px wide, which fits a 375px phone but not a 320px
// one — so the tiles step down on the narrowest screens.
const TILE = 70;
const TILE_SM = 56;
const RANGE = 150;
const MAGNIFY_BY = 1.31;

/** Base tile size for the current viewport. */
function useTileSize() {
  const [tile, setTile] = useState(TILE);

  useEffect(() => {
    // Four 70px tiles + gaps + padding come to 318px, so 350px is the cutoff.
    const mq = window.matchMedia('(min-width: 350px)');
    const update = () => setTile(mq.matches ? TILE : TILE_SM);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return tile;
}

export function Dock() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const active = useActiveSection(SECTION_IDS);
  const fine = usePointerFine();
  const tile = useTileSize();

  return (
    // Centring lives on this wrapper, not on the nav: Framer Motion writes
    // `transform` inline, which would silently override a -translate-x-1/2 class.
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center sm:bottom-6">
      <motion.nav
        aria-label="Section navigation"
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.35, type: 'spring', stiffness: 140, damping: 18 }}
        onMouseMove={(e) => fine && mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className={cn(
          'pointer-events-auto relative',
          'flex items-end justify-center gap-[6px] rounded-[20px] p-[9px] sm:gap-[8px]',
          'border border-[#e6e6eb] bg-[rgba(247,247,247,0.32)] backdrop-blur-[5px]',
          'shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)]',
        )}
      >
        {/* Figma: inset 0 2px 6px rgba(255,255,255,.32) — the glass top-light */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0px_2px_6px_0px_rgba(255,255,255,0.32)]"
        />

        {dockItems.map((item) => (
          <DockTile
            key={item.id}
            item={item}
            mouseX={mouseX}
            isActive={active === item.id}
            magnify={fine}
            tile={tile}
          />
        ))}
      </motion.nav>
    </div>
  );
}

function DockTile({
  item,
  mouseX,
  isActive,
  magnify,
  tile,
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
  isActive: boolean;
  magnify: boolean;
  tile: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return RANGE;
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTarget = useTransform(
    distance,
    [-RANGE, 0, RANGE],
    [tile, magnify ? tile * MAGNIFY_BY : tile, tile],
  );
  const size = useSpring(sizeTarget, { stiffness: 300, damping: 24, mass: 0.16 });

  return (
    <a
      ref={ref}
      href={`#${item.id}`}
      aria-label={item.label}
      aria-current={isActive ? 'true' : undefined}
      className="group relative flex flex-col items-center"
    >
      <span className="pointer-events-none absolute -top-9 z-10 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1 font-body text-[12px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
        {item.label}
      </span>

      {/* Figma: 70px tile, image full-bleed, clipped to an 18px radius. */}
      <motion.span
        style={{ width: size, height: size }}
        className="relative block aspect-square overflow-hidden rounded-[18px]"
      >
        <img
          src={item.src}
          alt=""
          width={180}
          height={180}
          draggable={false}
          className="size-full select-none object-contain"
        />
      </motion.span>

      <span
        className={cn(
          'mt-1.5 size-[5px] rounded-full transition-colors duration-300',
          isActive ? 'bg-ink/70' : 'bg-transparent',
        )}
      />
    </a>
  );
}
