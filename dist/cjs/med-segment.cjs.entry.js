'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medSegmentCss = ":host{display:block;overflow:hidden;position:relative}.med-segment__container{display:-ms-flexbox;display:flex;overflow:auto;-ms-overflow-style:none;scrollbar-width:none;overflow-y:scroll}.med-segment__container::-webkit-scrollbar{display:none}.med-segment__fade{width:24px;height:28px;background-image:-webkit-gradient(linear, right top, left top, from(#293132), to(rgba(41, 49, 50, 0)));background-image:linear-gradient(270deg, #293132 0%, rgba(41, 49, 50, 0) 100%);position:absolute;right:0px;top:0px}::slotted(med-chip:not(:last-child)){margin-right:8px}";

const MedSegment = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "med-segment" }, index.h("div", { class: "med-segment__container" }, index.h("slot", null)), index.h("div", { class: "med-segment__fade" })));
  }
};
MedSegment.style = medSegmentCss;

exports.med_segment = MedSegment;
