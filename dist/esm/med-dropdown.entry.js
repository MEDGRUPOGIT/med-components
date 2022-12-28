import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';

const medDropdownCss = ":host{--background:hsl(var(--med-color-neutral-3));--z-index:1;--border-radius:0 0 8px 8px;--border-color:hsl(var(--med-color-neutral-4));--left:0;--top:0}:host{display:block;background-color:var(--background);position:absolute;z-index:1;left:var(--left);top:var(--top);border-radius:var(--border-radius);width:100%}::slotted(med-item:not(:last-child)){border-bottom:1px solid var(--border-color)}:host(.med-dropdown--secondary){--background:hsl(var(--med-color-neutral-4));--border-color:hsl(var(--med-color-neutral-5))}";

const MedDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsName } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      }) }, h("slot", null)));
  }
};
MedDropdown.style = medDropdownCss;

export { MedDropdown as med_dropdown };
