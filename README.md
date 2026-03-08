# Pixellot Design System v2

Interactive component library for the Pixellot sports platform — auth, onboarding, jersey selection, game details, team shop, and player profiles.

## Quick Start

**Browse the design system:** Open `pixellot-design-system.html` in any browser. No build tools needed.

**Use in Claude/Cowork artifacts:** Open `pixellot-vue-design-system.tsx` as a React artifact.

## What's Inside

- **44 components** — inputs, buttons, badges, cards, modals, video thumbnails, jerseys, stats, and more
- **72 design tokens** — colors (light + dark), typography, spacing, radii, strokes, breakpoints
- **6 page views** — auth, onboarding, home, game detail, profile, notifications
- **24 production-ready Vue SFC snippets** — TypeScript, ARIA, dark mode, focus-visible
- **Interactive explorer** — sidebar nav with search, theme toggle, code viewer with copy

## Files

| File | Purpose |
|------|---------|
| `pixellot-vue-design-system.tsx` | Source — single-file React component with Vue SFC reference snippets |
| `pixellot-design-system.html` | Shareable — standalone HTML, opens in any browser |

## Tech

- React 18 + inline styles (no CSS dependencies)
- Vue 3 SFC snippets with `<script setup lang="ts">`
- Dark mode via React Context (`useColors()` hook) + CSS `prefers-color-scheme`
- Token system: `T.spacing`, `T.radii`, `T.typography`, `T.strokes`, `T.breakpoints`
- Font: Red Hat Display (400/500/600/700/800)
- Brand color: Pixellot Cyan `#00D6FE`
