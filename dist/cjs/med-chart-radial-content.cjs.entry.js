/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medChartRadialContentCss = ":host{--color:hsl(var(--med-color-neutral-10));--font-size-label:10px;--font-size-number:24px}:host(.med-chart-radial-content){text-align:center}:host(.med-chart-radial-content) .med-chart-radial-content__label{font-size:var(--font-size-label);color:var(--color);font-weight:700;display:-ms-flexbox;display:flex;padding-bottom:2px;-ms-flex-pack:center;justify-content:center;line-height:100%}:host(.med-chart-radial-content) .med-chart-radial-content__number{font-weight:700;font-size:var(--font-size-number);color:var(--color);line-height:100%}:host(.med-chart-radial-content) .med-chart-radial-content__number--small{font-size:16px}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){color:hsl(var(--med-color-feedback))}:host(.med-chart-radial-content--lg){--font-size-label:12px;--font-size-number:32px}";

const MedChartRadialContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.total = 0;
    this.dsColor = undefined;
    this.dsSize = undefined;
  }
  componentDidRender() {
    this.fontResize();
  }
  collapsedChanged() {
    this.fontResize();
  }
  fontResize() {
    if (this.total.toString().length >= 6) {
      return 'med-chart-radial-content__number--small';
    }
    return '';
  }
  render() {
    const { total, dsColor, dsSize } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-chart-radial-content': true,
        [`med-chart-radial-content--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("span", { class: "med-chart-radial-content__label" }, "Total de"), index.h("span", { class: `med-chart-radial-content__number ${this.fontResize()}` }, total), index.h("span", { class: "med-chart-radial-content__label" }, "Quest\u00F5es")));
  }
  static get watchers() { return {
    "total": ["collapsedChanged"]
  }; }
};
MedChartRadialContent.style = medChartRadialContentCss;

exports.med_chart_radial_content = MedChartRadialContent;
