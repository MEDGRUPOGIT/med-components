import { Component, h, Host } from '@stencil/core';
export class InformativoModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial"))),
      h("div", { class: "informativo" },
        h("ion-slides", { class: "informativo__slides", pager: true },
          h("ion-slide", { class: "informativo__slide" },
            h("img", { class: "informativo__image", src: "https://via.placeholder.com/500" }),
            h("ion-label", { class: "informativo__title", "ds-color": "brand" }, "Marca\u00E7\u00F5es"),
            h("ion-label", { class: "informativo__text", "ds-color": "neutral-10" }, "Para marcar ou interagir com sua apostila, selecione o texto e utilize o menu +")),
          h("ion-slide", { class: "informativo__slide" },
            h("img", { class: "informativo__image", src: "https://via.placeholder.com/500" }),
            h("ion-label", { class: "informativo__title", "ds-color": "brand" }, "Hist\u00F3rico de Marca\u00E7\u00F5es"),
            h("ion-label", { class: "informativo__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O.")))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
  static get is() { return "informativo-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["informativo-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["informativo-modal.css"]
  }; }
}
