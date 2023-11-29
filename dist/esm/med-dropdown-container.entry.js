/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const medDropdownContainerCss = ".sc-med-dropdown-container-h{display:block;position:relative}.sc-med-dropdown-container-s>med-dropdown+ion-select{--border-radius:8px 8px 0 0}.sc-med-dropdown-container-s>med-dropdown{--top:40px}";

const MedDropdownContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MedDropdownContainer.style = medDropdownContainerCss;

export { MedDropdownContainer as med_dropdown_container };
