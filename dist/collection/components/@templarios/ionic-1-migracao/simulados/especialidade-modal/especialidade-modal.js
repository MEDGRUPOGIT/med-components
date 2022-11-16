import { Component, h, Host } from '@stencil/core';
export class EspecialidadeModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-label", { class: "header__title", slot: "title" }, "Especialidade"))),
      h("ion-content", { class: "modal-content" },
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Acupuntura")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Alergia e imunologia")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Anestesiologia")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Aperfei\u00E7oamento")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Cardiologia")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "Especialidade"))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
  static get is() { return "especialidade-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["especialidade-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["especialidade-modal.css"]
  }; }
}
