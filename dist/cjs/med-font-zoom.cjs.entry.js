'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const type_enum = require('./type.enum-e3c089df.js');
require('./plusminus.enum-5c990466.js');
require('./rate-like.enum-8de5ff17.js');

const medFontZoomCss = ".sc-med-font-zoom-h{display:block}.sc-med-font-zoom-h .med-icon.sc-med-font-zoom{stroke:hsl(var(--med-color-neutral-8))}";

const MedFontZoom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * todo
     */
    this.value = type_enum.MedFontSize.XS;
    this.min = 1;
    this.max = 5;
    this.step = 1;
    this.fontSizeToValue = (fontSize) => {
      switch (fontSize) {
        case type_enum.MedFontSize.XXXS:
          return 1;
        case type_enum.MedFontSize.XXS:
          return 2;
        case type_enum.MedFontSize.XS:
          return 3;
        case type_enum.MedFontSize.SM:
          return 4;
        case type_enum.MedFontSize.MD:
          return 5;
      }
    };
    this.onRangeChange = (rangeValue) => {
      if (this.emitter) {
        switch (rangeValue) {
          case 1:
            this.value = type_enum.MedFontSize.XXXS;
            break;
          case 2:
            this.value = type_enum.MedFontSize.XXS;
            break;
          case 3:
            this.value = type_enum.MedFontSize.XS;
            break;
          case 4:
            this.value = type_enum.MedFontSize.SM;
            break;
          case 5:
            this.value = type_enum.MedFontSize.MD;
            break;
          default:
            this.value = type_enum.MedFontSize.XS;
        }
        this.emitter.emit(this.value);
      }
    };
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("ion-range", { onIonChange: (ev) => this.onRangeChange(ev.detail.value), min: this.min, max: this.max, step: this.step, value: this.fontSizeToValue(this.value) }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-fontemenor" }), index.h("ion-icon", { class: "med-icon", slot: "end", name: "med-fontemaior" }))));
  }
};
MedFontZoom.style = medFontZoomCss;

exports.med_font_zoom = MedFontZoom;
