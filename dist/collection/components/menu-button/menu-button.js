/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { menuController } from '../../utils/menu-controller';
import { createColorClasses, hostContext } from '../../utils/theme';
import { updateVisibility } from '../menu-toggle/menu-toggle-util';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML button element that wraps all child elements.
 * @part icon - The menu button icon (uses ion-icon).
 */
export class MenuButton {
  constructor() {
    this.onClick = async () => {
      return menuController.toggle(this.menu);
    };
    this.visible = false;
    this.color = undefined;
    this.disabled = false;
    this.menu = undefined;
    this.autoHide = true;
    this.type = 'button';
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const { color, disabled } = this;
    const mode = getIonMode(this);
    const menuIcon = config.get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    return (h(Host, { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: createColorClasses(color, {
        [mode]: true,
        'button': true,
        'menu-button-hidden': hidden,
        'menu-button-disabled': disabled,
        'in-toolbar': hostContext('ion-toolbar', this.el),
        'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
        'ion-activatable': true,
        'ion-focusable': true
      }) }, h("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native", part: "native", "aria-label": "menu" }), h("span", { class: "button-inner" }, h("slot", null, h("ion-icon", { class: "med-icon", part: "icon", icon: menuIcon, mode: mode, lazy: false, "aria-hidden": "true" }))), mode === 'md' && h("ion-ripple-effect", { type: "unbounded" }))));
  }
  static get is() { return "ion-menu-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["menu-button.ios.scss"],
      "md": ["menu-button.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["menu-button.ios.css"],
      "md": ["menu-button.md.css"]
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
      },
      "disabled": {
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
          "text": "If `true`, the user cannot interact with the menu button."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "menu": {
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
          "text": "Optional property that maps to a Menu's `menuId` prop. Can also be `start` or `end` for the menu side. This is used to find the correct menu to toggle"
        },
        "attribute": "menu",
        "reflect": false
      },
      "autoHide": {
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
          "text": "Automatically hides the menu button when the corresponding menu is not active"
        },
        "attribute": "auto-hide",
        "reflect": false,
        "defaultValue": "true"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'submit' | 'reset' | 'button'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of the button."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "ionMenuChange",
        "method": "visibilityChanged",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "ionSplitPaneVisible",
        "method": "visibilityChanged",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
