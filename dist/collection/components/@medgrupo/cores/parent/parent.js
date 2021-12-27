import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class Parent {
  constructor() {
    /**
      * Teste.
      */
    this.child = false;
  }
  render() {
    const { dsColor, fill, child } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-parent': true,
        [`med-parent--${fill}`]: fill !== undefined,
      }) },
      h("h3", null,
        h("slot", null)),
      child && h("med-child", { class: "med-parent__child" })));
  }
  static get is() { return "med-parent"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["parent.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["parent.css"]
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
      "reflect": true
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
    },
    "child": {
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
        "text": "Teste."
      },
      "attribute": "child",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
