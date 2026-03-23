import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PTeamLogo } from "./badges";
import { PBtn } from "./buttons";
import { PDivider } from "./layout";
import { PSearchBar } from "./inputs";
import { PAccordion } from "./lists";
import { PHighlightCard, FacebookOutlineIcon, XOutlineIcon, InstagramOutlineIcon, GlobeOutlineIcon } from "./cards";
import { PPlayerAvatarRow } from "./players";

type Competition = { name: string; teams?: any[] };

function PSocialLinks() {
  return (
    <div style={{ display: "flex", gap: T.spacing.xxl, alignItems: "center", justifyContent: "center" }}>
      <XOutlineIcon />
      <FacebookOutlineIcon />
      <InstagramOutlineIcon />
      <GlobeOutlineIcon />
    </div>
  );
}


function PTeamFollowCardPreview() {
  const c = useColors();
  const [teams, setTeams] = useState([
    { name: "S.D Spartans Men", followed: true },
    { name: "Ironi Nahariya", followed: false },
    { name: "Hapoel Tel Aviv Women", followed: true },
  ]);
  const toggle = (idx) => setTeams(prev => prev.map((t, i) => i === idx ? { ...t, followed: !t.followed } : t));
  return <div style={{ maxWidth: 358, display: "flex", alignItems: "center", gap: T.spacing.sm }}>
    {teams.map((t, i) => <PTeamFollowCard key={i} teamName={t.name} followed={t.followed} onClick={() => toggle(i)} />)}
  </div>;
}


/* ── Team Follow Cards ── */


type PTeamFollowCardProps = { teamName?: string; logoUrl?: string; followed?: boolean; onClick?: () => void };
function PTeamFollowCard({ teamName = "S.D Spartans Men", logoUrl, followed = false, onClick }: PTeamFollowCardProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const followLabel = followed ? "Following" : "Follow";
  const followColor = followed ? c.primary : c.darkText;
  return <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    aria-pressed={followed} aria-label={(followed ? "Unfollow " : "Follow ") + teamName}
    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, flex: "1 0 0", minWidth: 0, padding: `${T.spacing.md}px ${T.spacing.lg}px ${T.spacing.sm}px ${T.spacing.lg}px`, background: hovered ? c.gray100 : c.gray50, borderRadius: T.radii.badge, border: followed ? `2px solid ${c.primary}` : `1px solid ${c.gray200}`, cursor: "pointer", transition: "background 0.15s, border 0.15s", boxSizing: "border-box" }} data-card="">
    <PTeamLogo size={48} name={teamName} logoUrl={logoUrl} />
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center", lineHeight: "20px", height: 40, overflow: "hidden", alignSelf: "stretch", wordBreak: "break-word", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{teamName}</span>
    <PDivider style={{ alignSelf: "stretch" }} />
    <div style={{ height: 18, display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch" }}>
      <span style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold, color: followColor }}>{followLabel}</span>
    </div>
  </button>;
}

/* Figma "Manage following" page layout — sections with flex row of 3 cards
   Container per row: display:flex, align-items:center, gap:8px, align-self:stretch
   Outer: gap:24 between sections, padding: 0 24px 0 0 */


type PTeamFollowGridProps = { sections?: any[]; onClick?: (name: string) => void };
function PTeamFollowGrid({ sections, onClick }: PTeamFollowGridProps) {
  const c = useColors();
  const defaultSections = [
    { title: "Following", teams: [
      { name: "S.D Spartans Men", followed: true },
      { name: "S.D Spartans Women", followed: true },
      { name: "Maccabi Kiryat Gat", followed: true },
    ]},
    { title: "Men", teams: [
      { name: "S.D Spartans Men", followed: true },
      { name: "Ironi Nahariya", followed: false },
      { name: "Hapoel Tel Aviv", followed: false },
    ]},
  ];
  const secs = sections || defaultSections;
  return <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.xl }}>
    {secs.map((s, si) => <div key={si}>
      <span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, color: c.black, display: "block", marginBottom: T.spacing.sm }}>{s.title}</span>
      <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}>
        {s.teams.map((t, ti) => <PTeamFollowCard key={ti} teamName={t.name} followed={t.followed} onClick={() => onClick && onClick(t.name)} />)}
      </div>
    </div>)}
  </div>;
}

/* ─── PHomeFollowingSection ───────────────────────────────────────────────────
   HomeScreen "Following" strip — single horizontal scrollable row at the top
   of the Home page showing everything the user follows: teams + players mixed.

   Chip types (all same circular size ~56px):
   • Team chip     → circular team logo, tap → TeamPage
   • Player chip (claimed)   → circular player photo, tap → PlayerProfile
   • Player chip (unclaimed) → colored circle with jersey number, tap → PlayerProfile

   No labels, no section headers — just the row of chips.
   ────────────────────────────────────────────────────────────────────────── */

type HomeFollowingItem =
  | { type: "team";   name: string; logoUrl?: string; }
  | { type: "player"; number: number; teamColor?: string; photoUrl?: string; claimed?: boolean; };



