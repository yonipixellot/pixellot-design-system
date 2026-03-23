/**
 * Theme — React context and hooks for theme mode and colors
 */

import React, { createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { F, T, LIGHT, DARK } from "./tokens";

export const ThemeCtx = createContext<"light" | "dark">("light");

/**
 * useColors — Get the current color palette based on theme mode
 */
export function useColors() {
  const th = useContext(ThemeCtx);
  return th === "dark" ? DARK : LIGHT;
}

/**
 * useThemeMode — Get the current theme mode
 */
export function useThemeMode() {
  return useContext(ThemeCtx);
}

/**
 * ThemeProvider — Wrap your app to provide theme context
 */
export function ThemeProvider({ children, initialMode = "light" }: { children: ReactNode; initialMode?: "light" | "dark" }) {
  const [mode, setMode] = React.useState<"light" | "dark">(initialMode);
  return (
    <ThemeCtx.Provider value={mode}>
      {children}
    </ThemeCtx.Provider>
  );
}
