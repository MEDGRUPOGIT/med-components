/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Footer {
  constructor() {
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    const translucent = this.translucent;
    return (h(Host, { role: "contentinfo", class: {
        [mode]: true,
        // Used internally for styling
        [`footer-${mode}`]: true,
        [`footer-translucent`]: translucent,
        [`footer-translucent-${mode}`]: translucent,
      } }, mode === 'ios' && translucent &&
      h("div", { class: "footer-background" }), h("slot", null)));
  }
  static get is() { return "ion-footer"; }
  static get originalStyleUrls() {
    return {
      "ios": ["footer.ios.scss"],
      "md": ["footer.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["footer.ios.css"],
      "md": ["footer.md.css"]
    };
  }
  static get properties() {
    return {
      "translucent": {
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
          "text": "If `true`, the footer will be translucent.\r\nOnly applies when the mode is `\"ios\"` and the device supports\r\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).\r\n\r\nNote: In order to scroll content behind the footer, the `fullscreen`\r\nattribute needs to be set on the content."
        },
        "attribute": "translucent",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
