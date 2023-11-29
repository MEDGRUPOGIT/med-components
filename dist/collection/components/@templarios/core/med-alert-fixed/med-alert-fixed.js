/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedAlertFixed {
  constructor() {
    this.dsColor = undefined;
    this.dsName = undefined;
    this.labelOffline = 'Você está offline. Conecte-se para acessar o conteúdo.';
    this.labelAtualizar = 'Versão desatualizada';
  }
  render() {
    const { dsColor, dsName, labelOffline, labelAtualizar } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-alert-fixed': true,
        [`med-alert-fixed--${dsName}`]: dsName !== undefined,
      }) }, (dsName === 'offline') &&
      h("div", { class: "med-alert-fixed__container" }, h("ion-icon", { class: "med-icon", name: "med-offline" }), h("med-type", { class: "med-alert-fixed__text" }, labelOffline)), (dsName === 'atualizar') &&
      h("div", { class: "med-alert-fixed__container" }, h("ion-icon", { class: "med-icon", name: "med-alerta" }), h("med-type", { class: "med-alert-fixed__text" }, labelAtualizar)), h("slot", null)));
  }
  static get is() { return "med-alert-fixed"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-alert-fixed.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-alert-fixed.css"]
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
          "original": "'offline' | 'atualizar'",
          "resolved": "\"atualizar\" | \"offline\" | undefined",
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
      "labelOffline": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "label-offline",
        "reflect": true,
        "defaultValue": "'Voc\u00EA est\u00E1 offline. Conecte-se para acessar o conte\u00FAdo.'"
      },
      "labelAtualizar": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "label-atualizar",
        "reflect": true,
        "defaultValue": "'Vers\u00E3o desatualizada'"
      }
    };
  }
}
