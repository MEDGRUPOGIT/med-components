import { Component, Host, h, Prop, Event } from '@stencil/core';
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
            h("h4", { class: "header" },
              " ",
              header),
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
        "text": ""
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
        "text": ""
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
        "text": ""
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
        "text": ""
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
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
