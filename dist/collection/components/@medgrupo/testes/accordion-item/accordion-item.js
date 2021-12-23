import { Component, h, Host, Element, Event, State, Prop, Watch } from '@stencil/core';
export class AccordionItem {
  constructor() {
    /**
      * Define se o componente irá ter background quando aberto.
      */
    this.background = false;
    /**
      * Desabilita o componente.
      */
    this.disable = false;
    /**
      * Abre programaticamente o componente.
      */
    this.open = false;
    /**
      * Desabilita o componente.
      */
    this.headerToggle = true;
    this.isOpen = false;
    this.itemId = `accordion-item-${itemId++}`;
    this.isTransitioning = false;
    this.onClick = () => {
      if (this.disable)
        return;
      if (this.headerToggle) {
        this.toggleOpen();
      }
    };
  }
  watchPropHandler(newValue) {
    if (newValue !== this.isOpen) { }
    this.toggleOpen();
  }
  componentDidLoad() {
    if (this.open) {
      this.toggleOpen();
    }
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
    const { itemId, isOpen, background } = this;
    return (h(Host, { id: itemId, "from-stencil": true, class: {
        'accordion-item': true,
        'accordion-item--background': background,
        'accordion-item--open': isOpen,
      } },
      h("div", { class: "accordion-item__header", onClick: () => this.onClick() },
        h("slot", { name: "header" })),
      h("div", { class: "accordion-item__content", ref: (el) => this.contentElement = el },
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
  static get properties() { return {
    "background": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define se o componente ir\u00E1 ter background quando aberto."
      },
      "attribute": "background",
      "reflect": true,
      "defaultValue": "false"
    },
    "disable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Desabilita o componente."
      },
      "attribute": "disable",
      "reflect": true,
      "defaultValue": "false"
    },
    "open": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Abre programaticamente o componente."
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "headerToggle": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Desabilita o componente."
      },
      "attribute": "header-toggle",
      "reflect": true,
      "defaultValue": "true"
    }
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
  static get watchers() { return [{
      "propName": "open",
      "methodName": "watchPropHandler"
    }]; }
}
let itemId = 0;
