import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedTabs {
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tabs': true,
      }) },
      h("slot", null)));
  }
  static get is() { return "med-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-tabs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-tabs.css"]
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
