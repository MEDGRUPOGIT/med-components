'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medChartRadialLabelCss = ".sc-med-chart-radial-label-h{--font-size-item:var(--med-font-size-nano);--font-size-quantia:var(--med-font-size-md)}.med-chart-radial-label.sc-med-chart-radial-label-h{display:inline-block}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{list-style:none;padding:0}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{display:-ms-flexbox;display:flex}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label{font-size:var(--font-size-item);line-height:var(--med-line-height-compressed);color:hsl(var(--med-color-neutral-5));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:var(--med-font-weight-bold);text-align:right}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:var(--med-spacing-stack-xxxs)}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:0}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__quantia.sc-med-chart-radial-label{font-size:var(--font-size-quantia);line-height:var(--med-line-height-compressed);margin-right:var(--med-spacing-inline-xxxs);color:hsl(var(--med-color-feedback));font-weight:var(--med-font-weight-bold);min-width:3ch}.med-chart-radial-label--lg.sc-med-chart-radial-label-h{--font-size-item:var(--med-font-size-xs);--font-size-quantia:var(--med-font-size-lg)}";

const MedChartRadialLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * TODO
     */
    this.valores = [];
  }
  render() {
    const { dsColor, dsSize } = this;
    //const arrayReverse = this.valores.slice(0).reverse();
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-chart-radial-label': true,
        [`med-chart-radial-label--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("ul", { class: "med-chart-radial-label__list" }, this.valores.map((item) => {
      return index.h("li", { class: "med-chart-radial-label__item" }, index.h("span", { class: { 'med-chart-radial-label__quantia': true, [item.cor]: true } }, item.quantia), " ", item.label);
    }))));
  }
};
MedChartRadialLabel.style = medChartRadialLabelCss;

exports.med_chart_radial_label = MedChartRadialLabel;
