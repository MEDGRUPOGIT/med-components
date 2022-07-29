import { Component, h, Host, Listen, Method, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedPiechart {
  constructor() {
    /**
     * todo
     */
    this.download = false;
    /**
     * todo
     */
    this.downloaded = false;
    /**
     * todo
     */
    this.value = 0;
    /**
     * todo
     */
    this.downloadProgress = 0;
    /**
     * todo
     */
    this.hideDownload = false;
    /**
     * todo
     */
    this.disabled = false;
  }
  /**
   * todo
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.download = !this.download;
  }
  /**
   * todo
   */
  Isdownloaded(event) {
    var _a;
    this.downloaded = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.downloaded;
  }
  render() {
    const { dsColor, dsSize, download, downloaded, label, value, downloadProgress, identification, index, hideDownload, disabled } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--download': download,
        'med-piechart--downloaded': downloaded,
        [`med-piechart--${dsSize}`]: dsSize !== undefined,
      }) },
      h("div", { class: "med-piechart__container" },
        h("div", { class: "med-piechart__side med-piechart__side--front" },
          h("med-type", { class: "med-piechart__text" }, label),
          h("svg", { viewBox: "0 0 36 36", style: { '--porcentagem': `${value}` } },
            h("circle", { class: "med-piechart__circle", cx: "18", cy: "18", r: "16" }),
            h("circle", { cx: "18", cy: "18", r: "16", class: "med-piechart__circle med-piechart__circle--porcentagem" }))),
        h("div", { class: "med-piechart__side med-piechart__side--back" },
          h("med-type", { class: "med-piechart__text med-piechart__text--back" }, label),
          !hideDownload && h("med-download-button", { class: "med-piechart__button", "ds-color": dsColor, index: index, value: downloadProgress, downloaded: downloaded, disabled: disabled, identification: identification })))));
  }
  static get is() { return "med-piechart"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-piechart.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-piechart.css"]
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
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm'",
        "resolved": "\"sm\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "ds-size",
      "reflect": false
    },
    "download": {
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
      "attribute": "download",
      "reflect": true,
      "defaultValue": "false"
    },
    "downloaded": {
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
      "attribute": "downloaded",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "todo"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    },
    "downloadProgress": {
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
        "text": "todo"
      },
      "attribute": "download-progress",
      "reflect": true,
      "defaultValue": "0"
    },
    "index": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "index",
      "reflect": true
    },
    "identification": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | number | undefined",
        "resolved": "number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "identification",
      "reflect": true
    },
    "hideDownload": {
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
      "attribute": "hide-download",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "todo"
      },
      "attribute": "disabled",
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
  static get listeners() { return [{
      "name": "medDownloaded",
      "method": "Isdownloaded",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
