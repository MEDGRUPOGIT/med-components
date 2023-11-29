/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class SimuladoModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-simulados" }, h("ion-label", { class: "modal-simulados__title" }, "Simulados"), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 01")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 02")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 03")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 04")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 05")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 06")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - Geral 07")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")), h("ion-item", { class: "modal-simulados__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" }, h("ion-label", null, "2021 R1 SIM 01 - UNIFESP")))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "APLICAR"))));
  }
  static get is() { return "simulado-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["simulado-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["simulado-modal.css"]
    };
  }
}
