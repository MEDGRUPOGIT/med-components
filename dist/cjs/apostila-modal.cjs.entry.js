'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const apostilaModalCss = ".sc-apostila-modal-h{display:block;border-radius:0}.modal-content.sc-apostila-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-content__input.sc-apostila-modal{padding:16px}.modal-content__opcoes.sc-apostila-modal{cursor:pointer}.modal-content__opcoes.sc-apostila-modal:not(:last-child){border-bottom:1px solid hsl(var(--med-color-neutral-2))}.modal-footer.sc-apostila-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}";

const ApostilaModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })), index.h("ion-label", { class: "header__title", slot: "title" }, "Apostilas"))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-content__input" }, index.h("tp-input-container", { "has-icon": "start" }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-busca" }), index.h("ion-input", { mode: "md", placeholder: "Procurar o termo ou palavra-chave" }))), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CAR 01")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CAR 02")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CAR 03")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CIR 01")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CIR 02")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "CIR 03")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "GO 01")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "GO 02")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "GO 03")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PED 01")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PED 02")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "PED 03"))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
};
ApostilaModal.style = apostilaModalCss;

exports.apostila_modal = ApostilaModal;
