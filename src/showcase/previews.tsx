import { type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { T, F, DEFAULTS } from "../tokens";
import { useColors } from "../theme";
import {
  PBrandHero,
  PBtn,
  PInput,
  PSelect,
  PTabs,
  PLink,
  PTextDivider,
  PJersey,
  PTeamRow,
  ChipLockSvg,
  AppleIcon,
  GoogleIcon,
  PixellotLogo,
} from "../primitives";

export type PropsBlockProps = { children?: ReactNode; variant?: "dark" | "light" };
export function PropsBlock({ children, variant = "dark" }: PropsBlockProps) {
  const c = useColors();
  const clr = variant === "muted" ? c.gray500 : variant === "subtle" ? c.gray400 : c.darkText;
  return <div style={{ fontSize: T.typography.sizes.body2, color: clr, lineHeight: 1.8, fontFamily: "monospace" }}>{children}</div>;
}

export type ProseBlockProps = { children?: ReactNode; variant?: "muted" | "default" };
export function ProseBlock({ children, variant = "muted" }: ProseBlockProps) {
  const c = useColors();
  const clr = variant === "subtle" ? c.gray400 : c.gray500;
  return <div style={{ fontSize: T.typography.sizes.body2, color: clr, lineHeight: 1.6 }}>{children}</div>;
}

export function PTypographyPreview() {
  const c = useColors();
  return (
    <div style={{ fontFamily: F, display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
      <div style={{ fontSize: T.typography.sizes.xxl, fontWeight: T.typography.weights.bold, color: c.darkText }}>Page Title — 24px Bold</div>
      <div style={{ fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, color: c.darkText }}>Section Heading — 22px Bold</div>
      <div style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.medium, color: c.darkText }}>Subtitle — 20px Medium</div>
      <div style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.darkText }}>Input / Body / Menu Item — 16px Medium</div>
      <div style={{ fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: c.gray400 }}>Button / Tab — 15px Medium</div>
      <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, color: c.white, background: c.heroBg, padding: "4px 10px", borderRadius: T.radii.thumb, display: "inline-block" }}>Video Label — 14px Semibold White</div>
      <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray400 }}>Link / Caption — 14px Medium</div>
      <div style={{ fontSize: T.typography.sizes.body2, fontWeight: T.typography.weights.regular, color: c.darkText }}>Notification Text — 13px Regular</div>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", background: c.highlightsBadgeBg, color: c.highlightsBadgeText, padding: "4px 12px", borderRadius: T.radii.badge, display: "inline-block" }}>Badge Label — 11px Bold Uppercase</div>
      <div style={{ fontSize: T.typography.sizes.jersey, fontWeight: T.typography.weights.bold, color: c.white, background: c.jerseyRed, width: 40, height: 40, borderRadius: T.radii.thumb, display: "flex", alignItems: "center", justifyContent: "center" }}>7</div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>Jersey Number — 29px Bold White</div>
    </div>
  );
}

export function PSpacingPreview() {
  const c = useColors();
  return (
    <div style={{ display: "flex", gap: T.spacing.md, flexWrap: "wrap", alignItems: "flex-end" }}>
      {Object.entries(T.spacing).map(([k, v]) => <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
        <div style={{ width: v, height: v, background: c.primary, borderRadius: 2, minWidth: 4, minHeight: 4 }} />
        <span style={{ fontSize: T.typography.sizes.mini, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{k}</span>
        <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400, fontFamily: "monospace" }}>{v}px</span>
      </div>)}
    </div>
  );
}

export function PSizesPreview() {
  const c = useColors();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.xs2 }}>
      {Object.entries(T.sizes).map(([k, v]) => <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 10px", background: c.gray50, borderRadius: T.radii.xs }}>
        <span style={{ fontSize: T.typography.sizes.caption, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{k}</span>
        <span style={{ fontSize: T.typography.sizes.caption, color: c.gray400, fontFamily: "monospace" }}>{v}px</span>
      </div>)}
    </div>
  );
}

