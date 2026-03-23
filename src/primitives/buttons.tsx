import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

type PBtnProps = { children?: ReactNode; variant?: "primary" | "premium" | "social" | "muted" | "ghost" | "link" | "danger"; size?: "sm" | "md" | "lg"; leadingIcon?: ReactNode; trailingIcon?: ReactNode; iconOnly?: boolean; fullWidth?: boolean; disabled?: boolean; _forceState?: string; style?: CSSProperties; onClick?: () => void };
function PBtn({ children, variant = "primary", size = "md", leadingIcon, trailingIcon, iconOnly = false, fullWidth = true, disabled = false, _forceState, style: extraStyle = {}, onClick }: PBtnProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [fo, setFo] = useState(false);
  const stateMap = {
    primary: {
      default:  { background: c.primary, color: c.white, border: "none" },
      hover:    { background: c.primaryHover, color: c.white, border: "none" },
      active:   { background: c.primaryActive, color: c.white, border: "none" },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark, border: "none" },
    },
    premium: {
      default:  { background: c.premiumYellow, color: c.black, border: "none" },
      hover:    { background: c.premiumAmber, color: c.black, border: "none" },
      active:   { background: c.premiumActive, color: c.black, border: "none" },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark, border: "none" },
    },
    social: {
      default:  { background: c.white, color: c.black, border: `${T.strokes.thin}px solid ${c.gray200}` },
      hover:    { background: c.gray50, color: c.black, border: `${T.strokes.thin}px solid ${c.gray200}` },
      active:   { background: c.gray100, color: c.black, border: `${T.strokes.thin}px solid ${c.gray200}` },
      disabled: { background: c.white, color: c.disabledTextOnDark, border: `${T.strokes.thin}px solid ${c.grayOverlay}` },
    },
    muted: {
      default:  { background: c.gray50, color: c.darkText, border: "none" },
      hover:    { background: c.gray100, color: c.darkText, border: "none" },
      active:   { background: c.gray300, color: c.darkText, border: "none" },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark, border: "none" },
    },
    ghost: {
      default:  { background: "transparent", color: c.gray400, border: "none" },
      hover:    { background: c.gray50, color: c.gray400, border: "none" },
      active:   { background: c.gray100, color: c.gray400, border: "none" },
      disabled: { background: "transparent", color: c.disabledTextOnDark, border: "none" },
    },
    link: {
      default:  { background: "transparent", color: c.linkBlue, border: "none" },
      hover:    { background: "transparent", color: c.primaryHover, border: "none" },
      active:   { background: "transparent", color: c.primaryActive, border: "none" },
      disabled: { background: "transparent", color: c.disabledTextOnDark, border: "none" },
    },
    danger: {
      default:  { background: "transparent", color: c.errorRed, border: "none" },
      hover:    { background: "transparent", color: c.errorRed, border: "none" },
      active:   { background: "transparent", color: c.errorRed, border: "none" },
      disabled: { background: "transparent", color: c.disabledTextOnDark, border: "none" },
    },
  };
  const sizes = {
    sm: { height: T.sizes.buttonSm, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, borderRadius: T.radii.lg, padding: `0 ${T.spacing.lg}px`, gap: T.spacing.xs2 },
    md: { height: T.sizes.buttonMd, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, borderRadius: T.radii.lg, padding: `0 ${T.spacing.xl}px`, gap: T.spacing.sm },
    lg: { height: T.sizes.buttonLg, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, borderRadius: T.radii.button, padding: "0 40px", gap: T.spacing.sm },
  };
  const states = stateMap[variant] || stateMap.primary;
  const state = _forceState || (disabled ? "disabled" : pressed ? "active" : hovered ? "hover" : "default");
  const v = states[state] || states.default;
  const s = sizes[size] || sizes.md;
  const isLink = variant === "link" || variant === "danger";
  return <button
    disabled={disabled}
    onClick={onClick}
    onMouseEnter={() => !disabled && setHovered(true)}
    onMouseLeave={() => { setHovered(false); setPressed(false); }}
    onMouseDown={() => !disabled && setPressed(true)}
    onMouseUp={() => setPressed(false)}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)}
    style={{
      width: fullWidth && !iconOnly ? "100%" : "auto",
      height: s.height,
      minWidth: iconOnly ? s.height : undefined,
      borderRadius: iconOnly ? "50%" : s.borderRadius,
      fontFamily: F,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      cursor: disabled ? "not-allowed" : "pointer",
      display: "inline-flex", alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: iconOnly ? 0 : s.padding,
      transition: "all 0.2s",
      textDecoration: isLink ? "underline" : "none",
      ...v,
      ...(fo ? focusRing(c) : {}),
      ...extraStyle,
    }}>
    {leadingIcon && <span style={{ display: "flex", alignItems: "center" }}>{leadingIcon}</span>}
    {iconOnly ? <span style={{ display: "flex", alignItems: "center" }}>{children}</span> : children}
    {trailingIcon && <span style={{ display: "flex", alignItems: "center" }}>{trailingIcon}</span>}
  </button>;
}


