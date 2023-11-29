/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedListItemAccordion {
  constructor() {
    this.titulo = undefined;
    this.label = undefined;
    this.dsColor = undefined;
    this.selected = false;
    this.dsSize = undefined;
    this.margin = undefined;
    this.border = false;
    this.collapsed = true;
    this.disabled = false;
  }
  /**
   * todo
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
      }) }, h("div", { class: "med-list-item-accordion__item" }, h("slot", { name: "start" }), h("div", { class: "med-list-item-accordion__content" }, h("h3", { class: "med-list-item-accordion__title" }, titulo), h("h4", { class: "med-list-item-accordion__label" }, label)), h("ion-button", { mode: "ios", "icon-only": true, class: "med-list-item-accordion__button", "ds-color": dsColor, fill: "clear", "ds-size": "xs", slot: "left", onClick: (event) => { this.toggle(event); } }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-cima" }))), h("div", { class: "med-list-item-accordion__sub-item" }, h("slot", { name: "end" }))));
  }
  static get is() { return "med-list-item-accordion"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-list-item-accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-list-item-accordion.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get methods() {
    return {
      "toggle": {
        "complexType": {
          "signature": "(event?: Event) => Promise<void>",
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
          "text": "todo",
          "tags": []
        }
      }
    };
  }
}
