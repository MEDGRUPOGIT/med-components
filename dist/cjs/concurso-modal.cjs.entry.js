'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const concursoModalCss = ".sc-concurso-modal-h{display:block;border-radius:0}.modal-content.sc-concurso-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-content__input.sc-concurso-modal{padding:16px}.modal-content__opcoes.sc-concurso-modal{cursor:pointer}.modal-content__opcoes.sc-concurso-modal:not(:last-child){border-bottom:1px solid hsl(var(--med-color-neutral-2))}.modal-footer.sc-concurso-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}";

const ConcursoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })), index.h("ion-label", { class: "header__title", slot: "title" }, "Concursos"))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-content__input" }, index.h("tp-input-container", { "has-icon": "start" }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-busca" }), index.h("ion-input", { mode: "md", placeholder: "Procurar o termo ou palavra-chave" }))), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "SCO - ASSOCIA\u00C7\u00C3O DA SANTA CASA")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "AMS - APUCARANA - AUTARQUIA MUNICIPAL")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CCANSPS - CASA DE CARIDADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PUC - PR - ALIAN\u00C7A SA\u00DADE"))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
};
ConcursoModal.style = concursoModalCss;

exports.concurso_modal = ConcursoModal;
