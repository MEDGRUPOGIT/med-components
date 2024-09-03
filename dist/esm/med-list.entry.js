/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-2567dca3.js';

const medListCss = ":host{--margin:0}:host(.med-list) ::slotted(med-list-item){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item:last-child){margin-bottom:0 !important}:host(.med-list) ::slotted(med-list-item-accordion){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item-accordion:last-child){margin-bottom:0 !important}:host(.med-list--xs) ::slotted(med-list-item){--margin:0 0 4px 0}:host(.med-list--sm) ::slotted(med-list-item){--margin:0 0 8px 0}:host(.med-list--md) ::slotted(med-list-item){--margin:0 0 16px 0}:host(.med-list--lg) ::slotted(med-list-item){--margin:0 0 24px 0}:host(.med-list--xs) ::slotted(med-list-item-accordion){--margin:0 0 4px 0}:host(.med-list--sm) ::slotted(med-list-item-accordion){--margin:0 0 8px 0}:host(.med-list--md) ::slotted(med-list-item-accordion){--margin:0 0 16px 0}:host(.med-list--lg) ::slotted(med-list-item-accordion){--margin:0 0 24px 0}";

const MedList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.margin = undefined;
  }
  render() {
    const { dsColor, margin } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-list': true,
        [`med-list--${margin}`]: margin !== undefined
      }) }, h("slot", null)));
  }
};
MedList.style = medListCss;

export { MedList as med_list };
