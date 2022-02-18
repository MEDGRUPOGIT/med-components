import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
/**
 * @slot - Slot default.
 * @slot start - Conteúdo é posicionado a esquerda do componente.
 * @slot middle - Conteúdo é posicionado ao centro do componente.
 * @slot end - Conteúdo é posicionado a direita do componente.
 */
export class MedBase {
  render() {
    const { dsColor, radius, spacingV, spacingH } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-base': true,
        [`med-base--radius-${radius}`]: radius !== undefined,
        [`med-base--spacing-v-${spacingV}`]: spacingV !== undefined,
        [`med-base--spacing-h-${spacingH}`]: spacingH !== undefined,
      }) },
      h("slot", { name: "start" }),
      h("slot", { name: "middle" }),
      h("slot", { name: "end" }),
      h("slot", null)));
  }
  static get is() { return "med-base"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-base.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-base.css"]
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
    "radius": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'s00' | 's02' | 's04' | 's08' | string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de borde-radius do componente."
      },
      "attribute": "radius",
      "reflect": true
    },
    "spacingV": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'s00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de padding vertical do componente."
      },
      "attribute": "spacing-v",
      "reflect": true
    },
    "spacingH": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'s00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de padding horizontal do componente."
      },
      "attribute": "spacing-h",
      "reflect": true
    }
  }; }
}
