import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { SectionBadge } from './SectionBadge';
import { RevealLines } from './Reveal';

/**
 * Centred section heading with the tilted badge tab.
 * The badge overlaps the heading from `sm:` up (as in Figma); below that it
 * stacks above, because the negative offset would push it off a phone screen.
 */
export function SectionHeading({
  badge,
  icon,
  lines,
  badgeOffset = 280,
  lineClassName,
  className,
  children,
}: {
  badge: string;
  icon: LucideIcon;
  lines: readonly string[];
  /** Horizontal nudge, in px, of the badge from the heading's centre. */
  badgeOffset?: number;
  lineClassName?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn('relative mx-auto max-w-[760px] text-center', className)}>
      <div
        className="mb-8 flex justify-center sm:absolute sm:left-1/2 sm:top-[-58px] sm:mb-0 sm:block"
        style={{ ['--badge-x' as string]: `-${badgeOffset}px` }}
      >
        <div className="sm:translate-x-[var(--badge-x)]">
          <SectionBadge label={badge} icon={icon} />
        </div>
      </div>

      <RevealLines
        as="h2"
        lines={lines}
        className="items-center"
        lineClassName={cn('h-section text-center', lineClassName)}
      />

      {children}
    </div>
  );
}
