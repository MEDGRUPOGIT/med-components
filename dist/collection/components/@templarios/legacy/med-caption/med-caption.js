import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedCaption {
  render() {
    const { dsColor, dsSize } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-caption': true,
        [`med-caption--${dsSize}`]: dsSize !== undefined,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-caption"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-caption.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-caption.css"]
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
        "text": "todo"
      },
      "attribute": "ds-size",
      "reflect": true
    }
  }; }
}