type PTabButtonProps = { label: string; isActive?: boolean; disabled?: boolean; onClick?: () => void; variant?: string; accentColor?: string; _forceState?: string };
function PTabButton({ label, isActive, disabled = false, onClick, variant, accentColor, _forceState }: PTabButtonProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const isDis = disabled || _forceState === "disabled";
  const state = isDis ? "disabled" : _forceState || (pressed ? "active" : hovered ? "hover" : "default");
  if (variant === "pill") {
    const bg = isDis ? "transparent" : isActive ? c.white : state === "active" ? c.gray300 : state === "hover" ? c.gray200 : "transparent";
    const clr = isDis ? c.gray300 : isActive ? c.black : state === "hover" || state === "active" ? c.gray500 : c.gray400;
    return <button onClick={isDis ? undefined : onClick} onMouseEnter={() => !isDis && setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => !isDis && setPressed(true)} onMouseUp={() => setPressed(false)}
      role="tab" aria-selected={isActive} aria-disabled={isDis || undefined} disabled={isDis}
      style={{ flex: 1, height: T.sizes.tabHeight, border: "none", borderRadius: T.radii.md, cursor: isDis ? "not-allowed" : "pointer", fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, transition: "all 0.15s", background: bg, color: clr, boxShadow: isActive && !isDis ? "0 1px 3px rgba(0,0,0,0.1)" : "none", opacity: isDis ? 0.5 : 1 }}>{label}</button>;
  }
  const accent = accentColor || c.errorRed;
  const clr = isDis ? c.gray300 : isActive ? c.black : state === "active" ? c.gray500 : state === "hover" ? c.gray500 : c.gray400;
  return <button onClick={isDis ? undefined : onClick} onMouseEnter={() => !isDis && setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => !isDis && setPressed(true)} onMouseUp={() => setPressed(false)}
    role="tab" aria-selected={isActive} aria-disabled={isDis || undefined} disabled={isDis}
    style={{ flex: "0 0 auto", background: "none", border: "none", cursor: isDis ? "not-allowed" : "pointer", fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: clr, padding: `${T.spacing.lg}px 0`, position: "relative", transition: "color 0.15s", borderBottom: isActive && !isDis ? `3px solid ${accent}` : state === "hover" ? `2px solid ${accent}55` : "none", marginBottom: "-1px", opacity: isDis ? 0.5 : 1 }}>{label}</button>;
}


type PTabsProps = { tabs: { label: string; value: string; disabled?: boolean }[]; active?: string; onSelect?: (v: string) => void; variant?: "pill" | "underline"; accentColor?: string; _forceState?: string };
function PTabs({ tabs, active, onSelect, variant = "pill", accentColor, _forceState }: PTabsProps) {
  const colors = useColors();
  if (variant === "pill") {
    return <div role="tablist" style={{ display: "flex", background: colors.gray100, borderRadius: T.radii.md, padding: T.spacing.xs, width: "100%" }}>
      {tabs.map(t => <PTabButton key={t.value} label={t.label} isActive={active === t.value} disabled={t.disabled} onClick={() => onSelect(t.value)} variant="pill" _forceState={!active || active !== t.value ? _forceState : undefined} />)}
    </div>;
  }
  const accent = accentColor || colors.errorRed;
  return <div role="tablist" style={{ display: "flex", gap: T.spacing.xl, padding: `0 ${T.spacing.lg}px`, borderBottom: `1px solid ${colors.gray100}`, width: "100%", overflowX: "auto" }}>
    {tabs.map(t => <PTabButton key={t.value} label={t.label} isActive={active === t.value} disabled={t.disabled} onClick={() => onSelect(t.value)} variant="underline" accentColor={accent} _forceState={!active || active !== t.value ? _forceState : undefined} />)}
  </div>;
}


type PBackButtonProps = { onClick?: () => void };
function PBackButton({ onClick }: PBackButtonProps) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <button onClick={onClick} aria-label="Go back" onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.black, display: "flex", alignItems: "center", gap: T.spacing.xs, borderRadius: T.radii.sm, ...(fo ? focusRing(c) : {}) }}>
    <ArrowLeft size={20} /> Back
  </button>;
}


