import { Component, Host, h, Prop, Event } from '@stencil/core';
export class MedEnunciado {
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
      h("slot", null),
      imagens));
  }
  static get is() { return "med-enunciado"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-enunciado.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-enunciado.css"]
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
        "text": ""
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
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
