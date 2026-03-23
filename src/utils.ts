/**
 * Utils — Re-exports from tokens/theme + unique utilities
 * This is the single import point for primitives.
 */

import type { CSSProperties } from "react";

// Re-export everything from tokens and theme so primitives only need one import
export { T, F, DEFAULTS, LIGHT, DARK } from "./tokens";
export { ThemeCtx, useColors, useThemeMode, useToggleTheme, useSetThemeMode, ThemeProvider } from "./theme";
export type { ThemeProviderProps } from "./theme";

// ── Types ──
export type IconComponent = React.ComponentType<{ size?: number; color?: string; fill?: string; style?: CSSProperties }>;

// ── Focus ring utility ──
export const focusRing = (c: { primary: string }) => ({ outline: `2px solid ${c.primary}`, outlineOffset: 2 });

// ── Jersey SVG paths ──
export const JERSEY_PATH_73 = "M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z";
export const JERSEY_PATH_56 = "M 27.66 0.9 C 23.5 0.9 20.1 2.9 17.1 4.9 L 0 11.3 L 6.4 29.2 L 11.5 27.4 L 11.5 80 L 44.5 80 L 44.5 27.4 L 49.6 29.2 L 56 11.3 L 38.9 4.9 C 35.9 2.9 32.0 0.9 27.66 0.9 Z";

// ── Color contrast helper ──
export function _isLightColor(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.length === 3 ? h[0]+h[0] : h.substring(0,2), 16);
  const g = parseInt(h.length === 3 ? h[1]+h[1] : h.substring(2,4), 16);
  const b = parseInt(h.length === 3 ? h[2]+h[2] : h.substring(4,6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.55;
}
