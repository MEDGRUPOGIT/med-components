/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { c as config, b as getIonMode } from './ionic-global-e35a57a3.js';
import { j as clamp } from './helpers-d6be6e4a.js';
import { g as generateMedColor } from './color-2567dca3.js';
import { h as hostContext } from './theme-a24ff1ad.js';

const iosProgressBarMedCss = ":host{--background:hsl(var(--med-color-brand-1));--progress-background:hsl(var(--med-color-brand-4));--buffer-background:transparent;--progress-correct-background:hsl(var(--med-color-fb-success));--height:4px;display:block;position:relative;contain:strict;overflow:hidden;width:100%;height:var(--height)}.progress-container{display:-ms-flexbox;display:flex;background-color:var(--background)}:host(.in-med-header) .progress-container{background:hsl(var(--med-color-neutral-8));border-radius:0}:host(.in-med-header) .progress--correct{background:hsl(var(--med-color-brand-4))}.progress{width:100%;height:100%;height:var(--height);background:var(--progress-background)}.progress--correct{background:var(--progress-correct-background)}:host(.med-color){--progress-background:hsl(var(--med-color-4));--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral));--background:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback));--background:hsl(var(--med-color-feedback-contrast))}";

const mdProgressBarMedCss = ":host{--background:hsl(var(--med-color-brand-1));--progress-background:hsl(var(--med-color-brand-4));--buffer-background:transparent;--progress-correct-background:hsl(var(--med-color-fb-success));--height:4px;display:block;position:relative;contain:strict;overflow:hidden;width:100%;height:var(--height)}.progress-container{display:-ms-flexbox;display:flex;background-color:var(--background)}:host(.in-med-header) .progress-container{background:hsl(var(--med-color-neutral-8));border-radius:0}:host(.in-med-header) .progress--correct{background:hsl(var(--med-color-brand-4))}.progress{width:100%;height:100%;height:var(--height);background:var(--progress-background)}.progress--correct{background:var(--progress-correct-background)}:host(.med-color){--progress-background:hsl(var(--med-color-4));--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--progress-background:hsl(var(--med-color-neutral));--background:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--progress-background:hsl(var(--med-color-feedback));--background:hsl(var(--med-color-feedback-contrast))}";

const ProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.type = 'determinate';
    this.reversed = false;
    this.value = 0;
    this.buffer = 1;
    this.color = undefined;
  }
  render() {
    const { dsColor, type, reversed, value, buffer } = this;
    const paused = config.getBoolean('_testing');
    const mode = getIonMode(this);
    return (h(Host, { role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: generateMedColor(dsColor, {
        [mode]: true,
        'med-progress-bar': true,
        [`progress-bar-${type}`]: true,
        'progress-paused': paused,
        'progress-bar-reversed': document.dir === 'rtl' ? !reversed : reversed,
        'in-med-header': hostContext('med-header', this.el),
      }) }, type === 'indeterminate'
      ? renderIndeterminate()
      : renderProgress(value, buffer)));
  }
  get el() { return getElement(this); }
};
const renderIndeterminate = () => {
  return (h("div", { part: "track", class: "progress-buffer-bar" }, h("div", { class: "indeterminate-bar-primary" }, h("span", { part: "progress", class: "progress-indeterminate" })), h("div", { class: "indeterminate-bar-secondary" }, h("span", { part: "progress", class: "progress-indeterminate" }))));
};
const renderProgress = (value, buffer) => {
  const finalValue = value !== 0 ? (value * 100) : 1;
  const unit = value !== 0 ? '%' : 'px';
  const finalBuffer = clamp(0, buffer, 1);
  return [
    h("div", { class: "progress-container" }, h("div", { part: "progress", class: `progress ${finalValue === 100 ? 'progress--correct' : ''}`, style: { width: `${finalValue}${unit}` } })),
    /**
     * Buffer circles with two container to move
     * the circles behind the buffer progress
     * with respecting the animation.
     * When finalBuffer === 1, we use display: none
     * instead of removing the element to avoid flickering.
     */
    h("div", { class: { 'buffer-circles-container': true, 'ion-hide': finalBuffer === 1 }, style: { transform: `translateX(${finalBuffer * 100}%)` } }, h("div", { class: "buffer-circles-container", style: { transform: `translateX(-${finalBuffer * 100}%)` } }, h("div", { part: "stream", class: "buffer-circles" }))),
    h("div", { part: "track", class: "progress-buffer-bar", style: { transform: `translateX(${finalBuffer})` } }),
  ];
};
ProgressBar.style = {
  ios: iosProgressBarMedCss,
  md: mdProgressBarMedCss
};

export { ProgressBar as ion_progress_bar };
