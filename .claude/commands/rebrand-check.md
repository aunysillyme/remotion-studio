---
description: Audit the project for brand consistency (colors, fonts, handle)
---

Audit the codebase against the brand spec in `CLAUDE.md`.

1. Grep `src/` for hardcoded colors. Flag any that aren't `#0a0a0a`, `#FF6B35`, white, or the documented muted greys.
2. Check that `@AunySillyMe` is used consistently (no stray handles).
3. Check that compositions are 1080×1920 unless explicitly a different format.
4. Check fontWeight usage: hooks should be 700–800, body 300.
5. Report findings as a punch list — file:line references. Do not fix anything; just report.
