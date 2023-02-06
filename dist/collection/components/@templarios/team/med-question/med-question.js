import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedQuestion {
  constructor() {
    /**
     * todo
     */
    this.collapsed = false;
  }
  /**
   * todo
   */
  toggle() {
    this.collapsed = !this.collapsed;
  }
  render() {
    const { collapsed, texto, dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-question': true,
        'med-question--collapsed': collapsed
      }), onClick: () => { this.toggle(); } },
      texto && h("div", { class: "med-question__text", innerHTML: texto }),
      h("div", { class: "med-question__text" },
        h("slot", null)),
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
        "text": "todo"
      },
      "attribute": "texto",
      "reflect": false
    }
  }; }
}
