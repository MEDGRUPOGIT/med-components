/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { menuController } from '../../utils/menu-controller';
import { updateVisibility } from './menu-toggle-util';
export class MenuToggle {
  constructor() {
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = undefined;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, h("slot", null)));
  }
  static get is() { return "ion-menu-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-toggle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-toggle.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Optional property that maps to a Menu's `menuId` prop.\r\nCan also be `start` or `end` for the menu side.\r\nThis is used to find the correct menu to toggle.\r\n\r\nIf this property is not used, `ion-menu-toggle` will toggle the\r\nfirst menu that is active."
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
          "text": "Automatically hides the content when the corresponding menu is not active.\r\n\r\nBy default, it's `true`. Change it to `false` in order to\r\nkeep `ion-menu-toggle` always visible regardless the state of the menu."
        },
        "attribute": "auto-hide",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
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
