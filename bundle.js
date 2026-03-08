var App=(()=>{var Fe=Object.defineProperty;var oa=Object.getOwnPropertyDescriptor;var ra=Object.getOwnPropertyNames;var la=Object.prototype.hasOwnProperty;var de=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,o)=>(typeof require<"u"?require:r)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var ia=(t,r)=>{for(var o in r)Fe(t,o,{get:r[o],enumerable:!0})},da=(t,r,o,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of ra(r))!la.call(t,s)&&s!==o&&Fe(t,s,{get:()=>r[s],enumerable:!(i=oa(r,s))||i.enumerable});return t};var sa=t=>da(Fe({},"__esModule",{value:!0}),t);var yt={};ia(yt,{default:()=>aa});var y=de("react");var ve=de("react");var be=(...t)=>t.filter((r,o,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===o).join(" ").trim();var Me=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var He=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,i)=>i?i.toUpperCase():o.toLowerCase());var Be=t=>{let r=He(t);return r.charAt(0).toUpperCase()+r.slice(1)};var se=de("react");var _e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Ee=t=>{for(let r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};var We=(0,se.forwardRef)(({color:t="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:d,iconNode:n,...f},g)=>(0,se.createElement)("svg",{ref:g,..._e,width:r,height:r,stroke:t,strokeWidth:i?Number(o)*24/Number(r):o,className:be("lucide",s),...!d&&!Ee(f)&&{"aria-hidden":"true"},...f},[...n.map(([k,v])=>(0,se.createElement)(k,v)),...Array.isArray(d)?d:[d]]));var I=(t,r)=>{let o=(0,ve.forwardRef)(({className:i,...s},d)=>(0,ve.createElement)(We,{ref:d,iconNode:r,className:be(`lucide-${Me(Be(t))}`,`lucide-${t}`,i),...s}));return o.displayName=Be(t),o};var na=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ne=I("arrow-left",na);var ua=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],K=I("bell",ua);var fa=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],G=I("bookmark",fa);var ca=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],A=I("check",ca);var pa=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],T=I("chevron-down",pa);var ga=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],te=I("copy",ga);var ma=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],J=I("download",ma);var ha=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],oe=I("eye-off",ha);var ya=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],re=I("eye",ya);var xa=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ue=I("menu",xa);var ba=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],fe=I("moon",ba);var va=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],H=I("play",va);var La=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],V=I("search",La);var Ia=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ce=I("sun",Ia);var Ca=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],le=I("upload",Ca);var ka=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],N=I("user",ka);var Sa=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],q=I("x",Sa);var e=de("react/jsx-runtime"),Ie={primary:"#116DFF",primaryHover:"#0D5AD4",primaryActive:"#0A4AB0",white:"#FFFFFF",black:"#000000",darkText:"#161616",gray50:"#F5F5F5",gray100:"#EDEDED",gray200:"#C7CBD0",gray300:"#DCDCDC",gray400:"#979797",gray500:"#6C6C6C",grayOverlay:"rgba(237,237,238,0.6)",grayOverlayHover:"rgba(237,237,238,0.8)",heroBg:"#1A3B8A",accent:"#E8332B",jerseyRed:"#D0142C",jerseyStroke:"#FFFFFF",premiumYellow:"#FFE000",premiumAmber:"#E7A610",premiumHover:"#E7A610",premiumActive:"#D4960E",premiumDark:"#362F2C",freeBadgeGreen:"#22C55E",claimedPurple:"#8B5CF6",infoBgPurple:"rgba(139,92,246,0.08)",linkBlue:"#2563EB",liveRed:"#EF4444",highlightGray:"#6C6C6C",cardBg:"#F3F4F6",barRed:"#E8332B",barGray:"#AFB6C1",barTrack:"#EEEEEE",dividerDark:"#444746",successGreen:"#22C55E",errorRed:"#EF4444",overlay:"rgba(0,0,0,0.7)",notifBadgeRed:"#EF4444",highlightsBadgeBg:"#6C6C6C",highlightsBadgeText:"#FFE000",cardHoverBg:"#F0F0F0",disabledTextOnDark:"rgba(255,255,255,0.35)",dangerRed:"#EF4444"},Ce={primary:"#3B8BFF",primaryHover:"#5A9FFF",primaryActive:"#2563EB",white:"#1A1A1A",black:"#FFFFFF",darkText:"#E8E8E8",gray50:"#262626",gray100:"#333333",gray200:"#444444",gray300:"#555555",gray400:"#888888",gray500:"#A0A0A0",grayOverlay:"rgba(255,255,255,0.08)",grayOverlayHover:"rgba(255,255,255,0.12)",heroBg:"#0F2557",accent:"#E8332B",jerseyRed:"#D0142C",jerseyStroke:"#FFFFFF",premiumYellow:"#FFE000",premiumAmber:"#E7A610",premiumHover:"#F5B800",premiumActive:"#E7A610",premiumDark:"#362F2C",freeBadgeGreen:"#22C55E",claimedPurple:"#A78BFA",infoBgPurple:"rgba(167,139,250,0.1)",linkBlue:"#60A5FA",liveRed:"#EF4444",highlightGray:"#A0A0A0",cardBg:"#262626",barRed:"#E8332B",barGray:"#666666",barTrack:"#333333",dividerDark:"#555555",successGreen:"#34D399",errorRed:"#FF6B6B",overlay:"rgba(0,0,0,0.85)",notifBadgeRed:"#EF4444",highlightsBadgeBg:"#444444",highlightsBadgeText:"#FFE000",cardHoverBg:"#333333",disabledTextOnDark:"rgba(200,200,200,0.35)",dangerRed:"#FF6B6B"},Re=(0,y.createContext)("light");function h(){return(0,y.useContext)(Re)==="dark"?Ce:Ie}function we(){return(0,y.useContext)(Re)}var ae=t=>({outline:`2px solid ${t.primary}`,outlineOffset:2}),a={typography:{sizes:{xxs:11,xs:14,sm:15,base:16,lg:20,xl:22,xxl:24,jersey:29},weights:{regular:400,medium:500,semibold:600,bold:700},notifText:{fontSize:13,fontWeight:400},menuItem:{fontSize:16,fontWeight:500},badgeLabel:{fontSize:11,fontWeight:700,textTransform:"uppercase"},videoLabel:{fontSize:14,fontWeight:600,color:"#FFFFFF"}},spacing:{xs:4,sm:8,md:12,lg:16,xl:24,xxl:32,xxxl:34},sizes:{inputHeight:46,buttonSm:32,buttonMd:40,buttonLg:48,tabHeight:38,chipHeight:40,topBarHeight:72,containerWidth:398,pageMaxWidth:430,heroHeight:340,jerseySize:73,logoSmall:48},radii:{sm:4,md:16,lg:20,xl:32,badge:12,chip:26,pill:9999},strokes:{thin:.67,regular:1,medium:1.33,thick:1.7,bold:2,heavy:2.5,extraHeavy:2.67},breakpoints:{mobile:768,tablet:1024}},m="'Red Hat Display', sans-serif",x={};x.tokens=`// tokens/index.ts
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

// Focus ring utility \u2014 apply on :focus-visible
// .focus-ring:focus-visible { outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px; }`;x.appInput=`<template>
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
// import { ref, computed } \u2014 vue
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
<\/script>
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
</style>`;x.appSelect=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>
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
</style>`;x.appButton=`<template>
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
    <span v-if="$slots.leading" class="app-button__icon"><slot name="leading" /></span>
    <slot v-if="!iconOnly" />
    <span v-if="$slots.trailing" class="app-button__icon"><slot name="trailing" /></span>
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>
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
</style>`;x.appBadge=`<template>
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
// import { computed } \u2014 vue
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
<\/script>
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
</style>`;x.appTabs=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>
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
</style>`;x.shareCurtain=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>
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
</style>`;x.videoActionBar=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.appDivider=`<template>
  <div class="app-divider" role="separator">
    <span class="app-divider__line" aria-hidden="true" />
    <span class="app-divider__text">{{ text }}</span>
    <span class="app-divider__line" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

defineProps<{
  text?: string
}>()
<\/script>

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
</style>`;x.appLink=`<template>
  <a :class="['app-link', \`app-link--\${variant}\`]" :href="href"
    :aria-label="ariaLabel" :target="target" :rel="rel">
    <slot />
  </a>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.mainTopBar=`<template>
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
      :aria-label="\`User profile menu for \${initials}\`""
      aria-haspopup="menu">
      {{ initials }}
    </button>
  </header>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.heroBanner=`<template>
  <section class="hero-banner" role="banner">
    <div class="hero-banner__content">
      <h1 class="hero-banner__title">{{ title }}</h1>
      <p class="hero-banner__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.topBar=`<template>
  <div class="top-bar">
    <PixellotLogo class="top-bar__logo" />
    <div class="top-bar__title">Games</div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue
<\/script>`;x.backButton=`<template>
  <button class="back-button focus-ring"
    aria-label="Go back to previous page"
    @click="$emit('click')">
    <ArrowLeftIcon :size="20" :aria-hidden="true" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  label?: string
}>()
withDefaults(props, { label: 'Back' })
defineEmits<{ click: [] }>()
<\/script>

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
</style>`;x.jerseyItem=`<template>
  <button
    :class="['jersey-item', { 'jersey-item--selected': selected }]"
    :aria-label="\`Player number \${number}\${selected ? ', selected' : ''}\`""
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.jerseyGrid=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.onboardingPage=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.projectStructure=`components/
\u251C\u2500\u2500 atoms/
\u2502   \u251C\u2500\u2500 AppInput.vue             \u2190 text input with validation, aria-invalid
\u2502   \u251C\u2500\u2500 AppSelect.vue            \u2190 dropdown select with chevron
\u2502   \u251C\u2500\u2500 AppButton.vue            \u2190 7 variants \xD7 3 sizes \xD7 4 states
\u2502   \u251C\u2500\u2500 AppBadge.vue             \u2190 live | premium | free | claimed | highlights
\u2502   \u251C\u2500\u2500 AppTabs.vue              \u2190 pill | underline + accentColor (team color)
\u2502   \u251C\u2500\u2500 AppDivider.vue           \u2190 horizontal divider with optional text
\u2502   \u251C\u2500\u2500 AppLink.vue              \u2190 inline link with hover underline
\u2502   \u251C\u2500\u2500 TeamRow.vue              \u2190 shared: name, score, isWinner, logoSize
\u2502   \u251C\u2500\u2500 LockSvg.vue              \u2190 unified premium lock icon (size prop)
\u2502   \u2514\u2500\u2500 BackButton.vue           \u2190 navigation back arrow
\u251C\u2500\u2500 cards/
\u2502   \u251C\u2500\u2500 LiveGameCard.vue         \u2190 uses TeamRow
\u2502   \u251C\u2500\u2500 GameResultCard.vue       \u2190 uses TeamRow + HighlightsBadge
\u2502   \u251C\u2500\u2500 HighlightCard.vue        \u2190 vertical video card with emoji title/date/lock
\u2502   \u251C\u2500\u2500 ScoreCard.vue
\u2502   \u2514\u2500\u2500 ProductCard.vue
\u251C\u2500\u2500 media/
\u2502   \u251C\u2500\u2500 VideoThumbnail.vue       \u2190 landscape | vertical \xD7 locked | free
\u2502   \u2514\u2500\u2500 VideoTypeChips.vue
\u251C\u2500\u2500 stats/
\u2502   \u251C\u2500\u2500 TeamStatsBar.vue
\u2502   \u251C\u2500\u2500 GameLeaders.vue
\u2502   \u251C\u2500\u2500 PlayerStatsTable.vue
\u2502   \u251C\u2500\u2500 StatsGrid.vue
\u2502   \u2514\u2500\u2500 SeasonStatsRow.vue
\u251C\u2500\u2500 layout/
\u2502   \u251C\u2500\u2500 MainTopBar.vue           \u2190 sticky header with search + notifications
\u2502   \u251C\u2500\u2500 SectionHeader.vue
\u2502   \u251C\u2500\u2500 AdBanner.vue             \u2190 auto-rotating carousel with pagination dots
\u2502   \u251C\u2500\u2500 NotificationCenter.vue   \u2190 dropdown with jersey avatar items
\u2502   \u251C\u2500\u2500 ProfileSidebar.vue       \u2190 right-slide drawer (role="dialog") with menu
\u2502   \u251C\u2500\u2500 UserAvatar.vue           \u2190 initials circle
\u2502   \u251C\u2500\u2500 ClaimedPlayerCard.vue    \u2190 player info card (sidebar)
\u2502   \u251C\u2500\u2500 MenuListItem.vue         \u2190 nav item with chevron/badge
\u2502   \u251C\u2500\u2500 FollowedPlayersSection.vue \u2190 team-tabbed player highlights
\u2502   \u2514\u2500\u2500 PaywallOverlay.vue       \u2190 shared blur + lock + CTA overlay
\u251C\u2500\u2500 sharing/
\u2502   \u251C\u2500\u2500 VideoActionBar.vue       \u2190 views + download / share / bookmark
\u2502   \u2514\u2500\u2500 ShareCurtain.vue         \u2190 bottom-sheet (role="dialog") with 6 social channels
\u251C\u2500\u2500 pages/
\u2502   \u251C\u2500\u2500 OnboardingPage.vue       \u2190 full-screen onboarding flow
\u2502   \u251C\u2500\u2500 BrandHero.vue            \u2190 hero banner with logo
\u2502   \u251C\u2500\u2500 EmptyState.vue           \u2190 configurable empty state with icon
\u2502   \u251C\u2500\u2500 ErrorState.vue           \u2190 error display with retry action
\u2502   \u2514\u2500\u2500 OfflineBanner.vue        \u2190 connectivity warning (role="alert")
\u251C\u2500\u2500 payment/
\u2502   \u251C\u2500\u2500 PaymentModal.vue
\u2502   \u251C\u2500\u2500 UpgradeBanner.vue
\u2502   \u2514\u2500\u2500 InfoAlert.vue
\u251C\u2500\u2500 jersey/
\u2502   \u251C\u2500\u2500 JerseyItem.vue           \u2190 selectable jersey with checkmark
\u2502   \u2514\u2500\u2500 JerseyGrid.vue           \u2190 responsive jersey selector grid
\u2514\u2500\u2500 tokens/
    \u2514\u2500\u2500 index.ts                 \u2190 lightColors, darkColors, typography, radii, spacing, sizes, strokes, breakpoints`;x.adBanner=`<template>
  <div class="ad-banner" role="region" :aria-label="ariaLabel">
    <div class="ad-banner__track" :style="{ transform: \`translateX(-\${active * 100}%)\` }">
      <slot />
    </div>
    <div class="ad-banner__dots" role="tablist" aria-label="Ad carousel pagination">
      <button v-for="(_, i) in count" :key="i"
        :class="['ad-banner__dot', { 'ad-banner__dot--active': i === active }]"
        role="tab"
        :aria-selected="i === active"
        :aria-label="\`Go to slide \${i + 1}\`""
        @click="$emit('update:active', i)" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.notificationCenter=`<template>
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
        :aria-label="\`Notification from \${item.text}\`""
        @click="$emit('select', item)" @keydown.enter="$emit('select', item)">
        <JerseyAvatar :number="item.jerseyNumber" :color="item.jerseyColor" />
        <span class="notification-center__text">{{ item.text }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.profileSidebar=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.highlightCard=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;function wa({text:t}){let r=h(),[o,i]=(0,y.useState)(!1),[s,d]=(0,y.useState)(!1);return(0,e.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),1500)},onFocus:()=>d(!0),onBlur:()=>d(!1),"aria-label":"Copy code",style:{background:"none",border:"none",cursor:"pointer",color:o?r.successGreen:r.gray500,padding:a.spacing.xs,borderRadius:a.radii.sm,...s?ae(r):{}},children:o?(0,e.jsx)(A,{size:16}):(0,e.jsx)(te,{size:16})})}function S({placeholder:t,type:r="text",error:o=!1,errorMsg:i="",disabled:s=!1,_forceState:d,ariaLabel:n}){let f=h(),[g,k]=(0,y.useState)(!1),[v,p]=(0,y.useState)(!1);var L=f.gray100,w="2px solid transparent",b=f.black,D="text",M=f.gray400;d==="hover"&&(L=f.gray200),(d==="focus"||v)&&(w=o?`2px solid ${f.errorRed}`:`2px solid ${f.primary}`),(d==="disabled"||s)&&(L=f.grayOverlay,b=f.gray400,D="not-allowed",M=f.disabledTextOnDark),o&&d!=="focus"&&!v&&d!=="disabled"&&(w=`2px solid ${f.errorRed}`),o&&d==="hover"&&(L=f.gray200,w=`2px solid ${f.errorRed}`);var E=s||d==="disabled";let U=o&&i?"pinput-err-"+(t||"").replace(/\s/g,""):void 0;return(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)("input",{type:r==="password"&&g?"text":r,placeholder:d==="filled"?"":t,defaultValue:d==="filled"?t:void 0,disabled:E,readOnly:d==="filled","aria-label":n||t,"aria-invalid":o||void 0,"aria-describedby":U,onFocus:()=>p(!0),onBlur:()=>p(!1),style:{width:"100%",height:a.sizes.inputHeight,background:L,border:w,borderRadius:a.radii.lg,padding:`4px ${a.spacing.lg}px`,fontFamily:m,fontSize:a.typography.sizes.base,color:b,outline:"none",boxSizing:"border-box",paddingRight:r==="password"?44:a.spacing.lg,cursor:D}}),r==="password"&&(0,e.jsx)("button",{onClick:()=>k(!g),disabled:E,"aria-label":g?"Hide password":"Show password",style:{position:"absolute",right:14,top:14,background:"none",border:"none",cursor:E?"not-allowed":"pointer",color:M,display:"flex",borderRadius:a.radii.sm},children:g?(0,e.jsx)(oe,{size:18}):(0,e.jsx)(re,{size:18})})]}),o&&i?(0,e.jsx)("span",{id:U,style:{fontFamily:m,fontSize:12,color:f.errorRed,marginTop:a.spacing.xs,display:"block",paddingLeft:a.spacing.lg},children:i}):null]})}function Ne({placeholder:t,ariaLabel:r}){let o=h(),[i,s]=(0,y.useState)(!1);return(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)("select",{"aria-label":r||t,onFocus:()=>s(!0),onBlur:()=>s(!1),style:{width:"100%",height:a.sizes.inputHeight,background:o.gray100,border:i?`2px solid ${o.primary}`:"2px solid transparent",borderRadius:a.radii.lg,padding:`4px ${a.spacing.lg}px`,fontFamily:m,fontSize:a.typography.sizes.base,color:o.gray400,appearance:"none",outline:"none",boxSizing:"border-box"},children:(0,e.jsx)("option",{children:t})}),(0,e.jsx)(T,{size:a.typography.sizes.base,style:{position:"absolute",right:a.spacing.lg,top:"50%",transform:"translateY(-50%)",color:o.gray400,pointerEvents:"none"}})]})}function C({children:t,variant:r="primary",size:o="md",leadingIcon:i,trailingIcon:s,iconOnly:d=!1,fullWidth:n=!0,disabled:f=!1,_forceState:g,style:k={},onClick:v}){let p=h(),[L,w]=(0,y.useState)(!1),[b,D]=(0,y.useState)(!1),[M,E]=(0,y.useState)(!1),U={primary:{default:{background:p.primary,color:p.white,border:"none"},hover:{background:p.primaryHover,color:p.white,border:"none"},active:{background:p.primaryActive,color:p.white,border:"none"},disabled:{background:p.grayOverlay,color:p.disabledTextOnDark,border:"none"}},premium:{default:{background:p.premiumYellow,color:p.black,border:"none"},hover:{background:p.premiumAmber,color:p.black,border:"none"},active:{background:p.premiumActive,color:p.black,border:"none"},disabled:{background:p.grayOverlay,color:p.disabledTextOnDark,border:"none"}},social:{default:{background:p.white,color:p.black,border:`${a.strokes.thin}px solid ${p.gray200}`},hover:{background:p.gray50,color:p.black,border:`${a.strokes.thin}px solid ${p.gray200}`},active:{background:p.gray100,color:p.black,border:`${a.strokes.thin}px solid ${p.gray200}`},disabled:{background:p.white,color:p.disabledTextOnDark,border:`${a.strokes.thin}px solid ${p.grayOverlay}`}},muted:{default:{background:p.gray50,color:p.darkText,border:"none"},hover:{background:p.gray100,color:p.darkText,border:"none"},active:{background:p.gray300,color:p.darkText,border:"none"},disabled:{background:p.grayOverlay,color:p.disabledTextOnDark,border:"none"}},ghost:{default:{background:"transparent",color:p.gray400,border:"none"},hover:{background:p.gray50,color:p.gray400,border:"none"},active:{background:p.gray100,color:p.gray400,border:"none"},disabled:{background:"transparent",color:p.disabledTextOnDark,border:"none"}},link:{default:{background:"transparent",color:p.linkBlue,border:"none"},hover:{background:"transparent",color:p.primaryHover,border:"none"},active:{background:"transparent",color:p.primaryActive,border:"none"},disabled:{background:"transparent",color:p.disabledTextOnDark,border:"none"}},danger:{default:{background:"transparent",color:p.errorRed,border:"none"},hover:{background:"transparent",color:p.errorRed,border:"none"},active:{background:"transparent",color:p.errorRed,border:"none"},disabled:{background:"transparent",color:p.disabledTextOnDark,border:"none"}}},W={sm:{height:a.sizes.buttonSm,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.semibold,borderRadius:a.radii.lg,padding:`0 ${a.spacing.lg}px`,gap:6},md:{height:a.sizes.buttonMd,fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.medium,borderRadius:a.radii.lg,padding:`0 ${a.spacing.xl}px`,gap:a.spacing.sm},lg:{height:a.sizes.buttonLg,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.bold,borderRadius:28,padding:"0 40px",gap:a.spacing.sm}},l=U[r]||U.primary,P=l[g||(f?"disabled":b?"active":L?"hover":"default")]||l.default,F=W[o]||W.md,Pe=r==="link"||r==="danger";return(0,e.jsxs)("button",{disabled:f,onClick:v,onMouseEnter:()=>!f&&w(!0),onMouseLeave:()=>{w(!1),D(!1)},onMouseDown:()=>!f&&D(!0),onMouseUp:()=>D(!1),onFocus:()=>E(!0),onBlur:()=>E(!1),style:{width:n&&!d?"100%":"auto",height:F.height,minWidth:d?F.height:void 0,borderRadius:d?"50%":F.borderRadius,fontFamily:m,fontSize:F.fontSize,fontWeight:F.fontWeight,cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:F.gap,padding:d?0:F.padding,transition:"all 0.2s",textDecoration:Pe?"underline":"none",...P,...M?ae(p):{},...k},children:[i&&(0,e.jsx)("span",{style:{display:"flex",alignItems:"center"},children:i}),d?(0,e.jsx)("span",{style:{display:"flex",alignItems:"center"},children:t}):t,s&&(0,e.jsx)("span",{style:{display:"flex",alignItems:"center"},children:s})]})}function qe({label:t,isActive:r,onClick:o,variant:i,accentColor:s,_forceState:d}){let n=h(),[f,g]=(0,y.useState)(!1),[k,v]=(0,y.useState)(!1),p=d||(k?"active":f?"hover":"default");if(i==="pill"){let b=r?n.white:p==="active"?n.gray300:p==="hover"?n.gray200:"transparent",D=r?n.black:p==="hover"||p==="active"?n.gray500:n.gray400;return(0,e.jsx)("button",{onClick:o,onMouseEnter:()=>g(!0),onMouseLeave:()=>{g(!1),v(!1)},onMouseDown:()=>v(!0),onMouseUp:()=>v(!1),role:"tab","aria-selected":r,style:{flex:1,height:a.sizes.tabHeight,border:"none",borderRadius:a.radii.md,cursor:"pointer",fontFamily:m,fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.medium,transition:"all 0.15s",background:b,color:D,boxShadow:r?"0 1px 3px rgba(0,0,0,0.1)":"none"},children:t})}let L=s||n.errorRed,w=r?n.black:p==="active"||p==="hover"?n.gray500:n.gray400;return(0,e.jsx)("button",{onClick:o,onMouseEnter:()=>g(!0),onMouseLeave:()=>{g(!1),v(!1)},onMouseDown:()=>v(!0),onMouseUp:()=>v(!1),role:"tab","aria-selected":r,style:{flex:"0 0 auto",background:"none",border:"none",cursor:"pointer",fontFamily:m,fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.medium,color:w,padding:`${a.spacing.lg}px 0`,position:"relative",transition:"color 0.15s",borderBottom:r?`3px solid ${L}`:p==="hover"?`2px solid ${L}55`:"none",marginBottom:"-1px"},children:t})}function j({tabs:t,active:r,onSelect:o,variant:i="pill",accentColor:s,_forceState:d}){let n=h();if(i==="pill")return(0,e.jsx)("div",{role:"tablist",style:{display:"flex",background:n.gray100,borderRadius:a.radii.md,padding:a.spacing.xs,width:"100%"},children:t.map(g=>(0,e.jsx)(qe,{label:g.label,isActive:r===g.value,onClick:()=>o(g.value),variant:"pill",_forceState:!r||r!==g.value?d:void 0},g.value))});let f=s||n.errorRed;return(0,e.jsx)("div",{role:"tablist",style:{display:"flex",gap:a.spacing.xl,padding:`0 ${a.spacing.lg}px`,borderBottom:`1px solid ${n.gray100}`,width:"100%",overflowX:"auto"},children:t.map(g=>(0,e.jsx)(qe,{label:g.label,isActive:r===g.value,onClick:()=>o(g.value),variant:"underline",accentColor:f,_forceState:!r||r!==g.value?d:void 0},g.value))})}function ze({text:t="OR"}){let r=h();return(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.md,width:"100%"},children:[(0,e.jsx)("span",{style:{flex:1,height:a.strokes.thin,background:r.gray200}}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.medium,color:r.gray400},children:t}),(0,e.jsx)("span",{style:{flex:1,height:a.strokes.thin,background:r.gray200}})]})}function me({children:t,variant:r="muted"}){let o=h(),i={muted:{color:o.gray400},accent:{color:o.accent,textDecoration:"underline"},primary:{color:o.primary}};return(0,e.jsx)("button",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,cursor:"pointer",background:"none",border:"none",padding:0,...i[r]},children:t})}function Y({number:t,selected:r,onClick:o,color:i="#D0142C"}){let s=h(),[d,n]=(0,y.useState)(!1);return(0,e.jsxs)("button",{onClick:o,"aria-label":"Jersey number "+t,"aria-pressed":r,onFocus:()=>n(!0),onBlur:()=>n(!1),style:{position:"relative",width:73,height:73,background:"none",border:"none",cursor:"pointer",padding:0,transition:"transform 0.15s",transform:r?"scale(1.1)":"scale(1)",borderRadius:a.radii.md,...d?ae(s):{}},children:[(0,e.jsx)("svg",{viewBox:"0 0 73 73",fill:"none",style:{width:"100%",height:"100%"},children:(0,e.jsx)("path",{d:"M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z",fill:i,stroke:r?s.successGreen:"#FFFFFF",strokeWidth:r?a.strokes.heavy:a.strokes.thick})}),r&&(0,e.jsx)("div",{style:{position:"absolute",top:-4,right:-4,width:20,height:20,background:s.successGreen,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(A,{size:12,color:"#FFFFFF",strokeWidth:3})}),(0,e.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-40%)",fontFamily:m,fontSize:a.typography.sizes.jersey,fontWeight:a.typography.weights.bold,color:s.jerseyStroke,pointerEvents:"none"},children:t})]})}function O({variant:t="live"}){let r=h(),o={live:{background:r.liveRed,fontSize:12,fontWeight:a.typography.weights.semibold,textTransform:"uppercase",label:"LIVE",dot:!0},premium:{background:r.premiumAmber,fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,textTransform:"uppercase",label:"Premium",dot:!1},free:{background:r.freeBadgeGreen,fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,textTransform:"uppercase",label:"Free",dot:!1},claimed:{background:r.claimedPurple,fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,textTransform:"uppercase",label:"Claimed",dot:!1},highlights:{background:r.highlightsBadgeBg,fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,textTransform:"uppercase",label:"HIGHLIGHTS",dot:!1,icon:!0}},i=o[t]||o.live;var s=t==="highlights"?r.highlightsBadgeText:r.white,d=t==="highlights"?`${a.strokes.thin}px solid ${r.highlightsBadgeText}`:"none";return(0,e.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:a.spacing.xs,background:i.background,color:s,padding:`${a.spacing.xs}px ${a.spacing.md}px`,borderRadius:a.radii.badge,fontSize:i.fontSize,fontWeight:i.fontWeight,textTransform:i.textTransform,border:d},children:[i.dot&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:"@keyframes liveDotFlicker { 0%,100%{opacity:1} 50%{opacity:0.2} }"}),(0,e.jsx)("div",{style:{width:6,height:6,borderRadius:"50%",background:r.white,animation:"liveDotFlicker 1.2s ease-in-out infinite"}})]}),i.icon&&(0,e.jsx)(H,{size:10,fill:r.premiumYellow,color:r.premiumYellow}),i.label]})}var Pa=()=>(0,e.jsx)(O,{variant:"live"});function X({name:t,score:r,isWinner:o=!0,logoSize:i=28,fontSize:s=16,fontWeight:d=500,gap:n=12}){let f=h(),g=o?f.black:f.gray500;return(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",height:i},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:n,flex:1},children:[(0,e.jsx)(xe,{size:i,name:t}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:s,fontWeight:d,color:g},children:t})]}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:s,fontWeight:d,color:g},children:r})]})}function Fa(){let t=h();return(0,e.jsxs)("div",{style:{minWidth:240,flex:1,borderRadius:14,overflow:"hidden",flexShrink:0},children:[(0,e.jsx)("div",{style:{background:t.gray200,borderRadius:"14px 14px 0 0"},children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px"},children:[(0,e.jsx)(Pa,{}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:12,fontWeight:a.typography.weights.medium,color:t.black},children:"21 NOV, 2024"})]})}),(0,e.jsx)("div",{style:{background:t.gray100,borderRadius:"0 0 14px 14px"},children:(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",padding:"12px 16px"},children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.sm,width:"100%"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)(X,{name:"M. Kiryat Gat",score:"87",isWinner:!0}),(0,e.jsx)(X,{name:"H. Haifa",score:"79",isWinner:!1})]}),(0,e.jsx)("div",{children:(0,e.jsx)("span",{style:{fontFamily:m,fontSize:10,fontWeight:a.typography.weights.medium,color:t.gray400},children:"Liga Leumit (Winner League)"})})]})})})]})}function Ba(){let t=h();return(0,e.jsxs)("div",{style:{background:t.gray100,borderRadius:14,display:"flex",gap:a.spacing.lg,marginBottom:a.spacing.md,height:116,overflow:"hidden"},children:[(0,e.jsx)("div",{style:{width:72,flexShrink:0,background:t.gray200,borderRadius:"14px 0 0 14px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.bold,color:t.black,lineHeight:"24px"},children:"20"}),(0,e.jsx)("div",{style:{fontSize:12,fontWeight:a.typography.weights.bold,color:t.black,lineHeight:"16px"},children:"NOV"}),(0,e.jsx)("div",{style:{fontSize:10,fontWeight:a.typography.weights.regular,color:t.black,lineHeight:"15px"},children:"2024"})]})}),(0,e.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:a.spacing.sm,paddingRight:a.spacing.lg},children:[(0,e.jsx)(X,{name:"Maccabi Kiryat Gat",score:"89",isWinner:!0,logoSize:27,fontWeight:400,gap:8}),(0,e.jsx)(X,{name:"Ironi Nahariya",score:"77",isWinner:!1,logoSize:27,fontWeight:400,gap:8}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:10,fontWeight:a.typography.weights.regular,color:t.gray400},children:"Liga Leumit (Winner League)"}),(0,e.jsx)(O,{variant:"highlights"})]})]})]})}function Da(){let t=h();return(0,e.jsx)("div",{style:{background:t.gray100,borderRadius:14,padding:a.spacing.lg,width:"100%",maxWidth:398,boxSizing:"border-box"},children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsxs)("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:a.spacing.sm},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:44,height:44,minWidth:44,borderRadius:"50%",background:t.white,flexShrink:0}}),(0,e.jsx)("span",{style:{fontSize:"clamp(22px, 6vw, 28px)",fontWeight:a.typography.weights.regular,color:t.black},children:"89"})]}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.regular,color:t.black,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:"M. Kiryat Gat"}),(0,e.jsx)("div",{style:{fontSize:12,fontWeight:a.typography.weights.regular,color:t.gray500},children:"1st"})]}),(0,e.jsxs)("div",{style:{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 4px"},children:[(0,e.jsx)("div",{style:{fontSize:12,fontWeight:a.typography.weights.regular,color:t.gray500},children:"Final"}),(0,e.jsx)("div",{style:{fontSize:12,fontWeight:a.typography.weights.regular,color:t.gray500},children:"20 NOV 2024"})]}),(0,e.jsxs)("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:a.spacing.sm},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.md},children:[(0,e.jsx)("span",{style:{fontSize:"clamp(22px, 6vw, 28px)",fontWeight:a.typography.weights.regular,color:t.gray500},children:"77"}),(0,e.jsx)("div",{style:{width:44,height:44,minWidth:44,borderRadius:"50%",background:t.white,flexShrink:0}})]}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.regular,color:t.gray500,textAlign:"right",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:"I. Nahariya"}),(0,e.jsx)("div",{style:{fontSize:12,fontWeight:a.typography.weights.regular,color:t.gray500,textAlign:"right"},children:"5th"})]})]})})}function Aa(){let t=h();return(0,e.jsxs)("div",{style:{borderRadius:a.radii.badge,overflow:"hidden",border:`1px solid ${t.gray200}`,marginBottom:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:"100%",aspectRatio:"1/1",background:t.cardBg,borderRadius:"12px 12px 0 0"}}),(0,e.jsxs)("div",{style:{padding:a.spacing.md},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,marginBottom:a.spacing.xs,color:t.darkText},children:"Jersey Edition"}),(0,e.jsx)("div",{style:{fontSize:13,fontWeight:a.typography.weights.semibold,color:t.primary},children:"$45.00"})]})]})}function ee({size:t=11,fill:r="#FFE000"}){let o=t,i=t*(10/8);return(0,e.jsx)("svg",{width:o,height:i,viewBox:"0 0 8 10",fill:"none",children:(0,e.jsx)("path",{clipRule:"evenodd",d:"M7.02621 4.06889H6.73849L6.73733 2.70111C6.73616 1.21111 5.46535 -0.00110943 3.90332 1.67782e-06C2.3413 0.00111279 1.07048 1.21333 1.07164 2.70333L1.07397 4.07111H0.971466C0.434483 4.07222 -0.00115988 4.48778 4.94171e-06 5V9.07222C4.94171e-06 9.58444 0.436813 10 0.973795 10L7.02853 9.99667C7.56552 9.99667 8.00116 9.58111 8 9.06889V4.99556C8 4.48333 7.56319 4.06889 7.02621 4.06889ZM2.11765 4.07111L2.11532 2.70333C2.11532 1.76222 2.91672 0.996668 3.90332 0.995557C4.88992 0.995557 5.69248 1.76111 5.69248 2.70111L5.69481 4.06889L2.11765 4.07111Z",fill:r,fillRule:"evenodd"})})}function Q({orientation:t="landscape",locked:r=!1,duration:o="1:42:15",title:i="Full Game",subtitle:s="Free"}){let d=h(),n=t==="vertical",f=n?{borderRadius:a.radii.badge,width:108,height:192}:{borderRadius:14,width:"100%",maxWidth:398,aspectRatio:"16/9",marginBottom:a.spacing.md},g=n?{top:7,left:6,padding:"2px 4px"}:{top:8,left:8,padding:"2px 8px"},k=n?{top:6,right:6}:{top:8,right:8},v=n?{background:"linear-gradient(to top, rgba(0,0,0,0.5) 49%, rgba(114,123,132,0) 100%)",padding:a.spacing.sm}:{background:"linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)",padding:a.spacing.md},p=n?{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.bold,color:d.white,lineHeight:"16px"}:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.bold,color:d.white,lineHeight:"18px"},L=n?{fontSize:10,fontWeight:a.typography.weights.bold,color:d.gray300,lineHeight:"15px",marginTop:2}:{fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.regular,color:d.gray300,lineHeight:"16.5px",marginTop:2};return(0,e.jsxs)("div",{style:{position:"relative",overflow:"hidden",background:d.heroBg,...f},children:[r&&(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)",filter:"blur(8px)",transform:"scale(1.1)",zIndex:0}}),(0,e.jsx)("div",{style:{position:"absolute",...g,background:"rgba(0,0,0,0.55)",borderRadius:a.radii.pill,zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)("span",{style:{fontFamily:m,fontWeight:a.typography.weights.medium,fontSize:a.typography.sizes.xxs,color:"#FFFFFF",lineHeight:1},children:o})}),r?(0,e.jsx)("div",{style:{position:"absolute",...k,width:28,height:28,background:d.premiumDark,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,border:`${a.strokes.medium}px solid ${d.premiumYellow}`,boxSizing:"border-box"},children:(0,e.jsx)(ee,{size:11,fill:d.premiumYellow})}):(0,e.jsx)("div",{style:{position:"absolute",...k,width:28,height:28,borderRadius:"50%",background:d.gray500,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2},children:(0,e.jsx)(H,{size:12,color:d.jerseyStroke,fill:d.jerseyStroke})}),(0,e.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,...v,zIndex:1},children:[(0,e.jsx)("div",{style:p,children:i}),(0,e.jsx)("div",{style:L,children:s})]})]})}function z({label:t,leftVal:r,rightVal:o}){let i=h(),s=r+o,d=r/s*100,n=o/s*100;return(0,e.jsxs)("div",{style:{padding:"16px 20px",fontFamily:m},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:i.darkText,width:28,textAlign:"left",flexShrink:0},children:r}),(0,e.jsx)("span",{style:{flex:1,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:i.darkText,textAlign:"center"},children:t}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:i.darkText,width:28,textAlign:"right",flexShrink:0},children:o})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,e.jsx)("div",{style:{flex:1,height:8,background:i.barTrack,borderRadius:a.radii.sm,display:"flex",justifyContent:"flex-end"},children:(0,e.jsx)("div",{style:{width:`${d}%`,height:8,background:i.barRed,borderRadius:a.radii.sm}})}),(0,e.jsx)("div",{style:{flex:1,height:8,background:i.barTrack,borderRadius:a.radii.sm,display:"flex",justifyContent:"flex-start"},children:(0,e.jsx)("div",{style:{width:`${n}%`,height:8,background:i.barGray,borderRadius:a.radii.sm}})})]})]})}function je({children:t,label:r="Buy Team Stats"}){let o=h();return(0,e.jsxs)("div",{style:{position:"relative",borderRadius:14,overflow:"hidden"},children:[(0,e.jsx)("div",{style:{filter:"blur(4px)",opacity:.5,pointerEvents:"none"},children:t}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.08)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:20},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:56,height:56,borderRadius:"50%",background:o.premiumDark,border:`${a.strokes.extraHeavy}px solid ${o.premiumYellow}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(ee,{size:22,fill:o.premiumYellow})}),(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.semibold,color:o.darkText,margin:0,fontFamily:m},children:r})]}),(0,e.jsx)(C,{variant:"premium",size:"lg",fullWidth:!1,style:{width:160,fontWeight:a.typography.weights.semibold,borderRadius:30},children:"Buy Now"})]})})]})}function Ta(){return(0,e.jsxs)(je,{label:"Buy Team Stats",children:[(0,e.jsx)(z,{label:"Points",leftVal:87,rightVal:79}),(0,e.jsx)(z,{label:"Field Goal %",leftVal:48,rightVal:42}),(0,e.jsx)(z,{label:"3-Pointers",leftVal:12,rightVal:8}),(0,e.jsx)(z,{label:"Rebounds",leftVal:35,rightVal:29}),(0,e.jsx)(z,{label:"Assists",leftVal:22,rightVal:18}),(0,e.jsx)(z,{label:"Steals",leftVal:9,rightVal:6}),(0,e.jsx)(z,{label:"Blocks",leftVal:4,rightVal:3}),(0,e.jsx)(z,{label:"Turnovers",leftVal:12,rightVal:15})]})}function $e(){let t=h(),r=[{label:"Points",left:{num:"#22",detail:"22 PTS, 9 REB"},right:{num:"#9",detail:"19 PTS, 6 REB"}},{label:"Rebounds",left:{num:"#22",detail:"9 REB, 4 OFF"},right:{num:"#11",detail:"8 REB, 3 OFF"}},{label:"Assists",left:{num:"#11",detail:"7 AST, 30 MIN"},right:{num:"#7",detail:"6 AST, 28 MIN"}}];return(0,e.jsxs)("div",{style:{padding:"16px 20px",fontFamily:m},children:[(0,e.jsx)("h3",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.bold,color:t.darkText,margin:"0 0 10px"},children:"Game Leaders"}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[(0,e.jsx)("div",{style:{width:44,height:44,borderRadius:"50%",background:t.gray100,border:`${a.strokes.thin}px solid ${t.gray300}`,overflow:"hidden"}}),(0,e.jsx)("div",{style:{width:44,height:44,borderRadius:"50%",background:t.gray100,border:`${a.strokes.thin}px solid ${t.gray300}`,overflow:"hidden"}})]}),r.map((o,i)=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[(0,e.jsxs)("div",{style:{flex:1,textAlign:"left"},children:[(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.bold,color:t.darkText,margin:0},children:o.left.num}),(0,e.jsx)("p",{style:{fontSize:12,fontWeight:a.typography.weights.medium,color:t.gray500,margin:0},children:o.left.detail})]}),(0,e.jsx)("div",{style:{flex:1,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",height:36},children:(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:t.darkText,margin:0},children:o.label})}),(0,e.jsxs)("div",{style:{flex:1,textAlign:"right"},children:[(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.bold,color:t.darkText,margin:0},children:o.right.num}),(0,e.jsx)("p",{style:{fontSize:12,fontWeight:a.typography.weights.medium,color:t.gray500,margin:0},children:o.right.detail})]})]}),i<r.length-1&&(0,e.jsx)("div",{style:{height:1,background:t.dividerDark,marginBottom:10}})]},o.label)),(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:(0,e.jsx)(C,{variant:"muted",size:"sm",fullWidth:!1,trailingIcon:(0,e.jsx)(T,{size:14}),style:{borderRadius:30,padding:"8px 28px"},children:"See All"})})]})}function Xe(){let t=h(),[r,o]=(0,y.useState)(0),i=["Player","MIN","PTS","REB","AST"],s=[["#5","32","18","7","3"],["#3","28","14","4","5"],["#22","35","22","9","2"],["#13","26","8","3","1"],["#11","30","16","5","7"],["#23","18","4","2","1"],["#8","24","10","3","2"],["#7","15","6","2","3"]];return(0,e.jsxs)("div",{style:{padding:"16px 20px",fontFamily:m},children:[(0,e.jsx)("div",{style:{display:"flex",marginBottom:14},children:["Maccabi Kiryat Gat","Ironi Nahariya"].map((d,n)=>{let[f,g]=(0,y.useState)(!1);return(0,e.jsx)("button",{onClick:()=>o(n),onFocus:()=>g(!0),onBlur:()=>g(!1),style:{flex:1,background:"none",border:"none",borderBottom:r===n?`2px solid ${t.jerseyRed}`:`2px solid ${t.barTrack}`,padding:"0 0 8px",fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:r===n?t.darkText:t.gray400,cursor:"pointer",fontFamily:m,borderRadius:a.radii.sm,outline:f?`2px solid ${t.primary}`:"none",outlineOffset:2},children:d},d)})}),(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",marginBottom:10},children:i.map((d,n)=>(0,e.jsx)("span",{style:{fontSize:12,fontWeight:a.typography.weights.medium,color:t.gray400,width:n===0?80:void 0,flex:n===0?void 0:1,textAlign:n===0?"left":"center"},children:d},d))}),(0,e.jsx)("div",{style:{height:1,background:t.barTrack,marginBottom:a.spacing.sm}}),s.map((d,n)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",padding:"8px 0"},children:d.map((f,g)=>(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:t.darkText,width:g===0?80:void 0,flex:g===0?void 0:1,textAlign:g===0?"left":"center"},children:f},g))}),(0,e.jsx)("div",{style:{height:1,background:t.jerseyRed,opacity:.15}})]},n))]})}function za(){return(0,e.jsxs)(je,{label:"Buy Team Stats",children:[(0,e.jsx)(Xe,{}),(0,e.jsx)($e,{})]})}function Ra(){let t=h();return(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:a.spacing.md},children:[{label:"Minutes Played",value:"1245"},{label:"Games Played",value:"24"},{label:"Tournaments",value:"8"}].map(r=>(0,e.jsxs)("div",{style:{background:t.cardBg,padding:a.spacing.md,borderRadius:8,textAlign:"center"},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray500,marginBottom:a.spacing.xs},children:r.label}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.lg,fontWeight:a.typography.weights.bold,color:t.darkText},children:r.value})]},r.label))})}function Ma(){let t=h();return(0,e.jsx)("div",{style:{display:"flex",gap:a.spacing.md},children:[{label:"MPG",value:"32.1"},{label:"PPG",value:"18.5"},{label:"APG",value:"6.2"},{label:"RPG",value:"5.8"}].map(r=>(0,e.jsxs)("div",{style:{flex:1,border:`1px solid ${t.gray200}`,borderRadius:8,padding:a.spacing.sm,textAlign:"center"},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray500},children:r.label}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.bold,marginTop:a.spacing.xs,color:t.darkText},children:r.value})]},r.label))})}function Ha({title:t,description:r}){let o=h();return(0,e.jsxs)("div",{style:{background:o.infoBgPurple,borderRadius:a.radii.badge,padding:a.spacing.lg,border:"1px solid rgba(139,92,246,0.15)"},children:[(0,e.jsx)("div",{style:{fontSize:13,fontWeight:a.typography.weights.bold,color:o.claimedPurple,marginBottom:6},children:t}),(0,e.jsx)("div",{style:{fontSize:12,color:o.gray500},children:r})]})}function _a(){let t=h(),r=t.gray50;return(0,e.jsxs)("div",{style:{maxWidth:430,display:"flex",flexDirection:"column",gap:14,fontFamily:m},children:[(0,e.jsxs)("div",{style:{background:r,borderRadius:14,padding:"20px 24px"},children:[(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.medium,color:t.darkText,margin:"0 0 12px"},children:"Redeem your Access Code here:"}),(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)("input",{type:"text",style:{width:"100%",height:50,background:t.white,border:`1px solid ${t.gray300}`,borderRadius:a.radii.badge,padding:"0 120px 0 16px",fontSize:a.typography.sizes.xs,fontFamily:m,outline:"none",boxSizing:"border-box"}}),(0,e.jsx)(C,{variant:"primary",size:"sm",fullWidth:!1,style:{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",padding:"8px 24px"},children:"Submit"})]})]}),(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:t.gray500,margin:0},children:"or select your plan"}),(0,e.jsxs)("div",{style:{background:r,borderRadius:14,padding:"24px"},children:[(0,e.jsx)("p",{style:{fontSize:18,fontWeight:a.typography.weights.bold,color:t.darkText,margin:"0 0 6px"},children:"Basic Package"}),(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.regular,color:t.gray500,margin:"0 0 16px",lineHeight:1.5},children:"Download a single highlight of your favourite moment from the season!"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:32,fontWeight:a.typography.weights.bold,color:t.darkText},children:"$5.00"}),(0,e.jsx)(C,{variant:"primary",size:"lg",fullWidth:!1,children:"Buy Now"})]})]}),(0,e.jsxs)("div",{style:{background:r,borderRadius:14,padding:"24px",border:`2px solid ${t.premiumYellow}`},children:[(0,e.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:a.spacing.xs,background:t.grayOverlay,borderRadius:a.radii.lg,padding:"6px 14px",marginBottom:10},children:(0,e.jsx)("span",{style:{fontSize:13,fontWeight:a.typography.weights.bold,color:t.darkText},children:"\u{1F525} Most Popular"})}),(0,e.jsx)("p",{style:{fontSize:18,fontWeight:a.typography.weights.bold,color:t.darkText,margin:"0 0 6px"},children:"Premium Package"}),(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.regular,color:t.gray500,margin:"0 0 14px",lineHeight:1.5},children:"Allows access to all Camera's. You can switch cameras to watch any platform"}),(0,e.jsxs)("div",{style:{background:t.gray100,borderRadius:a.radii.badge,padding:"14px 16px",marginBottom:14},children:[(0,e.jsx)("p",{style:{fontSize:12,fontWeight:a.typography.weights.medium,color:t.gray400,margin:"0 0 8px"},children:"You will get access to:"}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(A,{size:16,color:t.successGreen}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:t.darkText},children:"Afrikaanse Ho\xEBr Seunskool U14"})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(A,{size:16,color:t.successGreen}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:t.darkText},children:"Bosh PUP U14"})]})]})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:32,fontWeight:a.typography.weights.bold,color:t.darkText},children:"$35.00"}),(0,e.jsx)(C,{variant:"premium",size:"lg",fullWidth:!1,children:"Buy Now"})]})]})]})}function Ea(){let t=h();return(0,e.jsxs)("div",{style:{background:t.infoBgPurple,borderRadius:a.radii.badge,padding:a.spacing.md,display:"flex",alignItems:"center",gap:a.spacing.md,border:`${a.strokes.thin}px solid ${t.premiumAmber}`},children:[(0,e.jsx)("div",{style:{width:32,height:32,borderRadius:"50%",background:t.premiumDark,border:`${a.strokes.thin}px solid ${t.premiumYellow}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,e.jsx)(ee,{size:12,fill:t.premiumYellow})}),(0,e.jsx)("p",{style:{fontSize:13,fontWeight:a.typography.weights.regular,color:t.black,margin:0,flex:1,lineHeight:1.5,fontFamily:m},children:"Upgrade to access personal highlights for all players in this game"}),(0,e.jsx)(C,{variant:"premium",size:"sm",fullWidth:!1,style:{padding:"4px 12px",fontSize:a.typography.sizes.base,borderRadius:a.radii.pill,flexShrink:0},children:"Upgrade"})]})}function _(){let t=h();return(0,e.jsx)("div",{style:{width:20,height:20,borderRadius:"50%",background:t.premiumDark,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"none"},children:(0,e.jsx)(ee,{size:8,fill:t.premiumYellow})})}function Wa(){let t=h(),[r,o]=(0,y.useState)("full"),i={border:"none",borderRadius:a.radii.chip,padding:`${a.spacing.sm}px ${a.spacing.md}px`,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.regular,cursor:"pointer",height:a.sizes.chipHeight,display:"flex",alignItems:"center",gap:a.spacing.sm,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",fontFamily:m};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:".chipScrollHide::-webkit-scrollbar{display:none}"}),(0,e.jsxs)("div",{className:"chipScrollHide",style:{display:"flex",gap:a.spacing.md,marginBottom:a.spacing.lg,overflowX:"auto",paddingRight:a.spacing.lg,WebkitOverflowScrolling:"touch",scrollbarWidth:"none",flexWrap:"nowrap"},children:[(0,e.jsx)("button",{onClick:()=>o("full"),style:{...i,background:r==="full"?t.jerseyRed:t.gray100,color:r==="full"?t.white:t.black,fontWeight:r==="full"?600:400},children:"Full Game"}),(0,e.jsxs)("button",{onClick:()=>o("condensed"),style:{...i,background:r==="condensed"?t.jerseyRed:t.gray100,color:r==="condensed"?t.white:t.black,fontWeight:r==="condensed"?600:400},children:[(0,e.jsx)(_,{})," Condensed Game"]}),(0,e.jsxs)("button",{onClick:()=>o("highlights"),style:{...i,background:r==="highlights"?t.jerseyRed:t.gray100,color:r==="highlights"?t.white:t.black,fontWeight:r==="highlights"?600:400},children:[(0,e.jsx)(_,{})," Game Highlights"]})]})]})}function he({icon:t,active:r=!1,disabled:o=!1,_forceState:i,onClick:s,isBookmark:d=!1,ariaLabel:n}){let f=h(),g=t,[k,v]=(0,y.useState)(!1),[p,L]=(0,y.useState)(!1),[w,b]=(0,y.useState)(!1),[D,M]=(0,y.useState)(!1),W={default:{default:{background:f.gray100,color:f.gray500},hover:{background:f.gray200,color:f.gray500},active:{background:f.gray300,color:f.darkText},disabled:{background:f.grayOverlay,color:f.disabledTextOnDark}},active:{default:{background:f.gray100,color:f.primary},hover:{background:f.gray200,color:f.primaryHover},active:{background:f.gray300,color:f.primaryActive},disabled:{background:f.grayOverlay,color:f.disabledTextOnDark}}}[r?"active":"default"],c=W[i||(o?"disabled":p?"active":k?"hover":"default")]||W.default,P=ta=>{d&&!o&&(b(!0),setTimeout(()=>b(!1),350)),s&&s(ta)},F=w?"scale(1.3)":"scale(1)",Pe=d&&r?c.color:"none";return(0,e.jsx)("button",{disabled:o,onClick:P,onMouseEnter:()=>!o&&v(!0),onMouseLeave:()=>{v(!1),L(!1)},onMouseDown:()=>!o&&L(!0),onMouseUp:()=>L(!1),onFocus:()=>M(!0),onBlur:()=>M(!1),"aria-label":n,"aria-pressed":d?r:void 0,style:{width:a.sizes.buttonMd,height:a.sizes.buttonMd,borderRadius:"50%",background:c.background,border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:o?"not-allowed":"pointer",flexShrink:0,transition:"background 0.15s, color 0.15s",...D?ae(f):{}},children:(0,e.jsx)("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:d?F:"scale(1)"},children:(0,e.jsx)(g,{size:a.typography.sizes.lg,color:c.color,fill:Pe,style:{transition:"fill 0.3s ease, color 0.3s ease"}})})})}function De({views:t="1 view",bookmarked:r=!1,disabled:o=!1,_forceState:i,onDownload:s,onShare:d,onBookmark:n}){let f=h();return(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",width:"100%",opacity:o&&!i?.5:1},children:[(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:f.gray500},children:t}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md},children:[(0,e.jsx)(he,{icon:J,disabled:o,_forceState:i,onClick:s,ariaLabel:"Download"}),(0,e.jsx)(he,{icon:le,disabled:o,_forceState:i,onClick:d,ariaLabel:"Share"}),(0,e.jsx)(he,{icon:G,active:r,disabled:o,_forceState:i,onClick:n,isBookmark:!0,ariaLabel:r?"Remove bookmark":"Add bookmark"})]})]})}function qa(){let t=h(),r=we();return(0,e.jsxs)("div",{style:{maxWidth:430,margin:"0 auto",background:t.gray50,borderRadius:a.radii.lg,padding:"24px 28px 32px",boxShadow:"0 -4px 24px rgba(0,0,0,0.12)",boxSizing:"border-box"},children:[(0,e.jsx)("h3",{style:{fontFamily:m,fontSize:18,fontWeight:a.typography.weights.bold,textAlign:"center",margin:"0 0 24px",color:t.darkText},children:"Share"}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px 0"},children:Ze.map(o=>{let[i,s]=(0,y.useState)(!1);return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)("button",{"aria-label":"Share via "+o.label,onFocus:()=>s(!0),onBlur:()=>s(!1),style:{width:64,height:64,borderRadius:"50%",background:o.gradient||(r==="dark"&&o.darkColor?o.darkColor:o.color),display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:"none",padding:0,...i?ae(t):{}},children:(0,e.jsx)(o.icon,{size:28})}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:12,fontWeight:a.typography.weights.medium,color:t.darkText,textAlign:"center"},children:o.label})]},o.label)})}),(0,e.jsx)("div",{style:{marginTop:a.spacing.xl},children:(0,e.jsx)(C,{variant:"muted",size:"lg",children:"Cancel"})})]})}var Se=()=>(0,e.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[(0,e.jsx)("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z",fill:"#4285F4"}),(0,e.jsx)("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z",fill:"#34A853"}),(0,e.jsx)("path",{d:"M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z",fill:"#FBBC05"}),(0,e.jsx)("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z",fill:"#EA4335"})]}),ye=()=>(0,e.jsx)("svg",{width:"18",height:"20",viewBox:"0 0 18 22",fill:"currentColor",children:(0,e.jsx)("path",{d:"M17.05 15.23c-.4.92-.59 1.33-1.1 2.15-.72 1.14-1.73 2.56-2.98 2.57-1.12.01-1.4-.73-2.92-.72-1.52.01-1.83.74-2.95.73-1.26-.01-2.22-1.29-2.94-2.43C2.1 14.36 1.93 10.87 3.34 9.04c1-1.3 2.58-2.06 4.01-2.06 1.49 0 2.43.74 3.66.74 1.2 0 1.93-.74 3.66-.74 1.27 0 2.68.69 3.68 1.88-3.23 1.77-2.7 6.38.7 7.37ZM12.14 4.9c.56-.72.99-1.74.83-2.78-.92.06-2 .65-2.63 1.41-.57.69-1.04 1.72-.86 2.72 1 .03 2.04-.57 2.66-1.35Z"})}),Oa=({size:t=24})=>(0,e.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),(0,e.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),Ua=({size:t=24})=>(0,e.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"#fff",children:(0,e.jsx)("path",{d:"M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.384C19.612 22.954 24 17.99 24 12Z"})}),Ga=({size:t=20})=>(0,e.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"#fff",children:(0,e.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Va=({size:t=24})=>(0,e.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"#fff",children:(0,e.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12.05 21.785h-.018a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884ZM20.52 3.449C18.24 1.226 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411Z"})}),Na=({size:t=20})=>(0,e.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"#fff",children:(0,e.jsx)("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.53v-3.5a4.82 4.82 0 0 1-1-.51Z"})}),ja=({size:t=22})=>(0,e.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"#fff",children:(0,e.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"})}),Ze=[{label:"Copy Link",color:"#BDBDBD",icon:Oa},{label:"Facebook",color:"#1877F2",icon:Ua},{label:"X",color:"#000000",darkColor:"#333333",icon:Ga},{label:"WhatsApp",color:"#25D366",icon:Va},{label:"TikTok",color:"#000000",darkColor:"#333333",icon:Na},{label:"Instagram",gradient:"linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",icon:ja}];function Ke({size:t=30}){return(0,e.jsx)("svg",{width:t,height:t,viewBox:"0 0 235 163",fill:"none",style:{flexShrink:0},children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M172.002 54.528L161.909 108.355C160.962 113.497 157.913 116.015 152.867 116.015H69.176C64.13 116.015 62.027 113.497 63.078 108.355L73.172 54.528C74.118 49.386 77.167 46.868 82.214 46.868H165.904C170.951 46.868 173.053 49.386 172.002 54.528ZM182.095 0.7H83.265C42.6813 0.7 19.5508 16.1242 13.7682 46.868L0.731 116.12C-5.0516 146.863 12.2963 162.288 52.8798 162.288H151.71C192.294 162.288 215.424 146.863 221.207 116.12L234.244 46.868C240.027 16.1242 222.679 0.7 182.095 0.7Z",fill:"#00D6FE"})})}function pe({primaryColor:t="#1A3B8A",logo:r,logoSize:o=80,height:i=a.sizes.heroHeight}){let s=(()=>{let d=t.replace("#",""),n=Math.max(0,Math.round(parseInt(d.substring(0,2),16)*.7)),f=Math.max(0,Math.round(parseInt(d.substring(2,4),16)*.7)),g=Math.max(0,Math.round(parseInt(d.substring(4,6),16)*.7));return`rgb(${n},${f},${g})`})();return(0,e.jsx)("div",{style:{width:"100%",height:i,background:`linear-gradient(180deg, ${t} 0%, ${s} 100%)`,borderRadius:"0 0 32px 32px",display:"flex",alignItems:"center",justifyContent:"center"},children:r||(0,e.jsx)("div",{style:{width:o*2.2,height:o*2.2,borderRadius:a.radii.md,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px dashed rgba(255,255,255,0.3)"},children:(0,e.jsxs)("svg",{width:o*1.1,height:o*1.1,viewBox:"0 0 80 80",fill:"none",children:[(0,e.jsx)("rect",{x:"4",y:"4",width:"72",height:"72",rx:"14",fill:"rgba(255,255,255,0.2)"}),(0,e.jsx)("path",{d:"M28 52 L40 28 L52 52 Z",fill:"rgba(255,255,255,0.5)"}),(0,e.jsx)("circle",{cx:"33",cy:"35",r:"5",fill:"rgba(255,255,255,0.5)"})]})})})}var $a=({code:t,title:r})=>{let o=h(),i=we()==="light";return(0,e.jsxs)("div",{style:{background:i?"#1e293b":"#0D1117",borderRadius:a.radii.badge,overflow:"hidden",marginTop:a.spacing.md},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:i?"#0f172a":"#161b22",borderBottom:`1px solid ${i?"#334155":"#30363d"}`},children:[(0,e.jsx)("span",{style:{color:i?"#94a3b8":"#8b949e",fontSize:12,fontWeight:a.typography.weights.semibold},children:r}),(0,e.jsx)(wa,{text:t})]}),(0,e.jsx)("pre",{style:{padding:a.spacing.lg,margin:0,color:i?"#e2e8f0":"#c9d1d9",fontSize:12,lineHeight:1.6,overflow:"auto",maxHeight:400,fontFamily:'"Fira Code","SF Mono",monospace',whiteSpace:"pre-wrap",wordBreak:"break-word"},children:t})]})},u=({title:t,desc:r,children:o,code:i,codeTitle:s})=>{let d=h(),n=we()==="light";return(0,e.jsxs)("div",{style:{background:d.white,border:`1px solid ${d.gray200}`,borderRadius:a.radii.md,overflow:"hidden",marginBottom:20},children:[(0,e.jsxs)("div",{style:{padding:"14px 20px",borderBottom:`1px solid ${n?d.gray50:d.gray100}`},children:[(0,e.jsx)("h3",{style:{margin:0,fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.bold,color:d.darkText},children:t}),r&&(0,e.jsx)("p",{style:{margin:"4px 0 0",fontSize:12,color:d.gray500},children:r})]}),(0,e.jsx)("div",{style:{padding:20},children:o}),i&&(0,e.jsx)($a,{code:i,title:s||"SFC"})]})},Xa=({name:t,hex:r})=>{let o=h();return(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"5px 0"},children:[(0,e.jsx)("div",{style:{width:36,height:36,borderRadius:8,background:r,border:`1px solid ${o.gray200}`,flexShrink:0}}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:12,fontWeight:a.typography.weights.semibold,color:o.darkText},children:t}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:o.gray500,fontFamily:"monospace"},children:r})]})]})};function ke({initials:t="BR",size:r=40}){let o=h();return(0,e.jsx)("div",{style:{width:r,height:r,borderRadius:"50%",background:o.gray500,display:"flex",alignItems:"center",justifyContent:"center",color:o.white,fontFamily:m,fontSize:r*.38,fontWeight:a.typography.weights.bold,flexShrink:0},children:t})}function Le({count:t=0,size:r=20}){let o=h();return(0,e.jsxs)("div",{style:{position:"relative",display:"inline-flex"},children:[(0,e.jsx)(K,{size:r,color:o.black}),t>0&&(0,e.jsx)("div",{style:{position:"absolute",top:-4,right:-6,minWidth:16,height:16,borderRadius:8,background:o.notifBadgeRed,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",boxSizing:"border-box"},children:(0,e.jsx)("span",{style:{fontFamily:m,fontSize:9,fontWeight:a.typography.weights.bold,color:o.white},children:t})})]})}function xe({size:t=28,name:r=""}){let o=h(),i=["#D0142C","#116DFF","#22C55E","#E7A610","#8B5CF6","#0d9488","#E8332B","#1877F2","#DD2A7B","#0EA5E9","#F97316","#6366F1"],s=r?[...r].reduce((f,g)=>(f<<5)-f+g.charCodeAt(0)|0,0):0,d=Math.abs(s)%i.length,n=r?r.charAt(0).toUpperCase():"T";return(0,e.jsx)("div",{style:{width:t,height:t,borderRadius:"50%",background:o.white,border:`${a.strokes.thin}px solid ${o.barTrack}`,flexShrink:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsxs)("svg",{viewBox:"0 0 28 28",width:t,height:t,children:[(0,e.jsx)("circle",{cx:"14",cy:"14",r:"13",fill:i[d],opacity:"0.15"}),(0,e.jsx)("circle",{cx:"14",cy:"14",r:"13",stroke:i[d],strokeWidth:"0.5",fill:"none",opacity:"0.4"}),(0,e.jsx)("text",{x:"14",y:"18.5",textAnchor:"middle",fontFamily:m,fontSize:"14",fontWeight:"700",fill:i[d],children:n})]})})}function Oe({size:t=48,name:r=""}){let o=h();return(0,e.jsx)("div",{style:{width:t,height:t,borderRadius:"50%",background:o.gray200,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden"},children:(0,e.jsx)(N,{size:t*.55,color:o.gray400})})}function Za({active:t=0}){let r=h(),[o,i]=(0,y.useState)(t),[s,d]=(0,y.useState)(0),n=(0,y.useRef)(0),f=(0,y.useRef)(!1);var g=[{bg:"linear-gradient(135deg, #1a1a1a 0%, #333 100%)",label:"Ad Slot 1"},{bg:"linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)",label:"Ad Slot 2"}];let k=L=>{n.current=L.clientX,f.current=!0,L.currentTarget.setPointerCapture(L.pointerId)},v=L=>{f.current&&d(L.clientX-n.current)},p=()=>{f.current&&(f.current=!1,s<-40&&o<g.length-1?i(o+1):s>40&&o>0&&i(o-1),d(0))};return(0,e.jsxs)("div",{style:{position:"relative",width:"100%",borderRadius:0,overflow:"hidden",touchAction:"pan-y",cursor:"grab"},onPointerDown:k,onPointerMove:v,onPointerUp:p,onPointerCancel:p,children:[(0,e.jsx)("div",{style:{display:"flex",transition:f.current?"none":"transform 0.3s",transform:`translateX(calc(-${o*100}% + ${s}px))`},children:g.map(function(L,w){return(0,e.jsx)("div",{style:{minWidth:"100%",height:180,background:L.bg,display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},children:(0,e.jsx)("span",{style:{color:r.white,fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.semibold,opacity:.7},children:L.label})},w)})}),(0,e.jsx)("div",{style:{position:"absolute",bottom:10,left:"50%",transform:"translateX(-50%)",display:"flex",gap:a.spacing.sm},children:g.map(function(L,w){return(0,e.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:w===o?r.white:"rgba(255,255,255,0.5)",transition:"background 0.2s"}},w)})})]})}function Je({jerseyNumber:t=4,text:r='"Player #4 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'}){let o=h();return(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md,padding:"14px 0",borderBottom:`1px solid ${o.gray100}`,alignItems:"flex-start"},children:[(0,e.jsxs)("div",{style:{position:"relative",flexShrink:0},children:[(0,e.jsx)("svg",{width:50,height:50*(67/73),viewBox:"0 0 73 73",fill:"none",children:(0,e.jsx)("path",{d:"M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z",fill:o.jerseyRed,stroke:o.white,strokeWidth:a.strokes.thick})}),(0,e.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -38%)",fontFamily:m,fontSize:18,fontWeight:800,color:o.white},children:t})]}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:13,fontWeight:a.typography.weights.regular,color:o.black,lineHeight:1.5,flex:1},children:r})]})}function Ka(){let t=h(),[r,o]=(0,y.useState)(!1);var i=[{num:4,text:'"Player #4 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'},{num:11,text:'"Player #11 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'},{num:4,text:'"Player #4 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'}];return(0,e.jsxs)("div",{style:{width:"100%",maxWidth:380,background:t.white,borderRadius:14,boxShadow:"0 8px 30px rgba(0,0,0,0.15)",overflow:"hidden"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:`1px solid ${t.gray100}`},children:[(0,e.jsx)("h3",{style:{margin:0,fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.bold,color:t.black},children:"Notification Center"}),(0,e.jsx)("button",{onFocus:()=>o(!0),onBlur:()=>o(!1),style:{background:"none",border:"none",fontFamily:m,fontSize:13,color:t.gray400,cursor:"pointer",borderRadius:a.radii.sm,...r?ae(t):{}},children:"Clear all"})]}),(0,e.jsx)("div",{style:{padding:"0 20px",maxHeight:320,overflowY:"auto"},children:i.map(function(s,d){return(0,e.jsx)(Je,{jerseyNumber:s.num,text:s.text},d)})})]})}function R({label:t,badge:r,variant:o="default",onClick:i,_forceState:s}){let d=h(),[n,f]=(0,y.useState)(!1),[g,k]=(0,y.useState)(!1),[v,p]=(0,y.useState)(!1),L=s||(g?"active":n?"hover":"default");var w=o==="link"?d.primary:o==="danger"?d.errorRed:d.black,b=L==="active"?d.cardHoverBg:L==="hover"?d.gray50:"transparent";return(0,e.jsxs)("button",{onClick:i,onMouseEnter:()=>f(!0),onMouseLeave:()=>{f(!1),k(!1)},onMouseDown:()=>k(!0),onMouseUp:()=>k(!1),onFocus:()=>p(!0),onBlur:()=>p(!1),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"16px 8px",margin:"0 -8px",background:b,border:"none",borderBottom:`1px solid ${d.gray100}`,cursor:"pointer",fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.regular,color:w,textAlign:"left",borderRadius:L!=="default"?8:0,transition:"background 0.15s",...v?ae(d):{}},children:[(0,e.jsxs)("span",{children:[t,r!==void 0&&(0,e.jsxs)("span",{style:{color:d.primary,marginLeft:a.spacing.xs},children:["(",r,")"]})]}),o!=="danger"&&(0,e.jsx)(T,{size:16,color:d.gray400,style:{transform:"rotate(-90deg)"}})]})}function Qe({teamName:t="S.D Spartans",playerName:r="Weiss Tal",number:o=11,position:i="Guard",height:s="6'0"}){let d=h();return(0,e.jsxs)("div",{style:{background:d.cardBg,borderRadius:14,padding:a.spacing.lg,display:"flex",alignItems:"center",gap:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:52,height:52,borderRadius:"50%",background:d.gray300,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(N,{size:24,color:d.gray400})}),(0,e.jsxs)("div",{style:{flex:1},children:[(0,e.jsx)("div",{style:{fontFamily:m,fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.medium,color:d.gray400},children:t}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.bold,color:d.black},children:r}),(0,e.jsxs)("div",{style:{fontFamily:m,fontSize:12,fontWeight:a.typography.weights.regular,color:d.gray500},children:["#",o,", ",i,", ",s]})]})]})}function Ja({open:t=!0}){let r=h();return(0,e.jsxs)("div",{style:{display:"flex",width:"100%",height:520,position:"relative",borderRadius:14,overflow:"hidden"},children:[(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:r.overlay}}),(0,e.jsxs)("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:300,background:r.white,padding:"20px 20px 24px",display:"flex",flexDirection:"column",overflowY:"auto"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:a.spacing.lg},children:[(0,e.jsx)(ke,{initials:"BR",size:36}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.bold,color:r.black,flex:1},children:"Brenden Rogers"}),(0,e.jsx)("button",{"aria-label":"Close",style:{background:"none",border:"none",cursor:"pointer",color:r.black,display:"flex",borderRadius:a.radii.sm},children:(0,e.jsx)(q,{size:20})})]}),(0,e.jsx)(Qe,{}),(0,e.jsx)("div",{style:{marginTop:a.spacing.md},children:(0,e.jsx)(C,{variant:"premium",size:"md",fullWidth:!0,children:"Go to MyCareer Page"})}),(0,e.jsxs)("div",{style:{marginTop:a.spacing.lg,flex:1},children:[(0,e.jsx)(R,{label:"Following",badge:14}),(0,e.jsx)(R,{label:"Language"}),(0,e.jsx)(R,{label:"My Account"}),(0,e.jsx)(R,{label:"Saved Videos"}),(0,e.jsx)(R,{label:"My Highlights"}),(0,e.jsx)(R,{label:"Claim Player",variant:"link"})]}),(0,e.jsx)("button",{"aria-label":"Log out",style:{background:"none",border:"none",fontFamily:m,fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.regular,color:r.errorRed,cursor:"pointer",textAlign:"left",padding:"12px 0",borderRadius:a.radii.sm,width:"100%"},children:"Log Out"})]})]})}function $({title:t="Weiss with the dimes",date:r="NOV 13, 2025",duration:o="1:23",locked:i=!0,emoji:s="\u{1F3C0}"}){let d=h();return(0,e.jsxs)("div",{style:{position:"relative",width:130,height:190,borderRadius:a.radii.badge,overflow:"hidden",background:d.heroBg,flexShrink:0},children:[(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)"}}),(0,e.jsx)("div",{style:{position:"absolute",top:6,left:6,background:"rgba(0,0,0,0.55)",borderRadius:a.radii.pill,padding:"1px 5px",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)("span",{style:{fontFamily:m,fontWeight:a.typography.weights.medium,fontSize:9,color:"#FFFFFF",lineHeight:1},children:o})}),i?(0,e.jsx)("div",{style:{position:"absolute",top:6,right:6,width:24,height:24,background:d.premiumDark,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,border:`${a.strokes.medium}px solid ${d.premiumYellow}`,boxSizing:"border-box"},children:(0,e.jsx)(ee,{size:8,fill:d.premiumYellow})}):(0,e.jsx)("div",{style:{position:"absolute",top:6,right:6,width:24,height:24,borderRadius:"50%",background:d.gray500,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2},children:(0,e.jsx)(H,{size:10,color:d.jerseyStroke,fill:d.jerseyStroke})}),(0,e.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",padding:"24px 8px 8px",zIndex:1},children:[(0,e.jsxs)("div",{style:{fontFamily:m,fontSize:12,fontWeight:a.typography.weights.bold,color:d.white,lineHeight:"14px"},children:[s," ",t]}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:9,fontWeight:a.typography.weights.regular,color:d.gray300,marginTop:3},children:r})]})]})}function Qa(){return(0,e.jsx)(O,{variant:"highlights"})}function ge({number:t,name:r,photo:o,claimed:i=!1,selected:s=!1,onClick:d,teamColor:n="#D0142C"}){let f=h(),[g,k]=(0,y.useState)(!1),v=56,p=s?`2.5px solid ${n}`:g?`2px solid ${f.gray300}`:`2px solid ${f.gray200}`;return(0,e.jsxs)("button",{onClick:d,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),"aria-label":(i?r:"Player #"+t)+(s?" (selected)":""),"aria-pressed":s,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,background:"none",border:"none",cursor:"pointer",padding:0,flexShrink:0},children:[(0,e.jsxs)("div",{style:{position:"relative",width:v,height:v},children:[i?(0,e.jsx)("div",{style:{width:v,height:v,borderRadius:"50%",border:p,overflow:"hidden",boxSizing:"border-box",transition:"border 0.15s",background:f.gray100,display:"flex",alignItems:"center",justifyContent:"center"},children:o?(0,e.jsx)("img",{src:o,alt:r,style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${n}33 0%, ${n}66 100%)`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.lg,fontWeight:a.typography.weights.bold,color:n},children:(r||"?").charAt(0).toUpperCase()})})}):(0,e.jsx)("div",{style:{width:v,height:v,borderRadius:"50%",background:n,border:s?`2.5px solid ${f.primary}`:g?`2px solid ${n}`:"2px solid transparent",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",transition:"all 0.15s"},children:(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.lg,fontWeight:a.typography.weights.bold,color:f.white},children:t})}),s&&(0,e.jsx)("div",{style:{position:"absolute",bottom:-2,right:-2,width:18,height:18,background:f.primary,borderRadius:"50%",border:`2px solid ${f.white}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(A,{size:10,color:f.white,strokeWidth:3})})]}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.xxs,fontWeight:s?a.typography.weights.semibold:a.typography.weights.regular,color:s?f.darkText:f.gray500,maxWidth:64,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:i?r:`#${t}`})]})}function ie({players:t,selectedId:r,onSelect:o,teamColor:i="#D0142C"}){let d=t||[{id:1,number:4,name:"Weiss T.",claimed:!0},{id:2,number:11,name:"Cohen D.",claimed:!0},{id:3,number:7,claimed:!1},{id:4,number:23,claimed:!1},{id:5,number:14,name:"Brown A.",claimed:!0},{id:6,number:8,claimed:!1}];return(0,e.jsx)("div",{style:{display:"flex",gap:a.spacing.md,overflowX:"auto",paddingBottom:a.spacing.sm,scrollbarWidth:"none"},children:d.map(n=>(0,e.jsx)(ge,{number:n.number,name:n.name,photo:n.photo,claimed:n.claimed,selected:r===n.id,onClick:()=>o&&o(n.id),teamColor:i},n.id))})}function Ya(){let t=h(),[r,o]=(0,y.useState)([{name:"S.D Spartans Men",followed:!0},{name:"Ironi Nahariya",followed:!1},{name:"Hapoel Tel Aviv Women",followed:!0}]),i=s=>o(d=>d.map((n,f)=>f===s?{...n,followed:!n.followed}:n));return(0,e.jsx)("div",{style:{maxWidth:358,display:"flex",alignItems:"center",gap:a.spacing.sm},children:r.map((s,d)=>(0,e.jsx)(Ye,{teamName:s.name,followed:s.followed,onClick:()=>i(d)},d))})}function Ye({teamName:t="S.D Spartans Men",followed:r=!1,onClick:o}){let i=h(),[s,d]=(0,y.useState)(!1),n=r?"Following":"Follow",f=r?i.gray500:i.primary;return(0,e.jsxs)("button",{onClick:o,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),"aria-pressed":r,"aria-label":(r?"Unfollow ":"Follow ")+t,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm,flex:"1 0 0",minWidth:0,padding:"12px 16px 8px 16px",background:s?i.gray100:i.gray50,borderRadius:a.radii.badge,border:"none",cursor:"pointer",transition:"background 0.15s"},children:[(0,e.jsx)(xe,{size:48,name:t}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:i.gray500,textAlign:"center",lineHeight:"20px",height:40,overflow:"hidden",alignSelf:"stretch",wordBreak:"break-word",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:t}),(0,e.jsx)("div",{style:{height:1,alignSelf:"stretch",background:i.gray300}}),(0,e.jsx)("div",{style:{height:18,display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"stretch"},children:(0,e.jsx)("span",{style:{fontFamily:m,fontSize:12,fontWeight:a.typography.weights.medium,color:f},children:n})})]})}function et({sections:t,onClick:r}){let o=h(),s=t||[{title:"Following",teams:[{name:"S.D Spartans Men",followed:!0},{name:"S.D Spartans Women",followed:!0},{name:"Maccabi Kiryat Gat",followed:!0}]},{title:"Men",teams:[{name:"S.D Spartans Men",followed:!0},{name:"Ironi Nahariya",followed:!1},{name:"Hapoel Tel Aviv",followed:!1}]}];return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.xl},children:s.map((d,n)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.semibold,color:o.black,display:"block",marginBottom:a.spacing.sm},children:d.title}),(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:d.teams.map((f,g)=>(0,e.jsx)(Ye,{teamName:f.name,followed:f.followed,onClick:()=>r&&r(f.name)},g))})]},n))})}function at({teams:t=["Maccabi Kiryat Gat","Ironi Nahariya"]}){let r=h();var o=(0,y.useState)(0),i=o[0],s=o[1];return(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{style:{fontFamily:m,fontSize:18,fontWeight:a.typography.weights.bold,color:r.black,marginBottom:a.spacing.md},children:"Player Highlights"}),(0,e.jsx)("div",{style:{display:"flex",borderBottom:`2px solid ${r.gray100}`,marginBottom:a.spacing.lg},children:t.map(function(d,n){let[f,g]=(0,y.useState)(!1);return(0,e.jsx)("button",{onClick:function(){s(n)},onFocus:()=>g(!0),onBlur:()=>g(!1),style:{flex:1,background:"none",border:"none",borderBottom:n===i?`2px solid ${r.accent}`:"2px solid transparent",padding:"10px 0",fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:n===i?600:400,color:n===i?r.black:r.gray400,cursor:"pointer",marginBottom:-2,borderRadius:a.radii.sm,outline:f?`2px solid ${r.primary}`:"none",outlineOffset:2},children:d},n)})}),(0,e.jsx)("h4",{style:{fontFamily:m,fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.semibold,color:r.black,marginBottom:a.spacing.md},children:"Followed Players"}),(0,e.jsx)(ie,{teamColor:r.accent}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md,overflowX:"auto",paddingBottom:a.spacing.sm,marginTop:a.spacing.lg},children:[(0,e.jsx)($,{title:"#4 Gets the ball Forward",duration:"0:45",emoji:"\u{1F3C0}"}),(0,e.jsx)($,{title:"#11 Gets the ball Forward",duration:"0:32",emoji:"\u{1F3C0}"})]})]})}var ea={noLiveGames:{icon:"play",title:"No Live Games",subtitle:"There are no live games right now. Check back later!",cta:null},noFollowing:{icon:"user",title:"Not Following Anyone Yet",subtitle:"Follow teams and athletes to see their games and highlights here.",cta:"Browse Teams"},noRecentGames:{icon:"play",title:"No Recent Games",subtitle:"Games you follow will show up here once they're played.",cta:null},noNotifications:{icon:"bell",title:"No Notifications",subtitle:"You're all caught up! New updates will appear here.",cta:null},noHighlights:{icon:"play",title:"No Highlights Yet",subtitle:"Highlights for this game are still being processed.",cta:null},noPersonal:{icon:"play",title:"No Personal Highlights",subtitle:"Claim a player to get personalized highlight reels after each game.",cta:"Claim Player"},noPlayerStats:{icon:"search",title:"Stats Unavailable",subtitle:"Player statistics were not recorded for this game.",cta:null},noFollowedPlayers:{icon:"user",title:"No Followed Players",subtitle:"You're not following any players in this game.",cta:"Browse Players"},noSavedVideos:{icon:"bookmark",title:"No Saved Videos",subtitle:"Videos you bookmark will be saved here for easy access.",cta:null},noSearchResults:{icon:"search",title:"No Results Found",subtitle:"Try a different search term or check for typos.",cta:null},noTeamsFound:{icon:"search",title:"No Teams Found",subtitle:"We couldn't find teams in your area. Try searching manually.",cta:"Search Teams"},noClaimedPlayer:{icon:"user",title:"No Claimed Player",subtitle:"Claim your player profile to unlock personal highlights and career stats.",cta:"Claim Player"}},tt={play:H,user:N,bell:K,search:V,bookmark:G};function Ue({preset:t,icon:r,title:o,subtitle:i,cta:s,onAction:d}){let n=h(),f=t?ea[t]||{}:{},g=r||f.icon||"search",k=o||f.title||"Nothing Here",v=i||f.subtitle||"",p=s!==void 0?s:f.cta||null,L=tt[g]||V;return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:`40px ${a.spacing.xl}px`,textAlign:"center"},children:[(0,e.jsx)("div",{style:{width:64,height:64,borderRadius:"50%",background:n.gray50,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:a.spacing.lg},children:(0,e.jsx)(L,{size:28,color:n.gray400,role:"img","aria-label":k})}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:18,fontWeight:a.typography.weights.bold,color:n.darkText,marginBottom:a.spacing.sm},children:k}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.regular,color:n.gray500,lineHeight:1.5,maxWidth:280,marginBottom:p?a.spacing.xl:0},children:v}),p&&(0,e.jsx)(C,{variant:"primary",size:"md",fullWidth:!1,onClick:d,children:p})]})}function ot({variant:t="generic",title:r,subtitle:o,onRetry:i}){let s=h(),d={generic:{title:"Something Went Wrong",subtitle:"An unexpected error occurred. Please try again."},network:{title:"Connection Error",subtitle:"Please check your internet connection and try again."},timeout:{title:"Request Timed Out",subtitle:"The server took too long to respond. Please try again."},video:{title:"Video Unavailable",subtitle:"This video failed to load. It may still be processing."},data:{title:"Failed to Load Data",subtitle:"We couldn't load this content right now. Please try again."},auth:{title:"Session Expired",subtitle:"Your session has expired. Please sign in again."}},n=d[t]||d.generic,f=r||n.title,g=o||n.subtitle,k=t==="auth";return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:`40px ${a.spacing.xl}px`,textAlign:"center"},children:[(0,e.jsx)("div",{style:{width:64,height:64,borderRadius:"50%",background:`${s.errorRed}14`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:a.spacing.lg},children:(0,e.jsx)(q,{size:28,color:s.errorRed,role:"img","aria-label":f})}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:18,fontWeight:a.typography.weights.bold,color:s.darkText,marginBottom:a.spacing.sm},children:f}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.regular,color:s.gray500,lineHeight:1.5,maxWidth:280,marginBottom:a.spacing.xl},children:g}),(0,e.jsx)(C,{variant:k?"primary":"muted",size:"md",fullWidth:!1,onClick:i,children:k?"Sign In":"Try Again"})]})}function rt(){let t=h();return(0,e.jsxs)("div",{style:{fontFamily:m,display:"flex",flexDirection:"column",gap:a.spacing.sm},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxl,fontWeight:a.typography.weights.bold,color:t.darkText},children:"Page Title \u2014 24px Bold"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xl,fontWeight:a.typography.weights.bold,color:t.darkText},children:"Section Heading \u2014 22px Bold"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.lg,fontWeight:a.typography.weights.medium,color:t.darkText},children:"Subtitle \u2014 20px Medium"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.base,fontWeight:a.typography.weights.medium,color:t.darkText},children:"Input / Body / Menu Item \u2014 16px Medium"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.medium,color:t.gray400},children:"Button / Tab \u2014 15px Medium"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.semibold,color:t.white,background:t.heroBg,padding:"4px 10px",borderRadius:8,display:"inline-block"},children:"Video Label \u2014 14px Semibold White"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:t.gray400},children:"Link / Caption \u2014 14px Medium"}),(0,e.jsx)("div",{style:{fontSize:13,fontWeight:a.typography.weights.regular,color:t.darkText},children:"Notification Text \u2014 13px Regular"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,textTransform:"uppercase",background:t.highlightsBadgeBg,color:t.highlightsBadgeText,padding:"4px 12px",borderRadius:a.radii.badge,display:"inline-block"},children:"Badge Label \u2014 11px Bold Uppercase"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.jersey,fontWeight:a.typography.weights.bold,color:t.white,background:t.jerseyRed,width:40,height:40,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"},children:"7"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400},children:"Jersey Number \u2014 29px Bold White"})]})}function lt(){let t=h();return(0,e.jsx)("div",{style:{display:"flex",gap:a.spacing.md,flexWrap:"wrap",alignItems:"flex-end"},children:Object.entries(a.spacing).map(([r,o])=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)("div",{style:{width:o,height:o,background:t.primary,borderRadius:2,minWidth:4,minHeight:4}}),(0,e.jsx)("span",{style:{fontSize:10,fontWeight:a.typography.weights.semibold,color:t.darkText},children:r}),(0,e.jsxs)("span",{style:{fontSize:10,color:t.gray400,fontFamily:"monospace"},children:[o,"px"]})]},r))})}function it(){let t=h();return(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},children:Object.entries(a.sizes).map(([r,o])=>(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px 10px",background:t.gray50,borderRadius:6},children:[(0,e.jsx)("span",{style:{fontSize:12,fontWeight:a.typography.weights.semibold,color:t.darkText},children:r}),(0,e.jsxs)("span",{style:{fontSize:12,color:t.gray400,fontFamily:"monospace"},children:[o,"px"]})]},r))})}function dt(){let t=h();return(0,e.jsx)("div",{style:{display:"flex",gap:a.spacing.lg,flexWrap:"wrap",alignItems:"flex-end"},children:Object.entries(a.radii).map(([r,o])=>{let i=r==="pill";return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)("div",{style:{width:i?80:48,height:i?32:48,background:t.primary,borderRadius:i?o:Math.min(o,24),opacity:.15}}),(0,e.jsx)("span",{style:{fontSize:10,fontWeight:a.typography.weights.semibold,color:t.darkText},children:r}),(0,e.jsxs)("span",{style:{fontSize:10,color:t.gray400,fontFamily:"monospace"},children:[o,"px"]})]},r)})})}function B({children:t,variant:r="dark"}){let o=h(),i=r==="muted"?o.gray500:r==="subtle"?o.gray400:o.darkText;return(0,e.jsx)("div",{style:{fontSize:13,color:i,lineHeight:1.8,fontFamily:"monospace"},children:t})}function Ae({children:t,variant:r="muted"}){let o=h(),i=r==="subtle"?o.gray400:o.gray500;return(0,e.jsx)("div",{style:{fontSize:13,color:i,lineHeight:1.6},children:t})}function Ge({children:t,variant:r="dark",lineHeight:o=2}){let i=h(),s=r==="muted"?i.gray500:i.darkText;return(0,e.jsx)("div",{style:{fontSize:13,color:s,lineHeight:o,fontFamily:m},children:t})}function st(){let t=h(),r={border:"none",borderRadius:a.radii.chip,padding:"8px 12px",fontSize:a.typography.sizes.base,height:40,display:"flex",alignItems:"center",gap:a.spacing.sm,fontFamily:m,whiteSpace:"nowrap",flexShrink:0,cursor:"default"},o=[{label:"active (selected)",states:[{s:"default",style:{...r,fontWeight:a.typography.weights.semibold,background:t.jerseyRed,color:t.white}},{s:"hover",style:{...r,fontWeight:a.typography.weights.semibold,background:t.jerseyRed,color:t.white}},{s:"pressed",style:{...r,fontWeight:a.typography.weights.semibold,background:t.jerseyRed,color:t.white}},{s:"disabled",style:{...r,fontWeight:a.typography.weights.semibold,background:t.grayOverlay,color:t.disabledTextOnDark}}],chip:"Full Game",lock:!1},{label:"inactive (free content)",states:[{s:"default",style:{...r,fontWeight:a.typography.weights.regular,background:t.gray100,color:t.black}},{s:"hover",style:{...r,fontWeight:a.typography.weights.regular,background:t.gray200,color:t.black}},{s:"pressed",style:{...r,fontWeight:a.typography.weights.regular,background:t.gray300,color:t.black}},{s:"disabled",style:{...r,fontWeight:a.typography.weights.regular,background:t.grayOverlay,color:t.disabledTextOnDark}}],chip:"Full Game",lock:!1},{label:"inactive + lock (premium)",states:[{s:"default",style:{...r,fontWeight:a.typography.weights.regular,background:t.gray100,color:t.black}},{s:"hover",style:{...r,fontWeight:a.typography.weights.regular,background:t.gray200,color:t.black}},{s:"pressed",style:{...r,fontWeight:a.typography.weights.regular,background:t.gray300,color:t.black}},{s:"disabled",style:{...r,fontWeight:a.typography.weights.regular,background:t.grayOverlay,color:t.disabledTextOnDark}}],chip:"Condensed",lock:!0}];return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:o.map(i=>(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400,marginBottom:a.spacing.sm},children:i.label}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:a.spacing.sm},children:i.states.map(({s,style:d})=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,e.jsxs)("button",{style:d,children:[i.lock&&(0,e.jsx)(_,{})," ",i.chip]}),(0,e.jsx)("span",{style:{fontSize:9,color:t.gray400},children:s})]},s))})]},i.label))})}function nt(){let t=h(),r={border:"none",borderRadius:a.radii.chip,padding:"8px 12px",fontSize:a.typography.sizes.base,height:40,display:"flex",alignItems:"center",gap:a.spacing.sm,fontFamily:m,whiteSpace:"nowrap",flexShrink:0},o={...r,fontWeight:a.typography.weights.semibold,background:t.jerseyRed,color:t.white},i={...r,fontWeight:a.typography.weights.regular,background:t.gray100,color:t.black},s={display:"flex",gap:a.spacing.md,flexWrap:"nowrap",overflowX:"auto"};return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.lg},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400,marginBottom:6},children:"Full Game active"}),(0,e.jsxs)("div",{style:s,children:[(0,e.jsx)("button",{style:o,children:"Full Game"}),(0,e.jsxs)("button",{style:i,children:[(0,e.jsx)(_,{})," Condensed Game"]}),(0,e.jsxs)("button",{style:i,children:[(0,e.jsx)(_,{})," Game Highlights"]})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400,marginBottom:6},children:"Condensed Game active"}),(0,e.jsxs)("div",{style:s,children:[(0,e.jsx)("button",{style:i,children:"Full Game"}),(0,e.jsxs)("button",{style:o,children:[(0,e.jsx)(_,{})," Condensed Game"]}),(0,e.jsxs)("button",{style:i,children:[(0,e.jsx)(_,{})," Game Highlights"]})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400,marginBottom:6},children:"Game Highlights active"}),(0,e.jsxs)("div",{style:s,children:[(0,e.jsx)("button",{style:i,children:"Full Game"}),(0,e.jsxs)("button",{style:i,children:[(0,e.jsx)(_,{})," Condensed Game"]}),(0,e.jsxs)("button",{style:o,children:[(0,e.jsx)(_,{})," Game Highlights"]})]})]})]})}function ut(){let t=h();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:10,background:t.gray100,borderRadius:14,padding:a.spacing.lg},children:[(0,e.jsx)(X,{name:"M. Kiryat Gat",score:"87",isWinner:!0}),(0,e.jsx)(X,{name:"H. Haifa",score:"79",isWinner:!1})]}),(0,e.jsxs)("div",{style:{marginTop:a.spacing.md,display:"flex",flexDirection:"column",gap:10,background:t.gray100,borderRadius:14,padding:a.spacing.lg},children:[(0,e.jsx)(X,{name:"Maccabi Kiryat Gat",score:"89",isWinner:!0,logoSize:27,fontWeight:400,gap:8}),(0,e.jsx)(X,{name:"Ironi Nahariya",score:"77",isWinner:!1,logoSize:27,fontWeight:400,gap:8})]}),(0,e.jsx)("p",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400,marginTop:a.spacing.sm},children:"Top: LiveGameCard style (28px logo, 500 weight, 12px gap) \xB7 Bottom: GameResultCard style (27px logo, 400 weight, 8px gap)"})]})}function ft({tab:t,setTab:r}){let o=h();return(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,e.jsxs)("div",{style:{width:390,background:o.white,borderRadius:a.radii.lg,boxShadow:"0 4px 24px rgba(0,0,0,0.12)",overflow:"hidden"},children:[(0,e.jsx)(pe,{primaryColor:"#1A3B8A",logoSize:80,height:340}),(0,e.jsxs)("div",{style:{padding:"14px 14px 28px",display:"flex",flexDirection:"column",gap:14},children:[(0,e.jsx)(j,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup"}],active:t,onSelect:r}),t==="signin"?(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)("h2",{style:{fontFamily:m,fontSize:a.typography.sizes.xl,fontWeight:a.typography.weights.bold,margin:0,color:o.darkText},children:"Sign In"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email"}),(0,e.jsx)(S,{placeholder:"Enter password...",type:"password"}),(0,e.jsx)(C,{children:"Sign in"}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(me,{children:"Forgot password?"})}),(0,e.jsx)(ze,{}),(0,e.jsxs)(C,{variant:"social",children:[(0,e.jsx)(ye,{})," ","Continue with Apple"]}),(0,e.jsxs)(C,{variant:"social",children:[(0,e.jsx)(Se,{})," ","Continue with Google"]})]}):(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)("h2",{style:{fontFamily:m,fontSize:a.typography.sizes.xl,fontWeight:a.typography.weights.bold,margin:0,color:o.darkText},children:"Create Account"}),(0,e.jsx)(S,{placeholder:"Full Name..."}),(0,e.jsx)(Ne,{placeholder:"Age..."}),(0,e.jsx)(S,{placeholder:"Phone Number...",type:"tel"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email"}),(0,e.jsx)(S,{placeholder:"Create password...",type:"password"}),(0,e.jsx)(C,{children:"Create Account"}),(0,e.jsx)(ze,{}),(0,e.jsxs)(C,{variant:"social",children:[(0,e.jsx)(ye,{})," ","Continue with Apple"]}),(0,e.jsxs)(C,{variant:"social",children:[(0,e.jsx)(Se,{})," ","Continue with Google"]}),(0,e.jsxs)("p",{style:{textAlign:"center",fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.medium,color:o.gray400,margin:0},children:["Already have an account? ",(0,e.jsx)(me,{variant:"accent",children:"Sign in"})]})]})]})]})})}function ct({selJerseys:t,toggleJ:r}){let o=h();return(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:a.spacing.md},children:(0,e.jsxs)("div",{style:{width:390,background:o.white,borderRadius:a.radii.lg,boxShadow:"0 4px 24px rgba(0,0,0,0.12)",overflow:"hidden",position:"relative"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 16px 0",height:64},children:[(0,e.jsx)(Ke,{size:42}),(0,e.jsx)("span",{style:{fontFamily:m,fontSize:a.typography.sizes.sm,fontWeight:a.typography.weights.medium,color:o.darkText},children:"Cancel"})]}),(0,e.jsxs)("div",{style:{padding:"28px 16px 90px",display:"flex",flexDirection:"column",gap:a.spacing.xl},children:[(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)("h1",{style:{fontFamily:m,fontSize:a.typography.sizes.xl,fontWeight:a.typography.weights.bold,margin:0,color:o.darkText},children:"Select the players you want to follow"}),(0,e.jsx)("p",{style:{fontFamily:m,fontSize:17,fontWeight:a.typography.weights.medium,color:o.darkText,margin:"8px 0 0"},children:"To personalize your experience, choose the player's jersey number you want to follow."})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,e.jsx)("h2",{style:{fontFamily:m,fontSize:a.typography.sizes.lg,fontWeight:a.typography.weights.bold,margin:0,color:o.darkText},children:"Maccabi Kiryat Gat"}),(0,e.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:18,padding:"0 4px"},children:[1,2,3,4].map(i=>(0,e.jsx)(Y,{number:i,selected:t.includes(i),onClick:()=>r(i)},i))}),(0,e.jsxs)(C,{variant:"muted",children:["See All ",(0,e.jsx)(T,{size:16})]})]})]}),(0,e.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"12px 32px 20px",background:o.white},children:(0,e.jsx)(C,{children:"Finish"})})]})})}function pt({onRetry:t}){let r=h(),o=we(),i=o==="dark"?"rgba(239,68,68,0.1)":"#FEF2F2",s=o==="dark"?"rgba(239,68,68,0.25)":"rgba(239,68,68,0.15)";return(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.md,background:i,borderRadius:a.radii.badge,padding:"12px 16px",border:`1px solid ${s}`},children:[(0,e.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:r.errorRed,flexShrink:0}}),(0,e.jsxs)("div",{style:{flex:1},children:[(0,e.jsx)("div",{style:{fontFamily:m,fontSize:a.typography.sizes.xs,fontWeight:a.typography.weights.semibold,color:r.darkText},children:"You're offline"}),(0,e.jsx)("div",{style:{fontFamily:m,fontSize:12,fontWeight:a.typography.weights.regular,color:r.gray500},children:"Check your connection and try again"})]}),(0,e.jsx)("button",{onClick:t,style:{background:"none",border:"none",fontFamily:m,fontSize:13,fontWeight:a.typography.weights.semibold,color:r.errorRed,cursor:"pointer",flexShrink:0,borderRadius:a.radii.sm},children:"Retry"})]})}function Z({width:t,height:r,borderRadius:o,style:i}){let s=h();return(0,e.jsx)("div",{style:{width:t||"100%",height:r||16,borderRadius:o||a.radii.sm,background:`linear-gradient(90deg, ${s.gray100} 25%, ${s.gray50} 50%, ${s.gray100} 75%)`,backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite ease-in-out",...i}})}function Ve(){let t=h();return(0,e.jsxs)("div",{style:{background:t.white,border:`1px solid ${t.gray100}`,borderRadius:a.radii.md,overflow:"hidden"},children:[(0,e.jsx)("div",{style:{width:"100%",height:180,background:`linear-gradient(90deg, ${t.gray100} 25%, ${t.gray50} 50%, ${t.gray100} 75%)`,backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite ease-in-out"}}),(0,e.jsxs)("div",{style:{padding:a.spacing.md,display:"flex",flexDirection:"column",gap:a.spacing.sm},children:[(0,e.jsx)(Z,{height:20,style:{width:"80%"}}),(0,e.jsx)(Z,{height:16,style:{width:"100%"}}),(0,e.jsx)(Z,{height:16,style:{width:"90%"}})]})]})}function gt(){return(0,e.jsx)(Z,{height:a.sizes.inputHeight,borderRadius:a.radii.sm})}function Te({size:t}={}){let r=h(),o=t||24;return(0,e.jsx)("div",{style:{width:o,height:o,border:`3px solid ${r.gray100}`,borderTop:`3px solid ${r.primary}`,borderRadius:"50%",animation:"spin 1s linear infinite"}})}x.brandHero=`<template>
  <section class="brand-hero" :style="heroStyle" role="banner">
    <slot>
      <PixellotLogo :size="logoSize" aria-label="Pixellot logo" />
    </slot>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

<style scoped>
.brand-hero {
  position: relative; overflow: hidden;
}
</style>`;x.emptyState=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.errorState=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.offlineBanner=`<template>
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
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.skeletonBlock=`<template>
  <div class="skeleton-block" role="status" aria-busy="true" aria-label="Content loading..." />
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

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
<\/script>

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
</style>`;x.skeletonCard=`<template>
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
// import { ref, computed } \u2014 vue
<\/script>

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
</style>`;x.skeletonInput=`<template>
  <div class="skeleton-input" role="status" aria-busy="true" aria-label="Input loading..." />
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue
<\/script>

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
</style>`;x.loadingSpinner=`<template>
  <div class="loading-spinner" :class="{ ['spinner--' + size]: size }"
    role="status" aria-busy="true" :aria-label="ariaLabel" />
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  size?:       'sm' | 'md' | 'lg'
  ariaLabel?:  string
}>()
withDefaults(props, {
  size: 'md',
  ariaLabel: 'Loading...',
})
<\/script>

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
</style>`;function mt({s:t,sec:r,setSec:o,isMobile:i,setNavOpen:s}){let d=h(),[n,f]=(0,y.useState)(!1);return(0,e.jsx)("button",{onClick:()=>{t.disabled||(o(t.id),i&&s(!1))},"aria-current":r===t.id?"page":void 0,onFocus:()=>!t.disabled&&f(!0),onBlur:()=>f(!1),style:{display:"block",width:"100%",padding:"7px 14px",border:"none",textAlign:"left",cursor:t.disabled?"default":"pointer",fontSize:12,fontWeight:r===t.id?600:t.disabled?700:400,background:r===t.id?`${d.primary}15`:"transparent",color:t.disabled?d.gray400:r===t.id?d.primary:d.gray500,borderLeft:r===t.id?`3px solid ${d.primary}`:"3px solid transparent",opacity:t.disabled?.6:1,transition:"background 0.3s ease, color 0.3s ease",borderRadius:a.radii.sm,outline:n?`2px solid ${d.primary}`:"none",outlineOffset:-2},children:t.label})}function ht(){let t=h(),[r,o]=(0,y.useState)("email"),[i,s]=(0,y.useState)(!1),[d,n]=(0,y.useState)(""),[f,g]=(0,y.useState)(!1),[k,v]=(0,y.useState)("Email Address..."),p=["email","password","text","tel"],L=[{label:"Default",fn:()=>{s(!1),n(""),g(!1),o("email"),v("Email Address...")}},{label:"Password",fn:()=>{s(!1),n(""),g(!1),o("password"),v("Enter password...")}},{label:"Error",fn:()=>{s(!0),n("Please enter a valid email"),g(!1),o("email"),v("Email Address...")}},{label:"Disabled",fn:()=>{s(!1),n(""),g(!0),o("email"),v("Email Address...")}}],w=b=>({padding:"4px 10px",fontSize:11,fontWeight:b?600:400,border:`1px solid ${b?t.primary:t.gray200}`,background:b?`${t.primary}15`:t.white,color:b?t.primary:t.gray500,borderRadius:a.radii.sm,cursor:"pointer",fontFamily:m});return(0,e.jsxs)("div",{style:{maxWidth:398},children:[(0,e.jsxs)("div",{style:{marginBottom:a.spacing.lg},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,color:t.gray400,textTransform:"uppercase",letterSpacing:1,marginBottom:a.spacing.sm},children:"Quick Presets"}),(0,e.jsx)("div",{style:{display:"flex",gap:a.spacing.sm,flexWrap:"wrap"},children:L.map(b=>(0,e.jsx)("button",{onClick:b.fn,style:{padding:"5px 12px",fontSize:12,fontWeight:500,border:`1px solid ${t.gray200}`,background:t.white,color:t.darkText,borderRadius:a.radii.chip,cursor:"pointer",fontFamily:m},children:b.label},b.label))})]}),(0,e.jsxs)("div",{style:{marginBottom:a.spacing.lg},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,color:t.gray400,textTransform:"uppercase",letterSpacing:1,marginBottom:a.spacing.sm},children:"Type"}),(0,e.jsx)("div",{style:{display:"flex",gap:a.spacing.xs},children:p.map(b=>(0,e.jsx)("button",{onClick:()=>{o(b),v(b==="password"?"Enter password...":b==="tel"?"Phone Number...":b==="email"?"Email Address...":"Full Name...")},style:w(r===b),children:b},b))})]}),(0,e.jsxs)("div",{style:{marginBottom:a.spacing.lg,display:"flex",gap:a.spacing.xl},children:[(0,e.jsxs)("label",{style:{display:"flex",alignItems:"center",gap:a.spacing.xs,fontSize:12,color:t.gray500,cursor:"pointer",fontFamily:m},children:[(0,e.jsx)("input",{type:"checkbox",checked:i,onChange:b=>{s(b.target.checked),b.target.checked&&!d&&n("This field is required"),b.target.checked||n("")}})," Error"]}),(0,e.jsxs)("label",{style:{display:"flex",alignItems:"center",gap:a.spacing.xs,fontSize:12,color:t.gray500,cursor:"pointer",fontFamily:m},children:[(0,e.jsx)("input",{type:"checkbox",checked:f,onChange:b=>g(b.target.checked)})," Disabled"]})]}),i&&(0,e.jsxs)("div",{style:{marginBottom:a.spacing.lg},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,color:t.gray400,textTransform:"uppercase",letterSpacing:1,marginBottom:a.spacing.sm},children:"Error Message"}),(0,e.jsx)("input",{value:d,onChange:b=>n(b.target.value),style:{width:"100%",padding:"6px 10px",fontSize:12,border:`1px solid ${t.gray200}`,borderRadius:a.radii.sm,fontFamily:m,background:t.white,color:t.darkText,boxSizing:"border-box"}})]}),(0,e.jsxs)("div",{style:{padding:a.spacing.lg,background:t.gray50,borderRadius:a.radii.badge,border:`1px solid ${t.gray100}`},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:t.gray400,marginBottom:a.spacing.sm},children:"Live Preview"}),(0,e.jsx)(S,{placeholder:k,type:r,error:i,errorMsg:i?d:void 0,disabled:f})]})]})}function aa(){let[t,r]=(0,y.useState)("light"),[o,i]=(0,y.useState)("overview"),[s,d]=(0,y.useState)("signin"),[n,f]=(0,y.useState)([]),[g,k]=(0,y.useState)(!1),[v,p]=(0,y.useState)(!0),[L,w]=(0,y.useState)(""),[b,D]=(0,y.useState)(!1),M=l=>f(n.includes(l)?n.filter(c=>c!==l):[...n,l]);(0,y.useEffect)(()=>{let l=()=>{let c=window.innerWidth<a.breakpoints.mobile;D(c),p(!c)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),(0,y.useEffect)(()=>{let l=t==="dark"?Ce.white:Ie.white;document.documentElement.style.background=l,document.body.style.background=l,document.documentElement.style.transition="background 0.3s ease",document.body.style.transition="background 0.3s ease"},[t]),(0,y.useEffect)(()=>{if(!document.getElementById("ds-shimmer-style")){let l=document.createElement("style");l.id="ds-shimmer-style",l.textContent="@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",document.head.appendChild(l)}},[]);let E=[{id:"overview",label:"\u{1F50D} Overview"},{id:"tokens",label:"\u{1F3A8} Design Tokens"},{id:"divider-inputs",label:"\u2500\u2500 Inputs \u2500\u2500",disabled:!0},{id:"input",label:"AppInput"},{id:"select",label:"AppSelect"},{id:"divider-buttons",label:"\u2500\u2500 Buttons & Navigation \u2500\u2500",disabled:!0},{id:"button",label:"AppButton"},{id:"icons",label:"Icons"},{id:"tabs",label:"AppTabs"},{id:"divider-badges",label:"\u2500\u2500 Badges \u2500\u2500",disabled:!0},{id:"badges",label:"AppBadge"},{id:"divider-cards",label:"\u2500\u2500 Cards \u2500\u2500",disabled:!0},{id:"livegamecard",label:"LiveGameCard"},{id:"gameresultcard",label:"GameResultCard"},{id:"highlightcard",label:"HighlightCard"},{id:"scorecard",label:"ScoreCard"},{id:"productcard",label:"ProductCard"},{id:"divider-video",label:"\u2500\u2500 Videos \u2500\u2500",disabled:!0},{id:"videothumbnail",label:"VideoThumbnail"},{id:"videotypechips",label:"VideoTypeChips"},{id:"divider-sharing",label:"\u2500\u2500 Sharing \u2500\u2500",disabled:!0},{id:"videoactionbar",label:"VideoActionBar"},{id:"sharecurtain",label:"ShareCurtain"},{id:"divider-stats",label:"\u2500\u2500 Stats & Info \u2500\u2500",disabled:!0},{id:"teamstatsbar",label:"TeamStatsBar"},{id:"gameleaders",label:"GameLeaders"},{id:"playerstats",label:"PlayerStats"},{id:"statsgrid",label:"StatsGrid"},{id:"seasonstatsrow",label:"SeasonStatsRow"},{id:"infoalert",label:"InfoAlert"},{id:"divider-payment",label:"\u2500\u2500 Payment \u2500\u2500",disabled:!0},{id:"paymentmodal",label:"Payment Plans"},{id:"upgradebanner",label:"UpgradeBanner"},{id:"divider-layout",label:"\u2500\u2500 Layout & Overlays \u2500\u2500",disabled:!0},{id:"brandhero",label:"BrandHero"},{id:"adbanner",label:"AdBanner"},{id:"notificationcenter",label:"NotificationCenter"},{id:"profilesidebar",label:"ProfileSidebar"},{id:"playeravatarrow",label:"PlayerAvatarRow"},{id:"teamfollowcard",label:"TeamFollowCard"},{id:"followedplayers",label:"FollowedPlayers"},{id:"divider-jersey",label:"\u2500\u2500 Jersey \u2500\u2500",disabled:!0},{id:"jersey",label:"JerseyItem"},{id:"jerseygrid",label:"JerseyGrid"},{id:"divider-states",label:"\u2500\u2500 Empty & Error States \u2500\u2500",disabled:!0},{id:"emptystate",label:"EmptyState"},{id:"errorstate",label:"ErrorState"},{id:"offlinebanner",label:"OfflineBanner"},{id:"divider-loading",label:"\u2500\u2500 Loading States \u2500\u2500",disabled:!0},{id:"skeletons",label:"Skeletons & Loaders"},{id:"divider-pages",label:"\u2500\u2500 Pages \u2500\u2500",disabled:!0},{id:"auth",label:"AuthPage"},{id:"onboarding",label:"PlayerSelectPage"},{id:"homepage",label:"HomePage"},{id:"gamedetailpage",label:"GameDetailPage"}],U=()=>{let l=W;return(0,e.jsxs)("div",{style:{display:"flex",minHeight:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'},children:[b&&!v&&(0,e.jsx)("button",{onClick:()=>p(!0),"aria-label":"Open navigation",style:{position:"fixed",top:12,left:12,zIndex:1001,width:36,height:36,borderRadius:8,background:l.white,border:`1px solid ${l.gray200}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",outline:`2px solid ${l.primary}`,outlineOffset:2},children:(0,e.jsx)(ue,{size:20,color:l.gray500})}),b&&v&&(0,e.jsx)("div",{onClick:()=>p(!1),style:{position:"fixed",inset:0,background:l.overlay,zIndex:999}}),(0,e.jsxs)("nav",{"aria-label":"Design system sections",style:{width:220,background:l.white,borderRight:`1px solid ${l.gray200}`,padding:"16px 0",flexShrink:0,position:b?"fixed":"sticky",top:0,left:0,height:"100vh",overflowY:"auto",transition:"background 0.3s ease, transform 0.25s ease",zIndex:b?1e3:"auto",transform:b&&!v?"translateX(-100%)":"translateX(0)",boxShadow:b&&v?"4px 0 16px rgba(0,0,0,0.15)":"none"},children:[(0,e.jsxs)("div",{style:{padding:"0 14px 14px",borderBottom:`1px solid ${l.gray100}`,marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(Ke,{size:30}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:13,fontWeight:a.typography.weights.bold,color:l.darkText,transition:"color 0.3s ease"},children:"Pixellot"}),(0,e.jsx)("div",{style:{fontSize:10,color:l.gray500},children:"Design System v2"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)("button",{onClick:()=>r(c=>c==="light"?"dark":"light"),"aria-label":t==="light"?"Switch to dark mode":"Switch to light mode",style:{background:"none",border:"none",cursor:"pointer",padding:a.spacing.xs,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:a.radii.sm},children:t==="light"?(0,e.jsx)(fe,{size:18,color:l.gray400}):(0,e.jsx)(ce,{size:18,color:l.gray400})}),b&&(0,e.jsx)("button",{onClick:()=>p(!1),"aria-label":"Close navigation",style:{background:"none",border:"none",cursor:"pointer",padding:a.spacing.xs,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:a.radii.sm},children:(0,e.jsx)(q,{size:18,color:l.gray400})})]})]}),(0,e.jsx)("div",{style:{padding:"6px 10px"},children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(V,{size:14,color:l.gray400,style:{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}),(0,e.jsx)("input",{type:"text",placeholder:"Search components...",value:L,onChange:c=>w(c.target.value),"aria-label":"Search components",style:{width:"100%",height:30,paddingLeft:28,paddingRight:8,border:`1px solid ${l.gray200}`,borderRadius:a.radii.sm,background:l.gray50,color:l.darkText,fontSize:11,fontFamily:m,outline:"none",boxSizing:"border-box",transition:"border-color 0.15s"}})]})}),E.filter(c=>L.trim()?c.disabled?!1:c.label.toLowerCase().includes(L.toLowerCase()):!0).map(c=>(0,e.jsx)(mt,{s:c,sec:o,setSec:i,isMobile:b,setNavOpen:p},c.id))]}),(0,e.jsxs)("main",{style:{flex:1,padding:b?"16px 16px 16px 16px":"24px 32px",maxWidth:900,overflowY:"auto",paddingTop:b?56:void 0},children:[o==="overview"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{style:{fontSize:26,fontWeight:800,color:l.darkText,marginBottom:a.spacing.xs},children:"Pixellot Design System v2"}),(0,e.jsx)("p",{style:{color:l.gray500,fontSize:a.typography.sizes.xs,marginTop:a.spacing.xs,lineHeight:1.6},children:"Complete component library for the Pixellot sports platform \u2014 auth, onboarding, jersey selection, game details, team shop, and player profiles."}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginTop:a.spacing.lg},children:[{n:"44",l:"Components"},{n:"72",l:"Design Tokens"},{n:"6",l:"Page Views"}].map(c=>(0,e.jsxs)("div",{style:{background:l.white,border:`1px solid ${l.gray100}`,borderRadius:a.radii.badge,padding:"14px 16px",textAlign:"center"},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxl,fontWeight:800,color:l.primary},children:c.n}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray500,marginTop:2},children:c.l})]},c.l))}),(0,e.jsx)("div",{style:{height:a.spacing.xxl}}),(0,e.jsx)(u,{title:"Project Structure",codeTitle:"File Tree",code:x.projectStructure,children:(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,fontSize:12},children:["AppInput","AppSelect","AppButton","AppBadge","AppTabs","AppDivider","AppLink","TeamRow","LockSvg","BackButton","MainTopBar","SectionHeader","PaywallOverlay","LiveGameCard","GameResultCard","ScoreCard","ProductCard","VideoThumbnail","VideoTypeChips","VideoActionBar","ShareCurtain","TeamStatsBar","GameLeaders","PlayerStatsTable","StatsGrid","SeasonStatsRow","PaymentModal","UpgradeBanner","InfoAlert","JerseyItem","JerseyGrid"].map(c=>(0,e.jsxs)("div",{style:{padding:"6px 10px",background:l.gray50,borderRadius:6,fontFamily:"monospace",color:l.gray500},children:["<",c," />"]},c))})})]}),o==="tokens"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"Design Tokens"}),(0,e.jsx)(u,{title:"Colors",codeTitle:"tokens/index.ts",code:x.tokens,children:[{label:"Primary",keys:["primary","primaryHover","primaryActive"]},{label:"Neutrals",keys:["white","black","darkText"]},{label:"Grays",keys:["gray50","gray100","gray200","gray300","gray400","gray500"]},{label:"Overlays",keys:["grayOverlay","grayOverlayHover","overlay"]},{label:"Brand",keys:["heroBg","accent","jerseyRed","jerseyStroke"]},{label:"Premium",keys:["premiumYellow","premiumAmber","premiumHover","premiumActive","premiumDark"]},{label:"Status",keys:["successGreen","errorRed","dangerRed","liveRed","notifBadgeRed"]},{label:"Badges & Tags",keys:["freeBadgeGreen","claimedPurple","highlightsBadgeBg","highlightsBadgeText"]},{label:"Surfaces",keys:["cardBg","cardHoverBg","barTrack","dividerDark"]},{label:"Bars & Charts",keys:["barRed","barGray","highlightGray"]},{label:"Links & Info",keys:["linkBlue","infoBgPurple"]},{label:"Disabled",keys:["disabledTextOnDark"]}].map(c=>{let P=t==="dark"?Ce:Ie;return(0,e.jsxs)("div",{style:{marginBottom:a.spacing.lg},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,fontWeight:a.typography.weights.bold,color:l.gray400,textTransform:"uppercase",letterSpacing:1,marginBottom:a.spacing.xs},children:c.label}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2},children:c.keys.map(F=>(0,e.jsx)(Xa,{name:F,hex:P[F]},F))})]},c.label)})}),(0,e.jsx)(u,{title:"Typography",desc:"Red Hat Display \u2014 Regular 400, Medium 500, Semibold 600, Bold 700",children:(0,e.jsx)(rt,{})}),(0,e.jsx)(u,{title:"Spacing",desc:"Consistent spacing scale consumed by all components",children:(0,e.jsx)(lt,{})}),(0,e.jsx)(u,{title:"Sizes",desc:"Component dimensions \u2014 inputHeight, buttonSm/Md/Lg, tabHeight, chipHeight, etc.",children:(0,e.jsx)(it,{})}),(0,e.jsx)(u,{title:"Radii",desc:"Border radius tokens \u2014 sm, md, lg, xl, badge, chip, pill",children:(0,e.jsx)(dt,{})})]}),o==="input"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"AppInput"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Text input with password toggle \u2014 supports default, hover, focus, filled, error, and disabled states"}),(0,e.jsx)(u,{title:"Variants",code:x.appInput,codeTitle:"AppInput.vue",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)(S,{placeholder:"Email Address...",type:"email"}),(0,e.jsx)(S,{placeholder:"Enter password...",type:"password"}),(0,e.jsx)(S,{placeholder:"Full Name..."}),(0,e.jsx)(S,{placeholder:"Phone Number...",type:"tel"})]})}),(0,e.jsx)(u,{title:"States \u2014 default / hover / focus / filled / disabled",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.md},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"default"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"hover"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",_forceState:"hover"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"focus \u2014 blue border"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",_forceState:"focus"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"filled"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",_forceState:"filled"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"disabled"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",disabled:!0})]})]})}),(0,e.jsx)(u,{title:"Error States",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.md},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"error \u2014 red border"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",error:!0})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"error + message"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",error:!0,errorMsg:"Please enter a valid email address"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"error + hover"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",error:!0,_forceState:"hover"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"error + focus"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",error:!0,errorMsg:"Please enter a valid email address",_forceState:"focus"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"error + filled"}),(0,e.jsx)(S,{placeholder:"Email Address...",type:"email",error:!0,errorMsg:"Please enter a valid email address",_forceState:"filled"})]})]})}),(0,e.jsx)(u,{title:"Password + States",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.md},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"default"}),(0,e.jsx)(S,{placeholder:"Enter password...",type:"password"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"error + message"}),(0,e.jsx)(S,{placeholder:"Enter password...",type:"password",error:!0,errorMsg:"Password must be at least 8 characters"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:"disabled"}),(0,e.jsx)(S,{placeholder:"Enter password...",type:"password",disabled:!0})]})]})}),(0,e.jsx)(u,{title:"Interactive Playground",desc:"Toggle props to see live state changes",children:(0,e.jsx)(ht,{})}),(0,e.jsx)(u,{title:"Props",children:(0,e.jsxs)(B,{children:[(0,e.jsx)("div",{children:"modelValue: string \u2014 v-model binding"}),(0,e.jsx)("div",{children:"placeholder: string \u2014 placeholder text"}),(0,e.jsx)("div",{children:'type: string \u2014 "text" | "email" | "tel" | "password"'}),(0,e.jsx)("div",{children:"error: boolean \u2014 toggles red error border"}),(0,e.jsx)("div",{children:"errorMsg: string \u2014 error message below input"}),(0,e.jsx)("div",{children:"disabled: boolean \u2014 disables input and toggle"})]})})]}),o==="select"&&(0,e.jsx)(u,{title:"AppSelect",code:x.appSelect,codeTitle:"AppSelect.vue",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(Ne,{placeholder:"Age..."})})}),o==="button"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"AppButton"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"7 variants \xD7 3 sizes \u2014 unified button component"}),(0,e.jsx)(u,{title:"All Variants \u2014 md (default)",code:x.appButton,codeTitle:"AppButton.vue",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"primary"}),(0,e.jsx)(C,{children:"Sign in"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"premium"}),(0,e.jsx)(C,{variant:"premium",children:"Buy Now"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"social"}),(0,e.jsx)(C,{variant:"social",leadingIcon:(0,e.jsx)(ye,{}),children:"Continue with Apple"}),(0,e.jsx)(C,{variant:"social",leadingIcon:(0,e.jsx)(Se,{}),children:"Continue with Google"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"muted"}),(0,e.jsx)(C,{variant:"muted",trailingIcon:(0,e.jsx)(T,{size:16}),children:"See All"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"ghost"}),(0,e.jsx)(C,{variant:"ghost",children:"Ghost"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"link"}),(0,e.jsx)(C,{variant:"link",fullWidth:!1,children:"See all >"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"danger"}),(0,e.jsx)(C,{variant:"danger",fullWidth:!1,children:"Log Out"})]})}),(0,e.jsx)(u,{title:"States \u2014 default / hover / pressed / disabled",children:(0,e.jsx)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.lg},children:["primary","premium","social","muted","ghost","link","danger"].map(c=>(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:c}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6},children:[{label:"default",state:"default"},{label:"hover",state:"hover"},{label:"pressed",state:"active"},{label:"disabled",state:"disabled"}].map(({label:P,state:F})=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)(C,{variant:c,size:"sm",fullWidth:!0,_forceState:F,disabled:F==="disabled",children:c==="danger"?"Log Out":c==="link"?"Link":c==="ghost"?"Ghost":c==="social"?"Apple":c==="muted"?"See All":c==="premium"?"Buy":"Sign in"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:P})]},P))})]},c))})}),(0,e.jsx)(u,{title:"Size Comparison \u2014 sm / md / lg",children:(0,e.jsx)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:14},children:["primary","premium","social","muted"].map(c=>(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:c}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.sm,alignItems:"center"},children:[(0,e.jsx)(C,{variant:c,size:"sm",fullWidth:!1,children:c==="social"?"Apple":c==="muted"?"See All":"Small"}),(0,e.jsx)(C,{variant:c,size:"md",fullWidth:!1,children:c==="social"?"Apple":c==="muted"?"See All":"Medium"}),(0,e.jsx)(C,{variant:c,size:"lg",fullWidth:!1,children:c==="social"?"Apple":c==="muted"?"See All":"Large"})]})]},c))})}),(0,e.jsx)(u,{title:"With Icons",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"leading icon"}),(0,e.jsx)(C,{variant:"social",leadingIcon:(0,e.jsx)(ye,{}),children:"Continue with Apple"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"trailing icon"}),(0,e.jsx)(C,{variant:"muted",trailingIcon:(0,e.jsx)(T,{size:16}),children:"See All"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"icon only"}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.sm},children:[(0,e.jsx)("button",{"aria-label":"Close",style:{width:32,height:32,minWidth:32,borderRadius:"50%",background:"transparent",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(q,{size:16})}),(0,e.jsx)("button",{"aria-label":"Play",style:{width:32,height:32,minWidth:32,borderRadius:"50%",background:"#f3f4f6",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(H,{size:16,color:"#6b7280"})}),(0,e.jsx)("button",{"aria-label":"Check",style:{width:32,height:32,minWidth:32,borderRadius:"50%",background:"#3b82f6",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(A,{size:16,color:"#ffffff"})})]})]})}),(0,e.jsx)(u,{title:"Width Modes",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"fullWidth (default)"}),(0,e.jsx)(C,{children:"Full Width Button"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"auto width (fullWidth=false)"}),(0,e.jsx)(C,{fullWidth:!1,children:"Auto Width"})]})})]}),o==="icons"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"Icons"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"14 Lucide icons + 3 custom SVGs + 6 share channel SVGs + 2 placeholder components"}),(0,e.jsx)(u,{title:"Lucide Icons (lucide-react)",children:(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:a.spacing.md},children:[{Icon:re,name:"Eye"},{Icon:oe,name:"EyeOff"},{Icon:T,name:"ChevronDown"},{Icon:te,name:"Copy"},{Icon:A,name:"Check"},{Icon:V,name:"Search"},{Icon:H,name:"Play"},{Icon:q,name:"X"},{Icon:ne,name:"ArrowLeft"},{Icon:J,name:"Download"},{Icon:le,name:"Upload"},{Icon:G,name:"Bookmark"},{Icon:K,name:"Bell"},{Icon:N,name:"User"}].map(({Icon:c,name:P})=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:a.spacing.sm},children:[(0,e.jsx)("div",{style:{width:40,height:40,borderRadius:8,background:l.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(c,{size:20,color:l.darkText})}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400,textAlign:"center",lineHeight:1.2},children:P})]},P))})}),(0,e.jsx)(u,{title:"Custom SVG Icons",children:(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:a.spacing.md},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm,padding:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:48,height:48,borderRadius:8,background:l.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(Se,{})}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"GoogleIcon"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"Social auth"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm,padding:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:48,height:48,borderRadius:8,background:l.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(ye,{})}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"AppleIcon"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"Social auth"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm,padding:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:48,height:48,borderRadius:8,background:l.premiumDark,border:`${a.strokes.bold}px solid ${l.premiumYellow}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(ee,{size:16})}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"LockSvg"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"Paywall / badges"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm,padding:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:48,height:48,borderRadius:8,background:l.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(_,{})}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"ChipLockSvg"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"Chip prefix"})]})]})}),(0,e.jsx)(u,{title:"LockSvg Sizes",children:(0,e.jsx)("div",{style:{display:"flex",gap:20,alignItems:"flex-end"},children:[{s:8,label:"8 \u2014 chip"},{s:11,label:"11 \u2014 thumbnail"},{s:12,label:"12 \u2014 banner"},{s:16,label:"16 \u2014 explorer"},{s:22,label:"22 \u2014 paywall"}].map(({s:c,label:P})=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,e.jsx)("div",{style:{width:40,height:40,borderRadius:8,background:l.premiumDark,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(ee,{size:c})}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400,textAlign:"center",lineHeight:1.2},children:P})]},c))})}),(0,e.jsx)(u,{title:"Share Channel Icons",desc:"6 branded social icons used in ShareCurtain",children:(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:a.spacing.lg},children:Ze.map(c=>{let P=c.label==="Copy Link"?"CopyLinkIcon":c.label==="X"?"XLogoIcon":`${c.label}Icon`;return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm,padding:a.spacing.md},children:[(0,e.jsx)("div",{style:{width:48,height:48,borderRadius:"50%",background:c.gradient||c.color,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(c.icon,{})}),(0,e.jsx)("span",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:P}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"ShareCurtain"})]},c.label)})})}),(0,e.jsx)(u,{title:"Usage in Components",children:(0,e.jsxs)(B,{children:[(0,e.jsxs)("div",{children:["<Eye /> <EyeOff />"," \u2192 AppInput password toggle"]}),(0,e.jsxs)("div",{children:["<ChevronDown />"," \u2192 AppSelect, See All buttons"]}),(0,e.jsxs)("div",{children:["<Copy />"," \u2192 Code snippet copy button"]}),(0,e.jsxs)("div",{children:["<Check />"," \u2192 PaymentModal, Jersey selected"]}),(0,e.jsxs)("div",{children:["<Search />"," \u2192 MainTopBar search"]}),(0,e.jsxs)("div",{children:["<Play />"," \u2192 VideoThumbnail, GameResultCard"]}),(0,e.jsxs)("div",{children:["<X />"," \u2192 Modal close"]}),(0,e.jsxs)("div",{children:["<ArrowLeft />"," \u2192 BackButton navigation"]}),(0,e.jsxs)("div",{children:["<GoogleIcon />"," \u2192 Social auth button"]}),(0,e.jsxs)("div",{children:["<AppleIcon />"," \u2192 Social auth button"]}),(0,e.jsxs)("div",{children:["<LockSvg size={8-22} />"," \u2192 Paywalls, thumbnails, banner, chips"]}),(0,e.jsxs)("div",{children:["<Download />"," \u2192 VideoActionBar download"]}),(0,e.jsxs)("div",{children:["<Upload />"," \u2192 VideoActionBar share (opens ShareCurtain)"]}),(0,e.jsxs)("div",{children:["<Bookmark />"," \u2192 VideoActionBar bookmark"]}),(0,e.jsxs)("div",{children:["<CopyLinkIcon />"," \u2192 ShareCurtain copy link"]}),(0,e.jsxs)("div",{children:["<FacebookIcon />"," \u2192 ShareCurtain"]}),(0,e.jsxs)("div",{children:["<XLogoIcon />"," \u2192 ShareCurtain"]}),(0,e.jsxs)("div",{children:["<WhatsAppIcon />"," \u2192 ShareCurtain"]}),(0,e.jsxs)("div",{children:["<TikTokIcon />"," \u2192 ShareCurtain"]}),(0,e.jsxs)("div",{children:["<InstagramIcon />"," \u2192 ShareCurtain"]}),(0,e.jsxs)("div",{children:["<Bell />"," \u2192 TopBar notification bell"]}),(0,e.jsxs)("div",{children:["<User />"," \u2192 ProfileSidebar fallback avatar"]})]})}),(0,e.jsx)(u,{title:"Placeholder Components",desc:"Deterministic placeholders for images that need real assets in production",children:(0,e.jsxs)("div",{style:{display:"flex",gap:20,alignItems:"flex-end",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(xe,{size:40,name:"Maccabi"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"PTeamLogo"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:'name="Maccabi"'})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(xe,{size:40,name:"Ironi"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"PTeamLogo"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:'name="Ironi"'})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(xe,{size:40,name:"Hapoel"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"PTeamLogo"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:'name="Hapoel"'})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(Oe,{size:48,name:"B. Rogers"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"PPlayerPhoto"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:"48px"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)(Oe,{size:36,name:"J. Davis"}),(0,e.jsx)("span",{style:{fontSize:10,color:l.gray400},children:"PPlayerPhoto"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:"36px"})]})]})})]}),o==="tabs"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"AppTabs"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"2 variants \u2014 pill, underline (with configurable accentColor per team)"}),(0,e.jsx)(u,{title:"pill (default)",code:x.appTabs,codeTitle:"AppTabs.vue",children:(0,e.jsxs)("div",{style:{maxWidth:398},children:[(0,e.jsx)(j,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup"}],active:s,onSelect:d}),(0,e.jsxs)("div",{style:{marginTop:10,fontSize:12,color:l.gray400},children:["Active: ",(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm},children:s})]})]})}),(0,e.jsx)(u,{title:"pill \u2014 Interactive States",desc:"Hover and pressed states on inactive tabs",children:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.md,maxWidth:398},children:["default","hover","active"].map(c=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:["Inactive tab \u2192 ",(0,e.jsx)("strong",{children:c})]}),(0,e.jsx)(j,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup"}],active:"signin",onSelect:()=>{},_forceState:c})]},c))})}),(0,e.jsx)(u,{title:"underline (default \u2014 team red)",desc:"accentColor defaults to #EF4444. Pass any team color.",children:(0,e.jsxs)("div",{style:{maxWidth:398},children:[(0,e.jsx)(j,{variant:"underline",tabs:[{label:"Schedule",value:"schedule"},{label:"Results",value:"results"},{label:"Standings",value:"standings"}],active:s,onSelect:d}),(0,e.jsx)("div",{style:{marginTop:10,fontSize:12,color:l.gray400},children:'accentColor="#EF4444" (default)'})]})}),(0,e.jsx)(u,{title:"underline \u2014 Interactive States",desc:"Hover shows faint accent underline hint; pressed darkens text",children:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.md,maxWidth:398},children:["default","hover","active"].map(c=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.xs},children:["Inactive tab \u2192 ",(0,e.jsx)("strong",{children:c})]}),(0,e.jsx)(j,{variant:"underline",tabs:[{label:"Schedule",value:"schedule"},{label:"Results",value:"results"},{label:"Standings",value:"standings"}],active:"schedule",onSelect:()=>{},_forceState:c})]},c))})}),(0,e.jsx)(u,{title:"underline \u2014 custom team colors",desc:"Same component, different accentColor per team/client",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.lg},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'accentColor="#116DFF" (Maccabi blue)'}),(0,e.jsx)(j,{variant:"underline",accentColor:"#116DFF",tabs:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"Highlights",value:"highlights"}],active:s,onSelect:d})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'accentColor="#22C55E" (Haifa green)'}),(0,e.jsx)(j,{variant:"underline",accentColor:"#22C55E",tabs:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"Highlights",value:"highlights"}],active:s,onSelect:d})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'accentColor="#E7A610" (premium amber)'}),(0,e.jsx)(j,{variant:"underline",accentColor:"#E7A610",tabs:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"Highlights",value:"highlights"}],active:s,onSelect:d})]})]})})]}),o==="divider"&&(0,e.jsx)(u,{title:"AppDivider",code:x.appDivider,codeTitle:"AppDivider.vue",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(ze,{})})}),o==="link"&&(0,e.jsx)(u,{title:"AppLink",code:x.appLink,codeTitle:"AppLink.vue",children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[(0,e.jsx)(me,{children:"muted (default)"}),(0,e.jsx)(me,{variant:"accent",children:"accent (red underline)"}),(0,e.jsx)(me,{variant:"primary",children:"primary (blue)"})]})}),o==="badges"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"AppBadge"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"5 variants \u2014 unified badge component"}),(0,e.jsx)(u,{title:"All Variants",code:x.appBadge,codeTitle:"AppBadge.vue",children:(0,e.jsx)("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:["live","premium","free","claimed","highlights"].map(c=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,e.jsx)(O,{variant:c}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:c})]},c))})}),(0,e.jsx)(u,{title:"Usage Context",children:(0,e.jsx)(B,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[(0,e.jsx)("div",{children:(0,e.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:10},children:[(0,e.jsx)(O,{variant:"live"})," LiveGameCard \u2014 game in progress"]})}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:10},children:[(0,e.jsx)(O,{variant:"premium"})," VideoThumbnail \u2014 locked content"]})}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:10},children:[(0,e.jsx)(O,{variant:"free"})," VideoThumbnail \u2014 free content"]})}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:10},children:[(0,e.jsx)(O,{variant:"claimed"})," ProductCard \u2014 item claimed"]})}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:10},children:[(0,e.jsx)(O,{variant:"highlights"})," GameResultCard \u2014 highlights available"]})})]})})})]}),o==="livegamecard"&&(0,e.jsxs)("div",{children:[(0,e.jsx)(u,{title:"LiveGameCard",desc:"Horizontal card showing live game with live badge, date, teams, and scores",children:(0,e.jsx)(Fa,{})}),(0,e.jsx)(u,{title:"PTeamRow \u2014 Shared Atom",desc:"Reusable team row used by LiveGameCard and GameResultCard. Accepts name, score, isWinner, logoSize, fontWeight, gap.",children:(0,e.jsx)(ut,{})})]}),o==="gameresultcard"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"GameResultCard"}),(0,e.jsx)(u,{title:"GameResultCard",desc:"Vertical card with left date column, teams/scores on right, league + highlights badge at bottom",children:(0,e.jsx)(Ba,{})}),(0,e.jsx)(u,{title:"Highlights Badge",desc:"Yellow badge with play icon \u2014 used at bottom-right of game result cards",children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.lg},children:[(0,e.jsx)(Qa,{}),(0,e.jsx)("span",{style:{fontSize:12,color:l.gray400},children:"bg: #6C6C6C, text: #FFE000, border: #FFE000"})]})})]}),o==="highlightcard"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"HighlightCard"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Vertical video highlight card with emoji-prefixed title, date, duration badge, and optional lock icon. Used in Game Detail for Game Highlights, Personal Highlights, Followed Players, and Other Players sections."}),(0,e.jsx)(u,{title:"Locked Highlights (Premium)",desc:"Cards with yellow lock icon badge \u2014 paywall content",code:x.highlightCard,codeTitle:"HighlightCard.vue",children:(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md,flexWrap:"wrap"},children:[(0,e.jsx)($,{title:"Weiss with the dimes",duration:"1:23",emoji:"\u{1F3C0}",locked:!0}),(0,e.jsx)($,{title:"Best plays of the game",duration:"5:15",emoji:"\u{1F525}",locked:!0}),(0,e.jsx)($,{title:"Top scoring moments",duration:"3:45",emoji:"\u2B50",locked:!0}),(0,e.jsx)($,{title:"Dunks & points",duration:"2:20",emoji:"\u{1F3C6}",locked:!0})]})}),(0,e.jsx)(u,{title:"Free Highlights (No Lock)",desc:"Cards without lock icon \u2014 freely accessible content",children:(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md,flexWrap:"wrap"},children:[(0,e.jsx)($,{title:"#4 Gets the ball Forward",duration:"0:45",emoji:"\u{1F3C0}",locked:!1}),(0,e.jsx)($,{title:"#11 Gets the ball Forward",duration:"0:32",emoji:"\u{1F3C0}",locked:!1})]})}),(0,e.jsx)(u,{title:"Props",children:(0,e.jsxs)(B,{variant:"muted",children:[(0,e.jsx)("code",{children:"thumbnail: string"})," \u2014 background image URL",(0,e.jsx)("br",{}),(0,e.jsx)("code",{children:"duration: string"})," \u2014 video length badge (top-left)",(0,e.jsx)("br",{}),(0,e.jsx)("code",{children:"title: string"})," \u2014 emoji-prefixed title overlay",(0,e.jsx)("br",{}),(0,e.jsx)("code",{children:"date: string"})," \u2014 date below title",(0,e.jsx)("br",{}),(0,e.jsx)("code",{children:"locked: boolean"})," \u2014 show/hide yellow lock icon (default: true)"]})})]}),o==="scorecard"&&(0,e.jsx)(u,{title:"ScoreCard",desc:"Final score display with teams, scores, game status, date, and standings",children:(0,e.jsx)(Da,{})}),o==="productcard"&&(0,e.jsx)(u,{title:"ProductCard",desc:"Shop item card with image, title, and price",children:(0,e.jsx)(Aa,{})}),o==="videothumbnail"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"VideoThumbnail"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"2 orientations \xD7 2 lock states \u2014 unified component"}),(0,e.jsxs)(u,{title:"Landscape (16:9)",children:[(0,e.jsx)("h4",{style:{margin:"0 0 8px",fontSize:13,fontWeight:a.typography.weights.semibold,color:l.gray500},children:"Free (locked=false)"}),(0,e.jsx)(Q,{orientation:"landscape",locked:!1,duration:"1:42:15",title:"Full Game",subtitle:"Free"}),(0,e.jsx)("h4",{style:{margin:"16px 0 8px",fontSize:13,fontWeight:a.typography.weights.semibold,color:l.gray500},children:"Premium (locked=true)"}),(0,e.jsx)(Q,{orientation:"landscape",locked:!0,duration:"22:30",title:"Condensed Game",subtitle:"Premium Only"})]}),(0,e.jsxs)(u,{title:"Vertical (9:16)",children:[(0,e.jsx)("h4",{style:{margin:"0 0 8px",fontSize:13,fontWeight:a.typography.weights.semibold,color:l.gray500},children:"Locked"}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md},children:[(0,e.jsx)(Q,{orientation:"vertical",locked:!0,duration:"1:23",title:"\u{1F3C0} Weiss with the dimes",subtitle:"NOV 13, 2025"}),(0,e.jsx)(Q,{orientation:"vertical",locked:!0,duration:"2:45",title:"\u{1F3C0} Fast break layup",subtitle:"NOV 13, 2025"}),(0,e.jsx)(Q,{orientation:"vertical",locked:!0,duration:"0:58",title:"\u{1F3C0} Three pointer",subtitle:"NOV 13, 2025"})]}),(0,e.jsx)("h4",{style:{margin:"16px 0 8px",fontSize:13,fontWeight:a.typography.weights.semibold,color:l.gray500},children:"Free"}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md},children:[(0,e.jsx)(Q,{orientation:"vertical",locked:!1,duration:"4:10",title:"\u{1F3C0} #4 Gets the ball Forward",subtitle:"NOV 13, 2025"}),(0,e.jsx)(Q,{orientation:"vertical",locked:!1,duration:"3:22",title:"\u{1F3C0} Alley-oop finish",subtitle:"NOV 13, 2025"})]})]}),(0,e.jsx)(u,{title:"Props",children:(0,e.jsxs)(B,{children:[(0,e.jsx)("div",{children:'orientation: "landscape" | "vertical"'}),(0,e.jsx)("div",{children:"locked: boolean (false = Play icon, true = Lock icon + blur)"}),(0,e.jsx)("div",{children:'duration: string ("1:42:15")'}),(0,e.jsx)("div",{children:'title: string ("Full Game")'}),(0,e.jsx)("div",{children:'subtitle: string ("Free" / "Premium Only")'})]})})]}),o==="teamstatsbar"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(u,{title:"TeamStatsBar",desc:"Comparative stat bar with left/right values, center label, and proportional bars",children:[(0,e.jsx)(z,{label:"Points",leftVal:82,rightVal:76}),(0,e.jsx)(z,{label:"Field Goal %",leftVal:48,rightVal:42}),(0,e.jsx)(z,{label:"2-Point %",leftVal:54,rightVal:49})]}),(0,e.jsx)(u,{title:"TeamStatsBar \u2014 Paywall",desc:"Blurred stats with lock overlay, 'Buy Team Stats' text, and yellow Buy Now CTA",children:(0,e.jsx)(Ta,{})})]}),o==="gameleaders"&&(0,e.jsx)(u,{title:"GameLeaders",desc:"Side-by-side leader comparison with player numbers, stat details, and center category label",children:(0,e.jsx)($e,{})}),o==="playerstats"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u,{title:"PlayerStats Table",desc:"Team-tabbed player stats table with columns: Player, MIN, PTS, REB, AST",children:(0,e.jsx)(Xe,{})}),(0,e.jsx)(u,{title:"Player Stats + Game Leaders \u2014 Paywall",desc:"Blurred PlayerStats table and GameLeaders with lock overlay and Buy Now CTA",children:(0,e.jsx)(za,{})})]}),o==="statsgrid"&&(0,e.jsx)(u,{title:"StatsGrid",desc:"3-column grid of stat boxes with label and bold value",children:(0,e.jsx)(Ra,{})}),o==="seasonstatsrow"&&(0,e.jsx)(u,{title:"SeasonStatsRow",desc:"4 stat boxes in a row: MPG, PPG, APG, RPG",children:(0,e.jsx)(Ma,{})}),o==="infoalert"&&(0,e.jsx)(u,{title:"InfoAlert",desc:"Light purple card with purple title and gray description text",children:(0,e.jsx)(Ha,{title:"Claimed Athletes Only",description:"This content is only available for claimed athlete profiles."})}),o==="paymentmodal"&&(0,e.jsx)(u,{title:"PaymentModal",desc:"Subscription plan selection with expandable feature lists and CTA",children:(0,e.jsx)(_a,{})}),o==="upgradebanner"&&(0,e.jsx)(u,{title:"UpgradeBanner",desc:"Amber banner with lock icon, upgrade message, and action button",children:(0,e.jsx)(Ea,{})}),o==="videotypechips"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"VideoTypeChips"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Horizontal pill row \u2014 active (red, bold), inactive (gray, with lock icon for premium content)"}),(0,e.jsx)(u,{title:"Interactive Preview",desc:"Click chips to switch active state. Lock icons persist on active chip.",children:(0,e.jsx)(Wa,{})}),(0,e.jsx)(u,{title:"Chip States \u2014 default / hover / pressed / disabled",desc:"Each chip type shown in all 4 interaction states",children:(0,e.jsx)(st,{})}),(0,e.jsx)(u,{title:"All Active States",desc:"Each chip shown as the active selection",children:(0,e.jsx)(nt,{})}),(0,e.jsx)(u,{title:"Anatomy",desc:"Token mapping for each state",children:(0,e.jsxs)(B,{variant:"muted",children:[(0,e.jsxs)("div",{children:["Active chip: bg ",(0,e.jsx)("code",{style:{background:l.jerseyRed,color:l.white,padding:"1px 6px",borderRadius:a.radii.sm},children:"#D0142C"})," \xB7 text ",(0,e.jsx)("code",{style:{background:l.gray50,padding:"1px 6px",borderRadius:a.radii.sm},children:"#FFFFFF"})," \xB7 fontWeight 600"]}),(0,e.jsxs)("div",{children:["Inactive chip: bg ",(0,e.jsx)("code",{style:{background:l.gray100,padding:"1px 6px",borderRadius:a.radii.sm},children:"#EDEDED"})," \xB7 text ",(0,e.jsx)("code",{style:{background:l.gray50,padding:"1px 6px",borderRadius:a.radii.sm},children:"#000000"})," \xB7 fontWeight 400"]}),(0,e.jsxs)("div",{children:["Lock icon: bg ",(0,e.jsx)("code",{style:{background:l.premiumDark,color:l.premiumYellow,padding:"1px 6px",borderRadius:a.radii.sm},children:"#362F2C"})," \xB7 20\xD720 circle \xB7 LockSvg 8px"]}),(0,e.jsx)("div",{children:"Chip: height 40px \xB7 borderRadius 26px \xB7 padding 8px 12px \xB7 gap 12px between chips"})]})})]}),o==="videoactionbar"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"VideoActionBar"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Row below the video player \u2014 view count on the left, download / share / bookmark on the right"}),(0,e.jsx)(u,{title:"VideoActionBar Preview",desc:"Appears below the video thumbnail on the player page \u2014 click bookmark to toggle",code:x.videoActionBar,codeTitle:"VideoActionBar.vue",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(De,{views:g?"1,240 views":"1 view",bookmarked:g,onBookmark:()=>k(!g)})})}),(0,e.jsx)(u,{title:"Icon Button States \u2014 default / hover / pressed / disabled",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:20},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"default"}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:a.spacing.sm},children:[{label:"default",state:"default"},{label:"hover",state:"hover"},{label:"pressed",state:"active"},{label:"disabled",state:"disabled"}].map(({label:c,state:P})=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,e.jsx)(he,{icon:J,_forceState:P,disabled:P==="disabled",ariaLabel:"Download"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:c})]},c))})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"active (bookmarked)"}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:a.spacing.sm},children:[{label:"default",state:"default"},{label:"hover",state:"hover"},{label:"pressed",state:"active"},{label:"disabled",state:"disabled"}].map(({label:c,state:P})=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,e.jsx)(he,{icon:G,active:!0,_forceState:P,disabled:P==="disabled",isBookmark:!0,ariaLabel:"Remove bookmark"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:c})]},c))})]})]})}),(0,e.jsx)(u,{title:"Bookmarked vs Default",desc:"Click the bookmark icon to toggle \u2014 icon pops and fills blue on bookmark, reverses on un-bookmark",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.md},children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:["interactive \u2014 click bookmark to toggle ",g?(0,e.jsx)("span",{style:{color:l.primary,fontWeight:a.typography.weights.semibold},children:"(bookmarked)"}):"(not bookmarked)"]}),(0,e.jsx)(De,{views:g?"1,240 views":"1 view",bookmarked:g,onBookmark:()=>k(!g)})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"disabled \u2014 all buttons disabled"}),(0,e.jsx)(De,{views:"0 views",disabled:!0})]})]})}),(0,e.jsx)(u,{title:"Props",children:(0,e.jsxs)(B,{children:[(0,e.jsx)("div",{children:'views: string \u2014 dynamic, changes per page visit (e.g. "1 view", "1,240 views")'}),(0,e.jsx)("div",{children:"bookmarked: boolean \u2014 toggles bookmark icon to active (blue) state"}),(0,e.jsx)("div",{children:"disabled: boolean \u2014 disables all action buttons"}),(0,e.jsx)("div",{children:"@download \u2014 emitted on download tap"}),(0,e.jsx)("div",{children:"@share \u2014 emitted on share tap (opens ShareCurtain)"}),(0,e.jsx)("div",{children:"@bookmark \u2014 emitted on bookmark tap"})]})})]}),o==="sharecurtain"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"ShareCurtain"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Bottom sheet with 6 share channels \u2014 triggered from video player share icon"}),(0,e.jsx)(u,{title:"Share Curtain Preview",desc:"Bottom sheet with 6 social share channels, backdrop overlay, and Cancel button",code:x.shareCurtain,codeTitle:"ShareCurtain.vue",children:(0,e.jsx)(qa,{})}),(0,e.jsx)(u,{title:"Props",children:(0,e.jsxs)(B,{variant:"muted",children:[(0,e.jsx)("div",{children:"open: boolean \u2014 controls visibility"}),(0,e.jsx)("div",{children:"onClose: () => void \u2014 called on backdrop click or Cancel"})]})})]}),o==="brandhero"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"BrandHero"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Auth screen hero \u2014 gradient background (team primary \u2192 30% darker) with centered logo. White-label ready."}),(0,e.jsx)(u,{title:"Default \u2014 Pixellot",code:x.brandHero,codeTitle:"BrandHero.vue",children:(0,e.jsx)("div",{style:{maxWidth:390,borderRadius:a.radii.lg,overflow:"hidden"},children:(0,e.jsx)(pe,{})})}),(0,e.jsx)(u,{title:"Custom Team Colors",desc:"Pass any primaryColor to match client branding. Logo slot can be overridden.",children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.lg},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'primaryColor="#D0142C" (Maccabi red)'}),(0,e.jsx)("div",{style:{maxWidth:390,borderRadius:a.radii.lg,overflow:"hidden"},children:(0,e.jsx)(pe,{primaryColor:"#D0142C",height:340})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'primaryColor="#1A6B3C" (Azteca green)'}),(0,e.jsx)("div",{style:{maxWidth:390,borderRadius:a.radii.lg,overflow:"hidden"},children:(0,e.jsx)(pe,{primaryColor:"#1A6B3C",height:340})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'primaryColor="#E7A610" (Premium amber)'}),(0,e.jsx)("div",{style:{maxWidth:390,borderRadius:a.radii.lg,overflow:"hidden"},children:(0,e.jsx)(pe,{primaryColor:"#E7A610",height:340})})]})]})}),(0,e.jsx)(u,{title:"Anatomy",children:(0,e.jsxs)(B,{children:[(0,e.jsx)("div",{children:"Height: 340px (default) \u2014 ~40% of 390px-wide viewport"}),(0,e.jsx)("div",{children:"Background: linear-gradient(180deg, primaryColor 0%, darkerColor 100%)"}),(0,e.jsx)("div",{children:"darkerColor: primaryColor channels \xD7 0.7 (30% darker)"}),(0,e.jsx)("div",{children:"Bottom corners: borderRadius 0 0 32px 32px"}),(0,e.jsx)("div",{children:"Logo: centered, default PixellotLogo at 80px"}),(0,e.jsxs)("div",{children:["Slot: override with any team/client logo via ","<slot>"]})]})})]}),o==="adbanner"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"AdBanner"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Full-width ad banner carousel with swipeable pagination dots. Displayed at top of the home/Following page."}),(0,e.jsxs)(u,{title:"Banner Carousel",desc:"Two slides with pagination dots \u2014 drag/swipe to change slides",code:x.adBanner,codeTitle:"AdBanner.vue",children:[(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(Za,{active:0})}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:a.spacing.sm},children:"Drag left/right to swipe between slides. 40px threshold triggers navigation."})]}),(0,e.jsx)(u,{title:"Pagination Dots",desc:"Active dot: white/solid; Inactive: white/50% opacity",children:(0,e.jsxs)("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.sm,background:l.gray100,padding:"12px 20px",borderRadius:8},children:[(0,e.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:l.white}}),(0,e.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"rgba(255,255,255,0.5)"}})]}),(0,e.jsx)("span",{style:{fontSize:12,color:l.gray400},children:"Dots on dark background"})]})})]}),o==="notificationcenter"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"NotificationCenter"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Dropdown panel triggered from the bell icon in the top bar. Shows player highlight notifications with jersey avatars."}),(0,e.jsx)(u,{title:"Bell Icon with Badge",desc:"Notification bell with red count badge",code:x.notificationCenter,codeTitle:"NotificationCenter.vue",children:(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.xxl,alignItems:"center"},children:[(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Le,{count:0}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:6},children:"No notifications"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Le,{count:1}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:6},children:"1 notification"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Le,{count:3}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:6},children:"3 notifications"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Le,{count:99}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:6},children:"99 notifications"})]})]})}),(0,e.jsx)(u,{title:"Notification Center Dropdown",desc:"Panel with jersey avatar items and Clear all action",children:(0,e.jsx)(Ka,{})}),(0,e.jsx)(u,{title:"Single Notification Item",desc:"Jersey avatar + notification text",children:(0,e.jsx)("div",{style:{maxWidth:380},children:(0,e.jsx)(Je,{jerseyNumber:11})})})]}),o==="profilesidebar"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"ProfileSidebar"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Right-slide drawer triggered from user avatar in top bar. Contains user info, claimed player card, navigation menu, and logout."}),(0,e.jsx)(u,{title:"Profile Sidebar (Full Preview)",desc:"Dark backdrop + right-side panel with all sections",code:x.profileSidebar,codeTitle:"ProfileSidebar.vue",children:(0,e.jsx)(Ja,{})}),(0,e.jsx)(u,{title:"User Avatar",desc:"Gray circle with user initials \u2014 used in top bar and sidebar header",children:(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.lg,alignItems:"center"},children:[(0,e.jsx)(ke,{initials:"BR",size:40}),(0,e.jsx)(ke,{initials:"WT",size:36}),(0,e.jsx)(ke,{initials:"JD",size:28}),(0,e.jsx)("span",{style:{fontSize:12,color:l.gray400},children:"Sizes: 40px (sidebar), 36px (top bar), 28px (compact)"})]})}),(0,e.jsx)(u,{title:"Claimed Player Card",desc:"Player info card shown at top of profile sidebar",children:(0,e.jsx)("div",{style:{maxWidth:300},children:(0,e.jsx)(Qe,{})})}),(0,e.jsx)(u,{title:"Menu List Items",desc:"Navigation items with chevron, badge count, link variant, and danger variant",children:(0,e.jsxs)("div",{style:{maxWidth:300},children:[(0,e.jsx)(R,{label:"Following",badge:14}),(0,e.jsx)(R,{label:"Language"}),(0,e.jsx)(R,{label:"My Account"}),(0,e.jsx)(R,{label:"Claim Player",variant:"link"})]})}),(0,e.jsx)(u,{title:"Menu List Item \u2014 Interactive States",desc:"Hover highlights row; pressed darkens background",children:(0,e.jsx)("div",{style:{maxWidth:300},children:["default","hover","active"].map(c=>(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:2,marginTop:a.spacing.sm},children:c}),(0,e.jsx)(R,{label:"Following",badge:14,_forceState:c})]},c))})})]}),o==="playeravatarrow"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"PlayerAvatarRow"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Horizontal scrollable row of player avatar chips. Two types of followed players:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:a.spacing.md,marginBottom:20},children:[(0,e.jsxs)("div",{style:{flex:1,background:l.infoBgPurple,border:`1px solid ${l.premiumAmber}33`,borderRadius:a.radii.badge,padding:14},children:[(0,e.jsx)("div",{style:{fontSize:13,fontWeight:a.typography.weights.bold,color:l.premiumAmber,marginBottom:a.spacing.xs},children:"Unclaimed"}),(0,e.jsx)("div",{style:{fontSize:12,color:l.gray500,lineHeight:1.5},children:'Only jersey number + team color known. Shows colored circle with number. Label shows "#4".'})]}),(0,e.jsxs)("div",{style:{flex:1,background:l.infoBgPurple,border:`1px solid ${l.successGreen}33`,borderRadius:a.radii.badge,padding:14},children:[(0,e.jsx)("div",{style:{fontSize:13,fontWeight:a.typography.weights.bold,color:l.successGreen,marginBottom:a.spacing.xs},children:"Claimed"}),(0,e.jsx)("div",{style:{fontSize:12,color:l.gray500,lineHeight:1.5},children:"Player filled form, uploaded photo, admin approved. Shows photo (or initial fallback) + name underneath."})]})]}),(0,e.jsx)(u,{title:"Mixed row \u2014 claimed + unclaimed",desc:"Default data: 3 claimed (photo/initials) + 3 unclaimed (number only)",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(ie,{})})}),(0,e.jsx)(u,{title:"With selection \u2014 claimed player",desc:"Selected claimed shows blue checkmark + bold name",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(ie,{selectedId:1})})}),(0,e.jsx)(u,{title:"With selection \u2014 unclaimed player",desc:"Selected unclaimed fills with team color, number turns white",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(ie,{selectedId:4})})}),(0,e.jsx)(u,{title:"Custom team colors",desc:"teamColor tints both unclaimed backgrounds and claimed selection rings",children:(0,e.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:a.spacing.lg},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'teamColor="#116DFF" (Maccabi blue)'}),(0,e.jsx)(ie,{selectedId:1,teamColor:"#116DFF"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:6},children:'teamColor="#22C55E" (Haifa green)'}),(0,e.jsx)(ie,{selectedId:3,teamColor:"#22C55E"})]})]})}),(0,e.jsx)(u,{title:"Individual chip states",desc:"Both types in default and selected states",children:(0,e.jsxs)("div",{style:{display:"flex",gap:20,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)(ge,{number:4,teamColor:"#D0142C"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:"unclaimed"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)(ge,{number:4,teamColor:"#D0142C",selected:!0}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:"unclaimed selected"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)(ge,{number:11,name:"Cohen D.",claimed:!0,teamColor:"#D0142C"}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:"claimed (initials)"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.xs},children:[(0,e.jsx)(ge,{number:11,name:"Cohen D.",claimed:!0,teamColor:"#D0142C",selected:!0}),(0,e.jsx)("span",{style:{fontSize:9,color:l.gray400},children:"claimed selected"})]})]})}),(0,e.jsx)(u,{title:"Props \u2014 PPlayerAvatarChip",children:(0,e.jsxs)(B,{children:[(0,e.jsx)("div",{children:"number: number \u2014 jersey number (always required)"}),(0,e.jsx)("div",{children:"name: string \u2014 player name (shown for claimed profiles)"}),(0,e.jsx)("div",{children:"photo: string \u2014 photo URL (claimed only, falls back to initial)"}),(0,e.jsx)("div",{children:"claimed: boolean \u2014 whether profile is claimed (default: false)"}),(0,e.jsx)("div",{children:"selected: boolean \u2014 active selection state"}),(0,e.jsx)("div",{children:'teamColor: string \u2014 team accent color (default: "#D0142C")'}),(0,e.jsx)("div",{children:"onClick: () => void \u2014 tap callback"})]})}),(0,e.jsx)(u,{title:"Props \u2014 PPlayerAvatarRow",children:(0,e.jsxs)(B,{children:[(0,e.jsxs)("div",{children:["players: Array \u2014 ","[{ id, number, name?, photo?, claimed }]"]}),(0,e.jsx)("div",{children:"selectedId: number \u2014 currently selected player ID"}),(0,e.jsx)("div",{children:"onSelect: (id) => void \u2014 callback on chip click"}),(0,e.jsx)("div",{children:"teamColor: string \u2014 accent color for all chips"})]})})]}),o==="teamfollowcard"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"TeamFollowCard"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:'Team card from the "Manage following" page. 3-column grid layout with centered logo, team name (2-line clamp), and "Following"/"Follow" status text. Matches Figma spec: W:114 Fill, border-radius 12.'}),(0,e.jsx)(u,{title:"Card states",desc:"Click any card to toggle follow state \u2014 Following (gray text) vs Follow (blue text)",children:(0,e.jsx)(Ya,{})}),(0,e.jsx)(u,{title:"Manage Following \u2014 full layout",desc:"Sectioned flex rows with 'Following' + category headers, matching Figma Manage Following page (gap:8 between cards, gap:24 between sections)",children:(0,e.jsx)("div",{style:{maxWidth:358},children:(0,e.jsx)(et,{})})}),(0,e.jsx)(u,{title:"Props \u2014 PTeamFollowCard",children:(0,e.jsxs)(B,{children:[(0,e.jsx)("div",{children:"teamName: string \u2014 team display name (2-line clamp)"}),(0,e.jsx)("div",{children:'followed: boolean \u2014 true shows "Following" (gray), false shows "Follow" (blue)'}),(0,e.jsx)("div",{children:"onClick: () => void \u2014 card tap handler"})]})}),(0,e.jsx)(u,{title:"Props \u2014 PTeamFollowGrid",children:(0,e.jsxs)(B,{children:[(0,e.jsxs)("div",{children:["sections: ","{"," title, teams: ","{"," name, followed ","}","[] ","}","[] \u2014 grouped team sections"]}),(0,e.jsx)("div",{children:"onClick: (name) => void \u2014 callback when a card is tapped"}),(0,e.jsx)("div",{style:{marginTop:a.spacing.sm,fontSize:a.typography.sizes.xxs,color:l.gray400},children:"Figma: flex row per section, gap:8px between cards, gap:24px between sections"})]})})]}),o==="followedplayers"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"FollowedPlayers Section"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Team-tabbed section for Player Highlights \u2014 used in Game Detail and Video Player pages. Red underline on active team tab."}),(0,e.jsx)(u,{title:"Player Highlights with Team Tabs",desc:"Active team tab (red underline) + followed player highlight cards",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(at,{})})})]}),o==="jersey"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"JerseyItem"}),(0,e.jsx)(u,{title:"Jersey with number",desc:"SVG basketball jersey \u2014 tap to select. Color is team-configurable. Selected shows green stroke and checkmark.",code:x.jerseyItem,codeTitle:"JerseyItem.vue",children:(0,e.jsxs)("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Y,{number:7}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:a.spacing.xs},children:"Default (red)"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Y,{number:23,selected:!0,onClick:()=>{}}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:a.spacing.xs},children:"Selected (green stroke)"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Y,{number:10,color:"#116DFF"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:a.spacing.xs},children:"Custom (blue)"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Y,{number:5,color:"#E8332B"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:a.spacing.xs},children:"Custom (accent)"})]}),(0,e.jsxs)("div",{style:{textAlign:"center"},children:[(0,e.jsx)(Y,{number:33,color:"#1A3B8A"}),(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginTop:a.spacing.xs},children:"Custom (navy)"})]})]})})]}),o==="jerseygrid"&&(0,e.jsxs)(u,{title:"JerseyGrid",desc:"Flex-wrap grid of selectable jerseys with 24px gap, space-between",code:x.jerseyGrid,codeTitle:"JerseyGrid.vue",children:[(0,e.jsx)("div",{style:{maxWidth:398,display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:a.spacing.xl,padding:"0 4px"},children:[1,2,3,4,5,6,7,8].map(c=>(0,e.jsx)(Y,{number:c,selected:n.includes(c),onClick:()=>M(c)},c))}),(0,e.jsxs)("div",{style:{marginTop:a.spacing.md,fontSize:12,color:l.gray400},children:["Selected: [",n.join(", "),"] \u2014 click jerseys to toggle"]})]}),o==="auth"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"AuthPage (Live Preview)"}),(0,e.jsx)(ft,{tab:s,setTab:d})]}),o==="onboarding"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"PlayerSelectPage (Live Preview)"}),(0,e.jsx)(u,{title:"Page Code",code:x.onboardingPage,codeTitle:"views/PlayerSelectPage.vue",children:(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:0},children:'Full onboarding page with jersey selection grid, "See All" expand, and sticky "Finish" footer.'})}),(0,e.jsx)(ct,{selJerseys:n,toggleJ:M})]}),o==="emptystate"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"EmptyState"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Reusable empty state with icon, title, subtitle, and optional CTA. 12 built-in presets for every data-dependent section."}),(0,e.jsx)(u,{title:"Presets \u2014 with CTA",code:x.emptyState,codeTitle:"EmptyState.vue",children:(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:a.spacing.sm},children:["noFollowing","noPersonal","noFollowedPlayers","noTeamsFound","noClaimedPlayer","noSearchResults"].filter(c=>ea[c].cta).map(c=>(0,e.jsxs)("div",{style:{border:`1px solid ${l.gray200}`,borderRadius:a.radii.badge,overflow:"hidden"},children:[(0,e.jsxs)("div",{style:{fontSize:10,color:l.gray400,padding:"6px 10px 0",fontFamily:"monospace"},children:['preset="',c,'"']}),(0,e.jsx)(Ue,{preset:c})]},c))})}),(0,e.jsx)(u,{title:"Presets \u2014 no CTA",children:(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:a.spacing.sm},children:["noLiveGames","noRecentGames","noNotifications","noHighlights","noSavedVideos","noPlayerStats"].map(c=>(0,e.jsxs)("div",{style:{border:`1px solid ${l.gray200}`,borderRadius:a.radii.badge,overflow:"hidden"},children:[(0,e.jsxs)("div",{style:{fontSize:10,color:l.gray400,padding:"6px 10px 0",fontFamily:"monospace"},children:['preset="',c,'"']}),(0,e.jsx)(Ue,{preset:c})]},c))})}),(0,e.jsx)(u,{title:"Where They Go",desc:"Mapping of presets to app screens",children:(0,e.jsxs)(Ge,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noLiveGames"})," \u2192 HomePage Live section"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noFollowing"})," \u2192 HomePage Following section"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noRecentGames"})," \u2192 HomePage Recent Games section"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noNotifications"})," \u2192 NotificationCenter dropdown"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noHighlights"})," \u2192 GameDetail highlights section"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noPersonal"})," \u2192 GameDetail personal highlights"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noPlayerStats"})," \u2192 GameDetail stats tab"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noFollowedPlayers"})," \u2192 GameDetail followed players"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noSavedVideos"})," \u2192 Profile Saved Videos"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noSearchResults"})," \u2192 Search results page"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noTeamsFound"})," \u2192 Onboarding team selection"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"noClaimedPlayer"})," \u2192 Profile sidebar claimed section"]})]})})]}),o==="errorstate"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"ErrorState"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"6 error variants \u2014 each with contextual title, subtitle, and appropriate CTA"}),(0,e.jsx)(u,{title:"All Variants",code:x.errorState,codeTitle:"ErrorState.vue",children:(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:a.spacing.sm},children:["generic","network","timeout","video","data","auth"].map(c=>(0,e.jsxs)("div",{style:{border:`1px solid ${l.gray200}`,borderRadius:a.radii.badge,overflow:"hidden"},children:[(0,e.jsxs)("div",{style:{fontSize:10,color:l.gray400,padding:"6px 10px 0",fontFamily:"monospace"},children:['variant="',c,'"']}),(0,e.jsx)(ot,{variant:c})]},c))})}),(0,e.jsx)(u,{title:"Where They Go",desc:"Mapping of error variants to app contexts",children:(0,e.jsxs)(Ge,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"generic"})," \u2192 Fallback for any unhandled error"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"network"})," \u2192 API calls fail due to connectivity"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"timeout"})," \u2192 Server response too slow"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"video"})," \u2192 Video player load failure / still processing"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"data"})," \u2192 Stats, highlights, or game data failed to load"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{style:{background:l.gray50,padding:"2px 6px",borderRadius:a.radii.sm,fontSize:a.typography.sizes.xxs},children:"auth"})," \u2192 Session expired, token invalid"]})]})})]}),o==="offlinebanner"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"OfflineBanner"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Persistent top banner shown when the device loses network connectivity"}),(0,e.jsx)(u,{title:"Preview",code:x.offlineBanner,codeTitle:"OfflineBanner.vue",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(pt,{})})}),(0,e.jsx)(u,{title:"Anatomy",children:(0,e.jsxs)(B,{variant:"muted",children:[(0,e.jsxs)("div",{children:["Background: ",(0,e.jsx)("code",{style:{background:l.errorRed,color:l.white,padding:"1px 6px",borderRadius:a.radii.sm,opacity:.15},children:"#FEF2F2"})," (red-50)"]}),(0,e.jsxs)("div",{children:["Border: ",(0,e.jsx)("code",{style:{background:l.gray50,padding:"1px 6px",borderRadius:a.radii.sm},children:"rgba(239,68,68,0.15)"})]}),(0,e.jsxs)("div",{children:["Red dot: 8\xD78 circle ",(0,e.jsx)("code",{style:{background:l.errorRed,color:l.white,padding:"1px 6px",borderRadius:a.radii.sm},children:"#EF4444"})]}),(0,e.jsxs)("div",{children:["Title: 14px / 600 / ",l.darkText]}),(0,e.jsxs)("div",{children:["Subtitle: 12px / 400 / ",l.gray500]}),(0,e.jsxs)("div",{children:["Retry link: 13px / 600 / ",l.errorRed]}),(0,e.jsx)("div",{children:"Placement: sticky top of any page, above content"})]})})]}),o==="skeletons"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"Skeletons & Loaders"}),(0,e.jsx)("p",{style:{fontSize:13,color:l.gray400,margin:"0 0 16px"},children:"Animated placeholder components for loading states \u2014 skeleton blocks, cards, inputs, and spinning loaders"}),(0,e.jsx)(u,{title:"Skeleton Block \u2014 Various Sizes",code:x.skeletonBlock,codeTitle:"SkeletonBlock.vue",children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.md,maxWidth:398},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"16px (default)"}),(0,e.jsx)(Z,{})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"20px"}),(0,e.jsx)(Z,{height:20})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"40px (button-sized)"}),(0,e.jsx)(Z,{height:a.sizes.buttonMd})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400,marginBottom:a.spacing.sm},children:"46px (input-sized)"}),(0,e.jsx)(Z,{height:a.sizes.inputHeight})]})]})}),(0,e.jsx)(u,{title:"Skeleton Card",code:x.skeletonCard,codeTitle:"SkeletonCard.vue",children:(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:a.spacing.lg,maxWidth:500},children:[(0,e.jsx)(Ve,{}),(0,e.jsx)(Ve,{})]})}),(0,e.jsx)(u,{title:"Skeleton Input",code:x.skeletonInput,codeTitle:"SkeletonInput.vue",children:(0,e.jsx)("div",{style:{maxWidth:398},children:(0,e.jsx)(gt,{})})}),(0,e.jsx)(u,{title:"Loading Spinner \u2014 3 Sizes",code:x.loadingSpinner,codeTitle:"LoadingSpinner.vue",children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.spacing.xl},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"sm"}),(0,e.jsx)(Te,{size:16})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"md"}),(0,e.jsx)(Te,{size:24})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:a.spacing.sm},children:[(0,e.jsx)("div",{style:{fontSize:a.typography.sizes.xxs,color:l.gray400},children:"lg"}),(0,e.jsx)(Te,{size:32})]})]})}),(0,e.jsx)(u,{title:"Usage Guidelines",children:(0,e.jsxs)(Ae,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:"Skeleton Block:"})," Use for text lines, headings, and flexible-sized content"]}),(0,e.jsxs)("div",{style:{marginTop:a.spacing.sm},children:[(0,e.jsx)("strong",{children:"Skeleton Card:"})," For card-based layouts like game cards or product cards with image + text"]}),(0,e.jsxs)("div",{style:{marginTop:a.spacing.sm},children:[(0,e.jsx)("strong",{children:"Skeleton Input:"})," Show when a form is loading \u2014 exactly 46px height matches PInput"]}),(0,e.jsxs)("div",{style:{marginTop:a.spacing.sm},children:[(0,e.jsx)("strong",{children:"Loading Spinner:"})," Central loading indicator \u2014 use sm in buttons, md for inline sections, lg for full-page loads"]})]})})]}),o==="homepage"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"HomePage (Following Tab)"}),(0,e.jsx)(u,{title:"Page Overview",desc:"Main home feed with MainTopBar, MainTabs, live games, following section, and recent games",children:(0,e.jsxs)(Ae,{children:[(0,e.jsx)("div",{style:{marginBottom:a.spacing.sm},children:"Structure:"}),(0,e.jsxs)("ul",{style:{margin:0,paddingLeft:a.spacing.lg},children:[(0,e.jsx)("li",{children:'MainTopBar (Pixellot logo, search, notifications, user "BR" avatar)'}),(0,e.jsx)("li",{children:"MainTabs (Following active, All Teams, Team Shop) \u2014 RED underline"}),(0,e.jsx)("li",{children:"Hero banner carousel placeholder"}),(0,e.jsx)("li",{children:'SectionHeader "Live" with "See all >"'}),(0,e.jsx)("li",{children:"Horizontal scroll of LiveGameCards"}),(0,e.jsx)("li",{children:'SectionHeader "Following"'}),(0,e.jsx)("li",{children:"SubTabs (Athletes | Teams) \u2014 BLUE underline"}),(0,e.jsx)("li",{children:'FilterDropdown "All Teams"'}),(0,e.jsx)("li",{children:"Jersey avatar circles for followed athletes"}),(0,e.jsx)("li",{children:'SectionHeader "Recent Games"'}),(0,e.jsx)("li",{children:"GameResultCards (vertical list)"}),(0,e.jsx)("li",{children:'"See All >" button'})]})]})})]}),o==="gamedetailpage"&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{fontSize:a.typography.sizes.lg,fontWeight:800,color:l.darkText,marginBottom:14},children:"GameDetailPage"}),(0,e.jsx)(u,{title:"Page Overview",desc:"Detailed game view with score, videos, stats, and player leaders",children:(0,e.jsxs)(Ae,{children:[(0,e.jsx)("div",{style:{marginBottom:a.spacing.sm},children:"Structure:"}),(0,e.jsxs)("ul",{style:{margin:0,paddingLeft:a.spacing.lg},children:[(0,e.jsx)("li",{children:"MainTopBar"}),(0,e.jsx)("li",{children:'BackButton "\u2190 Back"'}),(0,e.jsx)("li",{children:"ScoreCard (89 vs 77, Final, date, standings)"}),(0,e.jsx)("li",{children:"VideoTypeChips row: Full Game (active/RED), Condensed Game, Game Highlights, with lock icons"}),(0,e.jsx)("li",{children:'"Full Game" section \u2014 FreeBadge + VideoThumbnail'}),(0,e.jsx)("li",{children:'"Condensed Game" section \u2014 PremiumBadge + VideoThumbnail'}),(0,e.jsx)("li",{children:'"Game Highlights" section \u2014 PremiumBadge + horizontal VideoThumbnails'}),(0,e.jsx)("li",{children:'"Personal Highlights" \u2014 ClaimedBadge + InfoAlert'}),(0,e.jsx)("li",{children:"Team tabs (MainTabs style) showing teams"}),(0,e.jsx)("li",{children:'"Followed Players" + locked VideoThumbnails (lock icon badge)'}),(0,e.jsx)("li",{children:'"Other Players" + PremiumBadge + video thumbnails'}),(0,e.jsx)("li",{children:"TeamStatsBar comparisons (Points, Rebounds, Assists)"}),(0,e.jsx)("li",{children:"PlayerStatsTable (columns: Player, MIN, PTS, REB, AST)"}),(0,e.jsx)("li",{children:"GameLeaders (team logos, leaders comparison)"})]})]})})]})]})]})},W=t==="dark"?Ce:Ie;return(0,e.jsx)(Re.Provider,{value:t,children:(0,e.jsx)("div",{style:{position:"fixed",inset:0,background:W.white,color:W.darkText,transition:"background 0.3s ease, color 0.3s ease",overflow:"auto"},children:U()})})}return sa(yt);})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/bell.js:
lucide-react/dist/esm/icons/bookmark.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/download.js:
lucide-react/dist/esm/icons/eye-off.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/moon.js:
lucide-react/dist/esm/icons/play.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/sun.js:
lucide-react/dist/esm/icons/upload.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
