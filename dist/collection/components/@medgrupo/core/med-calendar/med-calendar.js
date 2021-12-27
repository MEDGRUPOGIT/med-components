import { Component, Host, h, Element, Prop, Event, State } from '@stencil/core';
import { createGesture } from '../../../../utils/gesture';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedCalendar {
  constructor() {
    this.choice = 'Semana';
  }
  componentDidLoad() {
    let direction;
    const swipeGesture = createGesture({
      el: this.container,
      gestureName: 'swipe',
      onStart: () => {
      },
      onMove: (event) => {
        if (event.deltaX > 0) {
          direction = 'right';
        }
        else {
          direction = 'left';
        }
      },
      onEnd: () => {
        console.log(direction);
        this.medSwipe.emit(direction);
      }
    });
    swipeGesture.enable();
  }
  onChoiceClick() {
    this.choice = this.choice === 'Semana' ? 'Mês' : 'Semana';
    this.medClick.emit(this.choice);
  }
  onMonthClick(type) {
    this.medClick.emit(type);
  }
  render() {
    const { dsColor, calendario } = this;
    return (h(Host, { class: generateMedColor(dsColor, { 'med-calendar': true }) },
      h("div", { class: "header" },
        h("div", { class: "header__left" },
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onMonthClick('prev') },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })),
          h("med-type", { class: "header__type", token: "p16b" }, calendario),
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onMonthClick('next') },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))),
        h("div", { class: "header__right" },
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onChoiceClick() },
            h("med-type", { class: "choice__type" }, this.choice),
            h("ion-icon", { class: "med-icon header__icon", name: "med-grafico" })))),
      h("div", { class: "content" },
        h("div", { class: "content__header" },
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Seg")),
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Ter")),
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Qua")),
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Qui")),
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Sex")),
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Sab")),
          h("div", { class: "content__week-day" },
            h("med-type", { class: "content__week-type" }, "Dom"))),
        h("div", { class: "content__container", ref: (el) => { this.container = el; } },
          h("slot", null)))));
  }
  static get is() { return "med-calendar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-calendar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-calendar.css"]
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
    "calendario": {
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
      "attribute": "calendario",
      "reflect": true
    }
  }; }
  static get states() { return {
    "choice": {}
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
    }, {
      "method": "medChoiceClick",
      "name": "medChoiceClick",
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
    }, {
      "method": "medMonthClick",
      "name": "medMonthClick",
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
    }, {
      "method": "medSwipe",
      "name": "medSwipe",
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
  static get elementRef() { return "hostElement"; }
}
