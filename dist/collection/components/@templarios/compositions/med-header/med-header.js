import { Component, Element, Event, h, Host } from '@stencil/core';
export class MedHeader {
  constructor() {
    this.hostHeight = 0;
  }
  componentDidLoad() {
    this.setSize();
  }
  disconnectedCallback() {
    if (this.hostResizeObserver) {
      this.hostResizeObserver.disconnect();
    }
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
      h("slot", { name: "progress" }),
      h("slot", { name: "auxiliar" })));
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
        "text": "todo"
      },
      "complexType": {
        "original": "headerResizeEventDetail",
        "resolved": "headerResizeEventDetail",
        "references": {
          "headerResizeEventDetail": {
            "location": "import",
            "path": "../../../../@templarios/interfaces/header.interface"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
