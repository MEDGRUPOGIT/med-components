import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedList {
  render() {
    const { dsColor, margin } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-list': true,
        [`med-list--${margin}`]: margin !== undefined
      }) },
      h("slot", null)));
  }
  static get is() { return "med-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-list.css"]
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
    "margin": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xs' | 'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "margin",
      "reflect": false
    }
  }; }
}
