import { Component, Host, h, Prop, State } from '@stencil/core';
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
          h("span", { slot: "title" }, this.titulo),
          h("ion-button", { "ds-name": "icon-only", slot: "right", onClick: () => this.dismiss() },
            h("ion-icon", { slot: "icon-only", name: "med-close" })))),
      h("ion-content", { class: "content" },
        h("ion-slides", { ref: (el) => { this.slider = el; el.options = this.sliderOpts; }, pager: this.imagens && this.imagens.length > 1 }, this.imagens.map((img) => h("ion-slide", null,
          h("span", { class: "marcaAguaSuperior" }, this.marcaAguaSuperior),
          h("div", { class: "swiper-zoom-container" },
            h("img", { src: img === null || img === void 0 ? void 0 : img.src }),
            h("p", { class: "legenda" }, img === null || img === void 0 ? void 0 : img.legenda))))),
        h("span", { class: "marcaAguaInferior" }, this.marcaAguaInferior)),
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
        "original": "MedImageZoomItemInterface[] | any",
        "resolved": "any",
        "references": {
          "MedImageZoomItemInterface": {
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
    },
    "marcaAguaSuperior": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "marca-agua-superior",
      "reflect": true
    },
    "marcaAguaInferior": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "marca-agua-inferior",
      "reflect": true
    },
    "titulo": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "titulo",
      "reflect": true
    }
  }; }
  static get states() { return {
    "slider": {}
  }; }
}
