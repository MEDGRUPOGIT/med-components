import{r as registerInstance,e as createEvent,h,H as Host}from"./index-70672e81.js";import{g as generateMedColor}from"./med-theme-33df6a63.js";var medNavSimpleCss=":host{--logo-background:hsl(var(--med-color-brand-2));display:block;overflow:auto;padding-top:calc(24px + var(--ion-safe-area-top, 0));padding-bottom:calc(24px + var(--ion-safe-area-bottom));overflow:auto;height:calc(100vh - calc(24px + var(--ion-safe-area-top, 0)) - calc(24px + var(--ion-safe-area-bottom)))}.med-nav-simple__wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:80px;min-height:100vh;background:hsl(var(--med-color-neutral-1))}.med-nav-simple__logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon-wrapper{border-radius:50%;width:40px;height:40px;-ms-flex-align:center;align-items:center;background:var(--logo-background);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon{stroke:hsl(var(--med-color-neutral-10))}.med-nav-simple__item{width:40px;margin-bottom:16px;--margin-left-text:0}:host(.med-color){--logo-background:hsl(var(--med-color-2))}:host(.med-color-neutral){--logo-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--logo-background:hsl(var(--med-color-feedback))}";var MedNavSimple=function(){function e(e){registerInstance(this,e);this.close=createEvent(this,"close",7)}e.prototype.clickHandle=function(){this.close.emit()};e.prototype.render=function(){var e=this;var o=this.dsColor;return h(Host,{class:generateMedColor(o,{"med-nav-simple":true})},h("nav",{class:"med-nav-simple__wrapper"},h("div",{class:"med-nav-simple__logo"},h("div",{class:"med-nav-simple__icon-wrapper"},h("ion-icon",{class:"med-nav-simple__icon med-icon med-icon--sm",name:"med-logo"}))),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-play",active:true}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-apostila"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-concursos"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-orientacao"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-metricas"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-qrcode"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-slidedeaula"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-duvidasacademicas"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-cronograma"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-bonus"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-drogas"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-anotacao"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-multimidia"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-concursos"}),h("med-nav-item",{"ds-color":o,class:"med-nav-simple__item",icon:"med-montaprovas"}),h("ion-button",{"ds-color":o,class:"med-nav__toggle","ds-name":"tertiary",onClick:function(){return e.clickHandle()}},h("ion-icon",{slot:"icon-only",class:"med-icon",name:"med-esquerda"}))))};return e}();MedNavSimple.style=medNavSimpleCss;export{MedNavSimple as med_nav_simple};