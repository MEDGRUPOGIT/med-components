/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-ed8bd7f8.system.js","./p-d6089e32.system.js","./p-36e78afb.system.js","./p-9eb92442.system.js"],(function(e){"use strict";var n,t;return{setters:[function(e){n=e.c},function(e){t=e.g},function(){},function(){}],execute:function(){var a=e("mdTransitionAnimation",(function(e,a){var i="40px";var r="0px";var o=a.direction==="back";var s=a.enteringEl;var c=a.leavingEl;var d=t(s);var f=d.querySelector("ion-toolbar");var l=n();l.addElement(d).fill("both").beforeRemoveClass("ion-page-invisible");if(o){l.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{l.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(".concat(i,")"),"translateY(".concat(r,")")).fromTo("opacity",.01,1)}if(f){var u=n();u.addElement(f);l.addAnimation(u)}if(c&&o){l.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var m=n();m.addElement(t(c)).onFinish((function(e){if(e===1&&m.elements.length>0){m.elements[0].style.setProperty("display","none")}})).fromTo("transform","translateY(".concat(r,")"),"translateY(".concat(i,")")).fromTo("opacity",1,0);l.addAnimation(m)}return l}))}}}));