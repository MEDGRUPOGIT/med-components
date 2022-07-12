'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const animation = require('./animation-13cbbb20.js');
const ios_transition = require('./ios.transition-3fc3591b.js');
const md_transition = require('./md.transition-0c82d7a2.js');
const cubicBezier = require('./cubic-bezier-0b2ccc35.js');
const index = require('./index-98d43f07.js');
const ionicGlobal = require('./ionic-global-50e8bb29.js');
const helpers = require('./helpers-d381ec4d.js');
const index$1 = require('./index-e1bb33c3.js');
const index$2 = require('./index-29aebf46.js');
const index$3 = require('./index-3bb26b58.js');
const overlays = require('./overlays-e22059c3.js');
const fontSize_enum = require('./font-size.enum-2233ba2a.js');
const skin_enum = require('./skin.enum-0657adcf.js');
const medRateLike_enum = require('./med-rate-like.enum-09a0c949.js');
require('./gesture-controller-29adda71.js');
require('./index-bc2e4509.js');
require('./hardware-back-button-148ce546.js');

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

exports.MedType = void 0;
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
})(exports.MedType || (exports.MedType = {}));

exports.MedColors = void 0;
(function (MedColors) {
  MedColors["NEUTRAL_1"] = "neutral-1";
  MedColors["NEUTRAL_15"] = "neutral-15";
  MedColors["NEUTRAL_2"] = "neutral-2";
  MedColors["NEUTRAL_25"] = "neutral-25";
  MedColors["NEUTRAL_3"] = "neutral-3";
  MedColors["NEUTRAL_35"] = "neutral-35";
  MedColors["NEUTRAL_4"] = "neutral-4";
  MedColors["NEUTRAL_45"] = "neutral-45";
  MedColors["NEUTRAL_5"] = "neutral-5";
  MedColors["NEUTRAL_55"] = "neutral-55";
  MedColors["NEUTRAL_6"] = "neutral-6";
  MedColors["NEUTRAL_65"] = "neutral-65";
  MedColors["NEUTRAL_7"] = "neutral-7";
  MedColors["NEUTRAL_75"] = "neutral-75";
  MedColors["NEUTRAL_8"] = "neutral-8";
  MedColors["NEUTRAL_85"] = "neutral-85";
  MedColors["NEUTRAL_9"] = "neutral-9";
  MedColors["NEUTRAL_95"] = "neutral-95";
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
})(exports.MedColors || (exports.MedColors = {}));

exports.createAnimation = animation.createAnimation;
exports.iosTransitionAnimation = ios_transition.iosTransitionAnimation;
exports.mdTransitionAnimation = md_transition.mdTransitionAnimation;
exports.getTimeGivenProgression = cubicBezier.getTimeGivenProgression;
exports.createGesture = index.createGesture;
exports.getPlatforms = ionicGlobal.getPlatforms;
exports.initialize = ionicGlobal.initialize;
exports.isPlatform = ionicGlobal.isPlatform;
exports.componentOnReady = helpers.componentOnReady;
exports.IonicSafeString = index$1.IonicSafeString;
exports.LIFECYCLE_DID_ENTER = index$2.LIFECYCLE_DID_ENTER;
exports.LIFECYCLE_DID_LEAVE = index$2.LIFECYCLE_DID_LEAVE;
exports.LIFECYCLE_WILL_ENTER = index$2.LIFECYCLE_WILL_ENTER;
exports.LIFECYCLE_WILL_LEAVE = index$2.LIFECYCLE_WILL_LEAVE;
exports.LIFECYCLE_WILL_UNLOAD = index$2.LIFECYCLE_WILL_UNLOAD;
exports.menuController = index$3.menuController;
exports.actionSheetController = overlays.actionSheetController;
exports.alertController = overlays.alertController;
exports.loadingController = overlays.loadingController;
exports.modalController = overlays.modalController;
exports.pickerController = overlays.pickerController;
exports.popoverController = overlays.popoverController;
exports.toastController = overlays.toastController;
Object.defineProperty(exports, 'MedFontSize', {
  enumerable: true,
  get: function () {
    return fontSize_enum.MedFontSize;
  }
});
Object.defineProperty(exports, 'MedSkin', {
  enumerable: true,
  get: function () {
    return skin_enum.MedSkin;
  }
});
Object.defineProperty(exports, 'RateStatus', {
  enumerable: true,
  get: function () {
    return medRateLike_enum.RateStatus;
  }
});
exports.getMode = getMode;
exports.setupConfig = setupConfig;
