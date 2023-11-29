/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const medInputCss = ":host{display:block}::slotted(med-type){padding-bottom:8px}::slotted(ion-textarea){margin:0}";

const MedInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", { name: "label" }), h("slot", { name: "input" })));
  }
};
MedInput.style = medInputCss;

export { MedInput as med_input };
