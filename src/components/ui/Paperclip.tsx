import { cn } from '@/lib/cn';

/**
 * The little paperclip that pins every sticker label in the Figma file.
 * Two-tone: a coloured body over a darker shadow pass.
 */
export function Paperclip({ color = '#8168fd', className }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
    >
      <path
        d="M16.9 6.2 8.1 15a3.1 3.1 0 1 0 4.4 4.4l8.4-8.5a5.2 5.2 0 0 0-7.4-7.3L4.7 12.4a7.3 7.3 0 0 0 10.4 10.3l7.1-7.2"
        stroke="rgba(0,0,0,.22)"
        strokeWidth="2.2"
        strokeLinecap="round"
        transform="translate(.6 .8)"
      />
      <path
        d="M16.9 6.2 8.1 15a3.1 3.1 0 1 0 4.4 4.4l8.4-8.5a5.2 5.2 0 0 0-7.4-7.3L4.7 12.4a7.3 7.3 0 0 0 10.4 10.3l7.1-7.2"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Folded page corner used on the stat and experience cards. */
export function FoldedCorner({
  front = '#c9f23c',
  back = '#0d2e2e',
  className,
}: {
  front?: string;
  back?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 56 56" aria-hidden="true" className={cn('pointer-events-none', className)}>
      <path d="M56 0 0 56h56V0Z" fill={back} />
      <path d="M56 0 0 56V0h56Z" fill={front} />
    </svg>
  );
}

/** Red push-pin dot that tacks cards to the page. */
export function Pin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('pointer-events-none', className)}>
      <ellipse cx="12" cy="14.5" rx="6.5" ry="5" fill="rgba(0,0,0,.18)" />
      <circle cx="11.5" cy="11.5" r="7.5" fill="#e02a20" />
      <circle cx="11.5" cy="11.5" r="7.5" fill="url(#pin-g)" />
      <defs>
        <radialGradient id="pin-g" cx="0.33" cy="0.28" r="0.85">
          <stop offset="0" stopColor="#ff8a80" />
          <stop offset="0.45" stopColor="#e63329" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8d0f08" stopOpacity="0.85" />
        </radialGradient>
      </defs>
    </svg>
  );
}
