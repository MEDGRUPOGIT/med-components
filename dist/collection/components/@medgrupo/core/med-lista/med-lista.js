import { Component, Element, Host, Method, Prop, h } from '@stencil/core';
import { getIonMode } from '../../../../global/ionic-global';
import { generateMedColor } from '../../../../utils/med-theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class List {
  constructor() {
    this.padding = false;
    /**
     * If `true`, the list will have margin around it and rounded corners.
     */
    this.inset = false;
  }
  /**
   * If `ion-item-sliding` are used inside the list, this method closes
   * any open sliding item.
   *
   * Returns `true` if an actual `ion-item-sliding` is closed.
   */
  async closeSlidingItems() {
    const item = this.el.querySelector('ion-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    const mode = getIonMode(this);
    const { lines, inset, dsColor, padding } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        [mode]: true,
        // Used internally for styling
        //[`list-${mode}`]: true,
        'list-inset': inset,
        [`list-lines-${lines}`]: lines !== undefined,
        [`list-${mode}-lines-${lines}`]: lines !== undefined,
        'list-padding': padding,
      }) },
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
        "text": ""
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "padding": {
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
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "How the bottom border should be displayed on all items."
      },
      "attribute": "lines",
      "reflect": false
    },
    "inset": {
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
        "text": "If `true`, the list will have margin around it and rounded corners."
      },
      "attribute": "inset",
      "reflect": false,
      "defaultValue": "false"
    }
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
        "text": "If `ion-item-sliding` are used inside the list, this method closes\r\nany open sliding item.\r\n\r\nReturns `true` if an actual `ion-item-sliding` is closed.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
