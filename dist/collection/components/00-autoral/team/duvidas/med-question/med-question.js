import { Component, Host, h, Prop, Method } from '@stencil/core';
import { createColorClasses } from '../../../../../utils/theme';
export class MedQuestion {
  constructor() {
    /**
     * Define o estado do componente.
     */
    this.collapsed = false;
  }
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { color, neutral, collapsed } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-question': true,
        'med-question--collapsed': collapsed
      }, neutral), onClick: (event) => { this.toggle(event); } },
      h("div", { class: "med-question__text" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna neque, elementum sed porta sit amet, auctor tincidunt ligula. Sed id congue odio. Nullam elit libero, tristique et augue in, sollicitudin tempus mauris. Sed vehicula ut metus non ornare. Curabitur convallis turpis arcu, id volutpat est viverra id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et placerat dui. Aenean dolor fermentum ut porta et, volutpat a nibh. Sed posuere aliquet ultrices. Donec et mauris finibus, consequat metus a, interdum neque. Suspendisse egestas tincidunt mauris, non vehicula ipsum dictum sit amet. Etiam id augue ex. Nullam tincidunt erat non justo auctor accumsan. Sed neque purus, imperdiet id turpis id, dictum interdum nisi."),
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
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
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
      "attribute": "color",
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
            "path": "../../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor neutra do componente."
      },
      "attribute": "neutral",
      "reflect": false
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
