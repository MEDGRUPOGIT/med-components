/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class CardHeader {
  constructor() {
    this.color = undefined;
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        'card-header-translucent': this.translucent,
        'ion-inherit-color': true,
        [mode]: true
      }) }, h("slot", null)));
  }
  static get is() { return "ion-card-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["card-header.ios.scss"],
      "md": ["card-header.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["card-header.ios.css"],
      "md": ["card-header.md.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The color to use from your application's color palette.\r\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\r\nFor more information on colors, see [theming](/docs/theming/basics)."
        },
        "attribute": "color",
        "reflect": false
      },
      "translucent": {
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
          "text": "If `true`, the card header will be translucent.\r\nOnly applies when the mode is `\"ios\"` and the device supports\r\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility)."
        },
        "attribute": "translucent",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
