import { Component, Host, h, Prop, Event } from '@stencil/core';
/**
  * @slot imagem - Posiciona um elemento imagem ou icone a esquerda do banner.
  * @slot content - Define o conetudo de texto do banner.
  */
export class MedBanner {
  constructor() {
    this.onBtnLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onBtnRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  render() {
    const { header, btnLeft, btnRight } = this;
    return (h(Host, { "from-stencil": true },
      h("div", { class: "content" },
        h("div", { class: "content__top" },
          h("div", { class: "content__left" },
            h("slot", { name: "imagem" })),
          h("div", { class: "content__right" },
            h("h4", { class: "header" }, header),
            h("slot", { name: "content" }))),
        h("div", { class: "content__bottom" },
          btnLeft && h("button", { class: "button button--left", onClick: this.onBtnLeftClick },
            " ",
            btnLeft,
            " "),
          btnRight && h("button", { class: "button button--right", onClick: this.onBtnRightClick },
            " ",
            btnRight,
            " ")))));
  }
  static get is() { return "med-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-banner.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-banner.css"]
  }; }
  static get properties() { return {
    "header": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o t\u00EDtulo do banner."
      },
      "attribute": "header",
      "reflect": false
    },
    "btnLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
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
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o texto do bot\u00E3o direito."
      },
      "attribute": "btn-right",
      "reflect": false
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
        "text": "Define o texto texto do bot\u00E3o direito, se existir."
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
        "text": "Emitido quando \u00E9 feito um click no bot\u00E3o direito."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
