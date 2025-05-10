/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medChartRadialLabelCss = ".sc-med-chart-radial-label-h{--font-size-item:12px;--font-size-quantia:24px}.med-chart-radial-label.sc-med-chart-radial-label-h{display:inline-block}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{list-style:none;padding:0}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__list.sc-med-chart-radial-label{display:-ms-flexbox;display:flex}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label{font-size:var(--font-size-item);line-height:100%;color:hsl(var(--med-color-neutral-5));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:700;text-align:right}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:8px}@media (min-width: 992px){.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__item.sc-med-chart-radial-label:not(:last-of-type){padding-bottom:0}}.med-chart-radial-label.sc-med-chart-radial-label-h .med-chart-radial-label__quantia.sc-med-chart-radial-label{font-size:var(--font-size-quantia);line-height:100%;margin-right:8px;color:hsl(var(--med-color-feedback));font-weight:500;min-width:3ch}.med-chart-radial-label--lg.sc-med-chart-radial-label-h{--font-size-item:16px;--font-size-quantia:32px}";

const MedChartRadialLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valores = [];
    this.dsColor = undefined;
    this.dsSize = undefined;
  }
  render() {
    const { dsColor, dsSize } = this;
    //const arrayReverse = this.valores.slice(0).reverse();
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-chart-radial-label': true,
        [`med-chart-radial-label--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("ul", { class: "med-chart-radial-label__list" }, this.valores.map((item) => {
      return index.h("li", { class: "med-chart-radial-label__item" }, index.h("span", { class: { 'med-chart-radial-label__quantia': true, [item.cor]: true } }, item.quantia), " ", item.label);
    }))));
  }
};
MedChartRadialLabel.style = medChartRadialLabelCss;

exports.med_chart_radial_label = MedChartRadialLabel;
