import { Component, Host, h, Prop } from '@stencil/core';
import { modalController } from "../../../../utils/overlays";
import { sanitizeDOMString } from '../../../../utils/sanitization';
export class MedAlert {
  dismiss(role) {
    modalController.dismiss(null, role);
  }
  render() {
    const { heading, message, cancelText, confirmText } = this;
    return (h(Host, null,
      h("ion-header", { class: "tp-dialog-header" },
        h("ion-button", { "ds-name": "tertiary", "ds-size": "xxs", onClick: () => this.dismiss('cancel') },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))),
      h("div", { class: "tp-dialog-container" },
        h("med-type", { class: "tp-dialog-heading", token: "h20x", innerHTML: sanitizeDOMString(heading) }),
        h("med-type", { "ds-color": "neutral-8", token: "h14x", innerHTML: sanitizeDOMString(message) }),
        h("div", { class: "tp-dialog-footer" },
          cancelText && h("ion-button", { "ds-name": "secondary", onClick: () => this.dismiss('cancel') }, cancelText),
          confirmText && h("ion-button", { onClick: () => this.dismiss('confirm') }, confirmText)))));
  }
  static get is() { return "med-alert"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-alert.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-alert.css"]
  }; }
  static get properties() { return {
    "heading": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "heading",
      "reflect": true
    },
    "message": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "message",
      "reflect": true
    },
    "cancelText": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cancel-text",
      "reflect": true
    },
    "confirmText": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "confirm-text",
      "reflect": true
    }
  }; }
}
