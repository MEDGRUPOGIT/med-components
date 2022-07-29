import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../../@templarios/utilities/color';
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
            "path": "../../../../../@templarios/types/color.type"
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
}
