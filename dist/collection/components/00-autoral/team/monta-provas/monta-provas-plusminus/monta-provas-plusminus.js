import { Component, Host, h, Prop, Event } from '@stencil/core';
import { createColorClasses } from '../../../../../utils/theme';
import { PlusMinusStatus } from './monta-provas-plusminus.enum';
export class MontaProvasPlusminus {
  constructor() {
    this.onClick = (status) => {
      this.medChange.emit(status);
    };
  }
  render() {
    const { dsSize } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'monta-provas-plusminus': true,
        [`monta-provas-plusminus--${dsSize}`]: dsSize !== undefined,
      }, null) },
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
        "text": ""
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
        "text": ""
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
