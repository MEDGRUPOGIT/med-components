import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedListItemAccordion {
  constructor() {
    /**
     * TODO
     */
    this.selected = false;
    /**
     * TODO
     */
    this.border = false;
    /**
     * TODO
     */
    this.collapsed = true;
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
  }
  /**
   * TODO
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { dsColor, titulo, label, selected, dsSize, border, margin, collapsed, disabled } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-list-item-accordion': true,
        'med-list-item-accordion--disabled': disabled,
        'med-list-item-accordion--selected': selected,
        'med-list-item-accordion--border-radius': border,
        [`med-list-item-accordion--${dsSize}`]: dsSize !== undefined,
        [`med-list-item-accordion--${margin}`]: margin !== undefined,
        'med-list-item-accordion--collapsed': collapsed
      }) },
      h("div", { class: "med-list-item-accordion__item" },
        h("slot", { name: "start" }),
        h("div", { class: "med-list-item-accordion__content" },
          h("h3", { class: "med-list-item-accordion__title" }, titulo),
          h("h4", { class: "med-list-item-accordion__label" }, label)),
        h("ion-button", { mode: "ios", "icon-only": true, class: "med-list-item-accordion__button", "ds-color": dsColor, fill: "clear", "ds-size": "xs", slot: "left", onClick: (event) => { this.toggle(event); } },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-cima" }))),
      h("div", { class: "med-list-item-accordion__sub-item" },
        h("slot", { name: "end" }))));
  }
  static get is() { return "med-list-item-accordion"; }
  static get encapsulation() { return "scoped"; }
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
        "text": "TODO"
      },
      "attribute": "ds-color",
      "reflect": true
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "true"
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
        "text": "If `true`, the user cannot interact with the button."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "TODO",
        "tags": []
      }
    }
  }; }
}
