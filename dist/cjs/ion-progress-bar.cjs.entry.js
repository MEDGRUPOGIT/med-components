/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const ionicGlobal = require('./ionic-global-b146ab44.js');
const helpers = require('./helpers-a2cc981d.js');
const color = require('./color-7939264c.js');
const theme = require('./theme-cef66eda.js');
require('./platform-df0a78a3.js');

const iosProgressBarMedCss = ":host{--background:hsl(var(--med-color-brand-1));--progress-background:hsl(var(--med-color-brand-4));--buffer-background:transparent;--progress-correct-background:hsl(var(--med-color-fb-success));--height:4px;display:block;position:relative;contain:strict;overflow:hidden;width:100%;height:var(--height)}.progress-container{display:-ms-flexbox;display:flex;background-color:var(--background)}:host(.in-med-header) .progress-container{background:hsl(var(--med-color-neutral-8));border-radius:0}:host(.in-med-header) .progress--correct{background:hsl(var(--med-color-brand-4))}.progress{width:100%;height:100%;height:var(--height);background:var(--progress-background)}.progress--correct{background:var(--progress-correct-background)}:host(.med-color){--progress-background:hsl(var(--med-color-4));--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral));--background:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback));--background:hsl(var(--med-color-feedback-contrast))}";

const mdProgressBarMedCss = ":host{--background:hsl(var(--med-color-brand-1));--progress-background:hsl(var(--med-color-brand-4));--buffer-background:transparent;--progress-correct-background:hsl(var(--med-color-fb-success));--height:4px;display:block;position:relative;contain:strict;overflow:hidden;width:100%;height:var(--height)}.progress-container{display:-ms-flexbox;display:flex;background-color:var(--background)}:host(.in-med-header) .progress-container{background:hsl(var(--med-color-neutral-8));border-radius:0}:host(.in-med-header) .progress--correct{background:hsl(var(--med-color-brand-4))}.progress{width:100%;height:100%;height:var(--height);background:var(--progress-background)}.progress--correct{background:var(--progress-correct-background)}:host(.med-color){--progress-background:hsl(var(--med-color-4));--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral));--background:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback));--background:hsl(var(--med-color-feedback-contrast))}";

const ProgressBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.type = 'determinate';
    this.reversed = false;
    this.value = 0;
    this.buffer = 1;
    this.color = undefined;
  }
  render() {
    const { dsColor, type, reversed, value, buffer } = this;
    const paused = ionicGlobal.config.getBoolean('_testing');
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: color.generateMedColor(dsColor, {
        [mode]: true,
        'med-progress-bar': true,
        [`progress-bar-${type}`]: true,
        'progress-paused': paused,
        'progress-bar-reversed': document.dir === 'rtl' ? !reversed : reversed,
        'in-med-header': theme.hostContext('med-header', this.el),
      }) }, type === 'indeterminate'
      ? renderIndeterminate()
      : renderProgress(value, buffer)));
  }
  get el() { return index.getElement(this); }
};
const renderIndeterminate = () => {
  return (index.h("div", { part: "track", class: "progress-buffer-bar" }, index.h("div", { class: "indeterminate-bar-primary" }, index.h("span", { part: "progress", class: "progress-indeterminate" })), index.h("div", { class: "indeterminate-bar-secondary" }, index.h("span", { part: "progress", class: "progress-indeterminate" }))));
};
const renderProgress = (value, buffer) => {
  const finalValue = value !== 0 ? (value * 100) : 1;
  const unit = value !== 0 ? '%' : 'px';
  const finalBuffer = helpers.clamp(0, buffer, 1);
  return [
    index.h("div", { class: "progress-container" }, index.h("div", { part: "progress", class: `progress ${finalValue === 100 ? 'progress--correct' : ''}`, style: { width: `${finalValue}${unit}` } })),
    /**
     * Buffer circles with two container to move
     * the circles behind the buffer progress
     * with respecting the animation.
     * When finalBuffer === 1, we use display: none
     * instead of removing the element to avoid flickering.
     */
    index.h("div", { class: { 'buffer-circles-container': true, 'ion-hide': finalBuffer === 1 }, style: { transform: `translateX(${finalBuffer * 100}%)` } }, index.h("div", { class: "buffer-circles-container", style: { transform: `translateX(-${finalBuffer * 100}%)` } }, index.h("div", { part: "stream", class: "buffer-circles" }))),
    index.h("div", { part: "track", class: "progress-buffer-bar", style: { transform: `translateX(${finalBuffer})` } }),
  ];
};
ProgressBar.style = {
  ios: iosProgressBarMedCss,
  md: mdProgressBarMedCss
};

exports.ion_progress_bar = ProgressBar;
