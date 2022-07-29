import { Component, Event, h, Host, Prop } from '@stencil/core';
export class MedEnunciadoDiscursiva {
  imageRequest(imagem) {
    this.medGalleryRequest.emit(imagem);
  }
  render() {
    let imagens;
    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;
      imagens = (h("ul", { class: 'list' }, this.imagens.map((imagem) => (h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) },
        h("img", { class: "list__image", src: imagem, alt: "" }))))));
    }
    return (h(Host, { "from-stencil": true },
      h("span", { class: "number" }, "01 -"),
      h("slot", null),
      imagens));
  }
  static get is() { return "med-enunciado-discursiva"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-enunciado-discursiva.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-enunciado-discursiva.css"]
  }; }
  static get properties() { return {
    "imagens": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string[] | string",
        "resolved": "string | string[]",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "imagens",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "medGalleryRequest",
      "name": "medGalleryRequest",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
