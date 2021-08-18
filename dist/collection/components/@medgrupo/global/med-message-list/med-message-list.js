import { Component, Host, h } from '@stencil/core';
export class MedMessageList {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "med-message-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-message-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-message-list.css"]
  }; }
}
