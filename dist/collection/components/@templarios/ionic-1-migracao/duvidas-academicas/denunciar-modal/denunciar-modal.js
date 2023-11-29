/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class DenunciarModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-denunciar" }, h("ion-label", { class: "modal-denunciar__title" }, "Denunciar d\u00FAvida"), h("div", { class: "modal-denunciar__list" }, h("ion-item", { mode: "ios", lines: "none" }, h("ion-label", { "ds-color": "neutral-10" }, "Cr\u00EDtica sobre conte\u00FAdo"), h("ion-checkbox", { slot: "start", value: "value-1", mode: "md" })), h("ion-item", { mode: "ios", lines: "none" }, h("ion-label", { "ds-color": "neutral-10" }, "Obseva\u00E7\u00F5es sobre o App"), h("ion-checkbox", { slot: "start", value: "value-2", mode: "md" })), h("ion-item", { mode: "ios", lines: "none" }, h("ion-label", { "ds-color": "neutral-10" }, "Administrativo"), h("ion-checkbox", { slot: "start", value: "value-3", mode: "md" }))), h("div", { class: "modal-denunciar__text-container" }, h("ion-label", { class: "modal-denunciar__text", "ds-color": "neutral-8" }, "Descreva sua den\u00FAncia (opcional)"), h("ion-textarea", { class: "modal-denunciar__campo", mode: "md", placeholder: "Digite aqui" })), h("div", { class: "modal-denunciar__button-container" }, h("ion-button", { class: "modal-denunciar__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))))));
  }
  static get is() { return "denunciar-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["denunciar-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["denunciar-modal.css"]
    };
  }
}
