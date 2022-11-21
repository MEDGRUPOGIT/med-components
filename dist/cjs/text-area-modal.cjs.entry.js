'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const textAreaModalCss = ".sc-text-area-modal-h{display:block;border-radius:0}.modal-content.sc-text-area-modal{border-top:1px solid hsl(var(--med-color-neutral-4))}.text-area.sc-text-area-modal{height:calc(100% - 56px);padding:16px}.text-area.sc-text-area-modal ion-textarea.sc-text-area-modal{--height:100%}.text-area__campo.sc-text-area-modal{height:100%}";

const TextAreaModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-back-button", { slot: "left", mode: "ios", text: "", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" })), index.h("ion-label", { class: "header__title", slot: "title" }, "Depositar d\u00FAvida"), index.h("ion-button", { slot: "right", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-enviar" })))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "text-area" }, index.h("ion-textarea", { class: "text-area__campo", mode: "md", placeholder: "Escreva a sua d\u00FAvida" })))));
  }
};
TextAreaModal.style = textAreaModalCss;

exports.text_area_modal = TextAreaModal;
