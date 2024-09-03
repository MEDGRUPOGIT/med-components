/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
export class MedCartaoRespostaLista {
  constructor() {
    this.isFlex = false;
    this.justifyCenter = false;
  }
  render() {
    const { isFlex, justifyCenter } = this;
    return (h(Host, { "from-stencil": true }, h("div", { class: `wrapper
            ${isFlex ? "wrapper--flex" : ""}
            ${justifyCenter ? "wrapper--justify-center" : ""}
          ` }, h("slot", null))));
  }
  static get is() { return "med-cartao-resposta-lista"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-cartao-resposta-lista.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-cartao-resposta-lista.css"]
    };
  }
  static get properties() {
    return {
      "isFlex": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define a estiliza\u00E7\u00E3o do componente"
        },
        "attribute": "is-flex",
        "reflect": true,
        "defaultValue": "false"
      },
      "justifyCenter": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define a estiliza\u00E7\u00E3o do componente"
        },
        "attribute": "justify-center",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
