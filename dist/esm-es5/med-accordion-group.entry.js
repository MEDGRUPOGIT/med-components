import{__awaiter,__generator,__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,d as createEvent,h,H as Host,f as getElement}from"./index-27668d5b.js";import{b as getIonMode}from"./ionic-global-8fa0f940.js";import{p as printIonWarning}from"./index-9b0d46f4.js";var tpAccordionGroupIosCss=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";var tpAccordionGroupMdCss=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var TpAccordionGroup=function(){function r(r){registerInstance(this,r);this.ionChange=createEvent(this,"ionChange",7);this.ionValueChange=createEvent(this,"ionValueChange",7);this.animated=true;this.multiple=undefined;this.value=undefined;this.disabled=false;this.readonly=false;this.expand="compact"}r.prototype.valueChanged=function(){var r=this,o=r.value,t=r.multiple;if(!t&&Array.isArray(o)){printIonWarning('ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: ['.concat(o.map((function(r){return"'".concat(r,"'")})).join(", "),"]\n"),this.el)}this.ionValueChange.emit({value:this.value})};r.prototype.disabledChanged=function(){return __awaiter(this,void 0,void 0,(function(){var r,o,t,n,i;return __generator(this,(function(e){switch(e.label){case 0:r=this.disabled;return[4,this.getAccordions()];case 1:o=e.sent();for(t=0,n=o;t<n.length;t++){i=n[t];i.disabled=r}return[2]}}))}))};r.prototype.readonlyChanged=function(){return __awaiter(this,void 0,void 0,(function(){var r,o,t,n,i;return __generator(this,(function(e){switch(e.label){case 0:r=this.readonly;return[4,this.getAccordions()];case 1:o=e.sent();for(t=0,n=o;t<n.length;t++){i=n[t];i.readonly=r}return[2]}}))}))};r.prototype.onKeydown=function(r){return __awaiter(this,void 0,void 0,(function(){var o,t,n,i,e,a,s;return __generator(this,(function(d){switch(d.label){case 0:o=document.activeElement;if(!o){return[2]}t=o.closest('ion-accordion [slot="header"]');if(!t){return[2]}n=o.tagName==="ION-ACCORDION"?o:o.closest("ion-accordion");if(!n){return[2]}i=n.closest("ion-accordion-group");if(i!==this.el){return[2]}return[4,this.getAccordions()];case 1:e=d.sent();a=e.findIndex((function(r){return r===n}));if(a===-1){return[2]}if(r.key==="ArrowDown"){s=this.findNextAccordion(e,a)}else if(r.key==="ArrowUp"){s=this.findPreviousAccordion(e,a)}else if(r.key==="Home"){s=e[0]}else if(r.key==="End"){s=e[e.length-1]}if(s!==undefined&&s!==o){s.focus()}return[2]}}))}))};r.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){if(this.disabled){this.disabledChanged()}if(this.readonly){this.readonlyChanged()}return[2]}))}))};r.prototype.setValue=function(r){var o=this.value=r;this.ionChange.emit({value:o})};r.prototype.requestAccordionToggle=function(r,o){return __awaiter(this,void 0,void 0,(function(){var t,n,i,e,a,s,d,c,s,d;return __generator(this,(function(u){t=this,n=t.multiple,i=t.value,e=t.readonly,a=t.disabled;if(e||a){return[2]}if(o){if(n){s=i!==null&&i!==void 0?i:[];d=Array.isArray(s)?s:[s];c=d.find((function(o){return o===r}));if(c===undefined&&r!==undefined){this.setValue(__spreadArray(__spreadArray([],d,true),[r],false))}}else{this.setValue(r)}}else{if(n){s=i!==null&&i!==void 0?i:[];d=Array.isArray(s)?s:[s];this.setValue(d.filter((function(o){return o!==r})))}else{this.setValue(undefined)}}return[2]}))}))};r.prototype.findNextAccordion=function(r,o){var t=r[o+1];if(t===undefined){return r[0]}return t};r.prototype.findPreviousAccordion=function(r,o){var t=r[o-1];if(t===undefined){return r[r.length-1]}return t};r.prototype.getAccordions=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return[2,Array.from(this.el.querySelectorAll(":scope > ion-accordion"))]}))}))};r.prototype.render=function(){var r;var o=this,t=o.disabled,n=o.readonly,i=o.expand;var e=getIonMode(this);return h(Host,{class:(r={},r[e]=true,r["accordion-group-disabled"]=t,r["accordion-group-readonly"]=n,r["accordion-group-expand-".concat(i)]=true,r),role:"presentation"},h("slot",null))};Object.defineProperty(r.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(r,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:false,configurable:true});return r}();TpAccordionGroup.style={ios:tpAccordionGroupIosCss,md:tpAccordionGroupMdCss};export{TpAccordionGroup as med_accordion_group};