import { Component, h, Host } from '@stencil/core';
export class ConcursoModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" },
            h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })),
          h("ion-label", { class: "header__title", slot: "title" }, "Concursos"))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "modal-content__input" },
          h("tp-input-container", { "has-icon": "start" },
            h("ion-icon", { class: "med-icon", slot: "start", name: "med-busca" }),
            h("ion-input", { mode: "md", placeholder: "Procurar o termo ou palavra-chave" }))),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "SCO - ASSOCIA\u00C7\u00C3O DA SANTA CASA")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "AMS - APUCARANA - AUTARQUIA MUNICIPAL")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "CCANSPS - CASA DE CARIDADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE"))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
  static get is() { return "concurso-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["concurso-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["concurso-modal.css"]
  }; }
}
