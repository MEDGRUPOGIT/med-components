import { Component, Host, h, Prop, Method } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedListItemAccordion {
  constructor() {
    this.selected = false;
    this.border = false;
    this.collapsed = true;
  }
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { color, neutral, titulo, label, selected, dsSize, border, margin, collapsed } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-list-item-accordion': true,
        'med-list-item-accordion--selected': selected,
        'med-list-item-accordion--border-radius': border,
        [`med-list-item-accordion--${dsSize}`]: dsSize !== undefined,
        [`med-list-item-accordion--${margin}`]: margin !== undefined,
        'med-list-item-accordion--collapsed': collapsed
      }, neutral) },
      h("div", { class: "med-list-item-accordion__item" },
        h("slot", { name: "start" }),
        h("div", { class: "med-list-item-accordion__content" },
          h("h3", { class: "med-list-item-accordion__title" }, titulo),
          h("h4", { class: "med-list-item-accordion__label" }, label)),
        h("ion-button", { "ds-name": "icon-only", slot: "left", onClick: (event) => { this.toggle(event); } },
          h("ion-icon", { class: "med-icon", name: "med-baixo" }))),
      h("div", { class: "med-list-item-accordion__sub-item" },
        h("slot", { name: "end" }))));
  }
  static get is() { return "med-list-item-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-list-item-accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-list-item-accordion.css"]
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
    "margin": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xs' | 'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "margin",
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
    },
    "collapsed": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "(event?: Event | undefined) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
