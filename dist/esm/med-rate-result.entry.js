import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { c as createColorClasses } from './theme-3b0eafd2.js';

const medRateResultCss = ":host{display:block;--color-excelent:hsl(var(--med-color-fb-success));--color-bom:hsl(var(--med-color-fb-attention));--color-regular:hsl(var(--med-color-fb-caution));--color-ruim:hsl(var(--med-color-fb-warning))}:host(.med-rate-result){font-size:var(--med-font-size-xxxs);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-default);display:-ms-flexbox;display:flex}:host(.med-rate-result) .med-rate-result__wrapper{margin-right:var(--med-spacing-inline-base);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(.med-rate-result) .med-rate-result__wrapper:last-child{margin-right:0}:host(.med-rate-result) .med-rate-result__wrapper--excelente{color:var(--color-excelent);stroke:var(--color-excelent)}:host(.med-rate-result) .med-rate-result__wrapper--excelente *{color:inherit;stroke:inherit}:host(.med-rate-result) .med-rate-result__wrapper--bom{color:var(--color-bom);stroke:var(--color-bom)}:host(.med-rate-result) .med-rate-result__wrapper--bom *{color:inherit;stroke:inherit}:host(.med-rate-result) .med-rate-result__wrapper--regular{color:var(--color-regular);stroke:var(--color-regular)}:host(.med-rate-result) .med-rate-result__wrapper--regular *{color:inherit;stroke:inherit}:host(.med-rate-result) .med-rate-result__wrapper--ruim{color:var(--color-ruim);stroke:var(--color-ruim)}:host(.med-rate-result) .med-rate-result__wrapper--ruim *{color:inherit;stroke:inherit}";

const MedRateResult = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { excelente, bom, regular, ruim } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-rate-result': true,
      }, null) }, h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--excelente" }, h("ion-icon", { class: "med-icon", name: "med-excelente" }), h("span", null, excelente)), h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--bom" }, h("ion-icon", { class: "med-icon", name: "med-bom" }), h("span", null, bom)), h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--regular" }, h("ion-icon", { class: "med-icon", name: "med-regular" }), h("span", null, regular)), h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--ruim" }, h("ion-icon", { class: "med-icon", name: "med-ruim" }), h("span", null, ruim))));
  }
};
MedRateResult.style = medRateResultCss;

export { MedRateResult as med_rate_result };
