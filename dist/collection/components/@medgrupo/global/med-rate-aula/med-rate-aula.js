import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedRateAula {
  constructor() {
    /**
      * Define o estado do componente.
      */
    this.collapsed = false;
  }
  /**
    * Define o estado do componente programaticamente.
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
          h("h4", { class: "med-rate-aula__label med-rate-aula__label--otimo" }, "\u00D3timo")),
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--bom" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--bom", name: "med-bom" })),
          h("h4", { class: "med-rate-aula__label med-rate-aula__label--bom" }, "Bom")),
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--regular" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--regular", name: "med-regular" })),
          h("h4", { class: "med-rate-aula__label med-rate-aula__label--regular" }, "Regular")),
        h("div", { class: "med-rate-aula__item" },
          h("button", { class: "med-rate-aula__button med-rate-aula__button--ruim" },
            h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--ruim", name: "med-ruim" })),
          h("h4", { class: "med-rate-aula__label med-rate-aula__label--ruim" }, "Rium")),
        h("div", { class: "med-rate-aula__button-fechar", onClick: (event) => { this.toggle(event); } },
          h("ion-button", { "ds-size": "xs", "ds-name": "primary", class: "" },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))),
      h("div", { class: "med-rate-aula__end", onClick: (event) => { this.toggle(event); } },
        h("ion-button", { "ds-size": "xs", "ds-name": "tertiary" },
          h("ion-icon", { slot: "icon-only", class: "med-rate-aula__icon-abrir", name: "med-avaliar" })))));
  }
  static get is() { return "med-rate-aula"; }
  static get encapsulation() { return "shadow"; }
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
        "text": "Define o estado do componente programaticamente.",
        "tags": []
      }
    }
  }; }
}
