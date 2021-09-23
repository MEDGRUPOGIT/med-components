import { k as getAssetPath, r as registerInstance, e as createEvent, h, H as Host, i as getElement } from './index-70672e81.js';
import { b as getIonMode$1 } from './ionic-global-10d9ffcf.js';
import { k as hasShadowDom, i as inheritAttributes } from './helpers-6b411283.js';
import { o as openURL, h as hostContext } from './theme-3b0eafd2.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

let CACHED_MAP;
const getIconMap = () => {
  if (typeof window === 'undefined') {
    return new Map();
  }
  else {
    if (!CACHED_MAP) {
      const win = window;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
  }
};
const getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
const getNamedUrl = (iconName) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  return getAssetPath(`svg/${iconName}.svg`);
};
const getName = (iconName, icon, mode, ios, md) => {
  // default to "md" if somehow the mode wasn't set
  mode = (mode && toLower(mode)) === 'ios' ? 'ios' : 'md';
  // if an icon was passed in using the ios or md attributes
  // set the iconName to whatever was passed in
  if (ios && mode === 'ios') {
    iconName = toLower(ios);
  }
  else if (md && mode === 'md') {
    iconName = toLower(md);
  }
  else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  }
  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
  if (invalidChars !== '') {
    return null;
  }
  return iconName;
};
const getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === 'string';
const toLower = (val) => val.toLowerCase();

