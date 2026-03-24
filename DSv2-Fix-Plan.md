# Pixellot DSv2 — Fix Plan
**Goal:** Recover from 6.8 → 8.5+ | **Estimated effort:** 3–4 dev days
**Date:** March 24, 2026

---

## Overview

The audit identified 4 structural gaps and 14 tactical issues. This plan is organized into 4 sprints ordered by impact. Completing Sprints 1 and 2 alone will recover ~10 points.

| Sprint | Focus | Est. Time | Score Impact |
|---|---|---|---|
| 1 | Token Foundation | 1 day | +8 pts |
| 2 | Dark Mode Parity | 0.5 day | +4 pts |
| 3 | Naming & Structure | 0.5 day | +3 pts |
| 4 | Documentation | 1–2 days | +8 pts |
| **Total** | | **3–4 days** | **+23 pts → ~90** |

---

## Sprint 1 — Token Foundation
> **Priority: 🔴 Critical** | Zero spacing, typography, radius, and shadow tokens exist

Add the following `:root` block to the top of your global CSS (before any component styles):

```css
:root {
  /* ─── SPACING (8px base grid) ─── */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;

  /* ─── TYPOGRAPHY — Font Family ─── */
  --font-family-base: 'Red Hat Display', sans-serif;

  /* ─── TYPOGRAPHY — Font Sizes ─── */
  --text-2xs:  10px;   /* notification badges, captions */
  --text-xs:   12px;   /* labels, metadata */
  --text-sm:   13px;   /* secondary body */
  --text-base: 14px;   /* primary body */
  --text-md:   15px;   /* slightly prominent body */
  --text-lg:   16px;   /* section labels */
  --text-xl:   18px;   /* subheadings */
  --text-2xl:  20px;   /* headings */
  --text-3xl:  24px;   /* page titles */
  --text-4xl:  28px;   /* hero headings */

  /* ─── TYPOGRAPHY — Font Weights ─── */
  --font-regular:   400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;

  /* ─── TYPOGRAPHY — Line Heights ─── */
  --leading-tight:  1.2;
  --leading-normal: 1.5;

  /* ─── BORDER RADIUS ─── */
  --radius-xs:   3px;   /* scrollbar, micro elements */
  --radius-sm:   4px;   /* inputs, chips, tags */
  --radius-md:   8px;   /* cards, dropdowns */
  --radius-lg:  12px;   /* modals, panels */
  --radius-xl:  16px;   /* large cards */
  --radius-2xl: 20px;   /* bottom sheets */
  --radius-full: 50%;   /* avatars, circular badges */

  /* ─── ELEVATION / SHADOWS ─── */
  --shadow-sm:     0 2px 4px rgba(0,0,0,0.2);     /* subtle lift */
  --shadow-md:     0 4px 12px rgba(0,0,0,0.08);   /* card hover */
  --shadow-lg:     0 4px 12px rgba(0,0,0,0.15);   /* floating panels */
  --shadow-xl:     0 4px 12px rgba(0,0,0,0.3);    /* modals */
  --shadow-focus:  0 0 0 2px rgba(17,109,255,0.25); /* focus ring glow */
}
```

### Refactor Checklist — Replace hardcoded values

**Spacing** — Find & replace these patterns in all component CSS:

| Hardcoded | Replace with |
|---|---|
| `padding: 4px` | `var(--space-1)` |
| `padding: 8px` | `var(--space-2)` |
| `padding: 12px` | `var(--space-3)` |
| `padding: 16px` | `var(--space-4)` |
| `padding: 24px` | `var(--space-6)` |
| `padding: 48px` | `var(--space-12)` |
| `gap: 8px` | `var(--space-2)` |
| `gap: 12px` | `var(--space-3)` |
| `gap: 16px` | `var(--space-4)` |

> ⚠️ **Off-grid values `2px` and `6px`** appear 3× each. Evaluate whether to round to `--space-1` (4px) or keep as micro-adjustments with a comment explaining the exception.

**Typography** — Replace in all component CSS:

| Hardcoded | Replace with |
|---|---|
| `font-family: 'Red Hat Display', sans-serif` | `var(--font-family-base)` |
| `font-size: 10px` | `var(--text-2xs)` |
| `font-size: 12px` | `var(--text-xs)` |
| `font-size: 13px` | `var(--text-sm)` |
| `font-size: 14px` | `var(--text-base)` |
| `font-size: 15px` | `var(--text-md)` |
| `font-size: 16px` | `var(--text-lg)` |
| `font-size: 18px` | `var(--text-xl)` |
| `font-size: 20px` | `var(--text-2xl)` |
| `font-size: 24px` | `var(--text-3xl)` |
| `font-size: 28px` | `var(--text-4xl)` |
| `font-weight: 400` | `var(--font-regular)` |
| `font-weight: 500` | `var(--font-medium)` |
| `font-weight: 600` | `var(--font-semibold)` |
| `font-weight: 700` | `var(--font-bold)` |

