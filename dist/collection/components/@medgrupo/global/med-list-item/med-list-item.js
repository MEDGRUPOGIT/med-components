import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedListItem {
  constructor() {
    this.selected = false;
    this.border = false;
  }
  render() {
    const { color, neutral, titulo, label, selected, dsSize, border } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-list-item': true,
        'med-list-item--selected': selected,
        'med-list-item--border-radius': border,
        [`med-list-item--${dsSize}`]: dsSize !== undefined,
      }, neutral) },
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
        "text": ""
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Neutral",
        "resolved": "string | undefined",
        "references": {
          "Neutral": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "neutral",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
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
        "text": ""
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
        "text": ""
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
        "text": ""
      },
      "attribute": "border",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
