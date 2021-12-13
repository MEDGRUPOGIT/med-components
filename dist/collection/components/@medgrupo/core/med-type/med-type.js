import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedType {
  render() {
    const { dsColor, token } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-type': true,
        [`med-type--${token}`]: token !== undefined,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-type"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-type.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-type.css"]
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
    "token": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedTypeToken",
        "resolved": "string | undefined",
        "references": {
          "MedTypeToken": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o token do componente."
      },
      "attribute": "token",
      "reflect": true
    }
  }; }
}
