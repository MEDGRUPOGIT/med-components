import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedListItem {
  constructor() {
    /**
     * todo
     */
    this.selected = false;
    /**
     * todo
     */
    this.border = false;
    /**
     * todo
     */
    this.disabled = false;
  }
  render() {
    const { dsColor, titulo, label, selected, dsSize, border, disabled } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-list-item': true,
        'med-list-item--selected': selected,
        'med-list-item--disabled': disabled,
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
        "text": "todo"
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
        "text": "todo"
      },
      "attribute": "border",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
