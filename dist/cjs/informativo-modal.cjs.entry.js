'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const informativoModalCss = ".sc-informativo-modal-h{display:block;border-radius:0}.modal-content.sc-informativo-modal{height:calc(100% - 136px);padding:16px}.modal-footer.sc-informativo-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px}";

const InformativoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial"))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "tutorial" }, index.h("ion-slides", { class: "tutorial", pager: true }, index.h("ion-slide", { class: "tutorial__slide" }, index.h("img", { class: "tutorial__image", src: "https://via.placeholder.com/500" }), index.h("ion-label", { class: "tutorial__text", "ds-color": "neutral-10" }, "Como e onde postar sua d\u00FAvida em uma QUEST\u00C3O.")), index.h("ion-slide", { class: "tutorial__slide" }, index.h("img", { class: "tutorial__image", src: "https://via.placeholder.com/500" }), index.h("ion-label", { class: "tutorial__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O."))))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
};
InformativoModal.style = informativoModalCss;

exports.informativo_modal = InformativoModal;
