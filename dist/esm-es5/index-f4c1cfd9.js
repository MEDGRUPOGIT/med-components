import{__awaiter,__generator}from"tslib";import{MENU_BACK_BUTTON_PRIORITY}from"./hardware-back-button-3fda9f12.js";import{c as componentOnReady}from"./helpers-6b411283.js";import{b as getIonMode}from"./ionic-global-10d9ffcf.js";import{c as createAnimation}from"./animation-f0f182d7.js";var baseAnimation=function(n){return createAnimation().duration(n?400:300)};var menuOverlayAnimation=function(n){var e;var r;var t=n.width+8;var i=createAnimation();var a=createAnimation();if(n.isEndSide){e=t+"px";r="0px"}else{e=-t+"px";r="0px"}i.addElement(n.menuInnerEl).fromTo("transform","translateX("+e+")","translateX("+r+")");var o=getIonMode(n);var u=o==="ios";var s=u?.2:.25;a.addElement(n.backdropEl).fromTo("opacity",.01,s);return baseAnimation(u).addAnimation([i,a])};var menuPushAnimation=function(n){var e;var r;var t=getIonMode(n);var i=n.width;if(n.isEndSide){e=-i+"px";r=i+"px"}else{e=i+"px";r=-i+"px"}var a=createAnimation().addElement(n.menuInnerEl).fromTo("transform","translateX("+r+")","translateX(0px)");var o=createAnimation().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")");var u=createAnimation().addElement(n.backdropEl).fromTo("opacity",.01,.32);return baseAnimation(t==="ios").addAnimation([a,o,u])};var menuRevealAnimation=function(n){var e=getIonMode(n);var r=n.width*(n.isEndSide?-1:1)+"px";var t=createAnimation().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+r+")");return baseAnimation(e==="ios").addAnimation(t)};var createMenuController=function(){var n=new Map;var e=[];var r=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,c(n)];case 1:e=r.sent();if(e){return[2,e.open()]}return[2,false]}}))}))};var t=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,n!==undefined?c(n):f()];case 1:e=r.sent();if(e!==undefined){return[2,e.close()]}return[2,false]}}))}))};var i=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,c(n)];case 1:e=r.sent();if(e){return[2,e.toggle()]}return[2,false]}}))}))};var a=function(n,e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:r=t.sent();if(r){r.disabled=!n}return[2,r]}}))}))};var o=function(n,e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:r=t.sent();if(r){r.swipeGesture=n}return[2,r]}}))}))};var u=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e,e;return __generator(this,(function(r){switch(r.label){case 0:if(!(n!=null))return[3,2];return[4,c(n)];case 1:e=r.sent();return[2,e!==undefined&&e.isOpen()];case 2:return[4,f()];case 3:e=r.sent();return[2,e!==undefined]}}))}))};var s=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,c(n)];case 1:e=r.sent();if(e){return[2,!e.disabled]}return[2,false]}}))}))};var c=function(n){return __awaiter(void 0,void 0,void 0,(function(){var r,t;return __generator(this,(function(i){switch(i.label){case 0:return[4,O()];case 1:i.sent();if(n==="start"||n==="end"){r=E((function(e){return e.side===n&&!e.disabled}));if(r){return[2,r]}return[2,E((function(e){return e.side===n}))]}else if(n!=null){return[2,E((function(e){return e.menuId===n}))]}t=E((function(n){return!n.disabled}));if(t){return[2,t]}return[2,e.length>0?e[0].el:undefined]}}))}))};var f=function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,O()];case 1:n.sent();return[2,w()]}}))}))};var d=function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,O()];case 1:n.sent();return[2,b()]}}))}))};var v=function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,O()];case 1:n.sent();return[2,A()]}}))}))};var l=function(e,r){n.set(e,r)};var m=function(n){if(e.indexOf(n)<0){if(!n.disabled){p(n)}e.push(n)}};var _=function(n){var r=e.indexOf(n);if(r>-1){e.splice(r,1)}};var p=function(n){var r=n.side;e.filter((function(e){return e.side===r&&e!==n})).forEach((function(n){return n.disabled=true}))};var h=function(n,e,r){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:if(A()){return[2,false]}if(!e)return[3,3];return[4,f()];case 1:t=i.sent();if(!(t&&n.el!==t))return[3,3];return[4,t.setOpen(false,false)];case 2:i.sent();i.label=3;case 3:return[2,n._setOpen(e,r)]}}))}))};var g=function(e,r){var t=n.get(e);if(!t){throw new Error("animation not registered")}var i=t(r);return i};var w=function(){return E((function(n){return n._isOpen}))};var b=function(){return e.map((function(n){return n.el}))};var A=function(){return e.some((function(n){return n.isAnimating}))};var E=function(n){var r=e.find(n);if(r!==undefined){return r.el}return undefined};var O=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(n){return new Promise((function(e){return componentOnReady(n,e)}))})))};l("reveal",menuRevealAnimation);l("push",menuPushAnimation);l("overlay",menuOverlayAnimation);if(typeof document!=="undefined"){document.addEventListener("ionBackButton",(function(n){var e=w();if(e){n.detail.register(MENU_BACK_BUTTON_PRIORITY,(function(){return e.close()}))}}))}return{registerAnimation:l,get:c,getMenus:d,getOpen:f,isEnabled:s,swipeGesture:o,isAnimating:v,isOpen:u,enable:a,toggle:i,close:t,open:r,_getOpenSync:w,_createAnimation:g,_register:m,_unregister:_,_setOpen:h,_setActiveMenu:p}};var menuController=createMenuController();export{menuController as m};