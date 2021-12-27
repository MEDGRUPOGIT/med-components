import { Component, Host, h, Element, Prop, Event, State } from '@stencil/core';
import { createGesture } from '../../../../utils/gesture';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedCalendar {
  constructor() {
    this.choice = 'Semana';
  }
  componentDidLoad() {
    let direction;
    const options = {
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
        this.medSwipe.emit(direction);
      }
    };
    this.gesture = createGesture(options);
    this.gesture.enable();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
    }
  }
  onChoiceClick() {
    this.choice = this.choice === 'Semana' ? 'Mês' : 'Semana';
    this.medClick.emit(this.choice);
  }
  onMonthClick(type) {
    this.medClick.emit(type);
  }
  onGraficoClick() {
    this.medClick.emit('graph');
  }
  render() {
    const { dsColor, mes, ano } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, { 'med-calendar': true }) },
      h("div", { class: "header" },
        h("div", { class: "header__left" },
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onMonthClick('prev') },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })),
          h("med-type", { class: "header__type", token: "p16b" },
            mes,
            " ",
            ano),
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onMonthClick('next') },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))),
        h("div", { class: "header__right" },
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onChoiceClick() },
            h("med-type", { class: "choice__type" }, this.choice),
            h("ion-icon", { class: "med-icon header__icon", name: "med-baixo" })),
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.onGraficoClick() },
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
    "mes": {
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
      "attribute": "mes",
      "reflect": true
    },
    "ano": {
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
      "attribute": "ano",
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
