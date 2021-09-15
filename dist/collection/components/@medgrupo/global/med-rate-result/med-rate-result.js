import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedRateResult {
  render() {
    const { excelente, bom, regular, ruim } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-rate-result': true,
      }, null) },
      h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--excelente" },
        h("ion-icon", { class: "med-icon", name: "med-excelente" }),
        h("span", null, excelente)),
      h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--bom" },
        h("ion-icon", { class: "med-icon", name: "med-bom" }),
        h("span", null, bom)),
      h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--regular" },
        h("ion-icon", { class: "med-icon", name: "med-regular" }),
        h("span", null, regular)),
      h("div", { class: "med-rate-result__wrapper med-rate-result__wrapper--ruim" },
        h("ion-icon", { class: "med-icon", name: "med-ruim" }),
        h("span", null, ruim))));
  }
  static get is() { return "med-rate-result"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-rate-result.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rate-result.css"]
  }; }
  static get properties() { return {
    "excelente": {
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
        "text": "Define o valor do item excelente."
      },
      "attribute": "excelente",
      "reflect": false
    },
    "bom": {
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
        "text": "Define o valor do item bom."
      },
      "attribute": "bom",
      "reflect": false
    },
    "regular": {
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
        "text": "Define o valor do item regular."
      },
      "attribute": "regular",
      "reflect": false
    },
    "ruim": {
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
        "text": "Define o valor do item ruim."
      },
      "attribute": "ruim",
      "reflect": false
    }
  }; }
}
