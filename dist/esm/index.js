export { c as createAnimation } from './animation-2df15ad5.js';
export { iosTransitionAnimation } from './ios.transition-ff08b86e.js';
export { mdTransitionAnimation } from './md.transition-224b0820.js';
export { g as getTimeGivenProgression } from './cubic-bezier-c3ea3c34.js';
export { createGesture } from './index-a148eeb5.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global-10d9ffcf.js';
export { c as componentOnReady } from './helpers-43f61e58.js';
export { I as IonicSafeString } from './index-504c5ae5.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-71676fb7.js';
export { m as menuController } from './index-986bdabd.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-8d3bce77.js';
export { b as BaseGap, B as BaseRadius, c as BaseSpacing, e as BreakPointNameEnum, d as BreakPointPixelEnum, M as MedColors, h as MedFontSize, j as MedSkin, l as MedType, k as MedTypeTag, T as TemplariosAvatarSize, a as TemplariosBadgeSize, f as TemplariosButtonSize, g as TemplariosChipSize, i as TemplariosIconSize } from './type.enum-5cac8202.js';
export { P as PlusMinusStatus } from './plusminus.enum-a0ce4fb8.js';
export { R as RateStatus } from './rate-like.enum-403a54dc.js';
import './gesture-controller-cb973372.js';
import './index-70672e81.js';
import './hardware-back-button-3fda9f12.js';

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
