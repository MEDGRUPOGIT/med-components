import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medHeadingCss = ":host{--font-size:var(--med-font-size-md);--font-weight:var(--med-font-weight-semibold);--line-height:var(--med-line-height-compressed);--color:hsl(var(--med-color-neutral-10))}:host{display:block}::slotted(*){font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0 !important;padding:0 !important}:host(.med-heading--xxs){--font-size:var(--med-font-size-xxs);--font-weight:var(--med-font-weight-bold);--line-height:var(--med-line-height-compressed)}:host(.med-heading--xs){--font-size:var(--med-font-size-xs);--font-weight:var(--med-font-weight-bold);--line-height:var(--med-line-height-compressed)}:host(.med-heading--sm){--font-size:var(--med-font-size-sm)}:host(.med-heading--md){--font-size:var(--med-font-size-lg)}:host(.med-heading--lg){--font-size:var(--med-font-size-xl)}:host(.med-heading--xl){--font-size:var(--med-font-size-xxl)}:host(.med-heading--high.med-heading--xxs){--line-height:24px}:host(.med-heading--high.med-heading--xs){--line-height:24px}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, dsName, dsSize } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-heading': true,
        [`med-heading--${dsName}`]: dsName !== undefined,
        [`med-heading--${dsSize}`]: dsSize !== undefined,
      }) }, h("slot", null)));
  }
};
MedHeading.style = medHeadingCss;

export { MedHeading as med_heading };
