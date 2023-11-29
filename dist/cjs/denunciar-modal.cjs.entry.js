/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const denunciarModalCss = ".sc-denunciar-modal-h{display:block;border-radius:0}.header.sc-denunciar-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-denunciar-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-denunciar-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-denunciar-modal{height:calc(100% - 80px)}@media (max-width: 575.98px){.modal-content.sc-denunciar-modal{height:calc(100% - 72px)}}.modal-denunciar.sc-denunciar-modal{padding:40px 64px}@media (max-width: 575.98px){.modal-denunciar.sc-denunciar-modal{padding:24px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}}.modal-denunciar__title.sc-denunciar-modal{margin-bottom:40px;display:block;font-weight:600;font-size:24px;line-height:32px}@media (max-width: 575.98px){.modal-denunciar__title.sc-denunciar-modal{margin-bottom:24px}}.modal-denunciar__list.sc-denunciar-modal{margin-bottom:16px}.modal-denunciar__text.sc-denunciar-modal{font-size:14px;display:block;margin-bottom:8px}.modal-denunciar__button-container.sc-denunciar-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin-top:40px}@media (max-width: 575.98px){.modal-denunciar__button-container.sc-denunciar-modal{display:block;margin-top:auto;padding-top:40px}}@media (max-width: 575.98px){.modal-denunciar__button.sc-denunciar-modal{display:block}}";

const DenunciarModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-denunciar" }, index.h("ion-label", { class: "modal-denunciar__title" }, "Denunciar d\u00FAvida"), index.h("div", { class: "modal-denunciar__list" }, index.h("ion-item", { mode: "ios", lines: "none" }, index.h("ion-label", { "ds-color": "neutral-10" }, "Cr\u00EDtica sobre conte\u00FAdo"), index.h("ion-checkbox", { slot: "start", value: "value-1", mode: "md" })), index.h("ion-item", { mode: "ios", lines: "none" }, index.h("ion-label", { "ds-color": "neutral-10" }, "Obseva\u00E7\u00F5es sobre o App"), index.h("ion-checkbox", { slot: "start", value: "value-2", mode: "md" })), index.h("ion-item", { mode: "ios", lines: "none" }, index.h("ion-label", { "ds-color": "neutral-10" }, "Administrativo"), index.h("ion-checkbox", { slot: "start", value: "value-3", mode: "md" }))), index.h("div", { class: "modal-denunciar__text-container" }, index.h("ion-label", { class: "modal-denunciar__text", "ds-color": "neutral-8" }, "Descreva sua den\u00FAncia (opcional)"), index.h("ion-textarea", { class: "modal-denunciar__campo", mode: "md", placeholder: "Digite aqui" })), index.h("div", { class: "modal-denunciar__button-container" }, index.h("ion-button", { class: "modal-denunciar__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))))));
  }
};
DenunciarModal.style = denunciarModalCss;

exports.denunciar_modal = DenunciarModal;
