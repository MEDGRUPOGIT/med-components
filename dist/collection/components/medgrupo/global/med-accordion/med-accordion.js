import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedAccordion {
  render() {
    const { color, dsSize } = this;
    return (h(Host, { class: createColorClasses(color, {
        null: true,
        'med-accordion--full': dsSize !== undefined,
      }) },
      h("slot", { name: "image" }),
      h("div", { class: "content" },
        h("slot", { name: "title" }),
        h("slot", { name: "content" })),
      h("ion-icon", { name: "med-arrow-up" })));
  }
  static get is() { return "med-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-accordion.css"]
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
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'full'",
        "resolved": "\"full\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ds-size",
      "reflect": false
    }
  }; }
}
