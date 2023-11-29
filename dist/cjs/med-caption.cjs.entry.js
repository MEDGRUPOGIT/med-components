/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

const medCaptionCss = ":host{--font-size:16px;--font-weight:400;--line-height:100%;--color:hsl(var(--med-color-neutral-10))}:host{display:block}::slotted(*){font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0 !important;padding:0 !important}:host(.med-caption--xxs){--font-size:10px}:host(.med-caption--xs){--font-size:12px}:host(.med-caption--sm){--font-size:14px}:host(.med-caption--lg){--font-size:20px}:host(.med-caption--xl){--font-size:24px}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedCaption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.dsSize = undefined;
  }
  render() {
    const { dsColor, dsSize } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-caption': true,
        [`med-caption--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("slot", null)));
  }
};
MedCaption.style = medCaptionCss;

exports.med_caption = MedCaption;
