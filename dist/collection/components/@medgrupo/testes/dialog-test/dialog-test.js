import { Component, Host, h } from '@stencil/core';
export class DialogTest {
  render() {
    return (h(Host, null,
      h("ion-header", { class: "tp-dialog-header" },
        h("ion-button", { "ds-name": "tertiary", "ds-size": "xxs" },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))),
      h("div", { class: "tp-dialog-container" },
        h("med-type", null, "Dialog"),
        h("div", { class: "tp-dialog__footer" },
          h("ion-button", null, "Salvar")))));
  }
  static get is() { return "dialog-test"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["dialog-test.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dialog-test.css"]
  }; }
}
