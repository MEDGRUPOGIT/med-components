'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medCaptionCss = ":host{--font-size:var(--med-font-size-xs);--font-weight:var(--med-font-weight-regular);--line-height:var(--med-line-height-compressed);--color:hsl(var(--med-color-neutral-10))}:host{display:block}::slotted(*){font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0 !important;padding:0 !important}:host(.med-caption--xxs){--font-size:var(--med-font-size-nano)}:host(.med-caption--xs){--font-size:var(--med-font-size-xxxs)}:host(.med-caption--sm){--font-size:var(--med-font-size-xxs)}:host(.med-caption--lg){--font-size:var(--med-font-size-sm)}:host(.med-caption--xl){--font-size:var(--med-font-size-md)}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedCaption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, dsSize } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-caption': true,
        [`med-caption--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("slot", null)));
  }
};
MedCaption.style = medCaptionCss;

exports.med_caption = MedCaption;
