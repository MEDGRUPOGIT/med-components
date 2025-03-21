/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const overlays = require('./overlays-20fa7e5b.js');
const index$1 = require('./index-bdb474dc.js');
require('./ionic-global-b146ab44.js');
require('./platform-df0a78a3.js');
require('./hardware-back-button-bef7bb33.js');
require('./helpers-a2cc981d.js');

const medAlertCss = ".sc-med-alert-h{display:block}";

const MedAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.heading = undefined;
    this.message = undefined;
    this.cancelText = undefined;
    this.confirmText = undefined;
    this.disableSanitize = false;
    this.canClose = true;
  }
  dismiss(role) {
    overlays.modalController.dismiss(null, role);
  }
  render() {
    const { heading, message, cancelText, confirmText, disableSanitize, canClose } = this;
    return (index.h(index.Host, null, canClose && index.h("ion-header", { class: "tp-dialog-header" }, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs", onClick: () => this.dismiss('close') }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("div", { class: "tp-dialog-container" }, index.h("med-type", { class: "tp-dialog-heading", token: "h20x", innerHTML: !disableSanitize ? index$1.sanitizeDOMString(heading) : heading }), index.h("med-type", { "ds-color": "neutral-8", token: "h14x", innerHTML: !disableSanitize ? index$1.sanitizeDOMString(message) : message }), index.h("div", { class: "tp-dialog-footer" }, cancelText && index.h("ion-button", { mode: "ios", fill: "outline", onClick: () => this.dismiss('cancel') }, cancelText), confirmText && index.h("ion-button", { mode: "ios", onClick: () => this.dismiss('confirm') }, confirmText)))));
  }
};
MedAlert.style = medAlertCss;

exports.med_alert = MedAlert;
