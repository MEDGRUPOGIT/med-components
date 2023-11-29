/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedChartRadialLabel {
  constructor() {
    this.valores = [];
    this.dsColor = undefined;
    this.dsSize = undefined;
  }
  render() {
    const { dsColor, dsSize } = this;
    //const arrayReverse = this.valores.slice(0).reverse();
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-chart-radial-label': true,
        [`med-chart-radial-label--${dsSize}`]: dsSize !== undefined,
      }) }, h("ul", { class: "med-chart-radial-label__list" }, this.valores.map((item) => {
      return h("li", { class: "med-chart-radial-label__item" }, h("span", { class: { 'med-chart-radial-label__quantia': true, [item.cor]: true } }, item.quantia), " ", item.label);
    }))));
  }
  static get is() { return "med-chart-radial-label"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-chart-radial-label.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-chart-radial-label.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "todo"
        },
        "attribute": "ds-size",
        "reflect": false
      }
    };
  }
}
