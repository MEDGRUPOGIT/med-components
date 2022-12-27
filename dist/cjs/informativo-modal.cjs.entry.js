'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const informativoModalCss = ".sc-informativo-modal-h{display:block;border-radius:0}.header.sc-informativo-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-informativo-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-informativo-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__right.sc-informativo-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-informativo-modal{height:calc(100% - 176px)}@media (max-width: 575.98px){.modal-content.sc-informativo-modal{height:calc(100% - 168px)}}.modal-informativo.sc-informativo-modal{height:100%;padding:8px}.modal-informativo__slides.sc-informativo-modal{height:calc(100% - 20px)}.modal-informativo__slide.sc-informativo-modal{height:95%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.modal-informativo__image.sc-informativo-modal{margin-bottom:8px;max-height:calc(100% - 56px)}.modal-informativo__title.sc-informativo-modal{display:block;font-weight:600;font-size:16px;line-height:20px;text-align:center;padding-bottom:8px}.modal-informativo__text.sc-informativo-modal{display:block;font-weight:400;font-size:14px;line-height:20px;text-align:center}.modal-footer.sc-informativo-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:24px}";

const InformativoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" })))), index.h("div", { class: "header__right" }, index.h("div", null, index.h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial")))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-informativo" }, index.h("ion-slides", { class: "modal-informativo__slides", pager: true }, index.h("ion-slide", { class: "modal-informativo__slide" }, index.h("img", { class: "modal-informativo__image", src: "https://via.placeholder.com/500" }), index.h("ion-label", { class: "modal-informativo__title", "ds-color": "brand" }, "Marca\u00E7\u00F5es"), index.h("ion-label", { class: "modal-informativo__text", "ds-color": "neutral-10" }, "Para marcar ou interagir com sua apostila, selecione o texto e utilize o menu +")), index.h("ion-slide", { class: "modal-informativo__slide" }, index.h("img", { class: "modal-informativo__image", src: "https://via.placeholder.com/500" }), index.h("ion-label", { class: "modal-informativo__title", "ds-color": "brand" }, "Hist\u00F3rico de Marca\u00E7\u00F5es"), index.h("ion-label", { class: "modal-informativo__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O."))))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
};
InformativoModal.style = informativoModalCss;

exports.informativo_modal = InformativoModal;
