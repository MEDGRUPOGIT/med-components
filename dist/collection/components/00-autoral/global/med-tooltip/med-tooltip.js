import { Component, Host, h, Prop, Method, Listen } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedTooltip {
  constructor() {
    /**
     * Define o estado do componente.
     */
    this.collapsed = true;
  }
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
    const { dsName, placement, position, collapsed, titulo, content } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-tooltip': true,
        [`med-tooltip--${dsName}`]: dsName !== undefined,
        [`med-tooltip--${placement}`]: placement !== undefined,
        [`med-tooltip--${position}`]: position !== undefined,
        'med-tooltip--collapsed': collapsed
      }, null) },
      h("div", { class: "med-tooltip__icon-container" },
        h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-tooltip__button", "ds-name": "icon-only" },
          h("slot", { name: "icon" }))),
      h("div", { class: "med-tooltip__content" },
        titulo && h("h3", { class: "med-tooltip__titulo" }, titulo),
        content && h("p", { class: "med-tooltip__text" }, content),
        h("slot", null))));
  }
  static get is() { return "med-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-tooltip.css"]
  }; }
  static get properties() { return {
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'definition'",
        "resolved": "\"definition\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
      "reflect": false
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'bottom' | 'left' | 'right'",
        "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placement",
      "reflect": true
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'center' | 'end'",
        "resolved": "\"center\" | \"end\" | \"start\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": true
    },
    "titulo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "titulo",
      "reflect": true
    },
    "content": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "content",
      "reflect": true
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
        "text": "",
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
