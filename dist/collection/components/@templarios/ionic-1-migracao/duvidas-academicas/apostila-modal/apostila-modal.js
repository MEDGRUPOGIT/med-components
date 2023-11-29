/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class ApostilaModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-apostilas" }, h("ion-label", { class: "modal-apostilas__title" }, "Apostilas"), h("div", { class: "modal-apostilas__input" }, h("tp-input-container", { "has-icon": "start" }, h("ion-icon", { class: "med-icon", slot: "start", name: "med-busca" }), h("ion-input", { mode: "md", placeholder: "Procurar o termo ou palavra-chave" }))), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CAR 01")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CAR 02")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CAR 03")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CIR 01")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CIR 02")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CIR 03")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "GO 01")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "GO 02")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "GO 03")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PED 01")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PED 02")), h("ion-item", { class: "modal-apostilas__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PED 03")))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
  static get is() { return "apostila-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["apostila-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["apostila-modal.css"]
    };
  }
}
