import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedHeading {
  render() {
    const { dsColor, dsName, dsSize } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-heading': true,
        [`med-heading--${dsName}`]: dsName !== undefined,
        [`med-heading--${dsSize}`]: dsSize !== undefined,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-heading"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-heading.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-heading.css"]
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
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'high'",
        "resolved": "\"high\" | undefined",
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
    },
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxs\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
      },
      "attribute": "ds-size",
      "reflect": true
    }
  }; }
}