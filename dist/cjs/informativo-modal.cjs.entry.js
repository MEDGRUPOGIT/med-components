'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const informativoModalCss = ".sc-informativo-modal-h{display:block;border-radius:0}.informativo.sc-informativo-modal{height:calc(100% - 120px);padding:8px}.informativo__slides.sc-informativo-modal{height:calc(100% - 20px)}.informativo__slide.sc-informativo-modal{height:95%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.informativo__image.sc-informativo-modal{margin-bottom:8px;max-height:calc(100% - 56px)}.informativo__title.sc-informativo-modal{display:block;font-weight:600;font-size:16px;line-height:20px;text-align:center;padding-bottom:8px}.informativo__text.sc-informativo-modal{display:block;font-weight:400;font-size:14px;line-height:20px;text-align:center}.modal-footer.sc-informativo-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:8px}";

const InformativoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("med-header", null, index.h("med-navbar", { class: "header", slot: "navbar" }, index.h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial"))), index.h("div", { class: "informativo" }, index.h("ion-slides", { class: "informativo__slides", pager: true }, index.h("ion-slide", { class: "informativo__slide" }, index.h("img", { class: "informativo__image", src: "https://via.placeholder.com/500" }), index.h("ion-label", { class: "informativo__title", "ds-color": "brand" }, "Marca\u00E7\u00F5es"), index.h("ion-label", { class: "informativo__text", "ds-color": "neutral-10" }, "Para marcar ou interagir com sua apostila, selecione o texto e utilize o menu +")), index.h("ion-slide", { class: "informativo__slide" }, index.h("img", { class: "informativo__image", src: "https://via.placeholder.com/500" }), index.h("ion-label", { class: "informativo__title", "ds-color": "brand" }, "Hist\u00F3rico de Marca\u00E7\u00F5es"), index.h("ion-label", { class: "informativo__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O.")))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
};
InformativoModal.style = informativoModalCss;

exports.informativo_modal = InformativoModal;
