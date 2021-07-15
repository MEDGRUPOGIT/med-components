import { Component, Host, h, Prop } from '@stencil/core';
export class MedDivider {
  render() {
    return (h(Host, null,
      h("h4", { class: "heading" }, this.text)));
  }
  static get is() { return "med-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-divider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-divider.css"]
  }; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false
    }
  }; }
}
