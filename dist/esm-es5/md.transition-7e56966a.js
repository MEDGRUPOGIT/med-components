/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as createAnimation}from"./animation-dde8cc0d.js";import{g as getIonPageElement}from"./index-a97c95a7.js";import"./index-a5d50daf.js";import"./helpers-ae653409.js";import"./index-27668d5b.js";var mdTransitionAnimation=function(a,i){var n,e,t;var r="40px";var o="0px";var m=i.direction==="back";var c=i.enteringEl;var s=i.leavingEl;var l=getIonPageElement(c);var v=l.querySelector("ion-toolbar");var d=createAnimation();d.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible");if(m){d.duration(((n=i.duration)!==null&&n!==void 0?n:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{d.duration(((e=i.duration)!==null&&e!==void 0?e:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(".concat(r,")"),"translateY(".concat(o,")")).fromTo("opacity",.01,1)}if(v){var p=createAnimation();p.addElement(v);d.addAnimation(p)}if(s&&m){d.duration(((t=i.duration)!==null&&t!==void 0?t:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var b=createAnimation();b.addElement(getIonPageElement(s)).onFinish((function(a){if(a===1&&b.elements.length>0){b.elements[0].style.setProperty("display","none")}})).fromTo("transform","translateY(".concat(o,")"),"translateY(".concat(r,")")).fromTo("opacity",1,0);d.addAnimation(b)}return d};export{mdTransitionAnimation};