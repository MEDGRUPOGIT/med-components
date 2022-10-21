import { Component, Event, h, Host, Listen, Method, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedTooltip {
  constructor() {
    /**
     * todo
     */
    this.collapsed = true;
    // @Listen('mouseover', { target: '' })
    // handleScroll(ev) {
    //   console.log('the body was scrolled', ev);
    // }
    this.onBtnLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onBtnRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  /**
   * todo
   */
  async toggle(event) {
    if (!this.enableHover) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }
  async toggleOnHover(event) {
    if (this.enableHover) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }
  handleClick(event) {
    console.log(event);
    if ((event === null || event === void 0 ? void 0 : event.target.localName) !== 'med-tooltip' && this.titulo) {
      if (!this.collapsed) {
        this.toggle(event);
      }
    }
    else if (!this.titulo) {
      if (!this.collapsed) {
        this.toggle(event);
      }
    }
  }
  render() {
    const { dsColor, placement, position, collapsed, titulo, content, btnLeft, btnRight } = this;
    return (h(Host, { "from-stencil": true, onMouseenter: (event) => { this.toggleOnHover(event); }, onMouseleave: (event) => { this.toggleOnHover(event); }, class: generateMedColor(dsColor, {
        'med-tooltip': true,
        [`med-tooltip--${placement}`]: placement !== undefined,
        [`med-tooltip--${position}`]: position !== undefined,
        'med-tooltip--collapsed': collapsed
      }) },
      h("div", { class: "med-tooltip__input-container", onClick: (event) => { this.toggle(event); } },
        h("slot", { name: "input" })),
      h("div", { class: "med-tooltip__content" },
        titulo && h("div", { class: "med-tooltip__header" },
          h("med-type", { class: "med-tooltip__titulo" }, titulo),
          h("ion-button", { mode: "ios", "icon-only": true, class: "med-tooltip__button-fechar", "ds-color": !dsColor ? 'neutral-10' : dsColor, fill: "clear", "ds-size": "xxs", onClick: (event) => { this.toggle(event); } },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))),
        content && h("med-type", { class: "med-tooltip__text" }, content),
        h("slot", { name: "content" }),
        (btnLeft || btnRight) && h("div", { class: "med-tooltip__footer" },
          btnLeft && h("ion-button", { mode: "ios", class: "med-tooltip__button", "ds-color": !dsColor ? 'neutral-10' : dsColor, "ds-size": "xxs", fill: "clear", onClick: this.onBtnLeftClick },
            " ",
            btnLeft,
            " "),
          btnRight && h("ion-button", { mode: "ios", class: "med-tooltip__button", "ds-color": !dsColor ? 'neutral-10' : dsColor, "ds-size": "xxs", fill: "clear", onClick: this.onBtnRightClick },
            " ",
            btnRight,
            " ")))));
  }
  static get is() { return "med-tooltip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-tooltip.css"]
  }; }
  static get properties() { return {
    "enableHover": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "enable-hover",
      "reflect": false
    },
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../@templarios/types/color.type"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "ds-color",
      "reflect": true
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
      },
      "attribute": "content",
      "reflect": true
    },
    "btnLeft": {
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
        "text": "todo"
      },
      "attribute": "btn-left",
      "reflect": false
    },
    "btnRight": {
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
        "text": "todo"
      },
      "attribute": "btn-right",
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
        "text": "todo"
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "btnLeftClick",
      "name": "btnLeftClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "btnRightClick",
      "name": "btnRightClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "(event?: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "todo",
        "tags": []
      }
    },
    "toggleOnHover": {
      "complexType": {
        "signature": "(event?: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
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
