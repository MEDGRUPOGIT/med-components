/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medChartBarHorizontalCss = ".sc-med-chart-bar-horizontal-h{--track-background:hsl(var(--med-color-neutral-1));--progress-background:hsl(var(--med-color-brand-4));--label-color:hsl(var(--med-color-brand-4));--border-radius:4px;--height:8px}.sc-med-chart-bar-horizontal-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-chart-bar-horizontal__container.sc-med-chart-bar-horizontal{position:relative;width:100%;border-radius:var(--border-radius);overflow:hidden;margin-right:12px}.med-chart-bar-horizontal__progress.sc-med-chart-bar-horizontal,.med-chart-bar-horizontal__track.sc-med-chart-bar-horizontal{-webkit-transform-origin:left;transform-origin:left;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear;height:var(--height);border-radius:var(--border-radius)}.med-chart-bar-horizontal__progress.sc-med-chart-bar-horizontal{background:var(--progress-background);-webkit-transform:translate(calc(var(--progress) * 1%));transform:translate(calc(var(--progress) * 1%));position:absolute;right:0;left:0;-webkit-animation:start 300ms linear forwards;animation:start 300ms linear forwards;top:0}.med-chart-bar-horizontal__track.sc-med-chart-bar-horizontal{background:var(--track-background)}.med-chart-bar-horizontal__label.sc-med-chart-bar-horizontal{--color:var(--label-color);--font-size:10px;--font-weight:600;--line-height:12px;text-align:right;white-space:nowrap}label.sc-med-chart-bar-horizontal-h .med-chart-bar-horizontal__container.sc-med-chart-bar-horizontal{width:calc(100% - 62px)}.med-color.sc-med-chart-bar-horizontal-h{--progress-background:hsl(var(--med-color-4));--label-color:hsl(var(--med-color-4))}.med-color-neutral.sc-med-chart-bar-horizontal-h{--progress-background:hsl(var(--med-color-neutral));--label-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chart-bar-horizontal-h{--progress-background:hsl(var(--med-color-feedback));--label-color:hsl(var(--med-color-feedback))}.med-chart-bar-horizontal--md.sc-med-chart-bar-horizontal-h{--border-radius:6px;--height:12px}.med-chart-bar-horizontal--md.sc-med-chart-bar-horizontal-h .med-chart-bar-horizontal__label.sc-med-chart-bar-horizontal{--font-size:12px;--font-weight:600;--line-height:12px;min-width:48px}.med-chart-bar-horizontal--spill.sc-med-chart-bar-horizontal-h .med-chart-bar-horizontal__progress.sc-med-chart-bar-horizontal{background-image:linear-gradient(-45deg, hsl(var(--med-color-brand-4)) 50%, hsl(var(--med-color-neutral-2), 0.2) 50%, hsl(var(--med-color-neutral-2), 0.2) 75%, hsl(var(--med-color-brand-4)) 75%, hsl(var(--med-color-brand-4)) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%);background-size:24.04px 24.04px}.med-color.med-chart-bar-horizontal--spill.sc-med-chart-bar-horizontal-h .med-chart-bar-horizontal__progress.sc-med-chart-bar-horizontal{--label-color:hsl(var(--med-color-4));background-image:linear-gradient(-45deg, hsl(var(--med-color-4)) 50%, hsl(var(--med-color-neutral-2), 0.2) 50%, hsl(var(--med-color-neutral-2), 0.2) 75%, hsl(var(--med-color-4)) 75%, hsl(var(--med-color-4)) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%)}.med-color-neutral.med-chart-bar-horizontal--spill.sc-med-chart-bar-horizontal-h .med-chart-bar-horizontal__progress.sc-med-chart-bar-horizontal{--label-color:hsl(var(--med-color-neutral));background-image:linear-gradient(-45deg, hsl(var(--med-color-neutral)) 50%, hsl(var(--med-color-neutral-2), 0.2) 50%, hsl(var(--med-color-neutral-2), 0.2) 75%, hsl(var(--med-color-neutral)) 75%, hsl(var(--med-color-neutral)) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%)}.med-color-feedback.med-chart-bar-horizontal--spill.sc-med-chart-bar-horizontal-h .med-chart-bar-horizontal__progress.sc-med-chart-bar-horizontal{--label-color:hsl(var(--med-color-feedback));background-image:linear-gradient(-45deg, hsl(var(--med-color-feedback)) 50%, hsl(var(--med-color-neutral-2), 0.2) 50%, hsl(var(--med-color-neutral-2), 0.2) 75%, hsl(var(--med-color-feedback)) 75%, hsl(var(--med-color-feedback)) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%, hsl(var(--med-color-neutral-2), 0.2) 100%)}@-webkit-keyframes start{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(calc(var(--progress) * 1%));transform:translateX(calc(var(--progress) * 1%))}}@keyframes start{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(calc(var(--progress) * 1%));transform:translateX(calc(var(--progress) * 1%))}}";

const MedChartBarHorizontal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.dsSize = undefined;
    this.label = true;
    this.hideValue = false;
    this.value = 0;
    this.labelContent = undefined;
  }
  render() {
    const { dsColor, hideValue, dsSize, label, value, labelContent } = this;
    let progressClass, progressWidth;
    if (value > 100) {
      progressClass = 'med-chart-bar-horizontal--spill';
      progressWidth = 100;
    }
    else if (value === 100) {
      progressWidth = 100;
      progressClass = 'med-chart-bar-horizontal--full';
    }
    else {
      progressWidth = value;
      progressClass = '';
    }
    return (h(Host, { class: generateMedColor(dsColor, {
        [`med-chart-bar-horizontal ${progressClass}`]: true,
        [`med-chart-bar-horizontal--${dsSize}`]: dsSize !== undefined,
      }), "aria-valuenow": value, "aria-valuemin": "0", "aria-valuemax": "1", role: "progressbar" }, h("div", { class: "med-chart-bar-horizontal__container" }, h("div", { class: "med-chart-bar-horizontal__progress", style: { '--progress': `${progressWidth === 0 ? -99 : progressWidth - 100}` } }), h("div", { class: "med-chart-bar-horizontal__track" })), label && h("med-type", { class: "med-chart-bar-horizontal__label" }, !hideValue ? `${value}%` : '', labelContent)));
  }
};
MedChartBarHorizontal.style = medChartBarHorizontalCss;

export { MedChartBarHorizontal as med_chart_bar_horizontal };
