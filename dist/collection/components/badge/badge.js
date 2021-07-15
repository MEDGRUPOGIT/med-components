import { Component, Host, Prop, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Badge {
  constructor() {
    this.invert = false;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
        'invert': this.invert,
      }, this.neutral) },
      h("slot", null)));
  }
  static get is() { return "ion-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "ios": ["badge.md.scss"],
    "md": ["badge.md.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["badge.md.css"],
    "md": ["badge.md.css"]
  }; }
  static get properties() { return {
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ds-size",
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
        "text": ""
      },
      "attribute": "fill",
      "reflect": false
    },
    "invert": {
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
        "text": ""
      },
      "attribute": "invert",
      "reflect": true,
      "defaultValue": "false"
    },
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../interface"
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
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
