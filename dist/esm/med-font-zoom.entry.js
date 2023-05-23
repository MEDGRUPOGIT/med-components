import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { h as MedFontSize } from './type.enum-5cac8202.js';
import './plusminus.enum-a0ce4fb8.js';
import './rate-like.enum-403a54dc.js';

const medFontZoomCss = ".sc-med-font-zoom-h{display:block}.sc-med-font-zoom-h .med-icon.sc-med-font-zoom{stroke:hsl(var(--med-color-neutral-8))}";

const MedFontZoom = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * todo
     */
    this.value = MedFontSize.XS;
    this.min = 1;
    this.max = 5;
    this.step = 1;
    this.fontSizeToValue = (fontSize) => {
      switch (fontSize) {
        case MedFontSize.XXXS:
          return 1;
        case MedFontSize.XXS:
          return 2;
        case MedFontSize.XS:
          return 3;
        case MedFontSize.SM:
          return 4;
        case MedFontSize.MD:
          return 5;
      }
    };
    this.onRangeChange = (rangeValue) => {
      if (this.emitter) {
        switch (rangeValue) {
          case 1:
            this.value = MedFontSize.XXXS;
            break;
          case 2:
            this.value = MedFontSize.XXS;
            break;
          case 3:
            this.value = MedFontSize.XS;
            break;
          case 4:
            this.value = MedFontSize.SM;
            break;
          case 5:
            this.value = MedFontSize.MD;
            break;
          default:
            this.value = MedFontSize.XS;
        }
        this.emitter.emit(this.value);
      }
    };
  }
  render() {
    return (h(Host, { "from-stencil": true }, h("ion-range", { onIonChange: (ev) => this.onRangeChange(ev.detail.value), min: this.min, max: this.max, step: this.step, value: this.fontSizeToValue(this.value) }, h("ion-icon", { class: "med-icon", slot: "start", name: "med-fontemenor" }), h("ion-icon", { class: "med-icon", slot: "end", name: "med-fontemaior" }))));
  }
};
MedFontZoom.style = medFontZoomCss;

export { MedFontZoom as med_font_zoom };
