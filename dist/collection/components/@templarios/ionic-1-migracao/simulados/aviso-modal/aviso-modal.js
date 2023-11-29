/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class AvisoModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-aviso" }, h("ion-label", { class: "modal-aviso__subheading", "ds-color": "neutral-10" }, "Confira mais esta novidade"), h("ion-label", { class: "modal-aviso__title", "ds-color": "neutral-10" }, "D\u00FAvidas Acad\u00EAmicas"), h("ion-label", { class: "modal-aviso__text", "ds-color": "neutral-10" }, "Poste suas d\u00FAvidas e confira as respostas de quem tamb\u00E9m estuda conosco."), h("ion-label", { class: "modal-aviso__text", "ds-color": "neutral-10" }, "Veja, neste tutorial, como postar e responder d\u00FAvidas."), h("ion-label", { class: "modal-aviso__observacao", "ds-color": "neutral-10" }, "Esta funcionalidade est\u00E1 dispon\u00EDvel para todos os materiais did\u00E1ticos do MEDSoft Pro e para todas as quest\u00F5es do nosso banco."), h("div", { class: "modal-aviso__button-container" }, h("ion-button", { class: "modal-aviso__button", mode: "ios", "ds-size": "sm" }, "ENTENDI E CONCORDO"))))));
  }
  static get is() { return "aviso-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["aviso-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["aviso-modal.css"]
    };
  }
}
