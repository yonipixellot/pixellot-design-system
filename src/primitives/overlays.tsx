import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBtn } from "./buttons";

type PShareCurtainProps = { open?: boolean; onClose?: () => void };
function PShareCurtain({ open = true, onClose }: PShareCurtainProps) {
  const c = useColors();
  if (!open) return null;
  const channels = SHARE_CHANNELS;
  return <>
    {/* Backdrop */}
    <div onClick={onClose} onKeyDown={(e) => e.key === "Escape" && onClose()} role="presentation" style={{ position: "fixed", inset: 0, background: c.overlay, zIndex: 999 }} />
    {/* Sheet */}
    <div role="dialog" aria-label="Share" style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: c.gray50, borderRadius: `${T.radii.lg}px ${T.radii.lg}px 0 0`, padding: "24px 28px 32px", zIndex: 1000, boxSizing: "border-box" }}>
      <h3 style={{ fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, textAlign: "center", margin: "0 0 24px", color: c.darkText }}>Share</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px 0" }}>
        {channels.map(ch => {
          return <div key={ch.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
            <button aria-label={"Share via " + ch.label}
              onFocus={e => Object.assign((e.currentTarget as HTMLButtonElement).style, focusRing(c))}
              onBlur={e => { (e.currentTarget as HTMLButtonElement).style.outline = "none"; (e.currentTarget as HTMLButtonElement).style.outlineOffset = ""; }}
              style={{ width: 64, height: 64, borderRadius: "50%", background: ch.gradient || ch.color, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none", padding: 0 }}>
              <ch.icon />
            </button>
            <span style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center" }}>{ch.label}</span>
          </div>;
        })}
      </div>
      <div style={{ marginTop: T.spacing.xl }}><PBtn variant="muted" size="lg" onClick={onClose}>Cancel</PBtn></div>
    </div>
  </>;
}



function PShareCurtainStatic() {
  const c = useColors();
  const mode = useThemeMode();
  return <div style={{ maxWidth: 430, margin: "0 auto", background: c.gray50, borderRadius: T.radii.lg, padding: "24px 28px 32px", boxShadow: "0 -4px 24px rgba(0,0,0,0.12)", boxSizing: "border-box" }}>
    <h3 style={{ fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, textAlign: "center", margin: "0 0 24px", color: c.darkText }}>Share</h3>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px 0" }}>
      {SHARE_CHANNELS.map(ch => {
        return <div key={ch.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
          <button aria-label={"Share via " + ch.label}
            onFocus={e => Object.assign((e.currentTarget as HTMLButtonElement).style, focusRing(c))}
            onBlur={e => { (e.currentTarget as HTMLButtonElement).style.outline = "none"; (e.currentTarget as HTMLButtonElement).style.outlineOffset = ""; }}
            style={{ width: 64, height: 64, borderRadius: "50%", background: ch.gradient || (mode === "dark" && ch.darkColor ? ch.darkColor : ch.color), display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none", padding: 0 }}><ch.icon size={28} /></button>
          <span style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center" }}>{ch.label}</span>
        </div>;
      })}
    </div>
    <div style={{ marginTop: T.spacing.xl }}><PBtn variant="muted" size="lg">Cancel</PBtn></div>
  </div>;
}

const GoogleIcon = () => <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/><path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z" fill="#EA4335"/></svg>;
const AppleIcon = () => <svg aria-hidden="true" width="18" height="20" viewBox="0 0 18 22" fill="currentColor"><path d="M17.05 15.23c-.4.92-.59 1.33-1.1 2.15-.72 1.14-1.73 2.56-2.98 2.57-1.12.01-1.4-.73-2.92-.72-1.52.01-1.83.74-2.95.73-1.26-.01-2.22-1.29-2.94-2.43C2.1 14.36 1.93 10.87 3.34 9.04c1-1.3 2.58-2.06 4.01-2.06 1.49 0 2.43.74 3.66.74 1.2 0 1.93-.74 3.66-.74 1.27 0 2.68.69 3.68 1.88-3.23 1.77-2.7 6.38.7 7.37ZM12.14 4.9c.56-.72.99-1.74.83-2.78-.92.06-2 .65-2.63 1.41-.57.69-1.04 1.72-.86 2.72 1 .03 2.04-.57 2.66-1.35Z"/></svg>;

/* ── Share Channel Icons (single source of truth) ── */
const CopyLinkIcon = ({ size = 24 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
const FacebookIcon = ({ size = 24 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.384C19.612 22.954 24 17.99 24 12Z" /></svg>;
const XLogoIcon = ({ size = 20 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const WhatsAppIcon = ({ size = 24 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12.05 21.785h-.018a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884ZM20.52 3.449C18.24 1.226 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411Z" /></svg>;
const TikTokIcon = ({ size = 20 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.53v-3.5a4.82 4.82 0 0 1-1-.51Z" /></svg>;
const InstagramIcon = ({ size = 22 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>;

/* Shared channel config — used by PShareCurtain + explorer */
const SHARE_CHANNELS = [
  { label: "Copy Link", color: "#BDBDBD", icon: CopyLinkIcon },
  { label: "Facebook", color: "#1877F2", icon: FacebookIcon },
  { label: "X", color: "#000000", darkColor: "#333333", icon: XLogoIcon },
  { label: "WhatsApp", color: "#25D366", icon: WhatsAppIcon },
  { label: "TikTok", color: "#000000", darkColor: "#333333", icon: TikTokIcon },
  { label: "Instagram", gradient: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)", icon: InstagramIcon },
];


/* ── Branding ── */
type PixellotLogoProps = { size?: number };
function PixellotLogo({ size = 30 }: PixellotLogoProps) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 235 163" fill="none" style={{ flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M172.002 54.528L161.909 108.355C160.962 113.497 157.913 116.015 152.867 116.015H69.176C64.13 116.015 62.027 113.497 63.078 108.355L73.172 54.528C74.118 49.386 77.167 46.868 82.214 46.868H165.904C170.951 46.868 173.053 49.386 172.002 54.528ZM182.095 0.7H83.265C42.6813 0.7 19.5508 16.1242 13.7682 46.868L0.731 116.12C-5.0516 146.863 12.2963 162.288 52.8798 162.288H151.71C192.294 162.288 215.424 146.863 221.207 116.12L234.244 46.868C240.027 16.1242 222.679 0.7 182.095 0.7Z" fill="#00D6FE" />
  </svg>;
}


/* ── Hero & Branding ── */


function PPaymentModal() {
  const c = useColors();
  const cardBg = c.gray50;
  return <div style={{ maxWidth: 430, display: "flex", flexDirection: "column", gap: T.spacing.md2, fontFamily: F }}>
    {/* Redeem code section */}
    <div style={{ background: cardBg, borderRadius: T.radii.card, padding: "20px 24px" }}>
      <p style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.darkText, margin: "0 0 12px" }}>Redeem your Access Code here:</p>
      <div style={{ position: "relative" }}>
        <input type="text" style={{ width: "100%", height: 50, background: c.white, border: `1px solid ${c.gray300}`, borderRadius: T.radii.badge, padding: "0 120px 0 16px", fontSize: T.typography.sizes.xs, fontFamily: F, outline: "none", boxSizing: "border-box" }} />
        <PBtn variant="primary" size="sm" fullWidth={false} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", padding: "8px 24px" }}>Submit</PBtn>
      </div>
    </div>
    {/* "or select your plan" */}
    <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray500, margin: 0 }}>or select your plan</p>
    {/* Basic Package Card */}
    <div style={{ background: cardBg, borderRadius: T.radii.card, padding: "24px" }}>
      <p style={{ fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, color: c.darkText, margin: "0 0 6px" }}>Basic Package</p>
      <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, margin: "0 0 16px", lineHeight: 1.5 }}>Download a single highlight of your favourite moment from the season!</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: T.typography.sizes.display, fontWeight: T.typography.weights.bold, color: c.darkText }}>$5.00</span>
        <PBtn variant="primary" size="lg" fullWidth={false}>Buy Now</PBtn>
      </div>
    </div>
    {/* Premium Package Card */}
    <div style={{ background: cardBg, borderRadius: T.radii.card, padding: "24px", border: `2px solid ${c.premiumYellow}` }}>
      {/* Most Popular badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.xs, background: c.grayOverlay, borderRadius: T.radii.lg, padding: "6px 14px", marginBottom: T.spacing.sm2 }}>
        <span style={{ fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.bold, color: c.darkText }}>🔥 Most Popular</span>
      </div>
      <p style={{ fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, color: c.darkText, margin: "0 0 6px" }}>Premium Package</p>
      <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, margin: "0 0 14px", lineHeight: 1.5 }}>Allows access to all Camera's. You can switch cameras to watch any platform</p>
      {/* Access list */}
      <div style={{ background: c.gray100, borderRadius: T.radii.badge, padding: `${T.spacing.md2}px ${T.spacing.lg}px`, marginBottom: T.spacing.md2 }}>
        <p style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.gray400, margin: "0 0 8px" }}>You will get access to:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.xs2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}><Check size={16} color={c.successGreen} /><span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText }}>Afrikaanse Hoër Seunskool U14</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}><Check size={16} color={c.successGreen} /><span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText }}>Bosh PUP U14</span></div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: T.typography.sizes.display, fontWeight: T.typography.weights.bold, color: c.darkText }}>$35.00</span>
        <PBtn variant="premium" size="lg" fullWidth={false}>Buy Now</PBtn>
      </div>
    </div>
  </div>;
}



export { PShareCurtain, PShareCurtainStatic, PPaymentModal };
