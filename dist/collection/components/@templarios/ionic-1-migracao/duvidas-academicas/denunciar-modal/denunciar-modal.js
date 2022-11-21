import { Component, h, Host } from '@stencil/core';
export class DenunciarModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-button", { slot: "left", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xxs" },
            h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })),
          h("ion-label", { class: "header__title", slot: "title" }, "Denuciar d\u00FAvida"))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "denunciar" },
          h("div", { class: "denunciar__list" },
            h("ion-item", { mode: "ios", lines: "none" },
              h("ion-label", { "ds-color": "neutral-10" }, "Cr\u00EDtica sobre conte\u00FAdo"),
              h("ion-checkbox", { slot: "start", value: "value-1", mode: "md" })),
            h("ion-item", { mode: "ios", lines: "none" },
              h("ion-label", { "ds-color": "neutral-10" }, "Obseva\u00E7\u00F5es sobre o App"),
              h("ion-checkbox", { slot: "start", value: "value-2", mode: "md" })),
            h("ion-item", { mode: "ios", lines: "none" },
              h("ion-label", { "ds-color": "neutral-10" }, "Administrativo"),
              h("ion-checkbox", { slot: "start", value: "value-3", mode: "md" }))),
          h("div", { class: "denunciar__text-container" },
            h("ion-label", { class: "denunciar__text", "ds-color": "neutral-8" }, "Descreva sua den\u00FAncia (opcional)"),
            h("ion-textarea", { class: "denunciar__campo", mode: "md", placeholder: "Digite aqui" })))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))));
  }
  static get is() { return "denunciar-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["denunciar-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["denunciar-modal.css"]
  }; }
}