export function PRadiiPreview() {
  const c = useColors();
  return (
    <div style={{ display: "flex", gap: T.spacing.lg, flexWrap: "wrap", alignItems: "flex-end" }}>
      {Object.entries(T.radii).map(([k, v]) => {
        const isPill = k === "pill";
        return <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
          <div style={{ width: isPill ? 80 : 48, height: isPill ? 32 : 48, background: c.primary, borderRadius: isPill ? v : Math.min(v, 24), opacity: 0.15 }} />
          <span style={{ fontSize: T.typography.sizes.mini, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{k}</span>
          <span style={{ fontSize: T.typography.sizes.mini, color: c.gray400, fontFamily: "monospace" }}>{v}px</span>
        </div>;
      })}
    </div>
  );
}

export function PChipStatesPreview() {
  const c = useColors();
  const base = { border: "none", borderRadius: T.radii.chip, padding: `${T.spacing.sm}px ${T.spacing.md}px`, fontSize: T.typography.sizes.base, height: 40, display: "flex", alignItems: "center", gap: T.spacing.sm, fontFamily: F, whiteSpace: "nowrap", flexShrink: 0, cursor: "default" };
  const rows = [
    { label: "active (selected)", states: [
      { s: "default",  style: { ...base, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white } },
      { s: "hover",    style: { ...base, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white } },
      { s: "pressed",  style: { ...base, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white } },
      { s: "disabled", style: { ...base, fontWeight: T.typography.weights.semibold, background: c.grayOverlay, color: c.gray400 } },
    ], chip: "Full Game", lock: false },
    { label: "inactive (free content)", states: [
      { s: "default",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray100, color: c.black } },
      { s: "hover",    style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray200, color: c.black } },
      { s: "pressed",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray300, color: c.black } },
      { s: "disabled", style: { ...base, fontWeight: T.typography.weights.regular, background: c.grayOverlay, color: c.gray400 } },
    ], chip: "Full Game", lock: false },
    { label: "inactive + lock (premium)", states: [
      { s: "default",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray100, color: c.black } },
      { s: "hover",    style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray200, color: c.black } },
      { s: "pressed",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray300, color: c.black } },
      { s: "disabled", style: { ...base, fontWeight: T.typography.weights.regular, background: c.grayOverlay, color: c.gray400 } },
    ], chip: "Condensed", lock: true },
  ];
  return <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.lg2 }}>
    {rows.map(r => <div key={r.label}>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>{r.label}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.sm }}>
        {r.states.map(({ s, style }) => <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs2 }}>
          <button style={style}>{r.lock && <ChipLockSvg />} {r.chip}</button>
          <span style={{ fontSize: T.typography.sizes.micro, color: c.gray400 }}>{s}</span>
        </div>)}
      </div>
    </div>)}
  </div>;
}

export function PChipAllActivePreview() {
  const c = useColors();
  const cb = { border: "none", borderRadius: T.radii.chip, padding: `${T.spacing.sm}px ${T.spacing.md}px`, fontSize: T.typography.sizes.base, height: 40, display: "flex", alignItems: "center", gap: T.spacing.sm, fontFamily: F, whiteSpace: "nowrap", flexShrink: 0 };
  const act = { ...cb, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white };
  const ina = { ...cb, fontWeight: T.typography.weights.regular, background: c.gray100, color: c.black };
  const row = { display: "flex", gap: T.spacing.md, flexWrap: "nowrap", overflowX: "auto" };
  return <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
    <div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>Full Game active</div>
      <div style={row}>
        <button style={act}>Full Game</button>
        <button style={ina}><ChipLockSvg /> Condensed Game</button>
        <button style={ina}><ChipLockSvg /> Game Highlights</button>
      </div>
    </div>
    <div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>Condensed Game active</div>
      <div style={row}>
        <button style={ina}>Full Game</button>
        <button style={act}><ChipLockSvg /> Condensed Game</button>
        <button style={ina}><ChipLockSvg /> Game Highlights</button>
      </div>
    </div>
    <div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.xs2 }}>Game Highlights active</div>
      <div style={row}>
        <button style={ina}>Full Game</button>
        <button style={ina}><ChipLockSvg /> Condensed Game</button>
        <button style={act}><ChipLockSvg /> Game Highlights</button>
      </div>
    </div>
  </div>;
}

