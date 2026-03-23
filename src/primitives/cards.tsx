import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBadge } from "./badges";

function PLiveGameCard() {
  const c = useColors();
  return <div style={{ minWidth: 240, flex: 1, borderRadius: T.radii.card, overflow: "hidden", flexShrink: 0 }}>
    {/* Header — darker gray top section */}
    <div style={{ background: c.gray200, borderRadius: `${T.radii.card}px ${T.radii.card}px 0 0` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${T.spacing.md}px ${T.spacing.lg}px` }}>
        <PLiveBadge />
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.black }}>21 NOV, 2024</span>
      </div>
    </div>
    {/* Content — lighter gray bottom section */}
    <div style={{ background: c.gray100, borderRadius: `0 0 ${T.radii.card}px ${T.radii.card}px` }}>
      <div style={{ display: "flex", alignItems: "center", padding: `${T.spacing.md}px ${T.spacing.lg}px` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm, width: "100%" }}>
          {/* Teams */}
          <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
            <PTeamRow name="M. Kiryat Gat" score="87" isWinner={true} />
            <PTeamRow name="H. Haifa" score="79" isWinner={false} />
          </div>
          {/* League */}
          <div>
            <span style={{ fontFamily: F, fontSize: T.typography.sizes.mini, fontWeight: T.typography.weights.medium, color: c.gray400 }}>Liga Leumit (Winner League)</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}



function PGameResultCard() {
  const c = useColors();
  return <div style={{ background: c.gray100, borderRadius: T.radii.card, display: "flex", gap: T.spacing.lg, marginBottom: T.spacing.md, height: 116, overflow: "hidden" }}>
    {/* Date column — darker gray, left-rounded only */}
    <div style={{ width: 72, flexShrink: 0, background: c.gray200, borderRadius: `${T.radii.card}px 0 0 ${T.radii.card}px`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black, lineHeight: "24px" }}>20</div>
        <div style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.bold, color: c.black, lineHeight: "16px" }}>NOV</div>
        <div style={{ fontSize: T.typography.sizes.mini, fontWeight: T.typography.weights.regular, color: c.black, lineHeight: "15px" }}>2024</div>
      </div>
    </div>
    {/* Right content — team rows + league + highlights */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: T.spacing.sm, paddingRight: T.spacing.lg }}>
      <PTeamRow name="Maccabi Kiryat Gat" score="89" isWinner={true} logoSize={27} fontWeight={400} gap={8} />
      <PTeamRow name="Ironi Nahariya" score="77" isWinner={false} logoSize={27} fontWeight={400} gap={8} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: T.typography.sizes.mini, fontWeight: T.typography.weights.regular, color: c.gray400 }}>Liga Leumit (Winner League)</span>
        <PBadge variant="highlights" />
      </div>
    </div>
  </div>;
}



function PScoreCard() {
  const c = useColors();
  return <div style={{ background: c.gray100, borderRadius: T.radii.card, padding: T.spacing.lg, width: "100%", maxWidth: 398, boxSizing: "border-box" }}>
    <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}>
      {/* Left team column */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
        <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md }}>
          <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: "50%", background: c.white, flexShrink: 0 }} />
          <span style={{ fontSize: `clamp(${T.typography.sizes.xl}px, 6vw, ${T.typography.sizes.h1}px)`, fontWeight: T.typography.weights.regular, color: c.black }}>89</span>
        </div>
        <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.black, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>M. Kiryat Gat</div>
        <div style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.regular, color: c.gray500 }}>1st</div>
      </div>
      {/* Center — Final + date */}
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: `0 ${T.spacing.xs}px` }}>
        <div style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.regular, color: c.gray500 }}>Final</div>
        <div style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.regular, color: c.gray500 }}>20 NOV 2024</div>
      </div>
      {/* Right team column (loser — gray) */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: T.spacing.sm }}>
        <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md }}>
          <span style={{ fontSize: `clamp(${T.typography.sizes.xl}px, 6vw, ${T.typography.sizes.h1}px)`, fontWeight: T.typography.weights.regular, color: c.gray500 }}>77</span>
          <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: "50%", background: c.white, flexShrink: 0 }} />
        </div>
        <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, textAlign: "right", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>I. Nahariya</div>
        <div style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.regular, color: c.gray500, textAlign: "right" }}>5th</div>
      </div>
    </div>
  </div>;
}

type LockSvgProps = { size?: number; fill?: string };
function LockSvg({ size = 11, fill = LIGHT.premiumYellow }: LockSvgProps) {
  const w = size;
  const h = size * (10 / 8);
  return <svg width={w} height={h} viewBox="0 0 8 10" fill="none"><path clipRule="evenodd" d="M7.02621 4.06889H6.73849L6.73733 2.70111C6.73616 1.21111 5.46535 -0.00110943 3.90332 1.67782e-06C2.3413 0.00111279 1.07048 1.21333 1.07164 2.70333L1.07397 4.07111H0.971466C0.434483 4.07222 -0.00115988 4.48778 4.94171e-06 5V9.07222C4.94171e-06 9.58444 0.436813 10 0.973795 10L7.02853 9.99667C7.56552 9.99667 8.00116 9.58111 8 9.06889V4.99556C8 4.48333 7.56319 4.06889 7.02621 4.06889ZM2.11765 4.07111L2.11532 2.70333C2.11532 1.76222 2.91672 0.996668 3.90332 0.995557C4.88992 0.995557 5.69248 1.76111 5.69248 2.70111L5.69481 4.06889L2.11765 4.07111Z" fill={fill} fillRule="evenodd" /></svg>;
}

type PVideoThumbnailProps = { orientation?: "landscape" | "portrait" | "vertical"; locked?: boolean; duration?: string; title?: string; subtitle?: string; showJerseyBadge?: boolean; jerseyNumber?: number; jerseyLabel?: string; jerseyColor?: string; thumbnailUrl?: string };


type PHighlightCardProps = { title?: string; date?: string; duration?: string; locked?: boolean; emoji?: string };
function PHighlightCard({ title = "Weiss with the dimes", date = "NOV 13, 2025", duration = "1:23", locked = true, emoji = "\uD83C\uDFC0" }: PHighlightCardProps) {
  const c = useColors();
  return <div style={{ position: "relative", width: 130, height: 190, borderRadius: T.radii.badge, overflow: "hidden", background: c.heroBg, flexShrink: 0 }}>
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)" }} />
    <div style={{ position: "absolute", top: 6, left: 6, background: "rgba(0,0,0,0.55)", borderRadius: T.radii.pill, padding: "1px 5px", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: F, fontWeight: T.typography.weights.medium, fontSize: T.typography.sizes.micro, color: "#FFFFFF", lineHeight: 1 }}>{duration}</span>
    </div>
    {locked
      ? <div style={{ position: "absolute", top: 6, right: 6, width: 24, height: 24, background: c.premiumDark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, border: `${T.strokes.medium}px solid ${c.premiumYellow}`, boxSizing: "border-box" }}><LockSvg size={8} fill={c.premiumYellow} /></div>
      : <div style={{ position: "absolute", top: 6, right: 6, width: 24, height: 24, borderRadius: "50%", background: c.gray500, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><Play size={10} color={c.jerseyStroke} fill={c.jerseyStroke} /></div>}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)", padding: "24px 8px 8px", zIndex: 1 }}>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.bold, color: c.white, lineHeight: "14px" }}>{emoji} {title}</div>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.micro, fontWeight: T.typography.weights.regular, color: c.gray300, marginTop: 3 }}>{date}</div>
    </div>
  </div>;
}



function PHighlightsBadge() {
  return <PBadge variant="highlights" />;
}

/* ── AthleteProfileCard — full athlete profile page, 390px, 1:1 Figma ── */

type AthleteProfileCardProps = {
  name?: string; number?: number | string; position?: string;
  teamName?: string; teamLogoUrl?: string; accentColor?: string; photoUrl?: string;
  onBack?: () => void; onShare?: () => void; onTeamTap?: () => void;
};
function AthleteProfileCard({
  name = "TAL WEISS", number = 1, position = "Guard",
  teamName = "S.D Spartans", teamLogoUrl, accentColor = "#007cbe", photoUrl,
  onBack, onShare, onTeamTap,
}: AthleteProfileCardProps) {
  const c = useColors();
  const nameParts = name.trim().toUpperCase().split(" ");
  const firstName = nameParts[0] ?? "";
  const lastName   = nameParts.slice(1).join(" ");
  const chevronR = <ChevronDown size={12} color={accentColor} style={{ transform: "rotate(-90deg)" }} />;

  return (
    <div style={{ width: 390, fontFamily: F, background: `linear-gradient(180deg,${c.white} 0%,${c.gray100} 25%,${c.gray200} 50%,${c.gray100} 75%,${c.white} 100%)`, overflowX: "hidden" }}>

      {/* ── Back + Share — uses DS PBackBar ── */}
      <PBackBar showShare onBack={onBack} onShare={onShare} padding="24px 16px 0" />

      {/* ── Athlete Details Card ── */}
      <div style={{ padding: "24px 16px 12px" }}>
        <div style={{ background: c.gray50, borderRadius: T.radii.badge, padding: `${T.spacing.xl}px ${T.spacing.lg}px`, display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
          {/* Photo — uses DS PPlayerPhoto */}
          <PPlayerPhoto size={120} name={name} photoUrl={photoUrl} />
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
            <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.medium, color: c.gray500, letterSpacing: "0.6px", textTransform: "uppercase" }}>
              #{number} |  {position}
            </div>
            <div style={{ fontFamily: F, fontSize: T.typography.sizes.h1, fontWeight: T.typography.weights.extraBold, color: c.darkText, textTransform: "uppercase", lineHeight: "30px" }}>
              <div>{firstName}</div>
              {lastName && <div>{lastName}</div>}
            </div>
            <button onClick={onTeamTap} aria-label={`View ${teamName} team`} style={{ display: "flex", gap: T.spacing.sm, alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              <PTeamLogo size={20} name={teamName} logoUrl={teamLogoUrl} />
              <span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: accentColor }}>{teamName}</span>
              {chevronR}
            </button>
          </div>
        </div>
      </div>

      {/* ── Career Stats Row 1: Minutes / Games / Tournaments ── */}
      <div style={{ padding: `0 ${T.spacing.lg}px`, display: "flex", gap: T.spacing.md }}>
        <PStatCard label="Minutes Played" labelLines={["Minutes","Played"]} value="1245" />
        <PStatCard label="Games Played" labelLines={["Games","Played"]} value="64" />
        <PStatCard label="Tournaments Played" value="18" />
      </div>

      {/* ── Career Stats Row 2: Points / Assists / Rebounds ── */}
      <div style={{ padding: `${T.spacing.md}px ${T.spacing.lg}px 0`, display: "flex", gap: T.spacing.md }}>
        <PStatCard label="Points Made" labelLines={["Points","Made"]} value="100" />
        <PStatCard label="Assists Made" labelLines={["Assists","Made"]} value="20" />
        <PStatCard label="Rebounds Made" labelLines={["Rebounds","Made"]} value="10" />
      </div>

      {/* ── My Highlights ── */}
      <div style={{ paddingTop: T.spacing.xxl }}>
        <div style={{ padding: "0 16px 24px" }}><PSectionHeader title="My Highlights" titleSize={24} /></div>
        <div style={{ display: "flex", gap: T.spacing.md2, padding: `0 ${T.spacing.lg}px`, marginBottom: T.spacing.md2 }}>
          <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="0:45" jerseyLabel={"Player\nHighlights"} />
          <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="1:23" jerseyLabel={"Player\nHighlights"} />
          <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="0:32" jerseyLabel={"Player\nHighlights"} />
        </div>
        <div style={{ display: "flex", gap: T.spacing.md2, padding: `0 ${T.spacing.lg}px` }}>
          <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="1:05" jerseyLabel={"Player\nHighlights"} />
          <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="0:55" jerseyLabel={"Player\nHighlights"} />
          <PVideoThumbnail orientation="vertical" showJerseyBadge jerseyNumber={1} duration="2:10" jerseyLabel={"Player\nHighlights"} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <PSeeAllLink label="See all" />
        </div>
      </div>

      {/* ── Season Stats ── */}
      <div style={{ padding: "0 16px 32px" }}>
        <PSectionHeader title="Season Stats" titleSize={24} />
        <div style={{ display: "flex", gap: T.spacing.md }}>
          <PStatCard label="MPG" value="23.4" />
          <PStatCard label="PPG" value="18.6" />
          <PStatCard label="APG" value="4.5" />
          <PStatCard label="RPG" value="3.2" />
        </div>
      </div>

    </div>
  );
}

/* ── Outline Social Icons (stroke-based, used by PSocialLinks & PFooter) ── */
type OutlineIconProps = { size?: number; color?: string; strokeWidth?: number };
const XOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.4L19.5 4h-2l-5.2 6.4L8 4H4z" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/></svg>;
const FacebookOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/></svg>;
const InstagramOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth={sw}/><circle cx="12" cy="12" r="5" stroke={color} strokeWidth={sw}/><circle cx="17.5" cy="6.5" r="1" fill={color}/></svg>;
const GlobeOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth={sw}/><ellipse cx="12" cy="12" rx="4" ry="10" stroke={color} strokeWidth={sw}/><path d="M2 12h20" stroke={color} strokeWidth={sw}/></svg>;
const YouTubeOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/></svg>;
const TikTokOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/></svg>;
const EmailOutlineIcon = ({ size = 20, color = "#7d899b", strokeWidth: sw = 1.5 }: OutlineIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth={sw}/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/></svg>;

/* ── PSocialLinks — row of social media icon buttons (outline) ── */


type PNotificationItemProps = { jerseyNumber?: number; text?: string };
function PNotificationItem({ jerseyNumber = 4, text = "\"Player #4 Highlight\" from the game \"S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)\" is now ready!" }: PNotificationItemProps) {
  const c = useColors();
  return <div style={{ display: "flex", gap: T.spacing.md, padding: `${T.spacing.md2}px 0`, borderBottom: `1px solid ${c.gray100}`, alignItems: "flex-start" }}>
    <div style={{ position: "relative", flexShrink: 0 }}>
      <svg width={50} height={50 * (67/73)} viewBox="0 0 73 73" fill="none">
        <path d={JERSEY_PATH_73} fill={c.jerseyRed} stroke={c.white} strokeWidth={T.strokes.thick} />
      </svg>
      <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -38%)", fontFamily: F, fontSize: T.typography.sizes.h3, fontWeight: T.typography.weights.extraBold, color: c.white }}>{jerseyNumber}</span>
    </div>
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.regular, color: c.black, lineHeight: 1.5, flex: 1 }}>{text}</span>
  </div>;
}



function PNotificationCenter() {
  const c = useColors();
  const [fo, setFo] = useState(false);
  var items = [
    { num: 4, text: "\"Player #4 Highlight\" from the game \"S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)\" is now ready!" },
    { num: 11, text: "\"Player #11 Highlight\" from the game \"S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)\" is now ready!" },
    { num: 4, text: "\"Player #4 Highlight\" from the game \"S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)\" is now ready!" },
  ];
  return <div role="region" aria-label="Notification Center" style={{ width: "100%", maxWidth: 380, background: c.white, borderRadius: T.radii.card, boxShadow: "0 8px 30px rgba(0,0,0,0.15)", overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: `1px solid ${c.gray100}` }}>
      <h3 style={{ margin: 0, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black }}>Notification Center</h3>
      <button onFocus={() => setFo(true)} onBlur={() => setFo(false)} aria-label="Clear all notifications" style={{ background: "none", border: "none", fontFamily: F, fontSize: T.typography.sizes.body2, color: c.gray400, cursor: "pointer", borderRadius: T.radii.sm, ...(fo ? focusRing(c) : {}) }}>Clear all</button>
    </div>
    <div style={{ padding: "0 20px", maxHeight: 320, overflowY: "auto" }}>
      {items.map(function(it, i) { return <PNotificationItem key={i} jerseyNumber={it.num} text={it.text} />; })}
    </div>
  </div>;
}



export { PLiveGameCard, PGameResultCard, PScoreCard, PHighlightCard, PHighlightsBadge, PNotificationItem, PNotificationCenter };
