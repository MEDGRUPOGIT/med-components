import { Component, Host, h, State, Event } from '@stencil/core';
export class MedAvalicao {
  constructor() {
    this.onClick = (button) => {
      if (button === 'like' && this.clicked !== 'like') {
        this.clicked = 'like';
      }
      if (button === 'dislike' && this.clicked !== 'dislike') {
        this.clicked = 'dislike';
      }
      this.medChange.emit((this.clicked === 'like') ? 'like' : 'dislike');
      console.log(this.clicked);
    };
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("button", { class: `button ${this.clicked === 'like' ? 'button_like' : ''}`, onClick: () => this.onClick('like') },
        h("ion-icon", { name: "med-like", class: "rate" })),
      h("button", { class: `button ${this.clicked === 'dislike' ? 'button_dislike' : ''}`, onClick: () => this.onClick('dislike') },
        h("ion-icon", { name: "med-dislike", class: "rate" }))));
  }
  static get is() { return "med-rate-like"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-rate-like.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rate-like.css"]
  }; }
  static get states() { return {
    "clicked": {}
  }; }
  static get events() { return [{
      "method": "medChange",
      "name": "medChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "'like' | 'dislike'",
        "resolved": "\"dislike\" | \"like\"",
        "references": {}
      }
    }]; }
}
