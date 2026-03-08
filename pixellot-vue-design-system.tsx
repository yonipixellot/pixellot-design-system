import { useState, useRef, useEffect, createContext, useContext, type ReactNode, type CSSProperties } from "react";
import { Eye, EyeOff, ChevronDown, Copy, Check, Search, Play, X, ArrowLeft, Download, Upload, Bookmark, Bell, User, Sun, Moon, Menu } from "lucide-react";

type IconComponent = React.ComponentType<{ size?: number; color?: string; fill?: string; style?: CSSProperties }>;

const LIGHT = {
  primary: "#116DFF", primaryHover: "#0D5AD4", primaryActive: "#0A4AB0",
  white: "#FFFFFF", black: "#000000", darkText: "#161616",
  gray50: "#F5F5F5", gray100: "#EDEDED", gray200: "#C7CBD0", gray300: "#DCDCDC", gray400: "#979797", gray500: "#6C6C6C",
  grayOverlay: "rgba(237,237,238,0.6)", grayOverlayHover: "rgba(237,237,238,0.8)",
  heroBg: "#1A3B8A", accent: "#E8332B",
  jerseyRed: "#D0142C", jerseyStroke: "#FFFFFF",
  premiumYellow: "#FFE000", premiumAmber: "#E7A610", premiumHover: "#E7A610", premiumActive: "#D4960E", premiumDark: "#362F2C",
  freeBadgeGreen: "#22C55E", claimedPurple: "#8B5CF6",
  infoBgPurple: "rgba(139,92,246,0.08)", linkBlue: "#2563EB", liveRed: "#EF4444",
  highlightGray: "#6C6C6C", cardBg: "#F3F4F6",
  barRed: "#E8332B", barGray: "#AFB6C1", barTrack: "#EEEEEE",
  dividerDark: "#444746",
  successGreen: "#22C55E", errorRed: "#EF4444",
  overlay: "rgba(0,0,0,0.7)", notifBadgeRed: "#EF4444",
  highlightsBadgeBg: "#6C6C6C", highlightsBadgeText: "#FFE000",
  cardHoverBg: "#F0F0F0", disabledTextOnDark: "rgba(255,255,255,0.35)",
  dangerRed: "#EF4444",
};

const DARK = {
  primary: "#3B8BFF", primaryHover: "#5A9FFF", primaryActive: "#2563EB",
  white: "#1A1A1A", black: "#FFFFFF", darkText: "#E8E8E8",
  gray50: "#262626", gray100: "#333333", gray200: "#444444", gray300: "#555555", gray400: "#888888", gray500: "#A0A0A0",
  grayOverlay: "rgba(255,255,255,0.08)", grayOverlayHover: "rgba(255,255,255,0.12)",
  heroBg: "#0F2557", accent: "#E8332B",
  jerseyRed: "#D0142C", jerseyStroke: "#FFFFFF",
  premiumYellow: "#FFE000", premiumAmber: "#E7A610", premiumHover: "#F5B800", premiumActive: "#E7A610", premiumDark: "#362F2C",
  freeBadgeGreen: "#22C55E", claimedPurple: "#A78BFA",
  infoBgPurple: "rgba(167,139,250,0.1)", linkBlue: "#60A5FA", liveRed: "#EF4444",
  highlightGray: "#A0A0A0", cardBg: "#262626",
  barRed: "#E8332B", barGray: "#666666", barTrack: "#333333",
  dividerDark: "#555555",
  successGreen: "#34D399", errorRed: "#FF6B6B",
  overlay: "rgba(0,0,0,0.85)", notifBadgeRed: "#EF4444",
  highlightsBadgeBg: "#444444", highlightsBadgeText: "#FFE000",
  cardHoverBg: "#333333", disabledTextOnDark: "rgba(200,200,200,0.35)",
  dangerRed: "#FF6B6B",
};

const ThemeCtx = createContext("light");
function useColors() { const th = useContext(ThemeCtx); return th === "dark" ? DARK : LIGHT; }
function useThemeMode() { return useContext(ThemeCtx); }
const focusRing = (c) => ({ outline: `2px solid ${c.primary}`, outlineOffset: 2 });

const T = {
  typography: {
    sizes:   { xxs: 11, xs: 14, sm: 15, base: 16, lg: 20, xl: 22, xxl: 24, jersey: 29 },
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    /* Named text styles — semantic shortcuts */
    notifText:   { fontSize: 13, fontWeight: 400 },
    menuItem:    { fontSize: 16, fontWeight: 500 },
    badgeLabel:  { fontSize: 11, fontWeight: 700, textTransform: "uppercase" },
    videoLabel:  { fontSize: 14, fontWeight: 600, color: "#FFFFFF" },
  },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 34 },
  sizes: {
    inputHeight: 46, buttonSm: 32, buttonMd: 40, buttonLg: 48,
    tabHeight: 38, chipHeight: 40, topBarHeight: 72,
    containerWidth: 398, pageMaxWidth: 430, heroHeight: 340,
    jerseySize: 73, logoSmall: 48,
  },
  radii: { sm: 4, md: 16, lg: 20, xl: 32, badge: 12, chip: 26, pill: 9999 },
  strokes: { thin: 0.67, regular: 1, medium: 1.33, thick: 1.7, bold: 2, heavy: 2.5, extraHeavy: 2.67 },
  breakpoints: { mobile: 768, tablet: 1024 },
};

const F = "'Red Hat Display', sans-serif";


const C = {};

C.tokens = `// tokens/index.ts
export const lightColors = {
  primary:      '#116DFF',
  primaryHover: '#0D5AD4',
  primaryActive:'#0A4AB0',
  white:        '#FFFFFF',
  black:        '#000000',
  darkText:     '#161616',
  gray50:       '#F5F5F5',
  gray100:      '#EDEDED',
  gray200:      '#C7CBD0',
  gray300:      '#DCDCDC',
  gray400:      '#979797',
  gray500:      '#6C6C6C',
  grayOverlay:  'rgba(237,237,237,0.6)',
  heroBg:       '#1A3B8A',
  accent:       '#E8332B',
  jerseyRed:    '#D0142C',
  premiumYellow: '#FFE000',
  premiumAmber:  '#E7A610',
  premiumHover:  '#E7A610',
  premiumActive: '#D4960E',
  premiumDark:   '#362F2C',
  freeBadgeGreen: '#22C55E',
  claimedPurple: '#8B5CF6',
  infoBgPurple:  'rgba(139,92,246,0.08)',
  linkBlue:      '#2563EB',
  liveRed:       '#EF4444',
  highlightGray: '#6C6C6C',
  cardBg:        '#F3F4F6',
  successGreen:  '#22C55E',
  errorRed:      '#EF4444',
  overlay:       'rgba(0,0,0,0.7)',
  notifBadgeRed: '#EF4444',
  cardHoverBg:   '#F0F0F0',
  disabledTextOnDark: 'rgba(255,255,255,0.35)',
  dangerRed:     '#EF4444',
}

export const darkColors = {
  primary:      '#3B8BFF',
  primaryHover: '#5A9FFF',
  primaryActive:'#2563EB',
  white:        '#1A1A1A',
  black:        '#FFFFFF',
  darkText:     '#E8E8E8',
  gray50:       '#262626',
  gray100:      '#333333',
  gray200:      '#444444',
  gray300:      '#555555',
  gray400:      '#888888',
  gray500:      '#A0A0A0',
  grayOverlay:  'rgba(255,255,255,0.08)',
  heroBg:       '#0F2557',
  accent:       '#E8332B',
  jerseyRed:    '#D0142C',
  premiumYellow: '#FFE000',
  premiumAmber:  '#E7A610',
  premiumHover:  '#F5B800',
  premiumActive: '#E7A610',
  premiumDark:   '#362F2C',
  freeBadgeGreen: '#22C55E',
  claimedPurple: '#A78BFA',
  infoBgPurple:  'rgba(167,139,250,0.1)',
  linkBlue:      '#60A5FA',
  liveRed:       '#EF4444',
  highlightGray: '#A0A0A0',
  cardBg:        '#262626',
  successGreen:  '#34D399',
  errorRed:      '#FF6B6B',
  overlay:       'rgba(0,0,0,0.85)',
  notifBadgeRed: '#EF4444',
  cardHoverBg:   '#333333',
  disabledTextOnDark: 'rgba(200,200,200,0.35)',
  dangerRed:     '#FF6B6B',
}

// composable: useTheme()
// const theme = ref<'light'|'dark'>('light')
// const colors = computed(() => theme.value === 'dark' ? darkColors : lightColors)

export const typography = {
  fontFamily: '"Red Hat Display", sans-serif',
  sizes: {
    xxs: '11px',  xs: '14px',  sm: '15px',  base: '16px',
    lg: '20px',   xl: '22px',  xxl: '24px', jersey: '29px',
  },
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
}

export const radii = { sm: '4px', md: '16px', lg: '20px', xl: '32px' }
export const spacing = { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px', xxl: '32px', xxxl: '34px' }
export const sizes = {
  inputHeight: '46px', buttonHeight: '40px', tabHeight: '38px',
  topBarHeight: '72px', containerWidth: '398px', pageMaxWidth: '430px',
  heroHeight: '340px', jerseySize: '73px', logoSmall: '48px',
}
export const strokes = {
  thin: '0.67px', regular: '1px', medium: '1.33px',
  thick: '1.7px', bold: '2px', heavy: '2.5px', extraHeavy: '2.67px',
}
export const breakpoints = { mobile: '768px', tablet: '1024px' }

// Focus ring utility — apply on :focus-visible
// .focus-ring:focus-visible { outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px; }`;

C.appInput = `<template>
  <div class="app-input"
    :class="{ 'app-input--error': error, 'app-input--disabled': disabled }">
    <input :type="computedType" :placeholder="placeholder"
      :value="modelValue" :disabled="disabled"
      :aria-label="ariaLabel || placeholder"
      :aria-invalid="error || undefined"
      :aria-describedby="error && errorMsg ? errorId : undefined"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="isFocused = true" @blur="isFocused = false"
      class="focus-ring" />
    <button v-if="type === 'password'" class="app-input__toggle focus-ring"
      :aria-label="showPwd ? 'Hide password' : 'Show password'"
      @click="showPwd = !showPwd" type="button" :disabled="disabled">
      <EyeIcon v-if="!showPwd" :size="18" />
      <EyeOffIcon v-else :size="18" />
    </button>
    <span v-if="error && errorMsg" :id="errorId" class="app-input__error">
      {{ errorMsg }}
    </span>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue
const props = defineProps<{
  modelValue?: string
  placeholder?: string
  type?: string
  error?: boolean
  errorMsg?: string
  disabled?: boolean
  ariaLabel?: string
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
const showPwd = ref(false)
const isFocused = ref(false)
const computedType = computed(() => props.type === 'password' && showPwd.value ? 'text' : props.type)
const errorId = computed(() => 'err-' + (props.placeholder || '').replace(/\\s/g, ''))
</script>
<style scoped>
.app-input { position: relative; width: 100%; }
.app-input input {
  width: 100%; height: 46px; padding: 8px 16px;
  font-family: 'Red Hat Display', sans-serif; font-size: 16px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
  border: 2px solid transparent; border-radius: 20px;
  outline: none; transition: all 0.15s;
}
.app-input input::placeholder {
  color: var(--color-gray-400, #979797);
}
.app-input input:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
}
.app-input input:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-input--error input {
  border: 2px solid var(--color-error-red, #EF4444);
}
.app-input--disabled input {
  background: var(--color-gray-overlay, rgba(237,237,237,0.6));
  color: var(--color-gray-400, #979797); cursor: not-allowed; opacity: 0.5;
}
.app-input__toggle {
  position: absolute; right: 14px; top: 14px;
  background: none; border: none; cursor: pointer;
  color: var(--color-gray-400, #979797); display: flex;
  border-radius: 4px; transition: color 0.15s;
}
.app-input__toggle:hover:not(:disabled) {
  color: var(--color-gray-500, #6C6C6C);
}
.app-input__toggle:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-input__toggle:disabled {
  cursor: not-allowed; opacity: 0.5;
}
.app-input__error {
  font-family: 'Red Hat Display', sans-serif; font-size: 12px;
  color: var(--color-error-red, #EF4444);
  display: block; margin-top: 4px; padding-left: 16px;
}
@media (prefers-color-scheme: dark) {
  .app-input input {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-input input::placeholder {
    color: var(--color-gray-400-dark, #888888);
  }
  .app-input input:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
  }
  .app-input--disabled input {
    background: var(--color-gray-overlay-dark, rgba(255,255,255,0.08));
  }
}
</style>`;

C.appSelect = `<template>
  <div class="app-select">
    <select :value="modelValue" :aria-label="ariaLabel || placeholder"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <ChevronDownIcon :size="16" class="app-select__icon" />
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  ariaLabel?: string
  options?: Array<{ label: string; value: string }>
}>()
withDefaults(props, {
  options: () => [
    { label: '18', value: '18' },
    { label: '25', value: '25' },
    { label: '35+', value: '35' },
  ],
})
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<style scoped>
.app-select { position: relative; width: 100%; }
.app-select select {
  width: 100%; height: 46px; padding: 8px 16px 8px 16px;
  font-family: 'Red Hat Display', sans-serif; font-size: 16px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
  border: 2px solid transparent; border-radius: 20px;
  appearance: none; cursor: pointer; outline: none;
  transition: all 0.15s; padding-right: 40px;
}
.app-select select::placeholder {
  color: var(--color-gray-400, #979797);
}
.app-select select:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.app-select select:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-select__icon {
  position: absolute; right: 14px; top: 50%;
  transform: translateY(-50%); pointer-events: none;
  color: var(--color-gray-400, #979797);
}
@media (prefers-color-scheme: dark) {
  .app-select select {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-select select:hover {
    background: var(--color-gray-200-dark, #444444);
  }
}
</style>`;

C.appButton = `<template>
  <button
    :class="[
      'app-button',
      \`app-button--\${variant}\`,
      \`app-button--\${size}\`,
      { 'app-button--icon-only': iconOnly, 'app-button--full-width': fullWidth, 'app-button--disabled': disabled }
    ]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <span v-if="\$slots.leading" class="app-button__icon"><slot name="leading" /></span>
    <slot v-if="!iconOnly" />
    <span v-if="\$slots.trailing" class="app-button__icon"><slot name="trailing" /></span>
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  variant?:   'primary' | 'premium' | 'social' | 'muted' | 'ghost' | 'link' | 'danger'
  size?:      'sm' | 'md' | 'lg'
  iconOnly?:  boolean
  fullWidth?: boolean
  disabled?:  boolean
  ariaLabel?: string
}>()
withDefaults(props, {
  variant: 'primary',
  size: 'md',
  iconOnly: false,
  fullWidth: true,
  disabled: false,
})
defineEmits<{ click: [] }>()
</script>
<style scoped>
.app-button {
  font-family: 'Red Hat Display', sans-serif; font-weight: 600;
  border: none; border-radius: 20px; cursor: pointer;
  transition: all 0.15s; display: flex; align-items: center;
  justify-content: center; gap: 8px; outline: none;
}
.app-button:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-button--sm { height: 32px; font-size: 14px; padding: 0 12px; }
.app-button--md { height: 40px; font-size: 15px; padding: 0 16px; }
.app-button--lg { height: 48px; font-size: 16px; padding: 0 24px; }
.app-button--full-width { width: 100%; }
.app-button--icon-only { padding: 0; min-width: 32px; width: 40px; }

/* Primary variant */
.app-button--primary {
  background: var(--color-primary, #116DFF); color: #FFFFFF;
}
.app-button--primary:hover:not(:disabled) {
  background: var(--color-primary-hover, #0D5AD4);
}
.app-button--primary:active:not(:disabled) {
  background: var(--color-primary-active, #0A4AB0);
}

/* Premium variant */
.app-button--premium {
  background: var(--color-premium-amber, #E7A610); color: #000000;
}
.app-button--premium:hover:not(:disabled) {
  background: var(--color-premium-hover, #E7A610);
}
.app-button--premium:active:not(:disabled) {
  background: var(--color-premium-active, #D4960E);
}

/* Muted variant */
.app-button--muted {
  background: var(--color-gray-100, #EDEDED); color: var(--color-dark-text, #161616);
}
.app-button--muted:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
}
.app-button--muted:active:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
}

/* Ghost variant */
.app-button--ghost {
  background: transparent; color: var(--color-dark-text, #161616);
  border: 2px solid var(--color-gray-200, #C7CBD0);
}
.app-button--ghost:hover:not(:disabled) {
  background: var(--color-gray-100, #EDEDED);
}

/* Link variant */
.app-button--link {
  background: transparent; color: var(--color-link-blue, #2563EB);
  text-decoration: underline;
}
.app-button--link:hover:not(:disabled) {
  opacity: 0.8;
}

/* Danger variant */
.app-button--danger {
  background: var(--color-danger-red, #EF4444); color: #FFFFFF;
}
.app-button--danger:hover:not(:disabled) {
  background: var(--color-error-red, #EF4444);
  filter: brightness(0.9);
}

/* Disabled state */
.app-button--disabled, .app-button:disabled {
  opacity: 0.5; cursor: not-allowed;
}

.app-button__icon {
  display: flex; align-items: center; justify-content: center;
}

@media (prefers-color-scheme: dark) {
  .app-button--muted {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-button--muted:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
  }
  .app-button--ghost {
    color: var(--color-dark-text-dark, #E8E8E8);
    border-color: var(--color-gray-300-dark, #555555);
  }
  .app-button--ghost:hover:not(:disabled) {
    background: var(--color-gray-100-dark, #333333);
  }
  .app-button--link {
    color: var(--color-link-blue-dark, #60A5FA);
  }
}
</style>`;

C.appBadge = `<template>
  <div
    :class="['app-badge', \`app-badge--\${variant}\`]"
    :aria-label="ariaLabel || label"
    role="status"
  >
    <span v-if="variant === 'live'" class="app-badge__dot" />
    {{ label }}
  </div>
</template>

<script setup lang="ts">
// import { computed } — vue
const props = defineProps<{
  variant?: 'live' | 'premium' | 'free' | 'claimed' | 'highlights'
  ariaLabel?: string
}>()
withDefaults(props, { variant: 'live' })
const labels: Record<string, string> = {
  live: 'Live', premium: 'Premium', free: 'Free',
  claimed: 'Claimed', highlights: 'Highlights'
}
const label = computed(() => labels[props.variant || 'live'])
</script>
<style scoped>
.app-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Red Hat Display', sans-serif; font-size: 11px;
  font-weight: 700; text-transform: uppercase; border-radius: 12px;
  padding: 4px 12px;
}
.app-badge--live {
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
}
.app-badge__dot {
  display: inline-block; width: 6px; height: 6px;
  border-radius: 50%; background: var(--color-live-red, #EF4444);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.app-badge--premium {
  background: var(--color-premium-amber, #E7A610);
  color: #000000;
}
.app-badge--free {
  background: var(--color-free-badge-green, #22C55E);
  color: #FFFFFF;
}
.app-badge--claimed {
  background: var(--color-claimed-purple, #8B5CF6);
  color: #FFFFFF;
}
.app-badge--highlights {
  background: var(--color-highlight-gray, #6C6C6C);
  color: #FFFFFF;
}

@media (prefers-color-scheme: dark) {
  .app-badge--live {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-badge--claimed {
    background: var(--color-claimed-purple-dark, #A78BFA);
  }
  .app-badge--highlights {
    background: var(--color-highlight-gray-dark, #A0A0A0);
    color: #000000;
  }
}
</style>`;

C.appTabs = `<template>
  <div :class="['app-tabs', \`app-tabs--\${variant}\`]" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      :class="['app-tabs__btn', { 'app-tabs__btn--active': active === tab.value }]"
      :style="active === tab.value && variant === 'underline'
        ? { borderBottomColor: accentColor }
        : {}"
      role="tab"
      :aria-selected="active === tab.value"
      :aria-controls="\`tab-panel-\${tab.value}\`"
      @click="$emit('update:active', tab.value)">
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

interface TabItem {
  label: string
  value: string
}
const props = defineProps<{
  tabs:        TabItem[]
  active:      string
  variant?:    'pill' | 'underline'
  accentColor?: string
}>()
withDefaults(props, {
  variant: 'pill',
  accentColor: '#EF4444',
})
defineEmits<{ 'update:active': [value: string] }>()
</script>
<style scoped>
.app-tabs {
  display: flex; gap: 8px; align-items: center;
  border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.app-tabs--underline {
  border-bottom: 2px solid var(--color-gray-200, #C7CBD0);
}
.app-tabs__btn {
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; background: none; border: none;
  color: var(--color-gray-500, #6C6C6C); cursor: pointer;
  padding: 12px 16px; border-radius: 16px 16px 0 0;
  transition: all 0.15s; outline: none;
}
.app-tabs__btn:hover {
  background: var(--color-gray-100, #EDEDED);
}
.app-tabs__btn:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: -2px;
}
.app-tabs--pill .app-tabs__btn {
  border-radius: 26px; margin: 4px;
}
.app-tabs--pill .app-tabs__btn--active {
  background: var(--color-primary, #116DFF); color: #FFFFFF;
}
.app-tabs--underline .app-tabs__btn {
  border-radius: 0; border-bottom: 3px solid transparent;
  margin-bottom: -2px;
}
.app-tabs--underline .app-tabs__btn--active {
  color: var(--color-dark-text, #161616); font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .app-tabs {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .app-tabs--underline {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .app-tabs__btn {
    color: var(--color-gray-400-dark, #888888);
  }
  .app-tabs__btn:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .app-tabs--pill .app-tabs__btn--active {
    background: var(--color-primary-dark, #3B8BFF);
  }
  .app-tabs--underline .app-tabs__btn--active {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;

C.shareCurtain = `<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <div v-if="open" class="share-curtain__backdrop"
      @click="$emit('close')"
      role="presentation"
      aria-label="Close share menu"
      @keydown.escape="$emit('close')" />
    <!-- Sheet -->
    <Transition name="slide-up">
      <div v-if="open" class="share-curtain" role="dialog"
        aria-labelledby="share-title" aria-modal="true">
        <h3 id="share-title" class="share-curtain__title">Share</h3>
        <div class="share-curtain__grid" role="list">
          <button v-for="ch in channels" :key="ch.id" class="share-curtain__item"
            role="listitem"
            :aria-label="\`Share via \${ch.label}\`"
            @click="$emit('share', ch.id)">
            <div class="share-curtain__icon" :style="{ background: ch.darkColor && isDark ? ch.darkColor : ch.color }">
              <component :is="ch.icon" :aria-hidden="true" />
            </div>
            <span class="share-curtain__label">{{ ch.label }}</span>
          </button>
        </div>
        <button class="share-curtain__cancel" @click="$emit('close')"
          :aria-label="\`Cancel sharing\`">Cancel</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

interface Channel {
  id: string
  label: string
  color: string
  darkColor?: string
  icon: string
}
const props = defineProps<{
  open?: boolean
  isDark?: boolean
}>()
withDefaults(props, { open: false, isDark: false })
defineEmits<{ close: []; share: [channelId: string] }>()

