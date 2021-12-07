import { Component, h, Host, Element, Event, State } from '@stencil/core';
export class AccordionItem {
  constructor() {
    this.isOpen = false;
    this.itemId = `accordion-item-${itemId++}`;
    this.isTransitioning = false;
    this.onClick = () => {
      this.toggleOpen();
    };
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.isTransitioning = true;
    this.toggle.emit({
      element: this.hostElement,
      elementId: this.itemId,
      content: this.contentElement,
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
    const { itemId } = this;
    return (h(Host, { id: itemId },
      h("div", { class: "header", onClick: () => this.onClick() },
        h("slot", { name: "header" })),
      h("div", { class: "content", ref: (el) => this.contentElement = el },
        h("slot", { name: "content" }))));
  }
  static get is() { return "accordion-item"; }
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
        "text": "Internal"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
let itemId = 0;
