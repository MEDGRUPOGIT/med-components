import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../../utils/med-theme';
export class MedOption {
  render() {
    const { dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-badge': true,
      }) },
      h("div", { class: "option" },
        h("slot", null),
        h("slot", { name: "label" }))));
  }
  static get is() { return "med-option"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() { return {
    "$": ["med-option.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-option.css"]
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
            "path": "../../../../../interface"
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
    }
  }; }
}
