var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{s(r.next(e))}catch(t){o(t)}}function u(e){try{s(r["throw"](e))}catch(t){o(t)}}function s(e){e.done?n(e.value):i(e.value).then(a,u)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return s([e,t])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};System.register(["./p-2474731a.system.js","./p-ca897b4d.system.js","./p-76b438d9.system.js"],(function(e){"use strict";var t,n,r,i,o,a,u;return{setters:[function(e){t=e.b;n=e.c},function(e){r=e.OVERLAY_BACK_BUTTON_PRIORITY},function(e){i=e.c;o=e.a;a=e.b;u=e.g}],execute:function(){var s=this;var c=0;var f=e("h",new WeakMap);var l=function(e){return{create:function(t){return w(e,t)},dismiss:function(t,n,r){return P(document,t,n,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,D(document,e)]}))}))}}};var d=e("a",l("ion-alert"));var v=e("b",l("ion-action-sheet"));var p=e("l",l("ion-loading"));var h=e("m",l("ion-modal"));var m=e("p",l("ion-picker"));var y=e("c",l("ion-popover"));var b=e("t",l("ion-toast"));var _=e("e",(function(e){if(typeof document!=="undefined"){S(document)}var t=c++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="ion-overlay-"+t}}));var w=function(e,t){if(typeof customElements!=="undefined"){return customElements.whenDefined(e).then((function(){var n=document.createElement(e);n.classList.add("overlay-hidden");Object.assign(n,t);L(document).appendChild(n);return new Promise((function(e){return i(n,e)}))}))}return Promise.resolve()};var g='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';var x="input:not([type=hidden]), textarea, button, select";var A=function(e,t){var n=e.querySelector(g);var r=n&&n.shadowRoot;if(r){n=r.querySelector(x)||n}if(n){n.focus()}else{t.focus()}};var k=function(e,t){var n=Array.from(e.querySelectorAll(g));var r=n.length>0?n[n.length-1]:null;var i=r&&r.shadowRoot;if(i){r=i.querySelector(x)||r}if(r){r.focus()}else{t.focus()}};var E=function(e,t){var n=D(t);var r=e.target;if(!n||!r){return}if(n===r){n.lastFocus=undefined}else{var i=u(n);if(!i.contains(r)){return}var o=i.querySelector(".ion-overlay-wrapper");if(!o){return}if(o.contains(r)){n.lastFocus=r}else{var a=n.lastFocus;A(o,n);if(a===t.activeElement){k(o,n)}n.lastFocus=t.activeElement}}};var S=function(e){if(c===0){c=1;e.addEventListener("focus",(function(t){return E(t,e)}),true);e.addEventListener("ionBackButton",(function(t){var n=D(e);if(n&&n.backdropDismiss){t.detail.register(r,(function(){return n.dismiss(undefined,G)}))}}));e.addEventListener("keyup",(function(t){if(t.key==="Escape"){var n=D(e);if(n&&n.backdropDismiss){n.dismiss(undefined,G)}}}))}};var P=function(e,t,n,r,i){var o=D(e,r,i);if(!o){return Promise.reject("overlay does not exist")}return o.dismiss(t,n)};var q=function(e,t){if(t===undefined){t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(t)).filter((function(e){return e.overlayIndex>0}))};var D=function(e,t,n){var r=q(e,t);return n===undefined?r[r.length-1]:r.find((function(e){return e.id===n}))};var R=e("d",(function(e,r,i,o,a){return __awaiter(s,void 0,void 0,(function(){var u,s,c;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();u=t(e);s=e.enterAnimation?e.enterAnimation:n.get(r,u==="ios"?i:o);return[4,O(e,s,e.el,a)];case 1:c=f.sent();if(c){e.didPresent.emit()}if(e.el.tagName!=="ION-TOAST"){T(e.el)}if(e.keyboardClose){e.el.focus()}return[2]}}))}))}));var T=function(e){return __awaiter(s,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:t=document.activeElement;if(!t){return[2]}n=t&&t.shadowRoot;if(n){t=n.querySelector(x)||t}return[4,e.onDidDismiss()];case 1:r.sent();t.focus();return[2]}}))}))};var B=e("f",(function(e,r,i,o,a,u,c){return __awaiter(s,void 0,void 0,(function(){var s,l,d;return __generator(this,(function(v){switch(v.label){case 0:if(!e.presented){return[2,false]}e.presented=false;v.label=1;case 1:v.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:r,role:i});s=t(e);l=e.leaveAnimation?e.leaveAnimation:n.get(o,s==="ios"?a:u);if(!(i!=="gesture"))return[3,3];return[4,O(e,l,e.el,c)];case 2:v.sent();v.label=3;case 3:e.didDismiss.emit({data:r,role:i});f.delete(e);return[3,5];case 4:d=v.sent();console.error(d);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var L=function(e){return e.querySelector("ion-app")||e.body};var O=function(e,t,r,i){return __awaiter(s,void 0,void 0,(function(){var o,a,u;return __generator(this,(function(s){switch(s.label){case 0:r.classList.remove("overlay-hidden");o=r.shadowRoot||e.el;a=t(o,i);if(!e.animated||!n.getBoolean("animated",true)){a.duration(0)}if(e.keyboardClose){a.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}u=f.get(e)||[];f.set(e,__spreadArray(__spreadArray([],u),[a]));return[4,a.play()];case 1:s.sent();return[2,true]}}))}))};var j=e("g",(function(e,t){var n;var r=new Promise((function(e){return n=e}));I(e,t,(function(e){n(e.detail)}));return r}));var I=function(e,t,n){var r=function(i){a(e,t,r);n(i)};o(e,t,r)};var C=e("i",(function(e){return e==="cancel"||e===G}));var F=function(e){return e()};var N=e("s",(function(e,t){if(typeof e==="function"){var r=n.get("_zoneGate",F);return r((function(){try{return e(t)}catch(n){console.error(n)}}))}return undefined}));var G=e("B","backdrop")}}}));