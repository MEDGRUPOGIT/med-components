/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as a,h as l,H as e}from"./p-d6129c6e.js";import{g as i}from"./p-6fc8b6b2.js";const t=class{constructor(l){a(this,l),this.valores=[],this.dsColor=void 0,this.dsSize=void 0}render(){const{dsColor:a,dsSize:t}=this;return l(e,{"from-stencil":!0,class:i(a,{"med-chart-radial-label":!0,[`med-chart-radial-label--${t}`]:void 0!==t})},l("ul",{class:"med-chart-radial-label__list"},this.valores.map((a=>l("li",{class:"med-chart-radial-label__item"},l("span",{class:{"med-chart-radial-label__quantia":!0,[a.cor]:!0}},a.quantia)," ",a.label)))))}};t.style=".sc-med-chart-radial-label-h{--font-size-item:12px;--font-size-quantia:24px}.med-chart-radial-label.sc-med-chart-radial-label-h{display:inline-block}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{list-style:none;padding:0}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{display:-ms-flexbox;display:flex}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label{font-size:var(--font-size-item);line-height:100%;color:hsl(var(--med-color-neutral-5));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:700;text-align:right}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:8px}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:0}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__quantia.sc-med-chart-radial-label{font-size:var(--font-size-quantia);line-height:100%;margin-right:8px;color:hsl(var(--med-color-feedback));font-weight:500;min-width:3ch}.med-chart-radial-label--lg.sc-med-chart-radial-label-h{--font-size-item:16px;--font-size-quantia:32px}";export{t as med_chart_radial_label}