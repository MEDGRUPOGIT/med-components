var __awaiter=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(t){r(t)}}function s(e){try{c(i["throw"](e))}catch(t){r(t)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(r=a[0]&2?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;if(o=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){n.label=a[1];break}if(a[0]===6&&n.label<r[1]){n.label=r[1];r=a;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(a);break}if(r[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];o=0}finally{i=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-cc3b12d0.system.js","./p-1ceaabb2.system.js","./p-bf1d0d9f.system.js"],(function(e){"use strict";var t,n,i,o,r,a,s,c,d,l,u;return{setters:[function(e){t=e.r;n=e.h;i=e.H;o=e.i},function(e){r=e.c;a=e.b},function(e){s=e.r;c=e.t;d=e.a;l=e.b;u=e.g}],execute:function(){var h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";var f=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";var p=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";var v=e("tp_accordion",function(){function e(e){var n=this;t(this,e);this.updateListener=function(){return n.updateState(false)};this.state=1;this.isNext=false;this.isPrevious=false;this.value="ion-accordion-"+g++;this.disabled=false;this.readonly=false;this.toggleIcon=h;this.toggleIconSlot="end";this.setItemDefaults=function(){var e=n.getSlottedHeaderIonItem();if(!e){return}e.button=true;e.detail=false;if(e.lines===undefined){e.lines="full"}};this.getSlottedHeaderIonItem=function(){var e=n.headerEl;if(!e){return}var t=e.querySelector("slot");if(!t){return}if(t.assignedElements===undefined)return;return t.assignedElements().find((function(e){return e.tagName==="ION-ITEM"}))};this.setAria=function(e){if(e===void 0){e=false}var t=n.getSlottedHeaderIonItem();if(!t){return}var i=u(t);var o=i.querySelector("button");if(!o){return}o.setAttribute("aria-expanded",""+e)};this.slotToggleIcon=function(){var e=n.getSlottedHeaderIonItem();if(!e){return}var t=n,i=t.toggleIconSlot,o=t.toggleIcon;var r=e.querySelector(".ion-accordion-toggle-icon");if(r){return}var a=document.createElement("ion-icon");a.slot=i;a.lazy=false;a.classList.add("ion-accordion-toggle-icon");a.icon=o;a.setAttribute("aria-hidden","true")};this.expandAccordion=function(e){if(e===void 0){e=false}var t=n,i=t.contentEl,o=t.contentElWrapper;if(e||i===undefined||o===undefined){n.state=4;return}if(n.state===4){return}if(n.currentRaf!==undefined){cancelAnimationFrame(n.currentRaf)}if(n.shouldAnimate()){s((function(){n.state=8;n.currentRaf=s((function(){return __awaiter(n,void 0,void 0,(function(){var e,t;return __generator(this,(function(n){switch(n.label){case 0:e=o.offsetHeight;t=c(i,2e3);i.style.setProperty("max-height",e+"px");return[4,t];case 1:n.sent();this.state=4;i.style.removeProperty("max-height");return[2]}}))}))}))}))}else{n.state=4}};this.collapseAccordion=function(e){if(e===void 0){e=false}var t=n.contentEl;if(e||t===undefined){n.state=1;return}if(n.state===1){return}if(n.currentRaf!==undefined){cancelAnimationFrame(n.currentRaf)}if(n.shouldAnimate()){n.currentRaf=s((function(){return __awaiter(n,void 0,void 0,(function(){var e;var n=this;return __generator(this,(function(i){e=t.offsetHeight;t.style.setProperty("max-height",e+"px");s((function(){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:e=c(t,2e3);this.state=2;return[4,e];case 1:n.sent();this.state=1;t.style.removeProperty("max-height");return[2]}}))}))}));return[2]}))}))}))}else{n.state=1}};this.shouldAnimate=function(){if(typeof window==="undefined"){return false}var e=matchMedia("(prefers-reduced-motion: reduce)").matches;if(e){return false}var t=r.get("animated",true);if(!t){return false}if(n.accordionGroupEl&&!n.accordionGroupEl.animated){return false}return true};this.updateState=function(e){if(e===void 0){e=false}return __awaiter(n,void 0,void 0,(function(){var t,n,i,o,r,a,s,c;return __generator(this,(function(d){t=this.accordionGroupEl;n=this.value;if(!t){return[2]}i=t.value;o=Array.isArray(i)?i.includes(n):i===n;if(o){this.expandAccordion(e);this.isNext=this.isPrevious=false}else{this.collapseAccordion(e);r=this.getNextSibling();a=r===null||r===void 0?void 0:r.value;if(a!==undefined){this.isPrevious=Array.isArray(i)?i.includes(a):i===a}s=this.getPreviousSibling();c=s===null||s===void 0?void 0:s.value;if(c!==undefined){this.isNext=Array.isArray(i)?i.includes(c):i===c}}return[2]}))}))};this.getNextSibling=function(){if(!n.el){return}var e=n.el.nextElementSibling;if((e===null||e===void 0?void 0:e.tagName)!=="ION-ACCORDION"){return}return e};this.getPreviousSibling=function(){if(!n.el){return}var e=n.el.previousElementSibling;if((e===null||e===void 0?void 0:e.tagName)!=="ION-ACCORDION"){return}return e}}e.prototype.valueChanged=function(){this.updateState()};e.prototype.connectedCallback=function(){var e;var t=this.accordionGroupEl=(e=this.el)===null||e===void 0?void 0:e.closest("tp-accordion-group");if(t){this.updateState(true);d(t,"ionValueChange",this.updateListener)}};e.prototype.disconnectedCallback=function(){var e=this.accordionGroupEl;if(e){l(e,"ionValueChange",this.updateListener)}};e.prototype.componentDidLoad=function(){var e=this;this.setItemDefaults();this.slotToggleIcon();s((function(){var t=e.state===4||e.state===8;e.setAria(t)}))};e.prototype.toggleExpanded=function(){var e=this,t=e.accordionGroupEl,n=e.value,i=e.state;if(t){var o=i===1||i===2;t.requestAccordionToggle(n,o)}};e.prototype.render=function(){var e;var t=this;var o=this,r=o.disabled,s=o.readonly;var c=a(this);var d=this.state===4||this.state===8;var l=d?"header expanded":"header";var u=d?"content expanded":"content";this.setAria(d);return n(i,{class:(e={},e[c]=true,e["accordion-expanding"]=this.state===8,e["accordion-expanded"]=this.state===4,e["accordion-collapsing"]=this.state===2,e["accordion-collapsed"]=this.state===1,e["accordion-next"]=this.isNext,e["accordion-previous"]=this.isPrevious,e["accordion-disabled"]=r,e["accordion-readonly"]=s,e["accordion-animated"]=this.shouldAnimate(),e)},n("div",{onClick:function(){return t.toggleExpanded()},id:"header",part:l,"aria-controls":"content",ref:function(e){return t.headerEl=e}},n("slot",{name:"header"})),n("div",{id:"content",part:u,role:"region","aria-labelledby":"header",ref:function(e){return t.contentEl=e}},n("div",{id:"content-wrapper",ref:function(e){return t.contentElWrapper=e}},n("slot",{name:"content"}))))};Object.defineProperty(e,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var g=0;v.style={ios:f,md:p}}}}));