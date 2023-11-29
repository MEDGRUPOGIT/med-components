/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedNavItem {
  constructor() {
    this.onFocus = () => {
      this.medBlur.emit();
    };
    this.onBlur = () => {
      this.medClick.emit();
    };
    this.dsColor = undefined;
    this.active = false;
    this.text = undefined;
    this.icon = undefined;
    this.disabled = false;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
    this.iconOnly = false;
  }
  componentDidLoad() {
    if (this.hostElement.classList.contains('button')) {
      this.hostElement.classList.remove('button');
    }
  }
  render() {
    const { dsColor, active, text, icon, disabled, iconOnly } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-item': true,
        'med-nav-item--active': active,
        'med-nav-item--icon-only': iconOnly,
        'button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true,
      }) }, h("button", { type: 'button', class: "med-nav-item__button", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, h("ion-icon", { class: "med-nav-item__icon med-icon", name: icon }), h("med-type", { class: "med-nav-item__text", token: "p14" }, text))));
  }
  static get is() { return "med-nav-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-nav-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-nav-item.css"]
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
      "active": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
      },
      "text": {
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
        "attribute": "text",
        "reflect": true
      },
      "icon": {
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
        "attribute": "icon",
        "reflect": true
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
          "text": "todo"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "routerDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "RouterDirection",
          "resolved": "\"back\" | \"forward\" | \"root\"",
          "references": {
            "RouterDirection": {
              "location": "import",
              "path": "../../../../interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "router-direction",
        "reflect": false,
        "defaultValue": "'forward'"
      },
      "routerAnimation": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AnimationBuilder | undefined",
          "resolved": "((baseEl: any, opts?: any) => Animation) | undefined",
          "references": {
            "AnimationBuilder": {
              "location": "import",
              "path": "../../../../interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        }
      },
      "iconOnly": {
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
          "text": "todo"
        },
        "attribute": "icon-only",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "medFocus",
        "name": "medFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "medBlur",
        "name": "medBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "medClick",
        "name": "medClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
}
