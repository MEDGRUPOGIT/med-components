import{g as getMode,s as setMode}from"./index-70672e81.js";var getPlatforms=function(t){return setupPlatforms(t)};var isPlatform=function(t,e){if(typeof t==="string"){e=t;t=undefined}return getPlatforms(t).includes(e)};var setupPlatforms=function(t){if(t===void 0){t=window}if(typeof t==="undefined"){return[]}t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;if(e==null){e=t.Ionic.platforms=detectPlatforms(t);e.forEach((function(e){return t.document.documentElement.classList.add("plt-"+e)}))}return e};var detectPlatforms=function(t){return Object.keys(PLATFORMS_MAP).filter((function(e){return PLATFORMS_MAP[e](t)}))};var isMobileWeb=function(t){return isMobile(t)&&!isHybrid(t)};var isIpad=function(t){if(testUserAgent(t,/iPad/i)){return true}if(testUserAgent(t,/Macintosh/i)&&isMobile(t)){return true}return false};var isIphone=function(t){return testUserAgent(t,/iPhone/i)};var isIOS=function(t){return testUserAgent(t,/iPhone|iPod/i)||isIpad(t)};var isAndroid=function(t){return testUserAgent(t,/android|sink/i)};var isAndroidTablet=function(t){return isAndroid(t)&&!testUserAgent(t,/mobile/i)};var isPhablet=function(t){var e=t.innerWidth;var n=t.innerHeight;var i=Math.min(e,n);var r=Math.max(e,n);return i>390&&i<520&&(r>620&&r<800)};var isTablet=function(t){var e=t.innerWidth;var n=t.innerHeight;var i=Math.min(e,n);var r=Math.max(e,n);return isIpad(t)||isAndroidTablet(t)||i>460&&i<820&&(r>780&&r<1400)};var isMobile=function(t){return matchMedia(t,"(any-pointer:coarse)")};var isDesktop=function(t){return!isMobile(t)};var isHybrid=function(t){return isCordova(t)||isCapacitorNative(t)};var isCordova=function(t){return!!(t["cordova"]||t["phonegap"]||t["PhoneGap"])};var isCapacitorNative=function(t){var e=t["Capacitor"];return!!(e&&e.isNative)};var isElectron=function(t){return testUserAgent(t,/electron/i)};var isPWA=function(t){return!!(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)};var testUserAgent=function(t,e){return e.test(t.navigator.userAgent)};var matchMedia=function(t,e){return t.matchMedia(e).matches};var PLATFORMS_MAP={ipad:isIpad,iphone:isIphone,ios:isIOS,android:isAndroid,phablet:isPhablet,tablet:isTablet,cordova:isCordova,capacitor:isCapacitorNative,electron:isElectron,pwa:isPWA,mobile:isMobile,mobileweb:isMobileWeb,desktop:isDesktop,hybrid:isHybrid};var Config=function(){function t(){this.m=new Map}t.prototype.reset=function(t){this.m=new Map(Object.entries(t))};t.prototype.get=function(t,e){var n=this.m.get(t);return n!==undefined?n:e};t.prototype.getBoolean=function(t,e){if(e===void 0){e=false}var n=this.m.get(t);if(n===undefined){return e}if(typeof n==="string"){return n==="true"}return!!n};t.prototype.getNumber=function(t,e){var n=parseFloat(this.m.get(t));return isNaN(n)?e!==undefined?e:NaN:n};t.prototype.set=function(t,e){this.m.set(t,e)};return t}();var config=new Config;var configFromSession=function(t){try{var e=t.sessionStorage.getItem(IONIC_SESSION_KEY);return e!==null?JSON.parse(e):{}}catch(n){return{}}};var saveConfig=function(t,e){try{t.sessionStorage.setItem(IONIC_SESSION_KEY,JSON.stringify(e))}catch(n){return}};var configFromURL=function(t){var e={};t.location.search.slice(1).split("&").map((function(t){return t.split("=")})).map((function(t){var e=t[0],n=t[1];return[decodeURIComponent(e),decodeURIComponent(n)]})).filter((function(t){var e=t[0];return startsWith(e,IONIC_PREFIX)})).map((function(t){var e=t[0],n=t[1];return[e.slice(IONIC_PREFIX.length),n]})).forEach((function(t){var n=t[0],i=t[1];e[n]=i}));return e};var startsWith=function(t,e){return t.substr(0,e.length)===e};var IONIC_PREFIX="ionic:";var IONIC_SESSION_KEY="ionic-persist-config";var defaultMode;var getIonMode=function(t){return t&&getMode(t)||defaultMode};var initialize=function(t){if(t===void 0){t={}}if(typeof window==="undefined"){return}var e=window.document;var n=window;var i=n.Ionic=n.Ionic||{};setupPlatforms(n);var r=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},configFromSession(n)),{persistConfig:false}),i.config),configFromURL(n)),t);config.reset(r);if(config.getBoolean("persistConfig")){saveConfig(n,r)}i.config=config;i.mode=defaultMode=config.get("mode",e.documentElement.getAttribute("mode")||(isPlatform(n,"ios")?"ios":"md"));config.set("mode",defaultMode);e.documentElement.setAttribute("mode",defaultMode);e.documentElement.classList.add(defaultMode);if(config.getBoolean("_testing")){config.set("animated",false)}var o=function(t){return t.tagName&&t.tagName.startsWith("ION-")};var a=function(t){return["ios","md"].includes(t)};setMode((function(t){while(t){var e=t.mode||t.getAttribute("mode");if(e){if(a(e)){return e}else if(o(t)){console.warn('Invalid ionic mode: "'+e+'", expected: "ios" or "md"')}}t=t.parentElement}return defaultMode}))};export{isPlatform as a,getIonMode as b,config as c,getPlatforms as g,initialize as i};