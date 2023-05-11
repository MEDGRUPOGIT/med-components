export { c as createAnimation } from './animation-096c6391.js';
export { iosTransitionAnimation } from './ios.transition-6e466cde.js';
export { mdTransitionAnimation } from './md.transition-eb344bfd.js';
export { g as getTimeGivenProgression } from './cubic-bezier-eea9a7a9.js';
export { createGesture } from './index-f49d994d.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global-4bc7e399.js';
export { c as componentOnReady } from './helpers-dd7e4b7b.js';
export { I as IonicSafeString } from './index-9e3fe806.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-36075612.js';
export { m as menuController } from './index-e929d34a.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-e8ede0be.js';
export { b as BaseGap, B as BaseRadius, c as BaseSpacing, e as BreakPointNameEnum, d as BreakPointPixelEnum, M as MedColors, h as MedFontSize, j as MedSkin, l as MedType, k as MedTypeTag, T as TemplariosAvatarSize, a as TemplariosBadgeSize, f as TemplariosButtonSize, g as TemplariosChipSize, i as TemplariosIconSize } from './type.enum-b1689c26.js';
export { P as PlusMinusStatus } from './plusminus.enum-87dfaf79.js';
export { R as RateStatus } from './rate-like.enum-01831b55.js';
import './gesture-controller-31cb6bb9.js';
import './index-70672e81.js';
import './hardware-back-button-4a6b37fb.js';

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
