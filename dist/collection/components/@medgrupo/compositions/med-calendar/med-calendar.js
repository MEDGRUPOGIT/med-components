import { Component, Host, h, Element, Prop, Event, State, Watch } from '@stencil/core';
import { createGesture } from '../../../../utils/gesture';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedCalendar {
  constructor() {
    this.disable = false;
    this.choice = 'Semana';
    this.width = 166;
  }
  connectedCallback() {
    this.init();
    const resizeObserver = new ResizeObserver(() => {
      this.init();
    });
    if (this.container) {
      const container = document.querySelector(`.${this.container}`);
      resizeObserver.observe(container);
    }
    else {
      resizeObserver.observe(document.body);
    }
  }
  init() {
    if (this.container) {
      const container = document.querySelector(`.${this.container}`);
      const containerWidth = container === null || container === void 0 ? void 0 : container.clientWidth;
      if (containerWidth < 1200) {
        this.width = containerWidth / 7;
      }
    }
    else {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1200) {
        this.width = windowWidth / 7;
      }
    }
  }
  watchPropHandler(newValue) {
    if (newValue !== this.container) { }
    this.init();
  }
  componentDidLoad() {
    let direction;
    const options = {
      el: this.containerEl,
      gestureName: 'swipe',
      onStart: () => { },
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
  /* private onGraficoClick() {
    this.medClick.emit('graph');
  } */
  render() {
    const { dsColor, mes, ano, disable } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-calendar': true,
        'med-calendar--disable': disable,
      }), style: { '--width': `${this.width}` } },
      h("div", { class: "header" },
        h("div", { class: "header__left" },
          h("ion-button", { "icon-only": true, mode: "ios", "ds-size": "xxs", fill: "clear", onClick: () => this.onMonthClick('prev') },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })),
          h("med-type", { class: "header__type", token: "p16b" },
            mes,
            " ",
            ano),
          h("ion-button", { "icon-only": true, mode: "ios", "ds-size": "xxs", fill: "clear", onClick: () => this.onMonthClick('next') },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))),
        h("div", { class: "header__right" },
          h("ion-button", { mode: "ios", "ds-size": "sm", fill: "clear", onClick: () => this.onChoiceClick() },
            h("med-type", { class: "choice__type" }, this.choice),
            h("ion-icon", { class: "med-icon header__icon", name: "med-baixo" })))),
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
        h("div", { class: "content__container", ref: (el) => { this.containerEl = el; } },
          h("slot", null)))));
  }
  static get is() { return "med-calendar"; }
  static get encapsulation() { return "scoped"; }
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
    },
    "container": {
      "type": "string",
      "mutable": true,
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
      "attribute": "container",
      "reflect": true
    },
    "disable": {
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
      "attribute": "disable",
      "reflect": true,
      "defaultValue": "false"
    },
    "choice": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "choice",
      "reflect": true,
      "defaultValue": "'Semana'"
    }
  }; }
  static get states() { return {
    "width": {}
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
  static get watchers() { return [{
      "propName": "container",
      "methodName": "watchPropHandler"
    }]; }
}
