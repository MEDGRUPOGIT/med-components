/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const animation = require('./animation-9b401d39.js');
const index = require('./index-6bb6b651.js');
const ios_transition = require('./ios.transition-9624a175.js');
const md_transition = require('./md.transition-786baf9a.js');
const cubicBezier = require('./cubic-bezier-f2dccc53.js');
const index$1 = require('./index-d1b59ffa.js');
const ionicGlobal = require('./ionic-global-c70c3fb5.js');
const helpers = require('./helpers-76bb7efb.js');
const config = require('./config-4f60b98a.js');
const theme = require('./theme-d1c573d2.js');
const index$2 = require('./index-96a721a7.js');
const overlays = require('./overlays-8285b485.js');
const type_enum = require('./type.enum-2381dd49.js');
const plusminus_enum = require('./plusminus.enum-9f20406a.js');
const rateLike_enum = require('./rate-like.enum-cbcc78e5.js');
require('./index-c8d52405.js');
require('./index-71f41461.js');
require('./gesture-controller-c40c045a.js');
require('./hardware-back-button-76833cac.js');
require('./index-5915f9b3.js');
require('./framework-delegate-1c29b14a.js');

const IonicSlides = (opts) => {
    const { swiper, extendParams } = opts;
    const slidesParams = {
        effect: undefined,
        direction: 'horizontal',
        initialSlide: 0,
        loop: false,
        parallax: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 300,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        touchEventsTarget: 'container',
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        autoHeight: false,
        setWrapperSize: false,
        zoom: {
            maxRatio: 3,
            minRatio: 1,
            toggle: false,
        },
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        touchStartPreventDefault: false,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchReleaseOnEdges: false,
        iOSEdgeSwipeDetection: false,
        iOSEdgeSwipeThreshold: 20,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        loopAdditionalSlides: 0,
        noSwiping: true,
        runCallbacksOnInit: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
        },
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        fadeEffect: {
            crossFade: false,
        },
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
        },
    };
    if (swiper.pagination) {
        slidesParams.pagination = {
            type: 'bullets',
            clickable: false,
            hideOnClick: false,
        };
    }
    if (swiper.scrollbar) {
        slidesParams.scrollbar = {
            hide: true,
        };
    }
    extendParams(slidesParams);
};

exports.createAnimation = animation.createAnimation;
exports.LIFECYCLE_DID_ENTER = index.LIFECYCLE_DID_ENTER;
exports.LIFECYCLE_DID_LEAVE = index.LIFECYCLE_DID_LEAVE;
exports.LIFECYCLE_WILL_ENTER = index.LIFECYCLE_WILL_ENTER;
exports.LIFECYCLE_WILL_LEAVE = index.LIFECYCLE_WILL_LEAVE;
exports.LIFECYCLE_WILL_UNLOAD = index.LIFECYCLE_WILL_UNLOAD;
exports.getIonPageElement = index.getIonPageElement;
exports.iosTransitionAnimation = ios_transition.iosTransitionAnimation;
exports.mdTransitionAnimation = md_transition.mdTransitionAnimation;
exports.getTimeGivenProgression = cubicBezier.getTimeGivenProgression;
exports.createGesture = index$1.createGesture;
exports.getPlatforms = ionicGlobal.getPlatforms;
exports.initialize = ionicGlobal.initialize;
exports.isPlatform = ionicGlobal.isPlatform;
exports.componentOnReady = helpers.componentOnReady;
exports.IonicSafeString = config.IonicSafeString;
exports.getMode = config.getMode;
exports.setupConfig = config.setupConfig;
exports.openURL = theme.openURL;
exports.menuController = index$2.menuController;
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
exports.IonicSlides = IonicSlides;
