System.register(["./p-059709b3.system.js","./p-76b438d9.system.js","./p-79e61ff5.system.js","./p-a7e01e7d.system.js"],(function(e){"use strict";var n,t;return{setters:[function(){},function(){},function(e){n=e.c},function(e){t=e.g}],execute:function(){var i=e("mdTransitionAnimation",(function(e,i){var r="40px";var a="0px";var o=i.direction==="back";var s=i.enteringEl;var c=i.leavingEl;var f=t(s);var l=f.querySelector("ion-toolbar");var u=n();u.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible");if(o){u.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{u.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+r+")","translateY("+a+")").fromTo("opacity",.01,1)}if(l){var d=n();d.addElement(l);u.addAnimation(d)}if(c&&o){u.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var m=n();m.addElement(t(c)).onFinish((function(e){if(e===1&&m.elements.length>0){m.elements[0].style.setProperty("display","none")}})).fromTo("transform","translateY("+a+")","translateY("+r+")").fromTo("opacity",1,0);u.addAnimation(m)}return u}))}}}));