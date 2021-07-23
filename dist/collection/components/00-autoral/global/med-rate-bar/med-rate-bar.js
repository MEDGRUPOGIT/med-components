import { Component, Host, h } from '@stencil/core';
export class MedRateBar {
  render() {
    return (h(Host, { "from-stencil": true },
      h("slot", null),
      h("slot", { name: "avaliacao" })));
  }
  static get is() { return "med-rate-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-rate-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rate-bar.css"]
  }; }
}
