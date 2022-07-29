import { Component, h, Host, Method, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedRateAula {
  constructor() {
    /**
     * todo
     */
    this.collapsed = false;
  }
  /**
   * todo
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { collapsed } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-rate-aula': true,
        'med-rate-aula--collapsed': collapsed
      }) },
      h("div", { class: "med-rate-aula__container" },
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--otimo" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--otimo", name: "med-excelente" })),
          h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-success" }, "\u00D3timo")),
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--bom" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--bom", name: "med-bom" })),
          h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-attention" }, "Bom")),
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--regular" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--regular", name: "med-regular" })),
          h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-caution" }, "Regular")),
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--ruim" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--ruim", name: "med-ruim" })),
          h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-warning" }, "Ruim")),
        h("div", { class: "med-rate-aula__button-fechar", onClick: (event) => { this.toggle(event); } },
          h("ion-button", { mode: "ios", "icon-only": true, "ds-size": "xs" },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))),
      h("div", { class: "med-rate-aula__end", onClick: (event) => { this.toggle(event); } },
        h("ion-button", { mode: "ios", "icon-only": true, "ds-size": "xs", fill: "clear" },
          h("ion-icon", { slot: "icon-only", class: "med-rate-aula__icon-abrir", name: "med-avaliar" })),
        h("med-type", { token: "p12" }, "Avalie"))));
  }
  static get is() { return "med-rate-aula"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-rate-aula.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rate-aula.css"]
  }; }
  static get properties() { return {
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
        "text": "todo",
        "tags": []
      }
    }
  }; }
}
