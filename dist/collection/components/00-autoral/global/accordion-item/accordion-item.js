import { Component, Element, Event, h, Host, Listen, State } from '@stencil/core';
export class AccordionItem {
  constructor() {
    this.isOpen = false;
    this.isTransitioning = false;
  }
  componentDidLoad() {
    this.content = this.hostElement.shadowRoot.querySelector('.content');
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.isTransitioning = true;
    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
      },
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: "header" },
        h("slot", { name: "header" })),
      h("div", { class: "content" },
        h("slot", { name: "content" }))));
  }
  static get is() { return "hv-accordion-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["accordion-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["accordion-item.css"]
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
  static get events() { return [{
      "method": "toggle",
      "name": "toggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "click",
      "method": "toggleOpen",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
