import { Component, Event, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedNavSimple {
  clickHandle() {
    this.close.emit();
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-simple': true,
      }) },
      h("nav", { class: "med-nav-simple__wrapper" },
        h("div", { class: "med-nav-simple__logo" },
          h("div", { class: "med-nav-simple__icon-wrapper" },
            h("ion-icon", { class: "med-nav-simple__icon med-icon med-icon--sm", name: "med-logo" }))),
        h("slot", null),
        h("ion-button", { mode: "ios", "icon-only": true, "ds-color": dsColor, class: "med-nav__toggle", fill: "clear", onClick: () => this.clickHandle() },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })))));
  }
  static get is() { return "med-nav-simple"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-nav-simple.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-nav-simple.css"]
  }; }
  static get properties() { return {
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
    }
  }; }
  static get events() { return [{
      "method": "close",
      "name": "close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
