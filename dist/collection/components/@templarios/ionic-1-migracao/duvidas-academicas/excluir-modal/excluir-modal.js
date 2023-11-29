/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class ExcluirModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-excluir" }, h("ion-label", { class: "modal-excluir__title" }, "Excluir Postagem"), h("ion-label", { class: "modal-excluir__text" }, "Tem certeza que deseja excluir a postagem selecionada?"), h("div", { class: "modal-excluir__button-container" }, h("ion-button", { class: "modal-excluir__button", mode: "ios", "ds-size": "sm", "ds-color": "neutral-5" }, "CANCELAR"), h("ion-button", { class: "modal-excluir__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))))));
  }
  static get is() { return "excluir-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["excluir-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["excluir-modal.css"]
    };
  }
}
