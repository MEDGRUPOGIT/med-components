var __awaiter=this&&this.__awaiter||function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,c){function r(e){try{u(o.next(e))}catch(t){c(t)}}function s(e){try{u(o["throw"](e))}catch(t){c(t)}}function u(e){e.done?n(e.value):i(e.value).then(r,s)}u((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},o,i,c,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(e){return function(t){return u([e,t])}}function u(s){if(o)throw new TypeError("Generator is already executing.");while(r&&(r=0,s[0]&&(n=0)),n)try{if(o=1,i&&(c=s[0]&2?i["return"]:s[0]?i["throw"]||((c=i["return"])&&c.call(i),0):i.next)&&!(c=c.call(i,s[1])).done)return c;if(i=0,c)s=[s[0]&2,c.value];switch(s[0]){case 0:case 1:c=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(c=n.trys,c=c.length>0&&c[c.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!c||s[1]>c[0]&&s[1]<c[3])){n.label=s[1];break}if(s[0]===6&&n.label<c[1]){n.label=c[1];c=s;break}if(c&&n.label<c[2]){n.label=c[2];n.ops.push(s);break}if(c[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(u){s=[6,u];i=0}finally{o=c=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-9eb92442.system.js","./p-79b708bb.system.js"],(function(e){"use strict";var t,n,o,i;return{setters:[function(e){t=e.r;n=e.i;o=e.H},function(e){i=e.g}],execute:function(){var c=".sc-med-context-menu-h{--background:hsl(var(--med-color-neutral-3));--color:hsl(var(--med-color-neutral-10));--z-index:1}.med-context-menu.sc-med-context-menu-h{display:block;position:relative}.med-context-menu.sc-med-context-menu-h .med-context-menu__content.sc-med-context-menu{z-index:var(--z-index);position:absolute;background:var(--background);right:-8px;top:-8px;min-width:264px;max-width:264px;width:100%;-webkit-box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);border-radius:4px;padding:16px;visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}.med-context-menu.sc-med-context-menu-h .med-context-menu__button.sc-med-context-menu{--font-size:24px}.med-context-menu.sc-med-context-menu-h .med-context-menu__icon.sc-med-context-menu{margin-right:0}.med-context-menu.sc-med-context-menu-h .med-context-menu__inner-button.sc-med-context-menu{position:absolute;right:8px;top:9px;--font-size:24px}.med-context-menu.sc-med-context-menu-h .med-context-menu__inner-icon.sc-med-context-menu{stroke:hsl(var(--med-color-neutral-10));font-size:24px}.med-context-menu--collapsed.sc-med-context-menu-h .med-context-menu__content.sc-med-context-menu{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;--z-index:0}";var r=e("med_context_menu",function(){function e(e){t(this,e);this.collapsed=true}e.prototype.toggle=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){e===null||e===void 0?void 0:e.stopPropagation();this.collapsed=!this.collapsed;return[2]}))}))};e.prototype.handleClick=function(e){if(!this.collapsed){this.toggle(e)}};e.prototype.render=function(){var e=this;return n(o,{"from-stencil":true,class:i(null,{"med-context-menu":true,"med-context-menu--collapsed":this.collapsed})},n("ion-button",{mode:"ios","icon-only":true,onClick:function(t){e.toggle(t)},class:"med-context-menu__button",fill:"clear","ds-size":"sm"},n("ion-icon",{slot:"icon-only",class:"med-icon med-context-menu__icon",name:"med-context-menu"})),n("div",{class:"med-context-menu__content"},n("ion-button",{mode:"ios","icon-only":true,onClick:function(t){e.toggle(t)},class:"med-context-menu__inner-button",fill:"clear","ds-size":"sm"},n("ion-icon",{slot:"icon-only",class:"med-icon med-context-menu__inner-icon",name:"med-context-menu"})),n("slot",null)))};return e}());r.style=c}}}));