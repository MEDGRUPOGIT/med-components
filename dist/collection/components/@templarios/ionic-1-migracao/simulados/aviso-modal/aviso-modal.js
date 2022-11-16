import { Component, h, Host } from '@stencil/core';
export class AvisoModal {
  render() {
    return (h(Host, null,
      h("ion-content", { class: "modal-content" },
        h("div", { class: "aviso" },
          h("ion-label", { class: "aviso__subheading", "ds-color": "neutral-10" }, "Confira mais esta novidade"),
          h("ion-label", { class: "aviso__title", "ds-color": "neutral-10" }, "D\u00FAvidas Acad\u00EAmicas"),
          h("ion-label", { class: "aviso__text", "ds-color": "neutral-10" }, "Poste suas d\u00FAvidas e confira as respostas de quem tamb\u00E9m estuda conosco."),
          h("ion-label", { class: "aviso__text", "ds-color": "neutral-10" }, "Veja, neste tutorial, como postar e responder d\u00FAvidas."),
          h("ion-label", { class: "aviso__observacao", "ds-color": "neutral-10" }, "Esta funcionalidade est\u00E1 dispon\u00EDvel para todos os materiais did\u00E1ticos do MEDSoft Pro e para todas as quest\u00F5es do nosso banco."))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI E CONCORDO"))));
  }
  static get is() { return "aviso-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["aviso-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["aviso-modal.css"]
  }; }
}
