'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');

const medTypeCss = ".sc-med-type-h{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-10))}.sc-med-type-h{display:block;margin:0;padding:0;color:var(--color) !important;font-weight:var(--font-weight) !important;font-size:var(--font-size) !important;line-height:var(--line-height) !important}.sc-med-type-h *.sc-med-type{margin:0;padding:0;color:var(--color) !important;font-weight:var(--font-weight) !important;font-size:var(--font-size) !important;line-height:var(--line-height) !important}.med-color.sc-med-type-h{--color:hsl(var(--med-color-3))}.med-color-neutral.sc-med-type-h{--color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-type-h{--color:hsl(var(--med-color-feedback))}.med-type--h48.sc-med-type-h{--font-size:48px;--font-weight:600;--line-height:48px}.med-type--h48x.sc-med-type-h{--font-size:48px;--font-weight:600;--line-height:64px}.med-type--h32.sc-med-type-h{--font-size:32px;--font-weight:600;--line-height:32px}.med-type--h32x.sc-med-type-h{--font-size:32px;--font-weight:600;--line-height:40px}.med-type--h24.sc-med-type-h{--font-size:24px;--font-weight:600;--line-height:24px}.med-type--h24x.sc-med-type-h{--font-size:24px;--font-weight:600;--line-height:32px}.med-type--h20.sc-med-type-h{--font-size:20px;--font-weight:600;--line-height:20px}.med-type--h20x.sc-med-type-h{--font-size:20px;--font-weight:600;--line-height:24px}.med-type--p16.sc-med-type-h{--font-size:16px;--font-weight:400;--line-height:16px}.med-type--p16b.sc-med-type-h{--font-size:16px;--font-weight:600;--line-height:16px}.med-type--p16x.sc-med-type-h{--font-size:16px;--font-weight:400;--line-height:24px}.med-type--p16xb.sc-med-type-h{--font-size:16px;--font-weight:600;--line-height:24px}.med-type--p14.sc-med-type-h{--font-size:14px;--font-weight:400;--line-height:16px}.med-type--p14b.sc-med-type-h{--font-size:14px;--font-weight:600;--line-height:16px}.med-type--p14x.sc-med-type-h{--font-size:14px;--font-weight:400;--line-height:20px}.med-type--p14xb.sc-med-type-h{--font-size:14px;--font-weight:600;--line-height:20px}.med-type--p12.sc-med-type-h{--font-size:12px;--font-weight:400;--line-height:12px}.med-type--p12b.sc-med-type-h{--font-size:12px;--font-weight:600;--line-height:12px}.med-type--p12x.sc-med-type-h{--font-size:12px;--font-weight:400;--line-height:16px}.med-type--p12xb.sc-med-type-h{--font-size:12px;--font-weight:600;--line-height:16px}.med-type--p10.sc-med-type-h{--font-size:10px;--font-weight:400;--line-height:12px}.med-type--p10b.sc-med-type-h{--font-size:10px;--font-weight:600;--line-height:12px}";

const MedType = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * todo
     */
    this.tag = 'span';
  }
  render() {
    const { dsColor, token, tag } = this;
    const TagType = tag === undefined ? 'span' : tag;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-type': true,
        [`med-type--${token}`]: token !== undefined,
      }) }, index.h(TagType, null, index.h("slot", null))));
  }
};
MedType.style = medTypeCss;

exports.med_type = MedType;
