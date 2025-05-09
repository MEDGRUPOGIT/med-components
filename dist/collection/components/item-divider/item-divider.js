/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the divider text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the divider text in LTR, and to the left in RTL.
 */
export class ItemDivider {
  constructor() {
    this.color = undefined;
    this.sticky = false;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
        'item-divider-sticky': this.sticky,
        'item': true,
      }) }, h("slot", { name: "start" }), h("div", { class: "item-divider-inner" }, h("div", { class: "item-divider-wrapper" }, h("slot", null)), h("slot", { name: "end" }))));
  }
  static get is() { return "ion-item-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["item-divider.ios.scss"],
      "md": ["item-divider.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["item-divider.ios.css"],
      "md": ["item-divider.md.css"]
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
      "sticky": {
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
          "text": "When it's set to `true`, the item-divider will stay visible when it reaches the top\r\nof the viewport until the next `ion-item-divider` replaces it.\r\n\r\nThis feature relies in `position:sticky`:\r\nhttps://caniuse.com/#feat=css-sticky"
        },
        "attribute": "sticky",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
