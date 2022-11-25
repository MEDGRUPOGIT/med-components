'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medreaderProModalCss = ".sc-medreader-pro-modal-h{display:block;border-radius:0}.modal-content.sc-medreader-pro-modal{height:calc(100% - 136px);padding:16px}.medreader.sc-medreader-pro-modal{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.medreader__top.sc-medreader-pro-modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.medreader__text.sc-medreader-pro-modal{font-size:18px;line-height:28px;font-weight:400}.medreader__text-destaque.sc-medreader-pro-modal{font-size:28px;line-height:28px;font-weight:600}.medreader__text-no-destaque.sc-medreader-pro-modal{font-size:14px;line-height:28px;margin-top:16px}.medreader__middle.sc-medreader-pro-modal{margin-top:24px;padding:16px}.medreader__item.sc-medreader-pro-modal:not(:last-child){margin-bottom:8px}.modal-footer.sc-medreader-pro-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px}";

const MedreaderProModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "medreader" }, index.h("div", { class: "medreader__top" }, index.h("ion-label", { class: "medreader__text" }, "Bem vindo ao"), index.h("ion-label", { class: "medreader__text-destaque" }, "MEDReader Pro"), index.h("ion-label", { class: "medreader__text" }, "A nova maneira de ler as suas apostilas."), index.h("ion-label", { class: "medreader__text-no-destaque" }, "Antes de come\u00E7armos, vamos ver algumas informa\u00E7\u00F5es importantes para seu estudo.")), index.h("div", { class: "medreader__middle" }, index.h("ion-item", { class: "medreader__item", "ds-color": "neutral-2", "spacing-v": "s12", mode: "ios", lines: "none" }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-proibido" }), index.h("ion-label", null, "O MEDReader Pro n\u00E3o compartilha suas marca\u00E7\u00F5es e anota\u00E7\u00F5es com o MEDREADER.")), index.h("ion-item", { class: "medreader__item", "ds-color": "neutral-2", "spacing-v": "s12", mode: "ios", lines: "none" }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-offline2" }), index.h("ion-label", null, "Anota\u00E7\u00F5es e Marca\u00E7\u00F5es feitas sem conex\u00E3o com a internet, n\u00E3o s\u00E3o salvas nos servidores do MEDGRUPO.")), index.h("ion-item", { class: "medreader__item", "ds-color": "neutral-2", "spacing-v": "s12", mode: "ios", lines: "none" }, index.h("ion-icon", { class: "med-icon", slot: "start", name: "med-online" }), index.h("ion-label", null, "Algumas funcionalidades da apostila somente s\u00E3o disponiveis quando seu dispositivo est\u00E1 conectado na internet e aos servidores do MEDGRUPO."))))), index.h("ion-footer", { class: "modal-footer" }, index.h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI E CONCORDO!"))));
  }
};
MedreaderProModal.style = medreaderProModalCss;

exports.medreader_pro_modal = MedreaderProModal;
