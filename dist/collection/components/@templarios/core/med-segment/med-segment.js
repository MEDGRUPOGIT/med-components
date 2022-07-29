import { Component, h, Host } from '@stencil/core';
export class MedSegment {
  render() {
    return (h(Host, { class: "med-segment" },
      h("div", { class: "med-segment__container" },
        h("slot", null)),
      h("div", { class: "med-segment__fade" })));
  }
  static get is() { return "med-segment"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-segment.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-segment.css"]
  }; }
}
