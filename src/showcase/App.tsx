import { useState, useEffect } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { T, F, DEFAULTS, LIGHT, DARK } from "../tokens";
import { useColors, useThemeMode, useToggleTheme, useSetThemeMode, ThemeCtx } from "../theme";
import {
  PInput,
  PSelect,
  PBtn,
  PLink,
  PTabs,
  PBadge,
  PLiveGameCard,
  PGameResultCard,
  PHighlightCard,
  PScoreCard,
  PVideoThumbnail,
  PVideoTypeChips,
  PVideoActionBar,
  PShareCurtain,
  SHARE_CHANNELS,
  AthleteProfileCard,
  PTeamStatsBar,
  PGameLeaders,
  PPlayerStatsTable,
  PStatsGrid,
  PSeasonStatsRow,
  PInfoAlert,
  PPaymentModal,
  PUpgradeBanner,
  PTeamLogo,
  PAvatar,
  PPlayerPhoto,
  PPlayerNumberBadge,
  PBellIcon,
  PSectionHeader,
  PSeeAllLink,
  PFollowingRow,
  PDivider,
  PSearchBar,
  PBackBar,
  PAccordion,
  PAppHeader,
  PBottomTabBar,
  PSideMenu,
  PBrandHero,
  PAdBanner,
  PNotificationCenter,
  PTeamFollowCard,
  PTextDivider,
  PLoadingSpinner,
  PSkeletonBlock,
  PSkeletonCard,
  PSkeletonInput,
  POfflineBanner,
  CopyBtn,
  PixellotLogo,
  PVideoActionIconBtn,
  PHighlightsBadge,
  PMenuListItem,
  PShareCurtainStatic,
  PCompetitionFollowList,
  PHomeFollowingSection,
  PTeamFollowCardPreview,
  PTeamFollowGrid,
  PEmptyState,
  PErrorState,
  PPlayerStatsPaywall,
  PTeamStatsPaywall,
  PMyFollowingList,
  PFooter,
  AppleIcon,
  ChipLockSvg,
  GoogleIcon,
  LockSvg,
  PSocialLinks,
  PNotificationItem,
  PClaimedPlayerCard,
  PJersey,
  _TabIcon,
} from "../primitives";
import {
  PTypographyPreview,
  PSpacingPreview,
  PSizesPreview,
  PRadiiPreview,
  PChipStatesPreview,
  PChipAllActivePreview,
  PTeamRowPreview,
  PAuthPagePreview,
  POnboardingPreview,
  PropsBlock,
  ProseBlock,
} from "./previews";
import { C } from "../docs/vue-examples";

import { createContext, useContext, type ReactNode } from "react";

// ── Showcase-only components (extracted from monolith) ──

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

type ProseBlockProps = { children?: ReactNode; variant?: "muted" | "default" };
function ProseBlock({ children, variant = "muted" }: ProseBlockProps) {
  const c = useColors();
  const clr = variant === "subtle" ? c.gray400 : c.gray500;
  return <div style={{ fontSize: T.typography.sizes.body2, color: clr, lineHeight: 1.6 }}>{children}</div>;
}

function SpecBlock({ children, variant = "dark", lineHeight = 2 }) {
  const c = useColors();
  const clr = variant === "muted" ? c.gray500 : c.darkText;
  return <div style={{ fontSize: T.typography.sizes.body2, color: clr, lineHeight, fontFamily: F }}>{children}</div>;
}

function NavBtn({ s, sec, setSec, isMobile, setNavOpen }: { s: any, sec: string, setSec: (v: string) => void, isMobile: boolean, setNavOpen: (v: boolean) => void }) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <button onClick={() => { if (!s.disabled) { setSec(s.id); if (isMobile) setNavOpen(false); } }} aria-current={sec === s.id ? "page" : undefined} onFocus={() => !s.disabled && setFo(true)} onBlur={() => setFo(false)} style={{ display: "block", width: "100%", padding: "7px 14px", border: "none", textAlign: "left", cursor: s.disabled ? "default" : "pointer", fontSize: T.typography.sizes.caption, fontWeight: sec === s.id ? 600 : (s.disabled ? 700 : 400), background: sec === s.id ? `${c.primary}15` : "transparent", color: s.disabled ? c.gray400 : (sec === s.id ? c.primary : c.gray500), borderLeft: sec === s.id ? `3px solid ${c.primary}` : "3px solid transparent", opacity: s.disabled ? 0.6 : 1, transition: "background 0.3s ease, color 0.3s ease", borderRadius: T.radii.sm, outline: fo ? `2px solid ${c.primary}` : "none", outlineOffset: -2 }}>{s.label}</button>;
}

function InputPlayground() {
  const c = useColors();
  const [inputType, setInputType] = useState("email");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("Email Address...");
  const types = ["email", "password", "text", "tel"];
  const presets = [
    { label: "Default", fn: () => { setError(false); setErrorMsg(""); setDisabled(false); setInputType("email"); setPlaceholder("Email Address..."); } },
    { label: "Password", fn: () => { setError(false); setErrorMsg(""); setDisabled(false); setInputType("password"); setPlaceholder("Enter password..."); } },
    { label: "Error", fn: () => { setError(true); setErrorMsg("Please enter a valid email"); setDisabled(false); setInputType("email"); setPlaceholder("Email Address..."); } },
    { label: "Disabled", fn: () => { setError(false); setErrorMsg(""); setDisabled(true); setInputType("email"); setPlaceholder("Email Address..."); } },
  ];
  const toggleStyle = (active) => ({ padding: "4px 10px", fontSize: T.typography.sizes.xxs, fontWeight: active ? 600 : 400, border: `1px solid ${active ? c.primary : c.gray200}`, background: active ? `${c.primary}15` : c.white, color: active ? c.primary : c.gray500, borderRadius: T.radii.sm, cursor: "pointer", fontFamily: F });
  return <div style={{ maxWidth: 398 }}>
    <div style={{ marginBottom: T.spacing.lg }}>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.sm }}>Quick Presets</div>
      <div style={{ display: "flex", gap: T.spacing.sm, flexWrap: "wrap" }}>
        {presets.map(p => <button key={p.label} onClick={p.fn} style={{ padding: `5px ${T.spacing.md}px`, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, border: `1px solid ${c.gray200}`, background: c.white, color: c.darkText, borderRadius: T.radii.chip, cursor: "pointer", fontFamily: F }}>{p.label}</button>)}
      </div>
    </div>
    <div style={{ marginBottom: T.spacing.lg }}>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.sm }}>Type</div>
      <div style={{ display: "flex", gap: T.spacing.xs }}>
        {types.map(t => <button key={t} onClick={() => { setInputType(t); setPlaceholder(t === "password" ? "Enter password..." : t === "tel" ? "Phone Number..." : t === "email" ? "Email Address..." : "Full Name..."); }} style={toggleStyle(inputType === t)}>{t}</button>)}
      </div>
    </div>
    <div style={{ marginBottom: T.spacing.lg, display: "flex", gap: T.spacing.xl }}>
      <label style={{ display: "flex", alignItems: "center", gap: T.spacing.xs, fontSize: T.typography.sizes.caption, color: c.gray500, cursor: "pointer", fontFamily: F }}>
        <input type="checkbox" checked={error} onChange={e => { setError(e.target.checked); if (e.target.checked && !errorMsg) setErrorMsg("This field is required"); if (!e.target.checked) setErrorMsg(""); }} /> Error
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: T.spacing.xs, fontSize: T.typography.sizes.caption, color: c.gray500, cursor: "pointer", fontFamily: F }}>
        <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} /> Disabled
      </label>
    </div>
    {error && <div style={{ marginBottom: T.spacing.lg }}>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.sm }}>Error Message</div>
      <input value={errorMsg} onChange={e => setErrorMsg(e.target.value)} style={{ width: "100%", padding: "6px 10px", fontSize: T.typography.sizes.caption, border: `1px solid ${c.gray200}`, borderRadius: T.radii.sm, fontFamily: F, background: c.white, color: c.darkText, boxSizing: "border-box" }} />
    </div>}
    <div style={{ padding: T.spacing.lg, background: c.gray50, borderRadius: T.radii.badge, border: `1px solid ${c.gray100}` }}>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>Live Preview</div>
      <PInput placeholder={placeholder} type={inputType} error={error} errorMsg={error ? errorMsg : undefined} disabled={disabled} />
    </div>
  </div>;
}

