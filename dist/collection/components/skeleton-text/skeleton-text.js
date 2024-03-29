/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { hostContext } from '../../utils/theme';
export class SkeletonText {
  constructor() {
    this.animated = false;
  }
  render() {
    const animated = this.animated && config.getBoolean('animated', true);
    const inMedia = hostContext('ion-avatar', this.el) || hostContext('ion-thumbnail', this.el);
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'skeleton-text-animated': animated,
        'in-media': inMedia
      } }, h("span", null, "\u00A0")));
  }
  static get is() { return "ion-skeleton-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["skeleton-text.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["skeleton-text.css"]
    };
  }
  static get properties() {
    return {
      "animated": {
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
          "text": "If `true`, the skeleton text will animate."
        },
        "attribute": "animated",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
