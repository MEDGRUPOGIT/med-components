import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartRadial {
  constructor() {
    /**
     * Define os valores do gráfico
     */
    this.valores = [];
  }
  render() {
    const { dsName, dsColor, dsSize } = this;
    const totais = {
      total: 0,
      subtotais: []
    };
    this.valores.forEach((item) => {
      totais.total += item.quantia;
      totais.subtotais.push(totais.total);
    });
    const arrayReverse = this.valores.slice(0).reverse();
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-chart-radial': true,
        [`med-chart-radial--${dsName}`]: dsName !== undefined,
        [`med-chart-radial--${dsSize}`]: dsSize !== undefined,
      }) },
      h("svg", { viewBox: "0 0 36 36" },
        h("circle", { cx: "18", cy: "18", r: "16" }),
        arrayReverse.map((item, index) => {
          const subtotalIndex = this.valores.length - index - 1;
          if (!item.ignoreBarra && item.quantia !== 0) {
            return h("circle", { cx: "18", cy: "18", r: "16", class: { 'size': true, [item.cor]: true }, style: {
                '--size': `${(totais.subtotais[subtotalIndex] / totais.total) * 100}`,
              } });
          }
        })),
      dsName === "secondary" && h("div", { class: "med-chart-radial__percent" }, "10%")));
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
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
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
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'lg'",
        "resolved": "\"lg\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
      },
      "attribute": "ds-size",
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
        "text": "Define os valores do gr\u00E1fico"
      },
      "defaultValue": "[]"
    }
  }; }
}
