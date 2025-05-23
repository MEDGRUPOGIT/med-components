/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medBaseCss = ".sc-med-base-h{--background:hsl(var(--med-color-neutral-2));--text-color:hsl(var(--med-color-neutral-10));--border-radius:8px;--padding-horizontal:16px;--padding-vertical:16px;--gap:8px}.sc-med-base-h{display:-ms-flexbox;display:flex;background:var(--background);border-radius:var(--border-radius);padding:var(--padding-vertical) var(--padding-horizontal);color:var(--color)}.sc-med-base-s>med-type{--color:var(--text-color)}.sc-med-base-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1}.sc-med-base-h.sc-med-base-s>[slot=middle]{padding-left:var(--gap);padding-right:var(--gap)}.med-color.sc-med-base-h{--background:hsl(var(--med-color-1));--text-color:hsl(var(--med-color-neutral-10))}.med-color-neutral.sc-med-base-h{--background:hsl(var(--med-color-neutral));--text-color:hsl(var(--med-color-neutral-contrast))}.med-color-feedback.sc-med-base-h{--background:hsl(var(--med-color-feedback));--text-color:hsl(var(--med-color-feedback-contrast))}.med-base--radius-s00.sc-med-base-h{--border-radius:0px}.med-base--radius-s02.sc-med-base-h{--border-radius:2px}.med-base--radius-s04.sc-med-base-h{--border-radius:4px}.med-base--radius-s08.sc-med-base-h{--border-radius:8px}.sc-med-base-h.med-base--gap-s00.sc-med-base-s>[slot=middle]{--gap:0}.sc-med-base-h.med-base--gap-s02.sc-med-base-s>[slot=middle]{--gap:1px}.sc-med-base-h.med-base--gap-s04.sc-med-base-s>[slot=middle]{--gap:2px}.sc-med-base-h.med-base--gap-s08.sc-med-base-s>[slot=middle]{--gap:4px}.sc-med-base-h.med-base--gap-s12.sc-med-base-s>[slot=middle]{--gap:6px}.sc-med-base-h.med-base--gap-s16.sc-med-base-s>[slot=middle]{--gap:8px}.sc-med-base-h.med-base--gap-s20.sc-med-base-s>[slot=middle]{--gap:10px}.sc-med-base-h.med-base--gap-s24.sc-med-base-s>[slot=middle]{--gap:12px}.med-base--spacing-h-s00.sc-med-base-h{--padding-horizontal:0}.med-base--spacing-h-s02.sc-med-base-h{--padding-horizontal:2px}.med-base--spacing-h-s04.sc-med-base-h{--padding-horizontal:4px}.med-base--spacing-h-s08.sc-med-base-h{--padding-horizontal:8px}.med-base--spacing-h-s12.sc-med-base-h{--padding-horizontal:12px}.med-base--spacing-h-s16.sc-med-base-h{--padding-horizontal:16px}.med-base--spacing-h-s20.sc-med-base-h{--padding-horizontal:20px}.med-base--spacing-h-s24.sc-med-base-h{--padding-horizontal:24px}.med-base--spacing-v-s00.sc-med-base-h{--padding-vertical:0}.med-base--spacing-v-s02.sc-med-base-h{--padding-vertical:2px}.med-base--spacing-v-s04.sc-med-base-h{--padding-vertical:4px}.med-base--spacing-v-s08.sc-med-base-h{--padding-vertical:8px}.med-base--spacing-v-s12.sc-med-base-h{--padding-vertical:12px}.med-base--spacing-v-s16.sc-med-base-h{--padding-vertical:16px}.med-base--spacing-v-s20.sc-med-base-h{--padding-vertical:20px}.med-base--spacing-v-s24.sc-med-base-h{--padding-vertical:24px}";

const MedBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.radius = undefined;
    this.gap = undefined;
    this.spacingV = undefined;
    this.spacingH = undefined;
  }
  render() {
    const { dsColor, radius, gap, spacingV, spacingH } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-base': true,
        [`med-base--radius-${radius}`]: radius !== undefined,
        [`med-base--gap-${gap}`]: gap !== undefined,
        [`med-base--spacing-v-${spacingV}`]: spacingV !== undefined,
        [`med-base--spacing-h-${spacingH}`]: spacingH !== undefined,
      }) }, h("slot", { name: "start" }), h("slot", { name: "middle" }), h("slot", { name: "end" }), h("slot", null)));
  }
};
MedBase.style = medBaseCss;

export { MedBase as med_base };
