/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
export class Grid {
  constructor() {
    this.fixed = false;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'grid-fixed': this.fixed
      } }, h("slot", null)));
  }
  static get is() { return "ion-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./med/med-grid.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["./med/med-grid.css"]
    };
  }
  static get properties() {
    return {
      "fixed": {
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
          "text": "If `true`, the grid will have a fixed width based on the screen size."
        },
        "attribute": "fixed",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
