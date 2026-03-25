import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PTeamLogo, PPlayerNumberBadge, PAvatar, PBellIcon } from "./badges";
import { PBtn } from "./buttons";
import { PBackBar, PDivider } from "./layout";
import { FacebookOutlineIcon, XOutlineIcon, InstagramOutlineIcon, YouTubeOutlineIcon, TikTokOutlineIcon, EmailOutlineIcon } from "./cards";
import { PAccordion, PFollowingRow } from "./lists";

type BottomTab = { id: string; label: string; icon?: any };
type SideMenuItem = { label: string; icon?: string; subItems?: string[]; variant?: "default" | "danger" };
type FollowingTeam = { name: string; division?: string; logoUrl?: string };
type FollowingPlayer = { name: string; number: number; teamColor?: string };

type PBottomTabBarProps = { tabs?: BottomTab[]; active?: string; onSelect?: (id: string) => void; accentColor?: string };

function _TabIcon({ icon, active, color }: { icon: string; active: boolean; color: string }) {
  const s = 24;
  const sw = active ? 2 : 1.5;
  /* Icons matched to Sales prototype (zoomed pixel-reference) */
  if (icon === "games") return <svg width={s} height={s} viewBox="0 0 24 24" fill={active ? color : "none"} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7"/>
    <path d="M18 2H6v7a6 6 0 0012 0V2z"/><line x1="12" y1="15" x2="12" y2="19"/><line x1="9" y1="19" x2="15" y2="19"/></svg>;
  if (icon === "saved") return <Bookmark size={s} color={color} fill={active ? color : "none"} strokeWidth={sw} />;
  if (icon === "following") return <svg width={s} height={s} viewBox="0 0 24 24" fill={active ? color : "none"} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
  if (icon === "shop") {
    const bagFill = active ? color : "none";
    const smileStroke = active ? "#fff" : color;
    return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="13" rx="2" fill={bagFill}/><path d="M16 8V6a4 4 0 00-8 0v2"/>
      <path d="M9 14c1.5 1.5 4.5 1.5 6 0" stroke={smileStroke}/></svg>;
  }
  return null;

/* ── Bottom Tab Bar ── */
}

