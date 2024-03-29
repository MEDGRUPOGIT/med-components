/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const unidadesModalCss = ".sc-unidades-modal-h{display:block;border-radius:0}.header.sc-unidades-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-unidades-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-unidades-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-unidades-modal{height:calc(100% - 176px)}@media (max-width: 575.98px){.modal-content.sc-unidades-modal{height:calc(100% - 168px)}}.modal-unidades.sc-unidades-modal{padding:40px 64px}@media (max-width: 575.98px){.modal-unidades.sc-unidades-modal{padding:24px}}.modal-unidades__title.sc-unidades-modal{margin-bottom:40px;display:block;font-weight:600;font-size:24px;line-height:32px}@media (max-width: 575.98px){.modal-unidades__title.sc-unidades-modal{margin-bottom:24px}}.modal-unidades__opcoes.sc-unidades-modal{--border-radius:8px;cursor:pointer}.modal-unidades__opcoes.sc-unidades-modal:not(:last-child){margin-bottom:8px}.modal-footer.sc-unidades-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:24px}";

const UnidadesModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-unidades" }, index.h("ion-label", { class: "modal-unidades__title" }, "Selecione as unidades"), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")), index.h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, index.h("ion-label", null, "Cidade (ES)")))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
};
UnidadesModal.style = unidadesModalCss;

exports.unidades_modal = UnidadesModal;