const channels: Channel[] = [
  { id: 'copy', label: 'Copy Link', color: '#BDBDBD', icon: 'LinkIcon' },
  { id: 'facebook', label: 'Facebook', color: '#1877F2', icon: 'FacebookIcon' },
  { id: 'x', label: 'X', color: '#000000', darkColor: '#333333', icon: 'XLogoIcon' },
  { id: 'whatsapp', label: 'WhatsApp', color: '#25D366', icon: 'WhatsAppIcon' },
  { id: 'tiktok', label: 'TikTok', color: '#000000', darkColor: '#333333', icon: 'TikTokIcon' },
  { id: 'instagram', label: 'Instagram', color: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)', icon: 'InstagramIcon' },
]
</script>
<style scoped>
.share-curtain__backdrop {
  position: fixed; inset: 0; background: var(--color-overlay, rgba(0,0,0,0.7));
  z-index: 100; animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.share-curtain {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--color-white, #FFFFFF); border-radius: 20px 20px 0 0;
  padding: 24px 16px; z-index: 101; animation: slideUp 0.3s ease-out;
  max-height: 80vh; overflow-y: auto;
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.share-curtain__title {
  font-family: 'Red Hat Display', sans-serif; font-size: 20px;
  font-weight: 600; margin: 0 0 16px 0;
  color: var(--color-dark-text, #161616);
}
.share-curtain__grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 12px; margin-bottom: 16px;
}
.share-curtain__item {
  display: flex; flex-direction: column; align-items: center;
  gap: 8px; background: none; border: none; cursor: pointer;
  padding: 8px; border-radius: 12px; outline: none;
  transition: all 0.15s;
}
.share-curtain__item:hover {
  background: var(--color-gray-100, #EDEDED);
}
.share-curtain__item:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.share-curtain__icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: #FFFFFF; flex-shrink: 0;
}
.share-curtain__label {
  font-family: 'Red Hat Display', sans-serif; font-size: 12px;
  font-weight: 500; text-align: center;
  color: var(--color-dark-text, #161616);
}
.share-curtain__cancel {
  width: 100%; height: 40px; background: var(--color-gray-100, #EDEDED);
  border: none; border-radius: 20px; font-family: 'Red Hat Display', sans-serif;
  font-size: 15px; font-weight: 600; color: var(--color-dark-text, #161616);
  cursor: pointer; outline: none; transition: all 0.15s;
}
.share-curtain__cancel:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.share-curtain__cancel:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .share-curtain {
    background: var(--color-white-dark, #1A1A1A);
  }
  .share-curtain__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .share-curtain__item:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .share-curtain__label {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .share-curtain__cancel {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .share-curtain__cancel:hover {
    background: var(--color-gray-200-dark, #444444);
  }
}
</style>`;

C.videoActionBar = `<template>
  <div class="video-action-bar">
    <span class="video-action-bar__views" aria-label="Video view count">{{ views }}</span>
    <div class="video-action-bar__actions" role="toolbar" aria-label="Video actions">
      <button
        class="video-action-bar__btn focus-ring"
        :class="{ 'video-action-bar__btn--disabled': disabled }"
        :disabled="disabled"
        aria-label="Download video"
        @click="$emit('download')"
      >
        <DownloadIcon :size="20" :aria-hidden="true" />
      </button>
      <button
        class="video-action-bar__btn focus-ring"
        :class="{ 'video-action-bar__btn--disabled': disabled }"
        :disabled="disabled"
        aria-label="Share video"
        @click="$emit('share')"
      >
        <UploadIcon :size="20" :aria-hidden="true" />
      </button>
      <button
        class="video-action-bar__btn focus-ring"
        :class="{
          'video-action-bar__btn--active': bookmarked,
          'video-action-bar__btn--disabled': disabled,
        }"
        :disabled="disabled"
        :aria-label="bookmarked ? 'Remove bookmark' : 'Bookmark video'"
        :aria-pressed="bookmarked"
        @click="$emit('bookmark')"
      >
        <BookmarkIcon :size="20" :aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  views?:      string
  bookmarked?: boolean
  disabled?:   boolean
}>()
withDefaults(props, {
  views: '0 views',
  bookmarked: false,
  disabled: false,
})
defineEmits<{ download: []; share: []; bookmark: [] }>()
</script>

<style scoped>
.video-action-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; background: transparent;
}
.video-action-bar__views {
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  color: var(--color-gray-500, #6C6C6C);
}
.video-action-bar__actions {
  display: flex; gap: 8px; align-items: center;
}
.video-action-bar__btn {
  width: 40px; height: 40px; border-radius: 8px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-gray-500, #6C6C6C);
  border: none; cursor: pointer; display: flex;
  align-items: center; justify-content: center;
  transition: background 0.15s, color 0.15s; outline: none;
}
.video-action-bar__btn:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
  color: var(--color-gray-400, #979797);
}
.video-action-bar__btn:active:not(:disabled) {
  background: var(--color-gray-300, #DCDCDC);
  color: var(--color-dark-text, #161616);
}
.video-action-bar__btn:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.video-action-bar__btn--disabled {
  background: var(--color-grayOverlay, rgba(237,237,237,0.5));
  color: rgba(108,108,108,0.3);
  cursor: not-allowed; opacity: 0.6;
}
.video-action-bar__btn--active {
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-primary, #116DFF);
}
.video-action-bar__btn--active svg { fill: var(--color-primary, #116DFF); }
.video-action-bar__btn--active:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
  color: var(--color-primary-hover, #0D5AD4);
}
.video-action-bar__btn--active:active:not(:disabled) {
  background: var(--color-gray-300, #DCDCDC);
  color: var(--color-primary-active, #0A4AB0);
}
@keyframes bookmarkPop {
  0% { transform: scale(1); }
  40% { transform: scale(1.25); }
  100% { transform: scale(1); }
}
.video-action-bar__btn--animating {
  animation: bookmarkPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (prefers-color-scheme: dark) {
  .video-action-bar__views {
    color: var(--color-gray-400-dark, #888888);
  }
  .video-action-bar__btn {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-gray-400-dark, #888888);
  }
  .video-action-bar__btn:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
    color: var(--color-gray-500-dark, #A0A0A0);
  }
  .video-action-bar__btn:active:not(:disabled) {
    background: var(--color-gray-300-dark, #555555);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .video-action-bar__btn--disabled {
    background: rgba(255,255,255,0.08);
  }
  .video-action-bar__btn--active {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-primary-dark, #3B8BFF);
  }
  .video-action-bar__btn--active svg { fill: var(--color-primary-dark, #3B8BFF); }
  .video-action-bar__btn--active:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
    color: var(--color-primary-hover-dark, #5A9FFF);
  }
}
</style>`;

C.appDivider = `<template>
  <div class="app-divider" role="separator">
    <span class="app-divider__line" aria-hidden="true" />
    <span class="app-divider__text">{{ text }}</span>
    <span class="app-divider__line" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

defineProps<{
  text?: string
}>()
</script>

<style scoped>
.app-divider {
  display: flex; align-items: center; gap: 12px;
  margin: 16px 0;
}
.app-divider__line {
  flex: 1; height: 1px;
  background: var(--color-gray-200, #C7CBD0);
}
.app-divider__text {
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  color: var(--color-gray-500, #6C6C6C); white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  .app-divider__line {
    background: var(--color-gray-300-dark, #555555);
  }
  .app-divider__text {
    color: var(--color-gray-400-dark, #888888);
  }
}
</style>`;

C.appLink = `<template>
  <a :class="['app-link', \`app-link--\${variant}\`]" :href="href"
    :aria-label="ariaLabel" :target="target" :rel="rel">
    <slot />
  </a>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  href?:      string
  variant?:   'default' | 'accent' | 'muted'
  ariaLabel?: string
  target?:    string
  rel?:       string
}>()
withDefaults(props, {
  variant: 'default',
})
</script>

<style scoped>
.app-link {
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  text-decoration: none; cursor: pointer; outline: none;
  transition: all 0.15s; border-radius: 4px; padding: 2px 4px;
}
.app-link:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-link--default {
  color: var(--color-link-blue, #2563EB);
}
.app-link--default:hover {
  text-decoration: underline; opacity: 0.8;
}
.app-link--accent {
  color: var(--color-accent, #E8332B);
  font-weight: 600;
}
.app-link--accent:hover {
  text-decoration: underline; opacity: 0.8;
}
.app-link--muted {
  color: var(--color-gray-500, #6C6C6C);
}
.app-link--muted:hover {
  color: var(--color-dark-text, #161616); text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  .app-link--default {
    color: var(--color-link-blue-dark, #60A5FA);
  }
  .app-link--muted {
    color: var(--color-gray-400-dark, #888888);
  }
  .app-link--muted:hover {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;

C.mainTopBar = `<template>
  <header class="main-top-bar" role="banner">
    <PixellotLogo class="main-top-bar__logo" :aria-label="appName" />
    <div class="main-top-bar__search-wrapper">
      <input class="main-top-bar__search" type="text" placeholder="Search..."
        :aria-label="searchAriaLabel" />
      <SearchIcon :size="18" class="main-top-bar__search-icon" :aria-hidden="true" />
    </div>
    <button class="main-top-bar__icon focus-ring"
      aria-label="Notifications" aria-haspopup="menu">
      <BellIcon :size="20" :aria-hidden="true" />
      <span v-if="notificationCount > 0" class="main-top-bar__badge">
        {{ notificationCount }}
      </span>
    </button>
    <button class="main-top-bar__avatar focus-ring"
      :aria-label="\`User profile menu for \${initials}\`\""
      aria-haspopup="menu">
      {{ initials }}
    </button>
  </header>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  appName?:          string
  searchAriaLabel?:  string
  notificationCount?: number
  initials?:         string
}>()
withDefaults(props, {
  appName: 'Pixellot',
  searchAriaLabel: 'Search games and videos',
  notificationCount: 0,
  initials: 'BR',
})
</script>

<style scoped>
.main-top-bar {
  display: flex; align-items: center; gap: 16px;
  height: 72px; padding: 0 16px; background: var(--color-white, #FFFFFF);
  border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
  position: sticky; top: 0; z-index: 50;
}
.main-top-bar__logo {
  flex-shrink: 0; height: 32px;
}
.main-top-bar__search-wrapper {
  flex: 1; position: relative; max-width: 300px;
}
.main-top-bar__search {
  width: 100%; height: 40px; padding: 8px 12px 8px 36px;
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
  border: 2px solid transparent; border-radius: 20px;
  outline: none; transition: all 0.15s;
}
.main-top-bar__search::placeholder {
  color: var(--color-gray-400, #979797);
}
.main-top-bar__search:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.main-top-bar__search:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.main-top-bar__search-icon {
  position: absolute; left: 12px; top: 50%;
  transform: translateY(-50%); color: var(--color-gray-400, #979797);
  pointer-events: none;
}
.main-top-bar__icon {
  position: relative; width: 40px; height: 40px;
  background: transparent; border: none; cursor: pointer;
  color: var(--color-gray-500, #6C6C6C);
  border-radius: 8px; display: flex; align-items: center;
  justify-content: center; outline: none; transition: all 0.15s;
}
.main-top-bar__icon:hover {
  background: var(--color-gray-100, #EDEDED);
}
.main-top-bar__icon:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.main-top-bar__badge {
  position: absolute; top: -4px; right: -4px;
  background: var(--color-notif-badge-red, #EF4444);
  color: #FFFFFF; font-size: 10px; font-weight: 700;
  padding: 2px 6px; border-radius: 10px; min-width: 20px;
  text-align: center;
}
.main-top-bar__avatar {
  width: 40px; height: 40px; background: var(--color-primary, #116DFF);
  color: #FFFFFF; border: none; border-radius: 50%;
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  font-weight: 600; cursor: pointer; display: flex;
  align-items: center; justify-content: center;
  outline: none; transition: all 0.15s;
}
.main-top-bar__avatar:hover {
  background: var(--color-primary-hover, #0D5AD4);
}
.main-top-bar__avatar:focus-visible {
  outline: 2px solid var(--color-primary-active, #0A4AB0); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .main-top-bar {
    background: var(--color-white-dark, #1A1A1A);
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .main-top-bar__search {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .main-top-bar__search:hover {
    background: var(--color-gray-200-dark, #444444);
  }
  .main-top-bar__icon {
    color: var(--color-gray-400-dark, #888888);
  }
  .main-top-bar__icon:hover {
    background: var(--color-gray-100-dark, #333333);
  }
}
</style>`;

// C.mainTabs, C.subTabs, C.categoryTabs — CONSOLIDATED into C.appTabs with variant="pill" | "underline" + accentColor

C.heroBanner = `<template>
  <section class="hero-banner" role="banner">
    <div class="hero-banner__content">
      <h1 class="hero-banner__title">{{ title }}</h1>
      <p class="hero-banner__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  title?:    string
  subtitle?: string
  bgColor?:  string
}>()
withDefaults(props, {
  title: 'Welcome to Pixellot',
  subtitle: 'Watch basketball games live & on demand',
  bgColor: '#1A3B8A',
})
</script>

<style scoped>
.hero-banner {
  background: var(--color-hero-bg, #1A3B8A);
  color: #FFFFFF; padding: 48px 16px;
  border-radius: 0 0 32px 32px; display: flex;
  align-items: center; justify-content: center;
  min-height: 200px;
}
.hero-banner__content {
  text-align: center; max-width: 400px;
}
.hero-banner__title {
  margin: 0 0 12px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 28px; font-weight: 700;
}
.hero-banner__subtitle {
  margin: 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 16px; font-weight: 400; opacity: 0.95;
}

@media (prefers-color-scheme: dark) {
  .hero-banner {
    background: var(--color-hero-bg-dark, #0F2557);
  }
}
</style>`;

C.topBar = `<template>
  <div class="top-bar">
    <PixellotLogo class="top-bar__logo" />
    <div class="top-bar__title">Games</div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue
</script>`;

C.backButton = `<template>
  <button class="back-button focus-ring"
    aria-label="Go back to previous page"
    @click="$emit('click')">
    <ArrowLeftIcon :size="20" :aria-hidden="true" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  label?: string
}>()
withDefaults(props, { label: 'Back' })
defineEmits<{ click: [] }>()
</script>

<style scoped>
.back-button {
  display: flex; align-items: center; gap: 8px;
  background: transparent; border: none; cursor: pointer;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; color: var(--color-dark-text, #161616);
  padding: 8px 12px; border-radius: 8px; outline: none;
  transition: all 0.15s;
}
.back-button:hover {
  background: var(--color-gray-100, #EDEDED);
}
.back-button:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .back-button {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .back-button:hover {
    background: var(--color-gray-100-dark, #333333);
  }
}
</style>`;

C.jerseyItem = `<template>
  <button
    :class="['jersey-item', { 'jersey-item--selected': selected }]"
    :aria-label="\`Player number \${number}\${selected ? ', selected' : ''}\`\""
    :aria-pressed="selected"
    @click="$emit('select')">
    <svg viewBox="0 0 73 73" fill="none" :aria-hidden="true">
      <path
        d="M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z"
        :fill="color"
        :stroke="selected ? 'var(--color-primary, #116DFF)' : '#fff'"
        :stroke-width="selected ? 2.5 : 1.7" />
    </svg>
    <span class="jersey-item__number">{{ number }}</span>
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  number?: string | number
  color?:  string
  selected?: boolean
}>()
withDefaults(props, {
  number: 0,
  color: '#D0142C',
  selected: false,
})
defineEmits<{ select: [] }>()
</script>

<style scoped>
.jersey-item {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 8px; position: relative;
  background: transparent; border: 2px solid transparent;
  border-radius: 12px; cursor: pointer; outline: none;
  transition: all 0.2s; padding: 8px;
}
.jersey-item:hover {
  background: var(--color-gray-100, #EDEDED);
}
.jersey-item:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.jersey-item svg {
  width: 73px; height: 73px; flex-shrink: 0;
}
.jersey-item--selected svg {
  filter: drop-shadow(0 0 4px var(--color-primary, #116DFF));
}
.jersey-item__number {
  font-family: 'Red Hat Display', sans-serif; font-size: 18px;
  font-weight: 700; color: var(--color-dark-text, #161616);
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

@media (prefers-color-scheme: dark) {
  .jersey-item:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .jersey-item__number {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;

C.jerseyGrid = `<template>
  <div class="jersey-grid" role="group" :aria-label="ariaLabel">
    <JerseyItem
      v-for="num in jerseys"
      :key="num"
      :number="num"
      :color="colors[num] || '#D0142C'"
      :selected="selected.includes(num)"
      @select="toggleJersey(num)" />
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  jerseys?: (string | number)[]
  selected?: (string | number)[]
  ariaLabel?: string
  colors?: Record<string | number, string>
}>()
withDefaults(props, {
  jerseys: () => [1, 2, 3, 4, 5, 6, 7, 8],
  selected: () => [],
  ariaLabel: 'Select player jersey numbers',
  colors: () => ({}),
})
defineEmits<{ toggle: [number: string | number] }>()

const toggleJersey = (num: string | number) => {
  console.log('Jersey toggled:', num)
}
</script>

<style scoped>
.jersey-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
  gap: 12px; padding: 16px 0;
}

@media (max-width: 480px) {
  .jersey-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>`;

C.onboardingPage = `<template>
  <div class="onboarding-page">
    <header class="onboarding-page__header">
      <PixellotLogo class="onboarding-page__logo" :aria-label="appName" />
      <button class="onboarding-page__close focus-ring" aria-label="Cancel onboarding"
        @click="$emit('cancel')">Cancel</button>
    </header>
    <main class="onboarding-page__content">
      <h1 class="onboarding-page__title">{{ title }}</h1>
      <p class="onboarding-page__description">{{ description }}</p>
      <h2 class="onboarding-page__team-name">{{ teamName }}</h2>
      <JerseyGrid :jerseys="jerseys" :selected="selected"
        :colors="jerseyColors" :aria-label="jerseyGridLabel"
        @toggle="toggleJersey" />
      <button class="see-all-btn focus-ring" @click="$emit('seeAll')">
        See All <ChevronDownIcon :size="16" :aria-hidden="true" />
      </button>
    </main>
    <footer class="onboarding-page__footer">
      <AppButton :disabled="selected.length === 0"
        @click="$emit('finish')">
        {{ selected.length > 0 ? \`Continue (\${selected.length} selected)\` : 'Select players to continue' }}
      </AppButton>
    </footer>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  appName?:           string
  title?:             string
  description?:       string
  teamName?:          string
  jerseys?:           (string | number)[]
  selected?:          (string | number)[]
  jerseyColors?:      Record<string | number, string>
  jerseyGridLabel?:   string
}>()
withDefaults(props, {
  appName: 'Pixellot',
  title: 'Select the players you want to follow',
  description: 'To personalize your experience, choose the player\\'s jersey number you want to follow.',
  teamName: 'Maccabi Kiryat Gat',
  jerseys: () => [1, 2, 3, 4, 5, 6, 7, 8],
  selected: () => [],
  jerseyColors: () => ({}),
  jerseyGridLabel: 'Select player jersey numbers',
})
defineEmits<{ cancel: []; finish: []; seeAll: [] }>()

const toggleJersey = (num: string | number) => {
  console.log('Jersey toggled:', num)
}
</script>

<style scoped>
.onboarding-page {
  display: flex; flex-direction: column; min-height: 100vh;
  background: var(--color-white, #FFFFFF);
  font-family: 'Red Hat Display', sans-serif;
}
.onboarding-page__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px; border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
  background: var(--color-white, #FFFFFF);
}
.onboarding-page__logo {
  height: 32px; flex-shrink: 0;
}
.onboarding-page__close {
  background: transparent; border: none; cursor: pointer;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; color: var(--color-dark-text, #161616);
  padding: 8px 12px; border-radius: 8px; outline: none;
  transition: all 0.15s;
}
.onboarding-page__close:hover {
  background: var(--color-gray-100, #EDEDED);
}
.onboarding-page__close:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.onboarding-page__content {
  flex: 1; padding: 32px 16px; max-width: 100%; margin: 0 auto;
  width: 100%;
}
.onboarding-page__title {
  margin: 0 0 12px 0; font-size: 24px; font-weight: 700;
  color: var(--color-dark-text, #161616);
}
.onboarding-page__description {
  margin: 0 0 24px 0; font-size: 15px; font-weight: 400;
  color: var(--color-gray-500, #6C6C6C); line-height: 1.5;
}
.onboarding-page__team-name {
  margin: 24px 0 12px 0; font-size: 18px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.see-all-btn {
  display: flex; align-items: center; justify-content: center;
  gap: 8px; width: 100%; height: 40px; margin: 16px 0;
  background: var(--color-gray-100, #EDEDED);
  border: none; border-radius: 20px;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; color: var(--color-dark-text, #161616);
  cursor: pointer; outline: none; transition: all 0.15s;
}
.see-all-btn:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.see-all-btn:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.onboarding-page__footer {
  padding: 16px; border-top: 1px solid var(--color-gray-200, #C7CBD0);
  background: var(--color-white, #FFFFFF); flex-shrink: 0;
}

@media (prefers-color-scheme: dark) {
  .onboarding-page {
    background: var(--color-white-dark, #1A1A1A);
  }
  .onboarding-page__header {
    border-bottom-color: var(--color-gray-300-dark, #555555);
    background: var(--color-white-dark, #1A1A1A);
  }
  .onboarding-page__close {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .onboarding-page__close:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .onboarding-page__title,
  .onboarding-page__team-name {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .onboarding-page__description {
    color: var(--color-gray-400-dark, #888888);
  }
  .see-all-btn {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .see-all-btn:hover {
    background: var(--color-gray-200-dark, #444444);
  }
  .onboarding-page__footer {
    border-top-color: var(--color-gray-300-dark, #555555);
    background: var(--color-white-dark, #1A1A1A);
  }
}
</style>`;

C.projectStructure = `components/
├── atoms/
│   ├── AppInput.vue             ← text input with validation, aria-invalid
│   ├── AppSelect.vue            ← dropdown select with chevron
│   ├── AppButton.vue            ← 7 variants × 3 sizes × 4 states
│   ├── AppBadge.vue             ← live | premium | free | claimed | highlights
│   ├── AppTabs.vue              ← pill | underline + accentColor (team color)
│   ├── AppDivider.vue           ← horizontal divider with optional text
│   ├── AppLink.vue              ← inline link with hover underline
│   ├── TeamRow.vue              ← shared: name, score, isWinner, logoSize
│   ├── LockSvg.vue              ← unified premium lock icon (size prop)
│   └── BackButton.vue           ← navigation back arrow
├── cards/
│   ├── LiveGameCard.vue         ← uses TeamRow
│   ├── GameResultCard.vue       ← uses TeamRow + HighlightsBadge
│   ├── HighlightCard.vue        ← vertical video card with emoji title/date/lock
│   ├── ScoreCard.vue
│   └── ProductCard.vue
├── media/
│   ├── VideoThumbnail.vue       ← landscape | vertical × locked | free
│   └── VideoTypeChips.vue
├── stats/
│   ├── TeamStatsBar.vue
│   ├── GameLeaders.vue
│   ├── PlayerStatsTable.vue
│   ├── StatsGrid.vue
│   └── SeasonStatsRow.vue
├── layout/
│   ├── MainTopBar.vue           ← sticky header with search + notifications
│   ├── SectionHeader.vue
│   ├── AdBanner.vue             ← auto-rotating carousel with pagination dots
│   ├── NotificationCenter.vue   ← dropdown with jersey avatar items
│   ├── ProfileSidebar.vue       ← right-slide drawer (role="dialog") with menu
│   ├── UserAvatar.vue           ← initials circle
│   ├── ClaimedPlayerCard.vue    ← player info card (sidebar)
│   ├── MenuListItem.vue         ← nav item with chevron/badge
│   ├── FollowedPlayersSection.vue ← team-tabbed player highlights
│   └── PaywallOverlay.vue       ← shared blur + lock + CTA overlay
├── sharing/
│   ├── VideoActionBar.vue       ← views + download / share / bookmark
│   └── ShareCurtain.vue         ← bottom-sheet (role="dialog") with 6 social channels
├── pages/
│   ├── OnboardingPage.vue       ← full-screen onboarding flow
│   ├── BrandHero.vue            ← hero banner with logo
│   ├── EmptyState.vue           ← configurable empty state with icon
│   ├── ErrorState.vue           ← error display with retry action
│   └── OfflineBanner.vue        ← connectivity warning (role="alert")
├── payment/
│   ├── PaymentModal.vue
│   ├── UpgradeBanner.vue
│   └── InfoAlert.vue
├── jersey/
│   ├── JerseyItem.vue           ← selectable jersey with checkmark
│   └── JerseyGrid.vue           ← responsive jersey selector grid
└── tokens/
    └── index.ts                 ← lightColors, darkColors, typography, radii, spacing, sizes, strokes, breakpoints`;

C.adBanner = `<template>
  <div class="ad-banner" role="region" :aria-label="ariaLabel">
    <div class="ad-banner__track" :style="{ transform: \`translateX(-\${active * 100}%)\` }">
      <slot />
    </div>
    <div class="ad-banner__dots" role="tablist" aria-label="Ad carousel pagination">
      <button v-for="(_, i) in count" :key="i"
        :class="['ad-banner__dot', { 'ad-banner__dot--active': i === active }]"
        role="tab"
        :aria-selected="i === active"
        :aria-label="\`Go to slide \${i + 1}\`\""
        @click="$emit('update:active', i)" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  active?: number
  count?:  number
  ariaLabel?: string
}>()
withDefaults(props, {
  active: 0,
  count: 2,
  ariaLabel: 'Advertisement carousel',
})
defineEmits<{ 'update:active': [index: number] }>()
</script>

<style scoped>
.ad-banner {
  position: relative; width: 100%; overflow: hidden;
  border-radius: 16px; background: var(--color-gray-100, #EDEDED);
}
.ad-banner__track {
  display: flex; width: 100%; transition: transform 0.3s ease-in-out;
}
.ad-banner__track > * {
  min-width: 100%; flex-shrink: 0;
}
.ad-banner__dots {
  position: absolute; bottom: 12px; left: 50%;
  transform: translateX(-50%); display: flex;
  gap: 8px; z-index: 10;
}
.ad-banner__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none; cursor: pointer; outline: none;
  transition: all 0.2s;
}
.ad-banner__dot:hover {
  background: rgba(255, 255, 255, 0.75);
}
.ad-banner__dot:focus-visible {
  outline: 2px solid #FFFFFF; outline-offset: 2px;
}
.ad-banner__dot--active {
  background: #FFFFFF; width: 24px; border-radius: 4px;
}

@media (prefers-color-scheme: dark) {
  .ad-banner {
    background: var(--color-gray-100-dark, #333333);
  }
}
</style>`;

C.notificationCenter = `<template>
  <div class="notification-center" role="region" aria-labelledby="notif-title">
    <div class="notification-center__header">
      <h3 id="notif-title" class="notification-center__title">Notification Center</h3>
      <button class="notification-center__clear focus-ring"
        aria-label="Clear all notifications"
        @click="$emit('clearAll')">
        Clear all
      </button>
    </div>
    <div v-if="items.length === 0" class="notification-center__empty">
      No notifications
    </div>
    <div v-else class="notification-center__list" role="list">
      <button v-for="item in items" :key="item.id"
        class="notification-center__item focus-ring" role="listitem"
        :aria-label="\`Notification from \${item.text}\`\""
        @click="$emit('select', item)" @keydown.enter="$emit('select', item)">
        <JerseyAvatar :number="item.jerseyNumber" :color="item.jerseyColor" />
        <span class="notification-center__text">{{ item.text }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

interface NotificationItem {
  id: string | number
  text: string
  jerseyNumber: string | number
  jerseyColor: string
}
const props = defineProps<{
  items?: NotificationItem[]
}>()
withDefaults(props, { items: () => [] })
defineEmits<{ clearAll: []; select: [item: NotificationItem] }>()
</script>

<style scoped>
.notification-center {
  background: var(--color-white, #FFFFFF); border-radius: 12px;
  overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.notification-center__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px; border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.notification-center__title {
  margin: 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 16px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.notification-center__clear {
  background: transparent; border: none; cursor: pointer;
  font-family: 'Red Hat Display', sans-serif; font-size: 13px;
  font-weight: 500; color: var(--color-link-blue, #2563EB);
  padding: 4px 8px; border-radius: 4px; outline: none;
  transition: all 0.15s;
}
.notification-center__clear:hover {
  background: var(--color-gray-100, #EDEDED);
}
.notification-center__clear:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.notification-center__list {
  max-height: 400px; overflow-y: auto;
}
.notification-center__empty {
  padding: 32px 16px; text-align: center;
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  color: var(--color-gray-500, #6C6C6C);
}
.notification-center__item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border: none; background: transparent;
  cursor: pointer; width: 100%; text-align: left;
  transition: all 0.15s; outline: none;
}
.notification-center__item:hover {
  background: var(--color-gray-100, #EDEDED);
}
.notification-center__item:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: -2px;
}
.notification-center__item:not(:last-child) {
  border-bottom: 1px solid var(--color-gray-100, #EDEDED);
}
.notification-center__text {
  flex: 1; font-family: 'Red Hat Display', sans-serif;
  font-size: 14px; color: var(--color-dark-text, #161616);
}

@media (prefers-color-scheme: dark) {
  .notification-center {
    background: var(--color-white-dark, #1A1A1A);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  .notification-center__header {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .notification-center__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .notification-center__clear {
    color: var(--color-link-blue-dark, #60A5FA);
  }
  .notification-center__clear:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .notification-center__empty {
    color: var(--color-gray-400-dark, #888888);
  }
  .notification-center__item:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .notification-center__item:not(:last-child) {
    border-bottom-color: var(--color-gray-100-dark, #333333);
  }
  .notification-center__text {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;

C.profileSidebar = `<template>
  <Teleport to="body">
    <div v-if="open" class="profile-sidebar__backdrop"
      role="presentation"
      @click="$emit('close')" />
    <Transition name="slide-right">
      <div v-if="open" class="profile-sidebar" role="dialog"
        aria-modal="true" aria-label="Profile menu"
        @keydown.escape="$emit('close')">
        <div class="profile-sidebar__header">
          <UserAvatar :initials="initials" :aria-hidden="true" />
          <span id="profile-name" class="profile-sidebar__name">{{ name }}</span>
          <button class="profile-sidebar__close focus-ring"
            aria-label="Close profile menu" @click="$emit('close')">
            <XIcon :size="20" :aria-hidden="true" />
          </button>
        </div>
        <ClaimedPlayerCard v-if="claimedPlayer" v-bind="claimedPlayer"
          role="region" aria-label="Claimed player information" />
        <nav class="profile-sidebar__menu" aria-label="Profile menu">
          <MenuItem label="Following" :badge="followingCount"
            @click="$emit('navigate','following')" />
          <MenuItem label="Language" @click="$emit('navigate','language')" />
          <MenuItem label="My Account" @click="$emit('navigate','account')" />
          <MenuItem label="Saved Videos" @click="$emit('navigate','saved')" />
          <MenuItem label="My Highlights" @click="$emit('navigate','highlights')" />
          <MenuItem label="Claim Player" variant="link"
            @click="$emit('navigate','claim')" />
        </nav>
        <button class="profile-sidebar__logout focus-ring"
          @click="$emit('logout')">Log Out</button>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

interface ClaimedPlayer {
  name?: string
  number?: string | number
  team?: string
}
const props = defineProps<{
  open?: boolean
  name?: string
  initials?: string
  followingCount?: number
  claimedPlayer?: ClaimedPlayer | null
}>()
withDefaults(props, {
  open: false,
  name: 'User',
  initials: 'BR',
  followingCount: 0,
  claimedPlayer: null,
})
defineEmits<{ close: []; navigate: [section: string]; logout: [] }>()
</script>

<style scoped>
.profile-sidebar__backdrop {
  position: fixed; inset: 0;
  background: var(--color-overlay, rgba(0,0,0,0.7));
  z-index: 100; animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.profile-sidebar {
  position: fixed; top: 0; right: 0; bottom: 0;
  width: 280px; background: var(--color-white, #FFFFFF);
  border-left: 1px solid var(--color-gray-200, #C7CBD0);
  z-index: 101; display: flex; flex-direction: column;
  animation: slideRight 0.3s ease-out;
}
@keyframes slideRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.profile-sidebar__header {
  display: flex; align-items: center; gap: 12px;
  padding: 16px; border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.profile-sidebar__name {
  flex: 1; font-family: 'Red Hat Display', sans-serif;
  font-size: 16px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.profile-sidebar__close {
  background: transparent; border: none; cursor: pointer;
  color: var(--color-gray-500, #6C6C6C); display: flex;
  border-radius: 4px; outline: none; transition: all 0.15s;
}
.profile-sidebar__close:hover {
  background: var(--color-gray-100, #EDEDED);
}
.profile-sidebar__close:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.profile-sidebar__menu {
  flex: 1; overflow-y: auto; padding: 12px 0;
  border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.profile-sidebar__logout {
  width: calc(100% - 32px); margin: 12px 16px;
  height: 40px; background: var(--color-gray-100, #EDEDED);
  border: none; border-radius: 20px;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 600; color: var(--color-dark-text, #161616);
  cursor: pointer; outline: none; transition: all 0.15s;
}
.profile-sidebar__logout:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.profile-sidebar__logout:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .profile-sidebar {
    background: var(--color-white-dark, #1A1A1A);
    border-left-color: var(--color-gray-300-dark, #555555);
  }
  .profile-sidebar__header {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .profile-sidebar__name {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .profile-sidebar__close {
    color: var(--color-gray-400-dark, #888888);
  }
  .profile-sidebar__close:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .profile-sidebar__menu {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .profile-sidebar__logout {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .profile-sidebar__logout:hover {
    background: var(--color-gray-200-dark, #444444);
  }
}

@media (max-width: 480px) {
  .profile-sidebar {
    width: 100%;
  }
}
</style>`;

C.highlightCard = `<template>
  <button class="highlight-card"
    :aria-label="ariaLabel"
    @click="$emit('click')" @keydown.enter="$emit('click')">
    <img :src="thumbnail" :alt="title"
      class="highlight-card__img" />
    <span class="highlight-card__duration" aria-label="Video duration">
      {{ duration }}
    </span>
    <div v-if="locked" class="highlight-card__lock"
      role="img" aria-label="This video is locked">
      <LockSvg :size="11" :aria-hidden="true" />
    </div>
    <div class="highlight-card__overlay">
      <span class="highlight-card__title">{{ title }}</span>
      <span class="highlight-card__date">{{ date }}</span>
    </div>
  </button>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  thumbnail?: string
  duration?: string
  title?: string
  date?: string
  locked?: boolean
  ariaLabel?: string
}>()
withDefaults(props, {
  thumbnail: '',
  duration: '0:00',
  title: 'Highlight',
  date: '',
  locked: true,
})
defineEmits<{ click: [] }>()
const computedAriaLabel = computed(() =>
  props.ariaLabel || \`\${props.title}, \${props.date}\${props.locked ? ', locked' : ''}\`
)
</script>

<style scoped>
.highlight-card {
  position: relative; width: 100%; aspect-ratio: 9 / 16;
  border: none; border-radius: 12px; overflow: hidden;
  cursor: pointer; display: block; background: transparent;
  outline: none; transition: all 0.2s; padding: 0;
}
.highlight-card:hover {
  transform: scale(0.98);
}
.highlight-card:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.highlight-card__img {
  width: 100%; height: 100%; object-fit: cover;
  display: block;
}
.highlight-card__duration {
  position: absolute; top: 8px; left: 8px;
  background: rgba(0, 0, 0, 0.6); color: #FFFFFF;
  font-family: 'Red Hat Display', sans-serif; font-size: 11px;
  font-weight: 600; padding: 4px 8px; border-radius: 4px;
}
.highlight-card__lock {
  position: absolute; top: 8px; right: 8px;
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--color-premium-amber, #E7A610);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.highlight-card__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 12px; color: #FFFFFF; pointer-events: none;
}
.highlight-card__title {
  display: block; font-family: 'Red Hat Display', sans-serif;
  font-size: 13px; font-weight: 600; margin-bottom: 4px;
  line-height: 1.2;
}
.highlight-card__date {
  display: block; font-family: 'Red Hat Display', sans-serif;
  font-size: 11px; font-weight: 400; opacity: 0.9;
}

@media (prefers-color-scheme: dark) {
  .highlight-card__duration {
    background: rgba(0, 0, 0, 0.8);
  }
  .highlight-card__lock {
    background: var(--color-premium-hover-dark, #F5B800);
  }
}
</style>`;

// ── REACT PREVIEW COMPONENTS ──
type CopyBtnProps = { text: string };
function CopyBtn({ text }: CopyBtnProps) {
  const c = useColors();
  const [ok, setOk] = useState(false);
  const [fo, setFo] = useState(false);
  return <button onClick={() => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 1500); }}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)} aria-label="Copy code"
    style={{ background: "none", border: "none", cursor: "pointer", color: ok ? c.successGreen : c.gray500, padding: T.spacing.xs, borderRadius: T.radii.sm, ...(fo ? focusRing(c) : {}) }}>
    {ok ? <Check size={16} /> : <Copy size={16} />}
  </button>;
}

type PInputProps = { placeholder?: string; type?: string; error?: boolean; errorMsg?: string; disabled?: boolean; _forceState?: string; ariaLabel?: string };
function PInput({ placeholder, type = "text", error = false, errorMsg = "", disabled = false, _forceState, ariaLabel }: PInputProps) {
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
  if (error && _forceState !== "focus" && !fo && _forceState !== "disabled") { bd = `2px solid ${c.errorRed}`; }
  if (error && _forceState === "hover") { bg = c.gray200; bd = `2px solid ${c.errorRed}`; }
  var isDis = disabled || _forceState === "disabled";
  const errId = error && errorMsg ? "pinput-err-" + (placeholder || "").replace(/\s/g, "") : undefined;
  return <div style={{ width: "100%" }}>
    <div style={{ position: "relative" }}>
      <input type={type === "password" && show ? "text" : type}
        placeholder={_forceState === "filled" ? "" : placeholder}
        defaultValue={_forceState === "filled" ? placeholder : undefined}
        disabled={isDis}
        readOnly={_forceState === "filled"}
        aria-label={ariaLabel || placeholder}
        aria-invalid={error || undefined}
        aria-describedby={errId}
        onFocus={() => setFo(true)} onBlur={() => setFo(false)}
        style={{ width: "100%", height: T.sizes.inputHeight, background: bg, border: bd, borderRadius: T.radii.lg, padding: `4px ${T.spacing.lg}px`, fontFamily: F, fontSize: T.typography.sizes.base, color: clr, outline: "none", boxSizing: "border-box", paddingRight: type === "password" ? 44 : T.spacing.lg, cursor: cur }} />
      {type === "password" && <button onClick={() => setShow(!show)} disabled={isDis} aria-label={show ? "Hide password" : "Show password"} style={{ position: "absolute", right: 14, top: 14, background: "none", border: "none", cursor: isDis ? "not-allowed" : "pointer", color: iconClr, display: "flex", borderRadius: T.radii.sm }}>
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>}
    </div>
    {error && errorMsg ? <span id={errId} style={{ fontFamily: F, fontSize: 12, color: c.errorRed, marginTop: T.spacing.xs, display: "block", paddingLeft: T.spacing.lg }}>{errorMsg}</span> : null}
  </div>;
}

type PSelectProps = { placeholder?: string; ariaLabel?: string };
function PSelect({ placeholder, ariaLabel }: PSelectProps) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <div style={{ position: "relative", width: "100%" }}>
    <select aria-label={ariaLabel || placeholder} onFocus={() => setFo(true)} onBlur={() => setFo(false)}
      style={{ width: "100%", height: T.sizes.inputHeight, background: c.gray100, border: fo ? `2px solid ${c.primary}` : "2px solid transparent", borderRadius: T.radii.lg, padding: `4px ${T.spacing.lg}px`, fontFamily: F, fontSize: T.typography.sizes.base, color: c.gray400, appearance: "none", outline: "none", boxSizing: "border-box" }}>
      <option>{placeholder}</option>
    </select>
    <ChevronDown size={T.typography.sizes.base} style={{ position: "absolute", right: T.spacing.lg, top: "50%", transform: "translateY(-50%)", color: c.gray400, pointerEvents: "none" }} />
  </div>;
}

type PBtnProps = { children?: ReactNode; variant?: "primary" | "premium" | "social" | "muted" | "ghost" | "link" | "danger"; size?: "sm" | "md" | "lg"; leadingIcon?: ReactNode; trailingIcon?: ReactNode; iconOnly?: boolean; fullWidth?: boolean; disabled?: boolean; _forceState?: string; style?: CSSProperties; onClick?: () => void };
function PBtn({ children, variant = "primary", size = "md", leadingIcon, trailingIcon, iconOnly = false, fullWidth = true, disabled = false, _forceState, style: extraStyle = {}, onClick }: PBtnProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [fo, setFo] = useState(false);
  const stateMap = {
    primary: {
      default:  { background: c.primary, color: c.white, border: "none" },
      hover:    { background: c.primaryHover, color: c.white, border: "none" },
      active:   { background: c.primaryActive, color: c.white, border: "none" },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark, border: "none" },
    },
    premium: {
      default:  { background: c.premiumYellow, color: c.black, border: "none" },
      hover:    { background: c.premiumAmber, color: c.black, border: "none" },
      active:   { background: c.premiumActive, color: c.black, border: "none" },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark, border: "none" },
    },
    social: {
      default:  { background: c.white, color: c.black, border: `${T.strokes.thin}px solid ${c.gray200}` },
      hover:    { background: c.gray50, color: c.black, border: `${T.strokes.thin}px solid ${c.gray200}` },
      active:   { background: c.gray100, color: c.black, border: `${T.strokes.thin}px solid ${c.gray200}` },
      disabled: { background: c.white, color: c.disabledTextOnDark, border: `${T.strokes.thin}px solid ${c.grayOverlay}` },
    },
    muted: {
      default:  { background: c.gray50, color: c.darkText, border: "none" },
      hover:    { background: c.gray100, color: c.darkText, border: "none" },
      active:   { background: c.gray300, color: c.darkText, border: "none" },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark, border: "none" },
    },
    ghost: {
      default:  { background: "transparent", color: c.gray400, border: "none" },
      hover:    { background: c.gray50, color: c.gray400, border: "none" },
      active:   { background: c.gray100, color: c.gray400, border: "none" },
      disabled: { background: "transparent", color: c.disabledTextOnDark, border: "none" },
    },
    link: {
      default:  { background: "transparent", color: c.linkBlue, border: "none" },
      hover:    { background: "transparent", color: c.primaryHover, border: "none" },
      active:   { background: "transparent", color: c.primaryActive, border: "none" },
      disabled: { background: "transparent", color: c.disabledTextOnDark, border: "none" },
    },
    danger: {
      default:  { background: "transparent", color: c.errorRed, border: "none" },
      hover:    { background: "transparent", color: c.errorRed, border: "none" },
      active:   { background: "transparent", color: c.errorRed, border: "none" },
      disabled: { background: "transparent", color: c.disabledTextOnDark, border: "none" },
    },
  };
  const sizes = {
    sm: { height: T.sizes.buttonSm, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, borderRadius: T.radii.lg, padding: `0 ${T.spacing.lg}px`, gap: 6 },
    md: { height: T.sizes.buttonMd, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, borderRadius: T.radii.lg, padding: `0 ${T.spacing.xl}px`, gap: T.spacing.sm },
    lg: { height: T.sizes.buttonLg, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, borderRadius: 28, padding: "0 40px", gap: T.spacing.sm },
  };
  const states = stateMap[variant] || stateMap.primary;
  const state = _forceState || (disabled ? "disabled" : pressed ? "active" : hovered ? "hover" : "default");
  const v = states[state] || states.default;
  const s = sizes[size] || sizes.md;
  const isLink = variant === "link" || variant === "danger";
  return <button
    disabled={disabled}
    onClick={onClick}
    onMouseEnter={() => !disabled && setHovered(true)}
    onMouseLeave={() => { setHovered(false); setPressed(false); }}
    onMouseDown={() => !disabled && setPressed(true)}
    onMouseUp={() => setPressed(false)}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)}
    style={{
      width: fullWidth && !iconOnly ? "100%" : "auto",
      height: s.height,
      minWidth: iconOnly ? s.height : undefined,
      borderRadius: iconOnly ? "50%" : s.borderRadius,
      fontFamily: F,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      cursor: disabled ? "not-allowed" : "pointer",
      display: "inline-flex", alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: iconOnly ? 0 : s.padding,
      transition: "all 0.2s",
      textDecoration: isLink ? "underline" : "none",
      ...v,
      ...(fo ? focusRing(c) : {}),
      ...extraStyle,
    }}>
    {leadingIcon && <span style={{ display: "flex", alignItems: "center" }}>{leadingIcon}</span>}
    {iconOnly ? <span style={{ display: "flex", alignItems: "center" }}>{children}</span> : children}
    {trailingIcon && <span style={{ display: "flex", alignItems: "center" }}>{trailingIcon}</span>}
  </button>;
}

type PTabButtonProps = { label: string; isActive?: boolean; onClick?: () => void; variant?: string; accentColor?: string; _forceState?: string };
function PTabButton({ label, isActive, onClick, variant, accentColor, _forceState }: PTabButtonProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const state = _forceState || (pressed ? "active" : hovered ? "hover" : "default");
  if (variant === "pill") {
    const bg = isActive ? c.white : state === "active" ? c.gray300 : state === "hover" ? c.gray200 : "transparent";
    const clr = isActive ? c.black : state === "hover" || state === "active" ? c.gray500 : c.gray400;
    return <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
      role="tab" aria-selected={isActive}
      style={{ flex: 1, height: T.sizes.tabHeight, border: "none", borderRadius: T.radii.md, cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, transition: "all 0.15s", background: bg, color: clr, boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>{label}</button>;
  }
  const accent = accentColor || c.errorRed;
  const clr = isActive ? c.black : state === "active" ? c.gray500 : state === "hover" ? c.gray500 : c.gray400;
  return <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
    role="tab" aria-selected={isActive}
    style={{ flex: "0 0 auto", background: "none", border: "none", cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: clr, padding: `${T.spacing.lg}px 0`, position: "relative", transition: "color 0.15s", borderBottom: isActive ? `3px solid ${accent}` : state === "hover" ? `2px solid ${accent}55` : "none", marginBottom: "-1px" }}>{label}</button>;
}

type PTabsProps = { tabs: { label: string; value: string }[]; active?: string; onSelect?: (v: string) => void; variant?: "pill" | "underline"; accentColor?: string; _forceState?: string };
function PTabs({ tabs, active, onSelect, variant = "pill", accentColor, _forceState }: PTabsProps) {
  const colors = useColors();
  if (variant === "pill") {
    return <div role="tablist" style={{ display: "flex", background: colors.gray100, borderRadius: T.radii.md, padding: T.spacing.xs, width: "100%" }}>
      {tabs.map(t => <PTabButton key={t.value} label={t.label} isActive={active === t.value} onClick={() => onSelect(t.value)} variant="pill" _forceState={!active || active !== t.value ? _forceState : undefined} />)}
    </div>;
  }
  const accent = accentColor || colors.errorRed;
  return <div role="tablist" style={{ display: "flex", gap: T.spacing.xl, padding: `0 ${T.spacing.lg}px`, borderBottom: `1px solid ${colors.gray100}`, width: "100%", overflowX: "auto" }}>
    {tabs.map(t => <PTabButton key={t.value} label={t.label} isActive={active === t.value} onClick={() => onSelect(t.value)} variant="underline" accentColor={accent} _forceState={!active || active !== t.value ? _forceState : undefined} />)}
  </div>;
}

type PBackButtonProps = { onClick?: () => void };
function PBackButton({ onClick }: PBackButtonProps) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <button onClick={onClick} aria-label="Go back" onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.black, display: "flex", alignItems: "center", gap: T.spacing.xs, borderRadius: T.radii.sm, ...(fo ? focusRing(c) : {}) }}>
    <ArrowLeft size={20} /> Back
  </button>;
}

type PDividerProps = { text?: string };
function PDivider({ text = "OR" }: PDividerProps) {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md, width: "100%" }}>
    <span style={{ flex: 1, height: T.strokes.thin, background: c.gray200 }} />
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.gray400 }}>{text}</span>
    <span style={{ flex: 1, height: T.strokes.thin, background: c.gray200 }} />
  </div>;
}

type PLinkProps = { children?: ReactNode; variant?: "muted" | "accent" | "primary" };
function PLink({ children, variant = "muted" }: PLinkProps) {
  const colors = useColors();
  const c = { muted: { color: colors.gray400 }, accent: { color: colors.accent, textDecoration: "underline" }, primary: { color: colors.primary } };
  return <button style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, cursor: "pointer", background: "none", border: "none", padding: 0, ...c[variant] }}>{children}</button>;
}

type PJerseyProps = { number: number; selected?: boolean; onClick?: () => void; color?: string };
function PJersey({ number, selected, onClick, color = "#D0142C" }: PJerseyProps) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <button onClick={onClick} aria-label={"Jersey number " + number} aria-pressed={selected} onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ position: "relative", width: 73, height: 73, background: "none", border: "none", cursor: "pointer", padding: 0, transition: "transform 0.15s", transform: selected ? "scale(1.1)" : "scale(1)", borderRadius: T.radii.md, ...(fo ? focusRing(c) : {}) }}>
    <svg viewBox="0 0 73 73" fill="none" style={{ width: "100%", height: "100%" }}>
      <path d="M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z"
        fill={color} stroke={selected ? c.successGreen : "#FFFFFF"} strokeWidth={selected ? T.strokes.heavy : T.strokes.thick} />
    </svg>
    {selected && <div style={{ position: "absolute", top: -4, right: -4, width: 20, height: 20, background: c.successGreen, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Check size={12} color={"#FFFFFF"} strokeWidth={3} />
    </div>}
    <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-40%)", fontFamily: F, fontSize: T.typography.sizes.jersey, fontWeight: T.typography.weights.bold, color: c.jerseyStroke, pointerEvents: "none" }}>{number}</span>
  </button>;
}

type PBadgeProps = { variant?: "live" | "premium" | "free" | "claimed" | "highlights" };
function PBadge({ variant = "live" }: PBadgeProps) {
  const c = useColors();
  const variants = {
    live:     { background: c.liveRed, fontSize: 12, fontWeight: T.typography.weights.semibold, textTransform: "uppercase", label: "LIVE", dot: true },
    premium:  { background: c.premiumAmber, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "Premium", dot: false },
    free:     { background: c.freeBadgeGreen, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "Free", dot: false },
    claimed:  { background: c.claimedPurple, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "Claimed", dot: false },
    highlights: { background: c.highlightsBadgeBg, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", label: "HIGHLIGHTS", dot: false, icon: true },
  };
  const v = variants[variant] || variants.live;
  var badgeColor = variant === "highlights" ? c.highlightsBadgeText : c.white;
  var badgeBorder = variant === "highlights" ? `${T.strokes.thin}px solid ${c.highlightsBadgeText}` : "none";
  return <div style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.xs, background: v.background, color: badgeColor, padding: `${T.spacing.xs}px ${T.spacing.md}px`, borderRadius: T.radii.badge, fontSize: v.fontSize, fontWeight: v.fontWeight, textTransform: v.textTransform, border: badgeBorder }}>
    {v.dot && <><style>{`@keyframes liveDotFlicker { 0%,100%{opacity:1} 50%{opacity:0.2} }`}</style>
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.white, animation: "liveDotFlicker 1.2s ease-in-out infinite" }} /></>}
    {v.icon && <Play size={10} fill={c.premiumYellow} color={c.premiumYellow} />}
    {v.label}
  </div>;
}
const PLiveBadge = () => <PBadge variant="live" />;
const PPremiumBadge = () => <PBadge variant="premium" />;
const PFreeBadge = () => <PBadge variant="free" />;
const PClaimedBadge = () => <PBadge variant="claimed" />;

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

function PLiveGameCard() {
  const c = useColors();
  return <div style={{ minWidth: 240, flex: 1, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
    {/* Header — darker gray top section */}
    <div style={{ background: c.gray200, borderRadius: "14px 14px 0 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
        <PLiveBadge />
        <span style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.medium, color: c.black }}>21 NOV, 2024</span>
      </div>
    </div>
    {/* Content — lighter gray bottom section */}
    <div style={{ background: c.gray100, borderRadius: "0 0 14px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "12px 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.sm, width: "100%" }}>
          {/* Teams */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <PTeamRow name="M. Kiryat Gat" score="87" isWinner={true} />
            <PTeamRow name="H. Haifa" score="79" isWinner={false} />
          </div>
          {/* League */}
          <div>
            <span style={{ fontFamily: F, fontSize: 10, fontWeight: T.typography.weights.medium, color: c.gray400 }}>Liga Leumit (Winner League)</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function PGameResultCard() {
  const c = useColors();
  return <div style={{ background: c.gray100, borderRadius: 14, display: "flex", gap: T.spacing.lg, marginBottom: T.spacing.md, height: 116, overflow: "hidden" }}>
    {/* Date column — darker gray, left-rounded only */}
    <div style={{ width: 72, flexShrink: 0, background: c.gray200, borderRadius: "14px 0 0 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black, lineHeight: "24px" }}>20</div>
        <div style={{ fontSize: 12, fontWeight: T.typography.weights.bold, color: c.black, lineHeight: "16px" }}>NOV</div>
        <div style={{ fontSize: 10, fontWeight: T.typography.weights.regular, color: c.black, lineHeight: "15px" }}>2024</div>
      </div>
    </div>
    {/* Right content — team rows + league + highlights */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: T.spacing.sm, paddingRight: T.spacing.lg }}>
      <PTeamRow name="Maccabi Kiryat Gat" score="89" isWinner={true} logoSize={27} fontWeight={400} gap={8} />
      <PTeamRow name="Ironi Nahariya" score="77" isWinner={false} logoSize={27} fontWeight={400} gap={8} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, fontWeight: T.typography.weights.regular, color: c.gray400 }}>Liga Leumit (Winner League)</span>
        <PBadge variant="highlights" />
      </div>
    </div>
  </div>;
}

function PScoreCard() {
  const c = useColors();
  return <div style={{ background: c.gray100, borderRadius: 14, padding: T.spacing.lg, width: "100%", maxWidth: 398, boxSizing: "border-box" }}>
    <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}>
      {/* Left team column */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
        <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md }}>
          <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: "50%", background: c.white, flexShrink: 0 }} />
          <span style={{ fontSize: "clamp(22px, 6vw, 28px)", fontWeight: T.typography.weights.regular, color: c.black }}>89</span>
        </div>
        <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.black, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>M. Kiryat Gat</div>
        <div style={{ fontSize: 12, fontWeight: T.typography.weights.regular, color: c.gray500 }}>1st</div>
      </div>
      {/* Center — Final + date */}
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 4px" }}>
        <div style={{ fontSize: 12, fontWeight: T.typography.weights.regular, color: c.gray500 }}>Final</div>
        <div style={{ fontSize: 12, fontWeight: T.typography.weights.regular, color: c.gray500 }}>20 NOV 2024</div>
      </div>
      {/* Right team column (loser — gray) */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: T.spacing.sm }}>
        <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md }}>
          <span style={{ fontSize: "clamp(22px, 6vw, 28px)", fontWeight: T.typography.weights.regular, color: c.gray500 }}>77</span>
          <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: "50%", background: c.white, flexShrink: 0 }} />
        </div>
        <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, textAlign: "right", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>I. Nahariya</div>
        <div style={{ fontSize: 12, fontWeight: T.typography.weights.regular, color: c.gray500, textAlign: "right" }}>5th</div>
      </div>
    </div>
  </div>;
}

function PProductCard() {
  const c = useColors();
  return <div style={{ borderRadius: T.radii.badge, overflow: "hidden", border: `1px solid ${c.gray200}`, marginBottom: T.spacing.md }}>
    <div style={{ width: "100%", aspectRatio: "1/1", background: c.cardBg, borderRadius: "12px 12px 0 0" }} />
    <div style={{ padding: T.spacing.md }}>
      <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, marginBottom: T.spacing.xs, color: c.darkText }}>Jersey Edition</div>
      <div style={{ fontSize: 13, fontWeight: T.typography.weights.semibold, color: c.primary }}>$45.00</div>
    </div>
  </div>;
}

type LockSvgProps = { size?: number; fill?: string };
function LockSvg({ size = 11, fill = "#FFE000" }: LockSvgProps) {
  const w = size;
  const h = size * (10 / 8);
  return <svg width={w} height={h} viewBox="0 0 8 10" fill="none"><path clipRule="evenodd" d="M7.02621 4.06889H6.73849L6.73733 2.70111C6.73616 1.21111 5.46535 -0.00110943 3.90332 1.67782e-06C2.3413 0.00111279 1.07048 1.21333 1.07164 2.70333L1.07397 4.07111H0.971466C0.434483 4.07222 -0.00115988 4.48778 4.94171e-06 5V9.07222C4.94171e-06 9.58444 0.436813 10 0.973795 10L7.02853 9.99667C7.56552 9.99667 8.00116 9.58111 8 9.06889V4.99556C8 4.48333 7.56319 4.06889 7.02621 4.06889ZM2.11765 4.07111L2.11532 2.70333C2.11532 1.76222 2.91672 0.996668 3.90332 0.995557C4.88992 0.995557 5.69248 1.76111 5.69248 2.70111L5.69481 4.06889L2.11765 4.07111Z" fill={fill} fillRule="evenodd" /></svg>;
}

type PVideoThumbnailProps = { orientation?: "landscape" | "portrait"; locked?: boolean; duration?: string; title?: string; subtitle?: string };
function PVideoThumbnail({ orientation = "landscape", locked = false, duration = "1:42:15", title = "Full Game", subtitle = "Free" }: PVideoThumbnailProps) {
  const c = useColors();
  const isVert = orientation === "vertical";
  const container = isVert
    ? { borderRadius: T.radii.badge, width: 108, height: 192 }
    : { borderRadius: 14, width: "100%", maxWidth: 398, aspectRatio: "16/9", marginBottom: T.spacing.md };
  const badge = isVert ? { top: 7, left: 6, padding: "2px 4px" } : { top: 8, left: 8, padding: "2px 8px" };
  const icon = isVert ? { top: 6, right: 6 } : { top: 8, right: 8 };
  const grad = isVert
    ? { background: "linear-gradient(to top, rgba(0,0,0,0.5) 49%, rgba(114,123,132,0) 100%)", padding: T.spacing.sm }
    : { background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)", padding: T.spacing.md };
  const titleStyle = isVert
    ? { fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.white, lineHeight: "16px" }
    : { fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.white, lineHeight: "18px" };
  const subStyle = isVert
    ? { fontSize: 10, fontWeight: T.typography.weights.bold, color: c.gray300, lineHeight: "15px", marginTop: 2 }
    : { fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.regular, color: c.gray300, lineHeight: "16.5px", marginTop: 2 };
  return <div style={{ position: "relative", overflow: "hidden", background: c.heroBg, ...container }}>
    {/* Blur overlay for locked content */}
    {locked && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)", filter: "blur(8px)", transform: "scale(1.1)", zIndex: 0 }} />}
    {/* Duration badge — top left */}
    <div style={{ position: "absolute", ...badge, background: "rgba(0,0,0,0.55)", borderRadius: T.radii.pill, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: F, fontWeight: T.typography.weights.medium, fontSize: T.typography.sizes.xxs, color: "#FFFFFF", lineHeight: 1 }}>{duration}</span>
    </div>
    {/* Top-right icon — Play (free) or Lock (premium) */}
    {locked
      ? <div style={{ position: "absolute", ...icon, width: 28, height: 28, background: c.premiumDark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, border: `${T.strokes.medium}px solid ${c.premiumYellow}`, boxSizing: "border-box" }}><LockSvg size={11} fill={c.premiumYellow} /></div>
      : <div style={{ position: "absolute", ...icon, width: 28, height: 28, borderRadius: "50%", background: c.gray500, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><Play size={12} color={c.jerseyStroke} fill={c.jerseyStroke} /></div>}
    {/* Bottom gradient with title + subtitle */}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, ...grad, zIndex: 1 }}>
      <div style={titleStyle}>{title}</div>
      <div style={subStyle}>{subtitle}</div>
    </div>
  </div>;
}
const PVideoThumbnailFree = () => <PVideoThumbnail orientation="landscape" locked={false} duration="1:42:15" title="Full Game" subtitle="Free" />;
const PVideoThumbnailPremium = () => <PVideoThumbnail orientation="landscape" locked={true} duration="22:30" title="Condensed Game" subtitle="Premium Only" />;
const PVideoThumbnailVertical = () => <PVideoThumbnail orientation="vertical" locked={true} duration="1:23" title="🏀 Weiss with the dimes" subtitle="NOV 13, 2025" />;
const PVideoThumbnailVerticalFree = () => <PVideoThumbnail orientation="vertical" locked={false} duration="4:10" title="🏀 #4 Gets the ball Forward" subtitle="NOV 13, 2025" />;

type PSectionHeaderProps = { title: string; seeAll?: boolean; onClick?: () => void };
function PSectionHeader({ title, seeAll, onClick }: PSectionHeaderProps) {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: 0, marginBottom: T.spacing.md }}>
    <h3 style={{ margin: 0, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black }}>{title}</h3>
    {seeAll && <PBtn variant="link" size="sm" fullWidth={false} style={{ fontSize: 13 }} onClick={onClick}>See all &gt;</PBtn>}
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
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, width: 28, textAlign: "left", flexShrink: 0 }}>{leftVal}</span>
      <span style={{ flex: 1, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center" }}>{label}</span>
      <span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, width: 28, textAlign: "right", flexShrink: 0 }}>{rightVal}</span>
    </div>
    {/* Bar row: full width, left track (fill from right) | gap | right track (fill from left) */}
    <div style={{ display: "flex", gap: 10 }}>
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
  return <div style={{ position: "relative", borderRadius: 14, overflow: "hidden" }}>
    <div style={{ filter: "blur(4px)", opacity: 0.5, pointerEvents: "none" }}>{children}</div>
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.08)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.md }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: c.premiumDark, border: `${T.strokes.extraHeavy}px solid ${c.premiumYellow}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LockSvg size={22} fill={c.premiumYellow} />
          </div>
          <p style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.semibold, color: c.darkText, margin: 0, fontFamily: F }}>{label}</p>
        </div>
        <PBtn variant="premium" size="lg" fullWidth={false} style={{ width: 160, fontWeight: T.typography.weights.semibold, borderRadius: 30 }}>Buy Now</PBtn>
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
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.gray100, border: `${T.strokes.thin}px solid ${c.gray300}`, overflow: "hidden" }} />
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.gray100, border: `${T.strokes.thin}px solid ${c.gray300}`, overflow: "hidden" }} />
    </div>
    {/* Stat rows */}
    {stats.map((s, i) => <div key={s.label}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div style={{ flex: 1, textAlign: "left" }}>
          <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.darkText, margin: 0 }}>{s.left.num}</p>
          <p style={{ fontSize: 12, fontWeight: T.typography.weights.medium, color: c.gray500, margin: 0 }}>{s.left.detail}</p>
        </div>
        <div style={{ flex: 1, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: 36 }}>
          <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, margin: 0 }}>{s.label}</p>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.bold, color: c.darkText, margin: 0 }}>{s.right.num}</p>
          <p style={{ fontSize: 12, fontWeight: T.typography.weights.medium, color: c.gray500, margin: 0 }}>{s.right.detail}</p>
        </div>
      </div>
      {i < stats.length - 1 && <div style={{ height: 1, background: c.dividerDark, marginBottom: 10 }} />}
    </div>)}
    {/* See All button */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <PBtn variant="muted" size="sm" fullWidth={false} trailingIcon={<ChevronDown size={14} />} style={{ borderRadius: 30, padding: "8px 28px" }}>See All</PBtn>
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
    <div style={{ display: "flex", marginBottom: 14 }}>
      {["Maccabi Kiryat Gat", "Ironi Nahariya"].map((team, i) => {
        const [fo, setFo] = useState(false);
        return <button key={team} onClick={() => setActiveTeam(i)} onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ flex: 1, background: "none", border: "none", borderBottom: activeTeam === i ? `2px solid ${c.jerseyRed}` : `2px solid ${c.barTrack}`, padding: "0 0 8px", fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: activeTeam === i ? c.darkText : c.gray400, cursor: "pointer", fontFamily: F, borderRadius: T.radii.sm, outline: fo ? `2px solid ${c.primary}` : "none", outlineOffset: 2 }}>{team}</button>;
      })}
    </div>
    {/* Header row */}
    <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
      {headers.map((h, i) => <span key={h} style={{ fontSize: 12, fontWeight: T.typography.weights.medium, color: c.gray400, width: i === 0 ? 80 : undefined, flex: i === 0 ? undefined : 1, textAlign: i === 0 ? "left" : "center" }}>{h}</span>)}
    </div>
    {/* Divider */}
    <div style={{ height: 1, background: c.barTrack, marginBottom: T.spacing.sm }} />
    {/* Data rows */}
    {rows.map((row, ri) => <div key={ri}>
      <div style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
        {row.map((cell, ci) => <span key={ci} style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText, width: ci === 0 ? 80 : undefined, flex: ci === 0 ? undefined : 1, textAlign: ci === 0 ? "left" : "center" }}>{cell}</span>)}
      </div>
      <div style={{ height: 1, background: c.jerseyRed, opacity: 0.15 }} />
    </div>)}
  </div>;
}

function PPlayerStatsPaywall() {
  return <PPaywallOverlay label="Buy Team Stats">
    <PPlayerStatsTable />
    <PGameLeaders />
  </PPaywallOverlay>;
}

function PStatsGrid() {
  const c = useColors();
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: T.spacing.md }}>
    {[{ label: "Minutes Played", value: "1245" }, { label: "Games Played", value: "24" }, { label: "Tournaments", value: "8" }].map(s => <div key={s.label} style={{ background: c.cardBg, padding: T.spacing.md, borderRadius: 8, textAlign: "center" }}>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray500, marginBottom: T.spacing.xs }}>{s.label}</div>
      <div style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.bold, color: c.darkText }}>{s.value}</div>
    </div>)}
  </div>;
}

function PSeasonStatsRow() {
  const c = useColors();
  return <div style={{ display: "flex", gap: T.spacing.md }}>
    {[{ label: "MPG", value: "32.1" }, { label: "PPG", value: "18.5" }, { label: "APG", value: "6.2" }, { label: "RPG", value: "5.8" }].map(s => <div key={s.label} style={{ flex: 1, border: `1px solid ${c.gray200}`, borderRadius: 8, padding: T.spacing.sm, textAlign: "center" }}>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray500 }}>{s.label}</div>
      <div style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, marginTop: T.spacing.xs, color: c.darkText }}>{s.value}</div>
    </div>)}
  </div>;
}

type PInfoAlertProps = { title?: string; description?: string };
function PInfoAlert({ title, description }: PInfoAlertProps) {
  const c = useColors();
  return <div style={{ background: c.infoBgPurple, borderRadius: T.radii.badge, padding: T.spacing.lg, border: "1px solid rgba(139,92,246,0.15)" }}>
    <div style={{ fontSize: 13, fontWeight: T.typography.weights.bold, color: c.claimedPurple, marginBottom: 6 }}>{title}</div>
    <div style={{ fontSize: 12, color: c.gray500 }}>{description}</div>
  </div>;
}

function PPaymentModal() {
  const c = useColors();
  const cardBg = c.gray50;
  return <div style={{ maxWidth: 430, display: "flex", flexDirection: "column", gap: 14, fontFamily: F }}>
    {/* Redeem code section */}
    <div style={{ background: cardBg, borderRadius: 14, padding: "20px 24px" }}>
      <p style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.darkText, margin: "0 0 12px" }}>Redeem your Access Code here:</p>
      <div style={{ position: "relative" }}>
        <input type="text" style={{ width: "100%", height: 50, background: c.white, border: `1px solid ${c.gray300}`, borderRadius: T.radii.badge, padding: "0 120px 0 16px", fontSize: T.typography.sizes.xs, fontFamily: F, outline: "none", boxSizing: "border-box" }} />
        <PBtn variant="primary" size="sm" fullWidth={false} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", padding: "8px 24px" }}>Submit</PBtn>
      </div>
    </div>
    {/* "or select your plan" */}
    <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray500, margin: 0 }}>or select your plan</p>
    {/* Basic Package Card */}
    <div style={{ background: cardBg, borderRadius: 14, padding: "24px" }}>
      <p style={{ fontSize: 18, fontWeight: T.typography.weights.bold, color: c.darkText, margin: "0 0 6px" }}>Basic Package</p>
      <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, margin: "0 0 16px", lineHeight: 1.5 }}>Download a single highlight of your favourite moment from the season!</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 32, fontWeight: T.typography.weights.bold, color: c.darkText }}>$5.00</span>
        <PBtn variant="primary" size="lg" fullWidth={false}>Buy Now</PBtn>
      </div>
    </div>
    {/* Premium Package Card */}
    <div style={{ background: cardBg, borderRadius: 14, padding: "24px", border: `2px solid ${c.premiumYellow}` }}>
      {/* Most Popular badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: T.spacing.xs, background: c.grayOverlay, borderRadius: T.radii.lg, padding: "6px 14px", marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: T.typography.weights.bold, color: c.darkText }}>🔥 Most Popular</span>
      </div>
      <p style={{ fontSize: 18, fontWeight: T.typography.weights.bold, color: c.darkText, margin: "0 0 6px" }}>Premium Package</p>
      <p style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, margin: "0 0 14px", lineHeight: 1.5 }}>Allows access to all Camera's. You can switch cameras to watch any platform</p>
      {/* Access list */}
      <div style={{ background: c.gray100, borderRadius: T.radii.badge, padding: "14px 16px", marginBottom: 14 }}>
        <p style={{ fontSize: 12, fontWeight: T.typography.weights.medium, color: c.gray400, margin: "0 0 8px" }}>You will get access to:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}><Check size={16} color={c.successGreen} /><span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText }}>Afrikaanse Hoër Seunskool U14</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}><Check size={16} color={c.successGreen} /><span style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.darkText }}>Bosh PUP U14</span></div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 32, fontWeight: T.typography.weights.bold, color: c.darkText }}>$35.00</span>
        <PBtn variant="premium" size="lg" fullWidth={false}>Buy Now</PBtn>
      </div>
    </div>
  </div>;
}

function PUpgradeBanner() {
  const c = useColors();
  return <div style={{ background: c.infoBgPurple, borderRadius: T.radii.badge, padding: T.spacing.md, display: "flex", alignItems: "center", gap: T.spacing.md, border: `${T.strokes.thin}px solid ${c.premiumAmber}` }}>
    <div style={{ width: 32, height: 32, borderRadius: "50%", background: c.premiumDark, border: `${T.strokes.thin}px solid ${c.premiumYellow}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <LockSvg size={12} fill={c.premiumYellow} />
    </div>
    <p style={{ fontSize: 13, fontWeight: T.typography.weights.regular, color: c.black, margin: 0, flex: 1, lineHeight: 1.5, fontFamily: F }}>Upgrade to access personal highlights for all players in this game</p>
    <PBtn variant="premium" size="sm" fullWidth={false} style={{ padding: "4px 12px", fontSize: T.typography.sizes.base, borderRadius: T.radii.pill, flexShrink: 0 }}>Upgrade</PBtn>
  </div>;
}

function ChipLockSvg() {
  const c = useColors();
  return <div style={{ width: 20, height: 20, borderRadius: "50%", background: c.premiumDark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "none" }}>
    <LockSvg size={8} fill={c.premiumYellow} />
  </div>;
}

function PVideoTypeChips() {
  const c = useColors();
  const [active, setActive] = useState("full");
  const chipBase = { border: "none", borderRadius: T.radii.chip, padding: `${T.spacing.sm}px ${T.spacing.md}px`, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, cursor: "pointer", height: T.sizes.chipHeight, display: "flex", alignItems: "center", gap: T.spacing.sm, flexShrink: 0, whiteSpace: "nowrap", boxSizing: "border-box", fontFamily: F };
  return <><style>{`.chipScrollHide::-webkit-scrollbar{display:none}`}</style>
  <div className="chipScrollHide" style={{ display: "flex", gap: T.spacing.md, marginBottom: T.spacing.lg, overflowX: "auto", paddingRight: T.spacing.lg, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", flexWrap: "nowrap" }}>
    <button onClick={() => setActive("full")} style={{ ...chipBase, background: active === "full" ? c.jerseyRed : c.gray100, color: active === "full" ? c.white : c.black, fontWeight: active === "full" ? 600 : 400 }}>
      Full Game
    </button>
    <button onClick={() => setActive("condensed")} style={{ ...chipBase, background: active === "condensed" ? c.jerseyRed : c.gray100, color: active === "condensed" ? c.white : c.black, fontWeight: active === "condensed" ? 600 : 400 }}>
      <ChipLockSvg /> Condensed Game
    </button>
    <button onClick={() => setActive("highlights")} style={{ ...chipBase, background: active === "highlights" ? c.jerseyRed : c.gray100, color: active === "highlights" ? c.white : c.black, fontWeight: active === "highlights" ? 600 : 400 }}>
      <ChipLockSvg /> Game Highlights
    </button>
  </div></>;
}

type PVideoActionIconBtnProps = { icon: IconComponent; active?: boolean; disabled?: boolean; _forceState?: string; onClick?: (e: any) => void; isBookmark?: boolean; ariaLabel?: string };
function PVideoActionIconBtn({ icon, active = false, disabled = false, _forceState, onClick, isBookmark = false, ariaLabel }: PVideoActionIconBtnProps) {
  const c = useColors();
  const Icon = icon;
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [fo, setFo] = useState(false);
  const stateMap = {
    default: {
      default:  { background: c.gray100, color: c.gray500 },
      hover:    { background: c.gray200, color: c.gray500 },
      active:   { background: c.gray300, color: c.darkText },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark },
    },
    active: {
      default:  { background: c.gray100, color: c.primary },
      hover:    { background: c.gray200, color: c.primaryHover },
      active:   { background: c.gray300, color: c.primaryActive },
      disabled: { background: c.grayOverlay, color: c.disabledTextOnDark },
    },
  };
  const variant = active ? "active" : "default";
  const states = stateMap[variant];
  const state = _forceState || (disabled ? "disabled" : pressed ? "active" : hovered ? "hover" : "default");
  const v = states[state] || states.default;
  const handleClick = (e) => {
    if (isBookmark && !disabled) { setAnimating(true); setTimeout(() => setAnimating(false), 350); }
    onClick && onClick(e);
  };
  const iconScale = animating ? "scale(1.3)" : "scale(1)";
  const fillColor = isBookmark && active ? v.color : "none";
  return <button
    disabled={disabled}
    onClick={handleClick}
    onMouseEnter={() => !disabled && setHovered(true)}
    onMouseLeave={() => { setHovered(false); setPressed(false); }}
    onMouseDown={() => !disabled && setPressed(true)}
    onMouseUp={() => setPressed(false)}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)}
    aria-label={ariaLabel} aria-pressed={isBookmark ? active : undefined}
    style={{ width: T.sizes.buttonMd, height: T.sizes.buttonMd, borderRadius: "50%", background: v.background, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: disabled ? "not-allowed" : "pointer", flexShrink: 0, transition: "background 0.15s, color 0.15s", ...(fo ? focusRing(c) : {}) }}
  ><span style={{ display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)", transform: isBookmark ? iconScale : "scale(1)" }}><Icon size={T.typography.sizes.lg} color={v.color} fill={fillColor} style={{ transition: "fill 0.3s ease, color 0.3s ease" }} /></span></button>;
}

type PVideoActionBarProps = { views?: string; bookmarked?: boolean; disabled?: boolean; _forceState?: string; onDownload?: () => void; onShare?: () => void; onBookmark?: () => void };
function PVideoActionBar({ views = "1 view", bookmarked = false, disabled = false, _forceState, onDownload, onShare, onBookmark }: PVideoActionBarProps) {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", width: "100%", opacity: disabled && !_forceState ? 0.5 : 1 }}>
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray500 }}>{views}</span>
    <div style={{ display: "flex", gap: T.spacing.md }}>
      <PVideoActionIconBtn icon={Download} disabled={disabled} _forceState={_forceState} onClick={onDownload} ariaLabel="Download" />
      <PVideoActionIconBtn icon={Upload} disabled={disabled} _forceState={_forceState} onClick={onShare} ariaLabel="Share" />
      <PVideoActionIconBtn icon={Bookmark} active={bookmarked} disabled={disabled} _forceState={_forceState} onClick={onBookmark} isBookmark ariaLabel={bookmarked ? "Remove bookmark" : "Add bookmark"} />
    </div>
  </div>;
}

type PShareCurtainProps = { open?: boolean; onClose?: () => void };
function PShareCurtain({ open = true, onClose }: PShareCurtainProps) {
  const c = useColors();
  if (!open) return null;
  const channels = SHARE_CHANNELS;
  return <>
    {/* Backdrop */}
    <div onClick={onClose} onKeyDown={(e) => e.key === "Escape" && onClose()} role="presentation" style={{ position: "fixed", inset: 0, background: c.overlay, zIndex: 999 }} />
    {/* Sheet */}
    <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: c.gray50, borderRadius: "20px 20px 0 0", padding: "24px 28px 32px", zIndex: 1000, boxSizing: "border-box" }}>
      <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: T.typography.weights.bold, textAlign: "center", margin: "0 0 24px", color: c.darkText }}>Share</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px 0" }}>
        {channels.map(ch => {
          const [fo, setFo] = useState(false);
          return <div key={ch.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
            <button aria-label={"Share via " + ch.label} onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ width: 64, height: 64, borderRadius: "50%", background: ch.gradient || ch.color, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none", padding: 0, ...(fo ? focusRing(c) : {}) }}>
              <ch.icon />
            </button>
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center" }}>{ch.label}</span>
          </div>;
        })}
      </div>
      <div style={{ marginTop: T.spacing.xl }}><PBtn variant="muted" size="lg" onClick={onClose}>Cancel</PBtn></div>
    </div>
  </>;
}

function PShareCurtainStatic() {
  const c = useColors();
  const mode = useThemeMode();
  return <div style={{ maxWidth: 430, margin: "0 auto", background: c.gray50, borderRadius: T.radii.lg, padding: "24px 28px 32px", boxShadow: "0 -4px 24px rgba(0,0,0,0.12)", boxSizing: "border-box" }}>
    <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: T.typography.weights.bold, textAlign: "center", margin: "0 0 24px", color: c.darkText }}>Share</h3>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px 0" }}>
      {SHARE_CHANNELS.map(ch => {
        const [fo, setFo] = useState(false);
        return <div key={ch.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
          <button aria-label={"Share via " + ch.label} onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ width: 64, height: 64, borderRadius: "50%", background: ch.gradient || (mode === "dark" && ch.darkColor ? ch.darkColor : ch.color), display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none", padding: 0, ...(fo ? focusRing(c) : {}) }}><ch.icon size={28} /></button>
          <span style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.medium, color: c.darkText, textAlign: "center" }}>{ch.label}</span>
        </div>;
      })}
    </div>
    <div style={{ marginTop: T.spacing.xl }}><PBtn variant="muted" size="lg">Cancel</PBtn></div>
  </div>;
}

