import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class Child {
  render() {
    const { dsColor, fill } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-child': true,
        [`med-child_${fill}`]: fill !== undefined,
      }) },
      h("h3", null,
        h("slot", null))));
  }
  static get is() { return "med-child"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["child.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["child.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
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
    "fill": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'outline'",
        "resolved": "\"outline\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o fill do componente."
      },
      "attribute": "fill",
      "reflect": true
    }
  }; }
}
