import{r as a,h as e,H as r,i as t}from"./p-4d70e85a.js";import{g as s}from"./p-b87b9a9f.js";const l=class{constructor(e){a(this,e),this.hostHeight=0,this.value=0,this.height=50,this.width=24}componentDidLoad(){this.setSize()}disconnectedCallback(){this.hostResizeObserver&&this.hostResizeObserver.disconnect()}setSize(){this.hostResizeObserver=new ResizeObserver((()=>{var a;let e=Number(null===(a=this.hostElement)||void 0===a?void 0:a.getBoundingClientRect().height);e!==this.hostHeight&&(this.hostHeight=e)})),this.hostResizeObserver.observe(this.hostElement)}render(){const{dsColor:a,value:t,height:l,width:h}=this,o=0===t?l:l-l*t/100;return e(r,{class:s(a,{"med-chart-bar":!0}),style:{"--value":`${o}`,"--height":`${l}`,"--width":`${h}`}},e("div",{class:"med-chart-bar__container"},e("div",{class:"med-chart-bar__label"},e("slot",null)),e("div",{class:"med-chart-bar__progress"})))}get hostElement(){return t(this)}};l.style=":host{--height-label:18;--background:hsl(var(--med-color-brand-3))}:host{overflow:hidden;height:calc(var(--height) + var(--height-label) * 1px);border-radius:2px}.med-chart-bar__label{height:calc(var(--height-label) * 1px)}.med-chart-bar__container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-webkit-transform:translateY(calc(var(--value) * 1px));transform:translateY(calc(var(--value) * 1px))}.med-chart-bar__progress{height:calc(var(--value) * 1px);background:var(--background);width:calc(var(--width) * 1px);height:calc(var(--height) * 1px);border-radius:2px}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";export{l as med_chart_bar}