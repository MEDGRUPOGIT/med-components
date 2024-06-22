/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medDropdownCss = ":host{--background:hsl(var(--med-color-neutral-3));--z-index:1;--border-radius:0 0 8px 8px;--border-color:hsl(var(--med-color-neutral-4));--left:0;--top:0}:host{display:block;background-color:var(--background);position:absolute;z-index:1;left:var(--left);top:var(--top);border-radius:var(--border-radius);width:100%}::slotted(med-item:not(:last-child)){border-bottom:1px solid var(--border-color)}:host(.med-dropdown--secondary){--background:hsl(var(--med-color-neutral-4));--border-color:hsl(var(--med-color-neutral-5))}";

const MedDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsName = undefined;
  }
  render() {
    const { dsName } = this;
    return (index.h(index.Host, { class: color.generateMedColor(null, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      }) }, index.h("slot", null)));
  }
};
MedDropdown.style = medDropdownCss;

exports.med_dropdown = MedDropdown;
