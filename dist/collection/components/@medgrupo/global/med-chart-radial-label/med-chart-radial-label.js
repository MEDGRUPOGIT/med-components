import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartRadialLabel {
  constructor() {
    /**
     * TODO
     */
    this.valores = [];
  }
  render() {
    const { dsColor, dsSize } = this;
    //const arrayReverse = this.valores.slice(0).reverse();
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-chart-radial-label': true,
        [`med-chart-radial-label--${dsSize}`]: dsSize !== undefined,
      }) },
      h("ul", { class: "med-chart-radial-label__list" }, this.valores.map((item) => {
        return h("li", { class: "med-chart-radial-label__item" },
          h("span", { class: { 'med-chart-radial-label__quantia': true, [item.cor]: true } }, item.quantia),
          " ",
          item.label);
      }))));
  }
  static get is() { return "med-chart-radial-label"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-radial-label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-radial-label.css"]
  }; }
  static get properties() { return {
    "valores": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MedChartRadiaItem[]",
        "resolved": "MedChartRadiaItem[]",
        "references": {
          "MedChartRadiaItem": {
            "location": "import",
            "path": "../med-chart-radial/med-chart-radial-interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "defaultValue": "[]"
    },
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
    }
  }; }
}
