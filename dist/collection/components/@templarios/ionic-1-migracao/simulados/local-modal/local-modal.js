import { Component, h, Host } from '@stencil/core';
export class LocalModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-label", { class: "header__title", slot: "title" }, "Selecione os estados"))),
      h("ion-content", { class: "modal-content" },
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "AL")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "AL")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "AM")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "BA")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "CE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "DF")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "EAD")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "GO")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "MA")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "MG")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "MS"))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
  static get is() { return "local-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["local-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["local-modal.css"]
  }; }
}
