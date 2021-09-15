'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const animation = require('./animation-dadce649.js');
const ios_transition = require('./ios.transition-d78dff5b.js');
const md_transition = require('./md.transition-8a1ac5c9.js');
const cubicBezier = require('./cubic-bezier-6f49c00a.js');
const index = require('./index-adf3c519.js');
const ionicGlobal = require('./ionic-global-c609be80.js');
const helpers = require('./helpers-ab0db03b.js');
const index$1 = require('./index-099f2bcb.js');
const index$2 = require('./index-a0e14e16.js');
const index$3 = require('./index-0633c29d.js');
const overlays = require('./overlays-738b020e.js');
const fontSize_enum = require('./font-size.enum-941770af.js');
const skin_enum = require('./skin.enum-96db9662.js');
const medRateLike_enum = require('./med-rate-like.enum-e8f4b5f3.js');
require('./gesture-controller-bcfe01ec.js');
require('./index-bc2e4509.js');
require('./hardware-back-button-e370df1e.js');

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

exports.MedColors = void 0;
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
