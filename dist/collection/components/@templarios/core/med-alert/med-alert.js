/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { modalController } from "../../../../utils/overlays";
import { sanitizeDOMString } from '../../../../utils/sanitization';
export class MedAlert {
  constructor() {
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
  static get is() { return "med-alert"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-alert.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
        },
        "attribute": "confirm-text",
        "reflect": true
      },
      "disableSanitize": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "disable-sanitize",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
