System.register(["./p-cc3b12d0.system.js","./p-383d7946.system.js"],(function(t){"use strict";var e,r,n,i,o,s;return{setters:[function(t){e=t.r;r=t.e;n=t.h;i=t.H;o=t.i},function(t){s=t.g}],execute:function(){var a=":host{--background:hsl(var(--med-color-neutral-1))}:host{background:var(--background);display:block;padding-top:var(--ion-safe-area-top)}";var c=t("med_header",function(){function t(t){e(this,t);this.medResize=r(this,"medResize",7);this.hostHeight=0}t.prototype.componentDidLoad=function(){this.setSize()};t.prototype.disconnectedCallback=function(){if(this.hostResizeObserver){this.hostResizeObserver.disconnect()}};t.prototype.setSize=function(){var t=this;this.hostResizeObserver=new ResizeObserver((function(){var e=Number(t.el.getBoundingClientRect().height);if(e!==t.hostHeight){t.medResize.emit({height:e});t.hostHeight=e}}));this.hostResizeObserver.observe(this.el)};t.prototype.render=function(){return n(i,{"from-stencil":true},n("slot",{name:"navbar"}),n("slot",{name:"toolbar"}),n("slot",{name:"progress"}),n("slot",{name:"auxiliar"}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());c.style=a;var f=function(){if(typeof Map!=="undefined"){return Map}function t(t,e){var r=-1;t.some((function(t,n){if(t[0]===e){r=n;return true}return false}));return r}return function(){function e(){this.__entries__=[]}Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:true,configurable:true});e.prototype.get=function(e){var r=t(this.__entries__,e);var n=this.__entries__[r];return n&&n[1]};e.prototype.set=function(e,r){var n=t(this.__entries__,e);if(~n){this.__entries__[n][1]=r}else{this.__entries__.push([e,r])}};e.prototype.delete=function(e){var r=this.__entries__;var n=t(r,e);if(~n){r.splice(n,1)}};e.prototype.has=function(e){return!!~t(this.__entries__,e)};e.prototype.clear=function(){this.__entries__.splice(0)};e.prototype.forEach=function(t,e){if(e===void 0){e=null}for(var r=0,n=this.__entries__;r<n.length;r++){var i=n[r];t.call(e,i[1],i[0])}};return e}()}();var l=typeof window!=="undefined"&&typeof document!=="undefined"&&window.document===document;var u=function(){if(typeof global!=="undefined"&&global.Math===Math){return global}if(typeof self!=="undefined"&&self.Math===Math){return self}if(typeof window!=="undefined"&&window.Math===Math){return window}return Function("return this")()}();var h=function(){if(typeof requestAnimationFrame==="function"){return requestAnimationFrame.bind(u)}return function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)}}();var d=2;function v(t,e){var r=false,n=false,i=0;function o(){if(r){r=false;t()}if(n){a()}}function s(){h(o)}function a(){var t=Date.now();if(r){if(t-i<d){return}n=true}else{r=true;n=false;setTimeout(s,e)}i=t}return a}var p=20;var b=["top","right","bottom","left","width","height","size","weight"];var m=typeof MutationObserver!=="undefined";var g=function(){function t(){this.connected_=false;this.mutationEventsAdded_=false;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=v(this.refresh.bind(this),p)}t.prototype.addObserver=function(t){if(!~this.observers_.indexOf(t)){this.observers_.push(t)}if(!this.connected_){this.connect_()}};t.prototype.removeObserver=function(t){var e=this.observers_;var r=e.indexOf(t);if(~r){e.splice(r,1)}if(!e.length&&this.connected_){this.disconnect_()}};t.prototype.refresh=function(){var t=this.updateObservers_();if(t){this.refresh()}};t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));t.forEach((function(t){return t.broadcastActive()}));return t.length>0};t.prototype.connect_=function(){if(!l||this.connected_){return}document.addEventListener("transitionend",this.onTransitionEnd_);window.addEventListener("resize",this.refresh);if(m){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:true,childList:true,characterData:true,subtree:true})}else{document.addEventListener("DOMSubtreeModified",this.refresh);this.mutationEventsAdded_=true}this.connected_=true};t.prototype.disconnect_=function(){if(!l||!this.connected_){return}document.removeEventListener("transitionend",this.onTransitionEnd_);window.removeEventListener("resize",this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect()}if(this.mutationEventsAdded_){document.removeEventListener("DOMSubtreeModified",this.refresh)}this.mutationsObserver_=null;this.mutationEventsAdded_=false;this.connected_=false};t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,r=e===void 0?"":e;var n=b.some((function(t){return!!~r.indexOf(t)}));if(n){this.refresh()}};t.getInstance=function(){if(!this.instance_){this.instance_=new t}return this.instance_};t.instance_=null;return t}();var _=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:false,writable:false,configurable:true})}return t};var y=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||u};var x=T(0,0,0,0);function w(t){return parseFloat(t)||0}function O(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}return e.reduce((function(e,r){var n=t["border-"+r+"-width"];return e+w(n)}),0)}function E(t){var e=["top","right","bottom","left"];var r={};for(var n=0,i=e;n<i.length;n++){var o=i[n];var s=t["padding-"+o];r[o]=w(s)}return r}function k(t){var e=t.getBBox();return T(0,0,e.width,e.height)}function z(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r){return x}var n=y(t).getComputedStyle(t);var i=E(n);var o=i.left+i.right;var s=i.top+i.bottom;var a=w(n.width),c=w(n.height);if(n.boxSizing==="border-box"){if(Math.round(a+o)!==e){a-=O(n,"left","right")+o}if(Math.round(c+s)!==r){c-=O(n,"top","bottom")+s}}if(!M(t)){var f=Math.round(a+o)-e;var l=Math.round(c+s)-r;if(Math.abs(f)!==1){a-=f}if(Math.abs(l)!==1){c-=l}}return T(i.left,i.top,a,c)}var R=function(){if(typeof SVGGraphicsElement!=="undefined"){return function(t){return t instanceof y(t).SVGGraphicsElement}}return function(t){return t instanceof y(t).SVGElement&&typeof t.getBBox==="function"}}();function M(t){return t===y(t).document.documentElement}function A(t){if(!l){return x}if(R(t)){return k(t)}return z(t)}function j(t){var e=t.x,r=t.y,n=t.width,i=t.height;var o=typeof DOMRectReadOnly!=="undefined"?DOMRectReadOnly:Object;var s=Object.create(o.prototype);_(s,{x:e,y:r,width:n,height:i,top:r,right:e+n,bottom:i+r,left:e});return s}function T(t,e,r,n){return{x:t,y:e,width:r,height:n}}var S=function(){function t(t){this.broadcastWidth=0;this.broadcastHeight=0;this.contentRect_=T(0,0,0,0);this.target=t}t.prototype.isActive=function(){var t=A(this.target);this.contentRect_=t;return t.width!==this.broadcastWidth||t.height!==this.broadcastHeight};t.prototype.broadcastRect=function(){var t=this.contentRect_;this.broadcastWidth=t.width;this.broadcastHeight=t.height;return t};return t}();var D=function(){function t(t,e){var r=j(e);_(this,{target:t,contentRect:r})}return t}();var C=function(){function t(t,e,r){this.activeObservations_=[];this.observations_=new f;if(typeof t!=="function"){throw new TypeError("The callback provided as parameter 1 is not a function.")}this.callback_=t;this.controller_=e;this.callbackCtx_=r}t.prototype.observe=function(t){if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}if(typeof Element==="undefined"||!(Element instanceof Object)){return}if(!(t instanceof y(t).Element)){throw new TypeError('parameter 1 is not of type "Element".')}var e=this.observations_;if(e.has(t)){return}e.set(t,new S(t));this.controller_.addObserver(this);this.controller_.refresh()};t.prototype.unobserve=function(t){if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}if(typeof Element==="undefined"||!(Element instanceof Object)){return}if(!(t instanceof y(t).Element)){throw new TypeError('parameter 1 is not of type "Element".')}var e=this.observations_;if(!e.has(t)){return}e.delete(t);if(!e.size){this.controller_.removeObserver(this)}};t.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this)};t.prototype.gatherActive=function(){var t=this;this.clearActive();this.observations_.forEach((function(e){if(e.isActive()){t.activeObservations_.push(e)}}))};t.prototype.broadcastActive=function(){if(!this.hasActive()){return}var t=this.callbackCtx_;var e=this.activeObservations_.map((function(t){return new D(t.target,t.broadcastRect())}));this.callback_.call(t,e,t);this.clearActive()};t.prototype.clearActive=function(){this.activeObservations_.splice(0)};t.prototype.hasActive=function(){return this.activeObservations_.length>0};return t}();var L=typeof WeakMap!=="undefined"?new WeakMap:new f;var H=function(){function t(e){if(!(this instanceof t)){throw new TypeError("Cannot call a class as a function.")}if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}var r=g.getInstance();var n=new C(e,r,this);L.set(this,n)}return t}();["observe","unobserve","disconnect"].forEach((function(t){H.prototype[t]=function(){var e;return(e=L.get(this))[t].apply(e,arguments)}}));var B=function(){if(typeof u.ResizeObserver!=="undefined"){return u.ResizeObserver}return H}();var P=":host{--background:hsl(var(--med-color-neutral-1));--main-color:hsl(var(--med-color-neutral-10));--subtitle-color:hsl(var(--med-color-brand-4));--height:48px}:host(.med-navbar){display:block}:host(.med-navbar) .med-navbar__header{background:var(--background)}:host(.med-navbar) .med-navbar__container{padding-left:16px;padding-right:16px;padding-bottom:0;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:var(--height)}:host(.med-navbar) .med-navbar__left,:host(.med-navbar) .med-navbar__right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.med-navbar) .med-navbar__left{-ms-flex-pack:start;justify-content:flex-start}:host(.med-navbar) .med-navbar__right{-ms-flex-pack:end;justify-content:flex-end}:host(.med-navbar) .med-navbar__center{padding-left:var(--padding-left);padding-right:var(--padding-right);padding-top:var(--spacing-stack-xxxs);padding-bottom:var(--spacing-stack-xxxs);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;text-align:center;width:100%}:host(.med-navbar) ::slotted(*){margin:0 !important;padding:0 !important}:host(.med-navbar) ::slotted([slot=left]){color:var(--main-color);margin-right:16px !important;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}:host(.med-navbar) ::slotted([slot=title]){--color:var(--main-color);--font-size:16px;--font-weight:600;--line-height:16px;color:var(--main-color);font-size:16px;font-weight:600;line-height:16px;display:block}:host(.med-navbar) ::slotted([slot=subtitle]){--color:var(--subtitle-color);--font-size:12px;--font-weight:400;--line-height:16px;color:var(--subtitle-color);font-size:12px;font-weight:400;line-height:16px;display:block}:host(.med-navbar) ::slotted([slot=right]){color:var(--main-color);margin-left:16px !important;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}:host(.med-color) ::slotted([slot=subtitle]){--subtitle-color:hsl(var(--med-color-4))}:host(.med-color-neutral) ::slotted([slot=subtitle]){--subtitle-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback) ::slotted([slot=subtitle]){--subtitle-color:hsl(var(--med-color-feedback))}:host(.med-navbar--transparent){--background:transparent}";var W=t("med_navbar",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){this.setSize()};t.prototype.disconnectedCallback=function(){if(this.sidesResizeObserver){this.sidesResizeObserver.disconnect()}};t.prototype.setSize=function(){var t=this;this.sidesResizeObserver=new B((function(e){for(var r=0,n=e;r<n.length;r++){var i=n[r];var o=Number(t.rightEl.getBoundingClientRect().width);var s=Number(t.leftEl.getBoundingClientRect().width);var a=i.contentRect.width-o;var c=i.contentRect.width-s;var f=0;var l=0;if(o!==s){if(i.target.id==="left"){if(a>0){l=a}else{f=c-a;if(f<0){f*=-1}}}else if(i.target.id==="right"){if(c>0){f=c}else{l=c-a;if(l<0){l*=-1}}}}t.centerEl.style.setProperty("--padding-left",f+"px");t.centerEl.style.setProperty("--padding-right",l+"px")}}));this.sidesResizeObserver.observe(this.leftEl);this.sidesResizeObserver.observe(this.rightEl)};t.prototype.render=function(){var t;var e=this;var r=this,o=r.dsColor,a=r.dsName;return n(i,{"from-stencil":true,class:s(o,(t={"med-navbar":true},t["med-navbar--"+a]=a!==undefined,t))},n("header",{class:"med-navbar__header"},n("slot",{name:"top"}),n("div",{class:"med-navbar__container"},n("div",{id:"left",class:"med-navbar__left",ref:function(t){return e.leftEl=t}},n("slot",{name:"left"})),n("div",{class:"med-navbar__center",ref:function(t){return e.centerEl=t}},n("slot",{name:"title"}),n("slot",{name:"subtitle"})),n("div",{id:"right",class:"med-navbar__right",ref:function(t){return e.rightEl=t}},n("slot",{name:"right"})))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());W.style=P}}}));