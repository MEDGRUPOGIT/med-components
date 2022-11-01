import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-a516669b.js';

const medSemanasCss = ":host{--padding:16px}:host(.med-semanas){display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding:var(--padding)}::slotted(*){margin:4px}";

const MedSemanas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { skin } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-semanas': true,
        [`med-semanas--${skin}`]: skin !== undefined,
      }) }, h("slot", null)));
  }
};
MedSemanas.style = medSemanasCss;

export { MedSemanas as med_semanas };