const iosButtonMdCss = ":root{--med-font-family-brand:\"fsemeric\";--med-font-family-base:\"fsemeric\";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.med-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.med-button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.med-button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.med-button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.med-button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.med-button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.med-button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.med-button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.med-button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                  background-color 15ms linear,\n                  color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.med-button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.med-button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.med-button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.med-button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.med-button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.med-button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.med-button-clear.ion-color.ion-focused) .button-native::after,:host(.med-button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.med-button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.med-button-clear.ion-color:hover) .button-native::after,:host(.med-button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}:host{--background:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--bg-hover:hsl(var(--med-color-brand-5));--bg-hover-opacity:1;--border-color-hover:transparent;--color-hover:hsl(var(--med-color-contrast-fixed));--bg-focused:hsl(var(--med-color-brand-5));--bg-focused-opacity:1;--border-color-focused:transparent;--color-focused:hsl(var(--med-color-contrast-fixed));--bg-activated:transparent;--bg-activated-opacity:0;--border-color-activated:transparent;--color-activated:hsl(var(--med-color-contrast-fixed));--font-size:var(--med-font-size-xxs);--font-weight:var(--med-font-weight-semibold);--line-height:var(--med-line-height-compressed);--padding:0 var(--med-spacing-inline-xxs);--padding-text:0 var(--med-spacing-inline-xxxs);--border-radius:var(--med-border-radius-pill);--min-height:48px;--min-width:48px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out, opacity 300ms ease-out;--icon-font-size:24px}:host{min-height:var(--min-height);min-width:var(--min-width);height:auto;font-size:var(--font-size);font-weight:var(--font-weight);text-transform:uppercase;margin:0}:host .button-native{padding:var(--padding);min-height:var(--min-height);line-height:var(--line-height);-webkit-box-shadow:none;box-shadow:none}:host .button-inner__text{padding:var(--padding-text);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .button-native::after{display:none}:host .button-native::before{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;-webkit-transition:var(--transition);transition:var(--transition)}:host ion-ripple-effect{--ripple-color:hsl(var(--med-color-brand-2));--ripple-opacity:1}::slotted(ion-icon){font-size:var(--icon-font-size);stroke:var(--color);-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}::slotted(ion-icon[slot=start]){margin:0}::slotted(ion-icon[slot=end]){margin:0}::slotted(ion-icon[slot=icon-only]){font-size:var(--icon-font-size)}:host(.button-has-icon-only){--padding:0;--padding-text:0;--border-radius:var(--med-border-radius-pill);--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--md){--min-height:48px;--min-height:48px;--icon-font-size:24px}:host(.med-button--md.button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--sm){--min-height:40px;--min-height:40px;--icon-font-size:24px}:host(.med-button--sm.button-has-icon-only){--min-height:40px;--min-width:40px;--icon-font-size:24px}:host(.med-button--xs){--min-height:32px;--min-width:32px;--padding:0 var(--med-spacing-inline-base);--font-size:var(--med-font-size-xxxs);--icon-font-size:16px}:host(.med-button--xs.button-has-icon-only){--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--xxs){--min-height:24px;--min-width:24px;--padding:0 var(--med-spacing-inline-xxxs);--font-size:var(--med-font-size-nano);--icon-font-size:16px}:host(.med-button--xxs.button-has-icon-only){--min-height:24px;--min-width:24px;--icon-font-size:16px}:host(.med-button--xxxs){--min-height:16px;--min-width:16px;--padding:0;--font-size:var(--med-font-size-nano);--icon-font-size:8px}:host(.med-button--xxxs.button-has-icon-only){--min-height:16px;--min-width:16px;--icon-font-size:8px}@media (any-hover: hover){:host(.med-button:hover){color:var(--color-hover)}:host(.med-button:hover) .button-native{border-color:var(--border-color-hover)}:host(.med-button:hover) .button-native::before{background:var(--bg-hover);opacity:var(--bg-hover-opacity)}:host(.med-button:hover) ::slotted(ion-icon){stroke:var(--color-hover)}}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native{border-color:var(--border-color-focused)}:host(.ion-focused) .button-native::before{background:var(--bg-focused);opacity:var(--bg-focused-opacity);border-color:var(--border-color-focused)}:host(.ion-focused) ::slotted(ion-icon){stroke:var(--color-focused)}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native{border-color:var(--border-color-activated)}:host(.ion-activated) .button-native::before{background:var(--bg-activated);opacity:var(--bg-activated-opacity)}:host(.ion-activated) ::slotted(ion-icon){stroke:var(--color-activated)}:host(.button-disabled){cursor:initial;pointer-events:none;opacity:var(--med-opacity-level-half)}:host(.med-color){--background:var(--med-color-gradient);--border-color:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed));--bg-hover:hsl(var(--med-color-3));--color-hover:hsl(var(--med-color-contrast-fixed));--bg-focused:hsl(var(--med-color-3));--color-focused:hsl(var(--med-color-contrast-fixed));--color-activated:hsl(var(--med-color-contrast-fixed))}:host(.med-color) ion-ripple-effect{--ripple-color:hsl(var(--med-color-2))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--border-color:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast));--bg-hover:hsl(var(--med-color-neutral-contrast), var(--med-opacity-level-semitransparent));--color-hover:hsl(var(--med-color-neutral-contrast));--bg-focused:hsl(var(--med-color-neutral-contrast));--bg-focused-opacity:var(--med-opacity-level-semitransparent);--color-focused:hsl(var(--med-color-neutral-contrast));--color-activated:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-contrast));--ripple-opacity:var(--med-opacity-level-semitransparent)}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--border-color:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast));--bg-hover:hsl(var(--med-color-feedback-contrast), var(--med-opacity-level-semitransparent));--color-hover:hsl(var(--med-color-feedback-contrast));--bg-focused:hsl(var(--med-color-feedback-contrast));--bg-focused-opacity:var(--med-opacity-level-semitransparent);--color-focused:hsl(var(--med-color-feedback-contrast));--color-activated:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) ion-ripple-effect{--ripple-color:hsl(var(--med-color-feedback-contrast));--ripple-opacity:var(--med-opacity-level-semitransparent)}:host(.med-button--secondary){--background:transparent;--border-color:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-brand-3));--bg-hover:transparent;--bg-hover-opacity:0;--border-color-hover:hsl(var(--med-color-brand-4));--color-hover:hsl(var(--med-color-brand-4));--bg-focused:transparent;--bg-focused-opacity:0;--border-color-focused:hsl(var(--med-color-brand-4));--color-focused:hsl(var(--med-color-brand-4));--bg-activated:transparent;--bg-activated-opacity:0;--border-color-activated:hsl(var(--med-color-brand-5));--color-activated:hsl(var(--med-color-brand-5));--border-width:var(--med-border-width-thin);--border-style:solid}:host(.med-button--secondary) ion-ripple-effect{--ripple-color:transparent;--ripple-opacity:transparent}:host(.button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px;--padding:0}:host(.med-button--secondary.med-color){--border-color:hsl(var(--med-color-3));--color:hsl(var(--med-color-3));--bg-hover:hsl(var(--med-color-3));--color-hover:hsl(var(--med-color-contrast-fixed));--bg-focused:hsl(var(--med-color-3));--color-focused:hsl(var(--med-color-contrast-fixed));--color-activated:hsl(var(--med-color-contrast-fixed))}:host(.med-button--secondary.med-color-neutral){--border-color:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral));--border-color-hover:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--color-hover:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--border-color-focused:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--color-focused:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--border-color-activated:hsl(var(--med-color-neutral), var(--med-opacity-level-intense));--color-activated:hsl(var(--med-color-neutral), var(--med-opacity-level-intense))}:host(.med-button--secondary.med-color-feedback){--border-color:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback));--border-color-hover:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--color-hover:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--border-color-focused:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--color-focused:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--border-color-activated:hsl(var(--med-color-feedback), var(--med-opacity-level-intense));--color-activated:hsl(var(--med-color-feedback), var(--med-opacity-level-intense))}:host(.med-button--tertiary){--background:transparent;--border-color:transparent;--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-brand-3));--bg-hover-opacity:var(--med-opacity-level-light);--border-color-hover:transparent;--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-brand-3));--bg-focused-opacity:var(--med-opacity-level-light);--border-color-focused:transparent;--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-brand-3));--bg-activated-opacity:var(--med-opacity-level-light);--border-color-activated:transparent;--color-activated:hsl(var(--med-color-neutral-10));--line-height:24px;--padding:0;--padding-text:0 var(--med-spacing-inline-xxxs);--min-height:24px;--min-width:24px;--border-radius:var(--med-border-radius-nano)}:host(.med-button--tertiary) ion-ripple-effect{--ripple-color:hsl(var(--med-color-brand-3));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.button-has-icon-only){--padding:0;--padding-text:0;--border-radius:var(--med-border-radius-full);--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.button-block){--border-radius:var(--med-border-radius-nano)}:host(.med-button--tertiary.med-color){--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-3));--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-3));--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-3));--color-activated:hsl(var(--med-color-neutral-10))}:host(.med-button--tertiary.med-color) ion-ripple-effect{--ripple-color:hsl(var(--med-color-3));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.med-color-neutral){--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-neutral-10));--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-neutral-10));--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-neutral-10));--color-activated:hsl(var(--med-color-neutral-10))}:host(.med-button--tertiary.med-color-neutral) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-10));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.med-color-feedback){--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-feedback));--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-feedback));--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-feedback));--color-activated:hsl(var(--med-color-neutral-10))}:host(.med-button--tertiary.med-color-feedback) ion-ripple-effect{--ripple-color:hsl(var(--med-color-feedback));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.med-button--lg){--font-size:var(--med-font-size-xs);--line-height:24px;--min-height:24px;--min-width:24px}:host(.med-button--tertiary.med-button--lg.button-has-icon-only){--min-height:64px;--min-width:64px;--icon-font-size:48px}:host(.med-button--tertiary.med-button--md){--font-size:var(--med-font-size-xxs);--line-height:24px;--min-height:24px;--min-width:24px}:host(.med-button--tertiary.med-button--md.button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--tertiary.med-button--sm){--font-size:var(--med-font-size-xxxs);--line-height:16px;--min-height:16px;--min-width:16px}:host(.med-button--tertiary.med-button--sm.button-has-icon-only){--min-height:40px;--min-width:40px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xs){--font-size:var(--med-font-size-nano);--line-height:16px;--min-height:16px;--min-width:16px}:host(.med-button--tertiary.med-button--xs.button-has-icon-only){--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxs.button-has-icon-only){--min-height:24px;--min-width:24px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxxs.button-has-icon-only){--min-height:16px;--min-width:16px;--icon-font-size:16px}";

