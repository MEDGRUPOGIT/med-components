import { Component, Host, h, Prop, Method } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedContextMenu {
  constructor() {
    this.collapsed = true;
  }
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { color, neutral, collapsed } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-context-menu': true,
        'med-context-menu--collapsed': collapsed
      }, neutral) },
      h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-context-menu__button", "ds-name": "icon-only" },
        h("ion-icon", { class: "med-icon med-context-menu__icon", name: "med-context-menu" })),
      h("div", { class: "med-context-menu__content" },
        h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-context-menu__inner-button", "ds-name": "icon-only" },
          h("ion-icon", { class: "med-icon med-context-menu__inner-icon", name: "med-context-menu" })),
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
        "text": "Define a cor neutra do componente."
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
      "attribute": "color",
      "reflect": false
    },
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
        "text": ""
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
        "text": "",
        "tags": []
      }
    }
  }; }
}
