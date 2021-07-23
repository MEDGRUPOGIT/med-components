import { Component, Host, h, Prop } from '@stencil/core';
export class MedChartRadialContent {
  constructor() {
    this.total = 0;
  }
  render() {
    const { total } = this;
    return (h(Host, null,
      h("div", { class: "monta-provas-chart__total" },
        h("span", { class: "monta-provas-chart__label" }, "Total de"),
        h("span", { class: "monta-provas-chart__number" }, total),
        h("span", { class: "monta-provas-chart__label" }, "Quest\u00F5es"))));
  }
  static get is() { return "med-chart-radial-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-radial-content.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-radial-content.css"]
  }; }
  static get properties() { return {
    "total": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "total",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
}
