import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedNav {
  constructor() {
    /**
      * TODO.
      */
    this.active = false;
  }
  async watchClick() {
    this.active = !this.active;
  }
  clickHandle() {
    this.active = !this.active;
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
        h("ion-button", { "ds-color": dsColor, class: "med-nav__toggle", "ds-name": "tertiary", onClick: () => this.clickHandle() },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" }))),
      h("med-nav-simple", { "ds-color": dsColor })));
  }
  static get is() { return "med-nav"; }
  static get encapsulation() { return "shadow"; }
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
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
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
        "text": "TODO."
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get listeners() { return [{
      "name": "close",
      "method": "watchClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}