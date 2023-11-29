/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedAvatar {
  constructor() {
    this.dsColor = undefined;
    this.dsSize = undefined;
    this.image = undefined;
    this.letter = undefined;
  }
  render() {
    const { dsColor, dsSize, image, letter } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-avatar': true,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      }) }, letter && !image && h("span", { class: "med-avatar__letter" }, letter), image && h("img", { class: "med-avatar__image", src: image })));
  }
  static get is() { return "med-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-avatar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-avatar.css"]
    };
  }
  static get properties() {
    return {
      "dsColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MedColor",
          "resolved": "string | undefined",
          "references": {
            "MedColor": {
              "location": "import",
              "path": "../../../../@templarios/types/color.type"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-color",
        "reflect": true
      },
      "dsSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl'",
          "resolved": "\"base\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-size",
        "reflect": false
      },
      "image": {
        "type": "string",
        "mutable": false,
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
        "attribute": "image",
        "reflect": false
      },
      "letter": {
        "type": "string",
        "mutable": false,
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
        "attribute": "letter",
        "reflect": false
      }
    };
  }
}
