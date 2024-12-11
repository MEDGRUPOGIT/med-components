/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const animation = require('./animation-a79926bc.js');
const ios_transition = require('./ios.transition-ac99481d.js');
const md_transition = require('./md.transition-815c68bf.js');
const cubicBezier = require('./cubic-bezier-b395a59d.js');
const index = require('./index-ff2c537e.js');
const ionicGlobal = require('./ionic-global-31ae4345.js');
const helpers = require('./helpers-a2cc981d.js');
const index$1 = require('./index-bdb474dc.js');
const index$2 = require('./index-bc955683.js');
const index$3 = require('./index-e1c6c339.js');
const overlays = require('./overlays-51bc752f.js');
const type_enum = require('./type.enum-d3bb3d86.js');
const plusminus_enum = require('./plusminus.enum-c18744cc.js');
const rateLike_enum = require('./rate-like.enum-13d0954f.js');
require('./gesture-controller-935821e0.js');
require('./index-a17b061b.js');
require('./hardware-back-button-bef7bb33.js');

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
Object.defineProperty(exports, 'BaseGap', {
  enumerable: true,
  get: function () {
    return type_enum.BaseGap;
  }
});
Object.defineProperty(exports, 'BaseRadius', {
  enumerable: true,
  get: function () {
    return type_enum.BaseRadius;
  }
});
Object.defineProperty(exports, 'BaseSpacing', {
  enumerable: true,
  get: function () {
    return type_enum.BaseSpacing;
  }
});
Object.defineProperty(exports, 'BreakPointNameEnum', {
  enumerable: true,
  get: function () {
    return type_enum.BreakPointNameEnum;
  }
});
Object.defineProperty(exports, 'BreakPointPixelEnum', {
  enumerable: true,
  get: function () {
    return type_enum.BreakPointPixelEnum;
  }
});
Object.defineProperty(exports, 'MedColors', {
  enumerable: true,
  get: function () {
    return type_enum.MedColors;
  }
});
Object.defineProperty(exports, 'MedFontSize', {
  enumerable: true,
  get: function () {
    return type_enum.MedFontSize;
  }
});
Object.defineProperty(exports, 'MedSkin', {
  enumerable: true,
  get: function () {
    return type_enum.MedSkin;
  }
});
Object.defineProperty(exports, 'MedType', {
  enumerable: true,
  get: function () {
    return type_enum.MedType;
  }
});
Object.defineProperty(exports, 'MedTypeTag', {
  enumerable: true,
  get: function () {
    return type_enum.MedTypeTag;
  }
});
Object.defineProperty(exports, 'TemplariosAvatarSize', {
  enumerable: true,
  get: function () {
    return type_enum.TemplariosAvatarSize;
  }
});
Object.defineProperty(exports, 'TemplariosBadgeSize', {
  enumerable: true,
  get: function () {
    return type_enum.TemplariosBadgeSize;
  }
});
Object.defineProperty(exports, 'TemplariosButtonSize', {
  enumerable: true,
  get: function () {
    return type_enum.TemplariosButtonSize;
  }
});
Object.defineProperty(exports, 'TemplariosChipSize', {
  enumerable: true,
  get: function () {
    return type_enum.TemplariosChipSize;
  }
});
Object.defineProperty(exports, 'TemplariosIconSize', {
  enumerable: true,
  get: function () {
    return type_enum.TemplariosIconSize;
  }
});
Object.defineProperty(exports, 'PlusMinusStatus', {
  enumerable: true,
  get: function () {
    return plusminus_enum.PlusMinusStatus;
  }
});
Object.defineProperty(exports, 'RateStatus', {
  enumerable: true,
  get: function () {
    return rateLike_enum.RateStatus;
  }
});
exports.getMode = getMode;
exports.setupConfig = setupConfig;
