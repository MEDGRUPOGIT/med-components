export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';
export { c as createAnimation } from './animation.js';
export { iosTransitionAnimation } from './ios.transition.js';
export { mdTransitionAnimation } from './md.transition.js';
export { g as getTimeGivenProgression } from './cubic-bezier.js';
export { createGesture } from './index2.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global.js';
export { c as componentOnReady } from './helpers.js';
export { I as IonicSafeString } from './index3.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index4.js';
export { m as menuController } from './index5.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays.js';
export { M as MedFontSize } from './font-size.enum.js';
export { R as RateStatus } from './med-rate-like.enum.js';

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

var MedColorsV1;
(function (MedColorsV1) {
  MedColorsV1["BRAND_PRIMARY"] = "brand-primary";
  MedColorsV1["AULA"] = "aula";
  MedColorsV1["MATERIAL"] = "material";
  MedColorsV1["QUESTOES"] = "questoes";
  MedColorsV1["REVALIDA"] = "revalida";
  MedColorsV1["PROVASCHECKLIST"] = "provaschecklist";
  MedColorsV1["FEEDBACK_WARNING"] = "feedback-warning";
  MedColorsV1["FEEDBACK_ERROR"] = "feedback-error";
  MedColorsV1["FEEDBACK_SUCCESS"] = "feedback-success";
  MedColorsV1["NEUTRAL_DARK"] = "neutral-dark";
  MedColorsV1["NEUTRAL_LIGHT"] = "neutral-light";
})(MedColorsV1 || (MedColorsV1 = {}));
var MedColors;
(function (MedColors) {
  MedColors["BRAND"] = "brand";
  MedColors["AULAS"] = "aulas";
  MedColors["MATERIAL"] = "material";
  MedColors["QUESTOES"] = "questoes";
  MedColors["REVALIDA"] = "revalida";
  MedColors["PROVAS"] = "provas";
  MedColors["ATTENTION"] = "attention";
  MedColors["CAUTION"] = "caution";
  MedColors["WARNING"] = "warning";
  MedColors["SUCCESS"] = "success";
})(MedColors || (MedColors = {}));

export { MedColors, MedColorsV1, getMode, setupConfig };
