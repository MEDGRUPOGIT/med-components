var __awaiter=this&&this.__awaiter||function(e,t,r,a){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function n(e){try{d(a.next(e))}catch(t){o(t)}}function s(e){try{d(a["throw"](e))}catch(t){o(t)}}function d(e){e.done?r(e.value):i(e.value).then(n,s)}d((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,i,o,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(e){return function(t){return d([e,t])}}function d(n){if(a)throw new TypeError("Generator is already executing.");while(r)try{if(a=1,i&&(o=n[0]&2?i["return"]:n[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;if(i=0,o)n=[n[0]&2,o.value];switch(n[0]){case 0:case 1:o=n;break;case 4:r.label++;return{value:n[1],done:false};case 5:r.label++;i=n[1];n=[0];continue;case 7:n=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!o||n[1]>o[0]&&n[1]<o[3])){r.label=n[1];break}if(n[0]===6&&r.label<o[1]){r.label=o[1];o=n;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(n);break}if(o[2])r.ops.pop();r.trys.pop();continue}n=t.call(e,r)}catch(s){n=[6,s];i=0}finally{a=o=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-cc3b12d0.system.js","./p-1ceaabb2.system.js","./p-419e9d85.system.js","./p-c3c4a6ce.system.js","./p-513845f9.system.js","./p-e25d7db1.system.js","./p-79e61ff5.system.js","./p-df10fc64.system.js","./p-d1da733b.system.js","./p-76b438d9.system.js","./p-ca897b4d.system.js","./p-3e3fb6ce.system.js"],(function(e){"use strict";var t,r,a,i,o,n,s,d,l,c,m,f,h,p,u,v,b,y,w,g,x,k;return{setters:[function(e){t=e.r;r=e.e;a=e.c;i=e.h;o=e.H;n=e.i},function(e){s=e.b;d=e.c},function(e){l=e.a;c=e.d},function(e){m=e.B;f=e.e;h=e.d;p=e.h;u=e.f;v=e.g},function(e){b=e.g},function(e){y=e.e},function(e){w=e.c},function(e){g=e.g},function(e){x=e.createGesture},function(e){k=e.j},function(){},function(){}],execute:function(){var E={MIN_PRESENTING_SCALE:.93};var S=function(e,t,r){var a=e.offsetHeight;var i=false;var o=function(e){var t=e.event.target;if(t===null||!t.closest){return true}var r=t.closest("ion-content");if(r===null){return true}return false};var n=function(){t.progressStart(true,i?1:0)};var s=function(e){var r=k(1e-4,e.deltaY/a,.9999);t.progressStep(r)};var d=function(e){var o=e.velocityY;var n=k(1e-4,e.deltaY/a,.9999);var s=(e.deltaY+o*1e3)/a;var d=s>=.5;var c=d?-.001:.001;if(!d){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=g([0,0],[1,0],[.68,.28],[1,1],n)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=g([0,0],[.32,.72],[0,1],[1,1],n)[0]}var m=d?D(n*a,o):D((1-n)*a,o);i=d;l.enable(false);t.onFinish((function(){if(!d){l.enable(true)}})).progressEnd(d?1:0,c,m);if(d){r()}};var l=x({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:o,onStart:n,onMove:s,onEnd:d});return l};var D=function(e,t){return k(400,e/Math.abs(t*1.1),500)};var _=function(e,t){var r=w().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var a=w().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var i=w().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(t){var o=window.innerWidth<768;var n=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var s=w().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var d=document.body;if(o){var l=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var c=n?"-10px":l;var m=E.MIN_PRESENTING_SCALE;var f="translateY("+c+") scale("+m+")";s.afterStyles({transform:f}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:f,borderRadius:"10px 10px 0 0"}]);i.addAnimation(s)}else{i.addAnimation(r);if(!n){a.fromTo("opacity","0","1")}else{var m=n?E.MIN_PRESENTING_SCALE:1;var f="translateY(-10px) scale("+m+")";s.afterStyles({transform:f}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:f}]);var h=w().afterStyles({transform:f}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:f}]);i.addAnimation([s,h])}}}else{i.addAnimation(r)}return i};var A=function(e,t,r){if(r===void 0){r=500}var a=w().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var i=w().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var o=w().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(i);if(t){var n=window.innerWidth<768;var s=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var d=w().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","");var r=Array.from(l.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(r<=1){l.style.setProperty("background-color","")}}));var l=document.body;if(n){var c=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var m=s?"-10px":c;var f=E.MIN_PRESENTING_SCALE;var h="translateY("+m+") scale("+f+")";d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);o.addAnimation(d)}else{o.addAnimation(a);if(!s){i.fromTo("opacity","1","0")}else{var f=s?E.MIN_PRESENTING_SCALE:1;var h="translateY(-10px) scale("+f+")";d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var p=w().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);o.addAnimation([d,p])}}}else{o.addAnimation(a)}return o};var C=function(e){var t=w();var r=w();var a=w();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);a.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,a])};var T=function(e){var t=w();var r=w();var a=w();var i=e.querySelector(".modal-wrapper");r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);a.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,a])};var Y=".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:2px}.sc-ion-modal-ios-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}@media only screen and (min-width: 768px) and (min-height: 600px){.med-image-zoom.sc-ion-modal-ios-h{--width:100%;--height:100%}}@media only screen and (min-width: 768px) and (min-height: 768px){.med-image-zoom.sc-ion-modal-ios-h{--width:100%;--height:100%}}";var M=".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}@media only screen and (min-width: 768px) and (min-height: 600px){.med-image-zoom.sc-ion-modal-md-h{--width:100%;--height:100%}}@media only screen and (min-width: 768px) and (min-height: 768px){.med-image-zoom.sc-ion-modal-md-h{--width:100%;--height:100%}}";var P=e("ion_modal",function(){function e(e){var a=this;t(this,e);this.didPresent=r(this,"ionModalDidPresent",7);this.willPresent=r(this,"ionModalWillPresent",7);this.willDismiss=r(this,"ionModalWillDismiss",7);this.didDismiss=r(this,"ionModalDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.onBackdropTap=function(){a.dismiss(undefined,m)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();a.dismiss()};this.onLifecycle=function(e){var t=a.usersElement;var r=j[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.connectedCallback=function(){f(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;var i=this;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});r=this;return[4,l(this.delegate,e,this.component,["ion-page"],t)];case 1:r.usersElement=o.sent();return[4,y(this.usersElement)];case 2:o.sent();a((function(){return i.el.classList.add("show-modal")}));return[4,h(this,"modalEnter",_,C,this.presentingElement)];case 3:o.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(s(this)!=="ios"){return}var t=this.leaveAnimation||d.get("modalLeave",A);var r=this.animation=t(this.el,this.presentingElement);this.gesture=S(this.el,r,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,a;return __generator(this,(function(i){switch(i.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}r=p.get(this)||[];return[4,u(this,e,t,"modalLeave",A,T,this.presentingElement)];case 1:a=i.sent();if(!a)return[3,3];return[4,c(this.delegate,this.usersElement)];case 2:i.sent();if(this.animation){this.animation.destroy()}r.forEach((function(e){return e.destroy()}));i.label=3;case 3:this.animation=undefined;return[2,a]}}))}))};e.prototype.onDidDismiss=function(){return v(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return v(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e;var t=s(this);return i(o,{"no-router":true,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[t]=true,e["modal-card"]=this.presentingElement!==undefined&&t==="ios",e),b(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},i("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t==="ios"&&i("div",{class:"modal-shadow"}),i("div",{tabindex:"0"}),i("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),i("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return e}());var j={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};P.style={ios:Y,md:M}}}}));