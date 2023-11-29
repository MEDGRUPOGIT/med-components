/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class LocalModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-local" }, h("ion-label", { class: "modal-local__title" }, "Selecione os estados"), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "AL")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "AL")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "AM")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "BA")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CE")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "DF")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "EAD")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "GO")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "MA")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "MG")), h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "MS")))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
  static get is() { return "local-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["local-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["local-modal.css"]
    };
  }
}
