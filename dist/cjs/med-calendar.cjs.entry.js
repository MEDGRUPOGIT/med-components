'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const index$1 = require('./index-adf3c519.js');
const medTheme = require('./med-theme-42add9fc.js');
require('./gesture-controller-bcfe01ec.js');

const medCalendarCss = ":host{--background:hsl(var(--med-color-neutral-1));--width:166}:host{background:var(--background)}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-bottom:24px}.header__type{-ms-flex:1;flex:1}.header__left{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;width:210px}.header__right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__button-icon{font-size:18px}.header__icon{stroke:hsl(var(--med-color-neutral-8))}.content__header{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.content__week-day{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:24px;width:calc(var(--width) * 1px);margin:0 auto}.content__week-type{--font-size:12px;--font-weight:400;--line-height:12px;--color:hsl(var(--med-color-neutral-8))}.content__container{display:grid;grid-template-columns:repeat(7, minmax(calc(var(--width) * 1px), 1fr));height:100%}.choice__type{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-10));text-transform:none}:host(.med-calendar--disable) .header__right .med-button{pointer-events:none}:host(.med-color){--main-color:hsl(var(--med-color-3))}:host(.med-color-neutral){--main-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--main-color:hsl(var(--med-color-feedback))}";

const MedCalendar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medClick = index.createEvent(this, "medClick", 7);
    this.medSwipe = index.createEvent(this, "medSwipe", 7);
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
    this.gesture = index$1.createGesture(options);
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
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-calendar': true,
        'med-calendar--disable': disable,
      }), style: { '--width': `${this.width}` } }, index.h("div", { class: "header" }, index.h("div", { class: "header__left" }, index.h("ion-button", { "ds-size": "sm", "ds-name": "tertiary", onClick: () => this.onMonthClick('prev') }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })), index.h("med-type", { class: "header__type", token: "p16b" }, mes, " ", ano), index.h("ion-button", { "ds-size": "sm", "ds-name": "tertiary", onClick: () => this.onMonthClick('next') }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))), index.h("div", { class: "header__right" }, index.h("ion-button", { "ds-name": "tertiary", onClick: () => this.onChoiceClick() }, index.h("med-type", { class: "choice__type" }, this.choice), index.h("ion-icon", { class: "med-icon header__icon", name: "med-baixo" })))), index.h("div", { class: "content" }, index.h("div", { class: "content__header" }, index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Seg")), index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Ter")), index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Qua")), index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Qui")), index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Sex")), index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Sab")), index.h("div", { class: "content__week-day" }, index.h("med-type", { class: "content__week-type" }, "Dom"))), index.h("div", { class: "content__container", ref: (el) => { this.containerEl = el; } }, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "container": ["watchPropHandler"]
  }; }
};
MedCalendar.style = medCalendarCss;

exports.med_calendar = MedCalendar;
