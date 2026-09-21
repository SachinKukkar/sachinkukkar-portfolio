import type { Config } from 'tailwindcss';

/**
 * Tokens mirror the Figma file (Creatiie design system).
 * Figma names are kept in comments so design ↔ code stays traceable.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Mona Sans Variable"', '"Mona Sans"', 'system-ui', 'sans-serif'], // Figma "Font 3"
        body: [
          '"Plus Jakarta Sans Variable"',
          '"Plus Jakarta Sans"',
          'system-ui',
          'sans-serif',
        ], // Figma "Font 4"
        ui: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'], // Figma "Font 2"
      },
      colors: {
        ink: {
          DEFAULT: '#252525', // Mine Shaft
          900: '#121212', // Cod Gray
          800: '#1a1a1a',
          700: '#212121',
        },
        chip: {
          bg: '#e5f2fa', // Polar
          icon: '#039cfb', // Azure Radiance
        },
        // Sticker label pairs (bg / accent)
        sticker: {
          purple: '#f1eefc', // Selago
          'purple-accent': '#8168fd', // Cornflower Blue
          pink: '#f4eaf5', // Whisper
          'pink-accent': '#ec68fd', // Heliotrope
          green: '#f4f8e8', // Frost
          'green-accent': '#93ba06', // Pistachio
        },
        // Capability row pairs
        row: {
          rose: '#fbe7e3', // Linen
          'rose-accent': '#e8a2a6', // Sea Pink
          blue: '#d9e7f5', // Link Water
          'blue-accent': '#4a96ed', // Picton Blue
          sand: '#f3eebe', // Sidecar
          'sand-accent': '#e8d210', // Barberry
          mint: '#dcf5e0', // Tara
          'mint-accent': '#52de85', // Pastel Green
          lilac: '#ebe6f3', // Snuff
          'lilac-accent': '#8168fd', // Cornflower Blue
        },
        // FAQ chips
        faq: {
          rose: '#fedcdd', // Cosmos
          mint: '#c7f8d9', // Humming Bird
          sand: '#f3ea9a', // Sandwisp
          blue: '#bbdafe', // French Pass
          lime: '#e0fd72', // Honeysuckle
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f2f2f2', // Concrete
          butter: '#f3f5a8', // footer marquee field
        },
        emerald: { brand: '#34c75a' },
        fold: {
          lime: '#c9f23c',
          teal: '#0d2e2e',
          orange: '#f7861f',
        },
      },
      borderRadius: {
        chip: '7.44px',
        card: '12px',
        panel: '24px',
      },
      boxShadow: {
        // Figma: drop-shadow 4px 4px 0 rgba(0,0,0,.14)
        hard: '4px 4px 0px 0px rgba(0,0,0,0.14)',
        // Figma: 7px 6px 0 rgba(0,0,0,.12)
        'hard-lg': '7px 6px 0px 0px rgba(0,0,0,0.12)',
        // Figma: 9.3px -3.72px 0 rgba(0,0,0,.15)
        'icon-pop': '9.3px -3.72px 0px 0px rgba(0,0,0,0.15)',
        chip: '0px 0px 10px 0px rgba(0,0,0,0.04)',
        btn: '0px 6px 10px 0px rgba(0,0,0,0.15)',
        card: '0 18px 40px -18px rgba(0,0,0,0.28)',
        dock: '0 12px 32px -8px rgba(0,0,0,0.25)',
      },
      letterSpacing: {
        mega: '-3.8px',
        hero: '-2.4px',
        head: '-1.3px',
        tight2: '-1px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(.9)', opacity: '.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        'marquee-rev': 'marquee-rev 26s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(.24,.4,.28,1) infinite',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
