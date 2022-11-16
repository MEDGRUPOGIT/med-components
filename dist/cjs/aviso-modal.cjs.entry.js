'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const avisoModalCss = ".sc-aviso-modal-h{display:block;border-radius:0}.modal-content.sc-aviso-modal{height:calc(100% - 80px)}.aviso.sc-aviso-modal{height:100%;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.aviso__subheading.sc-aviso-modal{display:block;font-weight:600;font-size:16px;line-height:24px;text-align:center}.aviso__title.sc-aviso-modal{display:block;font-weight:600;font-size:32px;line-height:40px;margin-bottom:48px;text-align:center}.aviso__text.sc-aviso-modal{display:block;font-weight:600;font-size:20px;line-height:20px;text-align:center}.aviso__text.sc-aviso-modal:not(:last-child){margin-bottom:8px}.aviso__observacao.sc-aviso-modal{display:block;font-weight:400;font-size:14px;line-height:20px;margin-top:48px;text-align:center}.modal-footer.sc-aviso-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px}@media only screen and (max-height: 500px){.aviso.sc-aviso-modal{height:auto;overflow:auto}}";

const AvisoModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "aviso" }, index.h("ion-label", { class: "aviso__subheading", "ds-color": "neutral-10" }, "Confira mais esta novidade"), index.h("ion-label", { class: "aviso__title", "ds-color": "neutral-10" }, "D\u00FAvidas Acad\u00EAmicas"), index.h("ion-label", { class: "aviso__text", "ds-color": "neutral-10" }, "Poste suas d\u00FAvidas e confira as respostas de quem tamb\u00E9m estuda conosco."), index.h("ion-label", { class: "aviso__text", "ds-color": "neutral-10" }, "Veja, neste tutorial, como postar e responder d\u00FAvidas."), index.h("ion-label", { class: "aviso__observacao", "ds-color": "neutral-10" }, "Esta funcionalidade est\u00E1 dispon\u00EDvel para todos os materiais did\u00E1ticos do MEDSoft Pro e para todas as quest\u00F5es do nosso banco."))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI E CONCORDO"))));
  }
};
AvisoModal.style = avisoModalCss;

exports.aviso_modal = AvisoModal;
