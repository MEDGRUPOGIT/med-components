var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function s(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):o(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(n=0)),n)try{if(r=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(c){s=[6,c];o=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++){if(i||!(r in e)){if(!i)i=Array.prototype.slice.call(e,0,r);i[r]=e[r]}}return t.concat(i||Array.prototype.slice.call(e))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-9eb92442.system.js","./p-7309e845.system.js"],(function(t){"use strict";var e,n,r,o,i,a;return{setters:[function(t){e=t.r;n=t.f;r=t.i;o=t.H;i=t.j},function(t){a=t.b}],execute:function(){var s=function(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}return console.warn.apply(console,__spreadArray(["[Ionic Warning]: ".concat(t)],e,false))};var c=":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";var d=":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var u=t("tp_accordion_group",function(){function t(t){e(this,t);this.ionChange=n(this,"ionChange",7);this.ionValueChange=n(this,"ionValueChange",7);this.animated=true;this.multiple=undefined;this.value=undefined;this.disabled=false;this.readonly=false;this.expand="compact"}t.prototype.valueChanged=function(){var t=this,e=t.value,n=t.multiple;if(!n&&Array.isArray(e)){s('ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: ['.concat(e.map((function(t){return"'".concat(t,"'")})).join(", "),"]\n"),this.el)}this.ionValueChange.emit({value:this.value})};t.prototype.disabledChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,r,o;return __generator(this,(function(i){switch(i.label){case 0:t=this.disabled;return[4,this.getAccordions()];case 1:e=i.sent();for(n=0,r=e;n<r.length;n++){o=r[n];o.disabled=t}return[2]}}))}))};t.prototype.readonlyChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,r,o;return __generator(this,(function(i){switch(i.label){case 0:t=this.readonly;return[4,this.getAccordions()];case 1:e=i.sent();for(n=0,r=e;n<r.length;n++){o=r[n];o.readonly=t}return[2]}}))}))};t.prototype.onKeydown=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,o,i,a,s;return __generator(this,(function(c){switch(c.label){case 0:e=document.activeElement;if(!e){return[2]}n=e.closest('ion-accordion [slot="header"]');if(!n){return[2]}r=e.tagName==="ION-ACCORDION"?e:e.closest("ion-accordion");if(!r){return[2]}o=r.closest("ion-accordion-group");if(o!==this.el){return[2]}return[4,this.getAccordions()];case 1:i=c.sent();a=i.findIndex((function(t){return t===r}));if(a===-1){return[2]}if(t.key==="ArrowDown"){s=this.findNextAccordion(i,a)}else if(t.key==="ArrowUp"){s=this.findPreviousAccordion(i,a)}else if(t.key==="Home"){s=i[0]}else if(t.key==="End"){s=i[i.length-1]}if(s!==undefined&&s!==e){s.focus()}return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.disabled){this.disabledChanged()}if(this.readonly){this.readonlyChanged()}return[2]}))}))};t.prototype.setValue=function(t){var e=this.value=t;this.ionChange.emit({value:e})};t.prototype.requestAccordionToggle=function(t,e){return __awaiter(this,void 0,void 0,(function(){var n,r,o,i,a,s,c,d,s,c;return __generator(this,(function(u){n=this,r=n.multiple,o=n.value,i=n.readonly,a=n.disabled;if(i||a){return[2]}if(e){if(r){s=o!==null&&o!==void 0?o:[];c=Array.isArray(s)?s:[s];d=c.find((function(e){return e===t}));if(d===undefined&&t!==undefined){this.setValue(__spreadArray(__spreadArray([],c,true),[t],false))}}else{this.setValue(t)}}else{if(r){s=o!==null&&o!==void 0?o:[];c=Array.isArray(s)?s:[s];this.setValue(c.filter((function(e){return e!==t})))}else{this.setValue(undefined)}}return[2]}))}))};t.prototype.findNextAccordion=function(t,e){var n=t[e+1];if(n===undefined){return t[0]}return n};t.prototype.findPreviousAccordion=function(t,e){var n=t[e-1];if(n===undefined){return t[t.length-1]}return n};t.prototype.getAccordions=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Array.from(this.el.querySelectorAll(":scope > ion-accordion"))]}))}))};t.prototype.render=function(){var t;var e=this,n=e.disabled,i=e.readonly,s=e.expand;var c=a(this);return r(o,{class:(t={},t[c]=true,t["accordion-group-disabled"]=n,t["accordion-group-readonly"]=i,t["accordion-group-expand-".concat(s)]=true,t),role:"presentation"},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:false,configurable:true});return t}());u.style={ios:c,md:d}}}}));