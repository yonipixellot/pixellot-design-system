import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBtn } from "./buttons";

type PDividerProps = {
  color?: string;
  thickness?: number;
  spacing?: number;
  vertical?: boolean;
  style?: CSSProperties;
};
function PDivider({ color, thickness = 1, spacing = 0, vertical = false, style = {} }: PDividerProps) {
  const c = useColors();
  const bg = color || c.gray200;
  if (vertical) {
    return <div style={{ width: thickness, alignSelf: "stretch", background: bg, marginLeft: spacing, marginRight: spacing, flexShrink: 0, ...style }} />;
  }
  return <div style={{ height: thickness, width: "100%", background: bg, marginTop: spacing, marginBottom: spacing, flexShrink: 0, ...style }} />;
}

// ════════════════════════════════
// SEARCH BAR
// ════════════════════════════════



type PBackBarProps = {
  label?: string;
  showShare?: boolean;
  onBack?: () => void;
  onShare?: () => void;
  padding?: string;
};
function PBackBar({ label = "Back", showShare = false, onBack, onShare, padding = "12px 16px" }: PBackBarProps) {
  const c = useColors();
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding }}>
      <button onClick={onBack} aria-label="Go back" style={{ display: "flex", alignItems: "center", gap: T.spacing.xs2, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
        <ArrowLeft size={16} color={c.gray500} />
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: c.gray500 }}>{label}</span>
      </button>
      {showShare && (
        <button onClick={onShare} aria-label="Share" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
          <Share2 size={20} color={c.darkText} />
        </button>
      )}
    </div>
  );
}

/* ── SearchBar showcase (stateful demos for all states) ── */
function SearchBarShowcase() {
  const c = useColors();
  const [filledVal, setFilledVal] = useState("Premier League");
  const [typingVal, setTypingVal] = useState("");
  return <div>
    <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>SearchBar</h2>
    <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Reusable pill-shaped search input. Used anywhere a search pattern is needed. Supports empty, focused, filled, clearable, read-only, and disabled states.</p>
    <Card title="Empty (default)" desc="Placeholder visible, no value">
      <div style={{ maxWidth: 390 }}>
        <PSearchBar placeholder="Search any team or competition..." />
      </div>
    </Card>
    <Card title="Focused" desc="Click to see the focus ring — 2px primary border appears on focus">
      <div style={{ maxWidth: 390 }}>
        <PSearchBar placeholder="Search any team or competition..." autoFocus />
      </div>
    </Card>
    <Card title="Filled" desc="Controlled value with onChange — user is typing">
      <div style={{ maxWidth: 390 }}>
        <PSearchBar placeholder="Search..." value={typingVal} onChange={setTypingVal} />
      </div>
    </Card>
    <Card title="Filled + clearable" desc="onClear shows an ✕ button when value is not empty">
      <div style={{ maxWidth: 390 }}>
        <PSearchBar placeholder="Search..." value={filledVal} onChange={setFilledVal} onClear={() => setFilledVal("")} />
      </div>
    </Card>
    <Card title="Read-only" desc="readOnly — acts as a tappable trigger, grayed text, pointer cursor">
      <div style={{ maxWidth: 390 }}>
        <PSearchBar placeholder="Search any team or competition..." readOnly />
      </div>
    </Card>
    <Card title="Disabled" desc="disabled — dimmed appearance, not interactive">
      <div style={{ maxWidth: 390 }}>
        <PSearchBar placeholder="Search any team or competition..." disabled />
      </div>
    </Card>
    <Card title="Props">
      <PropsBlock>
        <div>placeholder?: string — placeholder text (default "Search...")</div>
        <div>value?: string — controlled input value</div>
        <div>onChange?: (value: string) =&gt; void — called on every keystroke</div>
        <div>onClear?: () =&gt; void — if provided, shows ✕ clear button when value is not empty</div>
        <div>readOnly?: boolean — non-editable, tappable trigger mode (default false)</div>
        <div>disabled?: boolean — fully disabled, dimmed (default false)</div>
        <div>onClick?: () =&gt; void — called when tapping a readOnly search bar</div>
        <div>autoFocus?: boolean — auto-focus input on mount (default false)</div>
        <div>iconSize?: number — search icon size in px (default 18)</div>
      </PropsBlock>
    </Card>
  </div>;
}



type PSectionHeaderProps = { title: string; seeAll?: boolean; onClick?: () => void; titleSize?: number };
function PSectionHeader({ title, seeAll, onClick, titleSize }: PSectionHeaderProps) {
  const c = useColors();
  const fs = titleSize ?? T.typography.sizes.base;
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: 0, marginBottom: T.spacing.md }}>
    <h3 style={{ margin: 0, fontSize: fs, fontWeight: T.typography.weights.bold, color: c.black }}>{title}</h3>
    {seeAll && <PBtn variant="link" size="sm" fullWidth={false} style={{ fontSize: T.typography.sizes.body2 }} onClick={onClick}>See all &gt;</PBtn>}
  </div>;
}


