var __awaiter=this&&this.__awaiter||function(e,a,i,t){function n(e){return e instanceof i?e:new i((function(a){a(e)}))}return new(i||(i=Promise))((function(i,r){function s(e){try{d(t.next(e))}catch(a){r(a)}}function o(e){try{d(t["throw"](e))}catch(a){r(a)}}function d(e){e.done?i(e.value):n(e.value).then(s,o)}d((t=t.apply(e,a||[])).next())}))};var __generator=this&&this.__generator||function(e,a){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,n,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(a){return d([e,a])}}function d(s){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,n&&(r=s[0]&2?n["return"]:s[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;if(n=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;n=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(s[0]===6&&i.label<r[1]){i.label=r[1];r=s;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(s);break}if(r[2])i.ops.pop();i.trys.pop();continue}s=a.call(e,i)}catch(o){s=[6,o];n=0}finally{t=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-cc3b12d0.system.js","./p-1ceaabb2.system.js","./p-419e9d85.system.js","./p-c3c4a6ce.system.js","./p-27c73f6b.system.js","./p-e25d7db1.system.js","./p-79e61ff5.system.js","./p-df10fc64.system.js","./p-d1da733b.system.js","./p-76b438d9.system.js","./p-ca897b4d.system.js","./p-3e3fb6ce.system.js"],(function(e){"use strict";var a,i,t,n,r,s,o,d,p,m,l,x,c,h,f,g,u,b,v,w,y,k;return{setters:[function(e){a=e.r;i=e.e;t=e.c;n=e.h;r=e.H;s=e.i},function(e){o=e.b;d=e.c},function(e){p=e.a;m=e.d},function(e){l=e.B;x=e.e;c=e.d;h=e.h;f=e.f;g=e.g},function(e){u=e.g},function(e){b=e.e},function(e){v=e.c},function(e){w=e.g},function(e){y=e.createGesture},function(e){k=e.j},function(){},function(){}],execute:function(){var E={MIN_PRESENTING_SCALE:.93};var S=function(e,a,i){var t=e.offsetHeight;var n=false;var r=function(e){var a=e.event.target;if(a===null||!a.closest){return true}var i=a.closest("ion-content");if(i===null){return true}return false};var s=function(){a.progressStart(true,n?1:0)};var o=function(e){var i=k(1e-4,e.deltaY/t,.9999);a.progressStep(i)};var d=function(e){var r=e.velocityY;var s=k(1e-4,e.deltaY/t,.9999);var o=(e.deltaY+r*1e3)/t;var d=o>=.5;var m=d?-.001:.001;if(!d){a.easing("cubic-bezier(1, 0, 0.68, 0.28)");m+=w([0,0],[1,0],[.68,.28],[1,1],s)[0]}else{a.easing("cubic-bezier(0.32, 0.72, 0, 1)");m+=w([0,0],[.32,.72],[0,1],[1,1],s)[0]}var l=d?q(s*t,r):q((1-s)*t,r);n=d;p.enable(false);a.onFinish((function(){if(!d){p.enable(true)}})).progressEnd(d?1:0,m,l);if(d){i()}};var p=y({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:r,onStart:s,onMove:o,onEnd:d});return p};var q=function(e,a){return k(400,e/Math.abs(a*1.1),500)};var z=function(e,a){var i=v().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var t=v().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var n=v().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(t);if(a){var r=window.innerWidth<768;var s=a.tagName==="ION-MODAL"&&a.presentingElement!==undefined;var o=v().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var d=document.body;if(r){var p=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var m=s?"-10px":p;var l=E.MIN_PRESENTING_SCALE;var x="translateY("+m+") scale("+l+")";o.afterStyles({transform:x}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:x,borderRadius:"10px 10px 0 0"}]);n.addAnimation(o)}else{n.addAnimation(i);if(!s){t.fromTo("opacity","0","1")}else{var l=s?E.MIN_PRESENTING_SCALE:1;var x="translateY(-10px) scale("+l+")";o.afterStyles({transform:x}).addElement(a.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:x}]);var c=v().afterStyles({transform:x}).addElement(a.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:x}]);n.addAnimation([o,c])}}}else{n.addAnimation(i)}return n};var D=function(e,a,i){if(i===void 0){i=500}var t=v().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var n=v().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var r=v().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(n);if(a){var s=window.innerWidth<768;var o=a.tagName==="ION-MODAL"&&a.presentingElement!==undefined;var d=v().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}a.style.setProperty("overflow","");var i=Array.from(p.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(i<=1){p.style.setProperty("background-color","")}}));var p=document.body;if(s){var m=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var l=o?"-10px":m;var x=E.MIN_PRESENTING_SCALE;var c="translateY("+l+") scale("+x+")";d.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:c,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);r.addAnimation(d)}else{r.addAnimation(t);if(!o){n.fromTo("opacity","1","0")}else{var x=o?E.MIN_PRESENTING_SCALE:1;var c="translateY(-10px) scale("+x+")";d.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var h=v().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);r.addAnimation([d,h])}}}else{r.addAnimation(t)}return r};var _=function(e){var a=v();var i=v();var t=v();i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);t.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return a.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,t])};var A=function(e){var a=v();var i=v();var t=v();var n=e.querySelector(".modal-wrapper");i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);t.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return a.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,t])};var C='.sc-ion-modal-ios:root{--med-font-family-brand:"fsemeric";--med-font-family-base:"fsemeric";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}.sc-ion-modal-ios:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}.sc-ion-modal-ios:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}.sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:2px}.sc-ion-modal-ios-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}@media only screen and (min-width: 768px) and (min-height: 600px){.med-image-zoom.sc-ion-modal-ios-h{--width:100%;--height:100%}}@media only screen and (min-width: 768px) and (min-height: 768px){.med-image-zoom.sc-ion-modal-ios-h{--width:100%;--height:100%}}';var T='.sc-ion-modal-md:root{--med-font-family-brand:"fsemeric";--med-font-family-base:"fsemeric";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}.sc-ion-modal-md:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}.sc-ion-modal-md:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}.sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}@media only screen and (min-width: 768px) and (min-height: 600px){.med-image-zoom.sc-ion-modal-md-h{--width:100%;--height:100%}}@media only screen and (min-width: 768px) and (min-height: 768px){.med-image-zoom.sc-ion-modal-md-h{--width:100%;--height:100%}}';var Y=e("ion_modal",function(){function e(e){var t=this;a(this,e);this.didPresent=i(this,"ionModalDidPresent",7);this.willPresent=i(this,"ionModalWillPresent",7);this.willDismiss=i(this,"ionModalWillDismiss",7);this.didDismiss=i(this,"ionModalDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.onBackdropTap=function(){t.dismiss(undefined,l)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();t.dismiss()};this.onLifecycle=function(e){var a=t.usersElement;var i=M[e.type];if(a&&i){var n=new CustomEvent(i,{bubbles:false,cancelable:false,detail:e.detail});a.dispatchEvent(n)}}}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.connectedCallback=function(){x(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,a,i;var n=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});i=this;return[4,p(this.delegate,e,this.component,["ion-page"],a)];case 1:i.usersElement=r.sent();return[4,b(this.usersElement)];case 2:r.sent();t((function(){return n.el.classList.add("show-modal")}));return[4,c(this,"modalEnter",z,_,this.presentingElement)];case 3:r.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(o(this)!=="ios"){return}var a=this.leaveAnimation||d.get("modalLeave",D);var i=this.animation=a(this.el,this.presentingElement);this.gesture=S(this.el,i,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,a){return __awaiter(this,void 0,void 0,(function(){var i,t;return __generator(this,(function(n){switch(n.label){case 0:if(this.gestureAnimationDismissing&&a!=="gesture"){return[2,false]}i=h.get(this)||[];return[4,f(this,e,a,"modalLeave",D,A,this.presentingElement)];case 1:t=n.sent();if(!t)return[3,3];return[4,m(this.delegate,this.usersElement)];case 2:n.sent();if(this.animation){this.animation.destroy()}i.forEach((function(e){return e.destroy()}));n.label=3;case 3:this.animation=undefined;return[2,t]}}))}))};e.prototype.onDidDismiss=function(){return g(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return g(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e;var a=o(this);return n(r,{"no-router":true,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[a]=true,e["modal-card"]=this.presentingElement!==undefined&&a==="ios",e),u(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},n("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a==="ios"&&n("div",{class:"modal-shadow"}),n("div",{tabindex:"0"}),n("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),n("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return e}());var M={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};Y.style={ios:C,md:T}}}}));