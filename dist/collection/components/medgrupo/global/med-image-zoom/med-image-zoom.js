import { Component, Host, h, Prop, State, Listen } from '@stencil/core';
import { modalController } from '../../../../utils/overlays';
export class MedImageZoom {
  constructor() {
    this.imagens = [];
    this.sliderOpts = {
      zoom: {
        maxRation: 5
      },
      intialSlide: 1,
    };
  }
  ionSlideDidChangeHandler() {
    this.slider.getActiveIndex().then((idx) => {
      this.title = this.imagens[idx].title;
    });
    ;
  }
  ionSlidesDidLoadHandler() {
    this.slider.getActiveIndex().then((idx) => {
      this.title = this.imagens[idx].title;
    });
    ;
  }
  zoom(zoomIn) {
    const zoom = this.slider.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    }
    else {
      zoom.out();
    }
  }
  dismiss() {
    modalController.dismiss();
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("med-header", { class: "header" },
        h("med-navbar", { slot: "navbar", "ds-name": "transparent", "ds-theme": "light" },
          h("span", { slot: "title" }, this.title),
          h("ion-button", { "ds-name": "icon-only", slot: "right", onClick: () => this.dismiss() },
            h("ion-icon", { slot: "icon-only", name: "med-close" })))),
      h("ion-content", { class: "content" },
        h("ion-slides", { ref: (el) => { this.slider = el; el.options = this.sliderOpts; }, pager: this.imagens && this.imagens.length > 1 }, this.imagens.map((img) => h("ion-slide", null,
          h("div", { class: "swiper-zoom-container" },
            h("img", { src: img === null || img === void 0 ? void 0 : img.link }),
            h("p", { class: "legenda" }, img === null || img === void 0 ? void 0 : img.legenda)))))),
      h("div", { class: "button-container" },
        h("button", { class: "button button--in", onClick: () => this.zoom(true) },
          h("ion-icon", { name: "med-plus" })),
        h("button", { class: "button button--out", onClick: () => this.zoom(false) },
          h("ion-icon", { name: "med-minus" })),
        h("button", { class: "button button--close", onClick: () => this.dismiss() },
          h("ion-icon", { name: "med-close" })))));
  }
  static get is() { return "med-image-zoom"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-image-zoom.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-image-zoom.css"]
  }; }
  static get properties() { return {
    "imagens": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "MedImagensZoomInterface[] | any",
        "resolved": "any",
        "references": {
          "MedImagensZoomInterface": {
            "location": "import",
            "path": "./med-image-zoom-interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "imagens",
      "reflect": true,
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "slider": {},
    "title": {}
  }; }
  static get listeners() { return [{
      "name": "ionSlideDidChange",
      "method": "ionSlideDidChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "ionSlidesDidLoad",
      "method": "ionSlidesDidLoadHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
