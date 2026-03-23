import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, useThemeMode, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBadge, LockSvg } from "./badges";
import { CopyBtn } from "./inputs";

type PVideoThumbnailProps = { orientation?: "landscape" | "portrait" | "vertical"; locked?: boolean; duration?: string; title?: string; subtitle?: string; showJerseyBadge?: boolean; jerseyNumber?: number; jerseyLabel?: string; jerseyColor?: string; thumbnailUrl?: string };
function PVideoThumbnail({ orientation = "landscape", locked = false, duration = "1:42:15", title = "Full Game", subtitle = "Free", showJerseyBadge = false, jerseyNumber = 1, jerseyLabel = "Player Highlights", jerseyColor = DEFAULTS.jerseyRed, thumbnailUrl }: PVideoThumbnailProps) {
  const c = useColors();
  const isVert = orientation === "vertical";
  const container = isVert
    ? { borderRadius: T.radii.badge, width: 108, height: 192 }
    : { borderRadius: T.radii.card, width: "100%", maxWidth: 398, aspectRatio: "16/9", marginBottom: T.spacing.md };
  const badge = isVert ? { top: 7, left: 6, padding: "2px 4px" } : { top: 8, left: 8, padding: "2px 8px" };
  const icon = isVert ? { top: 6, right: 6 } : { top: 8, right: 8 };
  const grad = isVert
    ? { background: "linear-gradient(to top, rgba(0,0,0,0.5) 49%, rgba(114,123,132,0) 100%)", padding: T.spacing.sm }
    : { background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)", padding: T.spacing.md };
  const titleStyle = isVert
    ? { fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.white, lineHeight: "16px" }
    : { fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.white, lineHeight: "18px" };
  const subStyle = isVert
    ? { fontSize: T.typography.sizes.mini, fontWeight: T.typography.weights.bold, color: c.gray300, lineHeight: "15px", marginTop: T.spacing.xxs }
    : { fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.regular, color: c.gray300, lineHeight: "16.5px", marginTop: T.spacing.xxs };
  return <div style={{ position: "relative", overflow: "hidden", background: c.heroBg, ...container }}>
    {/* Thumbnail image if provided */}
    {thumbnailUrl && <img src={thumbnailUrl} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />}
    {/* Blur overlay for locked content */}
    {locked && !thumbnailUrl && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)", filter: "blur(8px)", transform: "scale(1.1)", zIndex: 0 }} />}
    {/* Duration badge — top left */}
    <div style={{ position: "absolute", ...badge, background: "rgba(0,0,0,0.55)", borderRadius: T.radii.pill, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: F, fontWeight: T.typography.weights.medium, fontSize: T.typography.sizes.xxs, color: "#FFFFFF", lineHeight: 1 }}>{duration}</span>
    </div>
    {/* Top-right icon — Play (free) or Lock (premium) — only on non-jersey-badge variant */}
    {!showJerseyBadge && (locked
      ? <div style={{ position: "absolute", ...icon, width: 28, height: 28, background: c.premiumDark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, border: `${T.strokes.medium}px solid ${c.premiumYellow}`, boxSizing: "border-box" }}><LockSvg size={11} fill={c.premiumYellow} /></div>
      : <div style={{ position: "absolute", ...icon, width: 28, height: 28, borderRadius: "50%", background: c.gray500, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><Play size={12} color={c.jerseyStroke} fill={c.jerseyStroke} /></div>)}
    {/* Center play button — jersey badge variant only */}
    {showJerseyBadge && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><Play size={16} color="#FFFFFF" fill="#FFFFFF" /></div>}
    {/* Bottom gradient — jersey badge variant */}
    {showJerseyBadge
      ? <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 49%, rgba(114,123,132,0) 100%)", padding: "12px 8px", zIndex: 1, display: "flex", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: T.spacing.xs2, alignItems: "center" }}>
            {/* Sleeveless jersey — same shape as PJersey from follow-a-player page */}
            <div style={{ width: 19.25, height: 28, position: "relative", flexShrink: 0 }}>
              <svg viewBox="12 4 50 66" fill="none" preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "drop-shadow(0px 0.7px 3.5px rgba(5,27,68,0.2))" }}>
                <path d={JERSEY_PATH_73} fill={jerseyColor} stroke="white" strokeWidth="2"/>
              </svg>
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-46%)", fontFamily: F, fontWeight: T.typography.weights.bold, fontSize: T.typography.sizes.mini, color: _isLightColor(jerseyColor) ? c.darkText : "#fff", lineHeight: 1 }}>{jerseyNumber}</span>
            </div>
            <div style={{ fontFamily: F, fontWeight: T.typography.weights.bold, fontSize: T.typography.sizes.caption, color: c.gray200, lineHeight: "14px" }}>{jerseyLabel}</div>
          </div>
        </div>
      : <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, ...grad, zIndex: 1 }}>
          <div style={titleStyle}>{title}</div>
          <div style={subStyle}>{subtitle}</div>
        </div>}
  </div>;
}


