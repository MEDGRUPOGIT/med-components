/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r,h as a,H as e,f as t}from"./p-d6129c6e.js";import{g as c}from"./p-6fc8b6b2.js";const o=class{constructor(a){r(this,a),this.dsColor=void 0,this.dsName=void 0,this.label=void 0,this.labelSize=10,this.height=200,this.bar={color:"med-color-brand-4",value:0},this.hasMarker=!1,this.deactivated=!1,this.marker={color:"med-color-fb-caution",value:0}}render(){const{dsColor:r,dsName:t,label:o,labelSize:l,height:s,bar:b,hasMarker:h,deactivated:d,marker:m}=this;return a(e,{class:c(r,{"tp-chart-bar":!0,"tp-chart-bar--no-marker":!h,"tp-chart-bar--secondary":"secondary"===t,"tp-chart-bar--deactivated":d}),style:{"--label-size":`${l}px`,"--height":`${s}px`,"--value-bar":`${b.value}%`,"--value-marker":`${m.value}%`}},a("div",{class:"tp-chart-bar__bar-container"},a("div",{class:{"tp-chart-bar__bar":!0,[b.color]:!0}}),a("div",{class:{"tp-chart-bar__marker":!0,[m.color]:!0}})),o&&a("ion-label",{class:"tp-chart-bar__label","ds-color":"neutral-95"},o))}get host(){return t(this)}};o.style='.sc-med-chart-bar-2-h{--background:hsl(var(--med-color-neutral-2));--label-color:hsl(var(--med-color-neutral-95))}.med-color.sc-med-chart-bar-2-h{--label-color:hsl(var(--med-color-4))}.med-color-neutral.sc-med-chart-bar-2-h{--label-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chart-bar-2-h{--label-color:hsl(var(--med-color-feedback))}.sc-med-chart-bar-2-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;--label-size:10px;--height:200px;--value-bar:0%;--value-marker:0%;--display-marker:initial;--opacity:1}.tp-chart-bar__bar-container.sc-med-chart-bar-2{position:relative;background:var(--background);height:var(--height);width:8px;margin:0 auto;border-radius:4px}.tp-chart-bar__bar.sc-med-chart-bar-2{position:absolute;bottom:0;left:0;width:100%;height:0%;border-radius:4px;background:var(--color-bar);-webkit-animation:load-bar 1s forwards ease-in-out;animation:load-bar 1s forwards ease-in-out}.tp-chart-bar__bar[class^="tp-chart-bar__bar med-color"].sc-med-chart-bar-2{--color-bar:hsl(var(--med-color-4))}.tp-chart-bar__bar[class^="tp-chart-bar__bar med-color-neutral"].sc-med-chart-bar-2{--color-bar:hsl(var(--med-color-neutral))}.tp-chart-bar__bar[class^="tp-chart-bar__bar med-color-fb"].sc-med-chart-bar-2{--color-bar:hsl(var(--med-color-feedback))}.tp-chart-bar__marker.sc-med-chart-bar-2{position:absolute;left:0;bottom:var(--value-marker);display:var(--display-marker);width:24px;height:6px;-webkit-transform:translate(-8px, 50%);transform:translate(-8px, 50%);border-radius:3px;background:var(--color-marker)}.tp-chart-bar__marker[class^="tp-chart-bar__marker med-color"].sc-med-chart-bar-2{--color-marker:hsl(var(--med-color-4))}.tp-chart-bar__marker[class^="tp-chart-bar__marker med-color-neutral"].sc-med-chart-bar-2{--color-marker:hsl(var(--med-color-neutral))}.tp-chart-bar__marker[class^="tp-chart-bar__marker med-color-fb"].sc-med-chart-bar-2{--color-marker:hsl(var(--med-color-feedback))}.tp-chart-bar__label.sc-med-chart-bar-2{margin-top:10px;font-size:var(--label-size);line-height:1;color:var(--label-color) !important}.tp-chart-bar--no-marker.sc-med-chart-bar-2-h{--display-marker:none}.tp-chart-bar--secondary.sc-med-chart-bar-2-h{--background:hsl(var(--med-color-neutral-3))}.tp-chart-bar--deactivated.sc-med-chart-bar-2-h{--background:hsl(var(--med-color-neutral-15))}.tp-chart-bar--deactivated.sc-med-chart-bar-2-h .tp-chart-bar__bar.sc-med-chart-bar-2{--color-bar:hsl(var(--med-color-neutral-5))}@-webkit-keyframes load-bar{from{height:0%}to{height:var(--value-bar)}}@keyframes load-bar{from{height:0%}to{height:var(--value-bar)}}';export{o as med_chart_bar_2}