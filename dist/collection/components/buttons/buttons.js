import { Component, Host, Prop, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
export class Buttons {
  constructor() {
    /**
     * If true, buttons will disappear when its
     * parent toolbar has fully collapsed if the toolbar
     * is not the first toolbar. If the toolbar is the
     * first toolbar, the buttons will be hidden and will
     * only be shown once all toolbars have fully collapsed.
     *
     * Only applies in `ios` mode with `collapse` set to
     * `true` on `ion-header`.
     *
     * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
     */
    this.collapse = false;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        ['buttons-collapse']: this.collapse
      } }));
  }
  static get is() { return "ion-buttons"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "ios": ["buttons.ios.scss"],
    "md": ["buttons.md.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["buttons.ios.css"],
    "md": ["buttons.md.css"]
  }; }
  static get properties() { return {
    "collapse": {
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
        "text": "If true, buttons will disappear when its\r\nparent toolbar has fully collapsed if the toolbar\r\nis not the first toolbar. If the toolbar is the\r\nfirst toolbar, the buttons will be hidden and will\r\nonly be shown once all toolbars have fully collapsed.\r\n\r\nOnly applies in `ios` mode with `collapse` set to\r\n`true` on `ion-header`.\r\n\r\nTypically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)"
      },
      "attribute": "collapse",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
