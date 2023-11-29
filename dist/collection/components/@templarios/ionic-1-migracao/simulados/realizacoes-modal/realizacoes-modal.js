/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class RealizacoesModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-realizacoes" }, h("ion-label", { class: "modal-realizacoes__title" }, "Realiza\u00E7\u00F5es"), h("ion-item", { class: "modal-realizacoes__item modal-realizacoes__item--agendado", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("div", { class: "modal-realizacoes__text-container" }, h("ion-label", { class: "modal-realizacoes__data" }, "Em 10/06/22 18:15:00"), h("ion-label", { class: "modal-realizacoes__modo" }, "(Simulado Agendado)"))), h("ion-item", { class: "modal-realizacoes__item modal-realizacoes__item--aviso", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("div", { class: "modal-realizacoes__text-container" }, h("ion-label", { class: "modal-realizacoes__data" }, "Voc\u00EA n\u00E3o realizou o simulado agendado."), h("ion-label", { class: "modal-realizacoes__modo" }, "(Modo Prova)"))), h("ion-item", { class: "modal-realizacoes__item", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("div", { class: "modal-realizacoes__text-container" }, h("ion-label", { class: "modal-realizacoes__data" }, "Em 10/06/22 18:15:00"), h("ion-label", { class: "modal-realizacoes__modo" }, "(Modo Prova)"))), h("ion-item", { class: "modal-realizacoes__item", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("div", { class: "modal-realizacoes__text-container" }, h("ion-label", { class: "modal-realizacoes__data" }, "Em 10/06/22 18:15:00"), h("ion-label", { class: "modal-realizacoes__modo" }, "(Modo Prova)"))), h("ion-item", { class: "modal-realizacoes__item", "spacing-v": "s16", "spacing-h": "s16", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("div", { class: "modal-realizacoes__text-container" }, h("ion-label", { class: "modal-realizacoes__data" }, "Em 10/06/22 18:15:00"), h("ion-label", { class: "modal-realizacoes__modo" }, "(Modo Prova)"))))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
  static get is() { return "realizacoes-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["realizacoes-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["realizacoes-modal.css"]
    };
  }
}
