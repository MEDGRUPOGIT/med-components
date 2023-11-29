/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import ResizeObserver from "resize-observer-polyfill";
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedNavbar {
  constructor() {
    this.dsColor = undefined;
    this.dsName = undefined;
  }
  componentDidLoad() {
    this.setSize();
  }
  disconnectedCallback() {
    if (this.sidesResizeObserver) {
      this.sidesResizeObserver.disconnect();
    }
  }
  setSize() {
    this.sidesResizeObserver = new ResizeObserver((entries) => {
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
    this.sidesResizeObserver.observe(this.leftEl);
    this.sidesResizeObserver.observe(this.rightEl);
  }
  render() {
    const { dsColor, dsName } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-navbar': true,
        [`med-navbar--${dsName}`]: dsName !== undefined,
      }) }, h("header", { class: "med-navbar__header" }, h("slot", { name: "top" }), h("div", { class: "med-navbar__container" }, h("div", { id: "left", class: "med-navbar__left", ref: (el) => this.leftEl = el }, h("slot", { name: "left" })), h("div", { class: "med-navbar__center", ref: (el) => this.centerEl = el }, h("slot", { name: "title" }), h("slot", { name: "subtitle" })), h("div", { id: "right", class: "med-navbar__right", ref: (el) => this.rightEl = el }, h("slot", { name: "right" }))))));
  }
  static get is() { return "med-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-navbar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-navbar.css"]
    };
  }
  static get properties() {
    return {
      "dsColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MedColor",
          "resolved": "string | undefined",
          "references": {
            "MedColor": {
              "location": "import",
              "path": "../../../../@templarios/types/color.type"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-color",
        "reflect": true
      },
      "dsName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'secondary' | 'transparent'",
          "resolved": "\"secondary\" | \"transparent\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-name",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "el"; }
}
