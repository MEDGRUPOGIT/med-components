import { Component, Host, h, Prop } from '@stencil/core';
export class MedAutocomplete {
  constructor() {
    this.list = false;
  }
  render() {
    return (h(Host, null,
      h("ul", { class: "list" },
        h("li", { class: "item" },
          h("ion-icon", { name: "med-medical-bag" }, "ion-button"),
          "Nefrologia"),
        h("li", { class: "item" },
          h("ion-icon", { name: "med-medical-bag" }, "ion-button"),
          "Neurocirurgia"),
        h("li", { class: "item" },
          h("ion-icon", { name: "med-medical-bag" }, "ion-button"),
          "Neurologia"),
        h("li", { class: "item" },
          h("ion-icon", { name: "med-medical-bag" }, "ion-button"),
          "Nutrologia")),
      this.list && h("span", { class: "msg" }, "Nenhum item encontrado.")));
  }
  static get is() { return "med-autocomplete"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-autocomplete.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-autocomplete.css"]
  }; }
  static get properties() { return {
    "list": {
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
        "text": ""
      },
      "attribute": "list",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