export function PTeamRowPreview() {
  const c = useColors();
  return <>
    <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm2, background: c.gray100, borderRadius: T.radii.card, padding: T.spacing.lg }}>
      <PTeamRow name="M. Kiryat Gat" score="87" isWinner={true} />
      <PTeamRow name="H. Haifa" score="79" isWinner={false} />
    </div>
    <div style={{ marginTop: T.spacing.md, display: "flex", flexDirection: "column", gap: T.spacing.sm2, background: c.gray100, borderRadius: T.radii.card, padding: T.spacing.lg }}>
      <PTeamRow name="Maccabi Kiryat Gat" score="89" isWinner={true} logoSize={27} fontWeight={400} gap={8} />
      <PTeamRow name="Ironi Nahariya" score="77" isWinner={false} logoSize={27} fontWeight={400} gap={8} />
    </div>
    <p style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.sm }}>Top: LiveGameCard style (28px logo, 500 weight, 12px gap) · Bottom: GameResultCard style (27px logo, 400 weight, 8px gap)</p>
  </>;
}

export type PAuthPagePreviewProps = { tab: string; setTab: (v: string) => void };
export function PAuthPagePreview({ tab, setTab }: PAuthPagePreviewProps) {
  const c = useColors();
  return <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: 390, background: c.white, borderRadius: T.radii.lg, boxShadow: "0 4px 24px rgba(0,0,0,0.12)", overflow: "hidden" }}>
      <PBrandHero primaryColor="#1A3B8A" logoSize={80} height={340} />
      <div style={{ padding: `${T.spacing.md2}px ${T.spacing.md2}px 28px`, display: "flex", flexDirection: "column", gap: T.spacing.md2 }}>
        <PTabs tabs={[{ label: "Sign In", value: "signin" }, { label: "Sign Up", value: "signup" }]} active={tab} onSelect={setTab} />
        {tab === "signin" ? <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
          <h2 style={{ fontFamily: F, fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Sign In</h2>
          <PInput placeholder="Email Address..." type="email" /><PInput placeholder="Enter password..." type="password" />
          <PBtn>Sign in</PBtn>
          <div style={{ textAlign: "center" }}><PLink>Forgot password?</PLink></div>
          <PTextDivider />
          <PBtn variant="social"><AppleIcon />{" "}Continue with Apple</PBtn>
          <PBtn variant="social"><GoogleIcon />{" "}Continue with Google</PBtn>
        </div> : <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm2 }}>
          <h2 style={{ fontFamily: F, fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Create Account</h2>
          <PInput placeholder="Full Name..." /><PSelect placeholder="Age..." /><PInput placeholder="Phone Number..." type="tel" /><PInput placeholder="Email Address..." type="email" /><PInput placeholder="Create password..." type="password" />
          <PBtn>Create Account</PBtn><PTextDivider />
          <PBtn variant="social"><AppleIcon />{" "}Continue with Apple</PBtn>
          <PBtn variant="social"><GoogleIcon />{" "}Continue with Google</PBtn>
          <p style={{ textAlign: "center", fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray400, margin: 0 }}>Already have an account? <PLink variant="accent">Sign in</PLink></p>
        </div>}
      </div>
    </div>
  </div>;
}

export type POnboardingPreviewProps = { selJerseys: number[]; toggleJ: (n: number) => void };
export function POnboardingPreview({ selJerseys, toggleJ }: POnboardingPreviewProps) {
  const c = useColors();
  return <div style={{ display: "flex", justifyContent: "center", marginTop: T.spacing.md }}>
    <div style={{ width: 390, background: c.white, borderRadius: T.radii.lg, boxShadow: "0 4px 24px rgba(0,0,0,0.12)", overflow: "hidden", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 16px 0", height: 64 }}>
        <PixellotLogo size={42} />
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: c.darkText }}>Cancel</span>
      </div>
      <div style={{ padding: "28px 16px 90px", display: "flex", flexDirection: "column", gap: T.spacing.xl }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: F, fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Select the players you want to follow</h1>
          <p style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.darkText, margin: "8px 0 0" }}>To personalize your experience, choose the player&apos;s jersey number you want to follow.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.lg2 }}>
          <h2 style={{ fontFamily: F, fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Maccabi Kiryat Gat</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 18, padding: `0 ${T.spacing.xs}px` }}>
            {[1,2,3,4].map(n => <PJersey key={n} number={n} selected={selJerseys.includes(n)} onClick={() => toggleJ(n)} />)}
          </div>
          <PBtn variant="muted">See All <ChevronDown size={16} /></PBtn>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 32px 20px", background: c.white }}>
        <PBtn>Finish</PBtn>
      </div>
    </div>
  </div>;
}
