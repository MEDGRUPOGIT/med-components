'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const overlays = require('./overlays-e22059c3.js');
const index$1 = require('./index-e1bb33c3.js');
require('./ionic-global-50e8bb29.js');
require('./hardware-back-button-148ce546.js');
require('./helpers-d381ec4d.js');

const medAlertCss = ".sc-med-alert-h{display:block}";

const MedAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  dismiss(role) {
    overlays.modalController.dismiss(null, role);
  }
  render() {
    const { heading, message, cancelText, confirmText } = this;
    return (index.h(index.Host, null, index.h("ion-header", { class: "tp-dialog-header" }, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs", onClick: () => this.dismiss('close') }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("div", { class: "tp-dialog-container" }, index.h("med-type", { class: "tp-dialog-heading", token: "h20x", innerHTML: index$1.sanitizeDOMString(heading) }), index.h("med-type", { "ds-color": "neutral-8", token: "h14x", innerHTML: index$1.sanitizeDOMString(message) }), index.h("div", { class: "tp-dialog-footer" }, cancelText && index.h("ion-button", { mode: "ios", fill: "outline", onClick: () => this.dismiss('cancel') }, cancelText), confirmText && index.h("ion-button", { mode: "ios", onClick: () => this.dismiss('confirm') }, confirmText)))));
  }
};
MedAlert.style = medAlertCss;

exports.med_alert = MedAlert;
