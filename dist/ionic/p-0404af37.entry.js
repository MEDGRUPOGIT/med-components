/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as a,i as r,H as t}from"./p-d73a117d.js";import{g as e}from"./p-716fc783.js";const d=class{constructor(r){a(this,r),this.dsColor=void 0,this.dsName=void 0,this.dsSize=void 0,this.valores=[],this.titulo=void 0,this.subtitulo=void 0}render(){const{dsColor:a,dsName:d,dsSize:i,titulo:c,subtitulo:l}=this,s={total:0,subtotais:[]};this.valores.forEach((a=>{s.total+=a.quantia,s.subtotais.push(s.total)}));const h=this.valores.slice(0).reverse();return r(t,{"from-stencil":!0,class:e(a,{"med-chart-radial":!0,[`med-chart-radial--${d}`]:void 0!==d,[`med-chart-radial--${i}`]:void 0!==i})},r("svg",{viewBox:"0 0 36 36"},r("circle",{cx:"18",cy:"18",r:"16"}),h.map(((a,t)=>{if(!a.ignoreBarra&&0!==a.quantia)return r("circle",{cx:"18",cy:"18",r:"16",class:{size:!0,[a.cor]:!0},style:{"--size":""+s.subtotais[this.valores.length-t-1]/s.total*100}})}))),r("div",{class:"med-chart-radial__text-wrap"},c&&r("med-type",{class:"med-chart-radial__titulo"},c),c&&r("med-type",{class:"med-chart-radial__subtitulo"},l)),r("slot",null))}};d.style='.sc-med-chart-radial-h{--color-label:hsl(var(--med-color-neutral-2));--stroke-background:hsl(var(--med-color-neutral-2))}.sc-med-chart-radial-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.sc-med-chart-radial-h svg.sc-med-chart-radial{width:var(--size);height:var(--size)}.sc-med-chart-radial-h circle.sc-med-chart-radial{stroke-dashoffset:0;stroke:var(--stroke-background);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}.sc-med-chart-radial-h circle.size.sc-med-chart-radial{stroke-dasharray:var(--size) 100;stroke:var(--stroke-background)}.sc-med-chart-radial-h circle[class^="size med-color"].sc-med-chart-radial{stroke:hsl(var(--med-color-4))}.sc-med-chart-radial-h circle[class^="size med-color-neutral"].sc-med-chart-radial{stroke:hsl(var(--med-color-neutral))}.sc-med-chart-radial-h circle[class^="size med-color-fb"].sc-med-chart-radial{stroke:hsl(var(--med-color-feedback))}.med-chart-radial__text-wrap.sc-med-chart-radial{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center}.med-chart-radial__subtitulo.sc-med-chart-radial{--color:hsl(var(--med-color-neutral-7))}.med-chart-radial--xs.sc-med-chart-radial-h{--size:48px}.med-chart-radial--sm.sc-med-chart-radial-h{--size:56px}.med-chart-radial--md.sc-med-chart-radial-h{--size:80px}.med-chart-radial--lg.sc-med-chart-radial-h{--size:108px}.med-chart-radial--xs.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:12px;--line-height:12px;--font-weight:600}.med-chart-radial--sm.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:14px;--line-height:16px;--font-weight:600}.med-chart-radial--md.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:16px;--line-height:16px;--font-weight:600}.med-chart-radial--lg.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:20px;--line-height:20px;--font-weight:600}.med-chart-radial--xs.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{display:none}.med-chart-radial--sm.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{display:none}.med-chart-radial--md.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{--font-size:10px;--line-height:12px;--font-weight:400}.med-chart-radial--lg.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{--font-size:12px;--line-height:12px;--font-weight:400}.med-color.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--color:hsl(var(--med-color-4))}.med-color-neutral.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--color:hsl(var(--med-color-feedback))}.med-chart-radial--secondary.sc-med-chart-radial-h{--stroke-background:hsl(var(--med-color-neutral-1))}';export{d as med_chart_radial}