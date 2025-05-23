/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class ListHeader {
  constructor() {
    this.color = undefined;
    this.lines = undefined;
  }
  render() {
    const { lines } = this;
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
        [`list-header-lines-${lines}`]: lines !== undefined,
      }) }, h("div", { class: "list-header-inner" }, h("slot", null))));
  }
  static get is() { return "ion-list-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["list-header.ios.scss"],
      "md": ["list-header.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["list-header.ios.css"],
      "md": ["list-header.md.css"]
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
      "lines": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'full' | 'inset' | 'none'",
          "resolved": "\"full\" | \"inset\" | \"none\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "How the bottom border should be displayed on the list header."
        },
        "attribute": "lines",
        "reflect": false
      }
    };
  }
}
