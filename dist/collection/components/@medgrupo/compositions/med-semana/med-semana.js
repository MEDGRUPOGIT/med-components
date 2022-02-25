import { Component, Host, h, Prop, State } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedSemana {
  constructor() {
    /**
      * Define o estado active do componente.
      */
    this.active = false;
    this.flipped = false;
  }
  ;
  handleFlip() {
    this.flipped = !this.flipped;
  }
  render() {
    const { dsColor, active, skin } = this;
    let textContainerEl;
    let piechartContainerEl;
    textContainerEl = (h("div", { class: "med-semana__heading-container" },
      h("div", { class: "med-semana__text-container" },
        h("div", { class: `med-semana__text-animate med-semana__text-animate--default ${this.flipped ? 'med-semana__text-animate--flipped' : ''}` },
          h("med-type", { class: "med-semana__semana" }, "Semana"),
          h("med-type", { class: "med-semana__numero" }, "01")),
        h("div", { class: `med-semana__text-animate med-semana__text-animate--back ${this.flipped ? 'med-semana__text-animate--flipped' : ''}` },
          h("med-type", { class: "med-semana__back" }, "16/08"),
          h("med-type", { class: "med-semana__back" }, "24/08"))),
      h("div", { class: `med-semana__button-flip ${this.flipped ? 'med-semana__button-flip--active' : ''}`, role: "button", onClick: () => this.handleFlip() })));
    piechartContainerEl = (h("div", { class: "med-semana__chart-container med-scrollbar" },
      h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, label: "nef 01", value: 25, download: this.flipped }),
      h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, label: "nef 01", value: 75, download: this.flipped, downloaded: true })));
    if (skin) {
      textContainerEl = (h("div", { class: "med-semana__heading-container" },
        h("div", { class: "med-semana__text-container" },
          h("med-type", { class: "med-semana__text" }, "Semana"),
          h("med-type", { class: "med-semana__text med-semana__text--number" }, "01"),
          h("div", { class: "med-semana__week-container" },
            h("med-type", { class: "med-semana__auxiliar" }, "De"),
            h("med-type", { class: "med-semana__auxiliar" }, "24/08"),
            h("med-type", { class: "med-semana__auxiliar" }, "at\u00E9"),
            h("med-type", { class: "med-semana__auxiliar" }, "24/08")))));
      piechartContainerEl = (h("div", { class: "med-semana__chart-container med-scrollbar" },
        h("div", { class: "med-semana__chart-row" },
          h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, label: "nef 01", value: 25 }),
          h("med-type", { class: "med-semana__description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum."),
          h("div", { class: "med-semana__tempo-container" },
            h("med-type", { class: "med-semana__tempo" }, "2h30"),
            h("med-download-button", { class: "med-semana__download-button", "ds-color": dsColor }))),
        h("div", { class: "med-semana__chart-row" },
          h("med-piechart", { class: "med-semana__chart", "ds-color": dsColor, label: "nef 01", value: 75 }),
          h("med-type", { class: "med-semana__description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum."),
          h("div", { class: "med-semana__tempo-container" },
            h("med-type", { class: "med-semana__tempo" }, "2h30"),
            h("med-download-button", { class: "med-semana__download-button", "ds-color": dsColor })))));
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
        "text": "Define o estado active do componente."
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
  static get states() { return {
    "flipped": {}
  }; }
}
