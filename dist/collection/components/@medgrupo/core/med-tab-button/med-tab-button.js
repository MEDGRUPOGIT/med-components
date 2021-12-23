import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedTabButton {
  constructor() {
    /**
    * Define a variação da borda do componente.
    */
    this.active = false;
  }
  render() {
    const { dsColor, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tab-button': true,
        'med-tab-button--active': active,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-tab-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-tab-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-tab-button.css"]
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
        "text": "Define a varia\u00E7\u00E3o da borda do componente."
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
