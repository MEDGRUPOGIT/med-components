System.register(["./p-cc3b12d0.system.js","./p-6db41d57.system.js","./p-4101c838.system.js","./p-b06466bf.system.js"],(function(e){"use strict";var t,n,i,c,a,o,s;return{setters:[function(e){t=e.r;n=e.e;i=e.h;c=e.H;a=e.i},function(e){o=e.createGesture},function(e){s=e.g},function(){}],execute:function(){var r=".sc-med-calendar-h{--background:hsl(var(--med-color-neutral-1));--width:166}.sc-med-calendar-h{background:var(--background)}.header.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-bottom:24px;background-color:transparent}.header__type.sc-med-calendar{-ms-flex:1;flex:1}.header__left.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;width:210px}.header__right.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__button-icon.sc-med-calendar{font-size:18px}.header__icon.sc-med-calendar{stroke:hsl(var(--med-color-neutral-8))}.content__header.sc-med-calendar{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.content__week-day.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:24px;width:calc(var(--width) * 1px);margin:0 auto}.content__week-type.sc-med-calendar{--font-size:12px;--font-weight:400;--line-height:12px;--color:hsl(var(--med-color-neutral-8))}.content__container.sc-med-calendar{display:grid;grid-template-columns:repeat(7, minmax(calc(var(--width) * 1px), 1fr));height:100%}.choice__type.sc-med-calendar{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-10));text-transform:none;margin-right:4px}.med-calendar--disable.sc-med-calendar-h .header__right.sc-med-calendar .med-button.sc-med-calendar{pointer-events:none}.med-color.sc-med-calendar-h{--main-color:hsl(var(--med-color-3))}.med-color-neutral.sc-med-calendar-h{--main-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-calendar-h{--main-color:hsl(var(--med-color-feedback))}";var l=e("med_calendar",function(){function e(e){t(this,e);this.medClick=n(this,"medClick",7);this.medSwipe=n(this,"medSwipe",7);this.disable=false;this.choice="Semana";this.width=166}e.prototype.connectedCallback=function(){var e=this;this.init();var t=new ResizeObserver((function(){e.init()}));if(this.container){var n=document.querySelector("."+this.container);t.observe(n)}else{t.observe(document.body)}};e.prototype.init=function(){if(this.container){var e=document.querySelector("."+this.container);var t=e===null||e===void 0?void 0:e.clientWidth;if(t<1200){this.width=t/7}}else{var n=window.innerWidth;if(n<1200){this.width=n/7}}};e.prototype.watchPropHandler=function(e){this.init()};e.prototype.componentDidLoad=function(){var e=this;var t;var n={el:this.containerEl,gestureName:"swipe",onStart:function(){},onMove:function(e){if(e.deltaX>0){t="right"}else{t="left"}},onEnd:function(){e.medSwipe.emit(t)}};this.gesture=o(n);this.gesture.enable()};e.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy()}};e.prototype.onChoiceClick=function(){this.choice=this.choice==="Semana"?"Mês":"Semana";this.medClick.emit(this.choice)};e.prototype.onMonthClick=function(e){this.medClick.emit(e)};e.prototype.render=function(){var e=this;var t=this,n=t.dsColor,a=t.mes,o=t.ano,r=t.disable;return i(c,{"from-stencil":true,class:s(n,{"med-calendar":true,"med-calendar--disable":r}),style:{"--width":""+this.width}},i("div",{class:"header"},i("div",{class:"header__left"},i("ion-button",{"icon-only":true,mode:"ios","ds-size":"xxs",fill:"clear",onClick:function(){return e.onMonthClick("prev")}},i("ion-icon",{slot:"icon-only",class:"med-icon",name:"med-esquerda"})),i("med-type",{class:"header__type",token:"p16b"},a," ",o),i("ion-button",{"icon-only":true,mode:"ios","ds-size":"xxs",fill:"clear",onClick:function(){return e.onMonthClick("next")}},i("ion-icon",{slot:"icon-only",class:"med-icon",name:"med-direita"}))),i("div",{class:"header__right"},i("ion-button",{mode:"ios","ds-size":"sm",fill:"clear",onClick:function(){return e.onChoiceClick()}},i("med-type",{class:"choice__type"},this.choice),i("ion-icon",{class:"med-icon header__icon",name:"med-baixo"})))),i("div",{class:"content"},i("div",{class:"content__header"},i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Seg")),i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Ter")),i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Qua")),i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Qui")),i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Sex")),i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Sab")),i("div",{class:"content__week-day"},i("med-type",{class:"content__week-type"},"Dom"))),i("div",{class:"content__container",ref:function(t){e.containerEl=t}},i("slot",null))))};Object.defineProperty(e.prototype,"hostElement",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{container:["watchPropHandler"]}},enumerable:false,configurable:true});return e}());l.style=r}}}));