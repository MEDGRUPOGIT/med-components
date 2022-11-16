'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const denunciarModalCss = ".sc-denunciar-modal-h{display:block;border-radius:0}.modal-content.sc-denunciar-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.denunciar.sc-denunciar-modal{padding:16px}.denunciar__list.sc-denunciar-modal{margin-bottom:16px}.denunciar__text.sc-denunciar-modal{font-size:14px;display:block;margin-bottom:8px}.modal-footer.sc-denunciar-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}";

const DenunciarModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })), index.h("ion-label", { class: "header__title", slot: "title" }, "Denuciar d\u00FAvida"))), index.h("ion-content", { class: "modal-content" }, index.h("main", { class: "denunciar" }, index.h("div", { class: "denunciar__list" }, index.h("ion-item", { mode: "ios", lines: "none" }, index.h("ion-label", { "ds-color": "neutral-10" }, "Cr\u00EDtica sobre conte\u00FAdo"), index.h("ion-checkbox", { slot: "start", value: "value-1", mode: "md" })), index.h("ion-item", { mode: "ios", lines: "none" }, index.h("ion-label", { "ds-color": "neutral-10" }, "Obseva\u00E7\u00F5es sobre o App"), index.h("ion-checkbox", { slot: "start", value: "value-2", mode: "md" })), index.h("ion-item", { mode: "ios", lines: "none" }, index.h("ion-label", { "ds-color": "neutral-10" }, "Administrativo"), index.h("ion-checkbox", { slot: "start", value: "value-3", mode: "md" }))), index.h("div", { class: "denunciar__text-container" }, index.h("ion-label", { class: "denunciar__text", "ds-color": "neutral-8" }, "Descreva sua den\u00FAncia (opcional)"), index.h("ion-textarea", { class: "denunciar__campo", mode: "md", placeholder: "Digite aqui" })))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))));
  }
};
DenunciarModal.style = denunciarModalCss;

exports.denunciar_modal = DenunciarModal;