type PBrandHeroProps = { primaryColor?: string; logo?: ReactNode; logoSize?: number; height?: number };
function PBrandHero({ primaryColor = DEFAULTS.heroBg, logo, logoSize = 80, height = T.sizes.heroHeight }: PBrandHeroProps) {
  /* Gradient hero — primary color + 30% darker hue at bottom, large centered logo */
  const darkerColor = (() => {
    const hex = primaryColor.replace("#", "");
    const r = Math.max(0, Math.round(parseInt(hex.substring(0, 2), 16) * 0.7));
    const g = Math.max(0, Math.round(parseInt(hex.substring(2, 4), 16) * 0.7));
    const b = Math.max(0, Math.round(parseInt(hex.substring(4, 6), 16) * 0.7));
    return `rgb(${r},${g},${b})`;
  })();
  return <div style={{ width: "100%", height, background: `linear-gradient(180deg, ${primaryColor} 0%, ${darkerColor} 100%)`, borderRadius: `0 0 ${T.radii.xl}px ${T.radii.xl}px`, display: "flex", alignItems: "center", justifyContent: "center" }}>
    {logo || <div style={{ width: logoSize * 2.2, height: logoSize * 2.2, borderRadius: T.radii.md, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed rgba(255,255,255,0.3)" }}>
      <svg width={logoSize * 1.1} height={logoSize * 1.1} viewBox="0 0 80 80" fill="none"><rect x="4" y="4" width="72" height="72" rx="14" fill="rgba(255,255,255,0.2)" /><path d="M28 52 L40 28 L52 52 Z" fill="rgba(255,255,255,0.5)" /><circle cx="33" cy="35" r="5" fill="rgba(255,255,255,0.5)" /></svg>
    </div>}
  </div>;
}

const CodeBlock = ({ code, title }) => {
  const c = useColors();
  const isLight = useThemeMode() === "light";
  return <div style={{ background: isLight ? "#1e293b" : "#0D1117", borderRadius: T.radii.badge, overflow: "hidden", marginTop: T.spacing.md }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: `${T.spacing.sm}px ${T.spacing.md}px`, background: isLight ? "#0f172a" : "#161b22", borderBottom: `1px solid ${isLight ? "#334155" : "#30363d"}` }}>
      <span style={{ color: isLight ? "#94a3b8" : "#8b949e", fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold}}>{title}</span><CopyBtn text={code} />
    </div>
    <pre style={{ padding: T.spacing.lg, margin: 0, color: isLight ? "#e2e8f0" : "#c9d1d9", fontSize: T.typography.sizes.caption, lineHeight: 1.6, overflow: "auto", maxHeight: 400, fontFamily: '"Fira Code","SF Mono",monospace', whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{code}</pre>
  </div>;
};

type CardProps = { title?: string; desc?: string; children?: ReactNode; code?: string; codeTitle?: string; tokens?: any };
const Card = ({ title, desc, children, code, codeTitle }: CardProps) => {
  const c = useColors();
  const isLight = useThemeMode() === "light";
  return <div style={{ background: c.white, border: `1px solid ${isLight ? c.gray200 : c.gray200}`, borderRadius: T.radii.md, overflow: "hidden", marginBottom: T.spacing.lg2 }}>
    <div style={{ padding: "14px 20px", borderBottom: `1px solid ${isLight ? c.gray50 : c.gray100}` }}>
      <h3 style={{ margin: 0, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.bold, color: c.darkText }}>{title}</h3>
      {desc && <p style={{ margin: "4px 0 0", fontSize: T.typography.sizes.caption, color: c.gray500 }}>{desc}</p>}
    </div>
    <div style={{ padding: 20 }}>{children}</div>
    {code && <CodeBlock code={code} title={codeTitle || "SFC"} />}
  </div>;
};

const Swatch = ({ name, hex }) => {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm2, padding: "5px 0" }}>
    <div style={{ width: 36, height: 36, borderRadius: T.radii.thumb, background: hex, border: `1px solid ${c.gray200}`, flexShrink: 0 }} />
    <div><div style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{name}</div><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray500, fontFamily: "monospace" }}>{hex}</div></div>
  </div>;
};

// ── NEW COMPONENTS (Gap Report items 1.2–1.7) ──


/* ── Avatars & Identity ── */


type PAdBannerProps = { active?: number };
function PAdBanner({ active: initialActive = 0 }: PAdBannerProps) {
  const c = useColors();
  const [active, setActive] = useState(initialActive);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);
  var slides = [
    { bg: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)", label: "Ad Slot 1" },
    { bg: "linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)", label: "Ad Slot 2" },
  ];
  const handlePointerDown = (e) => { startX.current = e.clientX; dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); };
  const handlePointerMove = (e) => { if (!dragging.current) return; setDragX(e.clientX - startX.current); };
  const handlePointerUp = () => { if (!dragging.current) return; dragging.current = false; if (dragX < -40 && active < slides.length - 1) setActive(active + 1); else if (dragX > 40 && active > 0) setActive(active - 1); setDragX(0); };
  return <div style={{ position: "relative", width: "100%", borderRadius: 0, overflow: "hidden", touchAction: "pan-y", cursor: "grab" }}
    onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}>
    <div style={{ display: "flex", transition: dragging.current ? "none" : "transform 0.3s", transform: `translateX(calc(-${active * 100}% + ${dragX}px))` }}>
      {slides.map(function(s, i) { return <div key={i} style={{ minWidth: "100%", height: 180, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
        <span style={{ color: c.white, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.semibold, opacity: 0.7 }}>{s.label}</span>
      </div>; })}
    </div>
    <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: T.spacing.sm }}>
      {slides.map(function(_, i) { return <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === active ? c.white : "rgba(255,255,255,0.5)", transition: "background 0.2s" }} />; })}
    </div>
  </div>;
}


/* ── Hero & Branding ── */


export { PVideoThumbnail, PBrandHero, PAdBanner };
