/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const type_enum = require('./type.enum-d3bb3d86.js');
require('./plusminus.enum-c18744cc.js');
require('./rate-like.enum-13d0954f.js');

const medFontZoomCss = ".sc-med-font-zoom-h{display:block;opacity:0;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}.sc-med-font-zoom-h .med-icon.sc-med-font-zoom{stroke:hsl(var(--med-color-neutral-8))}.sc-med-font-zoom-h .container.sc-med-font-zoom::part(tick-active),.sc-med-font-zoom-h .container.sc-med-font-zoom::part(tick){display:none}";

const MedFontZoom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.min = 1;
    this.max = 5;
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
    this.emitter = undefined;
    this.value = type_enum.MedFontSize.XS;
    this.step = false;
  }
  // fix para conflito com popover API do chrome
  // pode remover depois de migração pro ionic 7
  fixPopover() {
    const popover = document.querySelector('med-font-zoom');
    if (!popover)
      return;
    if (popover === null || popover === void 0 ? void 0 : popover.hasAttribute('popover')) {
      popover.removeAttribute('popover');
    }
    popover.style.opacity = '1';
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("ion-range", { onIonChange: (ev) => this.onRangeChange(ev.detail.value), min: this.min, max: this.max, step: this.step ? (this.max - this.min) / 4 : 1, snaps: this.step, value: this.fontSizeToValue(this.value), class: "container" }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-fontemenor" }), index.h("ion-icon", { class: "med-icon", slot: "end", name: "med-fontemaior" }))));
  }
};
MedFontZoom.style = medFontZoomCss;

exports.med_font_zoom = MedFontZoom;
