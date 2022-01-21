import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../../utils/med-theme';
export class MedCartaoRespostaItem {
  constructor() {
    /**
    * TODO
    */
    this.anulada = false;
    /**
     * TODO
     */
    this.impressa = false;
    /**
     * TODO
     */
    this.ativa = false;
  }
  render() {
    const { dsColor, anulada, impressa, ativa } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-cartao-resposta-item': true,
        'med-cartao-resposta-item--anulada': anulada,
        'med-cartao-resposta-item--impressa': impressa,
        'med-cartao-resposta-item--ativa': ativa,
      }) },
      h("div", { class: "container" },
        h("button", { class: "item-button" },
          h("slot", null)))));
  }
  static get is() { return "med-cartao-resposta-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-cartao-resposta-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-cartao-resposta-item.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "anulada": {
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
        "text": "TODO"
      },
      "attribute": "anulada",
      "reflect": true,
      "defaultValue": "false"
    },
    "impressa": {
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
        "text": "TODO"
      },
      "attribute": "impressa",
      "reflect": true,
      "defaultValue": "false"
    },
    "ativa": {
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
        "text": "TODO"
      },
      "attribute": "ativa",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