const GoogleIcon = () => <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/><path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z" fill="#EA4335"/></svg>;
const AppleIcon = () => <svg width="18" height="20" viewBox="0 0 18 22" fill="currentColor"><path d="M17.05 15.23c-.4.92-.59 1.33-1.1 2.15-.72 1.14-1.73 2.56-2.98 2.57-1.12.01-1.4-.73-2.92-.72-1.52.01-1.83.74-2.95.73-1.26-.01-2.22-1.29-2.94-2.43C2.1 14.36 1.93 10.87 3.34 9.04c1-1.3 2.58-2.06 4.01-2.06 1.49 0 2.43.74 3.66.74 1.2 0 1.93-.74 3.66-.74 1.27 0 2.68.69 3.68 1.88-3.23 1.77-2.7 6.38.7 7.37ZM12.14 4.9c.56-.72.99-1.74.83-2.78-.92.06-2 .65-2.63 1.41-.57.69-1.04 1.72-.86 2.72 1 .03 2.04-.57 2.66-1.35Z"/></svg>;

/* ── Share Channel Icons (single source of truth) ── */
const CopyLinkIcon = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
const FacebookIcon = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.384C19.612 22.954 24 17.99 24 12Z" /></svg>;
const XLogoIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const WhatsAppIcon = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12.05 21.785h-.018a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884ZM20.52 3.449C18.24 1.226 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411Z" /></svg>;
const TikTokIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.53v-3.5a4.82 4.82 0 0 1-1-.51Z" /></svg>;
const InstagramIcon = ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>;

