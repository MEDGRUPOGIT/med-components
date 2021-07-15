import { Component, Host, h } from '@stencil/core';
export class MedToolbar {
  render() {
    return (h(Host, { "from-stencil": true },
      h("div", { class: "container" },
        h("slot", { name: "start" }),
        h("div", { class: "container__center" },
          h("slot", null)),
        h("slot", { name: "end" }))));
  }
  static get is() { return "med-toolbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-toolbar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-toolbar.css"]
  }; }
}
