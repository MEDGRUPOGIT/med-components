/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, h, H as Host } from './index-27668d5b.js';
import { g as generateMedColor } from './color-f9402468.js';

const medChartRadialLabelCss = ".sc-med-chart-radial-label-h{--font-size-item:12px;--font-size-quantia:24px}.med-chart-radial-label.sc-med-chart-radial-label-h{display:inline-block}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{list-style:none;padding:0}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{display:-ms-flexbox;display:flex}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label{font-size:var(--font-size-item);line-height:100%;color:hsl(var(--med-color-neutral-5));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:700;text-align:right}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:8px}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:0}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__quantia.sc-med-chart-radial-label{font-size:var(--font-size-quantia);line-height:100%;margin-right:8px;color:hsl(var(--med-color-feedback));font-weight:500;min-width:3ch}.med-chart-radial-label--lg.sc-med-chart-radial-label-h{--font-size-item:16px;--font-size-quantia:32px}";

const MedChartRadialLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valores = [];
        this.dsColor = undefined;
        this.dsSize = undefined;
    }
    render() {
        const { dsColor, dsSize } = this;
        //const arrayReverse = this.valores.slice(0).reverse();
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                'med-chart-radial-label': true,
                [`med-chart-radial-label--${dsSize}`]: dsSize !== undefined,
            }) }, h("ul", { class: "med-chart-radial-label__list" }, this.valores.map((item) => {
            return h("li", { class: "med-chart-radial-label__item" }, h("span", { class: { 'med-chart-radial-label__quantia': true, [item.cor]: true } }, item.quantia), " ", item.label);
        }))));
    }
};
MedChartRadialLabel.style = medChartRadialLabelCss;

export { MedChartRadialLabel as med_chart_radial_label };
