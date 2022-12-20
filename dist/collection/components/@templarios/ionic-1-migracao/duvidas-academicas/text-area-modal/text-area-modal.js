import { Component, h, Host } from '@stencil/core';
export class TextAreaModal {
  render() {
    return (h(Host, null,
      h("ion-header", { class: "header" },
        h("div", { class: "header__left" },
          h("div", null,
            h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" },
              h("ion-icon", { class: "med-icon", name: "med-fechar" }))))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "text-area" },
          h("ion-label", { class: "text-area__title" }, "Depositar d\u00FAvida"),
          h("ion-textarea", { class: "text-area__campo", mode: "md", placeholder: "Escreva a sua d\u00FAvida" }),
          h("div", { class: "text-area__button-container" },
            h("ion-button", { class: "text-area__button", mode: "ios", "ds-size": "sm" }, "Depositar"))))));
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
