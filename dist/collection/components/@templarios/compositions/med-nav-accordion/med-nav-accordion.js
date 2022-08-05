import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedNavAccordion {
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-accordion': true,
      }) },
      h("med-accordion-list", { class: "med-nav-accordion__list", "single-open": "false" },
        h("med-accordion-item", { class: "med-nav-accordion__item", color: "aula", background: true },
          h("div", { class: "med-nav-accordion__header", slot: "full-header" },
            h("med-type", { token: "p16b" }, this.titulo),
            h("ion-icon", { class: "med-icon med-nav-accordion__icon", name: "med-baixo" })),
          h("div", { slot: "content" },
            h("slot", null))))));
  }
  static get is() { return "med-nav-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-nav-accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-nav-accordion.css"]
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
    "titulo": {
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
        "text": ""
      },
      "attribute": "titulo",
      "reflect": true
    }
  }; }
}
