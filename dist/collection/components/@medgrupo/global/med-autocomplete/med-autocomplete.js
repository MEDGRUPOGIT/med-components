import { Component, Host, h, Prop } from '@stencil/core';
export class MedAutocomplete {
  constructor() {
    /**
     * A lista de items a ser renderizada.
     */
    this.list = false;
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("ul", { class: "list" },
        h("li", { class: "item" },
          h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"),
          "Nefrologia"),
        h("li", { class: "item" },
          h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"),
          "Neurocirurgia"),
        h("li", { class: "item" },
          h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"),
          "Neurologia"),
        h("li", { class: "item" },
          h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"),
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
        "text": "A lista de items a ser renderizada."
      },
      "attribute": "list",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