**Border Radius** — Replace in all component CSS:

| Hardcoded | Replace with |
|---|---|
| `border-radius: 3px` | `var(--radius-xs)` |
| `border-radius: 4px` | `var(--radius-sm)` |
| `border-radius: 8px` | `var(--radius-md)` |
| `border-radius: 10px` | `var(--radius-md)` *(round up, verify visually)* |
| `border-radius: 12px` | `var(--radius-lg)` |
| `border-radius: 16px` | `var(--radius-xl)` |
| `border-radius: 20px` | `var(--radius-2xl)` |
| `border-radius: 26px` | `var(--radius-2xl)` *(round down, verify visually)* |
| `border-radius: 50%` | `var(--radius-full)` |
| `border-radius: 6px` | *Evaluate: use `--radius-sm` (4px) or `--radius-md` (8px)* |

> ⚠️ **`6px` and `10px` and `26px`** don't map cleanly. Decide on a canonical value and update the Figma components too for full alignment.

**Box Shadows** — Replace in all component CSS:

| Hardcoded | Replace with |
|---|---|
| `0 2px 4px rgba(0,0,0,0.2)` | `var(--shadow-sm)` |
| `0 4px 12px rgba(0,0,0,.08)` | `var(--shadow-md)` |
| `0 2px 8px rgba(0,0,0,0.15)` | `var(--shadow-lg)` |
| `0 4px 12px rgba(0,0,0,0.1)` | `var(--shadow-lg)` |
| `0 4px 12px rgba(0,0,0,0.3)` | `var(--shadow-xl)` |
| `0 0 0 2px rgba(17,109,255,.25)` | `var(--shadow-focus)` |

---

## Sprint 2 — Dark Mode Parity
> **Priority: 🔴 Critical** | 11 color tokens missing dark variants — live, premium, danger states will break

Add these to your `.dark` class or `prefers-color-scheme: dark` block:

```css
.dark, [data-theme="dark"] {
  /* Previously missing dark variants */
  --color-accent:            #3B8BFF;   /* was undefined */
  --color-danger-red:        #F87171;   /* light: #EF4444 */
  --color-dark-text:         #E8E8E8;   /* light: #161616 — inverted intentionally */
  --color-free-badge-green:  #4ADE80;   /* light: #22C55E */
  --color-grayOverlay:       rgba(255,255,255,0.08); /* light: rgba(237,237,237,0.5) */
  --color-live-red:          #F87171;   /* light: #EF4444 */
  --color-notif-badge-red:   #F87171;   /* assumed red, verify */
  --color-overlay:           rgba(0,0,0,0.85);  /* light: rgba(0,0,0,0.7) */
  --color-premium-active:    #B97D0C;   /* light: #D4960E */
  --color-premium-amber:     #F59E0B;   /* light: #E7A610 */
  --color-primary-active:    #2563EB;   /* light: #0A4AB0 */
}
```

### Fix the Naming Bug

`--color-grayOverlay` and `--color-gray-overlay` are the same semantic token — two names, inconsistent casing. This is a silent duplication that will cause drift.

**Action:** Standardize to kebab-case `--color-gray-overlay` everywhere and deprecate `--color-grayOverlay`.

```bash
# Find all usages to fix
grep -rn "grayOverlay" ./src
```

Replace every instance of `var(--color-grayOverlay` → `var(--color-gray-overlay`.

---

## Sprint 3 — Naming & Structure
> **Priority: 🟡 High** | Inconsistent prefixes, duplicate navigation components

### 3.1 Standardize Component Naming Convention

Adopt and document a 2-tier convention. The current split is mostly correct — it just needs to be made explicit:

| Tier | Naming Rule | Current Examples | Action |
|---|---|---|---|
| **Atoms** (primitives) | `app` prefix | `appButton`, `appInput`, `appBadge`, `appSelect`, `appTabs`, `appLink`, `appDivider` | ✅ Keep as-is |
| **Molecules / Organisms** (product) | No prefix, descriptive name | `videoActionBar`, `heroBanner`, `profileSidebar`, `notificationCenter` | ✅ Keep as-is |

Add a one-paragraph naming convention doc (see Sprint 4).

### 3.2 Resolve `topBar` vs `mainTopBar`

Two top navigation components exist with no documented distinction. Choose one path:

