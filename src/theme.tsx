/**
 * Theme — React context and hooks for theme mode and colors
 *
 * Usage:
 *   <ThemeProvider>
 *     <App />
 *   </ThemeProvider>
 *
 * In any component:
 *   const colors = useColors();         // LIGHT or DARK palette
 *   const mode = useThemeMode();        // "light" | "dark"
 *   const toggle = useToggleTheme();    // () => void — flips mode
 *   const setMode = useSetThemeMode();  // (mode: "light"|"dark") => void
 */

import React, { createContext, useContext, useMemo, type ReactNode } from "react";
import { LIGHT, DARK } from "./tokens";

// ── Contexts ──
type ThemeMode = "light" | "dark";
export const ThemeCtx = createContext<ThemeMode>("light");
const ThemeSetCtx = createContext<(mode: ThemeMode) => void>(() => {});

// ── Hooks ──

/** Get the full color palette for the current theme mode */
export function useColors() {
  const mode = useContext(ThemeCtx);
  return mode === "dark" ? DARK : LIGHT;
}

/** Get the current theme mode string */
export function useThemeMode(): ThemeMode {
  return useContext(ThemeCtx);
}

/** Set the theme mode directly */
export function useSetThemeMode() {
  return useContext(ThemeSetCtx);
}

/** Toggle between light and dark */
export function useToggleTheme() {
  const mode = useContext(ThemeCtx);
  const setMode = useContext(ThemeSetCtx);
  return () => setMode(mode === "light" ? "dark" : "light");
}

// ── Provider ──

export interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
}

export function ThemeProvider({ children, initialMode = "light" }: ThemeProviderProps) {
  const [mode, setMode] = React.useState<ThemeMode>(initialMode);

  // Stable setter ref — avoids unnecessary re-renders
  const setter = useMemo(() => setMode, []);

  return (
    <ThemeCtx.Provider value={mode}>
      <ThemeSetCtx.Provider value={setter}>
        {children}
      </ThemeSetCtx.Provider>
    </ThemeCtx.Provider>
  );
}
