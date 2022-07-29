import { Component, h, Host, Prop, State } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedSemana {
  constructor() {
    /**
     * todo
     */
    this.active = false;
    /**
     * todo
     */
    this.disabled = false;
    /**
     * todo
     */
    this.hideDownload = false;
    /**
     * todo
     */
    this.flipped = false;
  }
  handleFlip() {
    this.flipped = !this.flipped;
  }
  createTextContainerEl(content, skin) {
    if (skin === "lista") {
      return (h("div", { class: "med-semana__heading-container" },
        h("div", { class: "med-semana__text-container" },
          h("med-type", { class: "med-semana__text" }, content === null || content === void 0 ? void 0 : content.Title),
          h("med-type", { class: "med-semana__text med-semana__text--number" }, content === null || content === void 0 ? void 0 : content.Numero),
          h("div", { class: "med-semana__week-container" },
            h("med-type", { token: "p16", "ds-color": "neutral-7", class: "med-semana__auxiliar" }, "De"),
            h("med-type", { token: "p16", "ds-color": "neutral-7", class: "med-semana__auxiliar" }, content === null || content === void 0 ? void 0 : content.DataInicio),
            h("med-type", { token: "p16", "ds-color": "neutral-7", class: "med-semana__auxiliar" }, "at\u00E9"),
            h("med-type", { token: "p16", "ds-color": "neutral-7", class: "med-semana__auxiliar" }, content === null || content === void 0 ? void 0 : content.DataFim)))));
    }
    else {
      return (h("div", { class: "med-semana__heading-container" },
        h("div", { class: "med-semana__text-container" },
          h("div", { class: `med-semana__text-animate med-semana__text-animate--default ${this.flipped ? "med-semana__text-animate--flipped" : ""}` },
            h("med-type", { class: "med-semana__semana" }, content === null || content === void 0 ? void 0 : content.Title),
            h("med-type", { class: "med-semana__numero" }, content === null || content === void 0 ? void 0 : content.Numero)),
          h("div", { class: `med-semana__text-animate med-semana__text-animate--back ${this.flipped ? "med-semana__text-animate--flipped" : ""}` },
            h("med-type", { class: "med-semana__back" }, content === null || content === void 0 ? void 0 : content.DataInicio),
            h("med-type", { class: "med-semana__back" }, content === null || content === void 0 ? void 0 : content.DataFim))),
        h("div", { class: `med-semana__button-flip ${this.flipped ? "med-semana__button-flip--active" : ""}`, role: "button", onClick: () => this.handleFlip() })));
    }
  }
  createPieChartEl(Itens, skin) {
    if (skin === "lista") {
      return (h("div", { class: "med-semana__chart-container" }, Itens === null || Itens === void 0 ? void 0 : Itens.map((item, index) => (h("div", { class: "med-semana__chart-row" },
        h("med-piechart", { class: "med-semana__chart", "ds-color": this.dsColor, "ds-size": this.dsSize, label: item.Nome, value: item.PercentLido, "download-progress": item.DownloadProgress, downloaded: item.Downloaded, download: this.flipped, disabled: this.disabled, index: index, identification: item.Id, "hide-download": true }),
        h("med-type", { class: "med-semana__description" }, item.Descricao),
        h("div", { class: "med-semana__tempo-container" },
          h("med-type", { class: "med-semana__tempo" }, item === null || item === void 0 ? void 0 : item.Time),
          h("med-download-button", { class: "med-semana__download-button", "ds-color": this.dsColor, value: item.DownloadProgress, downloaded: item.Downloaded, disabled: this.disabled, index: index, identification: item.Id })))))));
    }
    else {
      return (h("div", { class: "med-semana__chart-container" }, Itens === null || Itens === void 0 ? void 0 : Itens.map((item) => (h("med-piechart", { class: "med-semana__chart", "ds-color": this.dsColor, "ds-size": this.dsSize, label: item.Nome, value: item.PercentLido, "download-progress": item.DownloadProgress, downloaded: item.Downloaded, download: this.flipped, disabled: this.disabled })))));
    }
  }
  render() {
    const { dsColor, dsSize, active, skin, content, hideDownload } = this;
    let textContainerEl;
    let piechartContainerEl;
    textContainerEl = this.createTextContainerEl(content, skin);
    piechartContainerEl = this.createPieChartEl(content.Itens, skin);
    return (h(Host, { class: generateMedColor(dsColor, {
        "med-semana": true,
        "med-semana--active": active,
        "med-semana--hide-download": hideDownload,
        [`med-semana--skin-${skin}`]: skin !== undefined,
        [`med-semana--${dsSize}`]: dsSize !== undefined,
      }) },
      textContainerEl,
      piechartContainerEl));
  }
  static get is() { return "med-semana"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-semana.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-semana.css"]
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
        "text": "todo"
      },
      "attribute": "active",
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
    },
    "skin": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'lista'",
        "resolved": "\"lista\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "skin",
      "reflect": true
    },
    "content": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MedSemanaInterface",
        "resolved": "MedSemanaInterface",
        "references": {
          "MedSemanaInterface": {
            "location": "import",
            "path": "../../../../@templarios/interfaces/semana.interface"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      }
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
    }
  }; }
  static get states() { return {
    "flipped": {}
  }; }
}
