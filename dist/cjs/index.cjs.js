'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./index-2a75be79.js');
const ionicGlobal = require('./ionic-global-450feda2.js');
const helpers = require('./helpers-7fea0dcc.js');
const animation = require('./animation-2422f348.js');
const index$2 = require('./index-f166231e.js');
const ios_transition = require('./ios.transition-796d110c.js');
const md_transition = require('./md.transition-6798af6a.js');
const cubicBezier = require('./cubic-bezier-6f49c00a.js');
require('./gesture-controller-bcfe01ec.js');
const index = require('./index-adf3c519.js');
const index$1 = require('./index-099f2bcb.js');
require('./hardware-back-button-e370df1e.js');
const index$3 = require('./index-68bdd365.js');
const overlays = require('./overlays-3aa80d92.js');

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

exports.getPlatforms = ionicGlobal.getPlatforms;
exports.initialize = ionicGlobal.initialize;
exports.isPlatform = ionicGlobal.isPlatform;
exports.componentOnReady = helpers.componentOnReady;
exports.createAnimation = animation.createAnimation;
exports.LIFECYCLE_DID_ENTER = index$2.LIFECYCLE_DID_ENTER;
exports.LIFECYCLE_DID_LEAVE = index$2.LIFECYCLE_DID_LEAVE;
exports.LIFECYCLE_WILL_ENTER = index$2.LIFECYCLE_WILL_ENTER;
exports.LIFECYCLE_WILL_LEAVE = index$2.LIFECYCLE_WILL_LEAVE;
exports.LIFECYCLE_WILL_UNLOAD = index$2.LIFECYCLE_WILL_UNLOAD;
exports.iosTransitionAnimation = ios_transition.iosTransitionAnimation;
exports.mdTransitionAnimation = md_transition.mdTransitionAnimation;
exports.getTimeGivenProgression = cubicBezier.getTimeGivenProgression;
exports.createGesture = index.createGesture;
exports.IonicSafeString = index$1.IonicSafeString;
exports.menuController = index$3.menuController;
exports.actionSheetController = overlays.actionSheetController;
exports.alertController = overlays.alertController;
exports.loadingController = overlays.loadingController;
exports.modalController = overlays.modalController;
exports.pickerController = overlays.pickerController;
exports.popoverController = overlays.popoverController;
exports.toastController = overlays.toastController;
exports.getMode = getMode;
exports.setupConfig = setupConfig;
