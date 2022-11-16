'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const simuladoModalCss = ".sc-simulado-modal-h{display:block;border-radius:0}.modal-content.sc-simulado-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-content__input.sc-simulado-modal{padding:16px}.modal-content__opcoes.sc-simulado-modal{cursor:pointer}.modal-content__opcoes.sc-simulado-modal:not(:last-child){border-bottom:1px solid hsl(var(--med-color-neutral-2))}.modal-footer.sc-simulado-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}";

const SimuladoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })), index.h("ion-label", { class: "header__title", slot: "title" }, "Simulados"))), index.h("ion-content", { class: "modal-content" }, index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 01")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 02")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 03")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 04")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 05")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 06")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - Geral 07")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), index.h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" }, index.h("ion-label", null, "2021 R1 SIM 01 - UNIFESP"))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
};
SimuladoModal.style = simuladoModalCss;

exports.simulado_modal = SimuladoModal;
