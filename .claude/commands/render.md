---
description: Render a composition to MP4
argument-hint: "<CompositionId> [output-name]"
---

Render the Remotion composition to MP4.

1. Parse `$ARGUMENTS`: first token is the composition id, optional second token is the output filename (without extension).
2. If no composition id was provided, list available compositions from `src/Root.tsx` and ask which to render.
3. Ensure `out/` exists.
4. Run: `npx remotion render <CompId> out/<name>.mp4` (default `<name>` = lowercased comp id).
5. Report the output path and file size on success.
