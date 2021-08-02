import { Component, Host, h } from '@stencil/core';
export class MedOption {
  render() {
    return (h(Host, { "from-stencil": true },
      h("div", { class: "option" },
        h("slot", null),
        h("slot", { name: "label" }))));
  }
  static get is() { return "med-option"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() { return {
    "$": ["med-option.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-option.css"]
  }; }
}
