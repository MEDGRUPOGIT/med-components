import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedCalendarDay {
  constructor() {
    this.active = false;
  }
  onDayClick() {
    this.medDayClick.emit();
  }
  render() {
    const { dsColor, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-calendar-day': true,
        'med-calendar-day--active': active
      }), onClick: () => this.onDayClick() },
      h("div", { class: "date" },
        h("div", { class: "date__container" },
          h("med-type", { class: "date__type" },
            h("slot", null))))));
  }
  static get is() { return "med-calendar-day"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-calendar-day.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-calendar-day.css"]
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
        "text": ""
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "medDayClick",
      "name": "medDayClick",
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
