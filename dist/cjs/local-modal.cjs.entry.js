'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const localModalCss = ".sc-local-modal-h{display:block;border-radius:0}.modal-content.sc-local-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-content__opcoes.sc-local-modal{cursor:pointer}.modal-content__opcoes.sc-local-modal:not(:last-child){border-bottom:1px solid hsl(var(--med-color-neutral-2))}.modal-footer.sc-local-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}";

const LocalModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-label", { class: "header__title", slot: "title" }, "Selecione os estados"))), index.h("ion-content", { class: "modal-content" }, index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "AL")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "AL")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "AM")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "BA")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CE")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "DF")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "EAD")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "GO")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "MA")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "MG")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "MS"))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
};
LocalModal.style = localModalCss;

exports.local_modal = LocalModal;
