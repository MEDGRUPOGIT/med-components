import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateMedColor } from '../../../../../utils/med-theme';
export class MedEnunciado {
  imageRequest(imagem) {
    this.medGalleryRequest.emit(imagem);
  }
  render() {
    let imagens;
    const { dsName } = this;
    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;
      imagens = (h("ul", { class: 'list' }, this.imagens.map((imagem) => (h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) },
        h("img", { class: "list__image", src: imagem, alt: "" }),
        h("div", { class: "image__zoom" },
          h("ion-icon", { class: "med-icon", name: "med-busca" })))))));
    }
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-enunciado': true,
        [`med-enunciado--${dsName}`]: dsName !== undefined,
      }) },
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
        "text": "TODO"
      },
      "attribute": "imagens",
      "reflect": true
    },
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'skin'",
        "resolved": "\"skin\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
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
        "text": "TODO"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
