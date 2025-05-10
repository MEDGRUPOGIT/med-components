/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medRateBarCss = ":host{--spacing:8px 16px;--background:hsl(var(--med-color-neutral-2));--font-size:16px;--font-weight:600;--line-height:100%;--color:hsl(var(--med-color-neutral-10));padding:var(--spacing);background:var(--background);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:hsl(var(--med-color-neutral-10));display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) ::slotted(med-rate-like){--color:hsl(var(--med-color-neutral-contrast))}";

const MedRateBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-rate-bar': true,
      }) }, index.h("slot", null), index.h("slot", { name: "avaliacao" })));
  }
};
MedRateBar.style = medRateBarCss;

exports.med_rate_bar = MedRateBar;
