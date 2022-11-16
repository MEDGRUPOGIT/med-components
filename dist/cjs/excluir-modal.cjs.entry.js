'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const excluirModalCss = ".sc-excluir-modal-h{display:block;border-radius:0}.modal-content.sc-excluir-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.excluir.sc-excluir-modal{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.excluir__text.sc-excluir-modal{font-weight:600;font-size:16px;line-height:24px}.modal-footer.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-footer__button.sc-excluir-modal:not(:last-child){margin-right:16px}";

const ExcluirModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-label", { class: "header__title", slot: "title" }, "Excluir Postagem"))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "excluir" }, index.h("ion-label", { class: "excluir__text" }, "Tem certeza que deseja excluir a postagem selecionada?"))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm", "ds-color": "neutral-5" }, "CANCELAR"), index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))));
  }
};
ExcluirModal.style = excluirModalCss;

exports.excluir_modal = ExcluirModal;
