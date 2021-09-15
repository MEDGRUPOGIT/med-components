import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
/**
 * @slot avatar - Slot destinado ao avatar.
 * @slot rate - Slot destinado ao componete de rate.
 */
export class MedItemAulas {
  render() {
    const { dsColor, professor, porcentagem, videos } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-item-aulas': true,
      }) },
      h("div", { class: "med-item-aulas__top" },
        h("slot", { name: "avatar" }),
        h("div", { class: "med-item-aulas__info" },
          h("p", { class: "med-item-aulas__professor" }, "Professor"),
          h("p", { class: "med-item-aulas__nome" }, professor),
          h("p", { class: "med-item-aulas__total" },
            Math.round(porcentagem),
            "% concluido - ",
            videos,
            " v\u00EDdeos"),
          h("slot", { name: "rate" })),
        h("ion-icon", { class: "med-icon", name: "med-direita" })),
      h("div", { class: "med-item-aulas__bottom" },
        h("ion-progress-bar", { "ds-color": dsColor, "ds-name": "minimalist", value: porcentagem / 100 }))));
  }
  static get is() { return "med-item-aulas"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-item-aulas.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-item-aulas.css"]
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
    "professor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o nome do professor."
      },
      "attribute": "professor",
      "reflect": false
    },
    "porcentagem": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define a porcentagem de visualiza\u00E7\u00E3o de v\u00EDdeos."
      },
      "attribute": "porcentagem",
      "reflect": false
    },
    "videos": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define a quantidade de v\u00EDdeos."
      },
      "attribute": "videos",
      "reflect": false
    }
  }; }
}
