var __awaiter=this&&this.__awaiter||function(e,i,l,n){function a(e){return e instanceof l?e:new l((function(i){i(e)}))}return new(l||(l=Promise))((function(l,t){function c(e){try{o(n.next(e))}catch(i){t(i)}}function r(e){try{o(n["throw"](e))}catch(i){t(i)}}function o(e){e.done?l(e.value):a(e.value).then(c,r)}o((n=n.apply(e,i||[])).next())}))};var __generator=this&&this.__generator||function(e,i){var l={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},n,a,t,c;return c={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function r(e){return function(i){return o([e,i])}}function o(c){if(n)throw new TypeError("Generator is already executing.");while(l)try{if(n=1,a&&(t=c[0]&2?a["return"]:c[0]?a["throw"]||((t=a["return"])&&t.call(a),0):a.next)&&!(t=t.call(a,c[1])).done)return t;if(a=0,t)c=[c[0]&2,t.value];switch(c[0]){case 0:case 1:t=c;break;case 4:l.label++;return{value:c[1],done:false};case 5:l.label++;a=c[1];c=[0];continue;case 7:c=l.ops.pop();l.trys.pop();continue;default:if(!(t=l.trys,t=t.length>0&&t[t.length-1])&&(c[0]===6||c[0]===2)){l=0;continue}if(c[0]===3&&(!t||c[1]>t[0]&&c[1]<t[3])){l.label=c[1];break}if(c[0]===6&&l.label<t[1]){l.label=t[1];t=c;break}if(t&&l.label<t[2]){l.label=t[2];l.ops.push(c);break}if(t[2])l.ops.pop();l.trys.pop();continue}c=i.call(e,l)}catch(r){c=[6,r];a=0}finally{n=t=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-cc3b12d0.system.js","./p-383d7946.system.js"],(function(e){"use strict";var i,l,n,a;return{setters:[function(e){i=e.r;l=e.h;n=e.H},function(e){a=e.g}],execute:function(){var t=":host{--color:hsl(var(--med-color-neutral-10));--background:hsl(var(--med-color-brand-1));--lines:1}:host{background:var(--background);color:var(--color);padding:24px;font-size:14px;font-weight:400;line-height:20px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:100%}:host .med-question__icon{margin-top:8px;font-size:24px;stroke:var(--color);-webkit-transition:200ms -webkit-transform ease;transition:200ms -webkit-transform ease;transition:200ms transform ease;transition:200ms transform ease, 200ms -webkit-transform ease}:host .med-question__text{display:-webkit-box;-webkit-line-clamp:var(--lines);-webkit-box-orient:vertical;overflow:hidden;-webkit-animation:close 0.15s steps(10, end) backwards;animation:close 0.15s steps(10, end) backwards}:host(.med-question--collapsed) .med-question__text{-webkit-animation:open 0.15s steps(10, end) forwards;animation:open 0.15s steps(10, end) forwards}:host(.med-question--collapsed) .med-question__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}@-webkit-keyframes open{0%{-webkit-line-clamp:var(--lines)}10%{-webkit-line-clamp:calc(var(--lines) + 1)}20%{-webkit-line-clamp:calc(var(--lines) + 2)}30%{-webkit-line-clamp:calc(var(--lines) + 3)}40%{-webkit-line-clamp:calc(var(--lines) + 4)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 6)}70%{-webkit-line-clamp:calc(var(--lines) + 7)}80%{-webkit-line-clamp:calc(var(--lines) + 8)}90%{-webkit-line-clamp:calc(var(--lines) + 9)}100%{-webkit-line-clamp:initial}}@keyframes open{0%{-webkit-line-clamp:var(--lines)}10%{-webkit-line-clamp:calc(var(--lines) + 1)}20%{-webkit-line-clamp:calc(var(--lines) + 2)}30%{-webkit-line-clamp:calc(var(--lines) + 3)}40%{-webkit-line-clamp:calc(var(--lines) + 4)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 6)}70%{-webkit-line-clamp:calc(var(--lines) + 7)}80%{-webkit-line-clamp:calc(var(--lines) + 8)}90%{-webkit-line-clamp:calc(var(--lines) + 9)}100%{-webkit-line-clamp:initial}}@-webkit-keyframes close{0%{-webkit-line-clamp:initial}10%{-webkit-line-clamp:calc(var(--lines) + 9)}20%{-webkit-line-clamp:calc(var(--lines) + 8)}30%{-webkit-line-clamp:calc(var(--lines) + 7)}40%{-webkit-line-clamp:calc(var(--lines) + 6)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 4)}70%{-webkit-line-clamp:calc(var(--lines) + 3)}80%{-webkit-line-clamp:calc(var(--lines) + 2)}90%{-webkit-line-clamp:calc(var(--lines) + 1)}100%{-webkit-line-clamp:var(--lines)}}@keyframes close{0%{-webkit-line-clamp:initial}10%{-webkit-line-clamp:calc(var(--lines) + 9)}20%{-webkit-line-clamp:calc(var(--lines) + 8)}30%{-webkit-line-clamp:calc(var(--lines) + 7)}40%{-webkit-line-clamp:calc(var(--lines) + 6)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 4)}70%{-webkit-line-clamp:calc(var(--lines) + 3)}80%{-webkit-line-clamp:calc(var(--lines) + 2)}90%{-webkit-line-clamp:calc(var(--lines) + 1)}100%{-webkit-line-clamp:var(--lines)}}:host(.med-color){--color:fuck!;--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral-contrast));--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback-contrast));--background:hsl(var(--med-color-feedback))}";var c=e("med_question",function(){function e(e){i(this,e);this.collapsed=false}e.prototype.toggle=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){e===null||e===void 0?void 0:e.stopPropagation();this.collapsed=!this.collapsed;return[2]}))}))};e.prototype.render=function(){var e=this;var i=this,t=i.collapsed,c=i.texto,r=i.dsColor;return l(n,{"from-stencil":true,class:a(r,{"med-question":true,"med-question--collapsed":t}),onClick:function(i){e.toggle(i)}},l("div",{class:"med-question__text",innerHTML:c}),l("ion-icon",{class:"med-icon med-question__icon",name:"med-baixo"}))};return e}());c.style=t}}}));