const buttonMdCss = ":root{--med-font-family-brand:\"fsemeric\";--med-font-family-base:\"fsemeric\";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.med-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.med-button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.med-button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.med-button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.med-button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.med-button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.med-button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.med-button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.med-button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                  background-color 15ms linear,\n                  color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.med-button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.med-button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.med-button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.med-button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.med-button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.med-button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.med-button-clear.ion-color.ion-focused) .button-native::after,:host(.med-button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.med-button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.med-button-clear.ion-color:hover) .button-native::after,:host(.med-button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}:host{--background:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--bg-hover:hsl(var(--med-color-brand-5));--bg-hover-opacity:1;--border-color-hover:transparent;--color-hover:hsl(var(--med-color-contrast-fixed));--bg-focused:hsl(var(--med-color-brand-5));--bg-focused-opacity:1;--border-color-focused:transparent;--color-focused:hsl(var(--med-color-contrast-fixed));--bg-activated:transparent;--bg-activated-opacity:0;--border-color-activated:transparent;--color-activated:hsl(var(--med-color-contrast-fixed));--font-size:var(--med-font-size-xxs);--font-weight:var(--med-font-weight-semibold);--line-height:var(--med-line-height-compressed);--padding:0 var(--med-spacing-inline-xxs);--padding-text:0 var(--med-spacing-inline-xxxs);--border-radius:var(--med-border-radius-pill);--min-height:48px;--min-width:48px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out, opacity 300ms ease-out;--icon-font-size:24px}:host{min-height:var(--min-height);min-width:var(--min-width);height:auto;font-size:var(--font-size);font-weight:var(--font-weight);text-transform:uppercase;margin:0}:host .button-native{padding:var(--padding);min-height:var(--min-height);line-height:var(--line-height);-webkit-box-shadow:none;box-shadow:none}:host .button-inner__text{padding:var(--padding-text);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .button-native::after{display:none}:host .button-native::before{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;-webkit-transition:var(--transition);transition:var(--transition)}:host ion-ripple-effect{--ripple-color:hsl(var(--med-color-brand-2));--ripple-opacity:1}::slotted(ion-icon){font-size:var(--icon-font-size);stroke:var(--color);-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}::slotted(ion-icon[slot=start]){margin:0}::slotted(ion-icon[slot=end]){margin:0}::slotted(ion-icon[slot=icon-only]){font-size:var(--icon-font-size)}:host(.button-has-icon-only){--padding:0;--padding-text:0;--border-radius:var(--med-border-radius-pill);--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--md){--min-height:48px;--min-height:48px;--icon-font-size:24px}:host(.med-button--md.button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--sm){--min-height:40px;--min-height:40px;--icon-font-size:24px}:host(.med-button--sm.button-has-icon-only){--min-height:40px;--min-width:40px;--icon-font-size:24px}:host(.med-button--xs){--min-height:32px;--min-width:32px;--padding:0 var(--med-spacing-inline-base);--font-size:var(--med-font-size-xxxs);--icon-font-size:16px}:host(.med-button--xs.button-has-icon-only){--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--xxs){--min-height:24px;--min-width:24px;--padding:0 var(--med-spacing-inline-xxxs);--font-size:var(--med-font-size-nano);--icon-font-size:16px}:host(.med-button--xxs.button-has-icon-only){--min-height:24px;--min-width:24px;--icon-font-size:16px}:host(.med-button--xxxs){--min-height:16px;--min-width:16px;--padding:0;--font-size:var(--med-font-size-nano);--icon-font-size:8px}:host(.med-button--xxxs.button-has-icon-only){--min-height:16px;--min-width:16px;--icon-font-size:8px}@media (any-hover: hover){:host(.med-button:hover){color:var(--color-hover)}:host(.med-button:hover) .button-native{border-color:var(--border-color-hover)}:host(.med-button:hover) .button-native::before{background:var(--bg-hover);opacity:var(--bg-hover-opacity)}:host(.med-button:hover) ::slotted(ion-icon){stroke:var(--color-hover)}}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native{border-color:var(--border-color-focused)}:host(.ion-focused) .button-native::before{background:var(--bg-focused);opacity:var(--bg-focused-opacity);border-color:var(--border-color-focused)}:host(.ion-focused) ::slotted(ion-icon){stroke:var(--color-focused)}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native{border-color:var(--border-color-activated)}:host(.ion-activated) .button-native::before{background:var(--bg-activated);opacity:var(--bg-activated-opacity)}:host(.ion-activated) ::slotted(ion-icon){stroke:var(--color-activated)}:host(.button-disabled){cursor:initial;pointer-events:none;opacity:var(--med-opacity-level-half)}:host(.med-color){--background:var(--med-color-gradient);--border-color:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed));--bg-hover:hsl(var(--med-color-3));--color-hover:hsl(var(--med-color-contrast-fixed));--bg-focused:hsl(var(--med-color-3));--color-focused:hsl(var(--med-color-contrast-fixed));--color-activated:hsl(var(--med-color-contrast-fixed))}:host(.med-color) ion-ripple-effect{--ripple-color:hsl(var(--med-color-2))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--border-color:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast));--bg-hover:hsl(var(--med-color-neutral-contrast), var(--med-opacity-level-semitransparent));--color-hover:hsl(var(--med-color-neutral-contrast));--bg-focused:hsl(var(--med-color-neutral-contrast));--bg-focused-opacity:var(--med-opacity-level-semitransparent);--color-focused:hsl(var(--med-color-neutral-contrast));--color-activated:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-contrast));--ripple-opacity:var(--med-opacity-level-semitransparent)}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--border-color:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast));--bg-hover:hsl(var(--med-color-feedback-contrast), var(--med-opacity-level-semitransparent));--color-hover:hsl(var(--med-color-feedback-contrast));--bg-focused:hsl(var(--med-color-feedback-contrast));--bg-focused-opacity:var(--med-opacity-level-semitransparent);--color-focused:hsl(var(--med-color-feedback-contrast));--color-activated:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) ion-ripple-effect{--ripple-color:hsl(var(--med-color-feedback-contrast));--ripple-opacity:var(--med-opacity-level-semitransparent)}:host(.med-button--secondary){--background:transparent;--border-color:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-brand-3));--bg-hover:transparent;--bg-hover-opacity:0;--border-color-hover:hsl(var(--med-color-brand-4));--color-hover:hsl(var(--med-color-brand-4));--bg-focused:transparent;--bg-focused-opacity:0;--border-color-focused:hsl(var(--med-color-brand-4));--color-focused:hsl(var(--med-color-brand-4));--bg-activated:transparent;--bg-activated-opacity:0;--border-color-activated:hsl(var(--med-color-brand-5));--color-activated:hsl(var(--med-color-brand-5));--border-width:var(--med-border-width-thin);--border-style:solid}:host(.med-button--secondary) ion-ripple-effect{--ripple-color:transparent;--ripple-opacity:transparent}:host(.button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px;--padding:0}:host(.med-button--secondary.med-color){--border-color:hsl(var(--med-color-3));--color:hsl(var(--med-color-3));--bg-hover:hsl(var(--med-color-3));--color-hover:hsl(var(--med-color-contrast-fixed));--bg-focused:hsl(var(--med-color-3));--color-focused:hsl(var(--med-color-contrast-fixed));--color-activated:hsl(var(--med-color-contrast-fixed))}:host(.med-button--secondary.med-color-neutral){--border-color:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral));--border-color-hover:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--color-hover:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--border-color-focused:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--color-focused:hsl(var(--med-color-neutral), var(--med-opacity-level-semiopaque));--border-color-activated:hsl(var(--med-color-neutral), var(--med-opacity-level-intense));--color-activated:hsl(var(--med-color-neutral), var(--med-opacity-level-intense))}:host(.med-button--secondary.med-color-feedback){--border-color:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback));--border-color-hover:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--color-hover:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--border-color-focused:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--color-focused:hsl(var(--med-color-feedback), var(--med-opacity-level-semiopaque));--border-color-activated:hsl(var(--med-color-feedback), var(--med-opacity-level-intense));--color-activated:hsl(var(--med-color-feedback), var(--med-opacity-level-intense))}:host(.med-button--tertiary){--background:transparent;--border-color:transparent;--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-brand-3));--bg-hover-opacity:var(--med-opacity-level-light);--border-color-hover:transparent;--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-brand-3));--bg-focused-opacity:var(--med-opacity-level-light);--border-color-focused:transparent;--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-brand-3));--bg-activated-opacity:var(--med-opacity-level-light);--border-color-activated:transparent;--color-activated:hsl(var(--med-color-neutral-10));--line-height:24px;--padding:0;--padding-text:0 var(--med-spacing-inline-xxxs);--min-height:24px;--min-width:24px;--border-radius:var(--med-border-radius-nano)}:host(.med-button--tertiary) ion-ripple-effect{--ripple-color:hsl(var(--med-color-brand-3));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.button-has-icon-only){--padding:0;--padding-text:0;--border-radius:var(--med-border-radius-full);--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.button-block){--border-radius:var(--med-border-radius-nano)}:host(.med-button--tertiary.med-color){--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-3));--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-3));--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-3));--color-activated:hsl(var(--med-color-neutral-10))}:host(.med-button--tertiary.med-color) ion-ripple-effect{--ripple-color:hsl(var(--med-color-3));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.med-color-neutral){--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-neutral-10));--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-neutral-10));--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-neutral-10));--color-activated:hsl(var(--med-color-neutral-10))}:host(.med-button--tertiary.med-color-neutral) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-10));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.med-color-feedback){--color:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-feedback));--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-feedback));--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:hsl(var(--med-color-feedback));--color-activated:hsl(var(--med-color-neutral-10))}:host(.med-button--tertiary.med-color-feedback) ion-ripple-effect{--ripple-color:hsl(var(--med-color-feedback));--ripple-opacity:var(--med-opacity-level-light)}:host(.med-button--tertiary.med-button--lg){--font-size:var(--med-font-size-xs);--line-height:24px;--min-height:24px;--min-width:24px}:host(.med-button--tertiary.med-button--lg.button-has-icon-only){--min-height:64px;--min-width:64px;--icon-font-size:48px}:host(.med-button--tertiary.med-button--md){--font-size:var(--med-font-size-xxs);--line-height:24px;--min-height:24px;--min-width:24px}:host(.med-button--tertiary.med-button--md.button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--tertiary.med-button--sm){--font-size:var(--med-font-size-xxxs);--line-height:16px;--min-height:16px;--min-width:16px}:host(.med-button--tertiary.med-button--sm.button-has-icon-only){--min-height:40px;--min-width:40px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xs){--font-size:var(--med-font-size-nano);--line-height:16px;--min-height:16px;--min-width:16px}:host(.med-button--tertiary.med-button--xs.button-has-icon-only){--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxs.button-has-icon-only){--min-height:24px;--min-width:24px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxxs.button-has-icon-only){--min-height:16px;--min-width:16px;--icon-font-size:16px}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.inheritedAttributes = {};
    /**
      * Define a cor do componente.
      */
    this.solid = false;
    /**
     * The type of button.
     */
    this.buttonType = 'button';
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    /**
     * If `true`, activates a button with a heavier font weight.
     */
    this.strong = false;
    /**
     * The type of the button.
     */
    this.type = 'button';
    this.handleClick = (ev) => {
      if (this.type === 'button') {
        openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      }
      else if (hasShadowDom(this.el)) {
        // this button wants to specifically submit a form
        // climb up the dom to see if we're in a <form>
        // and if so, then use JS to submit it
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest('ion-buttons');
    this.inListHeader = !!this.el.closest('ion-list-header');
    this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }
  componentDidLoad() {
    if (this.el.classList.contains('button')) {
      this.el.classList.remove('button');
    }
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === undefined || this.fill === 'clear';
    // If the button is in a toolbar, has a clear fill (which is the default)
    // and only has an icon we use the unbounded "circular" ripple effect
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return 'unbounded';
    }
    return 'bounded';
  }
  render() {
    const mode = getIonMode$1(this);
    const { dsColor, dsName, dsSize, solid } = this;
    const { buttonType, type, disabled, rel, target, size, href, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === undefined && this.inItem ? 'small' : size;
    const TagType = href === undefined ? 'button' : 'a';
    const attrs = (TagType === 'button')
      ? { type }
      : {
        download: this.download,
        href,
        rel,
        target
      };
    return (h(Host, { onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: generateMedColor(dsColor, {
        [mode]: true,
        [buttonType]: true,
        [`${buttonType}-${expand}`]: expand !== undefined,
        [`${buttonType}-${finalSize}`]: finalSize !== undefined,
        [`${buttonType}-${shape}`]: shape !== undefined,
        //[`${buttonType}-${fill}`]: true,
        [`${buttonType}-strong`]: strong,
        'in-toolbar': hostContext('ion-toolbar', this.el),
        'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
        'button-has-icon-only': hasIconOnly,
        'button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true,
        'med-button': true,
        [`med-button--${dsName}`]: dsName !== undefined,
        [`med-button--${dsSize}`]: dsSize !== undefined,
        'med-button--solid': solid,
      }) }, h(TagType, Object.assign({}, attrs, { class: "button-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("div", { class: "button-inner__text" }, h("slot", null)), h("slot", { name: "end" })), h("ion-ripple-effect", { type: this.rippleType }))));
  }
  get el() { return getElement(this); }
};
Button.style = {
  ios: iosButtonMdCss,
  md: buttonMdCss
};

const validateContent = (svgContent) => {
  const div = document.createElement('div');
  div.innerHTML = svgContent;
  // setup this way to ensure it works on our buddy IE
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  }
  // must only have 1 root element
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
    const svgClass = svgElm.getAttribute('class') || '';
    svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());
    // root element must be an svg
    // lets double check we've got valid elements
    // do not allow scripts
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return '';
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};

const ioniconContent = new Map();
const requests = new Map();
const getSvgContent = (url, sanitize) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      // we don't already have a request
      req = fetch(url).then((rsp) => {
        if (rsp.ok) {
          return rsp.text().then((svgContent) => {
            if (svgContent && sanitize !== false) {
              svgContent = validateContent(svgContent);
            }
            ioniconContent.set(url, svgContent || '');
          });
        }
        ioniconContent.set(url, '');
      });
      // cache for the same requests
      requests.set(url, req);
    }
    else {
      // set to empty for ssr scenarios and resolve promise
      ioniconContent.set(url, '');
      return Promise.resolve();
    }
  }
  return req;
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}:host(.med-icon){--ionicon-stroke-width:2;font-size:24px;stroke:inherit}:host(.med-icon) path{stroke-width:var(--ionicon-stroke-width, 32px);fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:inherit}:host(.med-icon.med-color){color:var(--med-color-3) !important;stroke:var(--med-color-3) !important}:host(.med-icon.med-color-neutral){color:var(--med-color-neutral) !important;stroke:var(--med-color-neutral) !important}:host(.med-icon.med-color-feedback){color:var(--med-color-feedback) !important;stroke:var(--med-color-feedback) !important}:host(.med-icon.med-icon--xxs){font-size:12px}:host(.med-icon.med-icon--xs){font-size:16px}:host(.med-icon.med-icon--sm){font-size:24px}:host(.med-icon.med-icon--md){font-size:32px}:host(.med-icon.med-icon--lg){font-size:48px}:host(.med-icon.med-icon--stroke-1){--ionicon-stroke-width:1}";

