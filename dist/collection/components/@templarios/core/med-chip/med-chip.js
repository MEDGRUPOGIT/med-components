/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedChip {
  constructor() {
    this.onFocus = () => {
      this.medFocus.emit();
    };
    this.onBlur = () => {
      this.medBlur.emit();
    };
    this.onClick = () => {
      this.medClick.emit();
    };
    this.dsColor = undefined;
    this.dsName = undefined;
    this.dsSize = undefined;
    this.label = undefined;
    this.disabled = false;
    this.active = false;
    this.iconLeft = undefined;
    this.iconRight = undefined;
  }
  render() {
    const { dsColor, dsName, dsSize, disabled, label, active, iconLeft, iconRight } = this;
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: generateMedColor(dsColor, {
        'med-chip': true,
        'med-chip--active': active,
        'med-chip--disabled': disabled,
        [`med-chip--${dsName}`]: dsName !== undefined,
        [`med-chip--${dsSize}`]: dsSize !== undefined,
        [`med-chip--icon-left`]: iconLeft !== undefined,
        [`med-chip--icon-right`]: iconRight !== undefined,
      }), onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick }, iconLeft !== undefined && h("div", { class: "med-chip__img-warp" }, h("ion-icon", { class: "med-icon med-chip__icon", name: iconLeft })), h("med-type", { class: "med-chip__label" }, label), iconRight && h("div", { class: "med-chip__img-warp" }, h("ion-icon", { class: "med-icon med-chip__icon", name: iconRight }))));
  }
  static get is() { return "med-chip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-chip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-chip.css"]
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
      "dsName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'secondary'",
          "resolved": "\"secondary\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-name",
        "reflect": true
      },
      "dsSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'md'",
          "resolved": "\"md\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-size",
        "reflect": true
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "label",
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
      "active": {
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
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
      },
      "iconLeft": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "icon-left",
        "reflect": true
      },
      "iconRight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "icon-right",
        "reflect": true
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
}
