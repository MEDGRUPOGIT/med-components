import{r as e,e as t,h as s,H as n,i}from"./p-4d70e85a.js";import{createGesture as a}from"./p-2382bb77.js";import{g as o}from"./p-06394cd8.js";import"./p-57a37da4.js";const c=class{constructor(s){e(this,s),this.medClick=t(this,"medClick",7),this.medSwipe=t(this,"medSwipe",7),this.disable=!1,this.choice="Semana",this.width=166}connectedCallback(){this.init();const e=new ResizeObserver((()=>{this.init()}));if(this.container){const t=document.querySelector(`.${this.container}`);e.observe(t)}else e.observe(document.body)}init(){if(this.container){const e=document.querySelector(`.${this.container}`),t=null==e?void 0:e.clientWidth;t<1200&&(this.width=t/7)}else{const e=window.innerWidth;e<1200&&(this.width=e/7)}}watchPropHandler(e){this.init()}componentDidLoad(){let e;this.gesture=a({el:this.containerEl,gestureName:"swipe",onStart:()=>{},onMove:t=>{e=t.deltaX>0?"right":"left"},onEnd:()=>{this.medSwipe.emit(e)}}),this.gesture.enable()}disconnectedCallback(){this.gesture&&this.gesture.destroy()}onChoiceClick(){this.choice="Semana"===this.choice?"Mês":"Semana",this.medClick.emit(this.choice)}onMonthClick(e){this.medClick.emit(e)}render(){const{dsColor:e,mes:t,ano:i,disable:a}=this;return s(n,{"from-stencil":!0,class:o(e,{"med-calendar":!0,"med-calendar--disable":a}),style:{"--width":`${this.width}`}},s("div",{class:"header"},s("div",{class:"header__left"},s("ion-button",{"ds-size":"sm","ds-name":"tertiary",onClick:()=>this.onMonthClick("prev")},s("ion-icon",{slot:"icon-only",class:"med-icon",name:"med-esquerda"})),s("med-type",{class:"header__type",token:"p16b"},t," ",i),s("ion-button",{"ds-size":"sm","ds-name":"tertiary",onClick:()=>this.onMonthClick("next")},s("ion-icon",{slot:"icon-only",class:"med-icon",name:"med-direita"}))),s("div",{class:"header__right"},s("ion-button",{"ds-name":"tertiary",onClick:()=>this.onChoiceClick()},s("med-type",{class:"choice__type"},this.choice),s("ion-icon",{class:"med-icon header__icon",name:"med-baixo"})))),s("div",{class:"content"},s("div",{class:"content__header"},s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Seg")),s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Ter")),s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Qua")),s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Qui")),s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Sex")),s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Sab")),s("div",{class:"content__week-day"},s("med-type",{class:"content__week-type"},"Dom"))),s("div",{class:"content__container",ref:e=>{this.containerEl=e}},s("slot",null))))}get hostElement(){return i(this)}static get watchers(){return{container:["watchPropHandler"]}}};c.style=":host{--background:hsl(var(--med-color-neutral-1));--width:166}:host{background:var(--background)}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-bottom:24px}.header__type{-ms-flex:1;flex:1}.header__left{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;width:210px}.header__right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__button-icon{font-size:18px}.header__icon{stroke:hsl(var(--med-color-neutral-8))}.content__header{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.content__week-day{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:24px;width:calc(var(--width) * 1px);margin:0 auto}.content__week-type{--font-size:12px;--font-weight:400;--line-height:12px;--color:hsl(var(--med-color-neutral-8))}.content__container{display:grid;grid-template-columns:repeat(7, minmax(calc(var(--width) * 1px), 1fr));height:100%}.choice__type{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-8));text-transform:none}:host(.med-calendar--disable) .header__right .med-button{pointer-events:none}:host(.med-color){--main-color:hsl(var(--med-color-3))}:host(.med-color-neutral){--main-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--main-color:hsl(var(--med-color-feedback))}";export{c as med_calendar}