/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedDropdown {
  constructor() {
    this.dsName = undefined;
  }
  render() {
    const { dsName } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      }) }, h("slot", null)));
  }
  static get is() { return "med-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-dropdown.css"]
    };
  }
  static get properties() {
    return {
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
      }
    };
  }
}
