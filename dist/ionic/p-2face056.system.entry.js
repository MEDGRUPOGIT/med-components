System.register(["./p-cc3b12d0.system.js","./p-383d7946.system.js"],(function(e){"use strict";var t,a,r,o;return{setters:[function(e){t=e.r;a=e.h;r=e.H},function(e){o=e.g}],execute:function(){var l=":host{--padding:12px}:host{padding:var(--padding);background:var(--background);display:block}:host .med-icon{margin-right:16px;width:16px;height:16px}.med-alert-fixed__container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.med-alert-fixed__text{--font-size:12px;--line-height:16px;--font-weight:400}:host(.med-alert-fixed--offline){--background:hsl(var(--med-color-fb-warning))}:host(.med-alert-fixed--offline) .med-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-alert-fixed--atualizar){--background:hsl(var(--med-color-provas-4))}:host(.med-alert-fixed--atualizar) .med-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";var d=e("med_alert_fixed",function(){function e(e){t(this,e);this.labelOffline="Você está offline. Conecte-se para acessar o conteúdo.";this.labelAtualizar="Versão desatualizada"}e.prototype.render=function(){var e;var t=this,l=t.dsColor,d=t.dsName,n=t.labelOffline,i=t.labelAtualizar;return a(r,{class:o(l,(e={"med-alert-fixed":true},e["med-alert-fixed--"+d]=d!==undefined,e))},d==="offline"&&a("div",{class:"med-alert-fixed__container"},a("ion-icon",{class:"med-icon",name:"med-offline"}),a("med-type",{class:"med-alert-fixed__text"},n)),d==="atualizar"&&a("div",{class:"med-alert-fixed__container"},a("ion-icon",{class:"med-icon",name:"med-alerta"}),a("med-type",{class:"med-alert-fixed__text"},i)),a("slot",null))};return e}());d.style=l}}}));