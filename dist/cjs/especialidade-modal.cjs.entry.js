'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const especialidadeModalCss = ".sc-especialidade-modal-h{display:block;border-radius:0}.modal-content.sc-especialidade-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-content__opcoes.sc-especialidade-modal{cursor:pointer}.modal-content__opcoes.sc-especialidade-modal:not(:last-child){border-bottom:1px solid hsl(var(--med-color-neutral-2))}.modal-footer.sc-especialidade-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}";

const EspecialidadeModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-label", { class: "header__title", slot: "title" }, "Especialidade"))), index.h("ion-content", { class: "modal-content" }, index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Acupuntura")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Alergia e imunologia")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Anestesiologia")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Aperfei\u00E7oamento")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Cardiologia")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "Especialidade"))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
};
EspecialidadeModal.style = especialidadeModalCss;

exports.especialidade_modal = EspecialidadeModal;