type PTextDividerProps = { text?: string };
function PTextDivider({ text = "OR" }: PTextDividerProps) {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md, width: "100%" }}>
    <span style={{ flex: 1, height: T.strokes.thin, background: c.gray200 }} />
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.gray400 }}>{text}</span>
    <span style={{ flex: 1, height: T.strokes.thin, background: c.gray200 }} />
  </div>;
}


type PLinkProps = { children?: ReactNode; variant?: "muted" | "accent" | "primary" };
function PLink({ children, variant = "muted" }: PLinkProps) {
  const colors = useColors();
  const c = { muted: { color: colors.gray400 }, accent: { color: colors.accent, textDecoration: "underline" }, primary: { color: colors.primary } };
  return <button style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, cursor: "pointer", background: "none", border: "none", padding: 0, ...c[variant] }}>{children}</button>;
}


type PVideoActionIconBtnProps = { icon: IconComponent; active?: boolean; disabled?: boolean; _forceState?: string; onClick?: (e: any) => void; isBookmark?: boolean; ariaLabel?: string };
function PVideoActionIconBtn({ icon, active = false, disabled = false, _forceState, onClick, isBookmark = false, ariaLabel }: PVideoActionIconBtnProps) {
  const c = useColors();
  const Icon = icon;
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [fo, setFo] = useState(false);
  const stateMap = {
    default: {
      default:  { background: c.gray100, color: c.gray500 },
      hover:    { background: c.gray200, color: c.gray500 },
      active:   { background: c.gray300, color: c.darkText },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark },
    },
    active: {
      default:  { background: c.gray100, color: c.primary },
      hover:    { background: c.gray200, color: c.primaryHover },
      active:   { background: c.gray300, color: c.primaryActive },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark },
    },
  };
  const variant = active ? "active" : "default";
  const states = stateMap[variant];
  const state = _forceState || (disabled ? "disabled" : pressed ? "active" : hovered ? "hover" : "default");
  const v = states[state] || states.default;
  const handleClick = (e) => {
    if (isBookmark && !disabled) { setAnimating(true); setTimeout(() => setAnimating(false), 350); }
    onClick && onClick(e);
  };
  const iconScale = animating ? "scale(1.3)" : "scale(1)";
  const fillColor = isBookmark && active ? v.color : "none";
  return <button
    disabled={disabled}
    onClick={handleClick}
    onMouseEnter={() => !disabled && setHovered(true)}
    onMouseLeave={() => { setHovered(false); setPressed(false); }}
    onMouseDown={() => !disabled && setPressed(true)}
    onMouseUp={() => setPressed(false)}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)}
    aria-label={ariaLabel} aria-pressed={isBookmark ? active : undefined}
    style={{ width: T.sizes.buttonMd, height: T.sizes.buttonMd, borderRadius: "50%", background: v.background, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: disabled ? "not-allowed" : "pointer", flexShrink: 0, transition: "background 0.15s, color 0.15s", ...(fo ? focusRing(c) : {}) }}
  ><span style={{ display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)", transform: isBookmark ? iconScale : "scale(1)" }}><Icon size={T.typography.sizes.lg} color={v.color} fill={fillColor} style={{ transition: "fill 0.3s ease, color 0.3s ease" }} /></span></button>;
}



type PVideoActionBarProps = { views?: string; bookmarked?: boolean; disabled?: boolean; _forceState?: string; onDownload?: () => void; onShare?: () => void; onBookmark?: () => void };
function PVideoActionBar({ views = "1 view", bookmarked = false, disabled = false, _forceState, onDownload, onShare, onBookmark }: PVideoActionBarProps) {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${T.spacing.md}px 0`, width: "100%", opacity: disabled && !_forceState ? 0.5 : 1 }}>
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray500 }}>{views}</span>
    <div style={{ display: "flex", gap: T.spacing.md }}>
      <PVideoActionIconBtn icon={Download} disabled={disabled} _forceState={_forceState} onClick={onDownload} ariaLabel="Download" />
      <PVideoActionIconBtn icon={Upload} disabled={disabled} _forceState={_forceState} onClick={onShare} ariaLabel="Share" />
      <PVideoActionIconBtn icon={Bookmark} active={bookmarked} disabled={disabled} _forceState={_forceState} onClick={onBookmark} isBookmark ariaLabel={bookmarked ? "Remove bookmark" : "Add bookmark"} />
    </div>
  </div>;
}



export { PBtn, PTabButton, PTabs, PBackButton, PTextDivider, PLink, PVideoActionIconBtn, PVideoActionBar };
