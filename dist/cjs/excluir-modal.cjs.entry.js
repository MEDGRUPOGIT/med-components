'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const excluirModalCss = ".sc-excluir-modal-h{display:block;border-radius:0}.header.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-excluir-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-excluir-modal{height:calc(100% - 80px)}@media (max-width: 575.98px){.modal-content.sc-excluir-modal{height:calc(100% - 72px)}}.modal-excluir.sc-excluir-modal{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:40px 64px}@media (max-width: 575.98px){.modal-excluir.sc-excluir-modal{padding:24px}}.modal-excluir__title.sc-excluir-modal{margin-bottom:40px;display:block;font-weight:600;font-size:24px;line-height:32px}@media (max-width: 575.98px){.modal-excluir__title.sc-excluir-modal{margin-bottom:24px}}.modal-excluir__text.sc-excluir-modal{font-weight:400;font-size:16px;line-height:24px}.modal-excluir__button-container.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:40px}@media (max-width: 575.98px){.modal-excluir__button-container.sc-excluir-modal{margin-top:auto}}.modal-excluir__button.sc-excluir-modal:not(:last-child){margin-right:16px}@media (max-width: 575.98px){.modal-excluir__button.sc-excluir-modal{-ms-flex:1;flex:1}}";

const ExcluirModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-excluir" }, index.h("ion-label", { class: "modal-excluir__title" }, "Excluir Postagem"), index.h("ion-label", { class: "modal-excluir__text" }, "Tem certeza que deseja excluir a postagem selecionada?"), index.h("div", { class: "modal-excluir__button-container" }, index.h("ion-button", { class: "modal-excluir__button", mode: "ios", "ds-size": "sm", "ds-color": "neutral-5" }, "CANCELAR"), index.h("ion-button", { class: "modal-excluir__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))))));
  }
};
ExcluirModal.style = excluirModalCss;

exports.excluir_modal = ExcluirModal;
