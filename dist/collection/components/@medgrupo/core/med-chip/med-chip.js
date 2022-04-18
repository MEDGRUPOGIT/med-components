import { Component, Host, Prop, h, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChip {
  constructor() {
    /**
     * Define o estado disabled do componente.
     */
    this.disabled = false;
    /**
     * Define o estado active do componente.
     */
    this.active = false;
    this.onFocus = () => {
      this.medFocus.emit();
    };
    this.onBlur = () => {
      this.medBlur.emit();
    };
    this.onClick = () => {
      this.medClick.emit();
    };
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
      }), onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick },
      iconLeft !== undefined && h("div", { class: "med-chip__img-warp" },
        h("ion-icon", { class: "med-icon med-chip__icon", name: iconLeft })),
      h("med-type", { class: "med-chip__label" }, label),
      iconRight && h("div", { class: "med-chip__img-warp" },
        h("ion-icon", { class: "med-icon med-chip__icon", name: iconRight }))));
  }
  static get is() { return "med-chip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-chip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chip.css"]
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
        "text": "Define a varia\u00E7\u00E3o do componente."
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
        "text": "Define a varia\u00E7\u00E3o de tamanho componente."
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
        "text": "Define o texto do componente."
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
        "text": "Define o estado disabled do componente."
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
        "text": "Define o estado active do componente."
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
        "text": "Define o icone left do componente."
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
        "text": "Define o icone right do componente."
      },
      "attribute": "icon-right",
      "reflect": true
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
        "text": "Emitido quando o chip tem focus."
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
        "text": "Emitido quando o chip perde o focus."
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
        "text": "Emitido quando o chip \u00E9 clicado."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
