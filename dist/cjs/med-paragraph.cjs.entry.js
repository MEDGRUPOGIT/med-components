'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medParagraphCss = ":host{--font-size:var(--med-font-size-xs);--font-weight:var(--med-font-weight-regular);--line-height:24px;--color:hsl(var(--med-color-neutral-10))}:host{display:block}::slotted(*){font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0 !important;padding:0 !important}:host(.med-paragraph--xxs){--font-size:var(--med-font-size-nano);--line-height:16px}:host(.med-paragraph--xs){--font-size:var(--med-font-size-xxxs);--line-height:16px}:host(.med-paragraph--sm){--font-size:var(--med-font-size-xxs);--line-height:24px}:host(.med-paragraph--lg){--font-size:var(--med-font-size-sm);--line-height:32px}:host(.med-paragraph--xl){--font-size:var(--med-font-size-md);--line-height:32px}:host(.med-paragraph--double){--font-size:var(--med-font-size-xs);--line-height:var(--med-line-height-double)}:host(.med-paragraph--double.med-paragraph--xs){--font-size:var(--med-font-size-xxxs);--line-height:var(--med-line-height-double)}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedParagraph = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, dsName, dsSize } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-paragraph': true,
        [`med-paragraph--${dsName}`]: dsName !== undefined,
        [`med-paragraph--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("slot", null)));
  }
};
MedParagraph.style = medParagraphCss;

exports.med_paragraph = MedParagraph;
