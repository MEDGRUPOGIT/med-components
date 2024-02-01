/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71f41461.js');
const color = require('./color-2d957fd3.js');

const medChartCategoriaCss = ".sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-brand-4));--chart-track-background:hsl(var(--med-color-neutral-1))}.sc-med-chart-categoria-h{display:block}.med-chart-categoria__header.sc-med-chart-categoria{display:-ms-flexbox;display:flex}.med-chart-categoria__info.sc-med-chart-categoria{display:-ms-flexbox;display:flex;margin-left:auto;padding-left:16px}.med-chart-categoria__info-type.sc-med-chart-categoria{margin-left:3px}.med-chart-categoria__info-type--realizado.sc-med-chart-categoria{--color:var(--color-realizado)}.med-chart-categoria__meta.sc-med-chart-categoria{display:-ms-flexbox;display:flex}.med-chart-categoria__realizado.sc-med-chart-categoria{display:-ms-flexbox;display:flex;margin-left:30px}.med-chart-categoria__chart.sc-med-chart-categoria{padding-top:8px;--track-background:var(--chart-track-background)}.med-color.sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-4))}.med-color-neutral.sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chart-categoria-h{--color-realizado:hsl(var(--med-color-feedback))}";

const MedChartCategoria = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dsColor = undefined;
        this.value = 0;
        this.titulo = undefined;
        this.meta = undefined;
        this.realizado = undefined;
    }
    render() {
        const { dsColor, value, titulo, meta, realizado } = this;
        return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
                'med-chart-categoria': true,
            }) }, index.h("div", { class: "med-chart-categoria__header" }, index.h("med-type", { token: "p12b" }, titulo), index.h("div", { class: "med-chart-categoria__info" }, index.h("div", { class: "med-chart-categoria__meta" }, index.h("med-type", { token: "p10", dsColor: "neutral-8" }, "Meta"), index.h("med-type", { class: "med-chart-categoria__info-type", token: "p10b" }, meta)), index.h("div", { class: "med-chart-categoria__realizado" }, index.h("med-type", { token: "p10", dsColor: "neutral-8" }, "Realizado"), index.h("med-type", { class: "med-chart-categoria__info-type med-chart-categoria__info-type--realizado", token: "p10b" }, realizado)))), index.h("med-chart-bar-horizontal", { class: "med-chart-categoria__chart", dsColor: dsColor, value: value })));
    }
};
MedChartCategoria.style = medChartCategoriaCss;

exports.med_chart_categoria = MedChartCategoria;
