import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedSemanas {
  render() {
    const { skin } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-semanas': true,
        [`med-semanas--${skin}`]: skin !== undefined,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-semanas"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-semanas.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-semanas.css"]
  }; }
  static get properties() { return {
    "skin": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'lista'",
        "resolved": "\"lista\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "skin",
      "reflect": true
    }
  }; }
}
