import { Component, h, Host } from '@stencil/core';
export class MedreaderProModal {
  render() {
    return (h(Host, null,
      h("ion-content", { class: "modal-content" },
        h("div", { class: "medreader" },
          h("div", { class: "medreader__top" },
            h("ion-label", { class: "medreader__text" }, "Bem vindo ao"),
            h("ion-label", { class: "medreader__text-destaque" }, "MEDReader Pro"),
            h("ion-label", { class: "medreader__text" }, "A nova maneira de ler as suas apostilas."),
            h("ion-label", { class: "medreader__text-no-destaque" }, "Antes de come\u00E7armos, vamos ver algumas informa\u00E7\u00F5es importantes para seu estudo.")),
          h("div", { class: "medreader__middle" },
            h("ion-item", { class: "medreader__item", "ds-color": "neutral-2", "spacing-v": "s12", mode: "ios", lines: "none" },
              h("ion-icon", { class: "med-icon", slot: "start", name: "med-proibido" }),
              h("ion-label", null, "O MEDReader Pro n\u00E3o compartilha suas marca\u00E7\u00F5es e anota\u00E7\u00F5es com o MEDREADER.")),
            h("ion-item", { class: "medreader__item", "ds-color": "neutral-2", "spacing-v": "s12", mode: "ios", lines: "none" },
              h("ion-icon", { class: "med-icon", slot: "start", name: "med-offline2" }),
              h("ion-label", null, "Anota\u00E7\u00F5es e Marca\u00E7\u00F5es feitas sem conex\u00E3o com a internet, n\u00E3o s\u00E3o salvas nos servidores do MEDGRUPO.")),
            h("ion-item", { class: "medreader__item", "ds-color": "neutral-2", "spacing-v": "s12", mode: "ios", lines: "none" },
              h("ion-icon", { class: "med-icon", slot: "start", name: "med-online" }),
              h("ion-label", null, "Algumas funcionalidades da apostila somente s\u00E3o disponiveis quando seu dispositivo est\u00E1 conectado na internet e aos servidores do MEDGRUPO."))))),
      h("ion-footer", { class: "modal-footer" },
        h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI E CONCORDO!"))));
  }
  static get is() { return "medreader-pro-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["medreader-pro-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["medreader-pro-modal.css"]
  }; }
}
