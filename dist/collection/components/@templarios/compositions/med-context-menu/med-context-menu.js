import { Component, h, Host, Listen, Method, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedContextMenu {
  constructor() {
    /**
     * todo
     */
    this.collapsed = true;
  }
  /**
   * todo
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  handleClick(event) {
    if (!this.collapsed) {
      this.toggle(event);
    }
  }
  render() {
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-context-menu': true,
        'med-context-menu--collapsed': this.collapsed
      }) },
      h("ion-button", { mode: "ios", "icon-only": true, onClick: (event) => { this.toggle(event); }, class: "med-context-menu__button", fill: "clear", "ds-size": "sm" },
        h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__icon", name: "med-context-menu" })),
      h("div", { class: "med-context-menu__content" },
        h("ion-button", { mode: "ios", "icon-only": true, onClick: (event) => { this.toggle(event); }, class: "med-context-menu__inner-button", fill: "clear", "ds-size": "sm" },
          h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__inner-icon", name: "med-context-menu" })),
        h("slot", null))));
  }
  static get is() { return "med-context-menu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-context-menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-context-menu.css"]
  }; }
  static get properties() { return {
    "collapsed": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "(event?: Event | undefined) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "todo",
        "tags": []
      }
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