/* Shared channel config — used by PShareCurtain + explorer */
const SHARE_CHANNELS = [
  { label: "Copy Link", color: "#BDBDBD", icon: CopyLinkIcon },
  { label: "Facebook", color: "#1877F2", icon: FacebookIcon },
  { label: "X", color: "#000000", darkColor: "#333333", icon: XLogoIcon },
  { label: "WhatsApp", color: "#25D366", icon: WhatsAppIcon },
  { label: "TikTok", color: "#000000", darkColor: "#333333", icon: TikTokIcon },
  { label: "Instagram", gradient: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)", icon: InstagramIcon },
];

type PixellotLogoProps = { size?: number };
function PixellotLogo({ size = 30 }: PixellotLogoProps) {
  return <svg width={size} height={size} viewBox="0 0 235 163" fill="none" style={{ flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M172.002 54.528L161.909 108.355C160.962 113.497 157.913 116.015 152.867 116.015H69.176C64.13 116.015 62.027 113.497 63.078 108.355L73.172 54.528C74.118 49.386 77.167 46.868 82.214 46.868H165.904C170.951 46.868 173.053 49.386 172.002 54.528ZM182.095 0.7H83.265C42.6813 0.7 19.5508 16.1242 13.7682 46.868L0.731 116.12C-5.0516 146.863 12.2963 162.288 52.8798 162.288H151.71C192.294 162.288 215.424 146.863 221.207 116.12L234.244 46.868C240.027 16.1242 222.679 0.7 182.095 0.7Z" fill="#00D6FE" />
  </svg>;
}

type PBrandHeroProps = { primaryColor?: string; logo?: ReactNode; logoSize?: number; height?: number };
function PBrandHero({ primaryColor = "#1A3B8A", logo, logoSize = 80, height = T.sizes.heroHeight }: PBrandHeroProps) {
  /* Gradient hero — primary color + 30% darker hue at bottom, large centered logo */
  const darkerColor = (() => {
    const hex = primaryColor.replace("#", "");
    const r = Math.max(0, Math.round(parseInt(hex.substring(0, 2), 16) * 0.7));
    const g = Math.max(0, Math.round(parseInt(hex.substring(2, 4), 16) * 0.7));
    const b = Math.max(0, Math.round(parseInt(hex.substring(4, 6), 16) * 0.7));
    return `rgb(${r},${g},${b})`;
  })();
  return <div style={{ width: "100%", height, background: `linear-gradient(180deg, ${primaryColor} 0%, ${darkerColor} 100%)`, borderRadius: "0 0 32px 32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
    {logo || <div style={{ width: logoSize * 2.2, height: logoSize * 2.2, borderRadius: T.radii.md, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed rgba(255,255,255,0.3)" }}>
      <svg width={logoSize * 1.1} height={logoSize * 1.1} viewBox="0 0 80 80" fill="none"><rect x="4" y="4" width="72" height="72" rx="14" fill="rgba(255,255,255,0.2)" /><path d="M28 52 L40 28 L52 52 Z" fill="rgba(255,255,255,0.5)" /><circle cx="33" cy="35" r="5" fill="rgba(255,255,255,0.5)" /></svg>
    </div>}
  </div>;
}

const CodeBlock = ({ code, title }) => {
  const c = useColors();
  const isLight = useThemeMode() === "light";
  return <div style={{ background: isLight ? "#1e293b" : "#0D1117", borderRadius: T.radii.badge, overflow: "hidden", marginTop: T.spacing.md }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: isLight ? "#0f172a" : "#161b22", borderBottom: `1px solid ${isLight ? "#334155" : "#30363d"}` }}>
      <span style={{ color: isLight ? "#94a3b8" : "#8b949e", fontSize: 12, fontWeight: T.typography.weights.semibold}}>{title}</span><CopyBtn text={code} />
    </div>
    <pre style={{ padding: T.spacing.lg, margin: 0, color: isLight ? "#e2e8f0" : "#c9d1d9", fontSize: 12, lineHeight: 1.6, overflow: "auto", maxHeight: 400, fontFamily: '"Fira Code","SF Mono",monospace', whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{code}</pre>
  </div>;
};

type CardProps = { title?: string; desc?: string; children?: ReactNode; code?: string; codeTitle?: string; tokens?: any };
const Card = ({ title, desc, children, code, codeTitle }: CardProps) => {
  const c = useColors();
  const isLight = useThemeMode() === "light";
  return <div style={{ background: c.white, border: `1px solid ${isLight ? c.gray200 : c.gray200}`, borderRadius: T.radii.md, overflow: "hidden", marginBottom: 20 }}>
    <div style={{ padding: "14px 20px", borderBottom: `1px solid ${isLight ? c.gray50 : c.gray100}` }}>
      <h3 style={{ margin: 0, fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.bold, color: c.darkText }}>{title}</h3>
      {desc && <p style={{ margin: "4px 0 0", fontSize: 12, color: c.gray500 }}>{desc}</p>}
    </div>
    <div style={{ padding: 20 }}>{children}</div>
    {code && <CodeBlock code={code} title={codeTitle || "SFC"} />}
  </div>;
};

const Swatch = ({ name, hex }) => {
  const c = useColors();
  return <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0" }}>
    <div style={{ width: 36, height: 36, borderRadius: 8, background: hex, border: `1px solid ${c.gray200}`, flexShrink: 0 }} />
    <div><div style={{ fontSize: 12, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{name}</div><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray500, fontFamily: "monospace" }}>{hex}</div></div>
  </div>;
};

// ── NEW COMPONENTS (Gap Report items 1.2–1.7) ──

type PAvatarProps = { initials?: string; size?: number };
function PAvatar({ initials = "BR", size = 40 }: PAvatarProps) {
  const c = useColors();
  return <div style={{ width: size, height: size, borderRadius: "50%", background: c.gray500, display: "flex", alignItems: "center", justifyContent: "center", color: c.white, fontFamily: F, fontSize: size * 0.38, fontWeight: T.typography.weights.bold, flexShrink: 0 }}>{initials}</div>;
}

type PBellIconProps = { count?: number; size?: number };
function PBellIcon({ count = 0, size = 20 }: PBellIconProps) {
  const c = useColors();
  return <div style={{ position: "relative", display: "inline-flex" }}>
    <Bell size={size} color={c.black} />
    {count > 0 && <div style={{ position: "absolute", top: -4, right: -6, minWidth: 16, height: 16, borderRadius: 8, background: c.notifBadgeRed, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px", boxSizing: "border-box" }}>
      <span style={{ fontFamily: F, fontSize: 9, fontWeight: T.typography.weights.bold, color: c.white }}>{count}</span>
    </div>}
  </div>;
}

type PTeamLogoProps = { size?: number; name?: string };
function PTeamLogo({ size = 28, name = "" }: PTeamLogoProps) {
  const c = useColors();
  /* Generates a deterministic placeholder from full team name hash */
  const colors = ["#D0142C", "#116DFF", "#22C55E", "#E7A610", "#8B5CF6", "#0d9488", "#E8332B", "#1877F2", "#DD2A7B", "#0EA5E9", "#F97316", "#6366F1"];
  const hash = name ? [...name].reduce((h, ch) => ((h << 5) - h + ch.charCodeAt(0)) | 0, 0) : 0;
  const idx = Math.abs(hash) % colors.length;
  const initial = name ? name.charAt(0).toUpperCase() : "T";
  return <div style={{ width: size, height: size, borderRadius: "50%", background: c.white, border: `${T.strokes.thin}px solid ${c.barTrack}`, flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg viewBox="0 0 28 28" width={size} height={size}>
      <circle cx="14" cy="14" r="13" fill={colors[idx]} opacity="0.15" />
      <circle cx="14" cy="14" r="13" stroke={colors[idx]} strokeWidth="0.5" fill="none" opacity="0.4" />
      <text x="14" y="18.5" textAnchor="middle" fontFamily={F} fontSize="14" fontWeight="700" fill={colors[idx]}>{initial}</text>
    </svg>
  </div>;
}

type PPlayerPhotoProps = { size?: number; name?: string };
function PPlayerPhoto({ size = 48, name = "" }: PPlayerPhotoProps) {
  const c = useColors();
  /* Placeholder player photo — gray circle with User silhouette */
  return <div style={{ width: size, height: size, borderRadius: "50%", background: c.gray200, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
    <User size={size * 0.55} color={c.gray400} />
  </div>;
}

type PAdBannerProps = { active?: number };
function PAdBanner({ active: initialActive = 0 }: PAdBannerProps) {
  const c = useColors();
  const [active, setActive] = useState(initialActive);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);
  var slides = [
    { bg: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)", label: "Ad Slot 1" },
    { bg: "linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)", label: "Ad Slot 2" },
  ];
  const handlePointerDown = (e) => { startX.current = e.clientX; dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); };
  const handlePointerMove = (e) => { if (!dragging.current) return; setDragX(e.clientX - startX.current); };
  const handlePointerUp = () => { if (!dragging.current) return; dragging.current = false; if (dragX < -40 && active < slides.length - 1) setActive(active + 1); else if (dragX > 40 && active > 0) setActive(active - 1); setDragX(0); };
  return <div style={{ position: "relative", width: "100%", borderRadius: 0, overflow: "hidden", touchAction: "pan-y", cursor: "grab" }}
    onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}>
    <div style={{ display: "flex", transition: dragging.current ? "none" : "transform 0.3s", transform: `translateX(calc(-${active * 100}% + ${dragX}px))` }}>
      {slides.map(function(s, i) { return <div key={i} style={{ minWidth: "100%", height: 180, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
        <span style={{ color: c.white, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.semibold, opacity: 0.7 }}>{s.label}</span>
      </div>; })}
    </div>
    <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: T.spacing.sm }}>
      {slides.map(function(_, i) { return <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === active ? c.white : "rgba(255,255,255,0.5)", transition: "background 0.2s" }} />; })}
    </div>
  </div>;
}

type PNotificationItemProps = { jerseyNumber?: number; text?: string };
function PNotificationItem({ jerseyNumber = 4, text = "\"Player #4 Highlight\" from the game \"S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)\" is now ready!" }: PNotificationItemProps) {
  const c = useColors();
  return <div style={{ display: "flex", gap: T.spacing.md, padding: "14px 0", borderBottom: `1px solid ${c.gray100}`, alignItems: "flex-start" }}>
    <div style={{ position: "relative", flexShrink: 0 }}>
      <svg width={50} height={50 * (67/73)} viewBox="0 0 73 73" fill="none">
        <path d="M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z" fill={c.jerseyRed} stroke={c.white} strokeWidth={T.strokes.thick} />
      </svg>
      <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -38%)", fontFamily: F, fontSize: 18, fontWeight: 800, color: c.white }}>{jerseyNumber}</span>
    </div>
    <span style={{ fontFamily: F, fontSize: 13, fontWeight: T.typography.weights.regular, color: c.black, lineHeight: 1.5, flex: 1 }}>{text}</span>
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
  return <div style={{ width: "100%", maxWidth: 380, background: c.white, borderRadius: 14, boxShadow: "0 8px 30px rgba(0,0,0,0.15)", overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: `1px solid ${c.gray100}` }}>
      <h3 style={{ margin: 0, fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black }}>Notification Center</h3>
      <button onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ background: "none", border: "none", fontFamily: F, fontSize: 13, color: c.gray400, cursor: "pointer", borderRadius: T.radii.sm, ...(fo ? focusRing(c) : {}) }}>Clear all</button>
    </div>
    <div style={{ padding: "0 20px", maxHeight: 320, overflowY: "auto" }}>
      {items.map(function(it, i) { return <PNotificationItem key={i} jerseyNumber={it.num} text={it.text} />; })}
    </div>
  </div>;
}

type PMenuListItemProps = { label: string; badge?: number; variant?: "default" | "link" | "danger"; onClick?: () => void; _forceState?: string };
function PMenuListItem({ label, badge, variant = "default", onClick, _forceState }: PMenuListItemProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [fo, setFo] = useState(false);
  const state = _forceState || (pressed ? "active" : hovered ? "hover" : "default");
  var clr = variant === "link" ? c.primary : variant === "danger" ? c.errorRed : c.black;
  var bg = state === "active" ? c.cardHoverBg : state === "hover" ? c.gray50 : "transparent";
  return <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
    onFocus={() => setFo(true)} onBlur={() => setFo(false)}
    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "16px 8px", margin: "0 -8px", background: bg, border: "none", borderBottom: `1px solid ${c.gray100}`, cursor: "pointer", fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, color: clr, textAlign: "left", borderRadius: state !== "default" ? 8 : 0, transition: "background 0.15s", ...(fo ? focusRing(c) : {}) }}>
    <span>{label}{badge !== undefined && <span style={{ color: c.primary, marginLeft: T.spacing.xs }}>({badge})</span>}</span>
    {variant !== "danger" && <ChevronDown size={16} color={c.gray400} style={{ transform: "rotate(-90deg)" }} />}
  </button>;
}

type PClaimedPlayerCardProps = { teamName?: string; playerName?: string; number?: number; position?: string; height?: string };
function PClaimedPlayerCard({ teamName = "S.D Spartans", playerName = "Weiss Tal", number = 11, position = "Guard", height = "6'0" }: PClaimedPlayerCardProps) {
  const c = useColors();
  return <div style={{ background: c.cardBg, borderRadius: 14, padding: T.spacing.lg, display: "flex", alignItems: "center", gap: T.spacing.md }}>
    <div style={{ width: 52, height: 52, borderRadius: "50%", background: c.gray300, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <User size={24} color={c.gray400} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.medium, color: c.gray400 }}>{teamName}</div>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black }}>{playerName}</div>
      <div style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.regular, color: c.gray500 }}>#{number}, {position}, {height}</div>
    </div>
  </div>;
}

