'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const medCalendarDayCss = ":host{--border-color:hsl(var(--med-color-fb-warning))}.date{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:48px;cursor:pointer}.date__type{--font-size:12px;--font-weight:600;--line-height:11px;--color:hsl(var(--med-color-neutral-10))}.date__container{border-radius:50%;width:32px;height:32px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background)}:host(.med-calendar-day--active){--background:hsl(var(--med-color-brand-3))}:host(.med-calendar-day--outline) .date__container{border:1px solid var(--border-color)}@media (any-hover: hover){:host(.med-calendar-day:hover){--background:hsl(var(--med-color-neutral-3))}}:host(.med-color.med-calendar-day--active){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral.med-calendar-day--active){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback.med-calendar-day--active){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}";

const MedCalendarDay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    const { dsColor, active, fill } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-calendar-day': true,
        'med-calendar-day--active': active,
        [`med-calendar-day--${fill}`]: fill !== undefined
      }) }, index.h("div", { class: "date" }, index.h("div", { class: "date__container" }, index.h("med-type", { class: "date__type" }, index.h("slot", null))))));
  }
};
MedCalendarDay.style = medCalendarDayCss;

exports.med_calendar_day = MedCalendarDay;
