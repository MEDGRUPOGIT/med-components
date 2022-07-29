import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedAddCard {
  render() {
    const { titulo, iconName } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-add-card': true,
      }) },
      h("med-base", { class: "med-add-card__container", "spacing-h": "s16", "spacing-v": "s16" },
        h("ion-icon", { class: "med-icon med-add-card__icon", name: iconName }),
        h("med-type", { token: "p16x" }, titulo))));
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
        "text": "todo"
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
        "text": "todo"
      },
      "attribute": "icon-name",
      "reflect": true
    }
  }; }
}
