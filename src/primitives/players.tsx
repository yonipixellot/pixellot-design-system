import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

type PJerseyProps = { number: number; selected?: boolean; onClick?: () => void; color?: string };
function PJersey({ number, selected, onClick, color = DEFAULTS.jerseyRed }: PJerseyProps) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <button onClick={onClick} aria-label={"Jersey number " + number} aria-pressed={selected} onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ position: "relative", width: 73, height: 73, background: "none", border: "none", cursor: "pointer", padding: 0, transition: "transform 0.15s", transform: selected ? "scale(1.1)" : "scale(1)", borderRadius: T.radii.md, ...(fo ? focusRing(c) : {}) }}>
    <svg viewBox="0 0 73 73" fill="none" style={{ width: "100%", height: "100%" }}>
      <path d={JERSEY_PATH_73}
        fill={color} stroke={selected ? c.successGreen : _isLightColor(color) ? c.gray300 : c.jerseyStroke} strokeWidth={selected ? T.strokes.heavy : T.strokes.thick} />
    </svg>
    {selected && <div style={{ position: "absolute", top: -4, right: -4, width: 20, height: 20, background: c.successGreen, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Check size={12} color={c.jerseyStroke} strokeWidth={3} />
    </div>}
    <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-40%)", fontFamily: F, fontSize: T.typography.sizes.jersey, fontWeight: T.typography.weights.bold, color: _isLightColor(color) ? c.darkText : c.jerseyStroke, pointerEvents: "none" }}>{number}</span>
  </button>;
}


type PClaimedPlayerCardProps = { teamName?: string; playerName?: string; number?: number; position?: string; height?: string };
function PClaimedPlayerCard({ teamName = "S.D Spartans", playerName = "Weiss Tal", number = 11, position = "Guard", height = "6'0" }: PClaimedPlayerCardProps) {
  const c = useColors();
  return <div style={{ background: c.cardBg, borderRadius: T.radii.card, padding: T.spacing.lg, display: "flex", alignItems: "center", gap: T.spacing.md }}>
    <div style={{ width: 52, height: 52, borderRadius: "50%", background: c.gray300, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <User size={24} color={c.gray400} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.medium, color: c.gray400 }}>{teamName}</div>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black }}>{playerName}</div>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.regular, color: c.gray500 }}>#{number}, {position}, {height}</div>
    </div>
  </div>;
}

/* PProfileSidebar — removed, now use PSideMenu variant="profile" */



type PPlayerAvatarChipProps = {
  number?: number;
  selected?: boolean;
  onClick?: () => void;
  teamColor?: string;
  /* Legacy props — kept for API compatibility but not visually used by this version */
  name?: string; photo?: string; claimed?: boolean;

/* ── Jerseys & Players ── */
};
function PPlayerAvatarChip({ number = 0, selected = false, onClick, teamColor = DEFAULTS.jerseyRed }: PPlayerAvatarChipProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const W = 55.317, H = 80;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-pressed={selected}
      aria-label={`Player #${number}${selected ? " (selected)" : ""}`}
      style={{
        position: "relative", width: W, height: H, flexShrink: 0,
        background: "none", border: "none", cursor: "pointer", padding: 0,
        transform: hovered ? "scale(1.05)" : "scale(1)",
        filter: (hovered || selected) ? "drop-shadow(0px 4px 12px rgba(0,0,0,0.45))" : "none",
        transition: "transform 0.15s ease, filter 0.15s ease",
      }}
    >
      {/* Jersey SVG — full container, preserveAspectRatio none to fill exactly */}
      <svg
        viewBox="0 0 56 80" fill="none" preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      >
        <path
          d={JERSEY_PATH_56}
          fill={teamColor}
          stroke={selected ? c.selectedGreen : "white"}
          strokeWidth={selected ? 3.5 : 2.796}
          style={{ transition: "stroke 0.15s, stroke-width 0.15s" }}
        />
      </svg>

      {/* Player number — vertically centered, nudged down past the collar */}
      <span style={{
        position: "absolute", left: "50%", top: "52%",
        transform: "translate(-50%, -50%)",
        fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.bold,
        color: _isLightColor(teamColor) ? c.darkText : c.white,
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
      }}>
        {number}
      </span>

      {/* Green checkmark badge when selected */}
      {selected && (
        <div style={{
          position: "absolute", top: -4, right: -4,
          width: 20, height: 20, borderRadius: "50%",
          background: c.selectedGreen,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 10,
        }}>
          <Check size={12} color="white" strokeWidth={3} />
        </div>
      )}
    </button>
  );
}

/* Player avatar row — grouped by team category, expandable, with search.
   Based on the real SelectPlayer.tsx: categories per followed team, See All/See Less for >4 players.
   New API: categories[]. Legacy flat players[] still supported. */
type PlayerChipEntry = { number: number };
type PlayerChipCategory = { name: string; players: PlayerChipEntry[]; teamColor?: string };


