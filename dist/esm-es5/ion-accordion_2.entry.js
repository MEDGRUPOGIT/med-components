import{__awaiter,__generator,__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,h,H as Host,f as getElement,d as createEvent}from"./index-27668d5b.js";import{r as raf,t as transitionEndAsync,a as addEventListener,b as removeEventListener,g as getElementRoot}from"./helpers-ae653409.js";import{l as chevronDown}from"./index-f7dc70ba.js";import{c as config,b as getIonMode}from"./ionic-global-8fa0f940.js";import{p as printIonWarning}from"./index-9b0d46f4.js";var accordionIosCss=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";var accordionMdCss=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";var Accordion=function(){function n(n){var t=this;registerInstance(this,n);this.updateListener=function(){return t.updateState(false)};this.setItemDefaults=function(){var n=t.getSlottedHeaderIonItem();if(!n){return}n.button=true;n.detail=false;if(n.lines===undefined){n.lines="full"}};this.getSlottedHeaderIonItem=function(){var n=t.headerEl;if(!n){return}var i=n.querySelector("slot");if(!i){return}if(i.assignedElements===undefined)return;return i.assignedElements().find((function(n){return n.tagName==="ION-ITEM"}))};this.setAria=function(n){if(n===void 0){n=false}var i=t.getSlottedHeaderIonItem();if(!i){return}var o=getElementRoot(i);var r=o.querySelector("button");if(!r){return}r.setAttribute("aria-expanded","".concat(n))};this.slotToggleIcon=function(){var n=t.getSlottedHeaderIonItem();if(!n){return}var i=t,o=i.toggleIconSlot,r=i.toggleIcon;var e=n.querySelector(".ion-accordion-toggle-icon");if(e){return}var a=document.createElement("ion-icon");a.slot=o;a.lazy=false;a.classList.add("ion-accordion-toggle-icon");a.icon=r;a.setAttribute("aria-hidden","true");n.appendChild(a)};this.expandAccordion=function(n){if(n===void 0){n=false}var i=t,o=i.contentEl,r=i.contentElWrapper;if(n||o===undefined||r===undefined){t.state=4;return}if(t.state===4){return}if(t.currentRaf!==undefined){cancelAnimationFrame(t.currentRaf)}if(t.shouldAnimate()){raf((function(){t.state=8;t.currentRaf=raf((function(){return __awaiter(t,void 0,void 0,(function(){var n,t;return __generator(this,(function(i){switch(i.label){case 0:n=r.offsetHeight;t=transitionEndAsync(o,2e3);o.style.setProperty("max-height","".concat(n,"px"));return[4,t];case 1:i.sent();this.state=4;o.style.removeProperty("max-height");return[2]}}))}))}))}))}else{t.state=4}};this.collapseAccordion=function(n){if(n===void 0){n=false}var i=t.contentEl;if(n||i===undefined){t.state=1;return}if(t.state===1){return}if(t.currentRaf!==undefined){cancelAnimationFrame(t.currentRaf)}if(t.shouldAnimate()){t.currentRaf=raf((function(){return __awaiter(t,void 0,void 0,(function(){var n;var t=this;return __generator(this,(function(o){n=i.offsetHeight;i.style.setProperty("max-height","".concat(n,"px"));raf((function(){return __awaiter(t,void 0,void 0,(function(){var n;return __generator(this,(function(t){switch(t.label){case 0:n=transitionEndAsync(i,2e3);this.state=2;return[4,n];case 1:t.sent();this.state=1;i.style.removeProperty("max-height");return[2]}}))}))}));return[2]}))}))}))}else{t.state=1}};this.shouldAnimate=function(){if(typeof window==="undefined"){return false}var n=matchMedia("(prefers-reduced-motion: reduce)").matches;if(n){return false}var i=config.get("animated",true);if(!i){return false}if(t.accordionGroupEl&&!t.accordionGroupEl.animated){return false}return true};this.updateState=function(n){if(n===void 0){n=false}return __awaiter(t,void 0,void 0,(function(){var t,i,o,r,e,a,s,d;return __generator(this,(function(c){t=this.accordionGroupEl;i=this.value;if(!t){return[2]}o=t.value;r=Array.isArray(o)?o.includes(i):o===i;if(r){this.expandAccordion(n);this.isNext=this.isPrevious=false}else{this.collapseAccordion(n);e=this.getNextSibling();a=e===null||e===void 0?void 0:e.value;if(a!==undefined){this.isPrevious=Array.isArray(o)?o.includes(a):o===a}s=this.getPreviousSibling();d=s===null||s===void 0?void 0:s.value;if(d!==undefined){this.isNext=Array.isArray(o)?o.includes(d):o===d}}return[2]}))}))};this.getNextSibling=function(){if(!t.el){return}var n=t.el.nextElementSibling;if((n===null||n===void 0?void 0:n.tagName)!=="ION-ACCORDION"){return}return n};this.getPreviousSibling=function(){if(!t.el){return}var n=t.el.previousElementSibling;if((n===null||n===void 0?void 0:n.tagName)!=="ION-ACCORDION"){return}return n};this.state=1;this.isNext=false;this.isPrevious=false;this.value="ion-accordion-".concat(accordionIds++);this.disabled=false;this.readonly=false;this.toggleIcon=chevronDown;this.toggleIconSlot="end"}n.prototype.valueChanged=function(){this.updateState()};n.prototype.connectedCallback=function(){var n;var t=this.accordionGroupEl=(n=this.el)===null||n===void 0?void 0:n.closest("ion-accordion-group");if(t){this.updateState(true);addEventListener(t,"ionValueChange",this.updateListener)}};n.prototype.disconnectedCallback=function(){var n=this.accordionGroupEl;if(n){removeEventListener(n,"ionValueChange",this.updateListener)}};n.prototype.componentDidLoad=function(){var n=this;this.setItemDefaults();this.slotToggleIcon();raf((function(){var t=n.state===4||n.state===8;n.setAria(t)}))};n.prototype.toggleExpanded=function(){var n=this,t=n.accordionGroupEl,i=n.disabled,o=n.readonly,r=n.value,e=n.state;if(i||o)return;if(t){var a=e===1||e===2;t.requestAccordionToggle(r,a)}};n.prototype.render=function(){var n;var t=this;var i=this,o=i.disabled,r=i.readonly;var e=getIonMode(this);var a=this.state===4||this.state===8;var s=a?"header expanded":"header";var d=a?"content expanded":"content";this.setAria(a);return h(Host,{class:(n={},n[e]=true,n["accordion-expanding"]=this.state===8,n["accordion-expanded"]=this.state===4,n["accordion-collapsing"]=this.state===2,n["accordion-collapsed"]=this.state===1,n["accordion-next"]=this.isNext,n["accordion-previous"]=this.isPrevious,n["accordion-disabled"]=o,n["accordion-readonly"]=r,n["accordion-animated"]=this.shouldAnimate(),n)},h("div",{onClick:function(){return t.toggleExpanded()},id:"header",part:s,"aria-controls":"content",ref:function(n){return t.headerEl=n}},h("slot",{name:"header"})),h("div",{id:"content",part:d,role:"region","aria-labelledby":"header",ref:function(n){return t.contentEl=n}},h("div",{id:"content-wrapper",ref:function(n){return t.contentElWrapper=n}},h("slot",{name:"content"}))))};Object.defineProperty(n,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(n.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(n,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return n}();var accordionIds=0;Accordion.style={ios:accordionIosCss,md:accordionMdCss};var accordionGroupIosCss=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";var accordionGroupMdCss=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var AccordionGroup=function(){function n(n){registerInstance(this,n);this.ionChange=createEvent(this,"ionChange",7);this.ionValueChange=createEvent(this,"ionValueChange",7);this.animated=true;this.multiple=undefined;this.value=undefined;this.disabled=false;this.readonly=false;this.expand="compact"}n.prototype.valueChanged=function(){var n=this,t=n.value,i=n.multiple;if(!i&&Array.isArray(t)){printIonWarning('ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: ['.concat(t.map((function(n){return"'".concat(n,"'")})).join(", "),"]\n"),this.el)}this.ionValueChange.emit({value:this.value})};n.prototype.disabledChanged=function(){return __awaiter(this,void 0,void 0,(function(){var n,t,i,o,r;return __generator(this,(function(e){switch(e.label){case 0:n=this.disabled;return[4,this.getAccordions()];case 1:t=e.sent();for(i=0,o=t;i<o.length;i++){r=o[i];r.disabled=n}return[2]}}))}))};n.prototype.readonlyChanged=function(){return __awaiter(this,void 0,void 0,(function(){var n,t,i,o,r;return __generator(this,(function(e){switch(e.label){case 0:n=this.readonly;return[4,this.getAccordions()];case 1:t=e.sent();for(i=0,o=t;i<o.length;i++){r=o[i];r.readonly=n}return[2]}}))}))};n.prototype.onKeydown=function(n){return __awaiter(this,void 0,void 0,(function(){var t,i,o,r,e,a,s;return __generator(this,(function(d){switch(d.label){case 0:t=document.activeElement;if(!t){return[2]}i=t.closest('ion-accordion [slot="header"]');if(!i){return[2]}o=t.tagName==="ION-ACCORDION"?t:t.closest("ion-accordion");if(!o){return[2]}r=o.closest("ion-accordion-group");if(r!==this.el){return[2]}return[4,this.getAccordions()];case 1:e=d.sent();a=e.findIndex((function(n){return n===o}));if(a===-1){return[2]}if(n.key==="ArrowDown"){s=this.findNextAccordion(e,a)}else if(n.key==="ArrowUp"){s=this.findPreviousAccordion(e,a)}else if(n.key==="Home"){s=e[0]}else if(n.key==="End"){s=e[e.length-1]}if(s!==undefined&&s!==t){s.focus()}return[2]}}))}))};n.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){if(this.disabled){this.disabledChanged()}if(this.readonly){this.readonlyChanged()}this.valueChanged();return[2]}))}))};n.prototype.setValue=function(n){var t=this.value=n;this.ionChange.emit({value:t})};n.prototype.requestAccordionToggle=function(n,t){return __awaiter(this,void 0,void 0,(function(){var i,o,r,e,a,s,d,c,s,d;return __generator(this,(function(u){i=this,o=i.multiple,r=i.value,e=i.readonly,a=i.disabled;if(e||a){return[2]}if(t){if(o){s=r!==null&&r!==void 0?r:[];d=Array.isArray(s)?s:[s];c=d.find((function(t){return t===n}));if(c===undefined&&n!==undefined){this.setValue(__spreadArray(__spreadArray([],d,true),[n],false))}}else{this.setValue(n)}}else{if(o){s=r!==null&&r!==void 0?r:[];d=Array.isArray(s)?s:[s];this.setValue(d.filter((function(t){return t!==n})))}else{this.setValue(undefined)}}return[2]}))}))};n.prototype.findNextAccordion=function(n,t){var i=n[t+1];if(i===undefined){return n[0]}return i};n.prototype.findPreviousAccordion=function(n,t){var i=n[t-1];if(i===undefined){return n[n.length-1]}return i};n.prototype.getAccordions=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,Array.from(this.el.querySelectorAll(":scope > ion-accordion"))]}))}))};n.prototype.render=function(){var n;var t=this,i=t.disabled,o=t.readonly,r=t.expand;var e=getIonMode(this);return h(Host,{class:(n={},n[e]=true,n["accordion-group-disabled"]=i,n["accordion-group-readonly"]=o,n["accordion-group-expand-".concat(r)]=true,n),role:"presentation"},h("slot",null))};Object.defineProperty(n.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(n,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:false,configurable:true});return n}();AccordionGroup.style={ios:accordionGroupIosCss,md:accordionGroupMdCss};export{Accordion as ion_accordion,AccordionGroup as ion_accordion_group};