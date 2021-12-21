import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartBarHorizontal {
  constructor() {
    /**
     * Define o valor do componente.
     */
    this.value = 0;
  }
  render() {
    const { dsColor, value } = this;
    return (h(Host, { class: generateMedColor(dsColor, { ['med-chart-bar-horizontal']: true }), "aria-valuenow": value, "aria-valuemin": "0", "aria-valuemax": "1", role: "progressbar" },
      h("div", { class: "med-chart-bar-horizontal__container" },
        h("div", { class: "med-chart-bar-horizontal__progress", part: "progress", style: { '--progress': `${value === 0 ? -100 : value - 100}` } }),
        h("div", { class: "med-chart-bar-horizontal__track", part: "track" })),
      h("med-type", { class: "med-chart-bar-horizontal__label", token: "p10b" },
        value,
        "%")));
  }
  static get is() { return "med-chart-bar-horizontal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-bar-horizontal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-bar-horizontal.css"]
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
        "text": "Define o valor do componente."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
}
