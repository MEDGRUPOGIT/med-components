/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class InformativoModal {
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" })))), h("div", { class: "header__right" }, h("div", null, h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial")))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-informativo" }, h("ion-slides", { class: "modal-informativo__slides", pager: true }, h("ion-slide", { class: "modal-informativo__slide" }, h("img", { class: "modal-informativo__image", src: "https://via.placeholder.com/500" }), h("ion-label", { class: "modal-informativo__title", "ds-color": "brand" }, "Marca\u00E7\u00F5es"), h("ion-label", { class: "modal-informativo__text", "ds-color": "neutral-10" }, "Para marcar ou interagir com sua apostila, selecione o texto e utilize o menu +")), h("ion-slide", { class: "modal-informativo__slide" }, h("img", { class: "modal-informativo__image", src: "https://via.placeholder.com/500" }), h("ion-label", { class: "modal-informativo__title", "ds-color": "brand" }, "Hist\u00F3rico de Marca\u00E7\u00F5es"), h("ion-label", { class: "modal-informativo__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O."))))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
  static get is() { return "informativo-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["informativo-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["informativo-modal.css"]
    };
  }
}
