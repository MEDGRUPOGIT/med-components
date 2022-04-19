'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medDividerCss = ":host{--color:hsl(var(--med-color-neutral-5))}:host(.med-divider){display:block;text-align:left}:host(.med-divider) .med-divider__heading{padding:0;margin:0;padding-top:16px;line-height:100%;font-weight:600;color:var(--color)}:host(.med-color.med-divider){--color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-divider){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-divider){--color:hsl(var(--med-color-feedback))}";

const MedDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, text } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-divider': true
      }) }, index.h("h3", { class: "med-divider__heading" }, text)));
  }
};
MedDivider.style = medDividerCss;

exports.med_divider = MedDivider;