type PHomeFollowingSectionProps = {
  items?:          HomeFollowingItem[];
  onTeamClick?:    (name: string) => void;
  onPlayerClick?:  (number: number) => void;

/* ── Home Following Section ── */
};

function PHomeFollowingSection({
  items,
  onTeamClick,
  onPlayerClick,
}: PHomeFollowingSectionProps) {
  const c = useColors();
  const SIZE = 56;

  const defaultItems: HomeFollowingItem[] = [
    { type: "team",   name: "S.D. Spartans Men" },
    { type: "team",   name: "S.D. Spartans Women" },
    { type: "player", number: 7,  teamColor: DEFAULTS.jerseyRed, claimed: true },
    { type: "player", number: 3,  teamColor: DEFAULTS.jerseyRed, claimed: false },
    { type: "player", number: 11, teamColor: "#0052CC", claimed: false },
  ];

  const _items = items ?? defaultItems;

  return (
    <div style={{
      display: "flex", gap: T.spacing.md, overflowX: "auto", overflowY: "visible",
      padding: `${T.spacing.md}px ${T.spacing.lg}px`, scrollbarWidth: "none",
    }}>
      {_items.map((item, i) => {
        if (item.type === "team") {
          return (
            <button
              key={i}
              onClick={() => onTeamClick?.(item.name)}
              aria-label={`Go to ${item.name}`}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
              style={{
                flexShrink: 0, background: "none", border: "none", cursor: "pointer",
                padding: 0, transform: "scale(1)", transition: "transform 0.15s ease",
                width: SIZE, height: SIZE, borderRadius: "50%",
              }}
            >
              {item.logoUrl ? (
                /* real logo from server */
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  style={{ width: SIZE, height: SIZE, borderRadius: "50%", objectFit: "cover",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}
                />
              ) : (
                /* DS placeholder — logo comes from server in production */
                <div style={{
                  width: SIZE, height: SIZE, borderRadius: "50%",
                  background: c.gray50, border: `1.5px solid ${c.gray200}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
                }}>
                  <svg width={SIZE * 0.45} height={SIZE * 0.45} viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="9" stroke={c.gray300} strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" stroke={c.gray300} strokeWidth="1.5"/>
                    <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={c.gray300} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </button>
          );
        }
        /* player chip */
        const color = item.teamColor ?? DEFAULTS.jerseyRed;
        return (
          <button
            key={i}
            onClick={() => onPlayerClick?.(item.number)}
            aria-label={`Player ${item.number}`}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            style={{
              flexShrink: 0, background: "none", border: "none", cursor: "pointer",
              padding: 0, transform: "scale(1)", transition: "transform 0.15s ease",
              width: SIZE, height: SIZE, borderRadius: "50%",
              overflow: "hidden", position: "relative",
            }}
          >
            {item.claimed && item.photoUrl ? (
              /* claimed player — real photo */
              <img src={item.photoUrl} alt={`Player ${item.number}`}
                style={{ width: SIZE, height: SIZE, objectFit: "cover", borderRadius: "50%" }} />
            ) : item.claimed ? (
              /* claimed player — photo placeholder (face silhouette) */
              <div style={{
                width: SIZE, height: SIZE, borderRadius: "50%",
                background: c.gray200, display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
              }}>
                <svg width={SIZE * 0.55} height={SIZE * 0.55} viewBox="0 0 24 24" fill={c.gray400}>
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
            ) : (
              /* unclaimed player — colored circle with number */
              <div style={{
                width: SIZE, height: SIZE, borderRadius: "50%",
                background: color, display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }}>
                <span style={{
                  fontFamily: F, fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.extraBold,
                  color: "#fff", lineHeight: 1,
                }}>
                  {item.number}
                </span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ─── PFollowedPlayersSection (legacy) ────────────────────────────────────────
   Kept for reference — this design is superseded by PHomeFollowingSection.
   Previously rendered team-tabbed "Player Highlights" with highlight cards.
   ────────────────────────────────────────────────────────────────────────── */


type PFollowedPlayersSectionProps = { teams?: string[] };
function PFollowedPlayersSection({ teams = ["Maccabi Kiryat Gat", "Ironi Nahariya"] }: PFollowedPlayersSectionProps) {
  const c = useColors();
  var activeTeam = useState(0);
  var idx = activeTeam[0];
  var setIdx = activeTeam[1];
  return <div>
    <h3 style={{ fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold, color: c.black, marginBottom: T.spacing.md }}>Player Highlights</h3>
    <div style={{ display: "flex", borderBottom: `2px solid ${c.gray100}`, marginBottom: T.spacing.lg }}>
      {teams.map(function(t, i) {
        return <button key={i} onClick={function() { setIdx(i); }} aria-label={`Show ${t} players`} aria-pressed={i === idx}
          onFocus={e => { (e.currentTarget as HTMLButtonElement).style.outline = `2px solid ${c.primary}`; }}
          onBlur={e => { (e.currentTarget as HTMLButtonElement).style.outline = "none"; }}
          style={{ flex: 1, background: "none", border: "none", borderBottom: i === idx ? `2px solid ${c.accent}` : "2px solid transparent", padding: `${T.spacing.sm2}px 0`, fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: i === idx ? 600 : 400, color: i === idx ? c.black : c.gray400, cursor: "pointer", marginBottom: -2, borderRadius: T.radii.sm, outline: "none", outlineOffset: 2 }}>{t}</button>;
      })}
    </div>
    <h4 style={{ fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.semibold, color: c.black, marginBottom: T.spacing.md }}>Followed Players</h4>
    <PPlayerAvatarRow teamColor={c.accent} />
    <div style={{ display: "flex", gap: T.spacing.md, overflowX: "auto", paddingBottom: T.spacing.sm, marginTop: T.spacing.lg }}>
      <PHighlightCard title="#4 Gets the ball Forward" duration="0:45" emoji={"\uD83C\uDFC0"} />
      <PHighlightCard title="#11 Gets the ball Forward" duration="0:32" emoji={"\uD83C\uDFC0"} />
    </div>
  </div>;
}

// ════════════════════════════════
// ACCORDION (reusable collapsible section)
// ════════════════════════════════

type PAccordionItem = { id: string; header: ReactNode; content: ReactNode };


type PCompetitionFollowListProps = { competitions?: Competition[]; onToggleFollow?: (compIdx: number, teamIdx: number) => void };

function PCompetitionFollowList({ competitions, onToggleFollow }: PCompetitionFollowListProps) {
  const c = useColors();
  const defaultComps: Competition[] = [
    { name: "Varsity", teamCount: 14, teams: [
      { name: "Riverside Mustangs", followed: false },
      { name: "Oakwood Eagles", followed: false },
      { name: "Valley Vista Cougars", followed: false },
      { name: "Lakeside Lancers", followed: false },
      { name: "Capital City Cavaliers", followed: false },
      { name: "Bayshore Hawks", followed: false },
    ]},
    { name: "Junior Varsity", teamCount: 12, teams: [] },
    { name: "Regional", teamCount: 10, teams: [] },
    { name: "Women's Varsity", teamCount: 10, teams: [] },
    { name: "Women's JV", teamCount: 10, teams: [] },
  ];
  const _comps = competitions || defaultComps;
  const [follows, setFollows] = useState<Record<string, boolean>>({});

  const totalFollowed = Object.values(follows).filter(Boolean).length;

  const toggleFollow = (cIdx: number, tIdx: number) => {
    const key = `${cIdx}-${tIdx}`;
    setFollows(prev => ({ ...prev, [key]: !prev[key] }));
    onToggleFollow?.(cIdx, tIdx);
  };

  /* Build PAccordion items from competition data */
  const accordionItems: PAccordionItem[] = _comps.map((comp, ci) => {
    const followedInComp = comp.teams.filter((_, ti) => follows[`${ci}-${ti}`]).length;
    return {
      id: `comp-${ci}`,
      header: (
        <>
          <PTeamLogo size={44} name={comp.name} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.darkText }}>{comp.name}</div>
            <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, color: c.gray400 }}>
              {comp.teamCount} teams{followedInComp > 0 && <span> · {followedInComp} following</span>}
            </div>
          </div>
        </>
      ),
      content: comp.teams.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: T.spacing.sm }}>
          {comp.teams.map((team, ti) => {
            const isFollowed = !!follows[`${ci}-${ti}`];
            return <PTeamFollowCard key={ti} teamName={team.name} followed={isFollowed} onClick={() => toggleFollow(ci, ti)} />;
          })}
        </div>
      ) : <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, color: c.gray400, padding: "8px 0" }}>No teams available</div>,
    };
  });

  return (
    <div style={{ width: 390, fontFamily: F, background: c.white, padding: `0 ${T.spacing.lg}px` }}>
      {/* Search — uses DS PSearchBar */}
      <div style={{ marginBottom: T.spacing.lg }}>
        <PSearchBar placeholder="Search any team or competition..." readOnly />
      </div>
      {/* Competition list — uses PAccordion */}
      <PAccordion items={accordionItems} headerStyle={{ padding: `${T.spacing.lg}px 0` }} />
      {/* Continue button */}
      <div style={{ padding: "16px 0 24px" }}>
        <PBtn variant="primary" size="lg" fullWidth={true}>
          {totalFollowed > 0 ? `Continue (${totalFollowed})` : "Continue"}
        </PBtn>
      </div>
    </div>
  );
}

// ════════════════════════════════
// SIDE MENU (Sales variant for ProfileSidebar)
// ════════════════════════════════



export { PSocialLinks, PTeamFollowCardPreview, PTeamFollowCard, PTeamFollowGrid, PHomeFollowingSection, PFollowedPlayersSection, PCompetitionFollowList };
