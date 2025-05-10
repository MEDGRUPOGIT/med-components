/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
export { c as createAnimation } from './animation-f11d6630.js';
export { iosTransitionAnimation } from './ios.transition-9bd8f03b.js';
export { mdTransitionAnimation } from './md.transition-3c4ddd7b.js';
export { g as getTimeGivenProgression } from './cubic-bezier-89e16b6a.js';
export { createGesture } from './index-50c5db1b.js';
export { i as initialize } from './ionic-global-908d8380.js';
export { c as componentOnReady } from './helpers-7c8ceac4.js';
export { g as getPlatforms, i as isPlatform } from './platform-a3776365.js';
export { I as IonicSafeString } from './index-45fd73fa.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-a9257133.js';
export { m as menuController } from './index-a67bd5a6.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-8f8e7296.js';
export { b as BaseGap, B as BaseRadius, c as BaseSpacing, e as BreakPointNameEnum, d as BreakPointPixelEnum, M as MedColors, h as MedFontSize, j as MedSkin, l as MedType, k as MedTypeTag, T as TemplariosAvatarSize, a as TemplariosBadgeSize, f as TemplariosButtonSize, g as TemplariosChipSize, i as TemplariosIconSize } from './type.enum-ba70b4d0.js';
export { P as PlusMinusStatus } from './plusminus.enum-dd6be4e3.js';
export { R as RateStatus } from './rate-like.enum-25c2a0be.js';
import './gesture-controller-635d3a2b.js';
import './index-336c66d9.js';
import './hardware-back-button-e98bcc7d.js';

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
