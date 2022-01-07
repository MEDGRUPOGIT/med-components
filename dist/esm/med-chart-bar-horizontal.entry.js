import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medChartBarHorizontalCss = ":host{--background:hsl(var(--med-color-neutral-1));--progress-background:hsl(var(--med-color-brand-4));--label-color:hsl(var(--med-color-brand-4));--border-radius:4px;--height:8px}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-chart-bar-horizontal__container{position:relative;width:100%;border-radius:var(--border-radius);overflow:hidden}.med-chart-bar-horizontal__progress,.med-chart-bar-horizontal__track{-webkit-transform-origin:left;transform-origin:left;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear;height:var(--height);border-radius:var(--border-radius)}.med-chart-bar-horizontal__progress{background:var(--progress-background);-webkit-transform:translateX(calc(var(--progress) * 1%));transform:translateX(calc(var(--progress) * 1%));position:absolute;top:0;right:0;bottom:0;left:0;-webkit-animation:start 300ms linear;animation:start 300ms linear}.med-chart-bar-horizontal__track{background:var(--background)}.med-chart-bar-horizontal__label{--color:var(--label-color);margin-left:12px}:host(.med-color){--progress-background:hsl(var(--med-color-4));--label-color:hsl(var(--med-color-4))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral));--label-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback));--label-color:hsl(var(--med-color-feedback))}@-webkit-keyframes start{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(calc(var(--progress) * 1%));transform:translateX(calc(var(--progress) * 1%))}}@keyframes start{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(calc(var(--progress) * 1%));transform:translateX(calc(var(--progress) * 1%))}}";

const MedChartBarHorizontal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Define o valor do componente.
     */
    this.value = 0;
  }
  render() {
    const { dsColor, value } = this;
    return (h(Host, { class: generateMedColor(dsColor, { ['med-chart-bar-horizontal']: true }), "aria-valuenow": value, "aria-valuemin": "0", "aria-valuemax": "1", role: "progressbar" }, h("div", { class: "med-chart-bar-horizontal__container" }, h("div", { class: "med-chart-bar-horizontal__progress", part: "progress", style: { '--progress': `${value === 0 ? -100 : value - 100}` } }), h("div", { class: "med-chart-bar-horizontal__track", part: "track" })), h("med-type", { class: "med-chart-bar-horizontal__label", token: "p10b" }, value, "%")));
  }
};
MedChartBarHorizontal.style = medChartBarHorizontalCss;

export { MedChartBarHorizontal as med_chart_bar_horizontal };
