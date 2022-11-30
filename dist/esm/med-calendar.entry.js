import { r as registerInstance, e as createEvent, h, H as Host, i as getElement } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';
import { createGesture } from './index-f49d994d.js';
import './gesture-controller-31cb6bb9.js';

const medCalendarCss = ".sc-med-calendar-h{--background:hsl(var(--med-color-neutral-1));--width:166}.sc-med-calendar-h{background:var(--background)}.header.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-bottom:24px;background-color:transparent}.header__type.sc-med-calendar{-ms-flex:1;flex:1}.header__left.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;width:210px}.header__right.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__button-icon.sc-med-calendar{font-size:18px}.header__icon.sc-med-calendar{stroke:hsl(var(--med-color-neutral-8))}.content__header.sc-med-calendar{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.content__week-day.sc-med-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:24px;width:calc(var(--width) * 1px);margin:0 auto}.content__week-type.sc-med-calendar{--font-size:12px;--font-weight:400;--line-height:12px;--color:hsl(var(--med-color-neutral-8))}.content__container.sc-med-calendar{display:grid;grid-template-columns:repeat(7, minmax(calc(var(--width) * 1px), 1fr));height:100%}.choice__type.sc-med-calendar{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-10));text-transform:none;margin-right:4px}.med-calendar--disable.sc-med-calendar-h .header__right.sc-med-calendar .med-button.sc-med-calendar{pointer-events:none}.med-color.sc-med-calendar-h{--main-color:hsl(var(--med-color-3))}.med-color-neutral.sc-med-calendar-h{--main-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-calendar-h{--main-color:hsl(var(--med-color-feedback))}";

const MedCalendar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medClick = createEvent(this, "medClick", 7);
    this.medSwipe = createEvent(this, "medSwipe", 7);
    /**
     * todo
     */
    this.disable = false;
    /**
     * todo
     */
    this.choice = 'Semana';
    /**
     * todo
     */
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
      }), style: { '--width': `${this.width}` } }, h("div", { class: "header" }, h("div", { class: "header__left" }, h("ion-button", { "icon-only": true, mode: "ios", "ds-size": "xxs", fill: "clear", onClick: () => this.onMonthClick('prev') }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })), h("med-type", { class: "header__type", token: "p16b" }, mes, " ", ano), h("ion-button", { "icon-only": true, mode: "ios", "ds-size": "xxs", fill: "clear", onClick: () => this.onMonthClick('next') }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))), h("div", { class: "header__right" }, h("ion-button", { mode: "ios", "ds-size": "xxs", fill: "clear", onClick: () => this.onChoiceClick() }, h("med-type", { class: "choice__type" }, this.choice), h("ion-icon", { class: "med-icon header__icon", name: "med-baixo" })))), h("div", { class: "content" }, h("div", { class: "content__header" }, h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Seg")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Ter")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Qua")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Qui")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Sex")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Sab")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Dom"))), h("div", { class: "content__container", ref: (el) => { this.containerEl = el; } }, h("slot", null)))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "container": ["watchPropHandler"]
  }; }
};
MedCalendar.style = medCalendarCss;

export { MedCalendar as med_calendar };
