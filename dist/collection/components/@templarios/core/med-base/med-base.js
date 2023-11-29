/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedBase {
  constructor() {
    this.dsColor = undefined;
    this.radius = undefined;
    this.gap = undefined;
    this.spacingV = undefined;
    this.spacingH = undefined;
  }
  render() {
    const { dsColor, radius, gap, spacingV, spacingH } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-base': true,
        [`med-base--radius-${radius}`]: radius !== undefined,
        [`med-base--gap-${gap}`]: gap !== undefined,
        [`med-base--spacing-v-${spacingV}`]: spacingV !== undefined,
        [`med-base--spacing-h-${spacingH}`]: spacingH !== undefined,
      }) }, h("slot", { name: "start" }), h("slot", { name: "middle" }), h("slot", { name: "end" }), h("slot", null)));
  }
  static get is() { return "med-base"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-base.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-base.css"]
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
          "text": "todo"
        },
        "attribute": "radius",
        "reflect": true
      },
      "gap": {
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
          "text": "todo"
        },
        "attribute": "gap",
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
          "text": "todo"
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
          "text": "todo"
        },
        "attribute": "spacing-h",
        "reflect": true
      }
    };
  }
}
