import { Component, h, Host } from '@stencil/core';
export class UnidadesModal {
  render() {
    return (h(Host, null,
      h("ion-header", { class: "header" },
        h("div", { class: "header__left" },
          h("div", null,
            h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" },
              h("ion-icon", { class: "med-icon", name: "med-fechar" }))))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "modal-unidades" },
          h("ion-label", { class: "modal-unidades__title" }, "Selecione as unidades"),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")),
          h("ion-item", { class: "modal-unidades__opcoes", mode: "ios", lines: "none", "ds-color": "neutral-15" },
            h("ion-label", null, "Cidade (ES)")))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "FECHAR"))));
  }
  static get is() { return "unidades-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["unidades-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["unidades-modal.css"]
  }; }
}