function SearchBarShowcase() {
  const c = useColors();
  const [filledVal, setFilledVal] = useState("Premier League");
  const [typingVal, setTypingVal] = useState("");
  return <div>
    <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>SearchBar</h2>
    <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Reusable pill-shaped search input. Used anywhere a search pattern is needed. Supports empty, focused, filled, clearable, read-only, and disabled states.</p>
    <Card title="Empty (default)" desc="Placeholder visible, no value">
      <div style={{ maxWidth: 390 }}><PSearchBar placeholder="Search any team or competition..." /></div>
    </Card>
    <Card title="Focused" desc="Click to see the focus ring — 2px primary border appears on focus">
      <div style={{ maxWidth: 390 }}><PSearchBar placeholder="Search any team or competition..." autoFocus /></div>
    </Card>
    <Card title="Filled" desc="Controlled value with onChange — user is typing">
      <div style={{ maxWidth: 390 }}><PSearchBar placeholder="Search..." value={typingVal} onChange={setTypingVal} /></div>
    </Card>
    <Card title="Filled + clearable" desc="onClear shows an ✕ button when value is not empty">
      <div style={{ maxWidth: 390 }}><PSearchBar placeholder="Search..." value={filledVal} onChange={setFilledVal} onClear={() => setFilledVal("")} /></div>
    </Card>
    <Card title="Read-only" desc="readOnly — acts as a tappable trigger, grayed text, pointer cursor">
      <div style={{ maxWidth: 390 }}><PSearchBar placeholder="Search any team or competition..." readOnly /></div>
    </Card>
    <Card title="Disabled" desc="disabled — dimmed appearance, not interactive">
      <div style={{ maxWidth: 390 }}><PSearchBar placeholder="Search any team or competition..." disabled /></div>
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

function TeamPage() {
  const c = useColors();
  return <div style={{ width: 390, fontFamily: F, background: `linear-gradient(180deg,${c.white} 0%,${c.gray100} 25%,${c.gray200} 50%,${c.gray100} 75%,${c.white} 100%)` }}>
    <PBackBar label="S.D Spartans" onBack={() => {}} />
    <div style={{ padding: "24px 16px" }}>
      <div style={{ background: c.gray50, borderRadius: T.radii.badge, padding: `${T.spacing.lg}px`, display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.lg }}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", background: c.primary, display: "flex", alignItems: "center", justifyContent: "center", color: c.white, fontSize: T.typography.sizes.h1, fontWeight: T.typography.weights.bold }}>SD</div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: T.typography.sizes.h2, fontWeight: T.typography.weights.bold, color: c.darkText }}>S.D Spartans</h2>
          <p style={{ margin: "4px 0 0", fontSize: T.typography.sizes.caption, color: c.gray500 }}>Men's Basketball</p>
        </div>
        <div style={{ display: "flex", gap: T.spacing.md }}>
          <PBtn variant="primary" size="md">Follow</PBtn>
          <PBtn variant="secondary" size="md">Share</PBtn>
        </div>
      </div>
    </div>
    <div style={{ padding: "0 16px 24px" }}><PSectionHeader title="Recent Games" /></div>
  </div>;
}

export default function App() {
  const theme = useThemeMode();
  const toggleTheme = useToggleTheme();
  const [sec, setSec] = useState("overview");
  const [tab, setTab] = useState("signin");
  const [selJerseys, setSelJerseys] = useState([]);
  const [bmk, setBmk] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [searchQ, setSearchQ] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const toggleJ = (n) => setSelJerseys(selJerseys.includes(n) ? selJerseys.filter(x => x !== n) : [...selJerseys, n]);

  useEffect(() => {
    const checkWidth = () => {
      const mobile = window.innerWidth < T.breakpoints.mobile;
      setIsMobile(mobile);
      if (mobile) setNavOpen(false);
      else setNavOpen(true);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const bg = theme === "dark" ? DARK.white : LIGHT.white;
    document.documentElement.style.background = bg;
    document.body.style.background = bg;
    document.documentElement.style.transition = "background 0.3s ease";
    document.body.style.transition = "background 0.3s ease";
  }, [theme]);

  useEffect(() => {
    if (!document.getElementById('ds-shimmer-style')) {
      const style = document.createElement('style');
      style.id = 'ds-shimmer-style';
      style.textContent = `@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
      document.head.appendChild(style);
    }
  }, []);

  const nav = [
    { id: "tokens", label: "🎨 Design Tokens" },
    { id: "divider-inputs", label: "── Inputs ──", disabled: true },
    { id: "input", label: "AppInput" },
    { id: "select", label: "AppSelect" },
    { id: "divider-buttons", label: "── Buttons & Navigation ──", disabled: true },
    { id: "button", label: "AppButton" },
    { id: "icons", label: "Icons" },
    { id: "sociallinks", label: "SocialLinks" },
    { id: "tabs", label: "AppTabs" },
    { id: "divider-badges", label: "── Badges ──", disabled: true },
    { id: "badges", label: "AppBadge" },
    { id: "divider-cards", label: "── Cards ──", disabled: true },
    { id: "livegamecard", label: "LiveGameCard" },
    { id: "gameresultcard", label: "GameResultCard" },
    { id: "highlightcard", label: "HighlightCard" },
    { id: "scorecard", label: "ScoreCard" },
    { id: "divider-video", label: "── Videos ──", disabled: true },
    { id: "videothumbnail", label: "VideoThumbnail" },
    { id: "videotypechips", label: "VideoTypeChips" },
    { id: "divider-sharing", label: "── Sharing ──", disabled: true },
    { id: "videoactionbar", label: "VideoActionBar" },
    { id: "sharecurtain", label: "ShareCurtain" },
    { id: "divider-athlete", label: "── Athlete Profile ──", disabled: true },
    { id: "athleteprofilecard", label: "AthleteProfile" },
    { id: "divider-team", label: "── Team Profile ──", disabled: true },
    { id: "teampage", label: "TeamPage" },
    { id: "divider-stats", label: "── Stats & Info ──", disabled: true },
    { id: "teamstatsbar", label: "TeamStatsBar" },
    { id: "gameleaders", label: "GameLeaders" },
    { id: "playerstats", label: "PlayerStats" },
    { id: "statsgrid", label: "StatsGrid" },
    { id: "seasonstatsrow", label: "SeasonStatsRow" },
    { id: "infoalert", label: "InfoAlert" },
    { id: "divider-payment", label: "── Payment ──", disabled: true },
    { id: "paymentmodal", label: "Payment Plans" },
    { id: "upgradebanner", label: "UpgradeBanner" },
    { id: "divider-avatars", label: "── Avatars & List Items ──", disabled: true },
    { id: "teamlogo", label: "PTeamLogo" },
    { id: "avatar", label: "PAvatar" },
    { id: "playerphoto", label: "PPlayerPhoto" },
    { id: "playernumberbadge", label: "PlayerNumberBadge" },
    { id: "bellicon", label: "PBellIcon" },
    { id: "sectionheader", label: "PSectionHeader" },
    { id: "seealllink", label: "PSeeAllLink" },
    { id: "followingrow", label: "FollowingRow" },
    { id: "divider-layout", label: "── Layout & Overlays ──", disabled: true },
    { id: "divider", label: "Divider" },
    { id: "searchbar", label: "SearchBar" },
    { id: "backbar", label: "BackBar" },
    { id: "accordion", label: "Accordion" },
    { id: "appheader", label: "AppHeader" },
    { id: "bottomtabbar", label: "BottomTabBar" },
    { id: "sidemenu", label: "SideMenu" },
    { id: "brandhero", label: "BrandHero" },
    { id: "adbanner", label: "AdBanner" },
    { id: "notificationcenter", label: "NotificationCenter" },
    { id: "profilesidebar", label: "SideMenu (Profile)" },
    { id: "teamfollowcard", label: "TeamFollowCard" },
    { id: "competitionfollowlist", label: "CompetitionFollowList" },
    { id: "myfollowinglist", label: "MyFollowingList" },
    { id: "followedplayers", label: "HomeFollowing" },
    { id: "footer", label: "Footer" },
    { id: "divider-jersey", label: "── Jersey ──", disabled: true },
    { id: "jersey", label: "JerseyItem" },
    { id: "jerseygrid", label: "JerseyGrid" },
    { id: "divider-states", label: "── Empty & Error States ──", disabled: true },
    { id: "emptystate", label: "EmptyState" },
    { id: "errorstate", label: "ErrorState" },
    { id: "offlinebanner", label: "OfflineBanner" },
    { id: "divider-loading", label: "── Loading States ──", disabled: true },
    { id: "skeletons", label: "Skeletons & Loaders" },
    { id: "divider-pages", label: "── Pages ──", disabled: true },
    { id: "auth", label: "AuthPage" },
    { id: "onboarding", label: "PlayerSelectPage" },
    { id: "homepage", label: "HomePage" },
    { id: "gamedetailpage", label: "GameDetailPage" },
  ];
  const renderContent = () => {
    const c = dc;

    return (
      <div style={{ display: "flex", minHeight: "100vh", fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif' }}>
        {/* Mobile hamburger */}
        {isMobile && !navOpen && <button onClick={() => setNavOpen(true)} aria-label="Open navigation"
          style={{ position: "fixed", top: 12, left: 12, zIndex: 1001, width: 36, height: 36, borderRadius: T.radii.thumb, background: c.white, border: `1px solid ${c.gray200}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", ...(true ? { outline: `2px solid ${c.primary}`, outlineOffset: 2 } : {}) }}>
          <Menu size={20} color={c.gray500} />
        </button>}
        {/* Mobile backdrop */}
        {isMobile && navOpen && <div onClick={() => setNavOpen(false)} style={{ position: "fixed", inset: 0, background: c.overlay, zIndex: 999 }} />}
        <nav aria-label="Design system sections" style={{ width: 220, background: c.white, borderRight: `1px solid ${c.gray200}`, padding: `${T.spacing.lg}px 0`, flexShrink: 0, position: isMobile ? "fixed" : "sticky", top: 0, left: 0, height: "100vh", overflowY: "auto", transition: "background 0.3s ease, transform 0.25s ease", zIndex: isMobile ? 1000 : "auto", transform: isMobile && !navOpen ? "translateX(-100%)" : "translateX(0)", boxShadow: isMobile && navOpen ? "4px 0 16px rgba(0,0,0,0.15)" : "none" }}>
          <div style={{ padding: `0 ${T.spacing.md2}px ${T.spacing.md2}px`, borderBottom: `1px solid ${c.gray100}`, marginBottom: T.spacing.xs2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}>
              <PixellotLogo size={30} />
              <div><div style={{ fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.bold, color: c.darkText, transition: "color 0.3s ease" }}>Pixellot</div><div style={{ fontSize: T.typography.sizes.mini, color: c.gray500 }}>Design System v2</div></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.xs }}>
              <button onClick={toggleTheme}
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                style={{ background: "none", border: "none", cursor: "pointer", padding: T.spacing.xs, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: T.radii.sm }}>
                {theme === "light" ? <Moon size={18} color={c.gray400} /> : <Sun size={18} color={c.gray400} />}
              </button>
              {isMobile && <button onClick={() => setNavOpen(false)} aria-label="Close navigation"
                style={{ background: "none", border: "none", cursor: "pointer", padding: T.spacing.xs, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: T.radii.sm }}>
                <X size={18} color={c.gray400} />
              </button>}
            </div>
          </div>
          <div style={{ padding: "6px 10px" }}>
            <div style={{ position: "relative" }}>
              <Search size={14} color={c.gray400} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
                aria-label="Search components"
                style={{
                  width: "100%",
                  height: 30,
                  paddingLeft: 28,
                  paddingRight: 8,
                  border: `1px solid ${c.gray200}`,
                  borderRadius: T.radii.sm,
                  background: c.gray50,
                  color: c.darkText,
                  fontSize: T.typography.sizes.xxs,
                  fontFamily: F,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s"
                }}
              />
            </div>
          </div>
          {nav.filter(s => {
            if (!searchQ.trim()) return true;
            if (s.disabled) return false;
            return s.label.toLowerCase().includes(searchQ.toLowerCase());
          }).map(s => <NavBtn key={s.id} s={s} sec={sec} setSec={setSec} isMobile={isMobile} setNavOpen={setNavOpen} />)}
        </nav>

        <main style={{ flex: 1, padding: isMobile ? "16px 16px 16px 16px" : "24px 32px", maxWidth: 900, overflowY: "auto", paddingTop: isMobile ? 56 : undefined }}>

        {sec === "overview" && <div>
          <h1 style={{ fontSize: T.typography.sizes.h2, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.xs }}>Pixellot Design System v2</h1>
          <p style={{ color: c.gray500, fontSize: T.typography.sizes.xs, marginTop: T.spacing.xs, lineHeight: 1.6 }}>Complete component library for the Pixellot sports platform — auth, onboarding, jersey selection, game details, team shop, and player profiles.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: T.spacing.sm2, marginTop: T.spacing.lg }}>
            {[{ n: "44", l: "Components" }, { n: "72", l: "Design Tokens" }, { n: "6", l: "Page Views" }].map(i => <div key={i.l} style={{ background: c.white, border: `1px solid ${c.gray100}`, borderRadius: T.radii.badge, padding: `${T.spacing.md2}px ${T.spacing.lg}px`, textAlign: "center" }}><div style={{ fontSize: T.typography.sizes.xxl, fontWeight: T.typography.weights.extraBold, color: c.primary }}>{i.n}</div><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray500, marginTop: T.spacing.xxs }}>{i.l}</div></div>)}
          </div>
          <div style={{ height: T.spacing.xxl }} />
          <Card title="Project Structure" codeTitle="File Tree" code={C.projectStructure}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.xs2, fontSize: T.typography.sizes.caption }}>
              {["AppInput","AppSelect","AppButton","AppBadge","AppTabs","AppDivider","AppLink","TeamRow","LockSvg","BackButton","MainTopBar","SectionHeader","PaywallOverlay","LiveGameCard","GameResultCard","ScoreCard","ProductCard","VideoThumbnail","VideoTypeChips","VideoActionBar","ShareCurtain","TeamStatsBar","GameLeaders","PlayerStatsTable","StatsGrid","SeasonStatsRow","PaymentModal","UpgradeBanner","InfoAlert","JerseyItem","JerseyGrid"].map(c_item => <div key={c_item} style={{ padding: "6px 10px", background: c.gray50, borderRadius: T.radii.xs, fontFamily: "monospace", color: c.gray500 }}>{"<"}{c_item}{" />"}</div>)}
            </div>
          </Card>
        </div>}

        {sec === "tokens" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Design Tokens</h2>
          <Card title="Colors" codeTitle="tokens/index.ts" code={C.tokens}>
            {[
              { label: "Primary", keys: ["primary", "primaryHover", "primaryActive"] },
              { label: "Neutrals", keys: ["white", "black", "darkText"] },
              { label: "Grays", keys: ["gray50", "gray100", "gray200", "gray300", "gray400", "gray500"] },
              { label: "Overlays", keys: ["grayOverlay", "grayOverlayHover", "overlay"] },
              { label: "Brand", keys: ["heroBg", "accent", "jerseyRed", "jerseyStroke"] },
              { label: "Premium", keys: ["premiumYellow", "premiumAmber", "premiumHover", "premiumActive", "premiumDark"] },
              { label: "Status", keys: ["successGreen", "errorRed", "dangerRed", "liveRed", "notifBadgeRed", "selectedGreen", "errorBg"] },
              { label: "Badges & Tags", keys: ["freeBadgeGreen", "claimedPurple", "highlightsBadgeBg", "highlightsBadgeText"] },
              { label: "Surfaces", keys: ["cardBg", "cardHoverBg", "barTrack", "dividerDark"] },
              { label: "Bars & Charts", keys: ["barRed", "barGray", "highlightGray"] },
              { label: "Links & Info", keys: ["linkBlue", "infoBgPurple"] },
              { label: "Disabled", keys: ["disabledTextOnDark"] },
            ].map(group => {
              const palette = theme === "dark" ? DARK : LIGHT;
              return <div key={group.label} style={{ marginBottom: T.spacing.lg }}>
                <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.xs }}>{group.label}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {group.keys.map(k => <Swatch key={k} name={k} hex={palette[k]} />)}
                </div>
              </div>;
            })}
          </Card>
          <Card title="Typography" desc="Red Hat Display — Regular 400, Medium 500, Semibold 600, Bold 700">
            <PTypographyPreview />
          </Card>
          <Card title="Spacing" desc="Consistent spacing scale consumed by all components">
            <PSpacingPreview />
          </Card>
          <Card title="Sizes" desc="Component dimensions — inputHeight, buttonSm/Md/Lg, tabHeight, chipHeight, etc.">
            <PSizesPreview />
          </Card>
          <Card title="Radii" desc="Border radius tokens — sm, md, lg, xl, badge, chip, pill">
            <PRadiiPreview />
          </Card>
        </div>}

        {sec === "input" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AppInput</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Text input with password toggle — supports default, hover, focus, filled, error, disabled, and readOnly states</p>

          <Card title="Variants" code={C.appInput} codeTitle="AppInput.vue">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
              <PInput placeholder="Email Address..." type="email" />
              <PInput placeholder="Enter password..." type="password" />
              <PInput placeholder="Full Name..." />
              <PInput placeholder="Phone Number..." type="tel" />
            </div>
          </Card>

          <Card title="States — default / hover / focus / filled / disabled">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.md }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>default</div>
                <PInput placeholder="Email Address..." type="email" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>hover</div>
                <PInput placeholder="Email Address..." type="email" _forceState="hover" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>focus — blue border</div>
                <PInput placeholder="Email Address..." type="email" _forceState="focus" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>filled</div>
                <PInput placeholder="Email Address..." type="email" _forceState="filled" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>disabled</div>
                <PInput placeholder="Email Address..." type="email" disabled={true} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>readOnly</div>
                <PInput placeholder="user@example.com" _forceState="readOnly" />
              </div>
            </div>
          </Card>

          <Card title="Error States">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.md }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error — red border</div>
                <PInput placeholder="Email Address..." type="email" error={true} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error + message</div>
                <PInput placeholder="Email Address..." type="email" error={true} errorMsg="Please enter a valid email address" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error + hover</div>
                <PInput placeholder="Email Address..." type="email" error={true} _forceState="hover" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error + focus</div>
                <PInput placeholder="Email Address..." type="email" error={true} errorMsg="Please enter a valid email address" _forceState="focus" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error + filled</div>
                <PInput placeholder="Email Address..." type="email" error={true} errorMsg="Please enter a valid email address" _forceState="filled" />
              </div>
            </div>
          </Card>

          <Card title="Password + States">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.md }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>default</div>
                <PInput placeholder="Enter password..." type="password" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error + message</div>
                <PInput placeholder="Enter password..." type="password" error={true} errorMsg="Password must be at least 8 characters" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>disabled</div>
                <PInput placeholder="Enter password..." type="password" disabled={true} />
              </div>
            </div>
          </Card>

          <Card title="Interactive Playground" desc="Toggle props to see live state changes">
            <InputPlayground />
          </Card>

          <Card title="Props">
            <PropsBlock>
              <div>modelValue: string — v-model binding</div>
              <div>placeholder: string — placeholder text</div>
              <div>type: string — "text" | "email" | "tel" | "password"</div>
              <div>error: boolean — toggles red error border</div>
              <div>errorMsg: string — error message below input</div>
              <div>disabled: boolean — disables input and toggle</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "select" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AppSelect</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Dropdown select — supports default, hover, focus, error, and disabled states</p>
          <Card title="Variants" code={C.appSelect} codeTitle="AppSelect.vue">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.md }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>default</div>
                <PSelect placeholder="Age..." />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>hover</div>
                <PSelect placeholder="Age..." _forceState="hover" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>focus</div>
                <PSelect placeholder="Age..." _forceState="focus" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>error</div>
                <PSelect placeholder="Age..." error={true} errorMsg="Please select your age" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>disabled</div>
                <PSelect placeholder="Age..." disabled={true} />
              </div>
            </div>
          </Card>
        </div>}

        {sec === "button" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AppButton</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>7 variants × 3 sizes — unified button component</p>

          {/* === Variants at default (md) size === */}
          <Card title="All Variants — md (default)" code={C.appButton} codeTitle="AppButton.vue">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>primary</div>
              <PBtn>Sign in</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>premium</div>
              <PBtn variant="premium">Buy Now</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>social</div>
              <PBtn variant="social" leadingIcon={<AppleIcon />}>Continue with Apple</PBtn>
              <PBtn variant="social" leadingIcon={<GoogleIcon />}>Continue with Google</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>muted</div>
              <PBtn variant="muted" trailingIcon={<ChevronDown size={16} />}>See All</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>ghost</div>
              <PBtn variant="ghost">Ghost</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>link</div>
              <PBtn variant="link" fullWidth={false}>See all &gt;</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>danger</div>
              <PBtn variant="danger" fullWidth={false}>Log Out</PBtn>
            </div>
          </Card>

          {/* === States === */}
          <Card title="States — default / hover / pressed / disabled">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
              {["primary", "premium", "social", "muted", "ghost", "link", "danger"].map(v => <div key={v}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>{v}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: T.spacing.xs2 }}>
                  {[
                    { label: "default", state: "default" },
                    { label: "hover", state: "hover" },
                    { label: "pressed", state: "active" },
                    { label: "disabled", state: "disabled" },
                  ].map(({ label, state }) => <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                    <PBtn variant={v} size="sm" fullWidth={true} _forceState={state} disabled={state === "disabled"}>{v === "danger" ? "Log Out" : v === "link" ? "Link" : v === "ghost" ? "Ghost" : v === "social" ? "Apple" : v === "muted" ? "See All" : v === "premium" ? "Buy" : "Sign in"}</PBtn>
                    <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>{label}</span>
                  </div>)}
                </div>
              </div>)}
            </div>
          </Card>

          {/* === Size Comparison === */}
          <Card title="Size Comparison — sm / md / lg">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.md2 }}>
              {["primary", "premium", "social", "muted"].map(v => <div key={v}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>{v}</div>
                <div style={{ display: "flex", gap: T.spacing.sm, alignItems: "center" }}>
                  <PBtn variant={v} size="sm" fullWidth={false}>{v === "social" ? "Apple" : v === "muted" ? "See All" : "Small"}</PBtn>
                  <PBtn variant={v} size="md" fullWidth={false}>{v === "social" ? "Apple" : v === "muted" ? "See All" : "Medium"}</PBtn>
                  <PBtn variant={v} size="lg" fullWidth={false}>{v === "social" ? "Apple" : v === "muted" ? "See All" : "Large"}</PBtn>
                </div>
              </div>)}
            </div>
          </Card>

          {/* === Icons === */}
          <Card title="With Icons">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>leading icon</div>
              <PBtn variant="social" leadingIcon={<AppleIcon />}>Continue with Apple</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>trailing icon</div>
              <PBtn variant="muted" trailingIcon={<ChevronDown size={16} />}>See All</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>icon only</div>
              <div style={{ display: "flex", gap: T.spacing.sm }}>
                <button aria-label="Close" style={{ width: 32, height: 32, minWidth: 32, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={16} /></button>
                <button aria-label="Play" style={{ width: 32, height: 32, minWidth: 32, borderRadius: "50%", background: "#f3f4f6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Play size={16} color="#6b7280" /></button>
                <button aria-label="Check" style={{ width: 32, height: 32, minWidth: 32, borderRadius: "50%", background: "#3b82f6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={16} color="#ffffff" /></button>
              </div>
            </div>
          </Card>

          {/* === Full-width vs auto === */}
          <Card title="Width Modes">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>fullWidth (default)</div>
              <PBtn>Full Width Button</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>auto width (fullWidth=false)</div>
              <PBtn fullWidth={false}>Auto Width</PBtn>
            </div>
          </Card>
        </div>}

        {sec === "icons" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Icons</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>18 Lucide icons + 3 tab bar SVGs + 3 custom SVGs + 6 share channel SVGs + 2 placeholder components</p>

          <Card title="Lucide Icons (lucide-react)">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: T.spacing.md }}>
              {[
                { Icon: Eye, name: "Eye" }, { Icon: EyeOff, name: "EyeOff" }, { Icon: ChevronDown, name: "ChevronDown" },
                { Icon: Copy, name: "Copy" }, { Icon: Check, name: "Check" }, { Icon: Search, name: "Search" },
                { Icon: Play, name: "Play" }, { Icon: X, name: "X" }, { Icon: ArrowLeft, name: "ArrowLeft" },
                { Icon: Download, name: "Download" }, { Icon: Upload, name: "Upload" }, { Icon: Bookmark, name: "Bookmark" },
                { Icon: Bell, name: "Bell" }, { Icon: User, name: "User" },
                { Icon: Sun, name: "Sun" }, { Icon: Moon, name: "Moon" },
                { Icon: Menu, name: "Menu" }, { Icon: Share2, name: "Share2" },
              ].map(({ Icon, name }) => <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs2, padding: T.spacing.sm }}>
                <div style={{ width: 40, height: 40, borderRadius: T.radii.thumb, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} color={c.darkText} />
                </div>
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400, textAlign: "center", lineHeight: 1.2 }}>{name}</span>
              </div>)}
            </div>
          </Card>

          <Card title="Custom SVG Icons">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.md }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: T.radii.thumb, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GoogleIcon />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>GoogleIcon</span>
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>Social auth</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: T.radii.thumb, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AppleIcon />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>AppleIcon</span>
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>Social auth</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: T.radii.thumb, background: c.premiumDark, border: `${T.strokes.bold}px solid ${c.premiumYellow}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <LockSvg size={16} />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>LockSvg</span>
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>Paywall / badges</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: T.radii.thumb, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ChipLockSvg />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>ChipLockSvg</span>
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>Chip prefix</span>
              </div>
            </div>
          </Card>

          <Card title="BottomTabBar Icons" desc="3 custom SVGs + Bookmark (lucide). Traced from Sales prototype. Active state fills solid, inactive is outline-only.">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.md }}>
              {(["games", "saved", "following", "shop"] as const).map(icon => (
                <div key={icon} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                  <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: T.radii.thumb, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <_TabIcon icon={icon} active={false} color={c.gray400} />
                    </div>
                    <div style={{ width: 40, height: 40, borderRadius: T.radii.thumb, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <_TabIcon icon={icon} active={true} color={c.darkText} />
                    </div>
                  </div>
                  <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>{icon === "saved" ? "Bookmark (lucide)" : icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
                  <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>BottomTabBar</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="LockSvg Sizes">
            <div style={{ display: "flex", gap: T.spacing.lg2, alignItems: "flex-end" }}>
              {[{ s: 8, label: "8 — chip" }, { s: 11, label: "11 — thumbnail" }, { s: 12, label: "12 — banner" }, { s: 16, label: "16 — explorer" }, { s: 22, label: "22 — paywall" }].map(({ s, label }) => <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs2 }}>
                <div style={{ width: 40, height: 40, borderRadius: T.radii.thumb, background: c.premiumDark, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <LockSvg size={s} />
                </div>
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400, textAlign: "center", lineHeight: 1.2 }}>{label}</span>
              </div>)}
            </div>
          </Card>

          <Card title="Share Channel Icons" desc="6 branded social icons used in ShareCurtain">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: T.spacing.lg }}>
              {SHARE_CHANNELS.map(ch => {
                const componentName = ch.label === "Copy Link" ? "CopyLinkIcon" : ch.label === "X" ? "XLogoIcon" : `${ch.label}Icon`;
                return <div key={ch.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: ch.gradient || ch.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ch.icon />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>{componentName}</span>
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>ShareCurtain</span>
              </div>; })}
            </div>
          </Card>

          <Card title="Usage in Components">
            <PropsBlock>
              <div>{"<Eye /> <EyeOff />"} → AppInput password toggle</div>
              <div>{"<ChevronDown />"} → AppSelect, See All buttons</div>
              <div>{"<Copy />"} → Code snippet copy button</div>
              <div>{"<Check />"} → PaymentModal, Jersey selected</div>
              <div>{"<Search />"} → MainTopBar search</div>
              <div>{"<Play />"} → VideoThumbnail, GameResultCard</div>
              <div>{"<X />"} → Modal close</div>
              <div>{"<ArrowLeft />"} → BackButton navigation</div>
              <div>{"<GoogleIcon />"} → Social auth button</div>
              <div>{"<AppleIcon />"} → Social auth button</div>
              <div>{"<LockSvg size={8-22} />"} → Paywalls, thumbnails, banner, chips</div>
              <div>{"<Download />"} → VideoActionBar download</div>
              <div>{"<Upload />"} → VideoActionBar share (opens ShareCurtain)</div>
              <div>{"<Bookmark />"} → VideoActionBar bookmark, BottomTabBar "Saved" tab</div>
              <div>{"<CopyLinkIcon />"} → ShareCurtain copy link</div>
              <div>{"<FacebookIcon />"} → ShareCurtain</div>
              <div>{"<XLogoIcon />"} → ShareCurtain</div>
              <div>{"<WhatsAppIcon />"} → ShareCurtain</div>
              <div>{"<TikTokIcon />"} → ShareCurtain</div>
              <div>{"<InstagramIcon />"} → ShareCurtain</div>
              <div>{"<Bell />"} → TopBar notification bell</div>
              <div>{"<User />"} → ProfileSidebar fallback avatar</div>
              <div>{"_TabIcon(games)"} → BottomTabBar trophy (custom SVG)</div>
              <div>{"_TabIcon(following)"} → BottomTabBar heart (custom SVG)</div>
              <div>{"_TabIcon(shop)"} → BottomTabBar bag with smiley (custom SVG)</div>
            </PropsBlock>
          </Card>

          <Card title="Placeholder Components" desc="Deterministic placeholders for images that need real assets in production">
            <div style={{ display: "flex", gap: T.spacing.lg2, alignItems: "flex-end", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PTeamLogo size={40} name="Maccabi" />
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>PTeamLogo</span>
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>name="Maccabi"</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PTeamLogo size={40} name="Ironi" />
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>PTeamLogo</span>
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>name="Ironi"</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PTeamLogo size={40} name="Hapoel" />
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>PTeamLogo</span>
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>name="Hapoel"</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PPlayerPhoto size={48} name="B. Rogers" />
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>PPlayerPhoto</span>
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>48px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PPlayerPhoto size={36} name="J. Davis" />
                <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400 }}>PPlayerPhoto</span>
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>36px</span>
              </div>
            </div>
          </Card>
        </div>}

        {sec === "sociallinks" && <Card title="SocialLinks" desc="Monochrome social media icons — X, Facebook, Instagram, Website. Used in team profile.">
          <div style={{ display: "flex", justifyContent: "center", padding: 16 }}><PSocialLinks /></div>
        </Card>}

        {sec === "tabs" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AppTabs</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>2 variants — pill, underline (with configurable accentColor per team)</p>

          <Card title="pill (default)" code={C.appTabs} codeTitle="AppTabs.vue">
            <div style={{ maxWidth: 398 }}>
              <PTabs tabs={[{ label: "Sign In", value: "signin" }, { label: "Sign Up", value: "signup" }]} active={tab} onSelect={setTab} />
              <div style={{ marginTop: T.spacing.sm2, fontSize: T.typography.sizes.caption, color: c.gray400 }}>Active: <code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm }}>{tab}</code></div>
            </div>
          </Card>

          <Card title="pill — Interactive States" desc="Hover and pressed states on inactive tabs">
            <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.md, maxWidth: 398 }}>
              {["default", "hover", "active"].map(s => <div key={s}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>Inactive tab → <strong>{s}</strong></div>
                <PTabs tabs={[{ label: "Sign In", value: "signin" }, { label: "Sign Up", value: "signup" }]} active="signin" onSelect={() => {}} _forceState={s} />
              </div>)}
            </div>
          </Card>

          <Card title="underline (default — team red)" desc="accentColor defaults to #EF4444. Pass any team color.">
            <div style={{ maxWidth: 398 }}>
              <PTabs variant="underline" tabs={[{ label: "Schedule", value: "schedule" }, { label: "Results", value: "results" }, { label: "Standings", value: "standings" }]} active={tab} onSelect={setTab} />
              <div style={{ marginTop: T.spacing.sm2, fontSize: T.typography.sizes.caption, color: c.gray400 }}>accentColor="#EF4444" (default)</div>
            </div>
          </Card>

          <Card title="underline — Interactive States" desc="Hover shows faint accent underline hint; pressed darkens text">
            <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.md, maxWidth: 398 }}>
              {["default", "hover", "active"].map(s => <div key={s}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs }}>Inactive tab → <strong>{s}</strong></div>
                <PTabs variant="underline" tabs={[{ label: "Schedule", value: "schedule" }, { label: "Results", value: "results" }, { label: "Standings", value: "standings" }]} active="schedule" onSelect={() => {}} _forceState={s} />
              </div>)}
            </div>
          </Card>

          <Card title="underline — custom team colors" desc="Same component, different accentColor per team/client">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>accentColor="#116DFF" (Maccabi blue)</div>
                <PTabs variant="underline" accentColor="#116DFF" tabs={[{ label: "Overview", value: "overview" }, { label: "Stats", value: "stats" }, { label: "Highlights", value: "highlights" }]} active={tab} onSelect={setTab} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>accentColor="#22C55E" (Haifa green)</div>
                <PTabs variant="underline" accentColor="#22C55E" tabs={[{ label: "Overview", value: "overview" }, { label: "Stats", value: "stats" }, { label: "Highlights", value: "highlights" }]} active={tab} onSelect={setTab} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>accentColor="#E7A610" (premium amber)</div>
                <PTabs variant="underline" accentColor="#E7A610" tabs={[{ label: "Overview", value: "overview" }, { label: "Stats", value: "stats" }, { label: "Highlights", value: "highlights" }]} active={tab} onSelect={setTab} />
              </div>
            </div>
          </Card>

          <Card title="Disabled Tabs" desc="Individual tabs can be disabled — grayed out, not clickable">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>pill — "Sign Up" disabled</div>
                <PTabs tabs={[{ label: "Sign In", value: "signin" }, { label: "Sign Up", value: "signup", disabled: true }]} active="signin" onSelect={() => {}} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>underline — "Standings" disabled</div>
                <PTabs variant="underline" tabs={[{ label: "Schedule", value: "schedule" }, { label: "Results", value: "results" }, { label: "Standings", value: "standings", disabled: true }]} active="schedule" onSelect={() => {}} />
              </div>
            </div>
          </Card>
        </div>}

        {sec === "divider" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Divider</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Simple horizontal or vertical separator line. Used between sections in menus, lists, cards, and panels. Supports custom color, thickness, and spacing.</p>
          <Card title="Default (horizontal)" desc="1px gray200 line, full width">
            <div style={{ padding: "8px 0" }}>
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText, padding: "8px 0" }}>Section A</div>
              <PDivider />
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText, padding: "8px 0" }}>Section B</div>
            </div>
          </Card>
          <Card title="With spacing" desc="spacing prop adds equal margin on both sides">
            <div>
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText, padding: "4px 0" }}>Item 1</div>
              <PDivider spacing={12} />
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText, padding: "4px 0" }}>Item 2</div>
              <PDivider spacing={12} />
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText, padding: "4px 0" }}>Item 3</div>
            </div>
          </Card>
          <Card title="Custom color & thickness" desc="color and thickness props for emphasis">
            <div style={{ padding: "8px 0" }}>
              <PDivider color={c.gray100} thickness={1} spacing={6} />
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, color: c.gray400, textAlign: "center", margin: "4px 0" }}>gray100 · 1px (subtle)</div>
              <PDivider color={c.gray200} thickness={1} spacing={6} />
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, color: c.gray400, textAlign: "center", margin: "4px 0" }}>gray200 · 1px (default)</div>
              <PDivider color={c.gray300} thickness={2} spacing={6} />
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, color: c.gray400, textAlign: "center", margin: "4px 0" }}>gray300 · 2px (strong)</div>
            </div>
          </Card>
          <Card title="Vertical" desc="vertical={true} for side-by-side layouts">
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              <span style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText }}>Left</span>
              <PDivider vertical spacing={12} />
              <span style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText }}>Center</span>
              <PDivider vertical spacing={12} />
              <span style={{ fontFamily: F, fontSize: T.typography.sizes.body2, color: c.darkText }}>Right</span>
            </div>
          </Card>
          <Card title="Text divider" desc="PTextDivider — centered label between lines (e.g. 'OR' in login forms)">
            <div style={{ maxWidth: 398 }}><PTextDivider /></div>
            <div style={{ maxWidth: 398, marginTop: T.spacing.md }}><PTextDivider text="or continue with" /></div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>color?: string — line color (default gray200)</div>
              <div>thickness?: number — line width in px (default 1)</div>
              <div>spacing?: number — margin on both sides in px (default 0)</div>
              <div>vertical?: boolean — render as vertical divider (default false)</div>
              <div>style?: CSSProperties — extra style overrides</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "link" && <Card title="AppLink" code={C.appLink} codeTitle="AppLink.vue">
          <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
            <PLink>muted (default)</PLink>
            <PLink variant="accent">accent (red underline)</PLink>
            <PLink variant="primary">primary (blue)</PLink>
          </div>
        </Card>}

        {sec === "badges" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AppBadge</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>5 variants — unified badge component</p>

          <Card title="All Variants" code={C.appBadge} codeTitle="AppBadge.vue">
            <div style={{ display: "flex", gap: T.spacing.sm2, flexWrap: "wrap", alignItems: "center" }}>
              {["live", "premium", "free", "claimed", "highlights"].map(v => <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs2 }}>
                <PBadge variant={v} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>{v}</span>
              </div>)}
            </div>
          </Card>

          <Card title="Usage Context">
            <PropsBlock>
              <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.md2 }}>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.sm2 }}><PBadge variant="live" /> LiveGameCard — game in progress</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.sm2 }}><PBadge variant="premium" /> VideoThumbnail — locked content</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.sm2 }}><PBadge variant="free" /> VideoThumbnail — free content</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.sm2 }}><PBadge variant="claimed" /> ProductCard — item claimed</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.sm2 }}><PBadge variant="highlights" /> GameResultCard — highlights available</span></div>
              </div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "livegamecard" && <div>
          <Card title="LiveGameCard" desc="Horizontal card showing live game with live badge, date, teams, and scores">
            <PLiveGameCard />
          </Card>
          <Card title="PTeamRow — Shared Atom" desc="Reusable team row used by LiveGameCard and GameResultCard. Accepts name, score, isWinner, logoSize, fontWeight, gap.">
            <PTeamRowPreview />
          </Card>
        </div>}

        {sec === "gameresultcard" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>GameResultCard</h2>
          <Card title="GameResultCard" desc="Vertical card with left date column, teams/scores on right, league + highlights badge at bottom">
            <PGameResultCard />
          </Card>
          <Card title="Highlights Badge" desc="Yellow badge with play icon — used at bottom-right of game result cards">
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.lg }}>
              <PHighlightsBadge />
              <span style={{ fontSize: T.typography.sizes.caption, color: c.gray400 }}>bg: #6C6C6C, text: #FFE000, border: #FFE000</span>
            </div>
          </Card>
        </div>}

        {sec === "highlightcard" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>HighlightCard</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Vertical video highlight card with emoji-prefixed title, date, duration badge, and optional lock icon. Used in Game Detail for Game Highlights, Personal Highlights, Followed Players, and Other Players sections.</p>
          <Card title="Locked Highlights (Premium)" desc="Cards with yellow lock icon badge — paywall content" code={C.highlightCard} codeTitle="HighlightCard.vue">
            <div style={{ display: "flex", gap: T.spacing.md, flexWrap: "wrap" }}>
              <PHighlightCard title="Weiss with the dimes" duration="1:23" emoji={"\uD83C\uDFC0"} locked={true} />
              <PHighlightCard title="Best plays of the game" duration="5:15" emoji={"\uD83D\uDD25"} locked={true} />
              <PHighlightCard title="Top scoring moments" duration="3:45" emoji={"\u2B50"} locked={true} />
              <PHighlightCard title="Dunks & points" duration="2:20" emoji={"\uD83C\uDFC6"} locked={true} />
            </div>
          </Card>
          <Card title="Free Highlights (No Lock)" desc="Cards without lock icon — freely accessible content">
            <div style={{ display: "flex", gap: T.spacing.md, flexWrap: "wrap" }}>
              <PHighlightCard title="#4 Gets the ball Forward" duration="0:45" emoji={"\uD83C\uDFC0"} locked={false} />
              <PHighlightCard title="#11 Gets the ball Forward" duration="0:32" emoji={"\uD83C\uDFC0"} locked={false} />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock variant="muted">
              <code>thumbnail: string</code> — background image URL<br/>
              <code>duration: string</code> — video length badge (top-left)<br/>
              <code>title: string</code> — emoji-prefixed title overlay<br/>
              <code>date: string</code> — date below title<br/>
              <code>locked: boolean</code> — show/hide yellow lock icon (default: true)
            </PropsBlock>
          </Card>
        </div>}

        {sec === "scorecard" && <Card title="ScoreCard" desc="Final score display with teams, scores, game status, date, and standings">
          <PScoreCard />
        </Card>}

        {sec === "videothumbnail" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>VideoThumbnail</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>2 orientations × 2 lock states — unified component</p>

          <Card title="Landscape (16:9)">
            <h4 style={{ margin: "0 0 8px", fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Free (locked=false)</h4>
            <PVideoThumbnail orientation="landscape" locked={false} duration="1:42:15" title="Full Game" subtitle="Free" />
            <h4 style={{ margin: "16px 0 8px", fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Premium (locked=true)</h4>
            <PVideoThumbnail orientation="landscape" locked={true} duration="22:30" title="Condensed Game" subtitle="Premium Only" />
          </Card>

          <Card title="Vertical (9:16)">
            <h4 style={{ margin: "0 0 8px", fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Locked</h4>
            <div style={{ display: "flex", gap: T.spacing.md }}>
              <PVideoThumbnail orientation="vertical" locked={true} duration="1:23" title="🏀 Weiss with the dimes" subtitle="NOV 13, 2025" />
              <PVideoThumbnail orientation="vertical" locked={true} duration="2:45" title="🏀 Fast break layup" subtitle="NOV 13, 2025" />
              <PVideoThumbnail orientation="vertical" locked={true} duration="0:58" title="🏀 Three pointer" subtitle="NOV 13, 2025" />
            </div>
            <h4 style={{ margin: "16px 0 8px", fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Free</h4>
            <div style={{ display: "flex", gap: T.spacing.md }}>
              <PVideoThumbnail orientation="vertical" locked={false} duration="4:10" title="🏀 #4 Gets the ball Forward" subtitle="NOV 13, 2025" />
              <PVideoThumbnail orientation="vertical" locked={false} duration="3:22" title="🏀 Alley-oop finish" subtitle="NOV 13, 2025" />
            </div>
          </Card>

          <Card title="Jersey Badge variant" desc="Used in Athlete Profile highlights grid — shows sleeveless jersey with number + label instead of title/subtitle">
            <div style={{ display: "flex", gap: T.spacing.md }}>
              <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="0:45" jerseyLabel={"Player\nHighlights"} />
              <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={23} duration="1:23" jerseyLabel={"Player\nHighlights"} jerseyColor="#116DFF" />
              <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={8} duration="0:32" jerseyLabel={"Player\nHighlights"} jerseyColor="#FFE000" />
            </div>
          </Card>

          <Card title="Props">
            <PropsBlock>
              <div>orientation: "landscape" | "vertical"</div>
              <div>locked: boolean (false = Play icon, true = Lock icon + blur)</div>
              <div>duration: string ("1:42:15")</div>
              <div>title: string ("Full Game")</div>
              <div>subtitle: string ("Free" / "Premium Only")</div>
              <div>showJerseyBadge: boolean — jersey badge instead of title/subtitle</div>
              <div>jerseyNumber: number — player number on the jersey</div>
              <div>jerseyLabel: string — text next to jersey ("Player Highlights")</div>
              <div>jerseyColor: string — jersey fill color (default #D0142C, auto dark text on light colors)</div>
              <div>thumbnailUrl: string — background image URL</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "teamstatsbar" && <>
          <Card title="TeamStatsBar" desc="Comparative stat bar with left/right values, center label, and proportional bars">
            <PTeamStatsBar label="Points" leftVal={82} rightVal={76} />
            <PTeamStatsBar label="Field Goal %" leftVal={48} rightVal={42} />
            <PTeamStatsBar label="2-Point %" leftVal={54} rightVal={49} />
          </Card>
          <Card title="TeamStatsBar — Paywall" desc="Blurred stats with lock overlay, 'Buy Team Stats' text, and yellow Buy Now CTA">
            <PTeamStatsPaywall />
          </Card>
        </>}

        {sec === "gameleaders" && <Card title="GameLeaders" desc="Side-by-side leader comparison with player numbers, stat details, and center category label">
          <PGameLeaders />
        </Card>}

        {sec === "playerstats" && <>
          <Card title="PlayerStats Table" desc="Team-tabbed player stats table with columns: Player, MIN, PTS, REB, AST">
            <PPlayerStatsTable />
          </Card>
          <Card title="Player Stats + Game Leaders — Paywall" desc="Blurred PlayerStats table and GameLeaders with lock overlay and Buy Now CTA">
            <PPlayerStatsPaywall />
          </Card>
        </>}

        {sec === "statsgrid" && <Card title="StatsGrid" desc="3-column grid of stat boxes with label and bold value — built from PStatCard">
          <PStatsGrid />
        </Card>}

        {sec === "seasonstatsrow" && <Card title="SeasonStatsRow" desc="4 stat boxes in a row: MPG, PPG, APG, RPG — built from PStatCard">
          <PSeasonStatsRow />
        </Card>}

        {sec === "athleteprofilecard" && <>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Athlete Profile</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Full athlete profile page — 390px wide. Uses DS components: PPlayerPhoto (hero), PTeamLogo (team link), ArrowLeft + Share2 (nav icons), PStatCard, PSectionHeader, PVideoThumbnail, PSeeAllLink. All colors use DS tokens.</p>
          <Card title="Default — Tal Weiss #1" desc="Full page view 1:1 Figma">
            <div style={{ maxWidth: 390, overflow: "hidden" }}>
              <AthleteProfileCard />
            </div>
          </Card>
          <Card title="Custom player" desc="Pass name, number, position, teamName, accentColor">
            <div style={{ maxWidth: 390, overflow: "hidden" }}>
              <AthleteProfileCard name="BEN SIMMONS" number={25} position="Point Guard" teamName="S.D Spartans" accentColor="#007cbe" />
            </div>
          </Card>
          <Card title="DS Components Used">
            <PropsBlock>
              <div>PPlayerPhoto — circular hero photo (photoUrl from server)</div>
              <div>PTeamLogo — team icon next to team name (teamLogoUrl from server)</div>
              <div>ArrowLeft (lucide) — back navigation icon</div>
              <div>Share2 (lucide) — share action icon</div>
              <div>ChevronDown (lucide, rotated) — team name link chevron</div>
              <div>PStatCard — career + season stat tiles</div>
              <div>PSectionHeader — "My Highlights", "Season Stats" headings</div>
              <div>PVideoThumbnail — highlight video grid</div>
              <div>PSeeAllLink — "See all" navigation</div>
            </PropsBlock>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>name: string — full name, rendered uppercase split over 2 lines</div>
              <div>number: number — jersey number shown in position row</div>
              <div>position: string — e.g. "Guard", "Forward"</div>
              <div>teamName: string — team link label</div>
              <div>teamLogoUrl?: string — server-provided team logo (replaces PTeamLogo placeholder)</div>
              <div>accentColor: string — team accent color (team name, chevrons)</div>
              <div>photoUrl: string — circular athlete photo from server (via PPlayerPhoto)</div>
              <div>onBack?: () =&gt; void — back button handler</div>
              <div>onShare?: () =&gt; void — share button handler</div>
              <div>onTeamTap?: () =&gt; void — team name link handler</div>
            </PropsBlock>
          </Card>
        </>}

        {sec === "teampage" && <>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Team Page</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Full team profile page — 390px wide. Shows team logo, name, game counts, Follow button, social links, live games (horizontal scroll), and recent games list with "See all".</p>
          <Card title="Default" desc="Full page view 1:1 Figma">
            <div style={{ maxWidth: 390, overflow: "hidden" }}>
              <TeamPage />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>teamName: string — team name, supports \n for line breaks</div>
              <div>logoUrl: string — team logo image URL (circular 120px)</div>
              <div>accentColor: string — accent color for Follow button</div>
              <div>liveCount: number — number of live games</div>
              <div>upcomingCount: number — number of upcoming games</div>
              <div>totalCount: number — total games</div>
            </PropsBlock>
          </Card>
          <Card title="Reused components" desc="Components from existing DS used in TeamPage">
            <PropsBlock>
              <div>PSectionHeader — "Live" and "Recent Games" headings</div>
              <div>PBtn — "Follow" button (primary, lg)</div>
              <div>PLiveGameCard — live game cards in horizontal scroll</div>
              <div>PGameResultCard — recent game cards in vertical list</div>
              <div>PSeeAllLink — "See all" link at bottom</div>
              <div>PSocialLinks — social media icon row</div>
            </PropsBlock>
          </Card>
        </>}

        {sec === "infoalert" && <Card title="InfoAlert" desc="Light purple card with purple title and gray description text">
          <PInfoAlert title="Claimed Athletes Only" description="This content is only available for claimed athlete profiles." />
        </Card>}

        {sec === "paymentmodal" && <Card title="PaymentModal" desc="Subscription plan selection with expandable feature lists and CTA">
          <PPaymentModal />
        </Card>}

        {sec === "upgradebanner" && <Card title="UpgradeBanner" desc="Amber banner with lock icon, upgrade message, and action button">
          <PUpgradeBanner />
        </Card>}

        {sec === "videotypechips" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>VideoTypeChips</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Horizontal pill row — active (red, bold), inactive (gray, with lock icon for premium content)</p>

          <Card title="Interactive Preview" desc="Click chips to switch active state. Lock icons persist on active chip.">
            <PVideoTypeChips />
          </Card>

          <Card title="Chip States — default / hover / pressed / disabled" desc="Each chip type shown in all 4 interaction states">
            <PChipStatesPreview />
          </Card>

          <Card title="All Active States" desc="Each chip shown as the active selection">
            <PChipAllActivePreview />
          </Card>

          <Card title="Anatomy" desc="Token mapping for each state">
            <PropsBlock variant="muted">
              <div>Active chip: bg <code style={{ background: c.jerseyRed, color: c.white, padding: "1px 6px", borderRadius: T.radii.sm }}>#D0142C</code> · text <code style={{ background: c.gray50, padding: "1px 6px", borderRadius: T.radii.sm }}>#FFFFFF</code> · fontWeight 600</div>
              <div>Inactive chip: bg <code style={{ background: c.gray100, padding: "1px 6px", borderRadius: T.radii.sm }}>#EDEDED</code> · text <code style={{ background: c.gray50, padding: "1px 6px", borderRadius: T.radii.sm }}>#000000</code> · fontWeight 400</div>
              <div>Lock icon: bg <code style={{ background: c.premiumDark, color: c.premiumYellow, padding: "1px 6px", borderRadius: T.radii.sm }}>#362F2C</code> · 20×20 circle · LockSvg 8px</div>
              <div>Chip: height 40px · borderRadius 26px · padding 8px 12px · gap 12px between chips</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "videoactionbar" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>VideoActionBar</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Row below the video player — view count on the left, download / share / bookmark on the right</p>

          <Card title="VideoActionBar Preview" desc="Appears below the video thumbnail on the player page — click bookmark to toggle" code={C.videoActionBar} codeTitle="VideoActionBar.vue">
            <div style={{ maxWidth: 398 }}>
              <PVideoActionBar views={bmk ? "1,240 views" : "1 view"} bookmarked={bmk} onBookmark={() => setBmk(!bmk)} />
            </div>
          </Card>

          <Card title="Icon Button States — default / hover / pressed / disabled">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.lg2 }}>
              {/* Default variant */}
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>default</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.sm }}>
                  {[
                    { label: "default", state: "default" },
                    { label: "hover", state: "hover" },
                    { label: "pressed", state: "active" },
                    { label: "disabled", state: "disabled" },
                  ].map(({ label, state }) => <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs2 }}>
                    <PVideoActionIconBtn icon={Download} _forceState={state} disabled={state === "disabled"} ariaLabel="Download" />
                    <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>{label}</span>
                  </div>)}
                </div>
              </div>
              {/* Active variant (bookmarked) */}
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>active (bookmarked)</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.sm }}>
                  {[
                    { label: "default", state: "default" },
                    { label: "hover", state: "hover" },
                    { label: "pressed", state: "active" },
                    { label: "disabled", state: "disabled" },
                  ].map(({ label, state }) => <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs2 }}>
                    <PVideoActionIconBtn icon={Bookmark} active={true} _forceState={state} disabled={state === "disabled"} isBookmark ariaLabel={true ? "Remove bookmark" : "Add bookmark"} />
                    <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>{label}</span>
                  </div>)}
                </div>
              </div>
            </div>
          </Card>

          <Card title="Bookmarked vs Default" desc="Click the bookmark icon to toggle — icon pops and fills blue on bookmark, reverses on un-bookmark">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.md }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>interactive — click bookmark to toggle {bmk ? <span style={{ color: c.primary, fontWeight: T.typography.weights.semibold}}>(bookmarked)</span> : "(not bookmarked)"}</div>
                <PVideoActionBar views={bmk ? "1,240 views" : "1 view"} bookmarked={bmk} onBookmark={() => setBmk(!bmk)} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>disabled — all buttons disabled</div>
                <PVideoActionBar views="0 views" disabled={true} />
              </div>
            </div>
          </Card>

          <Card title="Props">
            <PropsBlock>
              <div>views: string — dynamic, changes per page visit (e.g. "1 view", "1,240 views")</div>
              <div>bookmarked: boolean — toggles bookmark icon to active (blue) state</div>
              <div>disabled: boolean — disables all action buttons</div>
              <div>@download — emitted on download tap</div>
              <div>@share — emitted on share tap (opens ShareCurtain)</div>
              <div>@bookmark — emitted on bookmark tap</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "sharecurtain" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>ShareCurtain</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Bottom sheet with 6 share channels — triggered from video player share icon</p>

          <Card title="Share Curtain Preview" desc="Bottom sheet with 6 social share channels, backdrop overlay, and Cancel button" code={C.shareCurtain} codeTitle="ShareCurtain.vue">
            <PShareCurtainStatic />
          </Card>

          <Card title="Props">
            <PropsBlock variant="muted">
              <div>open: boolean — controls visibility</div>
              <div>onClose: () =&gt; void — called on backdrop click or Cancel</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "brandhero" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>BrandHero</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Auth screen hero — gradient background (team primary → 30% darker) with centered logo. White-label ready.</p>

          <Card title="Default — Pixellot" code={C.brandHero} codeTitle="BrandHero.vue">
            <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
              <PBrandHero />
            </div>
          </Card>

          <Card title="Custom Team Colors" desc="Pass any primaryColor to match client branding. Logo slot can be overridden.">
            <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>primaryColor="#D0142C" (Maccabi red)</div>
                <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
                  <PBrandHero primaryColor="#D0142C" height={340} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>primaryColor="#1A6B3C" (Azteca green)</div>
                <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
                  <PBrandHero primaryColor="#1A6B3C" height={340} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>primaryColor="#E7A610" (Premium amber)</div>
                <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
                  <PBrandHero primaryColor="#E7A610" height={340} />
                </div>
              </div>
            </div>
          </Card>

          <Card title="Anatomy">
            <PropsBlock>
              <div>Height: 340px (default) — ~40% of 390px-wide viewport</div>
              <div>Background: linear-gradient(180deg, primaryColor 0%, darkerColor 100%)</div>
              <div>darkerColor: primaryColor channels × 0.7 (30% darker)</div>
              <div>Bottom corners: borderRadius 0 0 32px 32px</div>
              <div>Logo: centered, default PixellotLogo at 80px</div>
              <div>Slot: override with any team/client logo via {'<slot>'}</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "adbanner" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AdBanner</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Full-width ad banner carousel with swipeable pagination dots. Displayed at top of the home/Following page.</p>
          <Card title="Banner Carousel" desc="Two slides with pagination dots — drag/swipe to change slides" code={C.adBanner} codeTitle="AdBanner.vue">
            <div style={{ maxWidth: 398 }}><PAdBanner active={0} /></div>
            <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.sm }}>Drag left/right to swipe between slides. 40px threshold triggers navigation.</div>
          </Card>
          <Card title="Pagination Dots" desc="Active dot: white/solid; Inactive: white/50% opacity">
            <div style={{ display: "flex", gap: T.spacing.lg2, alignItems: "center" }}>
              <div style={{ display: "flex", gap: T.spacing.sm, background: c.gray100, padding: "12px 20px", borderRadius: T.radii.thumb }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.white }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
              </div>
              <span style={{ fontSize: T.typography.sizes.caption, color: c.gray400 }}>Dots on dark background</span>
            </div>
          </Card>
        </div>}

        {sec === "notificationcenter" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>NotificationCenter</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Dropdown panel triggered from the bell icon in the top bar. Shows player highlight notifications with jersey avatars.</p>
          <Card title="Bell Icon with Badge" desc="Notification bell with red count badge" code={C.notificationCenter} codeTitle="NotificationCenter.vue">
            <div style={{ display: "flex", gap: T.spacing.xxl, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}><PBellIcon count={0} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs2 }}>No notifications</div></div>
              <div style={{ textAlign: "center" }}><PBellIcon count={1} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs2 }}>1 notification</div></div>
              <div style={{ textAlign: "center" }}><PBellIcon count={3} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs2 }}>3 notifications</div></div>
              <div style={{ textAlign: "center" }}><PBellIcon count={99} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs2 }}>99 notifications</div></div>
            </div>
          </Card>
          <Card title="Notification Center Dropdown" desc="Panel with jersey avatar items and Clear all action">
            <PNotificationCenter />
          </Card>
          <Card title="Single Notification Item" desc="Jersey avatar + notification text">
            <div style={{ maxWidth: 380 }}><PNotificationItem jerseyNumber={11} /></div>
          </Card>
        </div>}

        {sec === "profilesidebar" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>SideMenu — Profile variant</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Right-slide drawer triggered from hamburger icon in top bar. Uses PSideMenu variant="profile" — same component as the org menu, with user avatar header, league accordions, Following card (teams &amp; players), and profile-specific menu items.</p>
          <Card title="Profile variant (Full Preview)" desc="Dark backdrop + right-side panel with user info, claimed player, and menu" code={C.profileSidebar} codeTitle="ProfileSidebar.vue">
            <PSideMenu variant="profile" />
          </Card>
          <Card title="User Avatar" desc="Gray circle with user initials — used in top bar and sidebar header">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <PAvatar initials="BR" size={40} />
              <PAvatar initials="WT" size={36} />
              <PAvatar initials="JD" size={28} />
              <span style={{ fontSize: T.typography.sizes.caption, color: c.gray400 }}>Sizes: 40px (sidebar), 36px (top bar), 28px (compact)</span>
            </div>
          </Card>
          <Card title="Claimed Player Card" desc="Player info card shown at top of profile sidebar">
            <div style={{ maxWidth: 300 }}><PClaimedPlayerCard /></div>
          </Card>
          <Card title="Menu List Items" desc="Navigation items with chevron, badge count, link variant, and danger variant">
            <div style={{ maxWidth: 300 }}>
              <PMenuListItem label="Following" badge={14} />
              <PMenuListItem label="Language" />
              <PMenuListItem label="My Account" />
              <PMenuListItem label="Claim Player" variant="link" />
            </div>
          </Card>
          <Card title="Menu List Item — Interactive States" desc="Hover highlights row; pressed darkens background">
            <div style={{ maxWidth: 300 }}>
              {["default", "hover", "active"].map(s => <div key={s}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xxs, marginTop: T.spacing.sm }}>{s}</div>
                <PMenuListItem label="Following" badge={14} _forceState={s} />
              </div>)}
            </div>
          </Card>
        </div>}

        {sec === "teamlogo" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PTeamLogo</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Team logo circle with deterministic color placeholder fallback. When logoUrl is provided it renders the image; otherwise generates a colored initial from the team name hash.</p>
          <Card title="Placeholder (no logo)" desc="Deterministic color + initial from team name hash">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={40} name="Maccabi" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>Maccabi</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={40} name="Hapoel" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>Hapoel</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={40} name="Ironi" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>Ironi</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={40} name="Bnei Herzliya" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>Bnei Herzliya</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={40} name="Elitzur" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>Elitzur</span>
              </div>
            </div>
          </Card>
          <Card title="With logo URL" desc="Renders server-provided team logo">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <PTeamLogo size={40} name="Riverside" logoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">RM</text></svg>')}`} />
              <PTeamLogo size={40} name="Logan" logoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="#116DFF"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">LT</text></svg>')}`} />
            </div>
          </Card>
          <Card title="Sizes" desc="size prop controls diameter">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={20} name="Small" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>20px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={28} name="Default" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>28px (default)</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={40} name="Medium" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>40px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PTeamLogo size={56} name="Large" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>56px</span>
              </div>
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>size?: number — diameter in pixels (default 28)</div>
              <div>name?: string — team name (used for placeholder initial + color hash)</div>
              <div>logoUrl?: string — URL of team logo image</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "avatar" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PAvatar</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Circular avatar showing user initials on a gray background. Used in profile sections and headers.</p>
          <Card title="Default" desc="Initials on gray500 circle">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <PAvatar initials="BR" size={40} />
              <PAvatar initials="YL" size={40} />
              <PAvatar initials="JD" size={40} />
            </div>
          </Card>
          <Card title="Sizes" desc="size prop controls diameter">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PAvatar initials="SM" size={24} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>24px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PAvatar initials="MD" size={40} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>40px (default)</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PAvatar initials="LG" size={56} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>56px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PAvatar initials="XL" size={72} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>72px</span>
              </div>
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>initials?: string — 1–2 letter initials to display (default "BR")</div>
              <div>size?: number — diameter in pixels (default 40)</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "playerphoto" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PPlayerPhoto</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Circular player photo with gray User-silhouette placeholder fallback. When photoUrl is provided and loads successfully, it renders the photo; otherwise shows the placeholder.</p>
          <Card title="Placeholder (no photo)" desc="Gray circle with User silhouette icon">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerPhoto size={36} name="J. Davis" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>36px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerPhoto size={48} name="B. Rogers" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>48px (default)</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerPhoto size={64} name="M. Chen" />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>64px</span>
              </div>
            </div>
          </Card>
          <Card title="With photo URL" desc="Renders server-provided player photo">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <PPlayerPhoto size={48} name="Player" photoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#8B5CF6"/><text x="50%" y="54%" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle">MC</text></svg>')}`} />
              <PPlayerPhoto size={48} name="Player" photoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle">JR</text></svg>')}`} />
            </div>
          </Card>
          <Card title="Broken URL fallback" desc="Falls back to placeholder when image fails to load">
            <PPlayerPhoto size={48} name="Error" photoUrl="https://broken-url.invalid/photo.jpg" />
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>size?: number — diameter in pixels (default 48)</div>
              <div>name?: string — player name (for alt text)</div>
              <div>photoUrl?: string — URL of player photo image</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "playernumberbadge" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PlayerNumberBadge</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Colored circle displaying a player's jersey number. When a photo URL is provided from the server it renders the player photo instead. Used in MyFollowingList player rows and anywhere a player avatar is needed.</p>
          <Card title="Default (team color)" desc="Primary-colored circle with jersey number">
            <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
              <PPlayerNumberBadge number={1} />
              <PPlayerNumberBadge number={23} />
              <PPlayerNumberBadge number={7} />
            </div>
          </Card>
          <Card title="Custom team colors" desc="Each team has a different brand color">
            <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
              <PPlayerNumberBadge number={10} teamColor="#D0142C" />
              <PPlayerNumberBadge number={5} teamColor="#116DFF" />
              <PPlayerNumberBadge number={33} teamColor="#22C55E" />
              <PPlayerNumberBadge number={8} teamColor="#E7A610" />
              <PPlayerNumberBadge number={12} teamColor="#8B5CF6" />
            </div>
          </Card>
          <Card title="Light team colors" desc="Text auto-switches to dark on light backgrounds">
            <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
              <PPlayerNumberBadge number={4} teamColor="#FDE68A" />
              <PPlayerNumberBadge number={99} teamColor="#BBF7D0" />
              <PPlayerNumberBadge number={11} teamColor="#E0F2FE" />
            </div>
          </Card>
          <Card title="Sizes" desc="size prop controls diameter">
            <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
              <PPlayerNumberBadge number={7} size={28} teamColor="#D0142C" />
              <PPlayerNumberBadge number={7} size={40} teamColor="#D0142C" />
              <PPlayerNumberBadge number={7} size={56} teamColor="#D0142C" />
            </div>
          </Card>
          <Card title="With photo URL" desc="photoUrl replaces the number circle with a server image. Falls back to number circle on error.">
            <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
              <PPlayerNumberBadge number={23} size={40} photoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#116DFF"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">MC</text></svg>')}`} />
              <PPlayerNumberBadge number={10} size={40} photoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">JR</text></svg>')}`} />
            </div>
          </Card>
          <Card title="Broken URL fallback" desc="When photoUrl fails to load, gracefully falls back to the number circle placeholder">
            <div style={{ display: "flex", gap: T.spacing.md, alignItems: "center" }}>
              <PPlayerNumberBadge number={5} size={40} teamColor="#8B5CF6" photoUrl="https://broken-url.invalid/photo.jpg" />
              <PPlayerNumberBadge number={99} size={40} teamColor="#22C55E" photoUrl="https://broken-url.invalid/photo2.jpg" />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>number: number — jersey number displayed in the circle</div>
              <div>size?: number — diameter in px (default 40)</div>
              <div>teamColor?: string — background color (default primary). Text auto-adjusts for contrast</div>
              <div>photoUrl?: string — server-provided player photo. When set, replaces the number circle</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "bellicon" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PBellIcon</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Bell icon with optional notification count badge. When count is 0 or omitted, no badge is shown. Used in AppHeader.</p>
          <Card title="States" desc="No badge vs. badge with count — fixed 24px, used in AppHeader">
            <div style={{ display: "flex", gap: T.spacing.xl, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PBellIcon />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>count=0 (no badge)</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PBellIcon count={3} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>count=3</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PBellIcon count={99} />
                <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>count=99</span>
              </div>
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>count?: number — notification count, 0 hides badge (default 0)</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "sectionheader" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PSectionHeader</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Section heading with optional "See all" link button. Used at the top of content sections on the homepage and team pages.</p>
          <Card title="Without See All" desc="Title only — no trailing action">
            <PSectionHeader title="Latest Videos" />
          </Card>
          <Card title="With See All" desc="seeAll={true} shows a trailing link button">
            <PSectionHeader title="Latest Videos" seeAll onClick={() => {}} />
          </Card>
          <Card title="Custom title size" desc="titleSize prop overrides default base (16px)">
            <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.md }}>
              <PSectionHeader title="Small Title" titleSize={T.typography.sizes.xs} seeAll />
              <PSectionHeader title="Default Title" seeAll />
              <PSectionHeader title="Large Title" titleSize={T.typography.sizes.xl} seeAll />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>title: string — section heading text (required)</div>
              <div>seeAll?: boolean — show trailing "See all &gt;" link (default false)</div>
              <div>onClick?: () =&gt; void — handler for See all click</div>
              <div>titleSize?: number — override font size</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "seealllink" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PSeeAllLink</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Standalone "See all" link with chevron. Used below grid sections to navigate to full lists.</p>
          <Card title="Default" desc="Blue link text with right chevron">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PSeeAllLink onClick={() => {}} />
            </div>
          </Card>
          <Card title="Custom label" desc="label prop overrides default text">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.md }}>
              <PSeeAllLink label="View all games" onClick={() => {}} />
              <PSeeAllLink label="More highlights" onClick={() => {}} />
              <PSeeAllLink label="Browse teams" onClick={() => {}} />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>label?: string — link text (default "See all")</div>
              <div>onClick?: () =&gt; void — click handler</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "followingrow" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>FollowingRow</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Reusable list-item row with avatar, title, optional subtitle, and trailing action slot. Used in MyFollowingList for both team and player rows. Accepts any avatar component (PTeamLogo, PPlayerNumberBadge, PPlayerPhoto) and any action element (PBtn, icon, etc.).</p>
          <Card title="Team row" desc="PTeamLogo avatar + division subtitle + Unfollow action">
            <div style={{ maxWidth: 390 }}>
              <PFollowingRow
                avatar={<PTeamLogo size={40} name="Riverside Mustangs" />}
                title="Riverside Mustangs"
                subtitle="PBA Varsity Division"
                action={<PBtn variant="social" size="sm" fullWidth={false} style={{ color: c.errorRed }}>Unfollow</PBtn>}
              />
            </div>
          </Card>
          <Card title="Player row" desc="PPlayerNumberBadge avatar + player info + Unfollow action">
            <div style={{ maxWidth: 390 }}>
              <PFollowingRow
                avatar={<PPlayerNumberBadge number={1} teamColor={c.primary} />}
                title="#1 — Marcus Caldwell"
                action={<PBtn variant="social" size="sm" fullWidth={false} style={{ color: c.errorRed }}>Unfollow</PBtn>}
              />
            </div>
          </Card>
          <Card title="With photo avatars" desc="Server-provided images replace placeholders">
            <div style={{ maxWidth: 390 }}>
              <PFollowingRow
                avatar={<PTeamLogo size={40} name="Riverside" logoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="8" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">RM</text></svg>')}`} />}
                title="Riverside Mustangs"
                subtitle="PBA Varsity Division"
                action={<PBtn variant="social" size="sm" fullWidth={false} style={{ color: c.errorRed }}>Unfollow</PBtn>}
              />
              <PFollowingRow
                avatar={<PPlayerNumberBadge number={23} photoUrl={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#116DFF"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">MC</text></svg>')}`} />}
                title="#23 — Marcus Caldwell"
                action={<PBtn variant="social" size="sm" fullWidth={false} style={{ color: c.errorRed }}>Unfollow</PBtn>}
              />
            </div>
          </Card>
          <Card title="No border" desc="borderBottom={false} for the last item in a list">
            <div style={{ maxWidth: 390 }}>
              <PFollowingRow avatar={<PTeamLogo size={40} name="Eagles" />} title="Springfield Eagles" subtitle="Division B" borderBottom={false} />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>avatar: ReactNode — any avatar component (PTeamLogo, PPlayerNumberBadge, PPlayerPhoto)</div>
              <div>title: string — primary text (team name or player info)</div>
              <div>subtitle?: string — secondary text (division, position, etc.)</div>
              <div>action?: ReactNode — trailing action slot (PBtn, icon, custom element)</div>
              <div>borderBottom?: boolean — show bottom border separator (default true)</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "searchbar" && <SearchBarShowcase />}

        {sec === "backbar" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>BackBar</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Reusable "← Back" navigation bar with optional share action. Used in PAppHeader (back variant) and AthleteProfileCard. Standardizes the back+share pattern across all sub-pages.</p>
          <Card title="Back only" desc="Default — just a back button, no share">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
              <PBackBar />
            </div>
          </Card>
          <Card title="Back + Share" desc="showShare={true} — share icon appears on the right">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
              <PBackBar showShare />
            </div>
          </Card>
          <Card title="Custom label" desc="label prop changes the back button text">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
              <PBackBar label="All Games" showShare />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>label?: string — back button text (default "Back")</div>
              <div>showShare?: boolean — show Share2 icon on the right (default false)</div>
              <div>onBack?: () =&gt; void — back button handler</div>
              <div>onShare?: () =&gt; void — share button handler</div>
              <div>padding?: string — CSS padding (default "12px 16px")</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "accordion" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Accordion</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Reusable collapsible section component. Click a header to expand/collapse its content. Used by CompetitionFollowList and SideMenu internally. Supports single or multiple open sections.</p>
          <Card title="Single open (default)" desc="Only one section open at a time — clicking another closes the previous">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden", padding: `0 ${T.spacing.lg}px` }}>
              <PAccordion items={[
                { id: "faq1", header: <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>What is Pixellot?</span>, content: <p style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray500, margin: 0 }}>Pixellot provides AI-powered sports video production and streaming for teams at every level.</p> },
                { id: "faq2", header: <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>How do I follow a team?</span>, content: <p style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray500, margin: 0 }}>Tap any team card and select "Follow" to add it to your feed.</p> },
                { id: "faq3", header: <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>Can I watch on mobile?</span>, content: <p style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray500, margin: 0 }}>Yes — the OTT app works on iOS, Android, and desktop browsers.</p> },
              ]} />
            </div>
          </Card>
          <Card title="Multiple open" desc="allowMultiple={true} — several sections can be open at once">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden", padding: `0 ${T.spacing.lg}px` }}>
              <PAccordion allowMultiple={true} items={[
                { id: "s1", header: <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>Section A</span>, content: <p style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray500, margin: 0 }}>Content for section A. This stays open when you open B or C.</p> },
                { id: "s2", header: <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>Section B</span>, content: <p style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray500, margin: 0 }}>Content for section B.</p> },
                { id: "s3", header: <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>Section C</span>, content: <p style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray500, margin: 0 }}>Content for section C.</p> },
              ]} />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>items: PAccordionItem[] — array of {"{"} id, header: ReactNode, content: ReactNode {"}"}</div>
              <div>allowMultiple?: boolean — allow multiple sections open at once (default false)</div>
              <div>defaultOpen?: string — id of section to open by default</div>
              <div>headerStyle?: CSSProperties — extra styles for header buttons</div>
              <div>activeHeaderStyle?: CSSProperties — extra styles applied to header when section is expanded (e.g., highlight bg)</div>
              <div>contentStyle?: CSSProperties — extra styles for content wrappers</div>
              <div>chevronSize?: number — size of the chevron icon (default 18)</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "appheader" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AppHeader</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Top app bar used across all pages. The main header (logo + org name + icons) is always present. On sub-pages, variant "back" adds a "‹ Back" sub-bar below the header with optional share icon. Logo comes from server — changes per client.</p>
          <Card title="Home variant" desc="Default header — logoUrl replaces placeholder at runtime">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
              <PAppHeader variant="home" orgName="PBA" notifCount={1} />
            </div>
          </Card>
          <Card title="Back variant" desc="Sub-page: main header stays, ‹ Back sub-bar + share icon appear below">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
              <PAppHeader variant="back" pageTitle="All Games" notifCount={0} showShare={true} />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>variant: "home" | "back" — home shows header only, back adds ‹ Back sub-bar below header</div>
              <div>orgName: string — organization display name (always shown in header)</div>
              <div>logoUrl?: string — server-provided logo image URL (fallback: colored square)</div>
              <div>pageTitle: string — currently unused, reserved for future breadcrumb label</div>
              <div>showSearch / showNotifications / showMenu: boolean — toggle right-side icons</div>
              <div>showShare: boolean — show share icon on the back sub-bar (default false)</div>
              <div>notifCount: number — red badge on notification bell (0 = no badge)</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "bottomtabbar" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>BottomTabBar</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Persistent bottom navigation bar present on all main pages. 4 tabs: Games (trophy), Saved (bookmark), Following (heart), Shop (bag). Active tab shows filled icon + bold label in accent color.</p>
          <Card title="Interactive — click to switch tabs" desc="Full-width bottom tab bar with active state">
            <div style={{ maxWidth: 390, border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
              <PBottomTabBar />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>tabs?: BottomTab[] — array of {"{"} id, label, icon {"}"} (defaults to Games/Saved/Following/Shop)</div>
              <div>active?: string — currently active tab id</div>
              <div>onSelect?: (id) =&gt; void — callback when tab is tapped</div>
              <div>accentColor?: string — override active tab color (default: primary)</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "sidemenu" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>SideMenu</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Sales-style hamburger menu that slides from the right. Shows org logo + name, expandable Divisions with sub-items, nav items with icons, Language selector, and Log Out. Logo comes from server per client.</p>
          <Card title="Side Menu (Full Preview)" desc="Dark backdrop + right-side panel with expandable divisions, nav items, logout">
            <PSideMenu />
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>orgName: string — org display name (e.g., "PBA")</div>
              <div>orgSubtitle?: string — subtitle (e.g., "Basketball Association")</div>
              <div>logoUrl?: string — server-provided org logo URL</div>
              <div>items?: SideMenuItem[] — menu items with optional subItems for accordion</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "teamfollowcard" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>TeamFollowCard</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Team card from the "Manage following" page. 3-column grid layout with centered logo, team name (2-line clamp), and "Following"/"Follow" status text. Matches Figma spec: W:114 Fill, border-radius 12.</p>

          <Card title="Card states" desc="Click any card to toggle follow state — Following (gray text) vs Follow (blue text)">
            <PTeamFollowCardPreview />
          </Card>

          <Card title="Manage Following — full layout" desc="Sectioned flex rows with 'Following' + category headers, matching Figma Manage Following page (gap:8 between cards, gap:24 between sections)">
            <div style={{ maxWidth: 358 }}>
              <PTeamFollowGrid />
            </div>
          </Card>

          <Card title="Props — PTeamFollowCard">
            <PropsBlock>
              <div>teamName: string — team display name (2-line clamp)</div>
              <div>followed: boolean — true shows "Following" (gray), false shows "Follow" (blue)</div>
              <div>onClick: () =&gt; void — card tap handler</div>
            </PropsBlock>
          </Card>

          <Card title="Props — PTeamFollowGrid">
            <PropsBlock>
              <div>sections: {"{"} title, teams: {"{"} name, followed {"}"}[] {"}"}[] — grouped team sections</div>
              <div>onClick: (name) =&gt; void — callback when a card is tapped</div>
              <div style={{ marginTop: T.spacing.sm, fontSize: T.typography.sizes.xxs, color: c.gray400 }}>Figma: flex row per section, gap:8px between cards, gap:24px between sections</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "competitionfollowlist" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>CompetitionFollowList</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Onboarding flow component: collapsible list of competitions/leagues, each expanding to a 3-column team grid with Follow/Following toggle. Search bar at top, Continue button with follow count at bottom.</p>
          <Card title="Interactive — expand a league and follow teams" desc="Click a league to expand its team grid, click teams to follow/unfollow">
            <PCompetitionFollowList />
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>competitions?: Competition[] — list of {"{"} name, teamCount, teams: {"{"} name, followed {"}"}[] {"}"}</div>
              <div>onToggleFollow?: (compIdx, teamIdx) =&gt; void — callback when team is toggled</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "myfollowinglist" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>MyFollowingList</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Manage Following page: shows followed teams and players with Unfollow buttons and "+ Add" controls. Teams show logo + name + division. Players show jersey number circle + name.</p>
          <Card title="Interactive — click Unfollow to remove" desc="Teams and Players sections with add/unfollow controls">
            <PMyFollowingList
              teams={[
                { name: "Riverside Mustangs", division: "PBA Varsity Division" },
                { name: "Valley Vista Cougars", division: "PBA Regional Division" },
              ]}
              players={[
                { name: "Marcus Caldwell", number: 1, teamColor: "#1e3a5f" },
                { name: "Jayden Smith", number: 11, teamColor: "#1e3a5f" },
              ]}
            />
          </Card>
        </div>}

        {sec === "followedplayers" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Home — Following Strip</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>
            Single horizontal scrollable row at the <strong>top of the Home page</strong>, above the banner. Shows teams and players the user follows — all mixed in one row. Team chips show the team logo circle. Player chips show a photo circle (claimed) or a colored circle with jersey number (unclaimed). Tapping navigates to TeamPage or PlayerProfile.
          </p>
          <Card title="PHomeFollowingSection" desc="Mixed team + player circular chips — 2 teams, 1 claimed player (photo), 2 unclaimed players (number)">
            <div style={{ background: c.white, borderRadius: T.radii.card, overflow: "hidden" }}>
              <PHomeFollowingSection />
            </div>
          </Card>
          <Card title="Teams only" desc="Only followed teams, no players yet">
            <div style={{ background: c.white, borderRadius: T.radii.card, overflow: "hidden" }}>
              <PHomeFollowingSection items={[
                { type: "team", name: "S.D. Spartans Men" },
                { type: "team", name: "Maccabi Kiryat Gat" },
              ]} />
            </div>
          </Card>
          <Card title="Props — PHomeFollowingSection">
            <PropsBlock>
              <div>items: HomeFollowingItem[] — ordered list of teams + players to display</div>
              <div>{"  { type: 'team', name: string, logoUrl?: string }"} — circular logo from server (img); placeholder shown when no URL</div>
              <div>{"  { type: 'player', number, teamColor?, photoUrl?, claimed? }"} — circle chip</div>
              <div>onTeamClick: (name) =&gt; void — navigate to TeamPage</div>
              <div>onPlayerClick: (number) =&gt; void — navigate to PlayerProfile</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "footer" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Footer</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Page footer with org logo, navigation links (About us, FAQ, Privacy), social media icons (Facebook, X, Instagram, YouTube, TikTok, Email), copyright text, and "Powered by Pixellot" branding.</p>
          <Card title="Default Footer" desc="Full footer with all sections">
            <div style={{ maxWidth: 390, borderRadius: T.radii.badge, overflow: "hidden", border: `1px solid ${c.gray200}` }}>
              <PFooter />
            </div>
          </Card>
          <Card title="Custom org + no Powered By" desc="Footer with custom org name and hidden branding">
            <div style={{ maxWidth: 390, borderRadius: T.radii.badge, overflow: "hidden", border: `1px solid ${c.gray200}` }}>
              <PFooter orgName="Spartans Athletics" showPoweredBy={false} links={[{ label: "Home" }, { label: "Teams" }, { label: "Contact" }]} />
            </div>
          </Card>
          <Card title="Props">
            <PropsBlock>
              <div>orgName: string — org name for copyright ("PBA")</div>
              <div>logoUrl?: string — server-provided logo URL</div>
              <div>links?: {"{"} label, href? {"}"}[] — nav link items</div>
              <div>showPoweredBy: boolean (true) — show "Powered by Pixellot" line</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "jersey" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>JerseyItem</h2>
          <Card title="Jersey with number" desc="SVG basketball jersey — tap to select. Color is team-configurable. Selected shows green stroke and checkmark." code={C.jerseyItem} codeTitle="JerseyItem.vue">
            <div style={{ display: "flex", gap: T.spacing.lg2, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><PJersey number={7} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Default (red)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={23} selected onClick={() => {}} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Selected (green stroke)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={10} color="#116DFF" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Custom (blue)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={5} color="#E8332B" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Custom (accent)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={33} color="#1A3B8A" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Custom (navy)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={11} color="#FFFFFF" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>White (auto dark text)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={8} color="#FFE000" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Yellow (auto dark text)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={3} color="#90EE90" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Light green (auto dark text)</div></div>
            </div>
          </Card>
        </div>}

        {sec === "jerseygrid" && <Card title="JerseyGrid" desc="Flex-wrap grid of selectable jerseys with 24px gap, space-between" code={C.jerseyGrid} codeTitle="JerseyGrid.vue">
          <div style={{ maxWidth: 398, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: T.spacing.xl, padding: `0 ${T.spacing.xs}px` }}>
            {[1,2,3,4,5,6,7,8].map(n => <PJersey key={n} number={n} selected={selJerseys.includes(n)} onClick={() => toggleJ(n)} />)}
          </div>
          <div style={{ marginTop: T.spacing.md, fontSize: T.typography.sizes.caption, color: c.gray400 }}>Selected: [{selJerseys.join(", ")}] — click jerseys to toggle</div>
        </Card>}

        {sec === "auth" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>AuthPage (Live Preview)</h2>
          <PAuthPagePreview tab={tab} setTab={setTab} />
        </div>}

        {sec === "onboarding" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>PlayerSelectPage (Live Preview)</h2>
          <Card title="Page Code" code={C.onboardingPage} codeTitle="views/PlayerSelectPage.vue"><p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: 0 }}>Full onboarding page with jersey selection grid, "See All" expand, and sticky "Finish" footer.</p></Card>
          <POnboardingPreview selJerseys={selJerseys} toggleJ={toggleJ} />
        </div>}

        {sec === "emptystate" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>EmptyState</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Reusable empty state with icon, title, subtitle, and optional CTA. 12 built-in presets for every data-dependent section.</p>

          <Card title="Presets — with CTA" code={C.emptyState} codeTitle="EmptyState.vue">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.sm }}>
              {["noFollowing", "noPersonal", "noFollowedPlayers", "noTeamsFound", "noClaimedPlayer", "noSearchResults"].filter(k => EMPTY_PRESETS[k].cta).map(k => <div key={k} style={{ border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
                <div style={{ fontSize: T.typography.sizes.mini, color: c.gray400, padding: "6px 10px 0", fontFamily: "monospace" }}>preset="{k}"</div>
                <PEmptyState preset={k} />
              </div>)}
            </div>
          </Card>

          <Card title="Presets — no CTA">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.sm }}>
              {["noLiveGames", "noRecentGames", "noNotifications", "noHighlights", "noSavedVideos", "noPlayerStats"].map(k => <div key={k} style={{ border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
                <div style={{ fontSize: T.typography.sizes.mini, color: c.gray400, padding: "6px 10px 0", fontFamily: "monospace" }}>preset="{k}"</div>
                <PEmptyState preset={k} />
              </div>)}
            </div>
          </Card>

          <Card title="Where They Go" desc="Mapping of presets to app screens">
            <SpecBlock>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noLiveGames</code> → HomePage Live section</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noFollowing</code> → HomePage Following section</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noRecentGames</code> → HomePage Recent Games section</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noNotifications</code> → NotificationCenter dropdown</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noHighlights</code> → GameDetail highlights section</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noPersonal</code> → GameDetail personal highlights</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noPlayerStats</code> → GameDetail stats tab</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noFollowedPlayers</code> → GameDetail followed players</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noSavedVideos</code> → Profile Saved Videos</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noSearchResults</code> → Search results page</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noTeamsFound</code> → Onboarding team selection</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>noClaimedPlayer</code> → Profile sidebar claimed section</div>
            </SpecBlock>
          </Card>
        </div>}

        {sec === "errorstate" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>ErrorState</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>6 error variants — each with contextual title, subtitle, and appropriate CTA</p>

          <Card title="All Variants" code={C.errorState} codeTitle="ErrorState.vue">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.sm }}>
              {["generic", "network", "timeout", "video", "data", "auth"].map(v => <div key={v} style={{ border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
                <div style={{ fontSize: T.typography.sizes.mini, color: c.gray400, padding: "6px 10px 0", fontFamily: "monospace" }}>variant="{v}"</div>
                <PErrorState variant={v} />
              </div>)}
            </div>
          </Card>

          <Card title="Where They Go" desc="Mapping of error variants to app contexts">
            <SpecBlock>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>generic</code> → Fallback for any unhandled error</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>network</code> → API calls fail due to connectivity</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>timeout</code> → Server response too slow</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>video</code> → Video player load failure / still processing</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>data</code> → Stats, highlights, or game data failed to load</div>
              <div><code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm, fontSize: T.typography.sizes.xxs}}>auth</code> → Session expired, token invalid</div>
            </SpecBlock>
          </Card>
        </div>}

        {sec === "offlinebanner" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>OfflineBanner</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Persistent top banner shown when the device loses network connectivity</p>

          <Card title="Preview" code={C.offlineBanner} codeTitle="OfflineBanner.vue">
            <div style={{ maxWidth: 398 }}>
              <POfflineBanner />
            </div>
          </Card>

          <Card title="Anatomy">
            <PropsBlock variant="muted">
              <div>Background: <code style={{ background: c.errorRed, color: c.white, padding: "1px 6px", borderRadius: T.radii.sm, opacity: 0.15 }}>#FEF2F2</code> (red-50)</div>
              <div>Border: <code style={{ background: c.gray50, padding: "1px 6px", borderRadius: T.radii.sm }}>rgba(239,68,68,0.15)</code></div>
              <div>Red dot: 8×8 circle <code style={{ background: c.errorRed, color: c.white, padding: "1px 6px", borderRadius: T.radii.sm }}>#EF4444</code></div>
              <div>Title: 14px / 600 / {c.darkText}</div>
              <div>Subtitle: 12px / 400 / {c.gray500}</div>
              <div>Retry link: 13px / 600 / {c.errorRed}</div>
              <div>Placement: sticky top of any page, above content</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "skeletons" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>Skeletons & Loaders</h2>
          <p style={{ fontSize: T.typography.sizes.body2, color: c.gray400, margin: "0 0 16px" }}>Animated placeholder components for loading states — skeleton blocks, cards, inputs, and spinning loaders</p>

          <Card title="Skeleton Block — Various Sizes" code={C.skeletonBlock} codeTitle="SkeletonBlock.vue">
            <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.md, maxWidth: 398 }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>16px (default)</div>
                <PSkeletonBlock />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>20px</div>
                <PSkeletonBlock height={20} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>40px (button-sized)</div>
                <PSkeletonBlock height={T.sizes.buttonMd} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>46px (input-sized)</div>
                <PSkeletonBlock height={T.sizes.inputHeight} />
              </div>
            </div>
          </Card>

          <Card title="Skeleton Card" code={C.skeletonCard} codeTitle="SkeletonCard.vue">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.lg, maxWidth: 500 }}>
              <PSkeletonCard />
              <PSkeletonCard />
            </div>
          </Card>

          <Card title="Skeleton Input" code={C.skeletonInput} codeTitle="SkeletonInput.vue">
            <div style={{ maxWidth: 398 }}>
              <PSkeletonInput />
            </div>
          </Card>

          <Card title="Loading Spinner — 3 Sizes" code={C.loadingSpinner} codeTitle="LoadingSpinner.vue">
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.xl }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>sm</div>
                <PLoadingSpinner size={16} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>md</div>
                <PLoadingSpinner size={24} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>lg</div>
                <PLoadingSpinner size={32} />
              </div>
            </div>
          </Card>

          <Card title="Usage Guidelines">
            <ProseBlock>
              <div><strong>Skeleton Block:</strong> Use for text lines, headings, and flexible-sized content</div>
              <div style={{ marginTop: T.spacing.sm }}><strong>Skeleton Card:</strong> For card-based layouts like game cards or product cards with image + text</div>
              <div style={{ marginTop: T.spacing.sm }}><strong>Skeleton Input:</strong> Show when a form is loading — exactly 46px height matches PInput</div>
              <div style={{ marginTop: T.spacing.sm }}><strong>Loading Spinner:</strong> Central loading indicator — use sm in buttons, md for inline sections, lg for full-page loads</div>
            </ProseBlock>
          </Card>
        </div>}

        {sec === "homepage" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>HomePage (Following Tab)</h2>
          <Card title="Page Overview" desc="Main home feed with MainTopBar, MainTabs, live games, following section, and recent games">
            <ProseBlock>
              <div style={{ marginBottom: T.spacing.sm }}>Structure:</div>
              <ul style={{ margin: 0, paddingLeft: T.spacing.lg }}>
                <li>MainTopBar (Pixellot logo, search, notifications, user "BR" avatar)</li>
                <li>MainTabs (Following active, All Teams, Team Shop) — RED underline</li>
                <li>Hero banner carousel placeholder</li>
                <li>SectionHeader "Live" with "See all &gt;"</li>
                <li>Horizontal scroll of LiveGameCards</li>
                <li>SectionHeader "Following"</li>
                <li>SubTabs (Athletes | Teams) — BLUE underline</li>
                <li>FilterDropdown "All Teams"</li>
                <li>Jersey avatar circles for followed athletes</li>
                <li>SectionHeader "Recent Games"</li>
                <li>GameResultCards (vertical list)</li>
                <li>"See All &gt;" button</li>
              </ul>
            </ProseBlock>
          </Card>
        </div>}

        {sec === "gamedetailpage" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold, color: c.darkText, marginBottom: T.spacing.md2 }}>GameDetailPage</h2>
          <Card title="Page Overview" desc="Detailed game view with score, videos, stats, and player leaders">
            <ProseBlock>
              <div style={{ marginBottom: T.spacing.sm }}>Structure:</div>
              <ul style={{ margin: 0, paddingLeft: T.spacing.lg }}>
                <li>MainTopBar</li>
                <li>BackButton "← Back"</li>
                <li>ScoreCard (89 vs 77, Final, date, standings)</li>
                <li>VideoTypeChips row: Full Game (active/RED), Condensed Game, Game Highlights, with lock icons</li>
                <li>"Full Game" section — FreeBadge + VideoThumbnail</li>
                <li>"Condensed Game" section — PremiumBadge + VideoThumbnail</li>
                <li>"Game Highlights" section — PremiumBadge + horizontal VideoThumbnails</li>
                <li>"Personal Highlights" — ClaimedBadge + InfoAlert</li>
                <li>Team tabs (MainTabs style) showing teams</li>
                <li>"Followed Players" + locked VideoThumbnails (lock icon badge)</li>
                <li>"Other Players" + PremiumBadge + video thumbnails</li>
                <li>TeamStatsBar comparisons (Points, Rebounds, Assists)</li>
                <li>PlayerStatsTable (columns: Player, MIN, PTS, REB, AST)</li>
                <li>GameLeaders (team logos, leaders comparison)</li>
              </ul>
            </ProseBlock>
          </Card>
        </div>}
      </main>
    </div>
    );
  };

/* ═══════════════════════════════════════════════════════════════════
   ZONE 5 — MOUNT
   ThemeCtx provider · Root render · DOM mounting
   ═══════════════════════════════════════════════════════════════════ */


  const dc = useColors();

  return (
    <div style={{ position: "fixed", inset: 0, background: dc.white, color: dc.darkText, transition: "background 0.3s ease, color 0.3s ease", overflow: "auto" }}>
      {renderContent()}
    </div>
  );
}
