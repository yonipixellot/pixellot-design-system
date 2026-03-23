import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBtn } from "./buttons";

type PTeamRowProps = { name?: string; score?: string; isWinner?: boolean; logoSize?: number; fontSize?: number; fontWeight?: number; gap?: number };
function PTeamRow({ name, score, isWinner = true, logoSize = 28, fontSize = 16, fontWeight = 500, gap = 12 }: PTeamRowProps) {
  const c = useColors();
  const color = isWinner ? c.black : c.gray500;
  return <div style={{ display: "flex", alignItems: "center", height: logoSize }}>
    <div style={{ display: "flex", alignItems: "center", gap, flex: 1 }}>
      <PTeamLogo size={logoSize} name={name} />
      <span style={{ fontFamily: F, fontSize, fontWeight, color }}>{name}</span>
    </div>
    <span style={{ fontFamily: F, fontSize, fontWeight, color }}>{score}</span>
  </div>;
}




type PTeamStatsBarProps = { label: string; leftVal: number; rightVal: number };
function PTeamStatsBar({ label, leftVal, rightVal }: PTeamStatsBarProps) {
  const c = useColors();
  const total = leftVal + rightVal;
  const leftPercent = (leftVal / total) * 100;
  const rightPercent = (rightVal / total) * 100;
  return <div style={{ padding: "16px 20px", fontFamily: F }}>
    {/* Label row: leftScore | label | rightScore */}
    <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm2, marginBottom: T.spacing.sm2 }}>
      <span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, width: 28, textAlign: "left", flexShrink: 0 }}>{leftVal}</span>
      <span style={{ flex: 1, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center" }}>{label}</span>
      <span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, width: 28, textAlign: "right", flexShrink: 0 }}>{rightVal}</span>
    </div>
    {/* Bar row: full width, left track (fill from right) | gap | right track (fill from left) */}
    <div style={{ display: "flex", gap: T.spacing.sm2 }}>
      <div style={{ flex: 1, height: 8, background: c.barTrack, borderRadius: T.radii.sm, display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: `${leftPercent}%`, height: 8, background: c.barRed, borderRadius: T.radii.sm }} />
      </div>
      <div style={{ flex: 1, height: 8, background: c.barTrack, borderRadius: T.radii.sm, display: "flex", justifyContent: "flex-start" }}>
        <div style={{ width: `${rightPercent}%`, height: 8, background: c.barGray, borderRadius: T.radii.sm }} />
      </div>
    </div>
  </div>;
}


type PPaywallOverlayProps = { children?: ReactNode; label?: string };
function PPaywallOverlay({ children, label = "Buy Team Stats" }: PPaywallOverlayProps) {
  const c = useColors();
  return <div style={{ position: "relative", borderRadius: T.radii.card, overflow: "hidden" }}>
    <div style={{ filter: "blur(4px)", opacity: 0.5, pointerEvents: "none" }}>{children}</div>
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.08)", borderRadius: T.radii.card, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.lg2 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.md }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: c.premiumDark, border: `${T.strokes.extraHeavy}px solid ${c.premiumYellow}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LockSvg size={22} fill={c.premiumYellow} />
          </div>
          <p style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.semibold, color: c.darkText, margin: 0, fontFamily: F }}>{label}</p>
        </div>
        <PBtn variant="premium" size="lg" fullWidth={false} style={{ width: 160, fontWeight: T.typography.weights.semibold, borderRadius: T.radii.sheet }}>Buy Now</PBtn>
      </div>
    </div>
  </div>;
}


function PTeamStatsPaywall() {
  return <PPaywallOverlay label="Buy Team Stats">
    <PTeamStatsBar label="Points" leftVal={87} rightVal={79} />
    <PTeamStatsBar label="Field Goal %" leftVal={48} rightVal={42} />
    <PTeamStatsBar label="3-Pointers" leftVal={12} rightVal={8} />
    <PTeamStatsBar label="Rebounds" leftVal={35} rightVal={29} />
    <PTeamStatsBar label="Assists" leftVal={22} rightVal={18} />
    <PTeamStatsBar label="Steals" leftVal={9} rightVal={6} />
    <PTeamStatsBar label="Blocks" leftVal={4} rightVal={3} />
    <PTeamStatsBar label="Turnovers" leftVal={12} rightVal={15} />
  </PPaywallOverlay>;
}



function PGameLeaders() {
  const c = useColors();
  const stats = [
    { label: "Points", left: { num: "#22", detail: "22 PTS, 9 REB" }, right: { num: "#9", detail: "19 PTS, 6 REB" } },
    { label: "Rebounds", left: { num: "#22", detail: "9 REB, 4 OFF" }, right: { num: "#11", detail: "8 REB, 3 OFF" } },
    { label: "Assists", left: { num: "#11", detail: "7 AST, 30 MIN" }, right: { num: "#7", detail: "6 AST, 28 MIN" } },
  ];
  return <div style={{ padding: "16px 20px", fontFamily: F }}>
    <h3 style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.darkText, margin: "0 0 10px" }}>Game Leaders</h3>
    {/* Team logos */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: T.spacing.sm2 }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.gray100, border: `${T.strokes.thin}px solid ${c.gray300}`, overflow: "hidden" }} />
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.gray100, border: `${T.strokes.thin}px solid ${c.gray300}`, overflow: "hidden" }} />
    </div>
    {/* Stat rows */}
    {stats.map((s, i) => <div key={s.label}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: T.spacing.sm2 }}>
        <div style={{ flex: 1, textAlign: "left" }}>
          <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.darkText, margin: 0 }}>{s.left.num}</p>
          <p style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.gray500, margin: 0 }}>{s.left.detail}</p>
        </div>
        <div style={{ flex: 1, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: 36 }}>
          <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, margin: 0 }}>{s.label}</p>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.darkText, margin: 0 }}>{s.right.num}</p>
          <p style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.gray500, margin: 0 }}>{s.right.detail}</p>
        </div>
      </div>
      {i < stats.length - 1 && <PDivider color={c.dividerDark} style={{ marginBottom: T.spacing.sm2 }} />}
    </div>)}
    {/* See All button */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: T.spacing.sm2 }}>
      <PBtn variant="muted" size="sm" fullWidth={false} trailingIcon={<ChevronDown size={14} />} style={{ borderRadius: T.radii.sheet, padding: "8px 28px" }}>See All</PBtn>
    </div>
  </div>;
}


