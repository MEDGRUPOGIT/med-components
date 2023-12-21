/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { PlusMinusStatus } from '../../../../@templarios/enums/plusminus.enum';
export class MedPlusminus {
  constructor() {
    this.onClick = (status) => {
      if (this.min === undefined ||
        this.max === undefined ||
        this.value === undefined ||
        !this.automaticDisabled) {
        return this.medChange.emit(status);
      }
      if (status === PlusMinusStatus.MINUS && this.value === this.min)
        return;
      if (status === PlusMinusStatus.PLUS && this.value === this.max)
        return;
      const increment = status === PlusMinusStatus.MINUS ? -1 : 1;
      this.medChangeAlt.emit(this.value + increment);
    };
    this.dsColor = undefined;
    this.dsSize = undefined;
    this.disabled = undefined;
    this.automaticDisabled = false;
    this.useSlot = true;
    this.value = undefined;
    this.min = undefined;
    this.max = undefined;
  }
  disabledHandler(newValue, _) {
    if (this.min === undefined ||
      this.max === undefined ||
      this.value === undefined ||
      !this.automaticDisabled)
      return;
    if (newValue === this.min && newValue === this.max) {
      return (this.disabled = 'both');
    }
    if (newValue === this.min) {
      return (this.disabled = 'minus');
    }
    if (newValue === this.max) {
      return (this.disabled = 'plus');
    }
    this.disabled = undefined;
  }
  componentDidLoad() {
    var _a;
    this.disabledHandler((_a = this.value) !== null && _a !== void 0 ? _a : 0, 0);
  }
  render() {
    const { dsSize, dsColor, disabled, useSlot, value } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-plusminus': true,
        [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
        [`med-plusminus--${dsSize}`]: dsSize !== undefined
      }) }, h("ion-icon", { class: 'med-icon med-plusminus__icon-minus', name: 'med-menos-circulo', onClick: () => this.onClick(PlusMinusStatus.MINUS) }), useSlot ? h("slot", null) : value !== null && value !== void 0 ? value : 0, h("ion-icon", { class: 'med-icon med-plusminus__icon-plus', name: 'med-mais-circulo', onClick: () => this.onClick(PlusMinusStatus.PLUS) })));
  }
  static get is() { return "med-plusminus"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-plusminus.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-plusminus.css"]
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
      "dsSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'xl'",
          "resolved": "\"xl\" | undefined",
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
      "disabled": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'minus' | 'plus' | 'both'",
          "resolved": "\"both\" | \"minus\" | \"plus\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "disabled",
        "reflect": true
      },
      "automaticDisabled": {
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
          "text": "true se deve desabilitar os controles automaticamente"
        },
        "attribute": "automatic-disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "useSlot": {
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
          "text": "Dever\u00E1 ser true se o valor atual vai ser passado por slot, false se vai ser passado por prop"
        },
        "attribute": "use-slot",
        "reflect": true,
        "defaultValue": "true"
      },
      "value": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "O valor atual (apenas se useSlot \u00E9 false)"
        },
        "attribute": "value",
        "reflect": true
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "O valor m\u00EDnimo"
        },
        "attribute": "min",
        "reflect": true
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "O valor m\u00E1ximo"
        },
        "attribute": "max",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "medChange",
        "name": "medChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "PlusMinusStatus",
          "resolved": "PlusMinusStatus.MINUS | PlusMinusStatus.PLUS",
          "references": {
            "PlusMinusStatus": {
              "location": "import",
              "path": "../../../../@templarios/enums/plusminus.enum"
            }
          }
        }
      }, {
        "method": "medChangeAlt",
        "name": "medChangeAlt",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "disabledHandler"
      }];
  }
}
