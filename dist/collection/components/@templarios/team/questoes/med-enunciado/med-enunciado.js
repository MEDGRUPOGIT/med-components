/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../../@templarios/utilities/color';
export class MedEnunciado {
  constructor() {
    this.imagens = undefined;
    this.dsName = undefined;
    this.content = undefined;
  }
  imageRequest(imagem) {
    this.medGalleryRequest.emit(imagem);
  }
  render() {
    let imagens;
    const { content, dsName } = this;
    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;
      imagens = (h("ul", { class: 'list' }, this.imagens.map((imagem) => (h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) }, h("img", { class: "list__image", src: imagem, alt: "" }), h("div", { class: "image__zoom" }, h("ion-icon", { class: "med-icon", name: "med-busca" })))))));
    }
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-enunciado': true,
        [`med-enunciado--${dsName}`]: dsName !== undefined,
      }) }, h("slot", null), content &&
      h("span", { innerHTML: content }), imagens));
  }
  static get is() { return "med-enunciado"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-enunciado.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-enunciado.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "todo"
        },
        "attribute": "ds-name",
        "reflect": true
      },
      "content": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "content",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
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
      }];
  }
}
