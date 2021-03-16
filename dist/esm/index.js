import './index-3ccd7557.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global-cc7644a8.js';
export { c as componentOnReady } from './helpers-83546701.js';
export { c as createAnimation } from './animation-e3d87e79.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-be1366d0.js';
export { iosTransitionAnimation } from './ios.transition-2e9646b5.js';
export { mdTransitionAnimation } from './md.transition-e2a63d77.js';
export { g as getTimeGivenProgression } from './cubic-bezier-c3ea3c34.js';
import './gesture-controller-cb973372.js';
export { createGesture } from './index-a148eeb5.js';
export { I as IonicSafeString } from './index-504c5ae5.js';
import './hardware-back-button-3fda9f12.js';
export { m as menuController } from './index-335a34ff.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-23b0f56c.js';

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
