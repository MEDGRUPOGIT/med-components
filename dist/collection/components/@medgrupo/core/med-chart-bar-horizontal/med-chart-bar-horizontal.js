import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartBarHorizontal {
  constructor() {
    /**
     * Define a visibilidade do label.
     */
    this.label = true;
    /**
     * Define a visibilidade do label.
     */
    this.hideValue = false;
    /**
     * Define o valor do componente.
     */
    this.value = 0;
  }
  render() {
    const { dsColor, hideValue, dsSize, label, value, labelContent } = this;
    let progressClass, progressWidth;
    if (value > 100) {
      progressClass = 'med-chart-bar-horizontal--spill';
      progressWidth = 100;
    }
    else if (value === 100) {
      progressWidth = 100;
      progressClass = 'med-chart-bar-horizontal--full';
    }
    else {
      progressWidth = value;
      progressClass = '';
    }
    return (h(Host, { class: generateMedColor(dsColor, {
        [`med-chart-bar-horizontal ${progressClass}`]: true,
        [`med-chart-bar-horizontal--${dsSize}`]: dsSize !== undefined,
      }), "aria-valuenow": value, "aria-valuemin": "0", "aria-valuemax": "1", role: "progressbar" },
      h("div", { class: "med-chart-bar-horizontal__container" },
        h("div", { class: "med-chart-bar-horizontal__progress", part: "progress", style: { '--progress': `${progressWidth === 0 ? -100 : progressWidth - 100}` } }),
        h("div", { class: "med-chart-bar-horizontal__track", part: "track" })),
      label && h("med-type", { class: "med-chart-bar-horizontal__label" },
        !hideValue ? `${value}%` : '',
        labelContent)));
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
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'md'",
        "resolved": "\"md\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
      },
      "attribute": "ds-size",
      "reflect": false
    },
    "label": {
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
        "text": "Define a visibilidade do label."
      },
      "attribute": "label",
      "reflect": true,
      "defaultValue": "true"
    },
    "hideValue": {
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
        "text": "Define a visibilidade do label."
      },
      "attribute": "hide-value",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
      "type": "number",
      "mutable": true,
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
    },
    "labelContent": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o valor do componente."
      },
      "attribute": "label-content",
      "reflect": true
    }
  }; }
}
