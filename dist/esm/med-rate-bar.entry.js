/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-2567dca3.js';

const medRateBarCss = ":host{--spacing:8px 16px;--background:hsl(var(--med-color-neutral-2));--font-size:16px;--font-weight:600;--line-height:100%;--color:hsl(var(--med-color-neutral-10));padding:var(--spacing);background:var(--background);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:hsl(var(--med-color-neutral-10));display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) ::slotted(med-rate-like){--color:hsl(var(--med-color-neutral-contrast))}";

const MedRateBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
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
