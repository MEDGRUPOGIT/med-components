import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedRateBar {
  render() {
    const { dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-rate-bar': true,
      }) },
      h("slot", null),
      h("slot", { name: "avaliacao" })));
  }
  static get is() { return "med-rate-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-rate-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rate-bar.css"]
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
    }
  }; }
}
