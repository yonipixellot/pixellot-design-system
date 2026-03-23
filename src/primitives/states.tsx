import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBtn } from "./buttons";

type PEmptyStateProps = { preset?: string; icon?: ReactNode; title?: string; subtitle?: string; cta?: string; onAction?: () => void };
function PEmptyState({ preset, icon, title, subtitle, cta, onAction }: PEmptyStateProps) {
  const c = useColors();
  const p = preset ? EMPTY_PRESETS[preset] || {} : {};
  const _icon = icon || p.icon || "search";
  const _title = title || p.title || "Nothing Here";
  const _subtitle = subtitle || p.subtitle || "";
  const _cta = cta !== undefined ? cta : (p.cta || null);
  const IconComp = ICON_MAP[_icon] || Search;
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: `40px ${T.spacing.xl}px`, textAlign: "center" }}>
    <div style={{ width: 64, height: 64, borderRadius: "50%", background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: T.spacing.lg }}>
      <IconComp size={28} color={c.gray400} role="img" aria-label={_title} />
    </div>
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, color: c.darkText, marginBottom: T.spacing.sm }}>{_title}</div>
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, lineHeight: 1.5, maxWidth: 280, marginBottom: _cta ? T.spacing.xl : 0 }}>{_subtitle}</div>
    {_cta && <PBtn variant="primary" size="md" fullWidth={false} onClick={onAction}>{_cta}</PBtn>}
  </div>;
}


type PErrorStateProps = { variant?: "generic" | "offline" | "404"; title?: string; subtitle?: string; onRetry?: () => void };
function PErrorState({ variant = "generic", title, subtitle, onRetry }: PErrorStateProps) {
  const c = useColors();
  const variants = {
    generic:  { title: "Something Went Wrong",     subtitle: "An unexpected error occurred. Please try again." },
    network:  { title: "Connection Error",          subtitle: "Please check your internet connection and try again." },
    timeout:  { title: "Request Timed Out",         subtitle: "The server took too long to respond. Please try again." },
    video:    { title: "Video Unavailable",         subtitle: "This video failed to load. It may still be processing." },
    data:     { title: "Failed to Load Data",       subtitle: "We couldn't load this content right now. Please try again." },
    auth:     { title: "Session Expired",           subtitle: "Your session has expired. Please sign in again." },
  };
  const v = variants[variant] || variants.generic;
  const _title = title || v.title;
  const _sub = subtitle || v.subtitle;
  const isAuth = variant === "auth";
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: `40px ${T.spacing.xl}px`, textAlign: "center" }}>
    <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${c.errorRed}14`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: T.spacing.lg }}>
      <X size={28} color={c.errorRed} role="img" aria-label={_title} />
    </div>
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, color: c.darkText, marginBottom: T.spacing.sm }}>{_title}</div>
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, lineHeight: 1.5, maxWidth: 280, marginBottom: T.spacing.xl }}>{_sub}</div>
    <PBtn variant={isAuth ? "primary" : "muted"} size="md" fullWidth={false} onClick={onRetry}>
      {isAuth ? "Sign In" : "Try Again"}
    </PBtn>
  </div>;
}




type POfflineBannerProps = { onRetry?: () => void };
function POfflineBanner({ onRetry }: POfflineBannerProps) {
  const c = useColors();
  const errBg = c.errorBg;
  const errBorder = c.errorBorder;
  return <div role="alert" style={{ display: "flex", alignItems: "center", gap: T.spacing.md, background: errBg, borderRadius: T.radii.badge, padding: `${T.spacing.md}px ${T.spacing.lg}px`, border: `1px solid ${errBorder}` }}>
    <div aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: c.errorRed, flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, color: c.darkText }}>You're offline</div>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.regular, color: c.gray500 }}>Check your connection and try again</div>
    </div>
    <button onClick={onRetry} aria-label="Retry connection" style={{ background: "none", border: "none", fontFamily: F, fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.semibold, color: c.errorRed, cursor: "pointer", flexShrink: 0, borderRadius: T.radii.sm }}>Retry</button>
  </div>;
}



function PSkeletonBlock({ width, height, borderRadius, style }: { width?: number|string, height?: number|string, borderRadius?: number, style?: any }) {
  const c = useColors();
  return <div style={{
    width: width || "100%",
    height: height || 16,
    borderRadius: borderRadius || T.radii.sm,
    background: `linear-gradient(90deg, ${c.gray100} 25%, ${c.gray50} 50%, ${c.gray100} 75%)`,
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite ease-in-out",
    ...style
  }} />;
}


function PSkeletonCard() {
  const c = useColors();
  return <div style={{ background: c.white, border: `1px solid ${c.gray100}`, borderRadius: T.radii.md, overflow: "hidden" }}>
    <div style={{ width: "100%", height: 180, background: `linear-gradient(90deg, ${c.gray100} 25%, ${c.gray50} 50%, ${c.gray100} 75%)`, backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite ease-in-out" }} />
    <div style={{ padding: T.spacing.md, display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
      <PSkeletonBlock height={20} style={{ width: "80%" }} />
      <PSkeletonBlock height={16} style={{ width: "100%" }} />
      <PSkeletonBlock height={16} style={{ width: "90%" }} />
    </div>
  </div>;
}



function PSkeletonInput() {
  return <PSkeletonBlock height={T.sizes.inputHeight} borderRadius={T.radii.sm} />;
}


function PLoadingSpinner({ size }: { size?: number } = {}) {
  const c = useColors();
  const s = size || 24;
  return <div style={{
    width: s,
    height: s,
    border: `3px solid ${c.gray100}`,
    borderTop: `3px solid ${c.primary}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }} />;
}

export { PEmptyState, PErrorState, POfflineBanner, PSkeletonBlock, PSkeletonCard, PSkeletonInput, PLoadingSpinner };
