import { r as registerInstance, h, H as Host } from './index-70672e81.js';

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
