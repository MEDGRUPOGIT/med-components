import { r as registerInstance, e as createEvent, h, H as Host, i as getElement } from './index-70672e81.js';
import { createGesture } from './index-a148eeb5.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';
import './gesture-controller-cb973372.js';

const medCalendarCss = ":root{--med-font-family-brand:\"fsemeric\";--med-font-family-base:\"fsemeric\";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--background:hsl(var(--med-color-neutral-1));--width:166}:host{background:var(--background)}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-bottom:24px}.header__type{-ms-flex:1;flex:1}.header__left{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;width:200px}.header__right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__button-icon{font-size:18px}.header__icon{stroke:hsl(var(--med-color-neutral-8))}.content__header{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.content__week-day{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:24px;width:calc(var(--width) * 1px)}.content__week-type{--font-size:12px;--font-weight:400;--line-height:12px;--color:hsl(var(--med-color-neutral-8))}.content__container{display:grid;grid-template-columns:repeat(7, minmax(calc(var(--width) * 1px), 1fr));height:100%}.choice__type{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-8));text-transform:none}:host(.med-color){--main-color:hsl(var(--med-color-3))}:host(.med-color-neutral){--main-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--main-color:hsl(var(--med-color-feedback))}";

const MedCalendar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medClick = createEvent(this, "medClick", 7);
    this.medSwipe = createEvent(this, "medSwipe", 7);
    this.choice = 'Semana';
    this.width = 166;
  }
  connectedCallback() {
    const resizeObserver = new ResizeObserver(() => {
      this.init();
    });
    resizeObserver.observe(document.body);
  }
  init() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1200) {
      this.width = windowWidth / 7;
    }
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
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, { 'med-calendar': true }), style: { '--width': `${this.width}` } }, h("div", { class: "header" }, h("div", { class: "header__left" }, h("ion-button", { "ds-name": "tertiary", onClick: () => this.onMonthClick('prev') }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })), h("med-type", { class: "header__type", token: "p16b" }, mes, " ", ano), h("ion-button", { "ds-name": "tertiary", onClick: () => this.onMonthClick('next') }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))), h("div", { class: "header__right" }, h("ion-button", { "ds-name": "tertiary", onClick: () => this.onChoiceClick() }, h("med-type", { class: "choice__type" }, this.choice), h("ion-icon", { class: "med-icon header__icon", name: "med-baixo" })), h("ion-button", { "ds-name": "tertiary", onClick: () => this.onGraficoClick() }, h("ion-icon", { class: "med-icon header__icon", name: "med-grafico" })))), h("div", { class: "content" }, h("div", { class: "content__header" }, h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Seg")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Ter")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Qua")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Qui")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Sex")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Sab")), h("div", { class: "content__week-day" }, h("med-type", { class: "content__week-type" }, "Dom"))), h("div", { class: "content__container", ref: (el) => { this.container = el; } }, h("slot", null)))));
  }
  get hostElement() { return getElement(this); }
};
MedCalendar.style = medCalendarCss;

export { MedCalendar as med_calendar };
