import { Component, h, Host } from '@stencil/core';
export class TutorialModal {
  render() {
    return (h(Host, null,
      h("ion-header", { class: "header" },
        h("div", { class: "header__left" },
          h("div", null,
            h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" },
              h("ion-icon", { class: "med-icon", name: "med-fechar" })))),
        h("div", { class: "header__right" },
          h("div", null,
            h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial")))),
      h("ion-content", { class: "modal-content" },
        h("div", { class: "modal-tutorial" },
          h("ion-slides", { class: "modal-tutorial__slides", pager: true },
            h("ion-slide", { class: "modal-tutorial__slide" },
              h("img", { class: "modal-tutorial__image", src: "https://via.placeholder.com/500" }),
              h("ion-label", { class: "modal-tutorial__text", "ds-color": "neutral-10" }, "Como e onde postar sua d\u00FAvida em uma QUEST\u00C3O.")),
            h("ion-slide", { class: "modal-tutorial__slide" },
              h("img", { class: "modal-tutorial__image", src: "https://via.placeholder.com/500" }),
              h("ion-label", { class: "modal-tutorial__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O."))))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
  static get is() { return "tutorial-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["tutorial-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tutorial-modal.css"]
  }; }
}
