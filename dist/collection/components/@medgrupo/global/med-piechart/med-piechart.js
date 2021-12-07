import { Component, Host, h, Prop, Method, State, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedPiechart {
  constructor() {
    /**
      * Define o estado do componente.
      */
    this.active = false;
    /**
     * Define o progresso a ser mostrado.
     */
    this.progresso = 0;
    // ////////////////////
    // Botão de download
    // ////////////////////
    /**
      * Define a porcentagem de download do botão de download.
      */
    this.downloadProgresso = 0;
    /**
      * Define o estado do componente.
      */
    this.downloading = false;
    /**
      * Define o estado do componente.
      */
    this.downloaded = false;
    this.firstFlip = true;
    this.teste = false;
  }
  /**
    * TODO
    */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.active = !this.active;
  }
  activeChanged() {
    console.log(this.active);
    if (!this.firstFlip) {
      this.teste = !this.teste;
    }
    this.firstFlip = false;
  }
  render() {
    const { dsColor, active, progresso } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--active': active,
        'med-piechart--reverse': this.teste,
      }) },
      h("svg", { viewBox: "0 0 36 36", style: { '--porcentagem': `${progresso}` }, class: "draw" },
        h("circle", { class: "draw__background", cx: "18", cy: "18", r: "16" }),
        h("circle", { class: "draw__background draw__background--porcentagem", cx: "18", cy: "18", r: "16" }),
        h("text", { class: "draw__text", x: "18", y: "17" }, "NEF"),
        h("text", { class: "draw__text", x: "18", y: "27" }, "1")),
      h("div", { class: "draw-flip" },
        h("med-caption", { class: "draw-flip__text", dsSize: "sm" },
          h("label", null, "NEF")),
        h("med-caption", { class: "draw-flip__text", dsSize: "sm" },
          h("label", null, "1")))));
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
    "active": {
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
        "text": "Define o estado do componente."
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "progresso": {
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
        "text": "Define o progresso a ser mostrado."
      },
      "attribute": "progresso",
      "reflect": true,
      "defaultValue": "0"
    },
    "downloadProgresso": {
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
        "text": "Define a porcentagem de download do bot\u00E3o de download."
      },
      "attribute": "download-progresso",
      "reflect": true,
      "defaultValue": "0"
    },
    "downloading": {
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
      "attribute": "downloading",
      "reflect": true,
      "defaultValue": "false"
    },
    "downloaded": {
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
      "attribute": "downloaded",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "firstFlip": {},
    "teste": {}
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
        "text": "TODO",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeChanged"
    }]; }
}
