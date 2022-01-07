import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medBaseCss = ".sc-med-base-h{--background:hsl(var(--med-color-neutral-2));--border-radius:8px;--padding:16px}.med-base.sc-med-base-h{background:var(--background);border-radius:var(--border-radius);padding:var(--padding);display:-ms-flexbox;display:flex}.med-color.sc-med-base-h{--background:hsl(var(--med-color-1))}.med-color-neutral.sc-med-base-h{--background:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-base-h{--background:hsl(var(--med-color-feedback))}.med-base--radius-s00.sc-med-base-h{border-radius:0px}.med-base--radius-s02.sc-med-base-h{border-radius:2px}.med-base--radius-s04.sc-med-base-h{border-radius:4px}.med-base--radius-s08.sc-med-base-h{border-radius:8px}.med-base--spacing-h-s00.sc-med-base-h{padding-left:0;padding-right:0}.med-base--spacing-h-s02.sc-med-base-h{padding-left:2px;padding-right:2px}.med-base--spacing-h-s04.sc-med-base-h{padding-left:4px;padding-right:4px}.med-base--spacing-h-s08.sc-med-base-h{padding-left:8px;padding-right:8px}.med-base--spacing-h-s12.sc-med-base-h{padding-left:12px;padding-right:12px}.med-base--spacing-h-s16.sc-med-base-h{padding-left:16px;padding-right:16px}.med-base--spacing-h-s20.sc-med-base-h{padding-left:20px;padding-right:20px}.med-base--spacing-h-s24.sc-med-base-h{padding-left:24px;padding-right:24px}.med-base--spacing-v-s00.sc-med-base-h{padding-top:0;padding-bottom:0}.med-base--spacing-v-s02.sc-med-base-h{padding-top:2px;padding-bottom:2px}.med-base--spacing-v-s04.sc-med-base-h{padding-top:4px;padding-bottom:4px}.med-base--spacing-v-s08.sc-med-base-h{padding-top:8px;padding-bottom:8px}.med-base--spacing-v-s12.sc-med-base-h{padding-top:12px;padding-bottom:12px}.med-base--spacing-v-s16.sc-med-base-h{padding-top:16px;padding-bottom:16px}.med-base--spacing-v-s20.sc-med-base-h{padding-top:20px;padding-bottom:20px}.med-base--spacing-v-s24.sc-med-base-h{padding-top:24px;padding-bottom:24px}";

const MedBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, radius, spacingV, spacingH } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-base': true,
        [`med-base--radius-${radius}`]: radius !== undefined,
        [`med-base--spacing-v-${spacingV}`]: spacingV !== undefined,
        [`med-base--spacing-h-${spacingH}`]: spacingH !== undefined,
      }) }, h("slot", { name: "start" }), h("slot", { name: "middle" }), h("slot", { name: "end" }), h("slot", null)));
  }
};
MedBase.style = medBaseCss;

export { MedBase as med_base };
