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
export { M as MedFontSize } from './font-size.enum-0a1d6dc5.js';
export { M as MedSkin } from './skin.enum-baf4fd5b.js';
export { R as RateStatus } from './med-rate-like.enum-173f851b.js';
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

var MedType;
(function (MedType) {
  MedType["H48"] = "h48";
  MedType["H32"] = "h32";
  MedType["H24"] = "h24";
  MedType["H20"] = "h20";
  MedType["H20X"] = "h20x";
  MedType["P16"] = "p16";
  MedType["P16B"] = "p16b";
  MedType["P16X"] = "p16x";
  MedType["P16XB"] = "p16xb";
  MedType["P14"] = "p14";
  MedType["P14B"] = "p14b";
  MedType["P14X"] = "p14x";
  MedType["P14XB"] = "p14xb";
  MedType["P12"] = "p12";
  MedType["P12B"] = "p12b";
  MedType["P12X"] = "p12x";
  MedType["P12XB"] = "p12xb";
  MedType["P10"] = "p10";
  MedType["P10B"] = "p10b";
})(MedType || (MedType = {}));

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

export { MedColors, MedType, getMode, setupConfig };