type PProfileSidebarProps = { open?: boolean };
function PProfileSidebar({ open = true }: PProfileSidebarProps) {
  const c = useColors();
  return <div style={{ display: "flex", width: "100%", height: 520, position: "relative", borderRadius: 14, overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: c.overlay }} />
    <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 300, background: c.white, padding: "20px 20px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: T.spacing.lg }}>
        <PAvatar initials="BR" size={36} />
        <span style={{ fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.bold, color: c.black, flex: 1 }}>Brenden Rogers</span>
        <button aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", color: c.black, display: "flex", borderRadius: T.radii.sm }}><X size={20} /></button>
      </div>
      <PClaimedPlayerCard />
      <div style={{ marginTop: T.spacing.md }}>
        <PBtn variant="premium" size="md" fullWidth={true}>Go to MyCareer Page</PBtn>
      </div>
      <div style={{ marginTop: T.spacing.lg, flex: 1 }}>
        <PMenuListItem label="Following" badge={14} />
        <PMenuListItem label="Language" />
        <PMenuListItem label="My Account" />
        <PMenuListItem label="Saved Videos" />
        <PMenuListItem label="My Highlights" />
        <PMenuListItem label="Claim Player" variant="link" />
      </div>
      <button aria-label="Log out" style={{ background: "none", border: "none", fontFamily: F, fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.regular, color: c.errorRed, cursor: "pointer", textAlign: "left", padding: "12px 0", borderRadius: T.radii.sm, width: "100%" }}>Log Out</button>
    </div>
  </div>;
}

type PHighlightCardProps = { title?: string; date?: string; duration?: string; locked?: boolean; emoji?: string };
function PHighlightCard({ title = "Weiss with the dimes", date = "NOV 13, 2025", duration = "1:23", locked = true, emoji = "\uD83C\uDFC0" }: PHighlightCardProps) {
  const c = useColors();
  return <div style={{ position: "relative", width: 130, height: 190, borderRadius: T.radii.badge, overflow: "hidden", background: c.heroBg, flexShrink: 0 }}>
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)" }} />
    <div style={{ position: "absolute", top: 6, left: 6, background: "rgba(0,0,0,0.55)", borderRadius: T.radii.pill, padding: "1px 5px", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: F, fontWeight: T.typography.weights.medium, fontSize: 9, color: "#FFFFFF", lineHeight: 1 }}>{duration}</span>
    </div>
    {locked
      ? <div style={{ position: "absolute", top: 6, right: 6, width: 24, height: 24, background: c.premiumDark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, border: `${T.strokes.medium}px solid ${c.premiumYellow}`, boxSizing: "border-box" }}><LockSvg size={8} fill={c.premiumYellow} /></div>
      : <div style={{ position: "absolute", top: 6, right: 6, width: 24, height: 24, borderRadius: "50%", background: c.gray500, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><Play size={10} color={c.jerseyStroke} fill={c.jerseyStroke} /></div>}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)", padding: "24px 8px 8px", zIndex: 1 }}>
      <div style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.bold, color: c.white, lineHeight: "14px" }}>{emoji} {title}</div>
      <div style={{ fontFamily: F, fontSize: 9, fontWeight: T.typography.weights.regular, color: c.gray300, marginTop: 3 }}>{date}</div>
    </div>
  </div>;
}

function PHighlightsBadge() {
  return <PBadge variant="highlights" />;
}

/* Player avatar chip — two types:
   1. Unclaimed: only jersey number + team color known → colored circle with number
   2. Claimed: profile completed with photo → photo circle + name underneath */
