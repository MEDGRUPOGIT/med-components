import { Component, Host, h } from '@stencil/core';
export class MedAutocomplete {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "med-autocomplete"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-autocomplete.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-autocomplete.css"]
  }; }
}
