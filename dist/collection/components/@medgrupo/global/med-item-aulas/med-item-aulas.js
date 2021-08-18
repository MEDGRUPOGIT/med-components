import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedItemAulas {
  render() {
    const { dados } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-item-aulas': true,
      }, null) },
      h("div", { class: "med-item-aulas__top" },
        h("med-avatar", { "ds-size": "lg", letter: dados.avatar.letra ? dados.avatar.letra : '', image: dados.avatar.imagem ? dados.avatar.imagem : '' }),
        h("div", { class: "med-item-aulas__info" },
          h("p", { class: "med-item-aulas__professor" }, "Profressor"),
          h("p", { class: "med-item-aulas__nome" }, dados.professor),
          h("p", { class: "med-item-aulas__total" },
            dados.porcentagem,
            " concluido - ",
            dados.videos,
            " v\u00EDdeos"),
          h("med-rate-result", { excelente: dados.rate.excelente, bom: dados.rate.bom, regular: dados.rate.regular, ruim: dados.rate.ruim })),
        h("ion-icon", { class: "med-icon", name: "med-direita" })),
      h("div", { class: "med-item-aulas__bottom" },
        h("ion-progress-bar", { "ds-name": "minimalist", value: dados.porcentagem }))));
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
    "dados": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define os dados do componente."
      },
      "attribute": "dados",
      "reflect": false
    }
  }; }
}