type PPlayerAvatarChipProps = { number?: number; name?: string; photo?: string; claimed?: boolean; selected?: boolean; onClick?: () => void; teamColor?: string };
function PPlayerAvatarChip({ number, name, photo, claimed = false, selected = false, onClick, teamColor = "#D0142C" }: PPlayerAvatarChipProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const sz = 56;
  const ring = selected ? `2.5px solid ${teamColor}` : hovered ? `2px solid ${c.gray300}` : `2px solid ${c.gray200}`;
  return <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    aria-label={(claimed ? name : "Player #" + number) + (selected ? " (selected)" : "")} aria-pressed={selected}
    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}>
    <div style={{ position: "relative", width: sz, height: sz }}>
      {claimed ? (
        /* Claimed — photo avatar (or initials fallback) */
        <div style={{ width: sz, height: sz, borderRadius: "50%", border: ring, overflow: "hidden", boxSizing: "border-box", transition: "border 0.15s", background: c.gray100, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {photo
            ? <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${teamColor}33 0%, ${teamColor}66 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: F, fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.bold, color: teamColor }}>{(name || "?").charAt(0).toUpperCase()}</span>
              </div>}
        </div>
      ) : (
        /* Unclaimed — solid team color circle + white jersey number */
        <div style={{ width: sz, height: sz, borderRadius: "50%", background: teamColor, border: selected ? `2.5px solid ${c.primary}` : hovered ? `2px solid ${teamColor}` : `2px solid transparent`, display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", transition: "all 0.15s" }}>
          <span style={{ fontFamily: F, fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.bold, color: c.white }}>{number}</span>
        </div>
      )}
      {selected && <div style={{ position: "absolute", bottom: -2, right: -2, width: 18, height: 18, background: c.primary, borderRadius: "50%", border: `2px solid ${c.white}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Check size={10} color={c.white} strokeWidth={3} />
      </div>}
    </div>
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.xxs, fontWeight: selected ? T.typography.weights.semibold : T.typography.weights.regular, color: selected ? c.darkText : c.gray500, maxWidth: 64, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "center" }}>
      {claimed ? name : `#${number}`}
    </span>
  </button>;
}

type PPlayerAvatarRowProps = { players?: any[]; selectedId?: number; onSelect?: (id: number) => void; teamColor?: string };
function PPlayerAvatarRow({ players, selectedId, onSelect, teamColor = "#D0142C" }: PPlayerAvatarRowProps) {
  const defaultPlayers = [
    { id: 1, number: 4, name: "Weiss T.", claimed: true },
    { id: 2, number: 11, name: "Cohen D.", claimed: true },
    { id: 3, number: 7, claimed: false },
    { id: 4, number: 23, claimed: false },
    { id: 5, number: 14, name: "Brown A.", claimed: true },
    { id: 6, number: 8, claimed: false },
  ];
  const p = players || defaultPlayers;
  return <div style={{ display: "flex", gap: T.spacing.md, overflowX: "auto", paddingBottom: T.spacing.sm, scrollbarWidth: "none" }}>
    {p.map(pl => <PPlayerAvatarChip key={pl.id} number={pl.number} name={pl.name} photo={pl.photo} claimed={pl.claimed} selected={selectedId === pl.id} onClick={() => onSelect && onSelect(pl.id)} teamColor={teamColor} />)}
  </div>;
}

/* Team card — exact Figma specs from "Manage following_Teams" Dev Mode:
   Card: display:flex, padding:12px 0 8px 0, flex-direction:column, align-items:center, gap:8px, flex:1 0 0, border-radius:12px, bg:#F5F5F5 (gray), NO border, NO shadow
   Team name: font-size:14px, font-weight:500, color:#6C7784, line-height:20px, height:40px (2-line clamp), text-align:center
   Divider: 1px with 10px vertical padding (spacing element)
   Follow label: height:18px, centered, text-secondary color
   Logo: 48×48 */
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

type PTeamFollowCardProps = { teamName?: string; followed?: boolean; onClick?: () => void };
function PTeamFollowCard({ teamName = "S.D Spartans Men", followed = false, onClick }: PTeamFollowCardProps) {
  const c = useColors();
  const [hovered, setHovered] = useState(false);
  const followLabel = followed ? "Following" : "Follow";
  const followColor = followed ? c.gray500 : c.primary;
  return <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    aria-pressed={followed} aria-label={(followed ? "Unfollow " : "Follow ") + teamName}
    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, flex: "1 0 0", minWidth: 0, padding: "12px 16px 8px 16px", background: hovered ? c.gray100 : c.gray50, borderRadius: T.radii.badge, border: "none", cursor: "pointer", transition: "background 0.15s" }}>
    <PTeamLogo size={48} name={teamName} />
    <span style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray500, textAlign: "center", lineHeight: "20px", height: 40, overflow: "hidden", alignSelf: "stretch", wordBreak: "break-word", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{teamName}</span>
    <div style={{ height: 1, alignSelf: "stretch", background: c.gray300 }} />
    <div style={{ height: 18, display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch" }}>
      <span style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.medium, color: followColor }}>{followLabel}</span>
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

type PFollowedPlayersSectionProps = { teams?: string[] };
function PFollowedPlayersSection({ teams = ["Maccabi Kiryat Gat", "Ironi Nahariya"] }: PFollowedPlayersSectionProps) {
  const c = useColors();
  var activeTeam = useState(0);
  var idx = activeTeam[0];
  var setIdx = activeTeam[1];
  return <div>
    <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: T.typography.weights.bold, color: c.black, marginBottom: T.spacing.md }}>Player Highlights</h3>
    <div style={{ display: "flex", borderBottom: `2px solid ${c.gray100}`, marginBottom: T.spacing.lg }}>
      {teams.map(function(t, i) {
        const [fo, setFo] = useState(false);
        return <button key={i} onClick={function() { setIdx(i); }} onFocus={() => setFo(true)} onBlur={() => setFo(false)} style={{ flex: 1, background: "none", border: "none", borderBottom: i === idx ? `2px solid ${c.accent}` : "2px solid transparent", padding: "10px 0", fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: i === idx ? 600 : 400, color: i === idx ? c.black : c.gray400, cursor: "pointer", marginBottom: -2, borderRadius: T.radii.sm, outline: fo ? `2px solid ${c.primary}` : "none", outlineOffset: 2 }}>{t}</button>;
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
// EMPTY / ERROR / OFFLINE STATES
// ════════════════════════════════

const EMPTY_PRESETS = {
  noLiveGames:       { icon: "play",     title: "No Live Games",            subtitle: "There are no live games right now. Check back later!",                     cta: null },
  noFollowing:       { icon: "user",     title: "Not Following Anyone Yet", subtitle: "Follow teams and athletes to see their games and highlights here.",         cta: "Browse Teams" },
  noRecentGames:     { icon: "play",     title: "No Recent Games",          subtitle: "Games you follow will show up here once they're played.",                   cta: null },
  noNotifications:   { icon: "bell",     title: "No Notifications",         subtitle: "You're all caught up! New updates will appear here.",                       cta: null },
  noHighlights:      { icon: "play",     title: "No Highlights Yet",        subtitle: "Highlights for this game are still being processed.",                       cta: null },
  noPersonal:        { icon: "play",     title: "No Personal Highlights",   subtitle: "Claim a player to get personalized highlight reels after each game.",       cta: "Claim Player" },
  noPlayerStats:     { icon: "search",   title: "Stats Unavailable",        subtitle: "Player statistics were not recorded for this game.",                        cta: null },
  noFollowedPlayers: { icon: "user",     title: "No Followed Players",      subtitle: "You're not following any players in this game.",                            cta: "Browse Players" },
  noSavedVideos:     { icon: "bookmark", title: "No Saved Videos",          subtitle: "Videos you bookmark will be saved here for easy access.",                   cta: null },
  noSearchResults:   { icon: "search",   title: "No Results Found",         subtitle: "Try a different search term or check for typos.",                           cta: null },
  noTeamsFound:      { icon: "search",   title: "No Teams Found",           subtitle: "We couldn't find teams in your area. Try searching manually.",              cta: "Search Teams" },
  noClaimedPlayer:   { icon: "user",     title: "No Claimed Player",        subtitle: "Claim your player profile to unlock personal highlights and career stats.", cta: "Claim Player" },
};

const ICON_MAP = { play: Play, user: User, bell: Bell, search: Search, bookmark: Bookmark };

type PEmptyStateProps = { preset?: string; icon?: ReactNode; title?: string; subtitle?: string; cta?: string; onAction?: () => void };
function PEmptyState({ preset, icon, title, subtitle, cta, onAction }: PEmptyStateProps) {
  const c = useColors();
  const p = preset ? EMPTY_PRESETS[preset] || {} : {};
  const _icon = icon || p.icon || "search";
  const _title = title || p.title || "Nothing Here";
  const _subtitle = subtitle || p.subtitle || "";
  const _cta = cta !== undefined ? cta : (p.cta || null);
  const IconComp = ICON_MAP[_icon] || Search;
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: `40px ${T.spacing.xl}px`, textAlign: "center" }}>
    <div style={{ width: 64, height: 64, borderRadius: "50%", background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: T.spacing.lg }}>
      <IconComp size={28} color={c.gray400} role="img" aria-label={_title} />
    </div>
    <div style={{ fontFamily: F, fontSize: 18, fontWeight: T.typography.weights.bold, color: c.darkText, marginBottom: T.spacing.sm }}>{_title}</div>
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, lineHeight: 1.5, maxWidth: 280, marginBottom: _cta ? T.spacing.xl : 0 }}>{_subtitle}</div>
    {_cta && <PBtn variant="primary" size="md" fullWidth={false} onClick={onAction}>{_cta}</PBtn>}
  </div>;
}

type PErrorStateProps = { variant?: "generic" | "offline" | "404"; title?: string; subtitle?: string; onRetry?: () => void };
function PErrorState({ variant = "generic", title, subtitle, onRetry }: PErrorStateProps) {
  const c = useColors();
  const variants = {
    generic:  { title: "Something Went Wrong",     subtitle: "An unexpected error occurred. Please try again." },
    network:  { title: "Connection Error",          subtitle: "Please check your internet connection and try again." },
    timeout:  { title: "Request Timed Out",         subtitle: "The server took too long to respond. Please try again." },
    video:    { title: "Video Unavailable",         subtitle: "This video failed to load. It may still be processing." },
    data:     { title: "Failed to Load Data",       subtitle: "We couldn't load this content right now. Please try again." },
    auth:     { title: "Session Expired",           subtitle: "Your session has expired. Please sign in again." },
  };
  const v = variants[variant] || variants.generic;
  const _title = title || v.title;
  const _sub = subtitle || v.subtitle;
  const isAuth = variant === "auth";
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: `40px ${T.spacing.xl}px`, textAlign: "center" }}>
    <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${c.errorRed}14`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: T.spacing.lg }}>
      <X size={28} color={c.errorRed} role="img" aria-label={_title} />
    </div>
    <div style={{ fontFamily: F, fontSize: 18, fontWeight: T.typography.weights.bold, color: c.darkText, marginBottom: T.spacing.sm }}>{_title}</div>
    <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.regular, color: c.gray500, lineHeight: 1.5, maxWidth: 280, marginBottom: T.spacing.xl }}>{_sub}</div>
    <PBtn variant={isAuth ? "primary" : "muted"} size="md" fullWidth={false} onClick={onRetry}>
      {isAuth ? "Sign In" : "Try Again"}
    </PBtn>
  </div>;
}

function PTypographyPreview() {
  const c = useColors();
  return (
    <div style={{ fontFamily: F, display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
      <div style={{ fontSize: T.typography.sizes.xxl, fontWeight: T.typography.weights.bold, color: c.darkText }}>Page Title — 24px Bold</div>
      <div style={{ fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, color: c.darkText }}>Section Heading — 22px Bold</div>
      <div style={{ fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.medium, color: c.darkText }}>Subtitle — 20px Medium</div>
      <div style={{ fontSize: T.typography.sizes.base, fontWeight: T.typography.weights.medium, color: c.darkText }}>Input / Body / Menu Item — 16px Medium</div>
      <div style={{ fontSize: T.typography.sizes.sm, fontWeight: T.typography.weights.medium, color: c.gray400 }}>Button / Tab — 15px Medium</div>
      <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, color: c.white, background: c.heroBg, padding: "4px 10px", borderRadius: 8, display: "inline-block" }}>Video Label — 14px Semibold White</div>
      <div style={{ fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray400 }}>Link / Caption — 14px Medium</div>
      <div style={{ fontSize: 13, fontWeight: T.typography.weights.regular, color: c.darkText }}>Notification Text — 13px Regular</div>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, textTransform: "uppercase", background: c.highlightsBadgeBg, color: c.highlightsBadgeText, padding: "4px 12px", borderRadius: T.radii.badge, display: "inline-block" }}>Badge Label — 11px Bold Uppercase</div>
      <div style={{ fontSize: T.typography.sizes.jersey, fontWeight: T.typography.weights.bold, color: c.white, background: c.jerseyRed, width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>7</div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>Jersey Number — 29px Bold White</div>
    </div>
  );
}

function PSpacingPreview() {
  const c = useColors();
  return (
    <div style={{ display: "flex", gap: T.spacing.md, flexWrap: "wrap", alignItems: "flex-end" }}>
      {Object.entries(T.spacing).map(([k, v]) => <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
        <div style={{ width: v, height: v, background: c.primary, borderRadius: 2, minWidth: 4, minHeight: 4 }} />
        <span style={{ fontSize: 10, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{k}</span>
        <span style={{ fontSize: 10, color: c.gray400, fontFamily: "monospace" }}>{v}px</span>
      </div>)}
    </div>
  );
}

function PSizesPreview() {
  const c = useColors();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
      {Object.entries(T.sizes).map(([k, v]) => <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 10px", background: c.gray50, borderRadius: 6 }}>
        <span style={{ fontSize: 12, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{k}</span>
        <span style={{ fontSize: 12, color: c.gray400, fontFamily: "monospace" }}>{v}px</span>
      </div>)}
    </div>
  );
}

function PRadiiPreview() {
  const c = useColors();
  return (
    <div style={{ display: "flex", gap: T.spacing.lg, flexWrap: "wrap", alignItems: "flex-end" }}>
      {Object.entries(T.radii).map(([k, v]) => {
        const isPill = k === "pill";
        return <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
          <div style={{ width: isPill ? 80 : 48, height: isPill ? 32 : 48, background: c.primary, borderRadius: isPill ? v : Math.min(v, 24), opacity: 0.15 }} />
          <span style={{ fontSize: 10, fontWeight: T.typography.weights.semibold, color: c.darkText }}>{k}</span>
          <span style={{ fontSize: 10, color: c.gray400, fontFamily: "monospace" }}>{v}px</span>
        </div>;
      })}
    </div>
  );
}

type PropsBlockProps = { children?: ReactNode; variant?: "dark" | "light" };
function PropsBlock({ children, variant = "dark" }: PropsBlockProps) {
  const c = useColors();
  const clr = variant === "muted" ? c.gray500 : variant === "subtle" ? c.gray400 : c.darkText;
  return <div style={{ fontSize: 13, color: clr, lineHeight: 1.8, fontFamily: "monospace" }}>{children}</div>;
}

type ProseBlockProps = { children?: ReactNode; variant?: "muted" | "default" };
function ProseBlock({ children, variant = "muted" }: ProseBlockProps) {
  const c = useColors();
  const clr = variant === "subtle" ? c.gray400 : c.gray500;
  return <div style={{ fontSize: 13, color: clr, lineHeight: 1.6 }}>{children}</div>;
}

function SpecBlock({ children, variant = "dark", lineHeight = 2 }) {
  const c = useColors();
  const clr = variant === "muted" ? c.gray500 : c.darkText;
  return <div style={{ fontSize: 13, color: clr, lineHeight, fontFamily: F }}>{children}</div>;
}

function PChipStatesPreview() {
  const c = useColors();
  const base = { border: "none", borderRadius: T.radii.chip, padding: "8px 12px", fontSize: T.typography.sizes.base, height: 40, display: "flex", alignItems: "center", gap: T.spacing.sm, fontFamily: F, whiteSpace: "nowrap", flexShrink: 0, cursor: "default" };
  const rows = [
    { label: "active (selected)", states: [
      { s: "default",  style: { ...base, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white } },
      { s: "hover",    style: { ...base, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white } },
      { s: "pressed",  style: { ...base, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white } },
      { s: "disabled", style: { ...base, fontWeight: T.typography.weights.semibold, background: c.grayOverlay, color: c.disabledTextOnDark } },
    ], chip: "Full Game", lock: false },
    { label: "inactive (free content)", states: [
      { s: "default",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray100, color: c.black } },
      { s: "hover",    style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray200, color: c.black } },
      { s: "pressed",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray300, color: c.black } },
      { s: "disabled", style: { ...base, fontWeight: T.typography.weights.regular, background: c.grayOverlay, color: c.disabledTextOnDark } },
    ], chip: "Full Game", lock: false },
    { label: "inactive + lock (premium)", states: [
      { s: "default",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray100, color: c.black } },
      { s: "hover",    style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray200, color: c.black } },
      { s: "pressed",  style: { ...base, fontWeight: T.typography.weights.regular, background: c.gray300, color: c.black } },
      { s: "disabled", style: { ...base, fontWeight: T.typography.weights.regular, background: c.grayOverlay, color: c.disabledTextOnDark } },
    ], chip: "Condensed", lock: true },
  ];
  return <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    {rows.map(r => <div key={r.label}>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>{r.label}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.sm }}>
        {r.states.map(({ s, style }) => <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <button style={style}>{r.lock && <ChipLockSvg />} {r.chip}</button>
          <span style={{ fontSize: 9, color: c.gray400 }}>{s}</span>
        </div>)}
      </div>
    </div>)}
  </div>;
}

function PChipAllActivePreview() {
  const c = useColors();
  const cb = { border: "none", borderRadius: T.radii.chip, padding: "8px 12px", fontSize: T.typography.sizes.base, height: 40, display: "flex", alignItems: "center", gap: T.spacing.sm, fontFamily: F, whiteSpace: "nowrap", flexShrink: 0 };
  const act = { ...cb, fontWeight: T.typography.weights.semibold, background: c.jerseyRed, color: c.white };
  const ina = { ...cb, fontWeight: T.typography.weights.regular, background: c.gray100, color: c.black };
  const row = { display: "flex", gap: T.spacing.md, flexWrap: "nowrap", overflowX: "auto" };
  return <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
    <div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>Full Game active</div>
      <div style={row}>
        <button style={act}>Full Game</button>
        <button style={ina}><ChipLockSvg /> Condensed Game</button>
        <button style={ina}><ChipLockSvg /> Game Highlights</button>
      </div>
    </div>
    <div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>Condensed Game active</div>
      <div style={row}>
        <button style={ina}>Full Game</button>
        <button style={act}><ChipLockSvg /> Condensed Game</button>
        <button style={ina}><ChipLockSvg /> Game Highlights</button>
      </div>
    </div>
    <div>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>Game Highlights active</div>
      <div style={row}>
        <button style={ina}>Full Game</button>
        <button style={ina}><ChipLockSvg /> Condensed Game</button>
        <button style={act}><ChipLockSvg /> Game Highlights</button>
      </div>
    </div>
  </div>;
}

function PTeamRowPreview() {
  const c = useColors();
  return <>
    <div style={{ display: "flex", flexDirection: "column", gap: 10, background: c.gray100, borderRadius: 14, padding: T.spacing.lg }}>
      <PTeamRow name="M. Kiryat Gat" score="87" isWinner={true} />
      <PTeamRow name="H. Haifa" score="79" isWinner={false} />
    </div>
    <div style={{ marginTop: T.spacing.md, display: "flex", flexDirection: "column", gap: 10, background: c.gray100, borderRadius: 14, padding: T.spacing.lg }}>
      <PTeamRow name="Maccabi Kiryat Gat" score="89" isWinner={true} logoSize={27} fontWeight={400} gap={8} />
      <PTeamRow name="Ironi Nahariya" score="77" isWinner={false} logoSize={27} fontWeight={400} gap={8} />
    </div>
    <p style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.sm }}>Top: LiveGameCard style (28px logo, 500 weight, 12px gap) · Bottom: GameResultCard style (27px logo, 400 weight, 8px gap)</p>
  </>;
}

type PAuthPagePreviewProps = { tab: string; setTab: (v: string) => void };
function PAuthPagePreview({ tab, setTab }: PAuthPagePreviewProps) {
  const c = useColors();
  return <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: 390, background: c.white, borderRadius: T.radii.lg, boxShadow: "0 4px 24px rgba(0,0,0,0.12)", overflow: "hidden" }}>
      <PBrandHero primaryColor="#1A3B8A" logoSize={80} height={340} />
      <div style={{ padding: "14px 14px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
        <PTabs tabs={[{ label: "Sign In", value: "signin" }, { label: "Sign Up", value: "signup" }]} active={tab} onSelect={setTab} />
        {tab === "signin" ? <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontFamily: F, fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Sign In</h2>
          <PInput placeholder="Email Address..." type="email" /><PInput placeholder="Enter password..." type="password" />
          <PBtn>Sign in</PBtn>
          <div style={{ textAlign: "center" }}><PLink>Forgot password?</PLink></div>
          <PDivider />
          <PBtn variant="social"><AppleIcon />{" "}Continue with Apple</PBtn>
          <PBtn variant="social"><GoogleIcon />{" "}Continue with Google</PBtn>
        </div> : <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontFamily: F, fontSize: T.typography.sizes.xl, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Create Account</h2>
          <PInput placeholder="Full Name..." /><PSelect placeholder="Age..." /><PInput placeholder="Phone Number..." type="tel" /><PInput placeholder="Email Address..." type="email" /><PInput placeholder="Create password..." type="password" />
          <PBtn>Create Account</PBtn><PDivider />
          <PBtn variant="social"><AppleIcon />{" "}Continue with Apple</PBtn>
          <PBtn variant="social"><GoogleIcon />{" "}Continue with Google</PBtn>
          <p style={{ textAlign: "center", fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.medium, color: c.gray400, margin: 0 }}>Already have an account? <PLink variant="accent">Sign in</PLink></p>
        </div>}
      </div>
    </div>
  </div>;
}

type POnboardingPreviewProps = { selJerseys: number[]; toggleJ: (n: number) => void };
function POnboardingPreview({ selJerseys, toggleJ }: POnboardingPreviewProps) {
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
          <p style={{ fontFamily: F, fontSize: 17, fontWeight: T.typography.weights.medium, color: c.darkText, margin: "8px 0 0" }}>To personalize your experience, choose the player&apos;s jersey number you want to follow.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 style={{ fontFamily: F, fontSize: T.typography.sizes.lg, fontWeight: T.typography.weights.bold, margin: 0, color: c.darkText }}>Maccabi Kiryat Gat</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 18, padding: "0 4px" }}>
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

type POfflineBannerProps = { onRetry?: () => void };
function POfflineBanner({ onRetry }: POfflineBannerProps) {
  const c = useColors();
  const mode = useThemeMode();
  const errBg = mode === "dark" ? "rgba(239,68,68,0.1)" : "#FEF2F2";
  const errBorder = mode === "dark" ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.15)";
  return <div style={{ display: "flex", alignItems: "center", gap: T.spacing.md, background: errBg, borderRadius: T.radii.badge, padding: "12px 16px", border: `1px solid ${errBorder}` }}>
    <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.errorRed, flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: F, fontSize: T.typography.sizes.xs, fontWeight: T.typography.weights.semibold, color: c.darkText }}>You're offline</div>
      <div style={{ fontFamily: F, fontSize: 12, fontWeight: T.typography.weights.regular, color: c.gray500 }}>Check your connection and try again</div>
    </div>
    <button onClick={onRetry} style={{ background: "none", border: "none", fontFamily: F, fontSize: 13, fontWeight: T.typography.weights.semibold, color: c.errorRed, cursor: "pointer", flexShrink: 0, borderRadius: T.radii.sm }}>Retry</button>
  </div>;
}

function PSkeletonBlock({ width, height, borderRadius, style }: { width?: number|string, height?: number|string, borderRadius?: number, style?: any }) {
  const c = useColors();
  return <div style={{
    width: width || "100%",
    height: height || 16,
    borderRadius: borderRadius || T.radii.sm,
    background: `linear-gradient(90deg, ${c.gray100} 25%, ${c.gray50} 50%, ${c.gray100} 75%)`,
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite ease-in-out",
    ...style
  }} />;
}

function PSkeletonCard() {
  const c = useColors();
  return <div style={{ background: c.white, border: `1px solid ${c.gray100}`, borderRadius: T.radii.md, overflow: "hidden" }}>
    <div style={{ width: "100%", height: 180, background: `linear-gradient(90deg, ${c.gray100} 25%, ${c.gray50} 50%, ${c.gray100} 75%)`, backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite ease-in-out" }} />
    <div style={{ padding: T.spacing.md, display: "flex", flexDirection: "column", gap: T.spacing.sm }}>
      <PSkeletonBlock height={20} style={{ width: "80%" }} />
      <PSkeletonBlock height={16} style={{ width: "100%" }} />
      <PSkeletonBlock height={16} style={{ width: "90%" }} />
    </div>
  </div>;
}

function PSkeletonInput() {
  return <PSkeletonBlock height={T.sizes.inputHeight} borderRadius={T.radii.sm} />;
}

function PLoadingSpinner({ size }: { size?: number } = {}) {
  const c = useColors();
  const s = size || 24;
  return <div style={{
    width: s,
    height: s,
    border: `3px solid ${c.gray100}`,
    borderTop: `3px solid ${c.primary}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }} />;
}

