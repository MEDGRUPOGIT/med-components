/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedTabButton {
  constructor() {
    this.dsColor = undefined;
    this.active = false;
  }
  render() {
    const { dsColor, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tab-button': true,
        'med-tab-button--active': active,
      }) }, h("slot", null)));
  }
  static get is() { return "med-tab-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-tab-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-tab-button.css"]
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
          "text": "todo"
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
