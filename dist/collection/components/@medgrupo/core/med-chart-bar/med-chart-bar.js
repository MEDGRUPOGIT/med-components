import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartBar {
  constructor() {
    /**
      * Define a valor do componente.
      */
    this.value = 0;
    /**
      * Define o height em px do componente.
      */
    this.height = 50;
    /**
      * Define o width em px do componente.
      */
    this.width = 42;
    /**
      * Define o token do label do componente.
      */
    this.token = 'p12b';
  }
  render() {
    const { dsColor, value, height, width, token } = this;
    const percentage = value === 0 ? 100 : 100 - value;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-chart-bar': true
      }) },
      h("div", { class: "med-chart-bar__container", style: { '--value': `${percentage}`, '--height': `${height}px`, '--width': `${width}px` } },
        h("med-type", { class: "med-chart-bar__label", token: token },
          value,
          "%"),
        h("div", { class: "med-chart-bar__progress" }))));
  }
  static get is() { return "med-chart-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-bar.css"]
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
            "path": "../../../../interface"
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
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define a valor do componente."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o height em px do componente."
      },
      "attribute": "height",
      "reflect": true,
      "defaultValue": "50"
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o width em px do componente."
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "42"
    },
    "token": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o token do label do componente."
      },
      "attribute": "token",
      "reflect": true,
      "defaultValue": "'p12b'"
    }
  }; }
}
