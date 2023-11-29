/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const localModalCss = ".sc-local-modal-h{display:block;border-radius:0}.header.sc-local-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-local-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-local-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-local-modal{height:calc(100% - 176px)}@media (max-width: 575.98px){.modal-content.sc-local-modal{height:calc(100% - 168px)}}.modal-local.sc-local-modal{padding:40px 64px}@media (max-width: 575.98px){.modal-local.sc-local-modal{padding:24px}}.modal-local__title.sc-local-modal{margin-bottom:40px;display:block;font-weight:600;font-size:24px;line-height:32px}@media (max-width: 575.98px){.modal-local__title.sc-local-modal{margin-bottom:24px}}.modal-local__opcoes.sc-local-modal{--border-radius:8px;cursor:pointer}.modal-local__opcoes.sc-local-modal:not(:last-child){margin-bottom:8px}.modal-footer.sc-local-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:24px}";

const LocalModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-local" }, index.h("ion-label", { class: "modal-local__title" }, "Selecione os estados"), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "AL")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "AL")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "AM")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "BA")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "CE")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "DF")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "EAD")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "GO")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "MA")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "MG")), index.h("ion-item", { class: "modal-local__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "MS")))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
};
LocalModal.style = localModalCss;

exports.local_modal = LocalModal;
