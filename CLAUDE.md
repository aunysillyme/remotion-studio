# Remotion Studio — @AunySillyMe

Remotion project for producing branded short-form video (primarily TikTok / IG Reels / Shorts).

## Brand

- **Background**: `#0a0a0a` (deep dark)
- **Accent**: `#FF6B35` (coral/orange)
- **Text**: white `#ffffff` / muted `#cfcfcf` / dim `#777`
- **Handle**: `@AunySillyMe`
- **Vibe**: dark, cinematic, minimal — no clutter, no gradients beyond the subtle radial vignette
- **Type**: bold sans-serif (700–800) for hooks, light (300) for body
- **Motion**: spring-based fade + ~30px upward drift; staggered (eyebrow → title → body)

## Formats

- **TikTok / Reels / Shorts**: 1080×1920, 30fps
- Default slide duration: 90 frames (3s)

## Project layout

- `src/Root.tsx` — composition registration
- `src/Composition.tsx` — `TikTokSlideshow` series + `DEFAULT_SLIDES` data
- `src/Slide.tsx` — reusable Slide component (`hook` | `content` | `cta`)
- `src/index.css` — Tailwind v4 entry

## Conventions

- New videos = new composition registered in `Root.tsx`, with its own slide-data file under `src/`
- Reuse `Slide.tsx` rather than duplicating styling
- Keep slide copy in data, not JSX — makes it easy to swap topics
- Always 1080×1920 unless explicitly asked otherwise
- Export defaults to `out/<comp-id>.mp4`

## Common commands

- `npm run dev` — open Remotion Studio
- `npx remotion render <CompId> out/<name>.mp4` — render to MP4
- `npm run lint` — eslint + tsc

## Git

- Default branch: `main`
- Use feature branches per video/template; commit with concise, what-and-why messages
