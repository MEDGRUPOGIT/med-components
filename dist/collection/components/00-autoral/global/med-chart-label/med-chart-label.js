import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
;
export class MedChartLabel {
  constructor() {
    this.valores = [];
  }
  render() {
    const { color, neutral, } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-chart-label': true,
      }, neutral) },
      h("ul", { class: "med-chart-label__list" }, this.valores.reverse().map((item) => {
        return h("li", { class: "med-chart-label__item" },
          h("span", { class: { 'med-chart-label__quantia': true, [item.cor]: true } }, item.quantia),
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
        "original": "MedRadialItem[]",
        "resolved": "MedRadialItem[]",
        "references": {
          "MedRadialItem": {
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
    },
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
        "text": "Define a cor do componente."
      },
      "attribute": "color",
      "reflect": false
    },
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Neutral",
        "resolved": "string | undefined",
        "references": {
          "Neutral": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor neutra do componente."
      },
      "attribute": "neutral",
      "reflect": false
    }
  }; }
}
