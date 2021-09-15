export { c as createAnimation } from './animation-f0f182d7.js';
export { iosTransitionAnimation } from './ios.transition-a85ca8e2.js';
export { mdTransitionAnimation } from './md.transition-15fb71ce.js';
export { g as getTimeGivenProgression } from './cubic-bezier-c3ea3c34.js';
export { createGesture } from './index-a148eeb5.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global-10d9ffcf.js';
export { c as componentOnReady } from './helpers-6b411283.js';
export { I as IonicSafeString } from './index-504c5ae5.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-1c800bc6.js';
export { m as menuController } from './index-f4c1cfd9.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-0b1670e0.js';
export { M as MedFontSize } from './font-size.enum-efd89669.js';
export { M as MedSkin } from './skin.enum-3ed9fb8d.js';
export { R as RateStatus } from './med-rate-like.enum-eb597a6d.js';
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

var MedColors;
(function (MedColors) {
  MedColors["NEUTRAL_1"] = "neutral-1";
  MedColors["NEUTRAL_2"] = "neutral-2";
  MedColors["NEUTRAL_3"] = "neutral-3";
  MedColors["NEUTRAL_4"] = "neutral-4";
  MedColors["NEUTRAL_5"] = "neutral-5";
  MedColors["NEUTRAL_6"] = "neutral-6";
  MedColors["NEUTRAL_7"] = "neutral-7";
  MedColors["NEUTRAL_8"] = "neutral-8";
  MedColors["NEUTRAL_9"] = "neutral-9";
  MedColors["NEUTRAL_10"] = "neutral-10";
  MedColors["FB_ATTENTION"] = "fb-attention";
  MedColors["FB_CAUTION"] = "fb-caution";
  MedColors["FB_WARNING"] = "fb-warning";
  MedColors["FB_SUCCESS"] = "fb-success";
  MedColors["BRAND"] = "brand";
  MedColors["AULA"] = "aula";
  MedColors["MATERIAL"] = "material";
  MedColors["QUESTOES"] = "questoes";
  MedColors["REVALIDA"] = "revalida";
  MedColors["PROVAS"] = "provas";
})(MedColors || (MedColors = {}));

export { MedColors, getMode, setupConfig };
