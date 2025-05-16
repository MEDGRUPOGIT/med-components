/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
export { c as createAnimation } from './animation-41df7b1a.js';
export { iosTransitionAnimation } from './ios.transition-c5cd0ac0.js';
export { mdTransitionAnimation } from './md.transition-40b03ba8.js';
export { g as getTimeGivenProgression } from './cubic-bezier-154a53a5.js';
export { createGesture } from './index-ad966da4.js';
export { i as initialize } from './ionic-global-dca35eba.js';
export { c as componentOnReady } from './helpers-d6be6e4a.js';
export { g as getPlatforms, i as isPlatform } from './platform-1ec8424a.js';
export { I as IonicSafeString } from './index-c841c933.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-9b38c108.js';
export { m as menuController } from './index-d4acc29b.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-ec4e85a4.js';
export { b as BaseGap, B as BaseRadius, c as BaseSpacing, e as BreakPointNameEnum, d as BreakPointPixelEnum, M as MedColors, h as MedFontSize, j as MedSkin, l as MedType, k as MedTypeTag, T as TemplariosAvatarSize, a as TemplariosBadgeSize, f as TemplariosButtonSize, g as TemplariosChipSize, i as TemplariosIconSize } from './type.enum-846e5dcb.js';
export { P as PlusMinusStatus } from './plusminus.enum-6ca17e16.js';
export { R as RateStatus } from './rate-like.enum-04fa254a.js';
import './gesture-controller-68c023a4.js';
import './index-336c66d9.js';
import './hardware-back-button-ace6a71b.js';

const setupConfig = (config) => {
  const win = window;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    console.error('ionic config was already initialized');
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  const win = window;
  const config = win && win.Ionic && win.Ionic.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    }
    else {
      return config.get('mode');
    }
  }
  return 'md';
};

export { getMode, setupConfig };
