import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

import { PBtn } from "./buttons";

type PFollowingRowProps = {
  avatar: ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  borderBottom?: boolean;

/* ── Following & Rows ── */
};
function PFollowingRow({ avatar, title, subtitle, action, borderBottom = true }: PFollowingRowProps) {
  const c = useColors();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md, padding: `${T.spacing.md}px 0`, borderBottom: borderBottom ? `1px solid ${c.gray100}` : "none" }}>
      {avatar}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.semibold, color: c.darkText, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
        {subtitle && <div style={{ fontFamily: F, fontSize: T.typography.sizes.caption, color: c.gray400, marginTop: T.spacing.xxs }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}

// ════════════════════════════════
// DIVIDER
// ════════════════════════════════



type PMenuListItemProps = { label: string; badge?: number; variant?: "default" | "link" | "danger"; onClick?: () => void; _forceState?: string };
function PMenuListItem({ label, badge, variant = "default", onClick, _forceState }: PMenuListItemProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [fo, setFo] = useState(false);
  const state = _forceState || (pressed ? "active" : hovered ? "hover" : "default");
  var clr = variant === "link" ? c.primary : variant === "danger" ? c.errorRed : c.black;
  var bg = state === "active" ? c.cardHoverBg : state === "hover" ? c.gray50 : "transparent";
  return <button onClick={onClick} aria-label={label} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)}
    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: `${T.spacing.lg}px ${T.spacing.sm}px`, margin: "0 -8px", background: bg, border: "none", borderBottom: `1px solid ${c.gray100}`, cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, color: clr, textAlign: "left", borderRadius: state !== "default" ? 8 : 0, transition: "background 0.15s", ...(fo ? focusRing(c) : {}) }}>
    <span>{label}{badge !== undefined && <span style={{ color: c.primary, marginLeft: T.spacing.xs }}>({badge})</span>}</span>
    {variant !== "danger" && <ChevronDown size={16} color={c.gray400} style={{ transform: "rotate(-90deg)" }} />}
  </button>;
}



type PAccordionProps = {
  items: PAccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string | null;
  headerStyle?: CSSProperties;
  activeHeaderStyle?: CSSProperties;
  contentStyle?: CSSProperties;

/* ── Accordion & Navigation ── */
  chevronSize?: number;
  borderless?: boolean;
};

function PAccordion({ items, allowMultiple = false, defaultOpen = null, headerStyle = {}, activeHeaderStyle = {}, contentStyle = {}, chevronSize = 18, borderless = false }: PAccordionProps) {
  const c = useColors();
  const [openIds, setOpenIds] = useState<Set<string>>(defaultOpen ? new Set([defaultOpen]) : new Set());

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  return (
    <div>
      {items.map(item => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} style={{ borderBottom: borderless ? "none" : `1px solid ${c.gray100}` }}>
            <button onClick={() => toggle(item.id)}
              aria-expanded={isOpen} aria-label={typeof item.header === "string" ? item.header : "Toggle section"}
              style={{ display: "flex", alignItems: "center", width: "100%", padding: `${T.spacing.md2}px 0`, background: "none", border: "none", cursor: "pointer", gap: T.spacing.md, ...headerStyle, ...(isOpen ? activeHeaderStyle : {}) }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: T.spacing.md, textAlign: "left" }}>{item.header}</div>
              <ChevronDown size={chevronSize} color={c.gray400}
                aria-hidden="true"
                style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.2s", flexShrink: 0 }} />
            </button>
            {isOpen && <div role="region" style={{ paddingBottom: T.spacing.lg, ...contentStyle }}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

// ════════════════════════════════
// BOTTOM TAB BAR
// ════════════════════════════════

type BottomTab = { id: string; label: string; icon: "games" | "saved" | "following" | "shop" };


export { PFollowingRow, PMenuListItem, PAccordion };
