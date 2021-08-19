import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedChartRadial {
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
    const { dsName, color } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-chart-radial': true,
        [`med-chart-radial--${dsName}`]: dsName !== undefined,
      }, null) },
      h("svg", { viewBox: "0 0 36 36" },
        h("circle", { cx: "18", cy: "18", r: "16" }),
        this.valores.reverse().map((item, index) => {
          const subtotalIndex = this.valores.length - index - 1;
          if (!item.ignoreBarra && item.quantia !== 0) {
            return h("circle", { cx: "18", cy: "18", r: "16", class: { 'size': true, [item.cor]: true }, style: {
                '--size': `${(totais.subtotais[subtotalIndex] / totais.total) * 100}`,
              } });
          }
        })),
      dsName === "simple" && h("div", { class: "med-chart-radial__percent" }, "10%")));
  }
  static get is() { return "med-chart-radial"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-radial.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-radial.css"]
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
    },
    "dsName": {
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
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
      "reflect": false
    },
    "valores": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MedChartRadiaItem[]",
        "resolved": "MedChartRadiaItem[]",
        "references": {
          "MedChartRadiaItem": {
            "location": "import",
            "path": "./med-chart-radial-interface"
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
