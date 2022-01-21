import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedSemana {
  constructor() {
    /**
      * Define o estado do componente.
      */
    this.active = false;
  }
  ;
  render() {
    const { dsColor, active, skin } = this;
    let textContainerEl;
    let piechartContainerEl;
    textContainerEl = (h("div", { class: "med-semana__heading-container" },
      h("div", { class: "med-semana__text-container" },
        h("med-type", { class: "med-semana__text", "ds-color": "neutral-10", token: "p10" }, "Semana"),
        h("med-type", { class: "med-semana__text", "ds-color": "neutral-10", token: "p16b" }, "01")),
      h("div", { class: "med-semana__icon" })));
    piechartContainerEl = (h("div", { class: "med-semana__chart-container med-scrollbar" },
      h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, text: "nef 01", value: 25 }),
      h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, text: "nef 01", value: 75 })));
    if (skin) {
      textContainerEl = (h("div", { class: "med-semana__heading-container" },
        h("div", { class: "med-semana__text-container" },
          h("med-type", { class: "med-semana__text", "ds-color": "neutral-10", token: "p16b" }, "Semana"),
          h("med-type", { class: "med-semana__text med-semana__text--number", "ds-color": "neutral-10", token: "p16b" }, "01"),
          h("div", { class: "med-semana__week-container" },
            h("med-type", { class: "med-semana__auxiliar", "ds-color": "neutral-7", token: "p14" }, "De"),
            h("med-type", { class: "med-semana__auxiliar", "ds-color": "neutral-7", token: "p14" }, "24/08"),
            h("med-type", { class: "med-semana__auxiliar", "ds-color": "neutral-7", token: "p14" }, "at\u00E9"),
            h("med-type", { class: "med-semana__auxiliar", "ds-color": "neutral-7", token: "p14" }, "24/08")))));
      piechartContainerEl = (h("div", { class: "med-semana__chart-container med-scrollbar" },
        h("div", { class: "med-semana__chart-row" },
          h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, text: "nef 01", value: 25 }),
          h("med-type", { class: "med-semana__description", token: "p14" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum."),
          h("med-type", { "ds-color": "neutral-10", token: "p14" }, "2h30"),
          h("med-download-button", { "ds-color": dsColor })),
        h("div", { class: "med-semana__chart-row" },
          h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, text: "nef 01", value: 75 }),
          h("med-type", { class: "med-semana__description", token: "p14" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum."),
          h("med-type", { "ds-color": "neutral-10", token: "p14" }, "2h30"),
          h("med-download-button", { "ds-color": dsColor }))));
    }
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-semana': true,
        'med-semana--active': active,
        [`med-semana--skin-${skin}`]: skin !== undefined,
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
        "text": "Define a skin do componente."
      },
      "attribute": "skin",
      "reflect": true
    }
  }; }
}
