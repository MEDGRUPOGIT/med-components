import { Component, h, Host } from '@stencil/core';
export class SimuladoModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" },
            h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })),
          h("ion-label", { class: "header__title", slot: "title" }, "Simulados"))),
      h("ion-content", { class: "modal-content" },
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 01")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 02")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 03")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 04")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 05")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 06")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - Geral 07")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")),
        h("ion-item", { class: "modal-content__opcoes", mode: "ios", lines: "none" },
          h("ion-label", null, "2021 R1 SIM 01 - UNIFESP"))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
  static get is() { return "simulado-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["simulado-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["simulado-modal.css"]
  }; }
}