type PPlayerAvatarRowProps = {
  /* New grouped API */
  categories?: PlayerChipCategory[];
  selectedIds?: number[];
  onToggle?: (playerNumber: number, categoryName: string) => void;
  multiSelect?: boolean;
  /* Legacy flat API */
  players?: any[]; selectedId?: number; onSelect?: (id: number) => void; teamColor?: string;
};
function PPlayerAvatarRow({
  categories, selectedIds = [], onToggle, multiSelect = true,
  players, selectedId, onSelect, teamColor = DEFAULTS.jerseyRed,
}: PPlayerAvatarRowProps) {
  const c = useColors();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCats, setExpandedCats] = useState<string[]>([]);

  /* Build category list — use provided or sensible defaults */
  const defaultCats: PlayerChipCategory[] = [
    { name: "S.D. Spartans", teamColor: DEFAULTS.jerseyRed, players: [1,4,7,8,10,11,14,22,23,30,31,33].map(n => ({ number: n })) },
    { name: "Logan Thunder",  teamColor: "#0052CC", players: [2,3,5,6,9,12,15,17,19,21].map(n => ({ number: n })) },
  ];
  /* Legacy flat-list shim */
  const legacyCats: PlayerChipCategory[] | null = players
    ? [{ name: "Players", teamColor, players: players.map(p => ({ number: p.number })) }]
    : null;
  const cats = categories || legacyCats || defaultCats;

  const toggleCat = (name: string) =>
    setExpandedCats(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);

  /* Filter by search */
  const filtered = cats.map(cat => ({
    ...cat,
    players: cat.players.filter(p => searchQuery === "" || p.number.toString().includes(searchQuery)),
  })).filter(cat => cat.players.length > 0);

  return (
    <div style={{ background: c.white, borderRadius: T.radii.card, fontFamily: F, overflow: "hidden" }}>
      {/* ── Search input ── */}
      <div style={{ padding: "12px 16px 8px", background: c.white, position: "sticky", top: 0, zIndex: 5 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: T.spacing.sm,
          background: c.cardBg, borderRadius: T.radii.badge,
          padding: `${T.spacing.sm}px ${T.spacing.md}px`, border: `1px solid ${c.gray200}`,
        }}>
          <Search size={16} color={c.gray400} />
          <input
            placeholder="Search Player Number..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              border: "none", outline: "none", background: "transparent",
              fontFamily: F, fontSize: T.typography.sizes.sm, color: c.darkText, flex: 1,
            }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} aria-label="Clear search" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
              <X size={14} color={c.gray400} />
            </button>
          )}
        </div>
      </div>

      {/* ── Categories ── */}
      {filtered.map(cat => {
        const isExpanded = expandedCats.includes(cat.name);
        const display = isExpanded ? cat.players : cat.players.slice(0, 4);
        const hasMore = cat.players.length > 4;
        const color = cat.teamColor || teamColor;
        return (
          <div key={cat.name} style={{ padding: "8px 16px 4px" }}>
            {/* Category header */}
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm, marginBottom: T.spacing.sm2 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0 }} />
              <span style={{ fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.semibold, color: c.darkText }}>
                {cat.name}
              </span>
              <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>
                ({cat.players.length})
              </span>
            </div>

            {/* Jersey chips — flex wrap */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: T.spacing.sm2, paddingBottom: T.spacing.xs }}>
              {display.map(p => {
                const isSelected = selectedIds.includes(p.number) || selectedId === p.number;
                return (
                  <PPlayerAvatarChip
                    key={`${cat.name}-${p.number}`}
                    number={p.number}
                    selected={isSelected}
                    teamColor={color}
                    onClick={() => {
                      if (onToggle) onToggle(p.number, cat.name);
                      if (onSelect) onSelect(p.number);
                    }}
                  />
                );
              })}
            </div>

            {/* See All / See Less */}
            {hasMore && (
              <button
                onClick={() => toggleCat(cat.name)}
                style={{
                  marginTop: T.spacing.sm, marginBottom: T.spacing.sm, width: "100%",
                  background: "rgba(237,237,237,0.6)",
                  border: "none", borderRadius: T.radii.badge,
                  padding: "8px 16px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  cursor: "pointer", fontFamily: F,
                  fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium,
                  color: c.darkText,
                }}
              >
                <span>{isExpanded ? "See Less" : "See All"}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d={isExpanded ? "M 4 10 L 8 6 L 12 10" : "M 4 6 L 8 10 L 12 6"}
                    stroke={c.darkText} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        );
      })}

      {filtered.length === 0 && (
        <div style={{ padding: `${T.spacing.xl}px ${T.spacing.lg}px`, textAlign: "center", color: c.gray400, fontSize: T.typography.sizes.sm }}>
          No players matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}

/* Team card — exact Figma specs from "Manage following_Teams" Dev Mode:
   Card: display:flex, padding:12px 0 8px 0, flex-direction:column, align-items:center, gap:8px, flex:1 0 0, border-radius:12px, bg:#F5F5F5 (gray), NO border, NO shadow
   Team name: font-size:14px, font-weight:500, color:#6C7784, line-height:20px, height:40px (2-line clamp), text-align:center
   Divider: 1px with 10px vertical padding (spacing element)
   Follow label: height:18px, centered, text-secondary color
   Logo: 48×48 */


export { PJersey, PClaimedPlayerCard, PPlayerAvatarChip, PPlayerAvatarRow };
