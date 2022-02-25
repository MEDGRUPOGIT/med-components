import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medChartCategoriaCss = ".sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-brand-4));--chart-track-background:hsl(var(--med-color-neutral-1))}.sc-med-chart-categoria-h{display:block}.med-chart-categoria__header.sc-med-chart-categoria{display:-ms-flexbox;display:flex}.med-chart-categoria__info.sc-med-chart-categoria{display:-ms-flexbox;display:flex;margin-left:auto;padding-left:16px}.med-chart-categoria__info-type.sc-med-chart-categoria{margin-left:3px}.med-chart-categoria__info-type--realizado.sc-med-chart-categoria{--color:var(--color-realizado)}.med-chart-categoria__meta.sc-med-chart-categoria{display:-ms-flexbox;display:flex}.med-chart-categoria__realizado.sc-med-chart-categoria{display:-ms-flexbox;display:flex;margin-left:30px}.med-chart-categoria__chart.sc-med-chart-categoria{padding-top:8px;--track-background:var(--chart-track-background)}.med-color.sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-4))}.med-color-neutral.sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-feedback))}";

const MedChartCategoria = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define o valor do componente.
      */
    this.value = 0;
  }
  render() {
    const { dsColor, value, titulo, meta, realizado } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-chart-categoria': true,
      }) }, h("div", { class: "med-chart-categoria__header" }, h("med-type", { token: "p12b" }, titulo), h("div", { class: "med-chart-categoria__info" }, h("div", { class: "med-chart-categoria__meta" }, h("med-type", { token: "p10", dsColor: "neutral-8" }, "Meta"), h("med-type", { class: "med-chart-categoria__info-type", token: "p10b" }, meta)), h("div", { class: "med-chart-categoria__realizado" }, h("med-type", { token: "p10", dsColor: "neutral-8" }, "Realizado"), h("med-type", { class: "med-chart-categoria__info-type med-chart-categoria__info-type--realizado", token: "p10b" }, realizado)))), h("med-chart-bar-horizontal", { class: "med-chart-categoria__chart", dsColor: dsColor, value: value })));
  }
};
MedChartCategoria.style = medChartCategoriaCss;

export { MedChartCategoria as med_chart_categoria };