function PBottomTabBar({ tabs, active, onSelect, accentColor }: PBottomTabBarProps) {
  const c = useColors();
  const accent = accentColor || c.darkText;
  const defaultTabs: BottomTab[] = [
    { id: "games", label: "Games", icon: "games" },
    { id: "saved", label: "Saved", icon: "saved" },
    { id: "following", label: "Following", icon: "following" },
    { id: "shop", label: "Shop", icon: "shop" },
  ];
  const _tabs = tabs || defaultTabs;
  const [_active, _setActive] = useState(active || _tabs[0]?.id || "");
  const sel = active !== undefined ? active : _active;
  const handleSelect = (id: string) => { _setActive(id); onSelect?.(id); };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", background: c.white, borderTop: `1px solid ${c.gray100}`, padding: "8px 0 12px", width: "100%" }}>
      {_tabs.map(tab => {
        const isActive = sel === tab.id;
        return (
          <button key={tab.id} onClick={() => handleSelect(tab.id)} aria-label={tab.label} aria-pressed={isActive}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: "4px 16px", minWidth: 64 }}>
            <_TabIcon icon={tab.icon} active={isActive} color={isActive ? accent : c.gray400} />
            <span style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, fontWeight: isActive ? T.typography.weights.bold : T.typography.weights.regular, color: isActive ? accent : c.gray400 }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ════════════════════════════════
// APP HEADER (Top Bar)
// ════════════════════════════════


type PAppHeaderProps = {
  variant?: "home" | "back";
  orgName?: string;
  logoUrl?: string;
  pageTitle?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showMenu?: boolean;
  showShare?: boolean;
  notifCount?: number;
  onBack?: () => void;
  onSearch?: () => void;
  onNotifications?: () => void;
  onMenu?: () => void;
  onShare?: () => void;
};

/* ── App Header & Shell ── */

function PAppHeader({
  variant = "home",
  orgName = "PBA",
  logoUrl,
  pageTitle = "All Games",
  showSearch = true,
  showNotifications = true,
  showMenu = true,
  showShare = false,
  notifCount = 0,
  onBack, onSearch, onNotifications, onMenu, onShare,
}: PAppHeaderProps) {
  const c = useColors();
  const iconColor = c.gray500;

  /* ── Main header bar (always shown) ── */
  const headerBar = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${T.spacing.md}px ${T.spacing.lg}px`, background: c.white }}>
      {/* Left: logo + org name */}
      <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm2 }}>
        {logoUrl ? (
          <img src={logoUrl} alt={orgName} style={{ width: 36, height: 36, borderRadius: T.radii.thumb, objectFit: "cover" }} />
        ) : (
          <div style={{ width: 36, height: 36, borderRadius: T.radii.thumb, background: c.gray100, display: "flex", alignItems: "center", justifyContent: "center", border: `1px dashed ${c.gray300}` }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c.gray400} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          </div>
        )}
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>
          {orgName}
        </span>
      </div>
      {/* Right: action icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {showSearch && (
          <button onClick={onSearch} aria-label="Search" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <Search size={24} color={iconColor} />
          </button>
        )}
        {showNotifications && (
          <button onClick={onNotifications} aria-label="Notifications" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <PBellIcon count={notifCount} />
          </button>
        )}
        {showMenu && (
          <button onClick={onMenu} aria-label="Menu" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <Menu size={24} color={iconColor} />
          </button>
        )}
      </div>
    </div>
  );

  /* ── Back sub-bar (only on back variant) — uses DS PBackBar ── */
  const backBar = variant === "back" ? (
    <PBackBar showShare={showShare} onBack={onBack} onShare={onShare} padding="6px 16px 10px" />
  ) : null;

  return (
    <div style={{ background: c.white, borderBottom: `1px solid ${c.gray100}` }}>
      {headerBar}
      {backBar}
    </div>
  );
}

// ════════════════════════════════
// FOOTER
// ════════════════════════════════



type PFooterProps = { orgName?: string; logoUrl?: string; links?: { label: string; href?: string }[]; showPoweredBy?: boolean };

function PFooter({ orgName = "PBA", logoUrl, links, showPoweredBy = true }: PFooterProps) {
  const c = useColors();
  const _links = links || [{ label: "About us" }, { label: "FAQ" }, { label: "Privacy" }];
  const iconCol = c.gray500;
  const iS = 20;

  return (
    <footer role="contentinfo" style={{ background: c.gray50, padding: "32px 24px 24px", borderTop: `1px solid ${c.gray200}` }}>
      {/* Logo + nav links */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: T.spacing.xl, marginBottom: T.spacing.xl }}>
        {logoUrl ? (
          <img src={logoUrl} alt={orgName} style={{ width: 28, height: 28, borderRadius: T.radii.xs, objectFit: "contain" }} />
        ) : (
          <div style={{ width: 28, height: 28, borderRadius: T.radii.xs, background: c.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="1" y="1" width="16" height="16" rx="3" fill="white" opacity="0.9"/><rect x="4" y="4" width="10" height="10" rx="2" fill={c.primary}/></svg>
          </div>
        )}
        {_links.map((l, i) => (
          <span key={i} style={{ fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: c.darkText, cursor: "pointer" }}>{l.label}</span>
        ))}
      </div>
      {/* Social icons row */}
      <div style={{ display: "flex", gap: T.spacing.lg2, alignItems: "center", justifyContent: "center", marginBottom: T.spacing.lg2 }}>
        <FacebookOutlineIcon size={iS} color={iconCol} />
        <XOutlineIcon size={iS} color={iconCol} />
        <InstagramOutlineIcon size={iS} color={iconCol} />
        <YouTubeOutlineIcon size={iS} color={iconCol} />
        <TikTokOutlineIcon size={iS} color={iconCol} />
        <EmailOutlineIcon size={iS} color={iconCol} />
      </div>
      {/* Copyright */}
      <p style={{ fontFamily: F, fontSize: T.typography.sizes.caption, color: c.gray400, textAlign: "center", margin: 0, marginBottom: showPoweredBy ? 8 : 0 }}>
        &copy; {new Date().getFullYear()} {orgName}. All rights reserved
      </p>
      {showPoweredBy && (
        <p style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.bold, color: c.gray500, textAlign: "center", margin: 0 }}>
          Powered by <span style={{ letterSpacing: 0.5 }}>Pixellot</span>
        </p>
      )}
    </footer>
  );
}

// ════════════════════════════════
// COLLAPSIBLE COMPETITION LIST (Onboarding variant for TeamFollowGrid)
// ════════════════════════════════

type Competition = { name: string; teamCount: number; teams: { name: string; followed: boolean }[] };


type SideMenuItem = { label: string; icon?: string; subItems?: string[]; variant?: "default" | "danger" };

/* ── Panels & Overlays ── */
type PSideMenuProps = { variant?: "org" | "profile"; orgName?: string; orgSubtitle?: string; logoUrl?: string; items?: SideMenuItem[]; userName?: string; userInitials?: string };

function PSideMenu({ variant = "org", orgName = "PBA", orgSubtitle = "Basketball Association", logoUrl, items, userName = "Brenden Rogers", userInitials = "BR" }: PSideMenuProps) {
  const c = useColors();
  const [imgError, setImgError] = useState(false);
  const defaultOrgItems: SideMenuItem[] = [
    { label: "Divisions", subItems: ["Varsity", "Junior Varsity", "Regional", "Women's Varsity", "Women's JV"] },
    { label: "Tournaments" },
    { label: "Saved Videos" },
    { label: "My Highlights" },
    { label: "My Account" },
    { label: "Manage Following" },
    { label: "Language" },
  ];
  const defaultProfileItems: SideMenuItem[] = [
    { label: "Premier League", subItems: ["Division 1", "Division 2"] },
    { label: "Championship", subItems: ["East", "West"] },
    { label: "League One", subItems: ["Group A", "Group B"] },
    { label: "League Two", subItems: ["North", "South"] },
  ];
  const profilePlainItems: SideMenuItem[] = [
    { label: "Language" },
    { label: "My Account" },
    { label: "Saved Videos" },
    { label: "My Highlights" },
  ];
  const _items = items || (variant === "profile" ? defaultProfileItems : defaultOrgItems);
  const _profilePlain = profilePlainItems;
  /* Find the index where expandable items end and plain items begin — for the section divider */
  const firstPlainIdx = _items.findIndex(it => !it.subItems || it.subItems.length === 0);

  return (
    <div style={{ display: "flex", width: "100%", height: 520, position: "relative", borderRadius: T.radii.card, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: c.overlay }} />
      <nav role="navigation" aria-label="Side menu" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 300, background: c.white, padding: "20px 20px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        {/* Header — org variant: logo + org name; profile variant: avatar + user name */}
        {variant === "profile" ? (
          <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm2, marginBottom: T.spacing.lg }}>
            <PAvatar initials={userInitials} size={36} />
            <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black, flex: 1 }}>{userName}</span>
            <button aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", color: c.black, display: "flex", borderRadius: T.radii.sm }}><X size={20} /></button>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm2, marginBottom: T.spacing.xl }}>
            {logoUrl && !imgError ? (
              <img src={logoUrl} alt={orgName} onError={() => setImgError(true)} style={{ width: 40, height: 40, borderRadius: T.radii.logo, objectFit: "contain" }} />
            ) : (
              <div style={{ width: 40, height: 40, borderRadius: T.radii.logo, background: c.gray100, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c.gray400} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="4" /><rect x="7" y="7" width="4" height="4" rx="1" /><rect x="13" y="7" width="4" height="4" rx="1" /><rect x="7" y="13" width="4" height="4" rx="1" /><rect x="13" y="13" width="4" height="4" rx="1" />
                </svg>
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>{orgName}</div>
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, color: c.gray400 }}>{orgSubtitle}</div>
            </div>
            <button aria-label="Close" style={{ width: 32, height: 32, borderRadius: "50%", background: c.gray100, border: "none", cursor: "pointer", color: c.gray400, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><X size={18} /></button>
          </div>
        )}
        {/* Menu items — accordion items first */}
        <div style={{ flex: 1 }}>
          {_items.map((item, i) => {
            const hasChildren = item.subItems && item.subItems.length > 0;
            if (hasChildren) {
              return <PAccordion key={i} chevronSize={16} borderless activeHeaderStyle={{ background: c.gray50, borderRadius: T.radii.logo, margin: "0 -8px", padding: "14px 8px" }} items={[{
                id: `menu-${i}`,
                header: <span style={{ flex: 1, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, color: c.darkText }}>{item.label}</span>,
                content: (
                  <div style={{ paddingLeft: T.spacing.lg }}>
                    {item.subItems!.map((sub, si) => (
                      <button key={si} aria-label={sub} style={{ display: "block", width: "100%", padding: `${T.spacing.sm2}px 0`, background: "none", border: "none", cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.sm, color: c.darkText, textAlign: "left" }}>{sub}</button>
                    ))}
                  </div>
                ),
              }]} />;
            }
            return null;
          })}
          {/* Profile variant: Following section card */}
          {variant === "profile" && (<>
            <div style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText, marginTop: T.spacing.md, marginBottom: T.spacing.sm2 }}>Following</div>
            <div style={{ background: c.gray50, borderRadius: T.radii.card, padding: `${T.spacing.md}px ${T.spacing.md}px`, marginBottom: T.spacing.md }}>
              {/* Teams row */}
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold, color: c.gray400, marginBottom: T.spacing.sm2 }}>Teams</div>
              <div style={{ display: "flex", gap: T.spacing.sm2, marginBottom: T.spacing.md }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <PTeamLogo size={40} name="S.D Spartans Men" />
                  <span style={{ fontFamily: F, fontSize: 9, color: c.darkText, textAlign: "center", maxWidth: 52, lineHeight: 1.2 }}>S.D Spartans Men</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <PTeamLogo size={40} name="S.D Spartans Women" />
                  <span style={{ fontFamily: F, fontSize: 9, color: c.darkText, textAlign: "center", maxWidth: 52, lineHeight: 1.2 }}>S.D Spartans Women</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px dashed ${c.gray300}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 18, color: c.gray400, lineHeight: 1 }}>+</span>
                  </div>
                  <span style={{ fontFamily: F, fontSize: 9, color: c.gray400 }}>Add...</span>
                </div>
              </div>
              {/* Players row */}
              <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold, color: c.gray400, marginBottom: T.spacing.sm2 }}>Players</div>
              <div style={{ display: "flex", gap: T.spacing.sm2 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <PPlayerNumberBadge number={4} teamColor={DEFAULTS.jerseyRed} />
                  <span style={{ fontFamily: F, fontSize: 9, color: c.darkText, textAlign: "center", maxWidth: 52, lineHeight: 1.2 }}>S.D Spartans Man #4</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <PPlayerNumberBadge number={11} teamColor={DEFAULTS.jerseyRed} />
                  <span style={{ fontFamily: F, fontSize: 9, color: c.darkText, textAlign: "center", maxWidth: 52, lineHeight: 1.2 }}>S.D Spartans Man #11</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px dashed ${c.gray300}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 18, color: c.gray400, lineHeight: 1 }}>+</span>
                  </div>
                  <span style={{ fontFamily: F, fontSize: 9, color: c.gray400 }}>Add...</span>
                </div>
              </div>
            </div>
          </>)}
          {/* Plain menu items */}
          {(variant === "profile" ? _profilePlain : _items.filter(it => !it.subItems || it.subItems.length === 0)).map((item, i) => {
            const isLanguage = item.label === "Language";
            return (
              <div key={`plain-${i}`}>
                {i === 0 && variant !== "profile" && firstPlainIdx > 0 && <PDivider spacing={8} />}
                <button aria-label={item.label} style={{ display: "flex", alignItems: "center", width: "100%", padding: `${T.spacing.md2}px 0`, background: "none", border: "none", cursor: "pointer", gap: T.spacing.md }}>
                  <span style={{ flex: 1, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, color: c.darkText, textAlign: "left" }}>{item.label}</span>
                  {isLanguage && <><span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray400, marginRight: T.spacing.xs }}>English</span><ChevronDown size={16} color={c.gray400} style={{ transform: "rotate(-90deg)" }} /></>}
                </button>
              </div>
            );
          })}
        </div>
        {/* Divider before Log Out */}
        <PDivider spacing={8} />
        {/* Log Out */}
        <button style={{ display: "flex", alignItems: "center", gap: T.spacing.md, background: "none", border: "none", fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, color: c.errorRed, cursor: "pointer", textAlign: "left", padding: `${T.spacing.lg}px 0` }}>
          Log Out
        </button>
      </nav>
    </div>
  );
}


type PMyFollowingListProps = { teams?: FollowingTeam[]; players?: FollowingPlayer[] };

function PMyFollowingList({ teams, players }: PMyFollowingListProps) {
  const c = useColors();
  const _teams = teams || [{ name: "Riverside Mustangs", division: "PBA Varsity Division" }];
  const _players = players || [{ name: "Marcus Caldwell", number: 1, teamColor: c.primary }];
  const [unfollowed, setUnfollowed] = useState<Record<string, boolean>>({});

  const toggleUnfollow = (key: string) => setUnfollowed(prev => ({ ...prev, [key]: !prev[key] }));

  const visibleTeams = _teams.filter((_, i) => !unfollowed[`t-${i}`]);
  const visiblePlayers = _players.filter((_, i) => !unfollowed[`p-${i}`]);

  return (
    <div style={{ width: 390, fontFamily: F, background: c.white, padding: `${T.spacing.xl}px ${T.spacing.lg}px` }}>
      {/* Teams section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: T.spacing.lg }}>
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>Teams ({visibleTeams.length})</span>
        <PBtn variant="social" size="sm" fullWidth={false} leadingIcon={<span style={{ fontSize: T.typography.sizes.base, lineHeight: 1 }}>+</span>}>Add</PBtn>
      </div>
      {_teams.map((team, i) => {
        if (unfollowed[`t-${i}`]) return null;
        return <PFollowingRow
          key={i}
          avatar={<PTeamLogo size={40} name={team.name} logoUrl={team.logoUrl} />}
          title={team.name}
          subtitle={team.division}
          action={<PBtn variant="social" size="sm" fullWidth={false} onClick={() => toggleUnfollow(`t-${i}`)} style={{ color: c.errorRed }}>Unfollow</PBtn>}
        />;
      })}

      {/* Players section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28, marginBottom: T.spacing.lg }}>
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>Players ({visiblePlayers.length})</span>
        <PBtn variant="social" size="sm" fullWidth={false} leadingIcon={<span style={{ fontSize: T.typography.sizes.base, lineHeight: 1 }}>+</span>}>Add</PBtn>
      </div>
      {_players.map((player, i) => {
        if (unfollowed[`p-${i}`]) return null;
        return <PFollowingRow
          key={i}
          avatar={<PPlayerNumberBadge number={player.number} teamColor={player.teamColor || c.primary} />}
          title={`#${player.number} — ${player.name}`}
          action={<PBtn variant="social" size="sm" fullWidth={false} onClick={() => toggleUnfollow(`p-${i}`)} style={{ color: c.errorRed }}>Unfollow</PBtn>}
        />;
      })}
    </div>
  );
}


export { PBottomTabBar, PAppHeader, PFooter, PSideMenu, PMyFollowingList, _TabIcon };
