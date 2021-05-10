import { Component, Host, h, Element, Event } from '@stencil/core';
export class MedHeader {
  constructor() {
    this.hostHeight = 0;
  }
  componentDidLoad() {
    this.setSize();
  }
  disconnectedCallback() {
    this.hostResizeObserver.disconnect();
  }
  setSize() {
    this.hostResizeObserver = new ResizeObserver(() => {
      let newHostHeight = Number(this.el.getBoundingClientRect().height);
      if (newHostHeight !== this.hostHeight) {
        this.medResize.emit({ height: newHostHeight });
        this.hostHeight = newHostHeight;
      }
    });
    this.hostResizeObserver.observe(this.el);
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("slot", { name: "navbar" }),
      h("slot", { name: "toolbar" }),
      h("slot", { name: "progress" })));
  }
  static get is() { return "med-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-header.css"]
  }; }
  static get events() { return [{
      "method": "medResize",
      "name": "medResize",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "headerResizeEventDetail",
        "resolved": "headerResizeEventDetail",
        "references": {
          "headerResizeEventDetail": {
            "location": "import",
            "path": "./med-header-interface"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
