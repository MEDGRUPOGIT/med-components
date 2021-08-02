import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedToolbar {
  render() {
    return (h(Host, { "from-stencil": true, class: createColorClasses(this.color, {
        'med-toolbar': true
      }, this.neutral) },
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
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    },
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Neutral",
        "resolved": "string | undefined",
        "references": {
          "Neutral": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "neutral",
      "reflect": false
    }
  }; }
}