**Option A — Merge (recommended):** Make `mainTopBar` the canonical component with a `variant` prop:
```jsx
<TopBar variant="default" />    // was topBar
<TopBar variant="main" />       // was mainTopBar
```

**Option B — Document the split:** If they serve genuinely different contexts (e.g., sub-page nav vs root nav), add a JSDoc comment to each clarifying when to use which.

### 3.3 Consolidate Skeleton Components

`skeletonBlock`, `skeletonCard`, `skeletonInput` are three separate components for the same pattern. Consider a single composable `<Skeleton>` with a `shape` prop:

```jsx
<Skeleton shape="block" />
<Skeleton shape="card" />
<Skeleton shape="input" />
```

This reduces the component count and makes skeleton states more predictable.

### 3.4 Replace 23 Hardcoded Hex Values

All instances of `#FFFFFF` used as a direct `color:` or `background:` value should become `var(--color-white)`. The token already exists — it's just not being used consistently.

| Line | Hardcoded | Token |
|---|---|---|
| L517, L542 | `color: #000000` | `var(--color-dark-text)` |
| L521, L525, L529, L737, L1111, L1117, L1176, L1979, L1994, L2259, L2284 | `color: #FFFFFF` | `var(--color-white)` |
| L1630, L2264 | `background: #FFFFFF` | `var(--color-white)` |
| L34 | `background: #c7cbd0` | `var(--color-gray-200)` |
| L35 | `background: #979797` | `var(--color-gray-400)` |

---

## Sprint 4 — Documentation
> **Priority: 🟡 High** | Zero docs exist — the DS will erode without a shared vocabulary

### 4.1 Minimum Viable Docs Per Component

For each of the 29 components, add a JSDoc block at the top of the component definition:

```jsx
/**
 * AppButton — Primary interactive action element.
 *
 * @variant primary   - Main CTA, uses --color-primary
 * @variant secondary - Supporting action, uses --color-gray-100
 * @variant ghost     - Borderless, text-only action
 * @variant premium   - Amber CTA for paid feature upsell
 * @variant danger    - Destructive actions, uses --color-danger-red
 * @variant link      - Inline hyperlink style
 *
 * @state hover    - opacity 0.88
 * @state active   - scale(0.97)
 * @state disabled - opacity 0.45, cursor not-allowed
 * @state focus    - 2px outline, --color-primary
 *
 * @accessibility role="button", supports keyboard Enter/Space
 */
```

### 4.2 Add `sr-only` Utility Class

Icon-only buttons (especially in `videoActionBar`) must have accessible labels. Add this utility once globally:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```

Then audit every icon-only button for an `aria-label` or `.sr-only` span.

### 4.3 Naming Convention Reference Doc

Create a `CONTRIBUTING.md` or `DS-CONVENTIONS.md` with at minimum:

- Component naming rules (Atoms = `app` prefix, Organisms = descriptive)
- Token naming rules (`--category-variant-modifier`)
- State requirements (all interactive components must define: hover, active, disabled, focus)
- 8px grid rule and approved spacing tokens
- Dark mode requirement (every color token must have a dark variant)

### 4.4 Token Documentation Table

Add a living reference table mapping every token to its value and usage context. Start with colors (already the most complete), then add as new token categories are defined.

---

## Verification Checklist

After completing all sprints, run through this before the next audit:

- [ ] `:root` token block defines spacing, typography, radius, and shadow
- [ ] Zero occurrences of `font-size: [number]px` without a token (search: `font-size: \d+px`)
- [ ] Zero occurrences of `padding/margin/gap: [number]px` without a token
- [ ] Zero occurrences of `border-radius: [number]px` without a token
- [ ] Zero occurrences of `box-shadow: 0` without a token
- [ ] All 28 color tokens have a dark variant
- [ ] `--color-grayOverlay` fully replaced by `--color-gray-overlay`
- [ ] `#FFFFFF` / `#000000` used only as token fallbacks, not bare values
- [ ] `topBar` / `mainTopBar` resolved to single canonical component
- [ ] JSDoc block on every component
- [ ] `sr-only` utility added
- [ ] Icon-only buttons all have `aria-label`

---

## Expected Score After Each Sprint

| After Sprint | Projected Score |
|---|---|
| Baseline (current) | **6.8** |
| + Sprint 1 (tokens) | ~7.6 |
| + Sprint 2 (dark mode) | ~8.0 |
| + Sprint 3 (naming/structure) | ~8.3 |
| + Sprint 4 (docs) | **~9.1** |

---

*Pixellot DSv2 Fix Plan · Generated March 24, 2026*
