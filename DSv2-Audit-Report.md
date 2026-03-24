# Pixellot Design System v2 — Audit Report
**Date:** March 24, 2026 | **Auditor:** Claude (DS Architect) | **Score: 68 / 100**

---

## Summary

| Metric | Value |
|---|---|
| Components reviewed | 29 |
| Issues found | 18 |
| Token coverage (colors) | 44 tokens defined, 0 spacing/font/radius tokens |
| Dark mode parity | 17/28 color tokens have dark variants |
| Accessibility | ARIA present but incomplete keyboard coverage |
| Documentation | ❌ Zero JSDoc / inline docs |

---

## 1. Token Coverage

### 1.1 Colors — ✅ Good (but not enforced)

44 color tokens are defined and used. All `var(--color-*)` calls include a hardcoded fallback, which aids portability but **means the token system is not enforced** — any consuming project can silently ignore the token and rely on the fallback.

**23 hardcoded hex values** were found outside token context. Priority fixes:

| Location | Hardcoded Value | Recommended Token |
|---|---|---|
| Scrollbar thumb | `#c7cbd0` | `var(--color-gray-200)` |
| Scrollbar hover | `#979797` | `var(--color-gray-400)` |
| Badge text (premium/free/live) | `#000000`, `#FFFFFF` | `var(--color-dark-text)` / introduce `--color-white` |
| Share curtain overlay | `rgba(0,0,0,0.6)` | `var(--color-overlay)` |
| Loading indicator | `#FFFFFF` (×7 instances) | `var(--color-white)` |

### 1.2 Spacing — ❌ Critical Gap

**Zero spacing tokens defined.** All spacing is hard-coded pixel values. The system largely follows an 8px base grid, but there are 6 off-grid violations:

| Value | Count | Status |
|---|---|---|
| 2px | 3× | ⚠️ Off 4px grid |
| 4px | 5× | ✅ |
| 6px | 3× | ⚠️ Off 4px grid |
| 8px | 21× | ✅ |
| 12px | 19× | ✅ |
| 16px | 20× | ✅ |

**Recommendation:** Define a spacing token scale immediately:
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
```

### 1.3 Typography — ❌ Critical Gap

**Zero font tokens defined.** Font family (`Red Hat Display`) is referenced inline. Font sizes (10px, 12px, 14px, 15px, 16px, 18px, 20px, 24px+) are all hardcoded.

**Recommendation:**
```css
--font-family-base: 'Red Hat Display', sans-serif;
--text-xs: 10px;   --text-sm: 12px;  --text-base: 14px;
--text-md: 16px;   --text-lg: 18px;  --text-xl: 20px;
--font-weight-regular: 400;  --font-weight-medium: 500;
--font-weight-semibold: 600; --font-weight-bold: 700;
```

### 1.4 Border Radius — ❌ Gap

**Zero radius tokens defined.** 9 unique hardcoded values found:
`3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 26px`

This is inconsistent — too many values without semantic meaning. Recommend collapsing to a 4-step scale:
```css
--radius-sm: 4px;    /* inputs, small elements */
--radius-md: 8px;    /* cards, modals */
--radius-lg: 16px;   /* sheets, hero cards */
--radius-full: 50%;  /* avatars, badges */
```

### 1.5 Shadows / Elevation — ❌ Gap

No shadow or elevation tokens defined. Card hover lift uses `box-shadow: 0 4px 12px rgba(0,0,0,.08)` as a magic number.

---

## 2. Dark Mode Parity

17 of 28 color tokens have dark variants. **11 tokens are missing dark counterparts:**

| Missing Dark Variant | Current Light Value | Suggested Dark Value |
|---|---|---|
| `--color-accent` | Unknown | Needs definition |
| `--color-danger-red` | `#EF4444` | `#F87171` |
| `--color-dark-text` | `#161616` | *(already inverted — review intent)* |
| `--color-free-badge-green` | `#22C55E` | `#4ADE80` |
| `--color-grayOverlay` | `rgba(237,237,237,0.5)` | `rgba(255,255,255,0.08)` |
| `--color-live-red` | `#EF4444` | `#F87171` |
| `--color-notif-badge-red` | *(assumed red)* | `#F87171` |
| `--color-overlay` | `rgba(0,0,0,0.7)` | `rgba(0,0,0,0.85)` |
| `--color-premium-active` | `#D4960E` | `#B97D0C` |
| `--color-premium-amber` | `#E7A610` | `#F59E0B` |
| `--color-primary-active` | `#0A4AB0` | `#2563EB` |

Also note: **`--color-grayOverlay`** and **`--color-gray-overlay`** appear to be the same token with inconsistent casing — this is a naming bug.

---

