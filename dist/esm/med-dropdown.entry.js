/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-2567dca3.js';

const medDropdownCss = ":host{--background:hsl(var(--med-color-neutral-3));--z-index:1;--border-radius:0 0 8px 8px;--border-color:hsl(var(--med-color-neutral-4));--left:0;--top:0}:host{display:block;background-color:var(--background);position:absolute;z-index:1;left:var(--left);top:var(--top);border-radius:var(--border-radius);width:100%;overflow-x:hidden !important}::slotted(med-item:not(:last-child)){border-bottom:1px solid var(--border-color)}:host(.med-dropdown--secondary){--background:hsl(var(--med-color-neutral-4));--border-color:hsl(var(--med-color-neutral-5))}";

const MedDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsName = undefined;
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
