import { Component, Host, h, Event } from '@stencil/core';
export class MedSheet {
  onClick() {
    this.medClick.emit();
  }
  render() {
    return (h(Host, { class: "med-sheet" },
      h("ion-header", { class: "med-sheet__header" },
        h("ion-button", { class: "med-sheet__button", "ds-name": "tertiary", onClick: () => this.onClick() },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))));
  }
  static get is() { return "med-sheet"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-sheet.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-sheet.css"]
  }; }
  static get events() { return [{
      "method": "medClick",
      "name": "medClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
