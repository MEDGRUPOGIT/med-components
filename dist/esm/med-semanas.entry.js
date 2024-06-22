/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medSemanasCss = ":host{--padding:16px}:host(.med-semanas){display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding:var(--padding)}::slotted(*){margin:4px}";

const MedSemanas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.skin = undefined;
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
