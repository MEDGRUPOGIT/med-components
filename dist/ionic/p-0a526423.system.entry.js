System.register(["./p-cc3b12d0.system.js","./p-456080eb.system.js"],(function(e){"use strict";var c,a,t,i,d;return{setters:[function(e){c=e.r;a=e.e;t=e.h;i=e.H},function(e){d=e.g}],execute:function(){var r=":host{display:block}.med-check-card__title{margin-right:16px}.med-check-card__title-wrap{display:-ms-flexbox;display:flex}@media (max-width: 575.98px){.med-check-card__title-wrap{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}}.med-check-card__base{--padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid transparent}.med-check-card__container{padding:16px 0 16px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-ms-flex:1;flex:1}@media (max-width: 575.98px){.med-check-card__container{padding:12px 0}}.med-check-card__input-container{padding:16px 0 16px 16px}@media (max-width: 575.98px){.med-check-card__input-container{padding:12px 0 12px 16px}}.med-check-card__text-container{padding:0 18px;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (max-width: 575.98px){.med-check-card__text-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}}.med-check-card__info-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (max-width: 575.98px){.med-check-card__info-container{margin-top:4px}}.med-check-card__icon{stroke:hsl(var(--med-color-neutral-8))}.med-check-card__container-fix{display:-ms-flexbox;display:flex}.med-check-card__subtitulo{--color:hsl(var(--med-color-neutral-8));margin:0 8px;stroke:hsl(var(--med-color-neutral-8))}.med-check-card__hora{--color:hsl(var(--med-color-neutral-8))}.med-check-card__data{--color:hsl(var(--med-color-neutral-8))}@media (max-width: 575.98px){.med-check-card__data{margin-top:8px}}.med-check-card__tooltip-container{padding:16px 16px 16px 0}@media (max-width: 575.98px){.med-check-card__tooltip-container{padding:12px 16px 12px 0}}:host(.med-check-card--alert) .med-check-card__base{border:1px solid hsl(var(--med-color-fb-warning))}";var n=e("med_check_card",function(){function e(e){c(this,e);this.medClick=a(this,"medClick",7);this.medTooltipClose=a(this,"medTooltipClose",7);this.alert=false}e.prototype.onClick=function(){this.medClick.emit()};e.prototype.onTooltipCloseClick=function(){this.medTooltipClose.emit()};e.prototype.render=function(){var e=this;var c=this,a=c.dsColor,r=c.alert,n=c.titulo,l=c.categoria,o=c.horaInicial,s=c.horaFinal,m=c.dataInicial,p=c.dataFinal,x=c.iconName;return t(i,{"from-stencil":true,class:d(a,{"med-check-card":true,"med-check-card--alert":r})},t("med-base",{"spacing-v":"s00","spacing-h":"s00",class:"med-check-card__base"},t("div",{class:"med-check-card__input-container"},t("slot",{name:"input"})),t("div",{class:"med-check-card__container",onClick:function(){return e.onClick()}},t("div",{class:"med-check-card__text-container"},t("med-type",{class:"med-check-card__title",token:"p16xb"},n),t("div",{class:"med-check-card__title-wrap"},t("div",{class:"med-check-card__info-container"},t("div",{class:"med-check-card__container-fix"},t("ion-icon",{class:"med-check-card__icon med-icon med-icon--xs",name:x}),t("med-type",{class:"med-check-card__subtitulo",token:"p12xb"},l)),!m&&!p&&o&&s&&t("med-type",{class:"med-check-card__hora",token:"p12x"},o," – ",s)),m&&p&&!o&&!s&&t("med-type",{class:"med-check-card__data",token:"p12x"},m," até ",p),m&&p&&o&&s&&t("med-type",{class:"med-check-card__data",token:"p12x"},m," - ",o," até ",p," - ",s)))),t("div",{class:r?"med-check-card__tooltip-container":""},t("slot",{name:"tooltip"}))))};return e}());n.style=r}}}));