/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedTiles {
  constructor() {
    this.dsColor = undefined;
    this.titulo = undefined;
    this.label = undefined;
    this.badge = undefined;
    this.solid = false;
    this.selected = false;
  }
  render() {
    const { dsColor, titulo, label, selected, solid } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tiles': true,
        'med-solid': solid,
        'med-tiles--selected': selected
      }) }, h("div", { class: "med-tiles__border" }), h("div", { class: "med-tiles__content" }, h("med-type", { class: "med-tiles__title", innerHTML: titulo }), h("med-type", { class: "med-tiles__label", innerHTML: label }), h("slot", null))));
  }
  static get is() { return "med-tiles"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-tiles.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-tiles.css"]
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
      "titulo": {
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
          "text": "todo"
        },
        "attribute": "titulo",
        "reflect": false
      },
      "label": {
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
          "text": "todo"
        },
        "attribute": "label",
        "reflect": false
      },
      "badge": {
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
          "text": "todo"
        },
        "attribute": "badge",
        "reflect": false
      },
      "solid": {
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
        "attribute": "solid",
        "reflect": false,
        "defaultValue": "false"
      },
      "selected": {
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
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
