/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const tpChartBarCss = ".sc-tp-chart-bar-h{--background:hsl(var(--med-color-neutral-2));--label-color:hsl(var(--med-color-neutral-95))}.med-color.sc-tp-chart-bar-h{--label-color:hsl(var(--med-color-4))}.med-color-neutral.sc-tp-chart-bar-h{--label-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-tp-chart-bar-h{--label-color:hsl(var(--med-color-feedback))}.sc-tp-chart-bar-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;--label-size:10px;--height:200px;--value-bar:0%;--value-marker:0%;--display-marker:initial;--opacity:1}.tp-chart-bar__bar-container.sc-tp-chart-bar{position:relative;background:var(--background);height:var(--height);width:8px;margin:0 auto;border-radius:4px}.tp-chart-bar__bar.sc-tp-chart-bar{position:absolute;bottom:0;left:0;width:100%;height:0%;border-radius:4px;background:var(--color-bar);-webkit-animation:load-bar 1s forwards ease-in-out;animation:load-bar 1s forwards ease-in-out}.tp-chart-bar__bar[class^=\"tp-chart-bar__bar med-color\"].sc-tp-chart-bar{--color-bar:hsl(var(--med-color-4))}.tp-chart-bar__bar[class^=\"tp-chart-bar__bar med-color-neutral\"].sc-tp-chart-bar{--color-bar:hsl(var(--med-color-neutral))}.tp-chart-bar__bar[class^=\"tp-chart-bar__bar med-color-fb\"].sc-tp-chart-bar{--color-bar:hsl(var(--med-color-feedback))}.tp-chart-bar__marker.sc-tp-chart-bar{position:absolute;left:0;bottom:var(--value-marker);display:var(--display-marker);width:24px;height:6px;-webkit-transform:translate(-8px, 50%);transform:translate(-8px, 50%);border-radius:3px;background:var(--color-marker)}.tp-chart-bar__marker[class^=\"tp-chart-bar__marker med-color\"].sc-tp-chart-bar{--color-marker:hsl(var(--med-color-4))}.tp-chart-bar__marker[class^=\"tp-chart-bar__marker med-color-neutral\"].sc-tp-chart-bar{--color-marker:hsl(var(--med-color-neutral))}.tp-chart-bar__marker[class^=\"tp-chart-bar__marker med-color-fb\"].sc-tp-chart-bar{--color-marker:hsl(var(--med-color-feedback))}.tp-chart-bar__label.sc-tp-chart-bar{margin-top:10px;font-size:var(--label-size);line-height:1;color:var(--label-color) !important}.tp-chart-bar--no-marker.sc-tp-chart-bar-h{--display-marker:none}.tp-chart-bar--secondary.sc-tp-chart-bar-h{--background:hsl(var(--med-color-neutral-3))}.tp-chart-bar--deactivated.sc-tp-chart-bar-h{--background:hsl(var(--med-color-neutral-15))}.tp-chart-bar--deactivated.sc-tp-chart-bar-h .tp-chart-bar__bar.sc-tp-chart-bar{--color-bar:hsl(var(--med-color-neutral-5))}@-webkit-keyframes load-bar{from{height:0%}to{height:var(--value-bar)}}@keyframes load-bar{from{height:0%}to{height:var(--value-bar)}}";

const TpChartBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.dsName = undefined;
    this.label = undefined;
    this.labelSize = 10;
    this.height = 200;
    this.bar = {
      color: "med-color-brand-4",
      value: 0,
    };
    this.hasMarker = false;
    this.deactivated = false;
    this.marker = {
      color: "med-color-fb-caution",
      value: 0,
    };
  }
  render() {
    const { dsColor, dsName, label, labelSize, height, bar, hasMarker, deactivated, marker, } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        "tp-chart-bar": true,
        "tp-chart-bar--no-marker": !hasMarker,
        "tp-chart-bar--secondary": dsName === "secondary",
        "tp-chart-bar--deactivated": deactivated,
      }), style: {
        "--label-size": `${labelSize}px`,
        "--height": `${height}px`,
        "--value-bar": `${bar.value}%`,
        "--value-marker": `${marker.value}%`,
      } }, index.h("div", { class: "tp-chart-bar__bar-container" }, index.h("div", { class: { "tp-chart-bar__bar": true, [bar.color]: true } }), index.h("div", { class: { "tp-chart-bar__marker": true, [marker.color]: true } })), label && (index.h("ion-label", { class: "tp-chart-bar__label", "ds-color": "neutral-95" }, label))));
  }
  get host() { return index.getElement(this); }
};
TpChartBar.style = tpChartBarCss;

exports.tp_chart_bar = TpChartBar;
