import { Component, Host, h } from '@stencil/core';
export class SelectTest {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "select-test"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["select-test.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["select-test.css"]
  }; }
}