/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { RateStatus } from '../../../../@templarios/enums/rate-like.enum';
export class MedRateLike {
  constructor() {
    this.onClick = (status) => {
      if (this.status) {
        return;
      }
      this.status = status;
      this.medChange.emit(this.status);
    };
    this.status = undefined;
  }
  render() {
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-rate-like': true,
      }) }, h("button", { class: `button button-spacing
          ${this.status === RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(RateStatus.LIKE) }, h("ion-icon", { name: "med-positivo", class: "med-icon rate" })), h("button", { class: `button
          ${this.status === RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(RateStatus.DISLIKE) }, h("ion-icon", { name: "med-negativo", class: "med-icon rate" }))));
  }
  static get is() { return "med-rate-like"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-rate-like.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-rate-like.css"]
    };
  }
  static get properties() {
    return {
      "status": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "RateStatus",
          "resolved": "RateStatus.DISLIKE | RateStatus.LIKE | undefined",
          "references": {
            "RateStatus": {
              "location": "import",
              "path": "../../../../@templarios/enums/rate-like.enum"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "status",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "medChange",
        "name": "medChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "RateStatus",
          "resolved": "RateStatus.DISLIKE | RateStatus.LIKE",
          "references": {
            "RateStatus": {
              "location": "import",
              "path": "../../../../@templarios/enums/rate-like.enum"
            }
          }
        }
      }];
  }
}
