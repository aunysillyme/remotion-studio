---
description: Generate a new 5-slide TikTok slideshow on a given topic
argument-hint: "<topic or angle>"
---

Create a new TikTok slideshow on the topic: **$ARGUMENTS**

Steps:
1. Read `src/Composition.tsx` and `src/Slide.tsx` to confirm the current API.
2. Create a new file `src/slides/<slug>.ts` exporting a `SlideData[]` array following the existing structure (1 hook, 3 content, 1 CTA). Match the @AunySillyMe brand voice: punchy, direct, no fluff. Hook ≤ 6 words. Body ≤ 18 words per slide.
3. Register a new `<Composition>` in `src/Root.tsx` with id `<PascalCaseTopic>` at 1080×1920, 30fps, 450 frames, using the `TikTokSlideshow` component and the new slide data as `defaultProps`.
4. Run `npx tsc --noEmit` to verify.
5. Report the composition id so the user can preview it in the studio.

Do NOT modify `DEFAULT_SLIDES` or the existing `TikTokSlideshow` composition.
