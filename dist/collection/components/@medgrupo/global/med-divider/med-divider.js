import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedDivider {
  render() {
    const { dsColor, text } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-divider': true
      }) },
      h("h3", { class: "med-divider__heading" }, text)));
  }
  static get is() { return "med-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-divider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-divider.css"]
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
      "reflect": false
    },
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o texto do componente."
      },
      "attribute": "text",
      "reflect": false
    }
  }; }
}
