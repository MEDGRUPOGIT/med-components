import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medSubtitleCss = ":host{--font-size:var(--med-font-size-md);--font-weight:var(--med-font-weight-medium);--line-height:32px;--color:hsl(var(--med-color-neutral-10))}:host{display:block}::slotted(*){font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0 !important;padding:0 !important}:host(.med-subtitle--sm){--font-size:var(--med-font-size-sm)}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, dsName, dsSize } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-subtitle': true,
        [`med-subtitle--${dsName}`]: dsName !== undefined,
        [`med-subtitle--${dsSize}`]: dsSize !== undefined,
      }) }, h("slot", null)));
  }
};
MedSubtitle.style = medSubtitleCss;

export { MedSubtitle as med_subtitle };
