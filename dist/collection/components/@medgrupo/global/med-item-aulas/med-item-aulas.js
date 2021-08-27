import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
/**
 * @slot avatar - Slot destinado ao avatar.
 * @slot rate - Slot destinado ao componete de rate.
 */
export class MedItemAulas {
  render() {
    const { professor, porcentagem, videos } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-item-aulas': true,
      }, null) },
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
        h("ion-progress-bar", { "ds-name": "minimalist", value: porcentagem / 100 }))));
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
