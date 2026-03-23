import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu, Share2 } from "lucide-react";
import { useColors, T, F, DEFAULTS, _isLightColor, focusRing, JERSEY_PATH_73, JERSEY_PATH_56, IconComponent } from "../utils";

type PInputProps = { placeholder?: string; type?: string; error?: boolean; errorMsg?: string; disabled?: boolean; readOnly?: boolean; value?: string; _forceState?: string; ariaLabel?: string };
function PInput({ placeholder, type = "text", error = false, errorMsg = "", disabled = false, readOnly = false, value, _forceState, ariaLabel }: PInputProps) {
  const c = useColors();
  const [show, setShow] = useState(false);
  const [fo, setFo] = useState(false);
  var bg = c.gray100;
  var bd = "2px solid transparent";
  var clr = c.black;
  var cur = "text";
  var iconClr = c.gray400;
  if (_forceState === "hover") { bg = c.gray200; }
  if (_forceState === "focus" || fo) { bd = error ? `2px solid ${c.errorRed}` : `2px solid ${c.primary}`; }
  if (_forceState === "disabled" || disabled) { bg = c.grayOverlay; clr = c.gray400; cur = "not-allowed"; iconClr = c.disabledTextOnDark; }
  if (_forceState === "readOnly" || readOnly) { bg = c.gray50; clr = c.gray500; cur = "default"; }
  if (error && _forceState !== "focus" && !fo && _forceState !== "disabled") { bd = `2px solid ${c.errorRed}`; }
  if (error && _forceState === "hover") { bg = c.gray200; bd = `2px solid ${c.errorRed}`; }
  var isDis = disabled || _forceState === "disabled";
  var isRO = readOnly || _forceState === "readOnly";
  const errId = error && errorMsg ? "pinput-err-" + (placeholder || "").replace(/\s/g, "") : undefined;
  return <div style={{ width: "100%" }}>
    <div style={{ position: "relative" }}>
      <input type={type === "password" && show ? "text" : type}
        placeholder={_forceState === "filled" || _forceState === "readOnly" ? "" : placeholder}
        defaultValue={_forceState === "filled" || _forceState === "readOnly" ? (value || placeholder) : value}
        disabled={isDis}
        readOnly={isRO || _forceState === "filled"}
        aria-label={ariaLabel || placeholder}
        aria-invalid={error || undefined}
        aria-describedby={errId}
        aria-readonly={isRO || undefined}
        onFocus={() => setFo(true)} onBlur={() => setFo(false)}
        style={{ width: "100%", height: T.sizes.inputHeight, background: bg, border: bd, borderRadius: T.radii.lg, padding: `4px ${T.spacing.lg}px`, fontFamily: F, fontSize: T.typography.sizes.base, color: clr, outline: "none", boxSizing: "border-box", paddingRight: type === "password" ? 44 : T.spacing.lg, cursor: cur }} />
      {type === "password" && <button onClick={() => setShow(!show)} disabled={isDis} aria-label={show ? "Hide password" : "Show password"} style={{ position: "absolute", right: 14, top: 14, background: "none", border: "none", cursor: isDis ? "not-allowed" : "pointer", color: iconClr, display: "flex", borderRadius: T.radii.sm }}>
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>}
    </div>
    {error && errorMsg ? <span id={errId} style={{ fontFamily: F, fontSize: T.typography.sizes.caption, color: c.errorRed, marginTop: T.spacing.xs, display: "block", paddingLeft: T.spacing.lg }}>{errorMsg}</span> : null}
  </div>;
}


type PSelectProps = { placeholder?: string; error?: boolean; errorMsg?: string; disabled?: boolean; _forceState?: string; ariaLabel?: string };
function PSelect({ placeholder, error = false, errorMsg = "", disabled = false, _forceState, ariaLabel }: PSelectProps) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  var bg = c.gray100;
  var bd = "2px solid transparent";
  var clr = c.gray400;
  var cur: string = "pointer";
  var chevClr = c.gray400;
  if (_forceState === "hover") { bg = c.gray200; }
  if (_forceState === "focus" || fo) { bd = error ? `2px solid ${c.errorRed}` : `2px solid ${c.primary}`; }
  if (_forceState === "disabled" || disabled) { bg = c.grayOverlay; clr = c.disabledTextOnDark; cur = "not-allowed"; chevClr = c.disabledTextOnDark; }
  if (error && _forceState !== "focus" && !fo && _forceState !== "disabled") { bd = `2px solid ${c.errorRed}`; }
  var isDis = disabled || _forceState === "disabled";
  const errId = error && errorMsg ? "pselect-err-" + (placeholder || "").replace(/\s/g, "") : undefined;
  return <div style={{ width: "100%" }}>
    <div style={{ position: "relative" }}>
      <select aria-label={ariaLabel || placeholder} disabled={isDis} aria-invalid={error || undefined} aria-describedby={errId}
        onFocus={() => setFo(true)} onBlur={() => setFo(false)}
        style={{ width: "100%", height: T.sizes.inputHeight, background: bg, border: bd, borderRadius: T.radii.lg, padding: `4px ${T.spacing.lg}px`, fontFamily: F, fontSize: T.typography.sizes.base, color: clr, appearance: "none", outline: "none", boxSizing: "border-box", cursor: cur }}>
        <option>{placeholder}</option>
      </select>
      <ChevronDown size={T.typography.sizes.base} style={{ position: "absolute", right: T.spacing.lg, top: "50%", transform: "translateY(-50%)", color: chevClr, pointerEvents: "none" }} />
    </div>
    {error && errorMsg ? <span id={errId} style={{ fontFamily: F, fontSize: T.typography.sizes.caption, color: c.errorRed, marginTop: T.spacing.xs, display: "block", paddingLeft: T.spacing.lg }}>{errorMsg}</span> : null}
  </div>;
}


type PSearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  readOnly?: boolean;
  disabled?: boolean;

/* ── Search & Navigation ── */
  onClick?: () => void;
  iconSize?: number;
  autoFocus?: boolean;
};
function PSearchBar({ placeholder = "Search...", value, onChange, onClear, readOnly = false, disabled = false, onClick, iconSize = 18, autoFocus = false }: PSearchBarProps) {
  const c = useColors();
  const [focused, setFocused] = useState(false);
  const hasValue = value !== undefined && value !== "";
  return (
    <div style={{ position: "relative" }} onClick={readOnly && !disabled ? onClick : undefined}>
      <Search size={iconSize} color={disabled ? c.gray200 : c.gray400} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e: any) => onChange(e.target.value) : undefined}
        readOnly={readOnly}
        disabled={disabled}
        autoFocus={autoFocus}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: hasValue && onClear ? "12px 40px 12px 42px" : "12px 12px 12px 42px",
          borderRadius: T.radii.pill,
          border: focused ? `2px solid ${c.primary}` : "2px solid transparent",
          background: disabled ? c.gray100 : c.gray50,
          fontFamily: F,
          fontSize: T.typography.sizes.xs,
          color: disabled ? c.gray300 : readOnly ? c.gray400 : c.darkText,
          outline: "none",
          boxSizing: "border-box" as any,
          cursor: disabled ? "not-allowed" : readOnly ? "pointer" : undefined,
          opacity: disabled ? 0.6 : 1,
        }}
      />
      {hasValue && onClear && !disabled && (
        <button onClick={(e) => { e.stopPropagation(); onClear(); }} aria-label="Clear search" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <X size={16} color={c.gray400} />
        </button>
      )}
    </div>
  );
}

// ════════════════════════════════
// BACK BAR
// ════════════════════════════════



export { PInput, PSelect, PSearchBar };
