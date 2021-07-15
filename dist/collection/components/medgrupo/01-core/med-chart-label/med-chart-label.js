import { Component, Host, h, Prop } from '@stencil/core';
;
export class MedChartLabel {
  constructor() {
    this.valores = [];
  }
  render() {
    return (h(Host, null,
      h("ul", { class: "list" }, this.valores.map((item) => {
        return h("li", { class: "item" },
          h("span", { class: { 'quantia': true, [item.cor]: true } }, item.quantia),
          " ",
          item.label);
      }))));
  }
  static get is() { return "med-chart-label"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-label.css"]
  }; }
  static get properties() { return {
    "valores": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MedDonutItem[]",
        "resolved": "MedDonutItem[]",
        "references": {
          "MedDonutItem": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
  }; }
}
