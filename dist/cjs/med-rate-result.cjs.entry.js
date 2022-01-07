'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const theme = require('./theme-f551502d.js');

const medRateResultCss = ":host{display:block;--color-excelent:hsl(var(--med-color-fb-success));--color-bom:hsl(var(--med-color-fb-attention));--color-regular:hsl(var(--med-color-fb-caution));--color-ruim:hsl(var(--med-color-fb-warning))}:host(.med-rate-result){font-size:var(--med-font-size-xxxs);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-default);display:-ms-flexbox;display:flex}:host(.med-rate-result) .med-rate-result__wrapper{margin-right:var(--med-spacing-inline-base);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(.med-rate-result) .med-rate-result__wrapper:last-child{margin-right:0}:host(.med-rate-result) .med-rate-result__wrapper--excelente{color:var(--color-excelent);stroke:var(--color-excelent)}:host(.med-rate-result) .med-rate-result__wrapper--excelente *{color:inherit;stroke:inherit}:host(.med-rate-result) .med-rate-result__wrapper--bom{color:var(--color-bom);stroke:var(--color-bom)}:host(.med-rate-result) .med-rate-result__wrapper--bom *{color:inherit;stroke:inherit}:host(.med-rate-result) .med-rate-result__wrapper--regular{color:var(--color-regular);stroke:var(--color-regular)}:host(.med-rate-result) .med-rate-result__wrapper--regular *{color:inherit;stroke:inherit}:host(.med-rate-result) .med-rate-result__wrapper--ruim{color:var(--color-ruim);stroke:var(--color-ruim)}:host(.med-rate-result) .med-rate-result__wrapper--ruim *{color:inherit;stroke:inherit}";

const MedRateResult = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { excelente, bom, regular, ruim } = this;
    return (index.h(index.Host, { "from-stencil": true, class: theme.createColorClasses(null, {
        'med-rate-result': true,
      }, null) }, index.h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--excelente" }, index.h("ion-icon", { class: "med-icon", name: "med-excelente" }), index.h("span", null, excelente)), index.h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--bom" }, index.h("ion-icon", { class: "med-icon", name: "med-bom" }), index.h("span", null, bom)), index.h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--regular" }, index.h("ion-icon", { class: "med-icon", name: "med-regular" }), index.h("span", null, regular)), index.h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--ruim" }, index.h("ion-icon", { class: "med-icon", name: "med-ruim" }), index.h("span", null, ruim))));
  }
};
MedRateResult.style = medRateResultCss;

exports.med_rate_result = MedRateResult;
