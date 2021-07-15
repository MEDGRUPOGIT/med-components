import { Component, Host, h, Prop } from '@stencil/core';
;
export class MedChartDonut {
  constructor() {
    this.valores = [];
  }
  getTotal() {
    const totais = {
      total: 0,
      subtotais: []
    };
    this.valores.forEach((item) => {
      totais.total += item.quantia;
      totais.subtotais.push(totais.total);
    });
    return totais;
  }
  render() {
    const totais = this.getTotal();
    return (h(Host, null,
      h("svg", { viewBox: "0 0 36 36" },
        h("circle", { cx: "18", cy: "18", r: "16" }),
        this.valores.reverse().map((item, index) => {
          const subtotalIndex = this.valores.length - index - 1;
          if (!item.ignoreBarra) {
            return h("circle", { cx: "18", cy: "18", r: "16", class: { 'size': true, [item.cor]: true }, style: {
                '--size': `${(totais.subtotais[subtotalIndex] / totais.total) * 100}`,
              } });
          }
        }))));
  }
  static get is() { return "med-chart-donut"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-donut.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-donut.css"]
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
