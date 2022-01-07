'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const theme = require('./theme-f551502d.js');

const medListCss = ":host{--margin:0}:host(.med-list) ::slotted(med-list-item){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item:last-child){margin-bottom:0 !important}:host(.med-list) ::slotted(med-list-item-accordion){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item-accordion:last-child){margin-bottom:0 !important}:host(.med-list--xs) ::slotted(med-list-item){--margin:0 0 var(--med-spacing-stack-nano) 0}:host(.med-list--sm) ::slotted(med-list-item){--margin:0 0 var(--med-spacing-stack-xxxs) 0}:host(.med-list--md) ::slotted(med-list-item){--margin:0 0 var(--med-spacing-stack-base) 0}:host(.med-list--lg) ::slotted(med-list-item){--margin:0 0 var(--med-spacing-stack-xxs) 0}:host(.med-list--xs) ::slotted(med-list-item-accordion){--margin:0 0 var(--med-spacing-stack-nano) 0}:host(.med-list--sm) ::slotted(med-list-item-accordion){--margin:0 0 var(--med-spacing-stack-xxxs) 0}:host(.med-list--md) ::slotted(med-list-item-accordion){--margin:0 0 var(--med-spacing-stack-base) 0}:host(.med-list--lg) ::slotted(med-list-item-accordion){--margin:0 0 var(--med-spacing-stack-xxs) 0}";

const MedList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, margin } = this;
    return (index.h(index.Host, { "from-stencil": true, class: theme.createColorClasses(dsColor, {
        'med-list': true,
        [`med-list--${margin}`]: margin !== undefined
      }) }, index.h("slot", null)));
  }
};
MedList.style = medListCss;

exports.med_list = MedList;
