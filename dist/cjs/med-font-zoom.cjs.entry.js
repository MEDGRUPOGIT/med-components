'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const fontSize_enum = require('./font-size.enum-2233ba2a.js');

const medFontZoomCss = ":host{display:block}:host .med-icon{stroke:hsl(var(--med-color-neutral-8))}";

const MedFontZoom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Define o tamnho da fonte
     */
    this.value = fontSize_enum.MedFontSize.XS;
    this.min = 1;
    this.max = 5;
    this.step = 1;
    this.fontSizeToValue = (fontSize) => {
      switch (fontSize) {
        case fontSize_enum.MedFontSize.XXXS:
          return 1;
        case fontSize_enum.MedFontSize.XXS:
          return 2;
        case fontSize_enum.MedFontSize.XS:
          return 3;
        case fontSize_enum.MedFontSize.SM:
          return 4;
        case fontSize_enum.MedFontSize.MD:
          return 5;
      }
    };
    this.onRangeChange = (rangeValue) => {
      if (this.emitter) {
        switch (rangeValue) {
          case 1:
            this.value = fontSize_enum.MedFontSize.XXXS;
            break;
          case 2:
            this.value = fontSize_enum.MedFontSize.XXS;
            break;
          case 3:
            this.value = fontSize_enum.MedFontSize.XS;
            break;
          case 4:
            this.value = fontSize_enum.MedFontSize.SM;
            break;
          case 5:
            this.value = fontSize_enum.MedFontSize.MD;
            break;
          default:
            this.value = fontSize_enum.MedFontSize.XS;
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
