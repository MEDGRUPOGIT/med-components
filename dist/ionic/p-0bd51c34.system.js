/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-ddbb2d5b.system.js","./p-8985cdb6.system.js","./p-792919fd.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.K},function(){},function(){}],execute:function(){var r=e("KEYBOARD_DID_OPEN","ionKeyboardDidShow");var n=e("KEYBOARD_DID_CLOSE","ionKeyboardDidHide");var a=150;var o={};var i={};var s=false;var f=e("resetKeyboardAssist",(function(){o={};i={};s=false}));var u=e("startKeyboardAssist",(function(e){var r=t.getEngine();if(r){d(e)}else{if(!e.visualViewport){return}i=K(e.visualViewport);e.visualViewport.onresize=function(){h(e);if(b()||y(e)){c(e)}else if(D(e)){v(e)}}}}));var d=function(e){e.addEventListener("keyboardDidShow",(function(t){return c(e,t)}));e.addEventListener("keyboardDidHide",(function(){return v(e)}))};var c=e("setKeyboardOpen",(function(e,t){p(e,t);s=true}));var v=e("setKeyboardClose",(function(e){l(e);s=false}));var b=e("keyboardDidOpen",(function(){var e=(o.height-i.height)*i.scale;return!s&&o.width===i.width&&e>a}));var y=e("keyboardDidResize",(function(e){return s&&!D(e)}));var D=e("keyboardDidClose",(function(e){return s&&i.height===e.innerHeight}));var p=function(e,t){var n=t?t.keyboardHeight:e.innerHeight-i.height;var a=new CustomEvent(r,{detail:{keyboardHeight:n}});e.dispatchEvent(a)};var l=function(e){var t=new CustomEvent(n);e.dispatchEvent(t)};var h=e("trackViewportChanges",(function(e){o=Object.assign({},i);i=K(e.visualViewport)}));var K=e("copyVisualViewport",(function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}))}}}));