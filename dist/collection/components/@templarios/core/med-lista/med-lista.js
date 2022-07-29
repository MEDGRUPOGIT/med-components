import { Component, Element, h, Host, Method } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class List {
  /**
   * todo
   */
  async closeSlidingItems() {
    const item = this.el.querySelector('ion-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    return (h(Host, { class: generateMedColor(null, { 'med-lista': true }) },
      h("slot", null)));
  }
  static get is() { return "med-lista"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "ios": ["med-lista.scss"],
    "md": ["med-lista.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["med-lista.css"],
    "md": ["med-lista.css"]
  }; }
  static get methods() { return {
    "closeSlidingItems": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "todo",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
