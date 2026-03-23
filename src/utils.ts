import { createContext, useContext, type CSSProperties } from "react";

// Type definitions
export type IconComponent = React.ComponentType<{ size?: number; color?: string; fill?: string; style?: CSSProperties }>;

// Color tokens
const LIGHT = {
  primary: "#116DFF", primaryHover: "#0D5AD4", primaryActive: "#0A4AB0",
  white: "#FFFFFF", black: "#000000", darkText: "#161616",
  gray50: "#F5F5F5", gray100: "#EDEDED", gray200: "#C7CBD0", gray300: "#DCDCDC", gray400: "#979797", gray500: "#6C6C6C",
  grayOverlay: "rgba(237,237,238,0.6)", grayOverlayHover: "rgba(237,237,238,0.8)",
  heroBg: "#1A3B8A", accent: "#E8332B",
  jerseyRed: "#D0142C", jerseyStroke: "#FFFFFF",
  premiumYellow: "#FFE000", premiumAmber: "#E7A610", premiumHover: "#E7A610", premiumActive: "#D4960E", premiumDark: "#362F2C",
  freeBadgeGreen: "#22C55E", claimedPurple: "#8B5CF6",
  infoBgPurple: "rgba(139,92,246,0.08)", linkBlue: "#2563EB", liveRed: "#EF4444",
  highlightGray: "#6C6C6C", cardBg: "#F3F4F6",
  barRed: "#E8332B", barGray: "#AFB6C1", barTrack: "#EEEEEE",
  dividerDark: "#444746",
  successGreen: "#22C55E", errorRed: "#EF4444",
  overlay: "rgba(0,0,0,0.7)", notifBadgeRed: "#EF4444",
  highlightsBadgeBg: "#6C6C6C", highlightsBadgeText: "#FFE000",
  cardHoverBg: "#F0F0F0", disabledTextOnDark: "rgba(255,255,255,0.35)",
  dangerRed: "#EF4444",
  selectedGreen: "#02814a", errorBg: "#FEF2F2", errorBorder: "rgba(239,68,68,0.15)",
};

const DARK = {
  primary: "#3B8BFF", primaryHover: "#5A9FFF", primaryActive: "#2563EB",
  white: "#1A1A1A", black: "#FFFFFF", darkText: "#E8E8E8",
  gray50: "#262626", gray100: "#333333", gray200: "#444444", gray300: "#555555", gray400: "#888888", gray500: "#A0A0A0",
  grayOverlay: "rgba(255,255,255,0.08)", grayOverlayHover: "rgba(255,255,255,0.12)",
  heroBg: "#0F2557", accent: "#E8332B",
  jerseyRed: "#D0142C", jerseyStroke: "#FFFFFF",
  premiumYellow: "#FFE000", premiumAmber: "#E7A610", premiumHover: "#F5B800", premiumActive: "#E7A610", premiumDark: "#362F2C",
  freeBadgeGreen: "#22C55E", claimedPurple: "#A78BFA",
  infoBgPurple: "rgba(167,139,250,0.1)", linkBlue: "#60A5FA", liveRed: "#EF4444",
  highlightGray: "#A0A0A0", cardBg: "#262626",
  barRed: "#E8332B", barGray: "#666666", barTrack: "#333333",
  dividerDark: "#555555",
  successGreen: "#34D399", errorRed: "#FF6B6B",
  overlay: "rgba(0,0,0,0.85)", notifBadgeRed: "#EF4444",
  highlightsBadgeBg: "#444444", highlightsBadgeText: "#FFE000",
  cardHoverBg: "#333333", disabledTextOnDark: "rgba(200,200,200,0.35)",
  dangerRed: "#FF6B6B",
  selectedGreen: "#02814a", errorBg: "rgba(239,68,68,0.1)", errorBorder: "rgba(239,68,68,0.25)",
};

// Theme context
export const ThemeCtx = createContext("light");

// Hook for colors
export function useColors() {
  const th = useContext(ThemeCtx);
  return th === "dark" ? DARK : LIGHT;
}

// Hook for theme mode
export function useThemeMode() {
  return useContext(ThemeCtx);
}

// Focus ring utility
export const focusRing = (c: any) => ({ outline: `2px solid ${c.primary}`, outlineOffset: 2 });

// Typography and spacing
export const T = {
  typography: {
    sizes:   { micro: 9, mini: 10, xxs: 11, caption: 12, body2: 13, xs: 14, sm: 15, base: 16, h3: 18, lg: 20, xl: 22, xxl: 24, h2: 26, h1: 28, jersey: 29, display: 32 },
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700, extraBold: 800 },
  },
  spacing: { xxs: 2, xs: 4, xs2: 6, sm: 8, sm2: 10, md: 12, md2: 14, lg: 16, lg2: 20, xl: 24, xxl: 32, xxxl: 34, hero: 48 },
  sizes: {
    inputHeight: 46, buttonSm: 32, buttonMd: 40, buttonLg: 48,
    tabHeight: 38, chipHeight: 40, topBarHeight: 72,
    containerWidth: 398, pageMaxWidth: 430, heroHeight: 340,
    jerseySize: 73, logoSmall: 48,
  },
  radii: { sm: 4, xs: 6, thumb: 8, logo: 10, badge: 12, card: 14, md: 16, lg: 20, chip: 26, button: 28, sheet: 30, xl: 32, pill: 9999 },
  strokes: { thin: 0.67, regular: 1, medium: 1.33, thick: 1.7, bold: 2, heavy: 2.5, extraHeavy: 2.67 },
  breakpoints: { mobile: 768, tablet: 1024 },
};

// Font family
export const F = "'Red Hat Display', sans-serif";

// Default colors
export const DEFAULTS = { jerseyRed: "#D0142C", heroBg: "#1A3B8A" } as const;

// Jersey SVG paths
export const JERSEY_PATH_73 = "M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z";
export const JERSEY_PATH_56 = "M 27.66 0.9 C 23.5 0.9 20.1 2.9 17.1 4.9 L 0 11.3 L 6.4 29.2 L 11.5 27.4 L 11.5 80 L 44.5 80 L 44.5 27.4 L 49.6 29.2 L 56 11.3 L 38.9 4.9 C 35.9 2.9 32.0 0.9 27.66 0.9 Z";

// Color contrast helper
export function _isLightColor(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.length === 3 ? h[0]+h[0] : h.substring(0,2), 16);
  const g = parseInt(h.length === 3 ? h[1]+h[1] : h.substring(2,4), 16);
  const b = parseInt(h.length === 3 ? h[2]+h[2] : h.substring(4,6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.55;
}
