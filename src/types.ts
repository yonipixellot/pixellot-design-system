/**
 * Pixellot Design System — Public Type Definitions
 *
 * Import these types for type-safe component usage:
 *   import type { PBtnProps, PInputProps, ThemeMode } from "@pixellot/design-system/types";
 */

import type { CSSProperties, ReactNode } from "react";

// ── Theme ──
export type ThemeMode = "light" | "dark";
export type ColorPalette = typeof import("./tokens").LIGHT;

// ── Shared ──
export type IconComponent = React.ComponentType<{
  size?: number;
  color?: string;
  fill?: string;
  style?: CSSProperties;
}>;

// ── Inputs ──
export interface PInputProps {
  placeholder?: string;
  type?: string;
  error?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  _forceState?: string;
  ariaLabel?: string;
}

export interface PSelectProps {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface PSearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  readOnly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  iconSize?: number;
  autoFocus?: boolean;
}

// ── Buttons ──
export interface PBtnProps {
  variant?: "primary" | "secondary" | "muted" | "premium" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export interface PLinkProps {
  href?: string;
  children?: ReactNode;
  variant?: "default" | "muted";
}

// ── Badges ──
export type PBadgeVariant = "live" | "premium" | "free" | "claimed" | "highlights";

export interface PBadgeProps {
  variant?: PBadgeVariant;
}

export interface PBellIconProps {
  count?: number;
}

export interface PTeamLogoProps {
  size?: number;
  name?: string;
  logoUrl?: string;
}

export interface PAvatarProps {
  size?: number;
  name?: string;
  photoUrl?: string;
}

export interface PPlayerPhotoProps {
  size?: number;
  name?: string;
  photoUrl?: string;
}

export interface PPlayerNumberBadgeProps {
  number?: number;
  color?: string;
  size?: number;
}

// ── Cards ──
export interface PLiveGameCardProps {
  /* Uses default demo data — extend as needed */
}

export interface PGameResultCardProps {
  winner?: boolean;
}

export interface PScoreCardProps {
  teamA?: string;
  teamB?: string;
  scoreA?: number;
  scoreB?: number;
}

export interface PHighlightCardProps {
  title?: string;
  date?: string;
  duration?: string;
  locked?: boolean;
  emoji?: string;
}

export interface PNotificationItemProps {
  jerseyNumber?: number;
  text?: string;
}

// ── Media ──
export interface PVideoThumbnailProps {
  orientation?: "landscape" | "portrait" | "vertical";
  locked?: boolean;
  duration?: string;
  title?: string;
  subtitle?: string;
  showJerseyBadge?: boolean;
  jerseyNumber?: number;
  jerseyLabel?: string;
  jerseyColor?: string;
  thumbnailUrl?: string;
}

export interface PBrandHeroProps {
  primaryColor?: string;
  logo?: ReactNode;
  logoSize?: number;
  height?: number;
}

// ── Layout ──
export interface PDividerProps {
  color?: string;
  thickness?: number;
  spacing?: number;
  vertical?: boolean;
  style?: CSSProperties;
}

export interface PBackBarProps {
  label?: string;
  showShare?: boolean;
  onBack?: () => void;
  onShare?: () => void;
  padding?: string;
}

export interface PSectionHeaderProps {
  title?: string;
  seeAll?: boolean;
  onClick?: () => void;
  titleSize?: number;
}

// ── Navigation ──
export interface PAppHeaderProps {
  title?: string;
  showBack?: boolean;
  showBell?: boolean;
  bellCount?: number;
  onBack?: () => void;
}

export interface PBottomTabBarProps {
  tabs?: Array<{ id: string; label: string; icon?: any }>;
  active?: string;
  onTabChange?: (id: string) => void;
}

export type PSideMenuVariant = "default" | "profile";

export interface PSideMenuProps {
  variant?: PSideMenuVariant;
  open?: boolean;
  onClose?: () => void;
}

// ── Stats ──
export interface PTeamRowProps {
  name?: string;
  score?: string;
  isWinner?: boolean;
  logoSize?: number;
  fontSize?: number;
  fontWeight?: number;
  gap?: number;
}

export interface PStatsGridProps {
  stats?: Array<{ label: string; value: string }>;
}

export interface PStatCardProps {
  label?: string;
  value?: string;
  labelLines?: number;
}

// ── Players ──
export interface PJerseyProps {
  number?: number;
  selected?: boolean;
  onClick?: () => void;
  color?: string;
}

export interface PClaimedPlayerCardProps {
  teamName?: string;
  playerName?: string;
  number?: number;
  position?: string;
  height?: string;
}

// ── States ──
export interface PEmptyStateProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
}

export interface PErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

// ── Social / Follow ──
export interface PTeamFollowCardProps {
  name?: string;
  sport?: string;
  logoUrl?: string;
  selected?: boolean;
  onToggle?: () => void;
}

export interface PFollowingRowProps {
  avatar?: ReactNode;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  borderBottom?: boolean;
}

// ── Accordion ──
export interface PAccordionItem {
  title: string | ReactNode;
  content: ReactNode;
}

export interface PAccordionProps {
  items: PAccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number | null;
  headerStyle?: CSSProperties;
  activeHeaderStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  chevronSize?: number;
  borderless?: boolean;
}
