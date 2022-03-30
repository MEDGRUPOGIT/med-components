import { Component, Host, h } from '@stencil/core';
export class SheetTest {
  render() {
    return (h(Host, null,
      h("ion-header", { class: "tp-sheet-header" },
        h("ion-button", { class: "tp-dialog__button", "ds-name": "tertiary", "ds-size": "xxs" },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))),
      h("div", { class: "tp-sheet-content" },
        h("med-type", null, "Sheet"),
        h("med-type", null, "Sheet"),
        h("med-type", null, "Sheet"),
        h("med-type", null, "Sheet"),
        h("med-type", null, "Sheet"),
        h("med-type", null, "Sheet")),
      h("ion-footer", { class: "tp-sheet-footer" },
        h("ion-button", { class: "tp-dialog__button", expand: "block" }, "button"))));
  }
  static get is() { return "sheet-test"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["sheet-test.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sheet-test.css"]
  }; }
}
