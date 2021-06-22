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
})(MedColors || (MedColors = {}));

export { MedColors, getMode, setupConfig };
