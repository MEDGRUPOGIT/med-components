import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedDropdown {
  render() {
    const { dsName } = this;
    return (h(Host, { class: generateMedColor(dsName, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-dropdown.css"]
  }; }
  static get properties() { return {
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
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
      "reflect": true
    }
  }; }
}
