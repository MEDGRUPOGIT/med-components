import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedToolbar {
  render() {
    const { dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-toolbar': true,
      }) },
      h("div", { class: "container" },
        h("slot", { name: "start" }),
        h("div", { class: "container__center" },
          h("slot", null)),
        h("slot", { name: "end" }))));
  }
  static get is() { return "med-toolbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-toolbar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-toolbar.css"]
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