const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconName = null;
    this.isVisible = false;
    /**
     * The mode determines which platform styles to use.
     */
    this.mode = getIonMode();
    /**
     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    this.lazy = false;
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    this.sanitize = true;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = (this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin }));
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = ioniconContent.get(url);
        }
        else {
          // async if it hasn't been loaded
          getSvgContent(url, this.sanitize).then(() => (this.svgContent = ioniconContent.get(url)));
        }
      }
    }
    const label = this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
    if (!this.ariaLabel && this.ariaHidden !== 'true') {
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const { iconName } = this;
    const mode = this.mode || 'md';
    const flipRtl = this.flipRtl ||
      (iconName &&
        (iconName.indexOf('arrow') > -1 || iconName.indexOf('chevron') > -1) &&
        this.flipRtl !== false);
    return (h(Host, { role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(this.color)), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl' }) }, this.svgContent ? (h("div", { class: "icon-inner", innerHTML: this.svgContent })) : (h("div", { class: "icon-inner" }))));
  }
  static get assetsDirs() { return ["svg"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "name": ["loadIcon"],
    "src": ["loadIcon"],
    "icon": ["loadIcon"]
  }; }
};
const getIonMode = () => (typeof document !== 'undefined' && document.documentElement.getAttribute('mode')) || 'md';
const createColorClasses = (color) => {
  return color
    ? {
      'ion-color': true,
      [`ion-color-${color}`]: true,
    }
    : null;
};
Icon.style = iconCss;

export { Button as ion_button, Icon as ion_icon };
