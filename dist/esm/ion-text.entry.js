import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { b as getIonMode } from './ionic-global-10d9ffcf.js';
import { c as createColorClasses } from './theme-3b0eafd2.js';

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
