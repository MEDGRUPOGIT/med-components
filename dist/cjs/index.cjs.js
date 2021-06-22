'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const animation = require('./animation-dadce649.js');
const ios_transition = require('./ios.transition-0153bb6e.js');
const md_transition = require('./md.transition-559b98c6.js');
const cubicBezier = require('./cubic-bezier-6f49c00a.js');
const index = require('./index-adf3c519.js');
const ionicGlobal = require('./ionic-global-926d5da1.js');
const helpers = require('./helpers-ab0db03b.js');
const index$1 = require('./index-099f2bcb.js');
const index$2 = require('./index-fb3f70cd.js');
const index$3 = require('./index-ffeb9370.js');
const overlays = require('./overlays-a806c884.js');
const fontSize_enum = require('./font-size.enum-b5379cd9.js');
const medRateLike_enum = require('./med-rate-like.enum-a90944f3.js');
require('./gesture-controller-bcfe01ec.js');
require('./index-a0a08b2a.js');
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
  // brand color
  MedColors["PRIMARY_DARKEST"] = "primary-darkest";
  MedColors["PRIMARY_DARK"] = "primary-dark";
  MedColors["PRIMARY_MEDIUM"] = "primary-medium";
  MedColors["PRIMARY_LIGHT"] = "primary-light";
  MedColors["PRIMARY_LIGHTEST"] = "primary-lightest";
  // aula color
  MedColors["AULA_DARKEST"] = "aula-darkest";
  MedColors["AULA_DARK"] = "aula-dark";
  MedColors["AULA_MEDIUM"] = "aula-medium";
  MedColors["AULA_LIGHT"] = "aula-light";
  MedColors["AULA_LIGHTEST"] = "aula-lightest";
  // material color
  MedColors["MATERIAL_DARKEST"] = "material-darkest";
  MedColors["MATERIAL_DARK"] = "material-dark";
  MedColors["MATERIAL_MEDIUM"] = "material-medium";
  MedColors["MATERIAL_LIGHT"] = "material-light";
  MedColors["MATERIAL_LIGHTEST"] = "material-lightest";
  // questões color
  MedColors["QUESTOES_DARKEST"] = "questoes-darkest";
  MedColors["QUESTOES_DARK"] = "questoes-dark";
  MedColors["QUESTOES_MEDIUM"] = "questoes-medium";
  MedColors["QUESTOES_LIGHT"] = "questoes-light";
  MedColors["QUESTOES_LIGHTEST"] = "questoes-lightest";
  // revalida color
  MedColors["REVALIDA_DARKEST"] = "revalida-darkest";
  MedColors["REVALIDA_DARK"] = "revalida-dark";
  MedColors["REVALIDA_MEDIUM"] = "revalida-medium";
  MedColors["REVALIDA_LIGHT"] = "revalida-light";
  MedColors["REVALIDA_LIGHTEST"] = "revalida-lightest";
  // provas & checklist color
  MedColors["PROVASCHECKLIST_DARKEST"] = "provaschecklist-darkest";
  MedColors["PROVASCHECKLIST_DARK"] = "provaschecklist-dark";
  MedColors["PROVASCHECKLIST_MEDIUM"] = "provaschecklist-medium";
  MedColors["PROVASCHECKLIST_LIGHT"] = "provaschecklist-light";
  MedColors["PROVASCHECKLIST_LIGHTEST"] = "provaschecklist-lightest";
  // neutral dark color
  MedColors["DARK_PRIME"] = "dark-prime";
  MedColors["DARK_40"] = "dark-40";
  MedColors["DARK_30"] = "dark-30";
  MedColors["DARK_20"] = "dark-20";
  MedColors["DARK_10"] = "dark-10";
  // neutral light color
  MedColors["LIGHT_PRIME"] = "light-prime";
  MedColors["LIGHT_40"] = "light-40";
  MedColors["LIGHT_30"] = "light-30";
  MedColors["LIGHT_20"] = "light-20";
  MedColors["LIGHT_10"] = "light-10";
  // feedback warning color
  MedColors["WARNING_DARKEST"] = "warning-darkest";
  MedColors["WARNING_DARK"] = "warning-dark";
  MedColors["WARNING_MEDIUM"] = "warning-medium";
  MedColors["WARNING_LIGHT"] = "warning-light";
  MedColors["WARNING_LIGHTEST"] = "warning-lightest";
  // feedback warning color
  MedColors["ERROR_DARKEST"] = "error-darkest";
  MedColors["ERROR_DARK"] = "error-dark";
  MedColors["ERROR_MEDIUM"] = "error-medium";
  MedColors["ERROR_LIGHT"] = "error-light";
  MedColors["ERROR_LIGHTEST"] = "error-lightest";
  // feedback success color
  MedColors["SUCCESS_DARKEST"] = "success-darkest";
  MedColors["SUCCESS_DARK"] = "success-dark";
  MedColors["SUCCESS_MEDIUM"] = "success-medium";
  MedColors["SUCCESS_LIGHT"] = "success-light";
  MedColors["SUCCESS_LIGHTEST"] = "success-lightest";
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
Object.defineProperty(exports, 'RateStatus', {
  enumerable: true,
  get: function () {
    return medRateLike_enum.RateStatus;
  }
});
exports.getMode = getMode;
exports.setupConfig = setupConfig;
