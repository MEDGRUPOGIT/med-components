import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedPiechart {
  constructor() {
    /**
      * Define o estado do componente.
      */
    this.active = false;
    /**
      * Define o value do componente.
      */
    this.value = 0;
  }
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.active = !this.active;
  }
  render() {
    const { dsColor, active, text, value } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--active': active,
      }) },
      h("div", { class: "med-piechart__container" },
        h("div", { class: "med-piechart__side med-piechart__side--front" },
          h("med-type", { class: "med-piechart__text", token: "p12b" }, text),
          h("svg", { viewBox: "0 0 36 36", style: { '--porcentagem': `${value}` } },
            h("circle", { class: "med-piechart__circle", cx: "18", cy: "18", r: "16" }),
            h("circle", { cx: "18", cy: "18", r: "16", class: "med-piechart__circle med-piechart__circle--porcentagem" }))),
        h("div", { class: "med-piechart__side med-piechart__side--back" },
          h("med-type", { class: "med-piechart__text", token: "p12b" }, text)))));
  }
  static get is() { return "med-piechart"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-piechart.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-piechart.css"]
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
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o estado do componente."
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "Define o value do componente."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    },
    "text": {
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
        "text": "Define o texto do componente."
      },
      "attribute": "text",
      "reflect": true
    }
  }; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "(event?: Event | undefined) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
