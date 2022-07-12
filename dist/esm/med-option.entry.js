import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medOptionCss = ":host{--spacing:16px;--padding:8px;--background:hsl(var(--med-color-neutral-7));--border-radius:8px;--height:32px;--label-font-size:16px;--label-font-weight:500;--label-line-height:100%;--label-color:hsl(var(--med-color-neutral-10));--label-spacing:4px;height:var(--height)}:host .option{padding:var(--padding);background:var(--background);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}[name=label]::slotted(*){text-align:center;width:16px;font-size:var(--label-font-size);font-weight:var(--label-font-weight);line-height:var(--label-line-height);color:var(--label-color);padding-left:var(--label-spacing)}:host(.med-color){--background:hsl(var(--med-color-3));--label-color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--label-color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--label-color:hsl(var(--med-color-feedback-contrast))}";

const MedOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-badge': true,
      }) }, h("div", { class: "option" }, h("slot", null), h("slot", { name: "label" }))));
  }
  static get delegatesFocus() { return true; }
};
MedOption.style = medOptionCss;

export { MedOption as med_option };
