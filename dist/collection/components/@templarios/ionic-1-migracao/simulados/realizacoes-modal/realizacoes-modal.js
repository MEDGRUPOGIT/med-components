import { Component, h, Host } from '@stencil/core';
export class RealizacoesModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-label", { class: "header__title", slot: "title" }, "Realiza\u00E7\u00F5es"))),
      h("ion-content", { class: "modal-content" },
        h("ion-item", { class: "modal-content__item modal-content__item--agendado", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none" },
          h("div", { class: "modal-content__text-container" },
            h("ion-label", { class: "modal-content__data" }, "Em 10/06/22 18:15:00"),
            h("ion-label", { class: "modal-content__modo" }, "(Simulado Agendado)"))),
        h("ion-item", { class: "modal-content__item modal-content__item--aviso", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none" },
          h("div", { class: "modal-content__text-container" },
            h("ion-label", { class: "modal-content__data" }, "Voc\u00EA n\u00E3o realizou o simulado agendado."),
            h("ion-label", { class: "modal-content__modo" }, "(Modo Prova)"))),
        h("ion-item", { class: "modal-content__item", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none" },
          h("div", { class: "modal-content__text-container" },
            h("ion-label", { class: "modal-content__data" }, "Em 10/06/22 18:15:00"),
            h("ion-label", { class: "modal-content__modo" }, "(Modo Prova)"))),
        h("ion-item", { class: "modal-content__item", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none" },
          h("div", { class: "modal-content__text-container" },
            h("ion-label", { class: "modal-content__data" }, "Em 10/06/22 18:15:00"),
            h("ion-label", { class: "modal-content__modo" }, "(Modo Prova)"))),
        h("ion-item", { class: "modal-content__item", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none" },
          h("div", { class: "modal-content__text-container" },
            h("ion-label", { class: "modal-content__data" }, "Em 10/06/22 18:15:00"),
            h("ion-label", { class: "modal-content__modo" }, "(Modo Prova)")))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
  static get is() { return "realizacoes-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["realizacoes-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["realizacoes-modal.css"]
  }; }
}
