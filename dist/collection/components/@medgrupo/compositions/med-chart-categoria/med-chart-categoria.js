import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartCategoria {
  constructor() {
    /**
      * Define o valor do componente.
      */
    this.value = 0;
  }
  render() {
    const { dsColor, value, titulo, meta, realizado } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-chart-categoria': true,
      }) },
      h("div", { class: "med-chart-categoria__header" },
        h("med-type", { token: "p12b" }, titulo),
        h("div", { class: "med-chart-categoria__info" },
          h("div", { class: "med-chart-categoria__meta" },
            h("med-type", { token: "p10", dsColor: "neutral-8" }, "Meta"),
            h("med-type", { class: "med-chart-categoria__info-type", token: "p10b" }, meta)),
          h("div", { class: "med-chart-categoria__realizado" },
            h("med-type", { token: "p10", dsColor: "neutral-8" }, "Realizado"),
            h("med-type", { class: "med-chart-categoria__info-type med-chart-categoria__info-type--realizado", token: "p10b" }, realizado)))),
      h("med-chart-bar-horizontal", { class: "med-chart-categoria__chart", dsColor: dsColor, value: value })));
  }
  static get is() { return "med-chart-categoria"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-categoria.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-categoria.css"]
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
        "text": "Define o valor do componente."
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
        "text": ""
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
        "text": ""
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
        "text": ""
      },
      "attribute": "realizado",
      "reflect": true
    }
  }; }
}