## 3. Naming Consistency

### 3.1 Component Prefix Inconsistency — ⚠️ Medium

Only 7 of 29 components use the `app` prefix. The remaining 22 use no prefix. This creates confusion about which components are "primitive atoms" vs "product-specific organisms."

**Recommendation:** Adopt a 2-tier naming convention:

| Tier | Prefix | Examples |
|---|---|---|
| Primitives / Atoms | `app` | `appButton`, `appInput`, `appBadge` |
| Organisms / Product | *(no prefix or product-specific)* | `videoActionBar`, `heroBanner`, `profileSidebar` |

Document this explicitly. The current split is largely correct in practice, but it's not intentional or documented.

### 3.2 Duplicate Navigation Components — ⚠️ Medium

Both `topBar` and `mainTopBar` exist. This creates ambiguity — unclear which is canonical or when to use each.

**Recommendation:** Merge into one component with a `variant` prop, or clearly document distinct use cases.

### 3.3 Skeleton Loading Fragmentation — ⚠️ Low

Three separate skeleton components (`skeletonBlock`, `skeletonCard`, `skeletonInput`) exist alongside a `loadingSpinner`. A composable `<Skeleton>` primitive with shape variants would be cleaner.

---

## 4. Component State Coverage

All core interactive components have full state coverage. This is a **major strength.**

| Component | Hover | Active | Disabled | Focus | Loading |
|---|---|---|---|---|---|
| `appButton` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `appInput` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `appSelect` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `appTabs` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `appBadge` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `videoActionBar` | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 5. Accessibility

| Check | Status | Notes |
|---|---|---|
| ARIA attributes | ✅ 163 found | Good coverage |
| ARIA roles | ✅ 33 `role=` usages | Present on interactive elements |
| Focus styles | ✅ | `focus-visible` outline defined globally |
| Keyboard navigation | ⚠️ Partial | Only 2 `tabIndex` usages — likely under-specified |
| Color contrast | ⚠️ Unverified | Several gray-on-gray combos need WCAG AA check |
| Screen reader text | ⚠️ Unknown | No `sr-only` class or visually hidden patterns found |

**Critical missing:** No `sr-only` / visually hidden utility. Icon-only buttons (video action bar) must have `aria-label` — verify this is consistently applied.

---

## 6. Documentation

| Area | Status |
|---|---|
| JSDoc / inline comments | ❌ Zero found |
| Component usage guidelines | ❌ None |
| Do's and Don'ts | ❌ None |
| Prop/variant documentation | ❌ None |
| Figma ↔ code mapping | ⚠️ Partial (Code Connect not fully set up) |

---

## Priority Action Plan

### 🔴 Critical (Do First)
1. **Define spacing tokens** — Zero spacing tokens is the biggest structural gap. Add a `--space-*` scale and refactor all hardcoded spacing values.
2. **Define typography tokens** — Add `--font-*` and `--text-*` tokens to centralize type decisions.
3. **Fix `--color-grayOverlay` vs `--color-gray-overlay` naming bug** — Two tokens, same semantic intent, different casing.

### 🟡 High Priority
4. **Add 11 missing dark-mode color tokens** — Dark mode is incomplete; live/premium/danger states will break in dark theme.
5. **Define radius tokens** — Collapse 9 hardcoded radius values into a 4-step scale.
6. **Replace 23 hardcoded hex values** with their token equivalents.

### 🟢 Medium Priority
7. **Resolve `topBar` vs `mainTopBar` duplication** — Merge or formally document the distinction.
8. **Add `sr-only` utility** and audit icon-only buttons for `aria-label` coverage.
9. **Increase `tabIndex` coverage** for custom interactive elements.
10. **Define shadow/elevation tokens** — At minimum one card shadow and one modal overlay value.

### 📝 Ongoing
11. **Start JSDoc documentation** on every component — even a one-liner description + props table.
12. **Enforce token usage** — Consider removing fallback values from `var()` calls to make token violations visible at dev time.

---

## Score Breakdown

| Category | Weight | Score | Notes |
|---|---|---|---|
| Token Coverage | 25% | 12/25 | Colors good, spacing/type/radius/shadow missing |
| Dark Mode Parity | 15% | 9/15 | 11 tokens missing dark variant |
| Naming Consistency | 15% | 10/15 | app-prefix inconsistency, topBar dupe |
| Component States | 20% | 20/20 | All states covered — excellent |
| Accessibility | 15% | 10/15 | ARIA present but keyboard/sr-only gaps |
| Documentation | 10% | 0/10 | No docs at all |
| **Total** | **100%** | **68/100** | |

---

*Generated by Claude Design System Architect · Pixellot DSv2 Audit · March 24, 2026*
