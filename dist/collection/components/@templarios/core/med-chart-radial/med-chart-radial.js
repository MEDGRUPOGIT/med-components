/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedChartRadial {
  constructor() {
    this.dsColor = undefined;
    this.dsName = undefined;
    this.dsSize = undefined;
    this.valores = [];
    this.titulo = undefined;
    this.subtitulo = undefined;
  }
  render() {
    const { dsColor, dsName, dsSize, titulo, subtitulo } = this;
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
      }) }, h("svg", { viewBox: "0 0 36 36" }, h("circle", { cx: "18", cy: "18", r: "16" }), arrayReverse.map((item, index) => {
      const subtotalIndex = this.valores.length - index - 1;
      if (!item.ignoreBarra && item.quantia !== 0) {
        return h("circle", { cx: "18", cy: "18", r: "16", class: { 'size': true, [item.cor]: true }, style: {
            '--size': `${(totais.subtotais[subtotalIndex] / totais.total) * 100}`,
          } });
      }
    })), h("div", { class: "med-chart-radial__text-wrap" }, titulo && h("med-type", { class: "med-chart-radial__titulo" }, titulo), titulo && h("med-type", { class: "med-chart-radial__subtitulo" }, subtitulo)), h("slot", null)));
  }
  static get is() { return "med-chart-radial"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-chart-radial.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-chart-radial.css"]
    };
  }
  static get properties() {
    return {
      "dsColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MedColor",
          "resolved": "string | undefined",
          "references": {
            "MedColor": {
              "location": "import",
              "path": "../../../../@templarios/types/color.type"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-color",
        "reflect": true
      },
      "dsName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'secondary'",
          "resolved": "\"secondary\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-name",
        "reflect": true
      },
      "dsSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'xs' | 'sm' | 'md' | 'lg'",
          "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
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
              "path": "../../../../@templarios/interfaces/chart-radial.interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "defaultValue": "[]"
      },
      "titulo": {
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
          "text": "todo"
        },
        "attribute": "titulo",
        "reflect": false
      },
      "subtitulo": {
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
          "text": "todo"
        },
        "attribute": "subtitulo",
        "reflect": false
      }
    };
  }
}
