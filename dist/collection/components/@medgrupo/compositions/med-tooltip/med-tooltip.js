import { Component, Host, h, Prop, Method, Listen, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedTooltip {
  constructor() {
    /**
      * TODO
      */
    this.collapsed = true;
    this.onBtnLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onBtnRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  /**
    * Define o estado do componente programaticamente.
    */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
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
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "Define o texto do bot\u00E3o esquerdo, se existir."
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
        "text": "Define o texto do bot\u00E3o direito, se existir."
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "Define o estado do componente programaticamente.",
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
