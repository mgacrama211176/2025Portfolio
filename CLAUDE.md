# CLAUDE.md — 2025/26 Portfolio

Single-page Next.js 15 portfolio for Marlon Gacrama Jr (full-stack & AI engineer). Recreates the `portfolio.html` design exported from Claude Design (vol. 03, white/black/orange editorial).

## Stack

- **Next.js 15.2** (App Router, Turbopack dev)
- **React 19** + **TypeScript** (strict)
- **Tailwind v4** for almost everything. Design tokens are exposed via the `@theme` block in `globals.css` (`--color-ink`, `--color-accent`, `--font-block` etc.) so you write `bg-bg`, `text-ink-2`, `font-block`, `text-accent` directly. The CSS variables flip on `[data-theme="dark"]`, so utilities react to theme automatically — `dark:` variant is rarely needed.
- **GSAP 3.12** + ScrollTrigger + MotionPathPlugin — all scroll/reveal/parallax motion
- **Google Fonts** via `next/font/google`: Geist (sans), Geist Mono, Instrument Serif (display italic), Archivo Black (block headlines)

## Layout

```
src/app/
  layout.tsx           — fonts, theme bootstrap script, metadata
  page.tsx             — thin wrapper, renders <Portfolio />
  globals.css          — Tailwind @theme tokens, dark variant, keyframes, loader robot CSS, hamburger transition. Everything Tailwind utilities can express lives in JSX, not here.
  components/
    Portfolio.tsx      — RSC composer (~25 lines) — imports & arranges sections
    portfolioData.ts   — PROJECTS, STRENGTHS, STACK, CHAT_SYSTEM
    portfolio/
      Hero.tsx         — RSC, hero markup
      About.tsx        — RSC, about markup + photo
      Strengths.tsx    — RSC, maps STRENGTHS
      Work.tsx         — RSC, maps PROJECTS
      Experience.tsx   — RSC, mixed exp-row / exp-feat
      Stack.tsx        — RSC, maps STACK
      Evolution.tsx    — RSC, three evo cards
      Footer.tsx       — RSC, foot-row
      Loader.tsx       — client, loader interval + auto-hide
      Nav.tsx          — client, theme toggle + icon swap
      Contact.tsx      — client, form submit state
      Chat.tsx         — client, chat panel + window.claude.complete
      MotionRoot.tsx   — client, all GSAP effects (mounts scroll-blob, etc.)
public/images/         — all design assets (logos, portraits, project shots, evolution shots)
public/files/          — drop Marlon_Gacrama_CV.pdf here
```

**Why this split?** Static section markup ships as RSC — no `useState` / `useRef` / hydration boilerplate per section. The interactive bits (loader, nav, chat, contact form) are isolated client islands. All scroll/reveal/parallax animations are centralised in one client island (`MotionRoot`) that runs `querySelectorAll` across every section after mount — sections stay declarative server components but still get animated. Class names like `.fade-up`, `.reveal-h`, and `.parallax-photo` are the contract between RSC markup and `MotionRoot`.

## Design tokens (defined in `globals.css`)

- Light: `--bg #ffffff`, `--ink #0a0a0a`, `--accent #ff5722`, `--rule #ececec`
- Dark: `--bg #0a0a0a`, `--ink #ffffff`, `--accent #ff6b3d`
- Theme toggled via `document.documentElement.dataset.theme = "light" | "dark"` and persisted to `localStorage`

Font variables exposed by `next/font` and aliased in CSS:

- `--f-sans` → Geist
- `--f-mono` → Geist Mono
- `--f-display` → Instrument Serif (used for italic accents in headings)
- `--f-block` → Archivo Black (uppercase block headlines, hero & section titles)

## Conventions

- **Client-only logic** lives behind `useEffect` — GSAP plugins must be registered after mount, theme reads `localStorage`, etc.
- **Don't render the chat agent's response server-side**: it depends on `window.claude.complete`, which only exists in the Claude Design preview. The graceful fallback in the chat handler shows an error message + email when it isn't available. A type stub lives at `src/types/window-claude.d.ts`.
- **Smooth-scroll anchor links** (`a[href^="#"]`) are intercepted by `MotionRoot` with a `-64px` offset for the fixed nav.
- **Image strategy**: project/evolution screenshots are rendered as CSS `background-image` on a `.img` div (matches the design and keeps the aspect-ratio crop predictable). The hero/about portraits use `<img>` because GSAP needs a real element for parallax `transform`.
- **Path alias**: `@/*` → `src/*` (defined in `tsconfig.json`).

## Coding style

- TypeScript strict, no `any` unless the third-party shape forces it.
- Don't add error handling, fallbacks, or validation for scenarios that can't happen. The form handler is intentionally a stub (`fakeSubmit`) — it's the design's behavior.
- Don't introduce abstractions ahead of need. Three near-identical experience rows is fine — only extract once a fourth pattern emerges.
- Keep comments rare and only for the *why*: hidden constraint, GSAP gotcha, intentional duplication. Don't narrate what a named function already says.
- Lowercase, conversational copy throughout — that's the design voice.

## Working with the design

- Source of truth lives in `.design-bundle/v2/project/portfolio.html` (the prototype) and `.design-bundle/v2/chats/chat1.md` (the iteration history). Read those before changing copy or layout — most "why is it like this?" questions are answered there.
- When the design changes, update `globals.css` + the relevant section in `components/portfolio/` together. The CSS class names are kept identical to the prototype to make diffs easy. If you add a new animated element, give it `.fade-up` (one-shot reveal) or `.reveal-h` (heading word-mask) and `MotionRoot` will pick it up automatically — no per-section animation hook needed.

## Dev / build

```bash
npm run dev       # turbopack on http://localhost:3000
npm run build     # production build
npm run lint      # next lint
```

## TODO before going live

- ~~Add the actual CV~~ — done, lives at `public/Resume.pdf` and is served from `/Resume.pdf`
- Replace placeholder GitHub / LinkedIn URLs in the footer
- The contact form is a stub — wire it to a real endpoint (Resend, Formspree, or a Next.js API route)
