import { Component, Host, h, Event, Prop } from '@stencil/core';
import { RateStatus } from './med-rate-like.enum';
export class MedRateLike {
  constructor() {
    this.onClick = (status) => {
      if (this.status) {
        return;
      }
      this.status = status;
      this.medChange.emit(this.status);
    };
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("button", { class: `button
          ${this.status === RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(RateStatus.LIKE) },
        h("ion-icon", { name: "med-like", class: "rate" })),
      h("button", { class: `button
          ${this.status === RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(RateStatus.DISLIKE) },
        h("ion-icon", { name: "med-dislike", class: "rate" }))));
  }
  static get is() { return "med-rate-like"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-rate-like.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rate-like.css"]
  }; }
  static get properties() { return {
    "status": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "RateStatus",
        "resolved": "RateStatus.DISLIKE | RateStatus.LIKE | undefined",
        "references": {
          "RateStatus": {
            "location": "import",
            "path": "./med-rate-like.enum"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "status",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "medChange",
      "name": "medChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "RateStatus",
        "resolved": "RateStatus.DISLIKE | RateStatus.LIKE",
        "references": {
          "RateStatus": {
            "location": "import",
            "path": "./med-rate-like.enum"
          }
        }
      }
    }]; }
}
