System.register(["./p-cc3b12d0.system.js","./p-1ceaabb2.system.js","./p-76b438d9.system.js","./p-27c73f6b.system.js","./p-456080eb.system.js"],(function(t){"use strict";var e,i,n,o,r,s,a,l,c,d;return{setters:[function(t){e=t.r;i=t.j;n=t.h;o=t.H;r=t.i},function(t){s=t.b},function(t){a=t.r},function(t){l=t.h;c=t.o},function(t){d=t.g}],execute:function(){var u=':host{--padding:12px 16px}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;padding:var(--padding);position:relative}:host(.med-item){background:transparent !important}:host(.med-item--no-padding){--padding:0 16px}.item-inner{display:-ms-flexbox;display:flex}.input-wrapper{-ms-flex:1;flex:1}.item-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:0;background:transparent;width:100%;border:0;text-align:left;outline:none}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}';var h=':host{--padding:12px 16px}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;padding:var(--padding);position:relative}:host(.med-item){background:transparent !important}:host(.med-item--no-padding){--padding:0 16px}.item-inner{display:-ms-flexbox;display:flex}.input-wrapper{-ms-flex:1;flex:1}.item-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:0;background:transparent;width:100%;border:0;text-align:left;outline:none}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}';var p=t("med_item",function(){function t(t){e(this,t);this.labelColorStyles={};this.itemStyles=new Map;this.multipleInputs=false;this.padding=false;this.button=false;this.detailIcon="chevron-forward";this.disabled=false;this.routerDirection="forward";this.type="button"}t.prototype.labelColorChanged=function(t){var e=this.dsColor;if(e===undefined){this.labelColorStyles=t.detail}};t.prototype.itemStyle=function(t){t.stopPropagation();var e=t.target.tagName;var n=t.detail;var o={};var r=this.itemStyles.get(e)||{};var s=false;Object.keys(n).forEach((function(t){if(n[t]){var e="item-"+t;if(!r[e]){s=true}o[e]=true}}));if(!s&&Object.keys(o).length!==Object.keys(r).length){s=true}if(s){this.itemStyles.set(e,o);i(this)}};t.prototype.componentDidUpdate=function(){var t=this;var e=this.getFirstInput();if(e&&!this.clickListener){this.clickListener=function(i){return t.delegateFocus(i,e)};this.el.addEventListener("click",this.clickListener)}};t.prototype.disconnectedCallback=function(){var t=this.getFirstInput();if(t&&this.clickListener){this.el.removeEventListener("click",this.clickListener);this.clickListener=undefined}};t.prototype.componentDidLoad=function(){this.setMultipleInputs()};t.prototype.setMultipleInputs=function(){var t=this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio");var e=this.el.querySelectorAll("ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle");var i=this.el.querySelectorAll("ion-anchor, ion-button, a, button");this.multipleInputs=t.length+e.length>1||t.length+i.length>1||t.length>0&&this.isClickable()};t.prototype.hasCover=function(){var t=this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio");return t.length===1&&!this.multipleInputs};t.prototype.isClickable=function(){return this.href!==undefined||this.button};t.prototype.canActivate=function(){return this.isClickable()||this.hasCover()};t.prototype.getFirstInput=function(){var t=this.el.querySelectorAll("ion-input, ion-textarea");return t[0]};t.prototype.delegateFocus=function(t,e){var i=t.target.tagName==="MED-ITEM";var n=false;if(document.activeElement){n=e.querySelector("input, textarea")===document.activeElement}if(i&&n){e.fireFocusEvents=false;e.setBlur();e.setFocus();a((function(){e.fireFocusEvents=true}))}};t.prototype.render=function(){var t;var e=this,i=e.dsColor,r=e.padding,a=e.detail,u=e.detailIcon,h=e.download,p=e.labelColorStyles,f=e.lines,m=e.disabled,g=e.href,b=e.rel,v=e.target,y=e.routerAnimation,x=e.routerDirection;var k={};var w=s(this);var j=this.isClickable();var C=this.canActivate();var S=j?g===undefined?"button":"a":"div";var I=S==="button"?{type:this.type}:{download:h,href:g,rel:b,target:v};var z=j?{onClick:function(t){c(g,t,x,y)}}:{};var E=a!==undefined?a:w==="ios"&&j;this.itemStyles.forEach((function(t){Object.assign(k,t)}));return n(o,{"aria-disabled":m?"true":null,class:Object.assign(Object.assign(Object.assign({},k),p),d(i,(t={},t[w]=true,t["med-item"]=true,t["med-item-lines-"+f]=f!==undefined,t["med-item-disabled"]=m,t["in-list"]=l("med-lista",this.el),t["med-item-multiple-inputs"]=this.multipleInputs,t["ion-activatable"]=C,t["ion-focusable"]=true,t["med-item--no-padding"]=r,t)))},n(S,Object.assign({},I,{class:"item-native",part:"native",disabled:m},z),n("slot",{name:"start"}),n("div",{class:"item-inner"},n("div",{class:"input-wrapper"},n("slot",null)),n("slot",{name:"end"}),E&&n("ion-icon",{icon:u,lazy:false,class:"med-icon item-detail-icon",part:"detail-icon","aria-hidden":"true"}),n("div",{class:"item-inner-highlight"}))),n("div",{class:"item-highlight"}))};Object.defineProperty(t,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());p.style={ios:u,md:h}}}}));