import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { m as modalController } from './overlays-e8ede0be.js';
import { s as sanitizeDOMString } from './index-9e3fe806.js';
import './ionic-global-4bc7e399.js';
import './hardware-back-button-4a6b37fb.js';
import './helpers-dd7e4b7b.js';

const medAlertCss = ".sc-med-alert-h{display:block}";

const MedAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  dismiss(role) {
    modalController.dismiss(null, role);
  }
  render() {
    const { heading, message, cancelText, confirmText } = this;
    return (h(Host, null, h("ion-header", { class: "tp-dialog-header" }, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs", onClick: () => this.dismiss('close') }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), h("div", { class: "tp-dialog-container" }, h("med-type", { class: "tp-dialog-heading", token: "h20x", innerHTML: sanitizeDOMString(heading) }), h("med-type", { "ds-color": "neutral-8", token: "h14x", innerHTML: sanitizeDOMString(message) }), h("div", { class: "tp-dialog-footer" }, cancelText && h("ion-button", { mode: "ios", fill: "outline", onClick: () => this.dismiss('cancel') }, cancelText), confirmText && h("ion-button", { mode: "ios", onClick: () => this.dismiss('confirm') }, confirmText)))));
  }
};
MedAlert.style = medAlertCss;

export { MedAlert as med_alert };