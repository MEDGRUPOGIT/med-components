import { Component, Host, h, Prop } from '@stencil/core';
export class MedTooltip {
  render() {
    let buttonContainer;
    let buttonRightEl;
    let buttonLeftEl;
    const { header, content, buttonLeft, buttonRight } = this;
    const simple = !header && !buttonLeft && !buttonRight && content && content.split(' ').length <= 3;
    if (buttonLeft && buttonLeft.icon) {
      buttonLeftEl = (h("ion-button", { "ds-name": "icon-only" },
        h("ion-icon", { slot: "icon-only", name: buttonLeft.icon })));
    }
    else if (buttonLeft && buttonLeft.label) {
      buttonLeftEl = (h("button", { class: "button button--left" }, buttonLeft.label));
    }
    else {
      buttonLeftEl = '';
    }
    if (buttonRight && buttonRight.icon) {
      console.log(buttonRight.icon);
      buttonRightEl = (h("ion-button", { "ds-name": "icon-only" },
        h("ion-icon", { slot: "icon-only", name: buttonRight.icon })));
    }
    else if (buttonRight && buttonRight.label) {
      buttonRightEl = (h("button", { class: "button button--right" }, buttonRight.label));
    }
    else {
      buttonRightEl = '';
    }
    if (buttonLeft || buttonRight) {
      buttonContainer = (h("div", { class: "button-container" },
        buttonLeftEl,
        buttonRightEl));
    }
    return (h(Host, { "from-stencil": true, class: { 'simple': simple } },
      header && h("h4", { class: "header" }, header),
      content && h("p", { class: "content" }, content),
      buttonContainer));
  }
  static get is() { return "med-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-tooltip.css"]
  }; }
  static get properties() { return {
    "header": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header",
      "reflect": true
    },
    "content": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "content",
      "reflect": true
    },
    "buttonLeft": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ label: string, icon: string }",
        "resolved": "{ label: string; icon: string; }",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "buttonRight": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ label: string, icon: string }",
        "resolved": "{ label: string; icon: string; }",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}
