import { Component, h, Host } from '@stencil/core';
export class TextAreaModal {
  render() {
    return (h(Host, null,
      h("med-header", null,
        h("med-navbar", { class: "header", slot: "navbar" },
          h("ion-back-button", { slot: "left", mode: "ios", text: "", "ds-size": "xxs" },
            h("ion-icon", { class: "med-icon", name: "med-fechar" })),
          h("ion-label", { class: "header__title", slot: "title" }, "Depositar d\u00FAvida"),
          h("ion-button", { slot: "right", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xs" },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-enviar" })))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "text-area" },
          h("ion-textarea", { class: "text-area__campo", mode: "md", placeholder: "Escreva a sua d\u00FAvida" })))));
  }
  static get is() { return "text-area-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["text-area-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["text-area-modal.css"]
  }; }
}
