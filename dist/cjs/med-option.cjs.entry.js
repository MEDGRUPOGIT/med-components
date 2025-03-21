/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medOptionCss = ":host{--spacing:16px;--padding:8px;--background:hsl(var(--med-color-neutral-7));--border-radius:8px;--height:32px;--label-font-size:16px;--label-font-weight:500;--label-line-height:100%;--label-color:hsl(var(--med-color-neutral-10));--label-spacing:4px;height:var(--height)}:host .option{padding:var(--padding);background:var(--background);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}[name=label]::slotted(*){text-align:center;width:16px;font-size:var(--label-font-size);font-weight:var(--label-font-weight);line-height:var(--label-line-height);color:var(--label-color);padding-left:var(--label-spacing)}:host(.med-color){--background:hsl(var(--med-color-3));--label-color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--label-color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--label-color:hsl(var(--med-color-feedback-contrast))}";

const MedOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-badge': true,
      }) }, index.h("div", { class: "option" }, index.h("slot", null), index.h("slot", { name: "label" }))));
  }
  static get delegatesFocus() { return true; }
};
MedOption.style = medOptionCss;

exports.med_option = MedOption;