type PSeeAllLinkProps = { label?: string; onClick?: () => void };
function PSeeAllLink({ label = "See all", onClick }: PSeeAllLinkProps) {
  const c = useColors();
  return <button onClick={onClick} aria-label={label} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: T.spacing.xs, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.linkBlue }}>
    {label}
    <svg aria-hidden="true" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 1.5L5 4L2 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </button>;
}


type PInfoAlertProps = { title?: string; description?: string };
function PInfoAlert({ title, description }: PInfoAlertProps) {
  const c = useColors();
  return <div style={{ background: c.infoBgPurple, borderRadius: T.radii.badge, padding: T.spacing.lg, border: "1px solid rgba(139,92,246,0.15)" }}>
    <div style={{ fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.bold, color: c.claimedPurple, marginBottom: T.spacing.xs2 }}>{title}</div>
    <div style={{ fontSize: T.typography.sizes.caption, color: c.gray500 }}>{description}</div>
  </div>;
}


/* ── Monetization ── */


function PUpgradeBanner() {
  const c = useColors();
  return <div style={{ background: c.infoBgPurple, borderRadius: T.radii.badge, padding: T.spacing.md, display: "flex", alignItems: "center", gap: T.spacing.md, border: `${T.strokes.thin}px solid ${c.premiumAmber}` }}>
    <div style={{ width: 32, height: 32, borderRadius: "50%", background: c.premiumDark, border: `${T.strokes.thin}px solid ${c.premiumYellow}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <LockSvg size={12} fill={c.premiumYellow} />
    </div>
    <p style={{ fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.regular, color: c.black, margin: 0, flex: 1, lineHeight: 1.5, fontFamily: F }}>Upgrade to access personal highlights for all players in this game</p>
    <PBtn variant="premium" size="sm" fullWidth={false} style={{ padding: "4px 12px", fontSize: T.typography.sizes.base, borderRadius: T.radii.pill, flexShrink: 0 }}>Upgrade</PBtn>
  </div>;
}

function ChipLockSvg() {
  const c = useColors();
  return <div style={{ width: 20, height: 20, borderRadius: "50%", background: c.premiumDark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "none" }}>
    <LockSvg size={8} fill={c.premiumYellow} />
  </div>;
}



function PVideoTypeChips() {
  const c = useColors();
  const [active, setActive] = useState("full");
  const chipBase = { border: "none", borderRadius: T.radii.chip, padding: `${T.spacing.sm}px ${T.spacing.md}px`, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, cursor: "pointer", height: T.sizes.chipHeight, display: "flex", alignItems: "center", gap: T.spacing.sm, flexShrink: 0, whiteSpace: "nowrap", boxSizing: "border-box", fontFamily: F };
  return <><style>{`.chipScrollHide::-webkit-scrollbar{display:none}`}</style>
  <div className="chipScrollHide" style={{ display: "flex", gap: T.spacing.md, marginBottom: T.spacing.lg, overflowX: "auto", paddingRight: T.spacing.lg, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", flexWrap: "nowrap" }}>
    <button onClick={() => setActive("full")} aria-label="Full Game" aria-pressed={active === "full"} style={{ ...chipBase, background: active === "full" ? c.jerseyRed : c.gray100, color: active === "full" ? c.white : c.black, fontWeight: active === "full" ? 600 : 400 }}>
      Full Game
    </button>
    <button onClick={() => setActive("condensed")} aria-label="Condensed Game" aria-pressed={active === "condensed"} style={{ ...chipBase, background: active === "condensed" ? c.jerseyRed : c.gray100, color: active === "condensed" ? c.white : c.black, fontWeight: active === "condensed" ? 600 : 400 }}>
      <ChipLockSvg /> Condensed Game
    </button>
    <button onClick={() => setActive("highlights")} aria-label="Game Highlights" aria-pressed={active === "highlights"} style={{ ...chipBase, background: active === "highlights" ? c.jerseyRed : c.gray100, color: active === "highlights" ? c.white : c.black, fontWeight: active === "highlights" ? 600 : 400 }}>
      <ChipLockSvg /> Game Highlights
    </button>
  </div></>;
}


/* ── Video Actions & Sharing ── */


export { PDivider, PBackBar, PSectionHeader, PSeeAllLink, PInfoAlert, PUpgradeBanner, PVideoTypeChips };
