import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medDividerCss = ":host{--color:hsl(var(--med-color-neutral-5))}:host(.med-divider){display:block;text-align:left}:host(.med-divider) .med-divider__heading{padding:0;margin:0;padding-top:var(--med-spacing-stack-base);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold);color:var(--color)}:host(.med-color.med-divider){--color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-divider){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-divider){--color:hsl(var(--med-color-feedback))}";

const MedDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, text } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-divider': true
      }) }, h("h3", { class: "med-divider__heading" }, text)));
  }
};
MedDivider.style = medDividerCss;

export { MedDivider as med_divider };
