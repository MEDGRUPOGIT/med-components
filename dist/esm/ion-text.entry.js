import { r as registerInstance, h, H as Host } from './index-3ccd7557.js';
import { b as getIonMode } from './ionic-global-cc7644a8.js';
import { c as createColorClasses } from './theme-0269729a.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };
