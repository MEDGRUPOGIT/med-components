var __awaiter=this&&this.__awaiter||function(i,e,t,n){function r(i){return i instanceof t?i:new t((function(e){e(i)}))}return new(t||(t=Promise))((function(t,a){function o(i){try{c(n.next(i))}catch(i){a(i)}}function s(i){try{c(n["throw"](i))}catch(i){a(i)}}function c(i){i.done?t(i.value):r(i.value).then(o,s)}c((n=n.apply(i,e||[])).next())}))};var __generator=this&&this.__generator||function(i,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(i){return function(e){return c([i,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o&&(o=0,s[0]&&(t=0)),t)try{if(n=1,r&&(a=s[0]&2?r["return"]:s[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;if(r=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;r=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){t.label=s[1];break}if(s[0]===6&&t.label<a[1]){t.label=a[1];a=s;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(s);break}if(a[2])t.ops.pop();t.trys.pop();continue}s=e.call(i,t)}catch(i){s=[6,i];r=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-67c3a2a8.system.js","./p-32ad210f.system.js","./p-1cca10d6.system.js","./p-ef3a6b51.system.js","./p-4609d030.system.js","./p-8985cdb6.system.js","./p-792919fd.system.js"],(function(i){"use strict";var e,t,n,r,a,o,s,c,l,u,d,f,p;return{setters:[function(i){e=i.r;t=i.d;n=i.h;r=i.H;a=i.f},function(i){o=i.r;s=i.g},function(i){c=i.a;l=i.b;u=i.h},function(i){d=i.a;f=i.b},function(i){p=i.c},function(){},function(){}],execute:function(){var h=":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";var v=":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}";var m=i("ion_picker_column_internal",function(){function i(i){var n=this;e(this,i);this.ionChange=t(this,"ionChange",7);this.isScrolling=false;this.isColumnVisible=false;this.canExitInputMode=true;this.centerPickerItemInView=function(i,e,t){if(e===void 0){e=true}if(t===void 0){t=true}var r=n,a=r.el,o=r.isColumnVisible;if(o){var s=i.offsetTop-3*i.clientHeight+i.clientHeight/2;if(a.scrollTop!==s){n.canExitInputMode=t;a.scroll({top:s,left:0,behavior:e?"smooth":undefined})}}};this.setPickerItemActiveState=function(i,e){if(e){i.classList.add(b);i.part.add(y)}else{i.classList.remove(b);i.part.remove(y)}};this.inputModeChange=function(i){if(!n.numericInput){return}var e=i.detail,t=e.useInputMode,r=e.inputModeColumn;var a=r===undefined||r===n.el;if(!t||!a){n.setInputModeActive(false);return}n.setInputModeActive(true)};this.setInputModeActive=function(i){if(n.isScrolling){n.scrollEndCallback=function(){n.isActive=i};return}n.isActive=i};this.initializeScrollListener=function(){var i=d("ios");var e=n.el;var t;var r=n.activeItem;var a=function(){o((function(){if(t){clearTimeout(t);t=undefined}if(!n.isScrolling){i&&c();n.isScrolling=true}var a=e.getBoundingClientRect();var o=a.x+a.width/2;var s=a.y+a.height/2;var d=e.shadowRoot.elementFromPoint(o,s);if(r!==null){n.setPickerItemActiveState(r,false)}if(d===null||d.disabled){return}if(d!==r){i&&l();if(n.canExitInputMode){n.exitInputMode()}}r=d;n.setPickerItemActiveState(d,true);t=setTimeout((function(){n.isScrolling=false;i&&u();var e=n.scrollEndCallback;if(e){e();n.scrollEndCallback=undefined}n.canExitInputMode=true;var t=d.getAttribute("data-index");if(t===null){return}var r=parseInt(t,10);var a=n.items[r];if(a.value!==n.value){n.setValue(a.value)}}),250)}))};o((function(){e.addEventListener("scroll",a);n.destroyScrollListener=function(){e.removeEventListener("scroll",a)}}))};this.exitInputMode=function(){var i=n.parentEl;if(i==null)return;i.exitInputMode();n.el.classList.remove("picker-column-active")};this.isActive=false;this.disabled=false;this.items=[];this.value=undefined;this.color="primary";this.numericInput=false}i.prototype.valueChange=function(){if(this.isColumnVisible){this.scrollActiveItemIntoView()}};i.prototype.componentWillLoad=function(){var i=this;var e=function(e){var t=e[0];if(t.isIntersecting){var n=i,r=n.activeItem,a=n.el;i.isColumnVisible=true;var o=s(a).querySelector(".".concat(b));if(o){i.setPickerItemActiveState(o,false)}i.scrollActiveItemIntoView();if(r){i.setPickerItemActiveState(r,true)}i.initializeScrollListener()}else{i.isColumnVisible=false;if(i.destroyScrollListener){i.destroyScrollListener();i.destroyScrollListener=undefined}}};new IntersectionObserver(e,{threshold:.001}).observe(this.el);var t=this.parentEl=this.el.closest("ion-picker-internal");if(t!==null){t.addEventListener("ionInputModeChange",(function(e){return i.inputModeChange(e)}))}};i.prototype.componentDidRender=function(){var i;var e=this,t=e.activeItem,n=e.items,r=e.isColumnVisible,a=e.value;if(r){if(t){this.scrollActiveItemIntoView()}else if(((i=n[0])===null||i===void 0?void 0:i.value)!==a){this.setValue(n[0].value)}}};i.prototype.scrollActiveItemIntoView=function(){return __awaiter(this,void 0,void 0,(function(){var i;return __generator(this,(function(e){i=this.activeItem;if(i){this.centerPickerItemInView(i,false,false)}return[2]}))}))};i.prototype.setValue=function(i){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(n){e=this.items;this.value=i;t=e.find((function(e){return e.value===i&&e.disabled!==true}));if(t){this.ionChange.emit(t)}return[2]}))}))};Object.defineProperty(i.prototype,"activeItem",{get:function(){var i='.picker-item[data-value="'.concat(this.value,'"]').concat(this.disabled?"":":not([disabled])");return s(this.el).querySelector(i)},enumerable:false,configurable:true});i.prototype.render=function(){var i;var e=this;var t=this,a=t.items,o=t.color,s=t.disabled,c=t.isActive,l=t.numericInput;var u=f(this);return n(r,{exportparts:"".concat(g,", ").concat(y),disabled:s,tabindex:s?null:0,class:p(o,(i={},i[u]=true,i["picker-column-active"]=c,i["picker-column-numeric-input"]=l,i))},n("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),n("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),n("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),a.map((function(i,t){var r=s||i.disabled||false;return n("button",{tabindex:"-1",class:{"picker-item":true},"data-value":i.value,"data-index":t,onClick:function(i){e.centerPickerItemInView(i.target,true)},disabled:r,part:g},i.text)})),n("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),n("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),n("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "))};Object.defineProperty(i.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(i,"watchers",{get:function(){return{value:["valueChange"]}},enumerable:false,configurable:true});return i}());var b="picker-item-active";var g="wheel-item";var y="active";m.style={ios:h,md:v}}}}));