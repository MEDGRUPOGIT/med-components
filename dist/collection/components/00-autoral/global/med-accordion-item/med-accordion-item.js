import { Component, Element, Event, h, Host, State, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedAccordionItem {
  constructor() {
    this.noBorder = false;
    this.isOpen = false;
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
      content: this.content,
      header: this.header,
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
    const { noBorder, icon, isOpen } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-accordion-item': true,
        'med-accordion-item--no-border': noBorder,
        'med-accordion-item--open': isOpen,
      }, null) },
      h("div", { class: "med-accordion-item__header", ref: (el) => this.header = el },
        icon === 'left' && h("div", { class: "med-accordion-item__icon-container med-accordion-item__icon-container--left", onClick: () => this.onClick() },
          h("ion-icon", { class: "med-icon med-accordion-item__icon", name: "med-baixo" })),
        h("div", { class: "med-accordion-item__heading", onClick: () => this.onClick() },
          h("slot", { name: "header" })),
        h("slot", { name: "button" }),
        (!icon || icon === 'right') && h("div", { class: "med-accordion-item__icon-container med-accordion-item__icon-container--right", onClick: () => this.onClick() },
          h("ion-icon", { class: "med-icon med-accordion-item__icon", name: "med-baixo" }))),
      h("div", { class: "med-accordion-item__content", ref: (el) => this.content = el },
        h("slot", { name: "content" }))));
  }
  static get is() { return "med-accordion-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-accordion-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-accordion-item.css"]
  }; }
  static get properties() { return {
    "noBorder": {
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
        "text": ""
      },
      "attribute": "no-border",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right'",
        "resolved": "\"left\" | \"right\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": true
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
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
