import { Component, Event, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { PlusMinusStatus } from '../../../../@templarios/enums/plusminus.enum';
export class MedPlusminus {
  constructor() {
    this.onClick = (status) => {
      this.medChange.emit(status);
    };
  }
  render() {
    const { dsSize, dsColor, disabled } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-plusminus': true,
        [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
        [`med-plusminus--${dsSize}`]: dsSize !== undefined,
      }) },
      h("ion-icon", { class: "med-icon med-plusminus__icon-minus", name: "med-menos-circulo", onClick: () => this.onClick(PlusMinusStatus.MINUS) }),
      h("slot", null),
      h("ion-icon", { class: "med-icon med-plusminus__icon-plus", name: "med-mais-circulo", onClick: () => this.onClick(PlusMinusStatus.PLUS) })));
  }
  static get is() { return "med-plusminus"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-plusminus.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-plusminus.css"]
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
    }
  }; }
  static get events() { return [{
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
    }]; }
}
