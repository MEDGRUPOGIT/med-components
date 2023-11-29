/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedChartCategoria {
  constructor() {
    this.dsColor = undefined;
    this.value = 0;
    this.titulo = undefined;
    this.meta = undefined;
    this.realizado = undefined;
  }
  render() {
    const { dsColor, value, titulo, meta, realizado } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-chart-categoria': true,
      }) }, h("div", { class: "med-chart-categoria__header" }, h("med-type", { token: "p12b" }, titulo), h("div", { class: "med-chart-categoria__info" }, h("div", { class: "med-chart-categoria__meta" }, h("med-type", { token: "p10", dsColor: "neutral-8" }, "Meta"), h("med-type", { class: "med-chart-categoria__info-type", token: "p10b" }, meta)), h("div", { class: "med-chart-categoria__realizado" }, h("med-type", { token: "p10", dsColor: "neutral-8" }, "Realizado"), h("med-type", { class: "med-chart-categoria__info-type med-chart-categoria__info-type--realizado", token: "p10b" }, realizado)))), h("med-chart-bar-horizontal", { class: "med-chart-categoria__chart", dsColor: dsColor, value: value })));
  }
  static get is() { return "med-chart-categoria"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-chart-categoria.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-chart-categoria.css"]
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
      "value": {
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
          "text": "todo"
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "0"
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
        "reflect": true
      },
      "meta": {
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
        "attribute": "meta",
        "reflect": true
      },
      "realizado": {
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
        "attribute": "realizado",
        "reflect": true
      }
    };
  }
}
