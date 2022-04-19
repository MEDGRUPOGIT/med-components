import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { c as createColorClasses } from './theme-3b0eafd2.js';

const medListCss = ":host{--margin:0}:host(.med-list) ::slotted(med-list-item){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item:last-child){margin-bottom:0 !important}:host(.med-list) ::slotted(med-list-item-accordion){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item-accordion:last-child){margin-bottom:0 !important}:host(.med-list--xs) ::slotted(med-list-item){--margin:0 0 4px 0}:host(.med-list--sm) ::slotted(med-list-item){--margin:0 0 8px 0}:host(.med-list--md) ::slotted(med-list-item){--margin:0 0 16px 0}:host(.med-list--lg) ::slotted(med-list-item){--margin:0 0 24px 0}:host(.med-list--xs) ::slotted(med-list-item-accordion){--margin:0 0 4px 0}:host(.med-list--sm) ::slotted(med-list-item-accordion){--margin:0 0 8px 0}:host(.med-list--md) ::slotted(med-list-item-accordion){--margin:0 0 16px 0}:host(.med-list--lg) ::slotted(med-list-item-accordion){--margin:0 0 24px 0}";

const MedList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, margin } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(dsColor, {
        'med-list': true,
        [`med-list--${margin}`]: margin !== undefined
      }) }, h("slot", null)));
  }
};
MedList.style = medListCss;

export { MedList as med_list };
