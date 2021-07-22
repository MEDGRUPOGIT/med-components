import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedDivider {
  render() {
    return (h(Host, { "from-stencil": true, class: createColorClasses(this.color, {
        'med-divider': true
      }, this.neutral) },
      h("h3", { class: "heading" }, this.text)));
  }
  static get is() { return "med-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-divider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-divider.css"]
  }; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false
    },
    "color": {
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
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    },
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Neutral",
        "resolved": "string | undefined",
        "references": {
          "Neutral": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "neutral",
      "reflect": false
    }
  }; }
}
