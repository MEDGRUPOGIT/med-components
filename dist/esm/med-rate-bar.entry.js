import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medRateBarCss = ":host{--spacing:var(--med-spacing-squish-xs);--background:hsl(var(--med-color-neutral-2));--font-size:var(--med-font-size-xs);--font-weight:var(--med-font-weight-semibold);--line-height:var(--med-line-height-compressed);--color:hsl(var(--med-color-neutral-10));padding:var(--spacing);background:var(--background);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:hsl(var(--med-color-neutral-10));display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) ::slotted(med-rate-like){--color:hsl(var(--med-color-neutral-contrast))}";

const MedRateBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-rate-bar': true,
      }) }, h("slot", null), h("slot", { name: "avaliacao" })));
  }
};
MedRateBar.style = medRateBarCss;

export { MedRateBar as med_rate_bar };
