import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class TpInputContainer {
  constructor() {
    this.disabled = false;
    this.feedback = false;
  }
  render() {
    const { dsColor, dsName, disabled, feedback, hasButton, hasIcon } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'tp-input-container': true,
        'tp-input-container--disabled': disabled,
        'tp-input-container--feedback': feedback,
        [`tp-input-container--${dsName}`]: dsName !== undefined,
        [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
        [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
      }) },
      h("slot", { name: "start" }),
      h("slot", null),
      h("slot", { name: "end" })));
  }
  static get is() { return "tp-input-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["tp-input-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tp-input-container.css"]
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
        "text": ""
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'secondary'",
        "resolved": "\"secondary\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ds-name",
      "reflect": true
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
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "feedback": {
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
        "text": ""
      },
      "attribute": "feedback",
      "reflect": true,
      "defaultValue": "false"
    },
    "hasButton": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'end' | 'both'",
        "resolved": "\"both\" | \"end\" | \"start\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "has-button",
      "reflect": true
    },
    "hasIcon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'end' | 'both'",
        "resolved": "\"both\" | \"end\" | \"start\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "has-icon",
      "reflect": true
    }
  }; }
}
