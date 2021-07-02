export { c as createAnimation } from './animation-f0f182d7.js';
export { iosTransitionAnimation } from './ios.transition-c46ec586.js';
export { mdTransitionAnimation } from './md.transition-7b2ed9b5.js';
export { g as getTimeGivenProgression } from './cubic-bezier-c3ea3c34.js';
export { createGesture } from './index-a148eeb5.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global-366f1c10.js';
export { c as componentOnReady } from './helpers-6b411283.js';
export { I as IonicSafeString } from './index-504c5ae5.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-c7f62e39.js';
export { m as menuController } from './index-ac64c8d9.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-abdb9c38.js';
export { M as MedFontSize } from './font-size.enum-b056d96e.js';
export { R as RateStatus } from './med-rate-like.enum-9c795f1b.js';
import './gesture-controller-cb973372.js';
import './index-7a8b7a1c.js';
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
  MedColors["BRAND_PRIMARY"] = "brand-primary";
  MedColors["AULA"] = "aula";
  MedColors["MATERIAL"] = "material";
  MedColors["QUESTOES"] = "questoes";
  MedColors["REVALIDA"] = "revalida";
  MedColors["PROVASCHECKLIST"] = "provaschecklist";
  MedColors["FEEDBACK_WARNING"] = "feedback-warning";
  MedColors["FEEDBACK_ERROR"] = "feedback-error";
  MedColors["FEEDBACK_SUCCESS"] = "feedback-success";
  MedColors["NEUTRAL_DARK"] = "neutral-dark";
  MedColors["NEUTRAL_LIGHT"] = "neutral-light";
})(MedColors || (MedColors = {}));

export { MedColors, getMode, setupConfig };
