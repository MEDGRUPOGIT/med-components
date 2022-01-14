'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const ionicGlobal = require('./ionic-global-c609be80.js');
const helpers = require('./helpers-ab0db03b.js');
const theme = require('./theme-21d701cc.js');
const medTheme = require('./med-theme-42add9fc.js');

const iosProgressBarMedCss = ":host{--background:transparent;--progress-background:hsl(var(--med-color-brand-4));--buffer-background:transparent;--color-label-skin:hsl(var(--med-color-brand-4));--color-progress-skin:hsl(var(--med-color-brand-4));--progress-correct-background:hsl(var(--med-color-fb-success));--percentage-color:hsl(var(--med-color-neutral-10));--height:8px;display:block;position:relative;contain:strict;overflow:hidden;width:100%;height:var(--height)}.progress-container{display:-ms-flexbox;display:flex;border-radius:100px;background-color:var(--background)}:host(.in-med-header) .progress-container{background:hsl(var(--med-color-neutral-8));border-radius:0}:host(.in-med-header) .progress{border-top-left-radius:0;border-bottom-left-radius:0}:host(.in-med-header) .progress__percentage{display:none}:host(.in-med-header) .progress--correct{background:hsl(var(--med-color-brand-4));border-top-right-radius:0;border-bottom-right-radius:0}.progress{width:100%;height:100%;border-radius:100px;height:var(--height);background:var(--progress-background)}.progress__percentage{font-size:var(--med-font-size-nano);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);color:var(--percentage-color);margin-left:var(--med-spacing-inline-xxxs);display:none}.progress--correct{background:var(--progress-correct-background)}:host(.percentage) .progress__percentage{display:block}:host(.med-color){--progress-background:hsl(var(--med-color-4))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback))}:host(.med-progress-bar--minimalist){--background:hsl(var(--med-color-brand-1));--progress-correct-background:hsl(var(--med-color-brand-4));--height:4px}:host(.med-progress-bar--minimalist) .progress{border-radius:0}:host(.med-progress-bar--minimalist) .progress__percentage{display:none}:host(.med-progress-bar--minimalist) .progress-container{border-radius:0}:host(.med-color.med-progress-bar--minimalist){--background:hsl(var(--med-color-1));--progress-correct-background:hsl(var(--med-color-4))}:host(.med-color-neutral.med-progress-bar--minimalist){--background:transparent;--progress-correct-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-progress-bar--minimalist){--background:transparent;--progress-correct-background:hsl(var(--med-color-feedback))}:host(.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:var(--color-progress-skin);--percentage-color:var(--color-label-skin);--height:10px}:host(.med-progress-bar--skin) .progress-container{width:96%}:host(.med-progress-bar--skin) .progress__percentage{position:absolute;right:0px}:host(.med-color.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:hsl(var(--med-color-4));--percentage-color:hsl(var(--med-color-4))}:host(.med-color-neutral.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:hsl(var(--med-color-neutral));--percentage-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:hsl(var(--med-color-feedback));--percentage-color:hsl(var(--med-color-feedback))}";

const mdProgressBarMedCss = ":host{--background:transparent;--progress-background:hsl(var(--med-color-brand-4));--buffer-background:transparent;--color-label-skin:hsl(var(--med-color-brand-4));--color-progress-skin:hsl(var(--med-color-brand-4));--progress-correct-background:hsl(var(--med-color-fb-success));--percentage-color:hsl(var(--med-color-neutral-10));--height:8px;display:block;position:relative;contain:strict;overflow:hidden;width:100%;height:var(--height)}.progress-container{display:-ms-flexbox;display:flex;border-radius:100px;background-color:var(--background)}:host(.in-med-header) .progress-container{background:hsl(var(--med-color-neutral-8));border-radius:0}:host(.in-med-header) .progress{border-top-left-radius:0;border-bottom-left-radius:0}:host(.in-med-header) .progress__percentage{display:none}:host(.in-med-header) .progress--correct{background:hsl(var(--med-color-brand-4));border-top-right-radius:0;border-bottom-right-radius:0}.progress{width:100%;height:100%;border-radius:100px;height:var(--height);background:var(--progress-background)}.progress__percentage{font-size:var(--med-font-size-nano);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);color:var(--percentage-color);margin-left:var(--med-spacing-inline-xxxs);display:none}.progress--correct{background:var(--progress-correct-background)}:host(.percentage) .progress__percentage{display:block}:host(.med-color){--progress-background:hsl(var(--med-color-4))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback))}:host(.med-progress-bar--minimalist){--background:hsl(var(--med-color-brand-1));--progress-correct-background:hsl(var(--med-color-brand-4));--height:4px}:host(.med-progress-bar--minimalist) .progress{border-radius:0}:host(.med-progress-bar--minimalist) .progress__percentage{display:none}:host(.med-progress-bar--minimalist) .progress-container{border-radius:0}:host(.med-color.med-progress-bar--minimalist){--background:hsl(var(--med-color-1));--progress-correct-background:hsl(var(--med-color-4))}:host(.med-color-neutral.med-progress-bar--minimalist){--background:transparent;--progress-correct-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-progress-bar--minimalist){--background:transparent;--progress-correct-background:hsl(var(--med-color-feedback))}:host(.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:var(--color-progress-skin);--percentage-color:var(--color-label-skin);--height:10px}:host(.med-progress-bar--skin) .progress-container{width:96%}:host(.med-progress-bar--skin) .progress__percentage{position:absolute;right:0px}:host(.med-color.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:hsl(var(--med-color-4));--percentage-color:hsl(var(--med-color-4))}:host(.med-color-neutral.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:hsl(var(--med-color-neutral));--percentage-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-progress-bar--skin){--background:hsl(var(--med-color-neutral-2));--progress-background:hsl(var(--med-color-feedback));--percentage-color:hsl(var(--med-color-feedback))}";

const ProgressBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
      * Esconde ou mostra a porcentagem.
      */
    this.percentage = false;
    /**
     * The state of the progress bar, based on if the time the process takes is known or not.
     * Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).
     */
    this.type = 'determinate';
    /**
     * If true, reverse the progress bar direction.
     */
    this.reversed = false;
    /**
     * The value determines how much of the active bar should display when the
     * `type` is `"determinate"`.
     * The value should be between [0, 1].
     */
    this.value = 0;
    /**
     * If the buffer and value are smaller than 1, the buffer circles will show.
     * The buffer should be between [0, 1].
     */
    this.buffer = 1;
  }
  render() {
    const { dsColor, type, reversed, value, buffer, percentage, dsName } = this;
    const paused = ionicGlobal.config.getBoolean('_testing');
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: medTheme.generateMedColor(dsColor, {
        [mode]: true,
        'med-progress-bar': true,
        [`med-progress-bar--${dsName}`]: dsName !== undefined,
        [`progress-bar-${type}`]: true,
        'percentage': percentage,
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
  const finalValue = value !== 0 ? (value * 100) : 8;
  const unit = value !== 0 ? '%' : 'px';
  const finalBuffer = helpers.clamp(0, buffer, 1);
  const renderedNumber = value * 100;
  return [
    index.h("div", { class: "progress-container" }, index.h("div", { part: "progress", class: `progress ${finalValue === 100 ? 'progress--correct' : ''}`, style: { width: `${finalValue}${unit}` } }), index.h("span", { class: "progress__percentage" }, renderedNumber.toFixed(), "%")),
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
