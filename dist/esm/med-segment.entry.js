/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const medSegmentCss = ":host{display:block;overflow:hidden;position:relative}.med-segment__container{display:-ms-flexbox;display:flex;overflow:auto;-ms-overflow-style:none;scrollbar-width:none;overflow-y:scroll}.med-segment__container::-webkit-scrollbar{display:none}.med-segment__fade{width:24px;height:28px;background-image:-webkit-gradient(linear, right top, left top, from(#293132), to(rgba(41, 49, 50, 0)));background-image:linear-gradient(270deg, #293132 0%, rgba(41, 49, 50, 0) 100%);position:absolute;right:0px;top:0px}::slotted(med-chip:not(:last-child)){margin-right:8px}";

const MedSegment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "med-segment" }, h("div", { class: "med-segment__container" }, h("slot", null)), h("div", { class: "med-segment__fade" })));
  }
};
MedSegment.style = medSegmentCss;

export { MedSegment as med_segment };
