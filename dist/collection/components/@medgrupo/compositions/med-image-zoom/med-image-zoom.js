import { Component, Host, h, Prop, State } from "@stencil/core";
import { modalController } from "../../../../utils/overlays";
export class MedImageZoom {
  constructor() {
    /**
     * TODO
     */
    this.imagens = [];
    this.initialSlide = 0;
    this.defaultMaxRatio = 8;
    this.aplicandoZoom = false;
    this.sliderOpts = this.getSliderOpts(this.defaultMaxRatio);
  }
  getSliderOpts(maxRatio) {
    const sliderOpts = {
      zoom: {
        maxRatio,
      },
      initialSlide: this.initialSlide,
    };
    return sliderOpts;
  }
  async zoomOut() {
    const zoom = this.slider.swiper.zoom;
    zoom.out();
  }
  async zoomIn() {
    const zoom = this.slider.swiper.zoom;
    zoom.in();
  }
  dismiss() {
    modalController.dismiss();
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("med-header", { class: "zoom-header" },
        h("med-navbar", { slot: "navbar", "ds-name": "transparent", "ds-theme": "light" },
          h("span", { slot: "title", innerHTML: this.titulo }),
          h("ion-button", { mode: "ios", fill: "clear", slot: "right", "icon-only": true, onClick: () => this.dismiss() },
            h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })))),
      h("ion-content", { class: "zoom-content" },
        h("ion-slides", { ref: (el) => {
            this.slider = el;
          }, options: this.sliderOpts, pager: this.imagens && this.imagens.length > 1 }, this.imagens.map((img) => (h("ion-slide", null,
          h("span", { class: "marca-agua-superior" }, this.marcaAguaSuperior),
          h("div", { class: "swiper-zoom-container" },
            h("img", { class: "zoom-imagem", src: img === null || img === void 0 ? void 0 : img.src }),
            h("div", { class: "zoom-legenda-container" },
              h("div", { class: "zoom-legenda", innerHTML: img === null || img === void 0 ? void 0 : img.legenda }))))))),
        h("span", { class: "marca-agua-inferior" }, this.marcaAguaInferior)),
      h("div", { class: "zoom-button-container" },
        h("button", { class: "zoom-button", onClick: () => this.zoomIn() },
          h("ion-icon", { class: "med-icon", name: "med-mais" })),
        h("button", { class: "zoom-button", onClick: () => this.zoomOut() },
          h("ion-icon", { class: "med-icon", name: "med-menos" })),
        h("button", { class: "zoom-button zoom-button--close", onClick: () => this.dismiss() },
          h("ion-icon", { class: "med-icon", name: "med-fechar" })))));
  }
  static get is() { return "med-image-zoom"; }
  static get encapsulation() { return "scoped"; }
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
        "original": "| MedImageZoomItemInterface[]\n    | any",
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
      },
      "attribute": "titulo",
      "reflect": true
    },
    "initialSlide": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number | undefined",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "initial-slide",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "slider": {},
    "sliderOpts": {}
  }; }
}
