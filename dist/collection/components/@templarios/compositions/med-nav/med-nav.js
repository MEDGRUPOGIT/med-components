import { Component, h, Host, Event, Listen, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedNav {
  constructor() {
    /**
     * todo
     */
    this.active = false;
  }
  async watchClick() {
    this.active = !this.active;
  }
  clickHandle() {
    this.active = !this.active;
    this.clicked.emit(this.active);
  }
  render() {
    const { dsColor, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav': true,
        'med-nav--active': active
      }) },
      h("nav", { class: "med-nav__container" },
        h("div", { class: "med-nav__logo" },
          h("div", { class: "med-nav__icon-wrapper" },
            h("ion-icon", { class: "med-nav__icon med-icon med-icon--sm", name: "med-logo" })),
          h("med-type", { token: "h24", "ds-color": "neutral-10" }, "MEDSoft")),
        h("slot", null),
        h("ion-button", { mode: "ios", "icon-only": true, "ds-color": dsColor, class: "med-nav__toggle", fill: "clear", onClick: () => this.clickHandle() },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" }))),
      h("med-nav-simple", { "ds-color": dsColor })));
  }
  static get is() { return "med-nav"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-nav.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-nav.css"]
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
    },
    "active": {
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
        "text": "todo"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "clicked",
      "name": "clicked",
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
  static get listeners() { return [{
      "name": "close",
      "method": "watchClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
