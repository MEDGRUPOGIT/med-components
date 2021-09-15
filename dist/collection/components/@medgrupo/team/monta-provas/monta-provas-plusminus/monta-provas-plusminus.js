import { Component, Host, h, Prop, Event } from '@stencil/core';
import { PlusMinusStatus } from './monta-provas-plusminus.enum';
import { generateMedColor } from '../../../../../utils/med-theme';
export class MontaProvasPlusminus {
  constructor() {
    this.onClick = (status) => {
      this.medChange.emit(status);
    };
  }
  render() {
    const { dsSize, dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'monta-provas-plusminus': true,
        [`monta-provas-plusminus--${dsSize}`]: dsSize !== undefined,
      }) },
      h("ion-icon", { class: "med-icon med-icon--lg monta-provas-plusminus__icon-minus", name: "med-menos-circulo", onClick: () => this.onClick(PlusMinusStatus.MINUS) }),
      h("slot", null),
      h("ion-icon", { class: "med-icon med-icon--lg monta-provas-plusminus__icon-plus", name: "med-mais-circulo", onClick: () => this.onClick(PlusMinusStatus.PLUS) })));
  }
  static get is() { return "monta-provas-plusminus"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["monta-provas-plusminus.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["monta-provas-plusminus.css"]
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
            "path": "../../../../../interface"
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
        "text": "TODO"
      },
      "attribute": "ds-size",
      "reflect": false
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
        "text": "TODO"
      },
      "complexType": {
        "original": "PlusMinusStatus",
        "resolved": "PlusMinusStatus.MINUS | PlusMinusStatus.PLUS",
        "references": {
          "PlusMinusStatus": {
            "location": "import",
            "path": "./monta-provas-plusminus.enum"
          }
        }
      }
    }]; }
}
