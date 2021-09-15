import { Component, Host, h, Prop, Method, Listen } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedContextMenu {
  constructor() {
    /**
     * Define o estado do componente.
     */
    this.collapsed = true;
  }
  /**
   * TODO
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
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-context-menu': true,
        'med-context-menu--collapsed': this.collapsed
      }, null) },
      h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-context-menu__button", "ds-name": "tertiary", "ds-size": "xs" },
        h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__icon", name: "med-context-menu" })),
      h("div", { class: "med-context-menu__content" },
        h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-context-menu__inner-button", "ds-name": "tertiary", "ds-size": "xs" },
          h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__inner-icon", name: "med-context-menu" })),
        h("slot", null))));
  }
  static get is() { return "med-context-menu"; }
  static get encapsulation() { return "shadow"; }
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
        "text": "Define o estado do componente."
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
        "text": "TODO",
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