function PPlayerStatsTable() {
  const c = useColors();
  const [activeTeam, setActiveTeam] = useState(0);
  const headers = ["Player", "MIN", "PTS", "REB", "AST"];
  const rows = [
    ["#5", "32", "18", "7", "3"],
    ["#3", "28", "14", "4", "5"],
    ["#22", "35", "22", "9", "2"],
    ["#13", "26", "8", "3", "1"],
    ["#11", "30", "16", "5", "7"],
    ["#23", "18", "4", "2", "1"],
    ["#8", "24", "10", "3", "2"],
    ["#7", "15", "6", "2", "3"],
  ];
  return <div style={{ padding: "16px 20px", fontFamily: F }}>
    {/* Team tabs */}
    <div style={{ display: "flex", marginBottom: T.spacing.md2 }}>
      {["Maccabi Kiryat Gat", "Ironi Nahariya"].map((team, i) => {
        return <button key={team} onClick={() => setActiveTeam(i)} aria-label={`Show ${team} stats`} aria-pressed={activeTeam === i}
          onFocus={e => { (e.currentTarget as HTMLButtonElement).style.outline = `2px solid ${c.primary}`; }}
          onBlur={e => { (e.currentTarget as HTMLButtonElement).style.outline = "none"; }}
          style={{ flex: 1, background: "none", border: "none", borderBottom: activeTeam === i ? `2px solid ${c.jerseyRed}` : `2px solid ${c.barTrack}`, padding: `0 0 ${T.spacing.sm}px`, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: activeTeam === i ? c.darkText : c.gray400, cursor: "pointer", fontFamily: F, borderRadius: T.radii.sm, outline: "none", outlineOffset: 2 }}>{team}</button>;
      })}
    </div>
    {/* Header row */}
    <div style={{ display: "flex", alignItems: "center", marginBottom: T.spacing.sm2 }}>
      {headers.map((h, i) => <span key={h} style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.gray400, width: i === 0 ? 80 : undefined, flex: i === 0 ? undefined : 1, textAlign: i === 0 ? "left" : "center" }}>{h}</span>)}
    </div>
    <PDivider color={c.barTrack} style={{ marginBottom: T.spacing.sm }} />
    {/* Data rows */}
    {rows.map((row, ri) => <div key={ri}>
      <div style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
        {row.map((cell, ci) => <span key={ci} style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, width: ci === 0 ? 80 : undefined, flex: ci === 0 ? undefined : 1, textAlign: ci === 0 ? "left" : "center" }}>{cell}</span>)}
      </div>
      <PDivider color={c.jerseyRed} style={{ opacity: 0.15 }} />
    </div>)}
  </div>;
}


function PPlayerStatsPaywall() {
  return <PPaywallOverlay label="Buy Team Stats">
    <PPlayerStatsTable />
    <PGameLeaders />
  </PPaywallOverlay>;
}

/* ── PStatCard — atomic stat cell: label on top, large number below ── */


type PStatCardProps = { label: string; value: string | number; labelLines?: string[] };
function PStatCard({ label, value, labelLines }: PStatCardProps) {
  const c = useColors();
  return <div style={{ flex: 1, background: c.cardBg, padding: T.spacing.md, borderRadius: T.radii.badge, display: "flex", flexDirection: "column", gap: 2, overflow: "hidden" }}>
    {labelLines
      ? <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.medium, color: c.gray500, lineHeight: "16px" }}>
          {labelLines.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      : <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.medium, color: c.gray500, lineHeight: "16px" }}>{label}</div>}
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxl, fontWeight: T.typography.weights.bold, color: c.darkText, lineHeight: "normal", marginTop: "auto" }}>{value}</div>
  </div>;
}



function PStatsGrid() {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: T.spacing.md }}>
    <PStatCard label="Minutes Played" labelLines={["Minutes", "Played"]} value="1245" />
    <PStatCard label="Games Played" labelLines={["Games", "Played"]} value="64" />
    <PStatCard label="Tournaments Played" labelLines={["Tournaments", "Played"]} value="18" />
  </div>;
}


function PSeasonStatsRow() {
  return <div style={{ display: "flex", gap: T.spacing.md }}>
    <PStatCard label="MPG" value="23.4" />
    <PStatCard label="PPG" value="18.6" />
    <PStatCard label="APG" value="4.5" />
    <PStatCard label="RPG" value="3.2" />
  </div>;
}


export { PTeamRow, PTeamStatsBar, PPaywallOverlay, PTeamStatsPaywall, PGameLeaders, PPlayerStatsTable, PPlayerStatsPaywall, PStatCard, PStatsGrid, PSeasonStatsRow };
