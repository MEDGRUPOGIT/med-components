import { Component, h, Host } from '@stencil/core';
export class ExcluirModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-label", { class: "header__title", slot: "title" }, "Excluir Postagem"))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "excluir" },
          h("ion-label", { class: "excluir__text" }, "Tem certeza que deseja excluir a postagem selecionada?"))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm", "ds-color": "neutral-5" }, "CANCELAR"),
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))));
  }
  static get is() { return "excluir-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["excluir-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["excluir-modal.css"]
  }; }
}
