/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class ConcursoModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-concursos" }, h("ion-label", { class: "modal-concursos__title" }, "Concursos"), h("div", { class: "modal-concursos__input" }, h("tp-input-container", { "has-icon": "start" }, h("ion-icon", { class: "med-icon", slot: "start", name: "med-busca" }), h("ion-input", { mode: "md", placeholder: "Procurar o termo ou palavra-chave" }))), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "SCO - ASSOCIA\u00C7\u00C3O DA SANTA CASA")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "AMS - APUCARANA - AUTARQUIA MUNICIPAL")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "CCANSPS - CASA DE CARIDADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), h("ion-item", { class: "modal-concursos__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
  static get is() { return "concurso-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["concurso-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["concurso-modal.css"]
    };
  }
}
