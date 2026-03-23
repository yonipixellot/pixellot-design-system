import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

type PBadgeProps = { variant?: "live" | "premium" | "free" | "claimed" | "highlights" };
function PBadge({ variant = "live" }: PBadgeProps) {
  const c = useColors();
  const variants = {
    live:     { background: c.liveRed, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold, textTransform: "uppercase", label: "LIVE", dot: true },
    premium:  { background: c.premiumAmber, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "Premium", dot: false },
    free:     { background: c.freeBadgeGreen, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "Free", dot: false },
    claimed:  { background: c.claimedPurple, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "Claimed", dot: false },
    highlights: { background: c.highlightsBadgeBg, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "HIGHLIGHTS", dot: false, icon: true },
  };
  const v = variants[variant] || variants.live;
  var badgeColor = variant === "highlights" ? c.highlightsBadgeText : c.white;
  var badgeBorder = variant === "highlights" ? `${T.strokes.thin}px solid ${c.highlightsBadgeText}` : "none";
  return <div style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.xs, background: v.background, color: badgeColor, padding: `${T.spacing.xs}px ${T.spacing.md}px`, borderRadius: T.radii.badge, fontSize: v.fontSize, fontWeight: v.fontWeight, textTransform: v.textTransform, border: badgeBorder }}>
    {v.dot && <><style>{`@keyframes liveDotFlicker { 0%,100%{opacity:1} 50%{opacity:0.2} }`}</style>
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.white, animation: "liveDotFlicker 1.2s ease-in-out infinite" }} data-live="" /></>}
    {v.icon && <Play size={10} fill={c.premiumYellow} color={c.premiumYellow} />}
    {v.label}
  </div>;
}
const PLiveBadge = () => <PBadge variant="live" />;
const PPremiumBadge = () => <PBadge variant="premium" />;
const PFreeBadge = () => <PBadge variant="free" />;
const PClaimedBadge = () => <PBadge variant="claimed" />;


type PBellIconProps = { count?: number };
function PBellIcon({ count = 0 }: PBellIconProps) {
  const c = useColors();
  return <div style={{ position: "relative", display: "inline-flex" }}>
    <Bell size={24} color={c.gray500} />
    {count > 0 && <div style={{ position: "absolute", top: -4, right: -6, minWidth: 16, height: 16, borderRadius: T.radii.thumb, background: c.notifBadgeRed, display: "flex", alignItems: "center", justifyContent: "center", padding: `0 ${T.spacing.xs}px`, boxSizing: "border-box" }}>
      <span style={{ fontFamily: F, fontSize: T.typography.sizes.micro, fontWeight: T.typography.weights.bold, color: c.white }}>{count}</span>
    </div>}
  </div>;
}



type PTeamLogoProps = { size?: number; name?: string; logoUrl?: string };
function PTeamLogo({ size = 28, name = "", logoUrl }: PTeamLogoProps) {
  const c = useColors();
  /* If server provides a logo URL, render the image */
  if (logoUrl) {
    return <div style={{ width: size, height: size, borderRadius: "50%", background: c.white, border: `${T.strokes.thin}px solid ${c.barTrack}`, flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={logoUrl} alt={name} style={{ width: size, height: size, objectFit: "cover", borderRadius: "50%" }} />
    </div>;
  }
  /* Fallback: generates a deterministic placeholder from full team name hash */
  const colors = ["#D0142C", "#116DFF", "#22C55E", "#E7A610", "#8B5CF6", "#0d9488", "#E8332B", "#1877F2", "#DD2A7B", "#0EA5E9", "#F97316", "#6366F1"];
  const hash = name ? [...name].reduce((h, ch) => ((h << 5) - h + ch.charCodeAt(0)) | 0, 0) : 0;
  const idx = Math.abs(hash) % colors.length;
  const initial = name ? name.charAt(0).toUpperCase() : "T";
  return <div style={{ width: size, height: size, borderRadius: "50%", background: c.white, border: `${T.strokes.thin}px solid ${c.barTrack}`, flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg viewBox="0 0 28 28" width={size} height={size}>
      <circle cx="14" cy="14" r="13" fill={colors[idx]} opacity="0.15" />
      <circle cx="14" cy="14" r="13" stroke={colors[idx]} strokeWidth="0.5" fill="none" opacity="0.4" />
      <text x="14" y="18.5" textAnchor="middle" fontFamily={F} fontSize="14" fontWeight="700" fill={colors[idx]}>{initial}</text>
    </svg>
  </div>;
}



type PAvatarProps = { initials?: string; size?: number };
function PAvatar({ initials = "BR", size = 40 }: PAvatarProps) {
  const c = useColors();
  return <div style={{ width: size, height: size, borderRadius: "50%", background: c.gray500, display: "flex", alignItems: "center", justifyContent: "center", color: c.white, fontFamily: F, fontSize: size * 0.38, fontWeight: T.typography.weights.bold, flexShrink: 0 }}>{initials}</div>;
}



type PPlayerPhotoProps = { size?: number; name?: string; photoUrl?: string };
function PPlayerPhoto({ size = 48, name = "", photoUrl }: PPlayerPhotoProps) {
  const c = useColors();
  const [imgError, setImgError] = useState(false);
  if (photoUrl && !imgError) {
    return <div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, overflow: "hidden" }}>
      <img src={photoUrl} alt={name} onError={() => setImgError(true)} style={{ width: size, height: size, objectFit: "cover", borderRadius: "50%" }} />
    </div>;
  }
  /* Placeholder player photo — gray circle with User silhouette */
  return <div style={{ width: size, height: size, borderRadius: "50%", background: c.gray200, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
    <User size={size * 0.55} color={c.gray400} />
  </div>;
}

// ════════════════════════════════
// PLAYER NUMBER BADGE
// ════════════════════════════════



type PPlayerNumberBadgeProps = { number: number; size?: number; teamColor?: string; photoUrl?: string };
function PPlayerNumberBadge({ number, size = 40, teamColor, photoUrl }: PPlayerNumberBadgeProps) {
  const c = useColors();
  const bg = teamColor || c.primary;
  const [imgError, setImgError] = useState(false);
  /* If server provides a photo and it loaded OK, show it instead of the number circle */
  if (photoUrl && !imgError) {
    return <div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, overflow: "hidden" }}>
      <img src={photoUrl} alt={`#${number}`} onError={() => setImgError(true)} style={{ width: size, height: size, objectFit: "cover", borderRadius: "50%" }} />
    </div>;
  }
  /* Placeholder: colored circle with jersey number */
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontFamily: F, fontSize: size * 0.4, fontWeight: T.typography.weights.bold, color: _isLightColor(bg) ? c.darkText : c.white }}>{number}</span>
    </div>
  );
}

