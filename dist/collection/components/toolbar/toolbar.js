/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, forceUpdate, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses, hostContext } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the toolbar text in LTR, and to the right in RTL.
 * @slot secondary - Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode.
 * @slot primary - Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode.
 * @slot end - Content is placed to the right of the toolbar text in LTR, and to the left in RTL.
 */
export class Toolbar {
  constructor() {
    this.childrenStyles = new Map();
    this.color = undefined;
  }
  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
    const firstButtons = buttons.find(button => {
      return button.slot === 'start';
    });
    if (firstButtons) {
      firstButtons.classList.add('buttons-first-slot');
    }
    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find(button => button.slot === 'end') ||
      buttonsReversed.find(button => button.slot === 'primary') ||
      buttonsReversed.find(button => button.slot === 'secondary');
    if (lastButtons) {
      lastButtons.classList.add('buttons-last-slot');
    }
  }
  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }
  render() {
    const mode = getIonMode(this);
    const childStyles = {};
    this.childrenStyles.forEach(value => {
      Object.assign(childStyles, value);
    });
    return (h(Host, { class: Object.assign(Object.assign({}, childStyles), createColorClasses(this.color, {
        [mode]: true,
        'in-toolbar': hostContext('ion-toolbar', this.el),
      })) }, h("div", { class: "toolbar-background" }), h("div", { class: "toolbar-container" }, h("slot", { name: "start" }), h("slot", { name: "secondary" }), h("div", { class: "toolbar-content" }, h("slot", null)), h("slot", { name: "primary" }), h("slot", { name: "end" }))));
  }
  static get is() { return "ion-toolbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["toolbar.ios.scss"],
      "md": ["toolbar.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["toolbar.ios.css"],
      "md": ["toolbar.md.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Color",
          "resolved": "string | undefined",
          "references": {
            "Color": {
              "location": "import",
              "path": "../../interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The color to use from your application's color palette.\r\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\r\nFor more information on colors, see [theming](/docs/theming/basics)."
        },
        "attribute": "color",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "ionStyle",
        "method": "childrenStyle",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
