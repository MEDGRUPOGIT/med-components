/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as a,h as r,H as e,f as t}from"./p-d6129c6e.js";import{g as l}from"./p-6fc8b6b2.js";const s=class{constructor(r){a(this,r),this.hostHeight=0,this.dsColor=void 0,this.value=0,this.height=50,this.width=32,this.noLabel=!1}componentDidLoad(){this.setSize()}disconnectedCallback(){this.hostResizeObserver&&this.hostResizeObserver.disconnect()}setSize(){this.hostResizeObserver=new ResizeObserver((()=>{var a;let r=Number(null===(a=this.hostElement)||void 0===a?void 0:a.getBoundingClientRect().height);r!==this.hostHeight&&(this.hostHeight=r)})),this.hostResizeObserver.observe(this.hostElement)}render(){const{dsColor:a,value:t,height:s,width:o}=this,c=0===t?s:s-s*t/100;return r(e,{class:l(a,{"med-chart-bar":!0}),style:{"--value":`${c}`,"--height":`${s}`,"--width":`${o}`}},r("div",{class:"med-chart-bar__container"},!this.noLabel&&r("div",{class:"med-chart-bar__label"},r("slot",null)),r("div",{class:"med-chart-bar__progress"})))}get hostElement(){return t(this)}};s.style=":host{--height-label:18;--background:hsl(var(--med-color-brand-3));--background-track:hsl(var(--med-color-neutral-2));--padding-label:6px}:host{overflow:hidden;height:calc(var(--height) + var(--height-label) * 1px);border-radius:2px}.med-chart-bar__label{height:calc(var(--height-label) * 1px)}.med-chart-bar__container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-webkit-transform:translateY(calc(var(--value) * 1px));transform:translateY(calc(var(--value) * 1px))}.med-chart-bar__progress{height:calc(var(--value) * 1px);background:var(--background);width:calc(var(--width) * 1px);height:calc(var(--height) * 1px);border-radius:2px}:host(.med-chart-bar[no-label]){background:var(--background-track)}::slotted(med-type){padding-bottom:var(--padding-label)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";export{s as med_chart_bar}