import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedPiechart {
  constructor() {
    /**
      * Define o estado de download do componente.
      */
    this.download = false;
    /**
      * Define o estado de downloaded do componente.
      */
    this.downloaded = false;
    /**
      * Define o valor do progresso do componente.
      */
    this.value = 0;
  }
  /**
   * Define o estado do componente programaticamente.
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.download = !this.download;
  }
  render() {
    const { dsColor, dsSize, download, downloaded, label, value } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--download': download,
        'med-piechart--downloaded': downloaded,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      }) },
      h("div", { class: "med-piechart__container" },
        h("div", { class: "med-piechart__side med-piechart__side--front" },
          h("med-type", { class: "med-piechart__text" }, label),
          h("svg", { viewBox: "0 0 36 36", style: { '--porcentagem': `${value}` } },
            h("circle", { class: "med-piechart__circle", cx: "18", cy: "18", r: "16" }),
            h("circle", { cx: "18", cy: "18", r: "16", class: "med-piechart__circle med-piechart__circle--porcentagem" }))),
        h("div", { class: "med-piechart__side med-piechart__side--back" },
          h("med-type", { class: "med-piechart__text med-piechart__text--back" }, label),
          h("med-download-button", { class: "med-piechart__button", "ds-color": dsColor, value: value, downloaded: downloaded })))));
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
        "original": "'sm'",
        "resolved": "\"sm\" | undefined",
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
        "text": "Define o estado de download do componente."
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
        "text": "Define o estado de downloaded do componente."
      },
      "attribute": "downloaded",
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
        "text": "Define o valor do progresso do componente."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
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
        "text": "Define a porcentagem a ser mostrada."
      },
      "attribute": "label",
      "reflect": true
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
