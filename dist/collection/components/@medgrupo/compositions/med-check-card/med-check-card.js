import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedCheckCard {
  constructor() {
    this.alert = false;
    this.tooltipPlacement = 'top';
    this.tooltipCollapsed = true;
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    const { dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal, iconName, tooltipPlacement, tooltipCollapsed, tooltipHeading, tooltipContent } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-check-card': true,
        'med-check-card--alert': alert,
      }) },
      h("med-base", { class: "med-check-card__base" },
        h("div", { class: "med-check-card__input-container" },
          h("slot", { name: "input" })),
        h("div", { class: "med-check-card__container", onClick: () => this.onClick() },
          h("div", { class: "med-check-card__text-container" },
            h("med-type", { token: "p16xb" }, titulo),
            h("div", { class: "med-check-card__info-container" },
              h("ion-icon", { class: "med-check-card__icon med-icon med-icon--xxs", name: iconName }),
              h("med-type", { class: "med-check-card__subtitulo", token: "p12xb" }, categoria),
              !dataInicial && !dataFinal && h("med-type", { class: "med-check-card__hora", token: "p12x" },
                horaInicial,
                " \u2013 ",
                horaFinal)),
            dataInicial && dataFinal && h("med-type", { class: "med-check-card__data", token: "p12x" },
              dataInicial,
              " - ",
              horaInicial,
              " at\u00E9 ",
              dataFinal,
              " - ",
              horaFinal))),
        h("div", { class: alert ? 'med-check-card__tooltip-container' : '' },
          h("med-tooltip", { class: "med-check-card__tooltip", "ds-color": "fb-warning", placement: tooltipPlacement, position: "end", collapsed: tooltipCollapsed },
            h("ion-icon", { class: "med-check-card__alert-icon med-icon med-icon--sm", name: "med-marcar", slot: "input" }),
            h("div", { slot: "content" },
              h("div", { class: "med-check-card__tooltip-header" },
                h("med-type", { "ds-color": "neutral-01", token: "p14b" }, tooltipHeading),
                h("ion-icon", { class: "med-check-card__tooltip-icon med-icon med-icon--sm", name: "med-fechar" })),
              h("med-type", { "ds-color": "neutral-01", token: "p14x", slot: "content" }, tooltipContent)))))));
  }
  static get is() { return "med-check-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-check-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-check-card.css"]
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
    "alert": {
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
      "attribute": "alert",
      "reflect": true,
      "defaultValue": "false"
    },
    "titulo": {
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
        "text": ""
      },
      "attribute": "titulo",
      "reflect": true
    },
    "categoria": {
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
        "text": ""
      },
      "attribute": "categoria",
      "reflect": true
    },
    "horaInicial": {
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
        "text": ""
      },
      "attribute": "hora-inicial",
      "reflect": true
    },
    "horaFinal": {
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
        "text": ""
      },
      "attribute": "hora-final",
      "reflect": true
    },
    "dataInicial": {
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
        "text": ""
      },
      "attribute": "data-inicial",
      "reflect": true
    },
    "dataFinal": {
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
        "text": ""
      },
      "attribute": "data-final",
      "reflect": true
    },
    "finalizada": {
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
        "text": ""
      },
      "attribute": "finalizada",
      "reflect": true
    },
    "iconName": {
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
        "text": ""
      },
      "attribute": "icon-name",
      "reflect": true
    },
    "tooltipPlacement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"top\" | \"bottom\" | \"left\" | \"right\" | undefined",
        "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "tooltip-placement",
      "reflect": true,
      "defaultValue": "'top'"
    },
    "tooltipCollapsed": {
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
        "text": ""
      },
      "attribute": "tooltip-collapsed",
      "reflect": true,
      "defaultValue": "true"
    },
    "tooltipHeading": {
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
        "text": ""
      },
      "attribute": "tooltip-heading",
      "reflect": true
    },
    "tooltipContent": {
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
        "text": ""
      },
      "attribute": "tooltip-content",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "medClick",
      "name": "medClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
