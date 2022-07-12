import { Component, Host, h } from '@stencil/core';
export class MedInput {
  render() {
    return (h(Host, null,
      h("slot", { name: "label" }),
      h("slot", { name: "input" })));
  }
  static get is() { return "med-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-input.css"]
  }; }
}
