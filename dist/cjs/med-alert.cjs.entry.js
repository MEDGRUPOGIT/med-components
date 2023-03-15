'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const overlays = require('./overlays-738b020e.js');
const index$1 = require('./index-099f2bcb.js');
require('./ionic-global-c609be80.js');
require('./hardware-back-button-e370df1e.js');
require('./helpers-ab0db03b.js');

const medAlertCss = ".sc-med-alert-h{display:block}";

const MedAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * todo
     */
    this.disableSanitize = false;
  }
  dismiss(role) {
    overlays.modalController.dismiss(null, role);
  }
  render() {
    const { heading, message, cancelText, confirmText, disableSanitize } = this;
    return (index.h(index.Host, null, index.h("ion-header", { class: "tp-dialog-header" }, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs", onClick: () => this.dismiss('close') }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("div", { class: "tp-dialog-container" }, index.h("med-type", { class: "tp-dialog-heading", token: "h20x", innerHTML: !disableSanitize ? index$1.sanitizeDOMString(heading) : heading }), index.h("med-type", { "ds-color": "neutral-8", token: "h14x", innerHTML: !disableSanitize ? index$1.sanitizeDOMString(message) : message }), index.h("div", { class: "tp-dialog-footer" }, cancelText && index.h("ion-button", { mode: "ios", fill: "outline", onClick: () => this.dismiss('cancel') }, cancelText), confirmText && index.h("ion-button", { mode: "ios", onClick: () => this.dismiss('confirm') }, confirmText)))));
  }
};
MedAlert.style = medAlertCss;

exports.med_alert = MedAlert;
