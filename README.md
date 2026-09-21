# sachinkukkar.tech

Personal portfolio for **Sachin Kukkar** — Machine Learning Engineer working in computer vision
and medical imaging.

Built from a Figma design with React, TypeScript, Tailwind CSS, Framer Motion and lucide-react.

---

## Stack

| Concern    | Choice                                                 |
| ---------- | ------------------------------------------------------ |
| Build      | Vite 5                                                 |
| UI         | React 18 + TypeScript (strict)                         |
| Styling    | Tailwind CSS 3, design tokens mirrored from Figma      |
| Motion     | Framer Motion                                          |
| Icons      | lucide-react                                           |
| Scrolling  | Lenis (inertial), disabled under `prefers-reduced-motion` |
| Typography | Mona Sans, Plus Jakarta Sans, Inter — self-hosted via Fontsource |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run preview` serves the production build locally; `npm run typecheck` runs `tsc --noEmit`.

## Project layout

```
src/
├── components/
│   ├── Hero.tsx           parallax hero, headline stack, sticker labels
│   ├── About.tsx          headline + animated stat cards
│   ├── Projects.tsx       browser-window project cards over a photo backdrop
│   ├── Capabilities.tsx   coloured capability rows + skill ticker
│   ├── Experience.tsx     tilted role cards (ThoughtsWin, DRDO, Arootle)
│   ├── Faqs.tsx           scattered expandable question chips
│   ├── Footer.tsx         contact card, marquee, site nav
│   ├── Dock.tsx           macOS-style magnifying nav dock
│   ├── ProjectArt.tsx     generated SVG cover art per project
│   ├── Cursor.tsx         trailing cursor ring (fine pointers only)
│   ├── ScrollProgress.tsx top reading-progress bar
│   └── ui/                SectionHeading, StickerLabel, Reveal, CountUp, …
├── data/content.ts        ← every word on the site lives here
├── hooks/                 useSmoothScroll, useActiveSection, usePointerFine
└── index.css              base layer + design tokens
```

### Editing content

**`src/data/content.ts` is the single source of truth.** Headlines, stats, projects,
capabilities, roles, FAQs, social links and footer copy all live there — no component
edits needed to change copy.

To swap the résumé, replace `public/Sachin_Kukkar_Resume.pdf` (keep the filename, or update
`profile.resumeUrl`).

---

## Deploying to sachinkukkar.tech

### Option A — Vercel (recommended)

1. Push this repo to GitHub (already wired to
   `github.com/SachinKukkar/sachinkukkar-portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new), **Import** the repo.
3. Vercel detects Vite from `vercel.json`. Leave the defaults:
   - Build command `npm run build`
   - Output directory `dist`
4. Click **Deploy**. You get a `*.vercel.app` URL in about a minute.
5. In the project → **Settings → Domains**, add `sachinkukkar.tech` **and** `www.sachinkukkar.tech`.
6. At your domain registrar, set the DNS records Vercel shows you:

   | Type  | Name  | Value                  |
   | ----- | ----- | ---------------------- |
   | A     | `@`   | `76.76.21.21`          |
   | CNAME | `www` | `cname.vercel-dns.com` |

   (Use the exact values Vercel displays — they occasionally change.)
7. DNS usually propagates in 5–30 minutes. Vercel issues the TLS certificate automatically.

Every push to `main` redeploys.

### Option B — GitHub Pages

`.github/workflows/deploy.yml` builds and publishes `dist` to Pages on every push to `main`.

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Repo → **Settings → Pages → Custom domain**: enter `sachinkukkar.tech`
   (`public/CNAME` already carries it through the build).
3. DNS at your registrar:

   | Type  | Name  | Value                   |
   | ----- | ----- | ----------------------- |
   | A     | `@`   | `185.199.108.153`       |
   | A     | `@`   | `185.199.109.153`       |
   | A     | `@`   | `185.199.110.153`       |
   | A     | `@`   | `185.199.111.153`       |
   | CNAME | `www` | `sachinkukkar.github.io` |

4. Tick **Enforce HTTPS** once the certificate is issued.

> Use one host or the other, not both — two hosts fighting over the same DNS records will
> break the certificate.

---

## Notes

- **Background photography.** `public/images/landscape.jpg` and `landscape-wide.jpg` came from
  the Figma file, which was imported from a Framer template. Swap them for your own or
  properly licensed photos before you publicise the site — drop in replacements with the same
  filenames and nothing else changes.
- **Project covers are generated**, not screenshots. Each one is hand-drawn SVG in
  `src/components/ProjectArt.tsx` that reflects what the project actually does.
- **Accessibility.** Skip link, visible focus rings, `aria-expanded` on the FAQ chips, real
  `<h1>`/`<h2>` structure, and a full `prefers-reduced-motion` path that disables Lenis,
  count-ups and transitions.
