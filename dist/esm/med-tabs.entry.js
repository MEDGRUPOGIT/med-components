import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTabsCss = ":host(.med-tabs){display:-ms-flexbox;display:flex;overflow-y:hidden;overflow-x:auto;width:100%;height:50px}";

const MedTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tabs': true,
      }) }, h("slot", null)));
  }
};
MedTabs.style = medTabsCss;

export { MedTabs as med_tabs };