C.brandHero = `<template>
  <section class="brand-hero" :style="heroStyle" role="banner">
    <slot>
      <PixellotLogo :size="logoSize" aria-label="Pixellot logo" />
    </slot>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  primaryColor?: string
  logoSize?:     number
  height?:       number
  ariaLabel?:    string
}>()
withDefaults(props, {
  primaryColor: '#1A3B8A',
  logoSize: 80,
  height: 340,
  ariaLabel: 'Hero banner',
})

const darkerColor = computed(() => {
  const hex = props.primaryColor!.replace('#', '')
  const r = Math.max(0, Math.round(parseInt(hex.substring(0, 2), 16) * 0.7))
  const g = Math.max(0, Math.round(parseInt(hex.substring(2, 4), 16) * 0.7))
  const b = Math.max(0, Math.round(parseInt(hex.substring(4, 6), 16) * 0.7))
  return \`rgb(\${r},\${g},\${b})\`
})

const heroStyle = computed(() => ({
  width: '100%',
  height: props.height + 'px',
  background: \`linear-gradient(180deg, \${props.primaryColor} 0%, \${darkerColor.value} 100%)\`,
  borderRadius: '0 0 32px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
</script>

<style scoped>
.brand-hero {
  position: relative; overflow: hidden;
}
</style>`;

C.emptyState = `<template>
  <section class="empty-state" role="status"
    :aria-label="ariaLabel || title">
    <div class="empty-state__icon" aria-hidden="true">
      <component :is="iconComponent" :size="28"
        :color="iconColor" />
    </div>
    <h3 class="empty-state__title">{{ title }}</h3>
    <p v-if="subtitle" class="empty-state__subtitle">{{ subtitle }}</p>
    <AppButton v-if="cta" variant="primary" size="md"
      :fullWidth="false" @click="$emit('action')">
      {{ cta }}
    </AppButton>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  icon?:      string
  title?:     string
  subtitle?:  string
  cta?:       string | null
  preset?:    string | null
  ariaLabel?: string
  iconColor?: string
}>()
withDefaults(props, {
  icon: 'search',
  title: 'No results',
  subtitle: '',
  cta: null,
  preset: null,
  iconColor: '#979797',
})
defineEmits<{ action: [] }>()

const iconComponent = computed(() => {
  const icons: Record<string, string> = {
    search: 'SearchIcon',
    empty: 'InboxIcon',
    error: 'AlertCircleIcon',
    lock: 'LockIcon',
  }
  return icons[props.icon || 'search'] || 'SearchIcon'
})
</script>

<style scoped>
.empty-state {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 48px 24px; text-align: center;
  min-height: 300px; background: transparent;
}
.empty-state__icon {
  margin-bottom: 24px; display: flex; align-items: center;
  justify-content: center;
}
.empty-state__title {
  margin: 0 0 12px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 18px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.empty-state__subtitle {
  margin: 0 0 24px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 14px; font-weight: 400;
  color: var(--color-gray-500, #6C6C6C); max-width: 400px;
}

@media (prefers-color-scheme: dark) {
  .empty-state__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .empty-state__subtitle {
    color: var(--color-gray-400-dark, #888888);
  }
}
</style>`;

C.errorState = `<template>
  <section class="error-state" role="alert"
    :aria-label="ariaLabel || title">
    <div class="error-state__icon" aria-hidden="true">
      <XIcon :size="28" color="var(--color-error-red, #EF4444)" />
    </div>
    <h3 class="error-state__title">{{ title }}</h3>
    <p v-if="subtitle" class="error-state__subtitle">{{ subtitle }}</p>
    <AppButton :variant="variant === 'auth' ? 'primary' : 'muted'" size="md"
      :fullWidth="false" @click="$emit('retry')">
      {{ buttonLabel }}
    </AppButton>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  variant?:    'generic' | 'network' | 'timeout' | 'video' | 'data' | 'auth'
  title?:      string | null
  subtitle?:   string | null
  ariaLabel?:  string
}>()
withDefaults(props, {
  variant: 'generic',
  title: null,
  subtitle: null,
})
defineEmits<{ retry: [] }>()

const defaultTitles: Record<string, string> = {
  generic: 'Something went wrong',
  network: 'Network error',
  timeout: 'Connection timeout',
  video: 'Video unavailable',
  data: 'Failed to load data',
  auth: 'Sign in required',
}

const defaultSubtitles: Record<string, string> = {
  generic: 'Please try again',
  network: 'Check your connection and try again',
  timeout: 'Your connection timed out',
  video: 'This video is not available',
  data: 'Unable to load the requested content',
  auth: 'You need to sign in to continue',
}

const displayTitle = computed(() =>
  props.title || defaultTitles[props.variant || 'generic'] || 'Something went wrong'
)

const displaySubtitle = computed(() =>
  props.subtitle || defaultSubtitles[props.variant || 'generic'] || ''
)

const buttonLabel = computed(() =>
  props.variant === 'auth' ? 'Sign In' : 'Try Again'
)
</script>

<style scoped>
.error-state {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 48px 24px; text-align: center;
  min-height: 300px; background: transparent;
}
.error-state__icon {
  margin-bottom: 24px; display: flex; align-items: center;
  justify-content: center;
}
.error-state__title {
  margin: 0 0 12px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 18px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.error-state__subtitle {
  margin: 0 0 24px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 14px; font-weight: 400;
  color: var(--color-gray-500, #6C6C6C); max-width: 400px;
}

@media (prefers-color-scheme: dark) {
  .error-state__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .error-state__subtitle {
    color: var(--color-gray-400-dark, #888888);
  }
}
</style>`;

C.offlineBanner = `<template>
  <div class="offline-banner" role="alert"
    aria-label="Offline status notification">
    <div class="offline-banner__dot" aria-hidden="true" />
    <div class="offline-banner__text">
      <span class="offline-banner__title">{{ title }}</span>
      <span class="offline-banner__subtitle">{{ subtitle }}</span>
    </div>
    <button class="offline-banner__retry focus-ring"
      @click="$emit('retry')">{{ buttonLabel }}</button>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  title?:       string
  subtitle?:    string
  buttonLabel?: string
}>()
withDefaults(props, {
  title: 'You\\'re offline',
  subtitle: 'Check your connection and try again',
  buttonLabel: 'Retry',
})
defineEmits<{ retry: [] }>()
</script>

<style scoped>
.offline-banner {
  display: flex; align-items: center; gap: 12px;
  background: var(--color-error-red, #EF4444);
  color: #FFFFFF; padding: 12px 16px; border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.offline-banner__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #FFFFFF; flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.offline-banner__text {
  flex: 1; display: flex; flex-direction: column; gap: 2px;
}
.offline-banner__title {
  font-family: 'Red Hat Display', sans-serif; font-size: 13px;
  font-weight: 600; display: block;
}
.offline-banner__subtitle {
  font-family: 'Red Hat Display', sans-serif; font-size: 11px;
  font-weight: 400; display: block; opacity: 0.95;
}
.offline-banner__retry {
  background: rgba(255, 255, 255, 0.2); border: none;
  color: #FFFFFF; font-family: 'Red Hat Display', sans-serif;
  font-size: 12px; font-weight: 600; padding: 6px 12px;
  border-radius: 6px; cursor: pointer; outline: none;
  transition: all 0.15s; flex-shrink: 0;
}
.offline-banner__retry:hover {
  background: rgba(255, 255, 255, 0.3);
}
.offline-banner__retry:focus-visible {
  outline: 2px solid #FFFFFF; outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .offline-banner {
    background: var(--color-error-red-dark, #FF6B6B);
  }
}
</style>`;

C.skeletonBlock = `<template>
  <div class="skeleton-block" role="status" aria-busy="true" aria-label="Content loading..." />
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  width?:       number|string
  height?:      number|string
  borderRadius? : number
}>()
withDefaults(props, {
  width: '100%',
  height: 16,
  borderRadius: 4,
})

const blockStyle = computed(() => ({
  width: typeof props.width === 'number' ? props.width + 'px' : props.width,
  height: typeof props.height === 'number' ? props.height + 'px' : props.height,
  borderRadius: props.borderRadius + 'px',
  background: 'linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s infinite ease-in-out',
}))
</script>

<style scoped>
.skeleton-block {
  display: block;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-color-scheme: dark) {
  .skeleton-block {
    background: linear-gradient(90deg, var(--color-gray-100-dark, #333333) 25%, var(--color-gray-50-dark, #262626) 50%, var(--color-gray-100-dark, #333333) 75%) !important;
  }
}
</style>`;

C.skeletonCard = `<template>
  <div class="skeleton-card" role="status" aria-busy="true" aria-label="Card loading...">
    <div class="skeleton-card__image" />
    <div class="skeleton-card__content">
      <div class="skeleton-card__title" />
      <div class="skeleton-card__line" />
      <div class="skeleton-card__line" style="width: 90%" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } — vue
</script>

<style scoped>
.skeleton-card {
  background: var(--color-white, #FFFFFF);
  border: 1px solid var(--color-gray-100, #EDEDED);
  border-radius: 16px;
  overflow: hidden;
}

.skeleton-card__image {
  width: 100%; height: 180px;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

.skeleton-card__content {
  padding: 12px; display: flex; flex-direction: column; gap: 8px;
}

.skeleton-card__title {
  height: 20px; width: 80%;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite ease-in-out;
}

.skeleton-card__line {
  height: 16px; width: 100%;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-color-scheme: dark) {
  .skeleton-card {
    background: var(--color-white-dark, #1A1A1A);
    border-color: var(--color-gray-100-dark, #333333);
  }

  .skeleton-card__image,
  .skeleton-card__title,
  .skeleton-card__line {
    background: linear-gradient(90deg, var(--color-gray-100-dark, #333333) 25%, var(--color-gray-50-dark, #262626) 50%, var(--color-gray-100-dark, #333333) 75%) !important;
  }
}
</style>`;

C.skeletonInput = `<template>
  <div class="skeleton-input" role="status" aria-busy="true" aria-label="Input loading..." />
</template>
<script setup lang="ts">
// import { ref, computed } — vue
</script>

<style scoped>
.skeleton-input {
  width: 100%; height: 46px;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-color-scheme: dark) {
  .skeleton-input {
    background: linear-gradient(90deg, var(--color-gray-100-dark, #333333) 25%, var(--color-gray-50-dark, #262626) 50%, var(--color-gray-100-dark, #333333) 75%) !important;
  }
}
</style>`;

C.loadingSpinner = `<template>
  <div class="loading-spinner" :class="{ ['spinner--' + size]: size }"
    role="status" aria-busy="true" :aria-label="ariaLabel" />
</template>
<script setup lang="ts">
// import { ref, computed } — vue

const props = defineProps<{
  size?:       'sm' | 'md' | 'lg'
  ariaLabel?:  string
}>()
withDefaults(props, {
  size: 'md',
  ariaLabel: 'Loading...',
})
</script>

<style scoped>
.loading-spinner {
  display: inline-block;
  border: 3px solid var(--color-gray-100, #EDEDED);
  border-top-color: var(--color-primary, #116DFF);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner--sm {
  width: 16px; height: 16px;
}

.spinner--md {
  width: 24px; height: 24px;
}

.spinner--lg {
  width: 32px; height: 32px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (prefers-color-scheme: dark) {
  .loading-spinner {
    border-color: var(--color-gray-100-dark, #333333);
    border-top-color: var(--color-primary-dark, #3B8BFF);
  }
}
</style>`;

// ── Nav button (extracted so useState is safe inside .filter().map()) ──
function NavBtn({ s, sec, setSec, isMobile, setNavOpen }: { s: any, sec: string, setSec: (v: string) => void, isMobile: boolean, setNavOpen: (v: boolean) => void }) {
  const c = useColors();
  const [fo, setFo] = useState(false);
  return <button onClick={() => { if (!s.disabled) { setSec(s.id); if (isMobile) setNavOpen(false); } }} aria-current={sec === s.id ? "page" : undefined} onFocus={() => !s.disabled && setFo(true)} onBlur={() => setFo(false)} style={{ display: "block", width: "100%", padding: "7px 14px", border: "none", textAlign: "left", cursor: s.disabled ? "default" : "pointer", fontSize: 12, fontWeight: sec === s.id ? 600 : (s.disabled ? 700 : 400), background: sec === s.id ? `${c.primary}15` : "transparent", color: s.disabled ? c.gray400 : (sec === s.id ? c.primary : c.gray500), borderLeft: sec === s.id ? `3px solid ${c.primary}` : "3px solid transparent", opacity: s.disabled ? 0.6 : 1, transition: "background 0.3s ease, color 0.3s ease", borderRadius: T.radii.sm, outline: fo ? `2px solid ${c.primary}` : "none", outlineOffset: -2 }}>{s.label}</button>;
}

// ── Input Playground ──
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
  const toggleStyle = (active) => ({ padding: "4px 10px", fontSize: 11, fontWeight: active ? 600 : 400, border: `1px solid ${active ? c.primary : c.gray200}`, background: active ? `${c.primary}15` : c.white, color: active ? c.primary : c.gray500, borderRadius: T.radii.sm, cursor: "pointer", fontFamily: F });
  return <div style={{ maxWidth: 398 }}>
    <div style={{ marginBottom: T.spacing.lg }}>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.sm }}>Quick Presets</div>
      <div style={{ display: "flex", gap: T.spacing.sm, flexWrap: "wrap" }}>
        {presets.map(p => <button key={p.label} onClick={p.fn} style={{ padding: "5px 12px", fontSize: 12, fontWeight: 500, border: `1px solid ${c.gray200}`, background: c.white, color: c.darkText, borderRadius: T.radii.chip, cursor: "pointer", fontFamily: F }}>{p.label}</button>)}
      </div>
    </div>
    <div style={{ marginBottom: T.spacing.lg }}>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.sm }}>Type</div>
      <div style={{ display: "flex", gap: T.spacing.xs }}>
        {types.map(t => <button key={t} onClick={() => { setInputType(t); setPlaceholder(t === "password" ? "Enter password..." : t === "tel" ? "Phone Number..." : t === "email" ? "Email Address..." : "Full Name..."); }} style={toggleStyle(inputType === t)}>{t}</button>)}
      </div>
    </div>
    <div style={{ marginBottom: T.spacing.lg, display: "flex", gap: T.spacing.xl }}>
      <label style={{ display: "flex", alignItems: "center", gap: T.spacing.xs, fontSize: 12, color: c.gray500, cursor: "pointer", fontFamily: F }}>
        <input type="checkbox" checked={error} onChange={e => { setError(e.target.checked); if (e.target.checked && !errorMsg) setErrorMsg("This field is required"); if (!e.target.checked) setErrorMsg(""); }} /> Error
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: T.spacing.xs, fontSize: 12, color: c.gray500, cursor: "pointer", fontFamily: F }}>
        <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} /> Disabled
      </label>
    </div>
    {error && <div style={{ marginBottom: T.spacing.lg }}>
      <div style={{ fontSize: T.typography.sizes.xxs, fontWeight: T.typography.weights.bold, color: c.gray400, textTransform: "uppercase", letterSpacing: 1, marginBottom: T.spacing.sm }}>Error Message</div>
      <input value={errorMsg} onChange={e => setErrorMsg(e.target.value)} style={{ width: "100%", padding: "6px 10px", fontSize: 12, border: `1px solid ${c.gray200}`, borderRadius: T.radii.sm, fontFamily: F, background: c.white, color: c.darkText, boxSizing: "border-box" }} />
    </div>}
    <div style={{ padding: T.spacing.lg, background: c.gray50, borderRadius: T.radii.badge, border: `1px solid ${c.gray100}` }}>
      <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>Live Preview</div>
      <PInput placeholder={placeholder} type={inputType} error={error} errorMsg={error ? errorMsg : undefined} disabled={disabled} />
    </div>
  </div>;
}

