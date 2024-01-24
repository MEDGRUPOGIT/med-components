/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { m as modalController } from './overlays-6a50a571.js';
import { s as sanitizeDOMString } from './index-45fd73fa.js';
import './ionic-global-790ea271.js';
import './hardware-back-button-e98bcc7d.js';
import './helpers-7c8ceac4.js';

const medAlertCss = ".sc-med-alert-h{display:block}";

const MedAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.heading = undefined;
    this.message = undefined;
    this.cancelText = undefined;
    this.confirmText = undefined;
    this.disableSanitize = false;
  }
  dismiss(role) {
    modalController.dismiss(null, role);
  }
  render() {
    const { heading, message, cancelText, confirmText, disableSanitize } = this;
    return (h(Host, null, h("ion-header", { class: "tp-dialog-header" }, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs", onClick: () => this.dismiss('close') }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), h("div", { class: "tp-dialog-container" }, h("med-type", { class: "tp-dialog-heading", token: "h20x", innerHTML: !disableSanitize ? sanitizeDOMString(heading) : heading }), h("med-type", { "ds-color": "neutral-8", token: "h14x", innerHTML: !disableSanitize ? sanitizeDOMString(message) : message }), h("div", { class: "tp-dialog-footer" }, cancelText && h("ion-button", { mode: "ios", fill: "outline", onClick: () => this.dismiss('cancel') }, cancelText), confirmText && h("ion-button", { mode: "ios", onClick: () => this.dismiss('confirm') }, confirmText)))));
  }
};
MedAlert.style = medAlertCss;

export { MedAlert as med_alert };
