import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedAddCard {
  render() {
    const { dsColor, titulo, iconName } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-add-card': true,
      }) },
      h("med-base", { class: "med-add-card__container", "spacing-h": "s16", "spacing-v": "s22" },
        h("ion-icon", { class: "med-icon med-add-card__icon", name: iconName }),
        h("med-type", { token: "p14" }, titulo))));
  }
  static get is() { return "med-add-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-add-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-add-card.css"]
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
    "titulo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "titulo",
      "reflect": true
    },
    "iconName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-name",
      "reflect": true
    }
  }; }
}
