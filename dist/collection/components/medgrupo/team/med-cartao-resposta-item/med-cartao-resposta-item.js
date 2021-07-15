import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedCartaoRespostaItem {
  render() {
    const { color } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {}) },
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
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