// ════════════════════════════════
// FOLLOWING ROW
// ════════════════════════════════

// ════════════════════════════════
// ICON COMPONENTS
// ════════════════════════════════

type LockSvgProps = { size?: number; fill?: string };
function LockSvg({ size = 11, fill = DEFAULTS.premiumYellow }: LockSvgProps) {
  const w = size;
  const h = size * (10 / 8);
  return <svg width={w} height={h} viewBox="0 0 8 10" fill="none"><path clipRule="evenodd" d="M7.02621 4.06889H6.73849L6.73733 2.70111C6.73616 1.21111 5.46535 -0.00110943 3.90332 1.67782e-06C2.3413 0.00111279 1.07048 1.21333 1.07164 2.70333L1.07397 4.07111H0.971466C0.434483 4.07222 -0.00115988 4.48778 4.94171e-06 5V9.07222C4.94171e-06 9.58444 0.436813 10 0.973795 10L7.02853 9.99667C7.56552 9.99667 8.00116 9.58111 8 9.06889V4.99556C8 4.48333 7.56319 4.06889 7.02621 4.06889ZM2.11765 4.07111L2.11532 2.70333C2.11532 1.76222 2.91672 0.996668 3.90332 0.995557C4.88992 0.995557 5.69248 1.76111 5.69248 2.70111L5.69481 4.06889L2.11765 4.07111Z" fill={fill} fillRule="evenodd" /></svg>;
}

function ChipLockSvg() {
  const c = useColors();
  return <div style={{ width: 20, height: 20, borderRadius: "50%", background: c.premiumDark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "none" }}>
    <LockSvg size={8} fill={c.premiumYellow} />
  </div>;
}

const GoogleIcon = () => <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/><path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z" fill="#EA4335"/></svg>;

const AppleIcon = () => <svg aria-hidden="true" width="18" height="20" viewBox="0 0 18 22" fill="currentColor"><path d="M17.05 15.23c-.4.92-.59 1.33-1.1 2.15-.72 1.14-1.73 2.56-2.98 2.57-1.12.01-1.4-.73-2.92-.72-1.52.01-1.83.74-2.95.73-1.26-.01-2.22-1.29-2.94-2.43C2.1 14.36 1.93 10.87 3.34 9.04c1-1.3 2.58-2.06 4.01-2.06 1.49 0 2.43.74 3.66.74 1.2 0 1.93-.74 3.66-.74 1.27 0 2.68.69 3.68 1.88-3.23 1.77-2.7 6.38.7 7.37ZM12.14 4.9c.56-.72.99-1.74.83-2.78-.92.06-2 .65-2.63 1.41-.57.69-1.04 1.72-.86 2.72 1 .03 2.04-.57 2.66-1.35Z"/></svg>;

type PixellotLogoProps = { size?: number };
function PixellotLogo({ size = 30 }: PixellotLogoProps) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 235 163" fill="none" style={{ flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M172.002 54.528L161.909 108.355C160.962 113.497 157.913 116.015 152.867 116.015H69.176C64.13 116.015 62.027 113.497 63.078 108.355L73.172 54.528C74.118 49.386 77.167 46.868 82.214 46.868H165.904C170.951 46.868 173.053 49.386 172.002 54.528ZM182.095 0.7H83.265C42.6813 0.7 19.5508 16.1242 13.7682 46.868L0.731 116.12C-5.0516 146.863 12.2963 162.288 52.8798 162.288H151.71C192.294 162.288 215.424 146.863 221.207 116.12L234.244 46.868C240.027 16.1242 222.679 0.7 182.095 0.7Z" fill="#00D6FE" />
  </svg>;
}

export { PBadge, PLiveBadge, PPremiumBadge, PFreeBadge, PClaimedBadge, PBellIcon, PTeamLogo, PAvatar, PPlayerPhoto, PPlayerNumberBadge, LockSvg, ChipLockSvg, AppleIcon, GoogleIcon, PixellotLogo };
