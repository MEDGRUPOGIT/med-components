import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedListItem {
  constructor() {
    /**
     * TODO
     */
    this.selected = false;
    /**
     * TODO
     */
    this.border = false;
  }
  render() {
    const { dsColor, titulo, label, selected, dsSize, border } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-list-item': true,
        'med-list-item--selected': selected,
        'med-list-item--border-radius': border,
        [`med-list-item--${dsSize}`]: dsSize !== undefined,
      }) },
      h("slot", { name: "start" }),
      h("div", { class: "med-list-item__content" },
        h("h3", { class: "med-list-item__title", innerHTML: titulo }),
        h("h4", { class: "med-list-item__label", innerHTML: label })),
      h("slot", { name: "end" })));
  }
  static get is() { return "med-list-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-list-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-list-item.css"]
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
    },
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xs' | 'sm' | 'md'",
        "resolved": "\"md\" | \"sm\" | \"xs\" | undefined",
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
    },
    "border": {
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
      "attribute": "border",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
