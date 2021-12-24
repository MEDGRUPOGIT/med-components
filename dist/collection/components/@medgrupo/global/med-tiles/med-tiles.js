import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedTiles {
  constructor() {
    /**
     * TODO
     */
    this.solid = false;
    /**
     * TODO
     */
    this.selected = false;
  }
  render() {
    const { dsColor, titulo, label, selected, solid } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tiles': true,
        'med-solid': solid,
        'med-tiles--selected': selected
      }) },
      h("div", { class: "med-tiles__border" }),
      h("div", { class: "med-tiles__content" },
        h("h3", { class: "med-tiles__title", innerHTML: titulo }),
        h("h4", { class: "med-tiles__label", innerHTML: label }),
        h("slot", null))));
  }
  static get is() { return "med-tiles"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-tiles.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-tiles.css"]
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
