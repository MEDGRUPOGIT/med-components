import { Component, Host, h, Element, Event } from '@stencil/core';
import ResizeObserver from "resize-observer-polyfill";
export class MedNavbar {
  constructor() {
    this.hostHeight = 0;
  }
  componentDidLoad() {
    this.setSize();
  }
  disconnectedCallback() {
    this.sidesResizeObserver.disconnect();
    this.hostResizeObserver.disconnect();
  }
  setSize() {
    this.sidesResizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const rightWidth = Number(this.rightEl.getBoundingClientRect().width);
        const leftWidth = Number(this.leftEl.getBoundingClientRect().width);
        const leftDiff = entry.contentRect.width - rightWidth;
        const rightDiff = entry.contentRect.width - leftWidth;
        let marginLeft = 0;
        let marginRight = 0;
        if (rightWidth !== leftWidth) {
          if (entry.target.id === 'left') {
            if (leftDiff > 0) {
              marginRight = leftDiff;
            }
            else {
              marginLeft = rightDiff - leftDiff;
              if (marginLeft < 0) {
                marginLeft *= -1;
              }
            }
          }
          else if (entry.target.id === 'right') {
            if (rightDiff > 0) {
              marginLeft = rightDiff;
            }
            else {
              marginRight = rightDiff - leftDiff;
              if (marginRight < 0) {
                marginRight *= -1;
              }
            }
          }
        }
        this.centerEl.style.setProperty('--padding-left', `${marginLeft}px`);
        this.centerEl.style.setProperty('--padding-right', `${marginRight}px`);
      }
    });
    this.hostResizeObserver = new ResizeObserver(() => {
      let newHostHeight = Number(this.el.getBoundingClientRect().height);
      if (newHostHeight !== this.hostHeight) {
        this.medResize.emit({ height: newHostHeight });
        this.hostHeight = newHostHeight;
      }
    });
    this.sidesResizeObserver.observe(this.leftEl);
    this.sidesResizeObserver.observe(this.rightEl);
    this.hostResizeObserver.observe(this.el);
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("header", { class: "header" },
        h("slot", { name: "top" }),
        h("div", { class: "header__container" },
          h("div", { id: "left", class: "left", ref: (el) => this.leftEl = el },
            h("slot", { name: "left" })),
          h("div", { class: "center", ref: (el) => this.centerEl = el },
            h("slot", { name: "center" }),
            h("slot", { name: "title" }),
            h("slot", { name: "subtitle" })),
          h("div", { id: "right", class: "right", ref: (el) => this.rightEl = el },
            h("slot", { name: "right" }))))));
  }
  static get is() { return "med-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-navbar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-navbar.css"]
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
        "original": "navbarResizeEventDetail",
        "resolved": "navbarResizeEventDetail",
        "references": {
          "navbarResizeEventDetail": {
            "location": "import",
            "path": "./med-navbar-interface"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
