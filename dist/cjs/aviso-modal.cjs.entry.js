/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const avisoModalCss = ".sc-aviso-modal-h{display:block;border-radius:0}.header.sc-aviso-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-aviso-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-aviso-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-aviso-modal{height:calc(100% - 80px)}@media (max-width: 575.98px){.modal-content.sc-aviso-modal{height:calc(100% - 72px)}}.modal-aviso.sc-aviso-modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:40px 64px}@media (max-width: 575.98px){.modal-aviso.sc-aviso-modal{height:100%;padding:24px}}.modal-aviso__subheading.sc-aviso-modal{display:block;font-weight:600;font-size:16px;line-height:24px;text-align:center}.modal-aviso__title.sc-aviso-modal{display:block;font-weight:600;font-size:32px;line-height:40px;margin-bottom:48px;text-align:center}.modal-aviso__text.sc-aviso-modal{display:block;font-weight:600;font-size:20px;line-height:20px;text-align:center}.modal-aviso__text.sc-aviso-modal:not(:last-child){margin-bottom:8px}.modal-aviso__observacao.sc-aviso-modal{display:block;font-weight:400;font-size:14px;line-height:20px;margin-top:48px;text-align:center}.modal-aviso__button-container.sc-aviso-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-top:40px}@media (max-width: 575.98px){.modal-aviso__button-container.sc-aviso-modal{margin-top:auto}}@media (max-width: 575.98px){.modal-aviso__button.sc-aviso-modal{-ms-flex:1;flex:1}}";

const AvisoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-aviso" }, index.h("ion-label", { class: "modal-aviso__subheading", "ds-color": "neutral-10" }, "Confira mais esta novidade"), index.h("ion-label", { class: "modal-aviso__title", "ds-color": "neutral-10" }, "D\u00FAvidas Acad\u00EAmicas"), index.h("ion-label", { class: "modal-aviso__text", "ds-color": "neutral-10" }, "Poste suas d\u00FAvidas e confira as respostas de quem tamb\u00E9m estuda conosco."), index.h("ion-label", { class: "modal-aviso__text", "ds-color": "neutral-10" }, "Veja, neste tutorial, como postar e responder d\u00FAvidas."), index.h("ion-label", { class: "modal-aviso__observacao", "ds-color": "neutral-10" }, "Esta funcionalidade est\u00E1 dispon\u00EDvel para todos os materiais did\u00E1ticos do MEDSoft Pro e para todas as quest\u00F5es do nosso banco."), index.h("div", { class: "modal-aviso__button-container" }, index.h("ion-button", { class: "modal-aviso__button", mode: "ios", "ds-size": "sm" }, "ENTENDI E CONCORDO"))))));
  }
};
AvisoModal.style = avisoModalCss;

exports.aviso_modal = AvisoModal;
