import { Component, Host, h, Prop, Event, Element } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedNavItem {
  constructor() {
    /**
      * Define o estado active do componente.
      */
    this.active = false;
    /**
      * Define o estado disabled do componente.
      */
    this.disabled = false;
    /**
      * TODO.
      */
    this.routerDirection = 'forward';
    /**
      * TODO.
      */
    this.iconOnly = false;
    this.onFocus = () => {
      this.medBlur.emit();
    };
    this.onBlur = () => {
      this.medClick.emit();
    };
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
      }) },
      h("button", { type: 'button', class: "med-nav-item__button", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur },
        h("ion-icon", { class: "med-nav-item__icon med-icon", name: icon }),
        h("med-type", { class: "med-nav-item__text", token: "p14" }, text))));
  }
  static get is() { return "med-nav-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-nav-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-nav-item.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
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
        "text": "Define o estado active do componente."
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
        "text": "Define o texto do componente."
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
        "text": "Define o icone do componente."
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
        "text": "Define o estado disabled do componente."
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
        "text": "TODO."
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
        "text": "TODO."
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
        "text": "TODO."
      },
      "attribute": "icon-only",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "medFocus",
      "name": "medFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "TODO."
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
        "text": "TODO."
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
        "text": "TODO."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
