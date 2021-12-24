import { Component, Element, Host, h } from '@stencil/core';
export class FiltroModal {
  async closeModal() {
    await this.el.closest('ion-modal').dismiss();
  }
  render() {
    return (h(Host, { class: "dashboard-filtro-modal" },
      h("ion-content", { class: "dashboard-filtro-modal__content" },
        h("div", { class: "dashboard-filtro-modal__fechar" },
          h("ion-button", { "ds-name": "tertiary", "ds-size": "base", slot: "right", onClick: () => this.closeModal() },
            h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" }))),
        h("div", { class: "dashboard-filtro-modal__middle" },
          h("med-type", { token: "h20", class: "dashboard-filtro-modal__title" }, "Base de alunos considerados"),
          h("div", { class: "dashboard-filtro-modal__seletor-quantidade" },
            h("ion-button", { "ds-name": "tertiary", "ds-size": "md" },
              h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-menos-circulo" })),
            h("div", { class: "dashboard-filtro-modal__quantidade" },
              h("med-type", { token: "h20" }, "TOP 5"),
              h("med-type", { token: "p12", class: "dashboard-filtro-modal__label" }, "Alunos")),
            h("ion-button", { "ds-name": "tertiary", "ds-size": "md" },
              h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-mais-circulo" })))),
        h("div", { class: "dashboard-filtro-modal__concursos" },
          h("med-type", { token: "h20", class: "dashboard-filtro-modal__concursos-title" }, "TOP 5"),
          h("div", { class: "dashboard-filtro-modal__concurso" },
            h("ion-radio-group", { value: "", class: "dashboard-filtro-modal__concurso-radio" },
              h("ion-radio", { slot: "start", value: "teste" })),
            h("med-type", { token: "p16", class: "dashboard-filtro-modal__concurso-label" }, "UFRJ")),
          h("div", { class: "dashboard-filtro-modal__concurso" },
            h("ion-radio-group", { value: "", class: "dashboard-filtro-modal__concurso-radio" },
              h("ion-radio", { slot: "start", value: "teste" })),
            h("med-type", { token: "p16", class: "dashboard-filtro-modal__concurso-label" }, "UFRJ")),
          h("div", { class: "dashboard-filtro-modal__concurso" },
            h("ion-radio-group", { value: "", class: "dashboard-filtro-modal__concurso-radio" },
              h("ion-radio", { slot: "start", value: "teste" })),
            h("med-type", { token: "p16", class: "dashboard-filtro-modal__concurso-label" }, "UFRJ")))),
      h("ion-footer", { class: "dashboard-filtro-modal__footer" },
        h("ion-button", { "ds-name": "primary", class: "dashboard-filtro-modal__limpar-btn", "ds-size": "sm" }, "Limpar"),
        h("ion-button", { "ds-name": "primary", "ds-size": "sm" }, "Filtrar"))));
  }
  static get is() { return "filtro-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["filtro-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filtro-modal.css"]
  }; }
  static get elementRef() { return "el"; }
}
