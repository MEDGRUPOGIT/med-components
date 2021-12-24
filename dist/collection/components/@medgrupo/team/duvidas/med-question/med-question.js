import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../../utils/med-theme';
export class MedQuestion {
  constructor() {
    /**
      * Define o estado do componente.
      */
    this.collapsed = false;
  }
  /**
   * TODO
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { collapsed, texto, dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-question': true,
        'med-question--collapsed': collapsed
      }), onClick: (event) => { this.toggle(event); } },
      h("div", { class: "med-question__text", innerHTML: texto }),
      h("ion-icon", { class: "med-icon med-question__icon", name: "med-baixo" })));
  }
  static get is() { return "med-question"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-question.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-question.css"]
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
            "path": "../../../../../interface"
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
        "text": "Define o estado do componente."
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "false"
    },
    "texto": {
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
        "text": "Define o conte\u00FAdo de texto do componente."
      },
      "attribute": "texto",
      "reflect": false
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
