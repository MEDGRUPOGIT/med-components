import { Component, Element, h, Host, Prop } from "@stencil/core";
import { generateMedColor } from "../../../../@templarios/utilities/color";
export class TpChartBar {
  constructor() {
    /**
     * todo
     */
    this.labelSize = 10;
    /**
     * todo
     */
    this.height = 200;
    /**
     * todo
     */
    this.bar = {
      color: "med-color-brand-4",
      value: 0,
    };
    /**
     * todo
     */
    this.hasMarker = false;
    /**
     * todo
     */
    this.deactivated = false;
    /**
     * todo
     */
    this.marker = {
      color: "med-color-fb-caution",
      value: 0,
    };
  }
  render() {
    const { dsColor, dsName, label, labelSize, height, bar, hasMarker, deactivated, marker, } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        "tp-chart-bar": true,
        "tp-chart-bar--no-marker": !hasMarker,
        "tp-chart-bar--secondary": dsName === "secondary",
        "tp-chart-bar--deactivated": deactivated,
      }), style: {
        "--label-size": `${labelSize}px`,
        "--height": `${height}px`,
        "--value-bar": `${bar.value}%`,
        "--value-marker": `${marker.value}%`,
      } },
      h("div", { class: "tp-chart-bar__bar-container" },
        h("div", { class: { "tp-chart-bar__bar": true, [bar.color]: true } }),
        h("div", { class: { "tp-chart-bar__marker": true, [marker.color]: true } })),
      label && (h("ion-label", { class: "tp-chart-bar__label", "ds-color": "neutral-95" }, label))));
  }
  static get is() { return "tp-chart-bar"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["tp-chart-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tp-chart-bar.css"]
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
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"secondary\"",
        "resolved": "\"secondary\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "ds-name",
      "reflect": true
    },
    "label": {
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
      "attribute": "label",
      "reflect": true
    },
    "labelSize": {
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
        "text": "todo"
      },
      "attribute": "label-size",
      "reflect": true,
      "defaultValue": "10"
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
        "text": "todo"
      },
      "attribute": "height",
      "reflect": true,
      "defaultValue": "200"
    },
    "bar": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TpChartBarItem",
        "resolved": "TpChartBarItem",
        "references": {
          "TpChartBarItem": {
            "location": "import",
            "path": "../../../../@templarios/interfaces/chart-bar.interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "defaultValue": "{\r\n    color: \"med-color-brand-4\",\r\n    value: 0,\r\n  }"
    },
    "hasMarker": {
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
        "text": "todo"
      },
      "attribute": "has-marker",
      "reflect": true,
      "defaultValue": "false"
    },
    "deactivated": {
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
        "text": "todo"
      },
      "attribute": "deactivated",
      "reflect": true,
      "defaultValue": "false"
    },
    "marker": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TpChartBarItem",
        "resolved": "TpChartBarItem",
        "references": {
          "TpChartBarItem": {
            "location": "import",
            "path": "../../../../@templarios/interfaces/chart-bar.interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "defaultValue": "{\r\n    color: \"med-color-fb-caution\",\r\n    value: 0,\r\n  }"
    }
  }; }
  static get elementRef() { return "host"; }
}
