'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medDropdownCss = ":host{--background:hsl(var(--med-color-neutral-3));--z-index:1;--border-radius:0 0 8px 8px;--border-color:hsl(var(--med-color-neutral-4));--left:0;--top:0}:host{display:block;background-color:var(--background);position:absolute;z-index:1;left:var(--left);top:var(--top);border-radius:var(--border-radius);width:100%}::slotted(med-item:not(:last-child)){border-bottom:1px solid var(--border-color)}:host(.med-dropdown--secondary){--background:hsl(var(--med-color-neutral-4));--border-color:hsl(var(--med-color-neutral-5))}";

const MedDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsName } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsName, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      }) }, index.h("slot", null)));
  }
};
MedDropdown.style = medDropdownCss;

exports.med_dropdown = MedDropdown;