// ════════════════════════════════
// MAIN EXPLORER
// ════════════════════════════════
export default function PixellotDesignSystem() {
  const [theme, setTheme] = useState("light");
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
    { id: "overview", label: "🔍 Overview" },
    { id: "tokens", label: "🎨 Design Tokens" },
    { id: "divider-inputs", label: "── Inputs ──", disabled: true },
    { id: "input", label: "AppInput" },
    { id: "select", label: "AppSelect" },
    { id: "divider-buttons", label: "── Buttons & Navigation ──", disabled: true },
    { id: "button", label: "AppButton" },
    { id: "icons", label: "Icons" },
    { id: "tabs", label: "AppTabs" },
    { id: "divider-badges", label: "── Badges ──", disabled: true },
    { id: "badges", label: "AppBadge" },
    { id: "divider-cards", label: "── Cards ──", disabled: true },
    { id: "livegamecard", label: "LiveGameCard" },
    { id: "gameresultcard", label: "GameResultCard" },
    { id: "highlightcard", label: "HighlightCard" },
    { id: "scorecard", label: "ScoreCard" },
    { id: "productcard", label: "ProductCard" },
    { id: "divider-video", label: "── Videos ──", disabled: true },
    { id: "videothumbnail", label: "VideoThumbnail" },
    { id: "videotypechips", label: "VideoTypeChips" },
    { id: "divider-sharing", label: "── Sharing ──", disabled: true },
    { id: "videoactionbar", label: "VideoActionBar" },
    { id: "sharecurtain", label: "ShareCurtain" },
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
    { id: "divider-layout", label: "── Layout & Overlays ──", disabled: true },
    { id: "brandhero", label: "BrandHero" },
    { id: "adbanner", label: "AdBanner" },
    { id: "notificationcenter", label: "NotificationCenter" },
    { id: "profilesidebar", label: "ProfileSidebar" },
    { id: "playeravatarrow", label: "PlayerAvatarRow" },
    { id: "teamfollowcard", label: "TeamFollowCard" },
    { id: "followedplayers", label: "FollowedPlayers" },
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
          style={{ position: "fixed", top: 12, left: 12, zIndex: 1001, width: 36, height: 36, borderRadius: 8, background: c.white, border: `1px solid ${c.gray200}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", ...(true ? { outline: `2px solid ${c.primary}`, outlineOffset: 2 } : {}) }}>
          <Menu size={20} color={c.gray500} />
        </button>}
        {/* Mobile backdrop */}
        {isMobile && navOpen && <div onClick={() => setNavOpen(false)} style={{ position: "fixed", inset: 0, background: c.overlay, zIndex: 999 }} />}
        <nav aria-label="Design system sections" style={{ width: 220, background: c.white, borderRight: `1px solid ${c.gray200}`, padding: "16px 0", flexShrink: 0, position: isMobile ? "fixed" : "sticky", top: 0, left: 0, height: "100vh", overflowY: "auto", transition: "background 0.3s ease, transform 0.25s ease", zIndex: isMobile ? 1000 : "auto", transform: isMobile && !navOpen ? "translateX(-100%)" : "translateX(0)", boxShadow: isMobile && navOpen ? "4px 0 16px rgba(0,0,0,0.15)" : "none" }}>
          <div style={{ padding: "0 14px 14px", borderBottom: `1px solid ${c.gray100}`, marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.sm }}>
              <PixellotLogo size={30} />
              <div><div style={{ fontSize: 13, fontWeight: T.typography.weights.bold, color: c.darkText, transition: "color 0.3s ease" }}>Pixellot</div><div style={{ fontSize: 10, color: c.gray500 }}>Design System v2</div></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.xs }}>
              <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
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
                  fontSize: 11,
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
          <h1 style={{ fontSize: 26, fontWeight: 800, color: c.darkText, marginBottom: T.spacing.xs }}>Pixellot Design System v2</h1>
          <p style={{ color: c.gray500, fontSize: T.typography.sizes.xs, marginTop: T.spacing.xs, lineHeight: 1.6 }}>Complete component library for the Pixellot sports platform — auth, onboarding, jersey selection, game details, team shop, and player profiles.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: T.spacing.lg }}>
            {[{ n: "44", l: "Components" }, { n: "72", l: "Design Tokens" }, { n: "6", l: "Page Views" }].map(i => <div key={i.l} style={{ background: c.white, border: `1px solid ${c.gray100}`, borderRadius: T.radii.badge, padding: "14px 16px", textAlign: "center" }}><div style={{ fontSize: T.typography.sizes.xxl, fontWeight: 800, color: c.primary }}>{i.n}</div><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray500, marginTop: 2 }}>{i.l}</div></div>)}
          </div>
          <div style={{ height: T.spacing.xxl }} />
          <Card title="Project Structure" codeTitle="File Tree" code={C.projectStructure}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, fontSize: 12 }}>
              {["AppInput","AppSelect","AppButton","AppBadge","AppTabs","AppDivider","AppLink","TeamRow","LockSvg","BackButton","MainTopBar","SectionHeader","PaywallOverlay","LiveGameCard","GameResultCard","ScoreCard","ProductCard","VideoThumbnail","VideoTypeChips","VideoActionBar","ShareCurtain","TeamStatsBar","GameLeaders","PlayerStatsTable","StatsGrid","SeasonStatsRow","PaymentModal","UpgradeBanner","InfoAlert","JerseyItem","JerseyGrid"].map(c_item => <div key={c_item} style={{ padding: "6px 10px", background: c.gray50, borderRadius: 6, fontFamily: "monospace", color: c.gray500 }}>{"<"}{c_item}{" />"}</div>)}
            </div>
          </Card>
        </div>}

        {sec === "tokens" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>Design Tokens</h2>
          <Card title="Colors" codeTitle="tokens/index.ts" code={C.tokens}>
            {[
              { label: "Primary", keys: ["primary", "primaryHover", "primaryActive"] },
              { label: "Neutrals", keys: ["white", "black", "darkText"] },
              { label: "Grays", keys: ["gray50", "gray100", "gray200", "gray300", "gray400", "gray500"] },
              { label: "Overlays", keys: ["grayOverlay", "grayOverlayHover", "overlay"] },
              { label: "Brand", keys: ["heroBg", "accent", "jerseyRed", "jerseyStroke"] },
              { label: "Premium", keys: ["premiumYellow", "premiumAmber", "premiumHover", "premiumActive", "premiumDark"] },
              { label: "Status", keys: ["successGreen", "errorRed", "dangerRed", "liveRed", "notifBadgeRed"] },
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>AppInput</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Text input with password toggle — supports default, hover, focus, filled, error, and disabled states</p>

          <Card title="Variants" code={C.appInput} codeTitle="AppInput.vue">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: 10 }}>
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

        {sec === "select" && <Card title="AppSelect" code={C.appSelect} codeTitle="AppSelect.vue">
          <div style={{ maxWidth: 398 }}><PSelect placeholder="Age..." /></div>
        </Card>}

        {sec === "button" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>AppButton</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>7 variants × 3 sizes — unified button component</p>

          {/* === Variants at default (md) size === */}
          <Card title="All Variants — md (default)" code={C.appButton} codeTitle="AppButton.vue">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: 10 }}>
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
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>{v}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6 }}>
                  {[
                    { label: "default", state: "default" },
                    { label: "hover", state: "hover" },
                    { label: "pressed", state: "active" },
                    { label: "disabled", state: "disabled" },
                  ].map(({ label, state }) => <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                    <PBtn variant={v} size="sm" fullWidth={true} _forceState={state} disabled={state === "disabled"}>{v === "danger" ? "Log Out" : v === "link" ? "Link" : v === "ghost" ? "Ghost" : v === "social" ? "Apple" : v === "muted" ? "See All" : v === "premium" ? "Buy" : "Sign in"}</PBtn>
                    <span style={{ fontSize: 9, color: c.gray400 }}>{label}</span>
                  </div>)}
                </div>
              </div>)}
            </div>
          </Card>

          {/* === Size Comparison === */}
          <Card title="Size Comparison — sm / md / lg">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: 14 }}>
              {["primary", "premium", "social", "muted"].map(v => <div key={v}>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>{v}</div>
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
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: 10 }}>
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
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>fullWidth (default)</div>
              <PBtn>Full Width Button</PBtn>
              <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>auto width (fullWidth=false)</div>
              <PBtn fullWidth={false}>Auto Width</PBtn>
            </div>
          </Card>
        </div>}

        {sec === "icons" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>Icons</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>14 Lucide icons + 3 custom SVGs + 6 share channel SVGs + 2 placeholder components</p>

          <Card title="Lucide Icons (lucide-react)">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: T.spacing.md }}>
              {[
                { Icon: Eye, name: "Eye" }, { Icon: EyeOff, name: "EyeOff" }, { Icon: ChevronDown, name: "ChevronDown" },
                { Icon: Copy, name: "Copy" }, { Icon: Check, name: "Check" }, { Icon: Search, name: "Search" },
                { Icon: Play, name: "Play" }, { Icon: X, name: "X" }, { Icon: ArrowLeft, name: "ArrowLeft" },
                { Icon: Download, name: "Download" }, { Icon: Upload, name: "Upload" }, { Icon: Bookmark, name: "Bookmark" },
                { Icon: Bell, name: "Bell" }, { Icon: User, name: "User" },
              ].map(({ Icon, name }) => <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: T.spacing.sm }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} color={c.darkText} />
                </div>
                <span style={{ fontSize: 10, color: c.gray400, textAlign: "center", lineHeight: 1.2 }}>{name}</span>
              </div>)}
            </div>
          </Card>

          <Card title="Custom SVG Icons">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.md }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GoogleIcon />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>GoogleIcon</span>
                <span style={{ fontSize: 10, color: c.gray400 }}>Social auth</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AppleIcon />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>AppleIcon</span>
                <span style={{ fontSize: 10, color: c.gray400 }}>Social auth</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: c.premiumDark, border: `${T.strokes.bold}px solid ${c.premiumYellow}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <LockSvg size={16} />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>LockSvg</span>
                <span style={{ fontSize: 10, color: c.gray400 }}>Paywall / badges</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm, padding: T.spacing.md }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: c.gray50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ChipLockSvg />
                </div>
                <span style={{ fontSize: T.typography.sizes.xxs, color: c.gray400 }}>ChipLockSvg</span>
                <span style={{ fontSize: 10, color: c.gray400 }}>Chip prefix</span>
              </div>
            </div>
          </Card>

          <Card title="LockSvg Sizes">
            <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
              {[{ s: 8, label: "8 — chip" }, { s: 11, label: "11 — thumbnail" }, { s: 12, label: "12 — banner" }, { s: 16, label: "16 — explorer" }, { s: 22, label: "22 — paywall" }].map(({ s, label }) => <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: c.premiumDark, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <LockSvg size={s} />
                </div>
                <span style={{ fontSize: 9, color: c.gray400, textAlign: "center", lineHeight: 1.2 }}>{label}</span>
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
                <span style={{ fontSize: 10, color: c.gray400 }}>ShareCurtain</span>
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
              <div>{"<Bookmark />"} → VideoActionBar bookmark</div>
              <div>{"<CopyLinkIcon />"} → ShareCurtain copy link</div>
              <div>{"<FacebookIcon />"} → ShareCurtain</div>
              <div>{"<XLogoIcon />"} → ShareCurtain</div>
              <div>{"<WhatsAppIcon />"} → ShareCurtain</div>
              <div>{"<TikTokIcon />"} → ShareCurtain</div>
              <div>{"<InstagramIcon />"} → ShareCurtain</div>
              <div>{"<Bell />"} → TopBar notification bell</div>
              <div>{"<User />"} → ProfileSidebar fallback avatar</div>
            </PropsBlock>
          </Card>

          <Card title="Placeholder Components" desc="Deterministic placeholders for images that need real assets in production">
            <div style={{ display: "flex", gap: 20, alignItems: "flex-end", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PTeamLogo size={40} name="Maccabi" />
                <span style={{ fontSize: 10, color: c.gray400 }}>PTeamLogo</span>
                <span style={{ fontSize: 9, color: c.gray400 }}>name="Maccabi"</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PTeamLogo size={40} name="Ironi" />
                <span style={{ fontSize: 10, color: c.gray400 }}>PTeamLogo</span>
                <span style={{ fontSize: 9, color: c.gray400 }}>name="Ironi"</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PTeamLogo size={40} name="Hapoel" />
                <span style={{ fontSize: 10, color: c.gray400 }}>PTeamLogo</span>
                <span style={{ fontSize: 9, color: c.gray400 }}>name="Hapoel"</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PPlayerPhoto size={48} name="B. Rogers" />
                <span style={{ fontSize: 10, color: c.gray400 }}>PPlayerPhoto</span>
                <span style={{ fontSize: 9, color: c.gray400 }}>48px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.sm }}>
                <PPlayerPhoto size={36} name="J. Davis" />
                <span style={{ fontSize: 10, color: c.gray400 }}>PPlayerPhoto</span>
                <span style={{ fontSize: 9, color: c.gray400 }}>36px</span>
              </div>
            </div>
          </Card>
        </div>}

        {sec === "tabs" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>AppTabs</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>2 variants — pill, underline (with configurable accentColor per team)</p>

          <Card title="pill (default)" code={C.appTabs} codeTitle="AppTabs.vue">
            <div style={{ maxWidth: 398 }}>
              <PTabs tabs={[{ label: "Sign In", value: "signin" }, { label: "Sign Up", value: "signup" }]} active={tab} onSelect={setTab} />
              <div style={{ marginTop: 10, fontSize: 12, color: c.gray400 }}>Active: <code style={{ background: c.gray50, padding: "2px 6px", borderRadius: T.radii.sm }}>{tab}</code></div>
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
              <div style={{ marginTop: 10, fontSize: 12, color: c.gray400 }}>accentColor="#EF4444" (default)</div>
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
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>accentColor="#116DFF" (Maccabi blue)</div>
                <PTabs variant="underline" accentColor="#116DFF" tabs={[{ label: "Overview", value: "overview" }, { label: "Stats", value: "stats" }, { label: "Highlights", value: "highlights" }]} active={tab} onSelect={setTab} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>accentColor="#22C55E" (Haifa green)</div>
                <PTabs variant="underline" accentColor="#22C55E" tabs={[{ label: "Overview", value: "overview" }, { label: "Stats", value: "stats" }, { label: "Highlights", value: "highlights" }]} active={tab} onSelect={setTab} />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>accentColor="#E7A610" (premium amber)</div>
                <PTabs variant="underline" accentColor="#E7A610" tabs={[{ label: "Overview", value: "overview" }, { label: "Stats", value: "stats" }, { label: "Highlights", value: "highlights" }]} active={tab} onSelect={setTab} />
              </div>
            </div>
          </Card>
        </div>}

        {sec === "divider" && <Card title="AppDivider" code={C.appDivider} codeTitle="AppDivider.vue"><div style={{ maxWidth: 398 }}><PDivider /></div></Card>}

        {sec === "link" && <Card title="AppLink" code={C.appLink} codeTitle="AppLink.vue">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <PLink>muted (default)</PLink>
            <PLink variant="accent">accent (red underline)</PLink>
            <PLink variant="primary">primary (blue)</PLink>
          </div>
        </Card>}

        {sec === "badges" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>AppBadge</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>5 variants — unified badge component</p>

          <Card title="All Variants" code={C.appBadge} codeTitle="AppBadge.vue">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              {["live", "premium", "free", "claimed", "highlights"].map(v => <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <PBadge variant={v} />
                <span style={{ fontSize: 9, color: c.gray400 }}>{v}</span>
              </div>)}
            </div>
          </Card>

          <Card title="Usage Context">
            <PropsBlock>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><PBadge variant="live" /> LiveGameCard — game in progress</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><PBadge variant="premium" /> VideoThumbnail — locked content</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><PBadge variant="free" /> VideoThumbnail — free content</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><PBadge variant="claimed" /> ProductCard — item claimed</span></div>
                <div><span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><PBadge variant="highlights" /> GameResultCard — highlights available</span></div>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>GameResultCard</h2>
          <Card title="GameResultCard" desc="Vertical card with left date column, teams/scores on right, league + highlights badge at bottom">
            <PGameResultCard />
          </Card>
          <Card title="Highlights Badge" desc="Yellow badge with play icon — used at bottom-right of game result cards">
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing.lg }}>
              <PHighlightsBadge />
              <span style={{ fontSize: 12, color: c.gray400 }}>bg: #6C6C6C, text: #FFE000, border: #FFE000</span>
            </div>
          </Card>
        </div>}

        {sec === "highlightcard" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>HighlightCard</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Vertical video highlight card with emoji-prefixed title, date, duration badge, and optional lock icon. Used in Game Detail for Game Highlights, Personal Highlights, Followed Players, and Other Players sections.</p>
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

        {sec === "productcard" && <Card title="ProductCard" desc="Shop item card with image, title, and price">
          <PProductCard />
        </Card>}

        {sec === "videothumbnail" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>VideoThumbnail</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>2 orientations × 2 lock states — unified component</p>

          <Card title="Landscape (16:9)">
            <h4 style={{ margin: "0 0 8px", fontSize: 13, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Free (locked=false)</h4>
            <PVideoThumbnail orientation="landscape" locked={false} duration="1:42:15" title="Full Game" subtitle="Free" />
            <h4 style={{ margin: "16px 0 8px", fontSize: 13, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Premium (locked=true)</h4>
            <PVideoThumbnail orientation="landscape" locked={true} duration="22:30" title="Condensed Game" subtitle="Premium Only" />
          </Card>

          <Card title="Vertical (9:16)">
            <h4 style={{ margin: "0 0 8px", fontSize: 13, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Locked</h4>
            <div style={{ display: "flex", gap: T.spacing.md }}>
              <PVideoThumbnail orientation="vertical" locked={true} duration="1:23" title="🏀 Weiss with the dimes" subtitle="NOV 13, 2025" />
              <PVideoThumbnail orientation="vertical" locked={true} duration="2:45" title="🏀 Fast break layup" subtitle="NOV 13, 2025" />
              <PVideoThumbnail orientation="vertical" locked={true} duration="0:58" title="🏀 Three pointer" subtitle="NOV 13, 2025" />
            </div>
            <h4 style={{ margin: "16px 0 8px", fontSize: 13, fontWeight: T.typography.weights.semibold, color: c.gray500 }}>Free</h4>
            <div style={{ display: "flex", gap: T.spacing.md }}>
              <PVideoThumbnail orientation="vertical" locked={false} duration="4:10" title="🏀 #4 Gets the ball Forward" subtitle="NOV 13, 2025" />
              <PVideoThumbnail orientation="vertical" locked={false} duration="3:22" title="🏀 Alley-oop finish" subtitle="NOV 13, 2025" />
            </div>
          </Card>

          <Card title="Props">
            <PropsBlock>
              <div>orientation: "landscape" | "vertical"</div>
              <div>locked: boolean (false = Play icon, true = Lock icon + blur)</div>
              <div>duration: string ("1:42:15")</div>
              <div>title: string ("Full Game")</div>
              <div>subtitle: string ("Free" / "Premium Only")</div>
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

        {sec === "statsgrid" && <Card title="StatsGrid" desc="3-column grid of stat boxes with label and bold value">
          <PStatsGrid />
        </Card>}

        {sec === "seasonstatsrow" && <Card title="SeasonStatsRow" desc="4 stat boxes in a row: MPG, PPG, APG, RPG">
          <PSeasonStatsRow />
        </Card>}

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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>VideoTypeChips</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Horizontal pill row — active (red, bold), inactive (gray, with lock icon for premium content)</p>

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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>VideoActionBar</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Row below the video player — view count on the left, download / share / bookmark on the right</p>

          <Card title="VideoActionBar Preview" desc="Appears below the video thumbnail on the player page — click bookmark to toggle" code={C.videoActionBar} codeTitle="VideoActionBar.vue">
            <div style={{ maxWidth: 398 }}>
              <PVideoActionBar views={bmk ? "1,240 views" : "1 view"} bookmarked={bmk} onBookmark={() => setBmk(!bmk)} />
            </div>
          </Card>

          <Card title="Icon Button States — default / hover / pressed / disabled">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Default variant */}
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: T.spacing.sm }}>default</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.spacing.sm }}>
                  {[
                    { label: "default", state: "default" },
                    { label: "hover", state: "hover" },
                    { label: "pressed", state: "active" },
                    { label: "disabled", state: "disabled" },
                  ].map(({ label, state }) => <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <PVideoActionIconBtn icon={Download} _forceState={state} disabled={state === "disabled"} ariaLabel="Download" />
                    <span style={{ fontSize: 9, color: c.gray400 }}>{label}</span>
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
                  ].map(({ label, state }) => <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <PVideoActionIconBtn icon={Bookmark} active={true} _forceState={state} disabled={state === "disabled"} isBookmark ariaLabel={true ? "Remove bookmark" : "Add bookmark"} />
                    <span style={{ fontSize: 9, color: c.gray400 }}>{label}</span>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>ShareCurtain</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Bottom sheet with 6 share channels — triggered from video player share icon</p>

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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>BrandHero</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Auth screen hero — gradient background (team primary → 30% darker) with centered logo. White-label ready.</p>

          <Card title="Default — Pixellot" code={C.brandHero} codeTitle="BrandHero.vue">
            <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
              <PBrandHero />
            </div>
          </Card>

          <Card title="Custom Team Colors" desc="Pass any primaryColor to match client branding. Logo slot can be overridden.">
            <div style={{ display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>primaryColor="#D0142C" (Maccabi red)</div>
                <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
                  <PBrandHero primaryColor="#D0142C" height={340} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>primaryColor="#1A6B3C" (Azteca green)</div>
                <div style={{ maxWidth: 390, borderRadius: T.radii.lg, overflow: "hidden" }}>
                  <PBrandHero primaryColor="#1A6B3C" height={340} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>primaryColor="#E7A610" (Premium amber)</div>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>AdBanner</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Full-width ad banner carousel with swipeable pagination dots. Displayed at top of the home/Following page.</p>
          <Card title="Banner Carousel" desc="Two slides with pagination dots — drag/swipe to change slides" code={C.adBanner} codeTitle="AdBanner.vue">
            <div style={{ maxWidth: 398 }}><PAdBanner active={0} /></div>
            <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.sm }}>Drag left/right to swipe between slides. 40px threshold triggers navigation.</div>
          </Card>
          <Card title="Pagination Dots" desc="Active dot: white/solid; Inactive: white/50% opacity">
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <div style={{ display: "flex", gap: T.spacing.sm, background: c.gray100, padding: "12px 20px", borderRadius: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.white }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
              </div>
              <span style={{ fontSize: 12, color: c.gray400 }}>Dots on dark background</span>
            </div>
          </Card>
        </div>}

        {sec === "notificationcenter" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>NotificationCenter</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Dropdown panel triggered from the bell icon in the top bar. Shows player highlight notifications with jersey avatars.</p>
          <Card title="Bell Icon with Badge" desc="Notification bell with red count badge" code={C.notificationCenter} codeTitle="NotificationCenter.vue">
            <div style={{ display: "flex", gap: T.spacing.xxl, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}><PBellIcon count={0} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: 6 }}>No notifications</div></div>
              <div style={{ textAlign: "center" }}><PBellIcon count={1} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: 6 }}>1 notification</div></div>
              <div style={{ textAlign: "center" }}><PBellIcon count={3} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: 6 }}>3 notifications</div></div>
              <div style={{ textAlign: "center" }}><PBellIcon count={99} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: 6 }}>99 notifications</div></div>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>ProfileSidebar</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Right-slide drawer triggered from user avatar in top bar. Contains user info, claimed player card, navigation menu, and logout.</p>
          <Card title="Profile Sidebar (Full Preview)" desc="Dark backdrop + right-side panel with all sections" code={C.profileSidebar} codeTitle="ProfileSidebar.vue">
            <PProfileSidebar />
          </Card>
          <Card title="User Avatar" desc="Gray circle with user initials — used in top bar and sidebar header">
            <div style={{ display: "flex", gap: T.spacing.lg, alignItems: "center" }}>
              <PAvatar initials="BR" size={40} />
              <PAvatar initials="WT" size={36} />
              <PAvatar initials="JD" size={28} />
              <span style={{ fontSize: 12, color: c.gray400 }}>Sizes: 40px (sidebar), 36px (top bar), 28px (compact)</span>
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
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 2, marginTop: T.spacing.sm }}>{s}</div>
                <PMenuListItem label="Following" badge={14} _forceState={s} />
              </div>)}
            </div>
          </Card>
        </div>}

        {sec === "playeravatarrow" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>PlayerAvatarRow</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Horizontal scrollable row of player avatar chips. Two types of followed players:</p>
          <div style={{ display: "flex", gap: T.spacing.md, marginBottom: 20 }}>
            <div style={{ flex: 1, background: c.infoBgPurple, border: `1px solid ${c.premiumAmber}33`, borderRadius: T.radii.badge, padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: T.typography.weights.bold, color: c.premiumAmber, marginBottom: T.spacing.xs }}>Unclaimed</div>
              <div style={{ fontSize: 12, color: c.gray500, lineHeight: 1.5 }}>Only jersey number + team color known. Shows colored circle with number. Label shows "#4".</div>
            </div>
            <div style={{ flex: 1, background: c.infoBgPurple, border: `1px solid ${c.successGreen}33`, borderRadius: T.radii.badge, padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: T.typography.weights.bold, color: c.successGreen, marginBottom: T.spacing.xs }}>Claimed</div>
              <div style={{ fontSize: 12, color: c.gray500, lineHeight: 1.5 }}>Player filled form, uploaded photo, admin approved. Shows photo (or initial fallback) + name underneath.</div>
            </div>
          </div>

          <Card title="Mixed row — claimed + unclaimed" desc="Default data: 3 claimed (photo/initials) + 3 unclaimed (number only)">
            <div style={{ maxWidth: 398 }}>
              <PPlayerAvatarRow />
            </div>
          </Card>

          <Card title="With selection — claimed player" desc="Selected claimed shows blue checkmark + bold name">
            <div style={{ maxWidth: 398 }}>
              <PPlayerAvatarRow selectedId={1} />
            </div>
          </Card>

          <Card title="With selection — unclaimed player" desc="Selected unclaimed fills with team color, number turns white">
            <div style={{ maxWidth: 398 }}>
              <PPlayerAvatarRow selectedId={4} />
            </div>
          </Card>

          <Card title="Custom team colors" desc="teamColor tints both unclaimed backgrounds and claimed selection rings">
            <div style={{ maxWidth: 398, display: "flex", flexDirection: "column", gap: T.spacing.lg }}>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>teamColor="#116DFF" (Maccabi blue)</div>
                <PPlayerAvatarRow selectedId={1} teamColor="#116DFF" />
              </div>
              <div>
                <div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginBottom: 6 }}>teamColor="#22C55E" (Haifa green)</div>
                <PPlayerAvatarRow selectedId={3} teamColor="#22C55E" />
              </div>
            </div>
          </Card>

          <Card title="Individual chip states" desc="Both types in default and selected states">
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerAvatarChip number={4} teamColor="#D0142C" />
                <span style={{ fontSize: 9, color: c.gray400 }}>unclaimed</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerAvatarChip number={4} teamColor="#D0142C" selected />
                <span style={{ fontSize: 9, color: c.gray400 }}>unclaimed selected</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerAvatarChip number={11} name="Cohen D." claimed teamColor="#D0142C" />
                <span style={{ fontSize: 9, color: c.gray400 }}>claimed (initials)</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: T.spacing.xs }}>
                <PPlayerAvatarChip number={11} name="Cohen D." claimed teamColor="#D0142C" selected />
                <span style={{ fontSize: 9, color: c.gray400 }}>claimed selected</span>
              </div>
            </div>
          </Card>

          <Card title="Props — PPlayerAvatarChip">
            <PropsBlock>
              <div>number: number — jersey number (always required)</div>
              <div>name: string — player name (shown for claimed profiles)</div>
              <div>photo: string — photo URL (claimed only, falls back to initial)</div>
              <div>claimed: boolean — whether profile is claimed (default: false)</div>
              <div>selected: boolean — active selection state</div>
              <div>teamColor: string — team accent color (default: "#D0142C")</div>
              <div>onClick: () =&gt; void — tap callback</div>
            </PropsBlock>
          </Card>

          <Card title="Props — PPlayerAvatarRow">
            <PropsBlock>
              <div>players: Array — {"[{ id, number, name?, photo?, claimed }]"}</div>
              <div>selectedId: number — currently selected player ID</div>
              <div>onSelect: (id) =&gt; void — callback on chip click</div>
              <div>teamColor: string — accent color for all chips</div>
            </PropsBlock>
          </Card>
        </div>}

        {sec === "teamfollowcard" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>TeamFollowCard</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Team card from the "Manage following" page. 3-column grid layout with centered logo, team name (2-line clamp), and "Following"/"Follow" status text. Matches Figma spec: W:114 Fill, border-radius 12.</p>

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

        {sec === "followedplayers" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>FollowedPlayers Section</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Team-tabbed section for Player Highlights — used in Game Detail and Video Player pages. Red underline on active team tab.</p>
          <Card title="Player Highlights with Team Tabs" desc="Active team tab (red underline) + followed player highlight cards">
            <div style={{ maxWidth: 398 }}><PFollowedPlayersSection /></div>
          </Card>
        </div>}

        {sec === "jersey" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>JerseyItem</h2>
          <Card title="Jersey with number" desc="SVG basketball jersey — tap to select. Color is team-configurable. Selected shows green stroke and checkmark." code={C.jerseyItem} codeTitle="JerseyItem.vue">
            <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><PJersey number={7} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Default (red)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={23} selected onClick={() => {}} /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Selected (green stroke)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={10} color="#116DFF" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Custom (blue)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={5} color="#E8332B" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Custom (accent)</div></div>
              <div style={{ textAlign: "center" }}><PJersey number={33} color="#1A3B8A" /><div style={{ fontSize: T.typography.sizes.xxs, color: c.gray400, marginTop: T.spacing.xs }}>Custom (navy)</div></div>
            </div>
          </Card>
        </div>}

        {sec === "jerseygrid" && <Card title="JerseyGrid" desc="Flex-wrap grid of selectable jerseys with 24px gap, space-between" code={C.jerseyGrid} codeTitle="JerseyGrid.vue">
          <div style={{ maxWidth: 398, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: T.spacing.xl, padding: "0 4px" }}>
            {[1,2,3,4,5,6,7,8].map(n => <PJersey key={n} number={n} selected={selJerseys.includes(n)} onClick={() => toggleJ(n)} />)}
          </div>
          <div style={{ marginTop: T.spacing.md, fontSize: 12, color: c.gray400 }}>Selected: [{selJerseys.join(", ")}] — click jerseys to toggle</div>
        </Card>}

        {sec === "auth" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>AuthPage (Live Preview)</h2>
          <PAuthPagePreview tab={tab} setTab={setTab} />
        </div>}

        {sec === "onboarding" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>PlayerSelectPage (Live Preview)</h2>
          <Card title="Page Code" code={C.onboardingPage} codeTitle="views/PlayerSelectPage.vue"><p style={{ fontSize: 13, color: c.gray400, margin: 0 }}>Full onboarding page with jersey selection grid, "See All" expand, and sticky "Finish" footer.</p></Card>
          <POnboardingPreview selJerseys={selJerseys} toggleJ={toggleJ} />
        </div>}

        {sec === "emptystate" && <div>
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>EmptyState</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Reusable empty state with icon, title, subtitle, and optional CTA. 12 built-in presets for every data-dependent section.</p>

          <Card title="Presets — with CTA" code={C.emptyState} codeTitle="EmptyState.vue">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.sm }}>
              {["noFollowing", "noPersonal", "noFollowedPlayers", "noTeamsFound", "noClaimedPlayer", "noSearchResults"].filter(k => EMPTY_PRESETS[k].cta).map(k => <div key={k} style={{ border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
                <div style={{ fontSize: 10, color: c.gray400, padding: "6px 10px 0", fontFamily: "monospace" }}>preset="{k}"</div>
                <PEmptyState preset={k} />
              </div>)}
            </div>
          </Card>

          <Card title="Presets — no CTA">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.sm }}>
              {["noLiveGames", "noRecentGames", "noNotifications", "noHighlights", "noSavedVideos", "noPlayerStats"].map(k => <div key={k} style={{ border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
                <div style={{ fontSize: 10, color: c.gray400, padding: "6px 10px 0", fontFamily: "monospace" }}>preset="{k}"</div>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>ErrorState</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>6 error variants — each with contextual title, subtitle, and appropriate CTA</p>

          <Card title="All Variants" code={C.errorState} codeTitle="ErrorState.vue">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.spacing.sm }}>
              {["generic", "network", "timeout", "video", "data", "auth"].map(v => <div key={v} style={{ border: `1px solid ${c.gray200}`, borderRadius: T.radii.badge, overflow: "hidden" }}>
                <div style={{ fontSize: 10, color: c.gray400, padding: "6px 10px 0", fontFamily: "monospace" }}>variant="{v}"</div>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>OfflineBanner</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Persistent top banner shown when the device loses network connectivity</p>

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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>Skeletons & Loaders</h2>
          <p style={{ fontSize: 13, color: c.gray400, margin: "0 0 16px" }}>Animated placeholder components for loading states — skeleton blocks, cards, inputs, and spinning loaders</p>

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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>HomePage (Following Tab)</h2>
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
          <h2 style={{ fontSize: T.typography.sizes.lg, fontWeight: 800, color: c.darkText, marginBottom: 14 }}>GameDetailPage</h2>
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

  const dc = theme === "dark" ? DARK : LIGHT;

  return (
    <ThemeCtx.Provider value={theme}>
      <div style={{ position: "fixed", inset: 0, background: dc.white, color: dc.darkText, transition: "background 0.3s ease, color 0.3s ease", overflow: "auto" }}>
        {renderContent()}
      </div>
    </ThemeCtx.Provider>
  );
}
